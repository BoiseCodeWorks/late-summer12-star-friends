import PeoplesController from "./Controllers/PeoplesController.js";

class App {
  peoplesController = new PeoplesController()
}

window["app"] = new App();
