import Controller from '../interfaces/controller.interface';
import {Request,Response,NextFunction,Router} from "express";

let testArr=[1,2,3,4,5,6,7,8,9,10];

class PostController implements Controller {
    public path ='/api/post';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/latest`,this.getAll);
        this.router.get(`${this.path}s`,this.getAll);
        this.router.post(`${this.path}`,this.addData);
        this.router.delete(`${this.path}s`,this.deleteAll);

        this.router.get(`${this.path}/:id`,this.getSinglePost);
        this.router.post(`${this.path}`,this.addData);
        this.router.delete(`${this.path}/:id`,this.deleteSinglePost);
        this.router.get(`${this.path}s/:num`,this.getNElements);
    }

    private getAll = async (request: Request,response: Response, next: NextFunction)=>{
        response.status(200).json(testArr);
    }

    private getSinglePost = async (request: Request,response: Response, next: NextFunction)=>{
        const id = parseInt(request.params.id, 10);

        response.status(200).json(testArr[id]);
    }

    private getNElements = async (request: Request,response: Response, next: NextFunction)=>{
        const N = parseInt(request.params.num, 10);

        response.status(200).json(testArr.slice(0,N));
    }

    private deleteSinglePost = async (request: Request,response: Response, next: NextFunction)=>{
        const id = parseInt(request.params.id, 10);
        testArr.splice(id-1,1)
        response.status(200).json(testArr);
    }

    private deleteAll = async (request: Request,response: Response, next: NextFunction)=>{
        testArr =[];
        response.status(200).json(testArr);
    }

    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const { elem } = request.body;
        testArr.push(elem)

        response.status(200).json(testArr)
    };

    }

export default PostController;