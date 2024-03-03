export class contactoComponent extends HTMLElement{
   constructor(){
       super();
       this.render();
   }
   render(){
       this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "./app/Components/contacto/contactoStyle.css";
            </style>
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
       ` 
   }
}

customElements.define("contacto-component", contactoComponent);