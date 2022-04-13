export class Pokemon {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.sprites = data.sprites.front_default
        this.types = data.types
        this.stats = data.stats
    }


    get Template(){
   return /*html*/ `
        <div>
<h1>${this.name}</h1>


        </div>
        `
    }
}