import express from 'express';
import { Request, Response, NextFunction } from 'express';

import { config } from './config';
import Controller from './interfaces/controller.interface';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);

        this.connectToDatabase();
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private initializeMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(this.logger);
        this.initializeCors();
    }

    private initializeCors(): void {
        this.app.use(cors({
            origin: 'http://localhost:4200',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true
        }));
    }

    private logger = (req: Request, res: Response, next: NextFunction): void => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    }

    public listen(): void {
        this.app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}`);
        });
    }

    private async connectToDatabase(): Promise<void> {
        try {
            await mongoose.connect(config.databaseUrl);
            console.log('Connection with database established');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }

        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });

        process.on('SIGTERM', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });
    }
}

export default App;
