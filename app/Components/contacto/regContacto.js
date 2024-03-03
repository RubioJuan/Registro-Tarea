export class RegContacto extends HTMLElement{
   constructor(){
       super();
       this.render();
   }
   render(){
       this.innerHTML = /* html*/`
       <style rel="stylesheet">
         @import "./app/Components/contacto/contactoStyle.css";
       </style>;
       ` 
   }
  }
  customElements.define("reg-contacto",RegContacto);