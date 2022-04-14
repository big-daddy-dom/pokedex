export class Pokemon {
  constructor(data) {
    
    this.name = data.name;
    this.url = data.url;
    
 
  }

  get Template() {
    return /*html*/ `
        <div class="bg-secondary rounded p-3">
<h1>${this.name}</h1>

</div>


       
        `;
  }
  get Buttons() {
    if (this.url) {
      return /*html*/ `
          <div class="d-flex align-items-center justify-content-between p-2">
            <button class="btn btn-danger" onclick="app.myPokemonController.removePokemon('${this.url}')">Remove Pokemon</button>
           
          </div>
    
          `;
    }
    return /*html*/ `<button class="btn btn-success" onclick="app.myPokemonController.addPokemon()">Add Pokemon</button>`;
  }
}
