import { ProxyState } from "../AppState.js";
import { myPokeService } from "../Services/MyPokeService.js";
import { Pop } from "../Utils/Pop.js";

function _drawMyPokemon() {
  let template = '';
  ProxyState.myPokemon.forEach(
    (p) =>
      (template += /*html*/ `<li class="selectable" onclick="app.myPokeController.setActivePokemon('${p.url}')">${p.name}</li>`)
  );
  document.getElementById("my-pokemon").innerHTML = template;
}

function _drawBenched() {
  let total = ProxyState.myPokemon.length;
  let benchedTotal = ProxyState.myPokemon.filter((p) => p.benched).length;
  document.getElementById("total").innerText = total.toString();
  document.getElementById("benched").innerText = benchedTotal.toString();
}

export class MyPokeController {
  constructor() {
    this.getMyPokemon();
    ProxyState.on("myPokemon", _drawMyPokemon);
    ProxyState.on("myPokemon", _drawBenched);
  }

  async removePoke(pokeId) {
      try {
          const removedPoke = await myPokeService.removePoke(pokeId)
          Pop.toast(`${removedPoke.name} has been killed! You monster.`, 'success')
      } catch (error) {
          Pop.toast(error.message, 'error')
          
      }
  }

  setActivePokemon(pokeId) {
    try {
      myPokeService.setActivePokemon(pokeId);
      bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("my-pokemon-offcanvas")
      ).toggle();
    } catch (error) {
      Pop.toast(error.message, "error");
    }
  }
  async getMyPokemon() {
    try {
      await myPokeService.getMyPokemon();
    } catch (error) {
      Pop.toast(error.message, "error");
    }
  }
  async addPokemon() {
    try {
      const newPokemon = await myPokeService.addPokemon()
      Pop.toast(`${newPokemon.name} was caught!`, "success")
    } catch (error) {
      Pop.toast(`Oh no! ${newPokemon.name} escaped!`, "error")
    }
  }
}
