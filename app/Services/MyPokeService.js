import { ProxyState } from "../AppState.js";
import { Pokemon} from "../Models/Pokemon.js"
import {sandboxApi} from "../Services/AxiosService.js"

class MyPokeService{
setActivePokemon(pokeId){
    const activePokemon = ProxyState.myPokemon.find(p => p.id == pokeId)
    ProxyState.activePokemon = activePokemon
}
async getMyPokemon(){
    
}
}
export const myPokeService = new MyPokeService()