import { ProxyState } from "../AppState.js";
import { peoplesService } from "../Services/PeoplesService.js";

function _draw() {
  let people = ProxyState.people
  let template = ''
  people.forEach(p => template += p.Template)
  document.getElementById('people').innerHTML = template
}


export default class PeoplesController {
  constructor() {
    // REGISTER ALL LISTENERS
    ProxyState.on('people', _draw)

    // GET DATA FOR CONTROLLER
    peoplesService.getAllPeople()
  }
}