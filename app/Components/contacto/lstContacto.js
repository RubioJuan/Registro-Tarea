export class LstContacto extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "./app/Components/contacto/contactoStyle.css";
            </style>
            <div class="card mt-3">
                <div class="card-header">
                    Lista de Tareas
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With sltent.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>    
            </div>
            `
    }
}
customElements.define("lst-contacto",LstContacto);