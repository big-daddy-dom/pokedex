export class Pokemon {
  constructor(data) {
    this.pokemon=data.pokemon
    this.id = data.id
    this.index = data.index
    this.name = data.name
    this.url = data.url
    this.sprite = data.sprites.front_default

    this.benched = data.benched || false
      
  }

  get Template() {
    return /*html*/ `
    <li id="active-pokemon">${this.name}<img src="'${this.sprite}'" alt=""> </li>
       
        `

  }
  get Buttons() {
    if (this.id) {
      return /*html*/ `
          <div class="d-flex align-items-center justify-content-between p-2">
            <button class="btn btn-danger" onclick="app.myPokeController.removePokemon('${this.name}')">Remove Pokemon</button>
           
          </div>
          <input class="form-check-input" type="checkbox" value="" id="myPokemon" ${this.benched ? 'checked' : ''}  onclick="app.myPokeController.benchPokemon()">
          <label class="form-check-label" for="myPokemon">benched</label>
        </div>
      </div>
    
          `
    }
    return /*html*/ `<button class="btn btn-success" onclick="app.myPokeController.addPokemon()">Add Pokemon</button>`
  }
}
