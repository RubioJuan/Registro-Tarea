export class RegContacto extends HTMLElement{
   constructor(){
       super();
       this.render();
       this.saveData();
       this.enabledBtns();
       this.disableFrm(true);
   }
   render(){
       this.innerHTML = /* html*/ `
       <style rel="stylesheet">
         @import "./app/Components/contacto/contactoStyle.css";
       </style>
          <div class="card mt-3">
              <div class="card-header">
                Registro de Tareas
              </div>
              <div class="card-body">
                <form id="frmDataTarea">  
                      <div class="row">
                        <div class="col">
                          <label for="nombreContacto" class="form-label">Nombre de la Tarea</label>
                          <input type="text" class="form-control" id="nombreContacto" name="nombreContacto" placeholder="Escribir...">
                        </div>
                        <div class="col">
                          <label for="fechaInicio" class="form-label">Fecha Inicio</label>
                          <input type="date" class="form-control" id="fechaInicio" name="fechaInicio">
                        </div>  
                      </div>
                      <div class="row">
                        <div class="col">
                          <label for="fechaFinal" class="form-label">Fecha Final</label>
                          <input type="date" class="form-control" id="fechaFinal" name="fechaFinal" >
                        </div>
                        <div class="col">
                          <label for="descripcionTarea" class="form-label">Descripcion de la Tarea</label>
                          <input type="text" class="form-control" id="descripcionTarea" name="descripcionTarea" placeholder="Escribir...">
                        </div>
                        <div class="col">
                          <label for="clasificacionTarea" class="form-label">Clasificacion</label>
                          <input type="multiple" class="form-control" id="clasificacionTarea" name="clasificacionTarea" placeholder="Elegir..."
                          multiple
                          list="drawfemails"
                          required
                          size="64">
                          <datalist id="drawfemails">
                            <option value="Difícil"></option>
                            <option value="Fácil"></option>
                          </datalist>
                        </div>    
                      </div>                      
                      <div class="row mt-3">
                        <div class="col">
                          <div class="container mt-4 text-center">
                            <a href="#" class="btn btn-primary"  id="btnNuevo" data-ed='[["#btnGuardar","#btnCancelar"],["#btnNuevo","#btnEditar","#btnEliminar"]]'>Nueva Tarea</a>
                            <a href="#" class="btn btn-dark " id="btnCancelar" data-ed='[["#btnNuevo"],["#btnGuardar","#btnEditar","#btnEliminar","#btnCancelar"]]'>Cancelar Tarea</a>
                            <a href="#" class="btn btn-success" id="btnGuardar" data-ed='[["#btnEditar","#btnCancelar","#btnNuevo","#btnEliminar"],["#btnGuardar"]]'>Guardar Tarea</a>
                            <a href="#" class="btn btn-warning" id="btnEditar" data-ed='[[],[]]'>Editar</a>
                            <a href="#" class="btn btn-danger" id="btnEliminar" data-ed='[["#btnNuevo"],["#btnGuardar","#btnEditar","#btnEliminar","#btnCancelar"]]'>Eliminar Tarea</a>
                          </div>
                        </div>
                    </div>  
                </form>
              </div>
          </div>
      `;
      this.querySelector("#btnNuevo").addEventListener("click",(e) =>{
        this.ctrlBtn(e.target.dataset.ed);
        this.disableFrm(false);
      })
      this.querySelector("#btnCancelar").addEventListener("click",(e) =>{
        this.ctrlBtn(e.target.dataset.ed);
        this.disableFrm(true);
      })
  }
ctrlBtn = (e) =>{
    let data = JSON.parse(e);
    data[0].forEach(boton => {
        let btnActual = document.querySelector(boton);
        btnActual.classList.remove('disabled');
    });
    data[1].forEach(boton => {
        let btnActual = document.querySelector(boton);
        btnActual.classList.add('disabled');
    });
}
enabledBtns =() =>{
  document.querySelectorAll(".btn").forEach((val, id) => {
      this.ctrlBtn(val.dataset.ed);
  })
}
saveData = () =>{
      const frmRegistro = document.querySelector('#frmDataTarea')
      document.querySelector('#btnGuardar').addEventListener("click",(e) =>{
        const datos = Object.fromEntries(new FormData(frmRegistro).entries());
        console.log(datos)
        // postProducts(datos);
        e.stopImmediatePropagation();
        e.preventDefault();
      })
    }
disableFrm = (estado) =>{
  let frm={
    nombreContacto: '',
    fechaInicio: '',
    fechaFinal: '',
    descripcionTarea: '',
    clasificacionTarea: '' 
  }
    const frmRegistro = document.querySelector('#frmDataTarea');
    let myFrm = new FormData();
    Object.entries(frm).forEach(([key, value]) => myFrm.append(key, value));
    myFrm.forEach((value, key) =>{
      frmRegistro.elements[key].value= value;
      frmRegistro.elements[key].disabled = estado;
    })

  }
}
  customElements.define("reg-contacto",RegContacto);