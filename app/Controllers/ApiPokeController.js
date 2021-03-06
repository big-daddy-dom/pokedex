import { ProxyState } from "../AppState.js";
import { apiPokeService } from "../Services/ApiPokeService.js";
import { Pop } from "../Utils/Pop.js";
import { Pokemon } from "../Models/Pokemon.js";

function _drawPokemon() {
  let template = ''
  ProxyState.pokemon.forEach(
    (p =>
      template += /*html*/ `<li onclick="app.apiPokeController.setActivePokemon('${p.name}')" class="selectable">${p.name}</li>`)
  );
  document.getElementById("api-pokemon").innerHTML = template;
}
function _drawActivePokemon() {
  if (!ProxyState.activePokemon) {
    document.getElementById("active-pokemon").innerHTML = "";
  } else {
    document.getElementById("active-pokemon").innerHTML =
      ProxyState.activePokemon.Template;
  }
}

export class ApiPokeController {
  constructor() {
    this.getApiPokemon();
    ProxyState.on("pokemon", _drawPokemon);
    ProxyState.on("activePokemon", _drawActivePokemon);
  }
  async getApiPokemon() {
    try {
      await apiPokeService.getApiPokemon();
    } catch (error) {
      Pop.toast(error.message, "error");
      console.log(error)
    }
  }
  async setActivePokemon(pokeName) {
    try {
      await apiPokeService.setActivePokemon(pokeName);
      console.log(pokeName);
    } catch (error) {
      Pop.toast(error.message, "error");
      console.log(error)
    }
  }
}
