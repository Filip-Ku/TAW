import {IData,Query} from "../models/data.model"
import PostModel from "../schemas/data.schema"
import Joi from "joi";



class DataService {
    public async createPost(postParams: IData) {
        try {
            const dataModel = new PostModel(postParams);
            await dataModel.save();
        } catch (error) {
            console.error('Wystąpił błąd podczas tworzenia danych:', error);
            throw new Error('Wystąpił błąd podczas tworzenia danych');
        }
    }

    public async query(query: Query<number | string | boolean>) {
        try {
            const result = await PostModel.find(query, {__v: 0, _id: 0});
            return result;
        } catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }

    public async deleteData(query: Query<number | string | boolean>) {
        try {
            await PostModel.deleteMany(query);
        } catch (error) {
            console.error("Wystąpił błąd podczas usuwania danych:", error);
            throw new Error(("Wystąpił błąd podczas usuwania danych"));
        }
    }

    public async getByID(query: Query<number | string | boolean>) {
        try {
            const post = await PostModel.find(query);
            if (!post) {
                throw new Error("Post not found");
            }
            return post;
        } catch (error) {
            console.error("Wystąpił błąd podczas pobierania danych:", error);
            throw new Error("Wystąpił błąd podczas pobierania danych");
        }
    }

   public async deleteByID(query: Query<string | number | boolean>) {
       try {
           const result = await PostModel.deleteOne(query);
           return result;
       } catch (error) {
           throw new Error(`Query failed: ${error}`);
       }
   }

    public async deleteAllPosts() {
        try {
            await PostModel.deleteMany();
        } catch (error) {
            console.error("Wystąpił błąd podczas usuwania danych:", error);
            throw new Error(("Wystąpił błąd podczas usuwania danych"));
        }
    }

    public async getAll(){
        try {
            const result = await PostModel.find();
            return result;
        } catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }

}

export default DataService;