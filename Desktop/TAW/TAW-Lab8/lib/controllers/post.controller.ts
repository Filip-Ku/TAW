import Controller from '../interfaces/controller.interface';
import {Request,Response,NextFunction,Router} from "express";
import {checkPostCount} from "../middlewares/checkPostCount.middleware";
import DataService from "../modules/services/data.service";
import Joi from "joi";


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


    }


    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const {title, text, image} = request.body;

        const schema = Joi.object({
            title: Joi.string().required(),
            text:   Joi.string().required(),
            image: Joi.string().uri().required()
        });

        try {
            const validatedData = await schema.validateAsync({title,text,image});
            const newPost = await this.dataService.createPost(validatedData);
            response.status(201).json({
            id: newPost._id,
            title: newPost.title,
            text: newPost.text,
            image: newPost.image
        });        } catch (error) {
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