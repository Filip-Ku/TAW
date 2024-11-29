import Controller from '../interfaces/controller.interface';
import {Request,Response,NextFunction,Router} from "express";
import {checkPostCount} from "../middlewares/checkPostCount.middleware";
import DataService from "../modules/services/data.service";

let testArr=[1,2,3,4,5,6,7,8,9,10];

class PostController implements Controller {
    public path ='/api/post';
    public router = Router();
    private dataService: DataService;

    constructor() {
        this.initializeRoutes();
        this.dataService = new DataService();
    }

    private initializeRoutes(){
        //GET ALL
        this.router.get(`${this.path}/latest`,this.getAll);
        this.router.get(`${this.path}s`,this.getAll);

        //GET BY ID
        this.router.get(`${this.path}/:id`,this.getElementById);

        //ADD DATA
        this.router.post(`${this.path}`,this.addData);

        //DELETE ALL
        this.router.delete(`${this.path}s`,this.deleteAll);

        //DELETE SINGLE
        this.router.delete(`${this.path}/:id`,this.deleteById);


        this.router.get(`${this.path}s/:num`, checkPostCount, this.getNElements);
    }


    private getNElements = async (request: Request,response: Response, next: NextFunction)=>{
        const N = parseInt(request.params.num, 10);

        response.status(200).json(testArr.slice(0,N));
    }

    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const {title, text, image} = request.body;

        const readingData = {
            title,
            text,
            image};
        try {
            await this.dataService.createPost(readingData);
            response.status(200).json(readingData);
        } catch (error) {
            console.log('eeee', error)

            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({error: 'Invalid input data.'});
        }
    }

    private getAll = async (request: Request,response: Response, next: NextFunction)=>{
        try {
            const allData = await this.dataService.getAll();
            response.status(200).json(allData);
        } catch (error) {
            console.log('eeee', error)

            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({error: 'Invalid input data.'});
        }
    }


    private getElementById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const allData = await this.dataService.query({_id: id});
        response.status(200).json(allData);
    }

    private deleteById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const allData = await this.dataService.deleteByID({_id: id});
        response.status(200).json(allData);
    };

    private deleteAll = async (request: Request, response: Response, next: NextFunction) => {
        try {
            await this.dataService.deleteAllPosts();
            response.status(204).send();
        } catch (error) {
            next(error);
        }
    };

}

export default PostController;