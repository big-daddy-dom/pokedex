import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"



class ApiPokeService{
async setActivePokemon(pokeIndex){
const res = await pokeApi.get('pokemon/' )
console.log(res.data);
ProxyState.activePokemon = new Pokemon(res.data)
}


async getApiPokemon(){
    const res = await pokeApi.get('pokemon')
    console.log('api pokemon res', res.data);
    ProxyState.pokemon = res.data.results
}
}

export const apiPokeService = new ApiPokeService()