export class Pokemon {
  constructor(data) {
    this.url=data.url
    this.id = data.id
    this.name = data.name
 this.benched = data.benched || false
  }

  get Template() {
    return /*html*/ `
    <h1>${this.name}</h1>
       
        `

  }
  get Buttons() {
    if (this.id) {
      return /*html*/ `
          <div class="d-flex align-items-center justify-content-between p-2">
            <button class="btn btn-danger" onclick="app.myPokemonController.removePokemon('${this.id}')">Remove Pokemon</button>
           
          </div>
          <input class="form-check-input" type="checkbox" value="" id="myPokemon" ${this.benched ? 'checked' : ''}  onclick="app.myPokeController.benchPokemon()">
          <label class="form-check-label" for="myPokemon">benched</label>
        </div>
      </div>
    
          `;
    }
    return /*html*/ `<button class="btn btn-success" onclick="app.myPokemonController.addPokemon()">Add Pokemon</button>`;
  }
}
