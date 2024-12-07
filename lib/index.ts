import App from './app';
import IndexController from "./controllers/index.controller";
import PostController from "./controllers/post.controller";
import UserController from "./controllers/user.controller";

const app: App = new App([
   new UserController(),
   new IndexController()
]);

app.listen();