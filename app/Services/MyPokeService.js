import { ProxyState } from "../AppState.js";
import { Pokemon} from "../Models/Pokemon.js"
import {sandboxApi} from "../Services/AxiosService.js"

class MyPokeService{
    async benchPokemon(){
        let pokeEdit = ProxyState.activePokemon
        pokeEdit.benched = !pokeEdit.benched
        const res = await sandboxApi.put('dom/pokemon' + pokeEdit.id, pokeEdit)
        const pokeEditIndex = ProxyState.myPokemon.findIndex(p => p.id == res.data.id)
        const newPokemon = new Pokemon(res.data)
        ProxyState.myPokemon.splice(pokeEditIndex, 1, newPokemon)
        ProxyState.myPokemon = ProxyState.myPokemon
        return newPokemon
    }
    async removePoke(pokeId){
        await sandboxApi.delete('dom/pokemon/' + pokeId)
        ProxyState.activePokemon = null
        return ProxyState.myPokemon.find(p => p.id == pokeId)
    }
setActivePokemon(pokeId){
    const activePokemon = ProxyState.myPokemon.find(p => p.id == pokeId)
    ProxyState.activePokemon = activePokemon
}
async getMyPokemon(){
    const res = await sandboxApi.get('dom/pokemon')
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p)).sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1: 0
    })
    
}
async addPokemon(){
    const foundPoke = ProxyState.myPokemon.find(p => p.name == ProxyState.activePokemon.name)
    if (foundPoke) {
        throw new Error("no")
    }
    const res = await sandboxApi.post('dom/pokemon', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)].sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    })
    return res.data
}
}
export const myPokeService = new MyPokeService()