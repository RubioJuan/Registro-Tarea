export class DetContacto extends HTMLElement{
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
                    Calificar
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special</h5>
                    <p class="card-text">With</p>
                    <a href="#" class="btn btn-primary">Go</a>
                </div>    
            </div>
            `
    }
}
customElements.define("det-contacto",DetContacto);