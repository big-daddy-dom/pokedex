import { ApiPokeController} from "./Controllers/ApiPokeController.js";
import { MyPokeController} from "./Controllers/MyPokeController.js";
class App {
  myPokeController = new MyPokeController()
  apiPokeController = new ApiPokeController()
}

window["app"] = new App();
