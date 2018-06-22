var miApp={};

miApp=(function () {
    
var miform=document.getElementById('miform');
var milista=document.getElementById('miLista');
var mibusqueda=document.getElementById('txtBusqueda');

miform.addEventListener('submit', addItem);
milista.addEventListener('click', removeItem);
mibusqueda.addEventListener('keyup', filtrar);


function addItem(event) {

    // voy a añadir el texto
    event.preventDefault();
    var textovacio=document.getElementById('textovacio');
    if (textovacio!=null) {
        textovacio.remove();
    }
    /*
    if (textovacio.style.display!="none") {
        textovacio.style.display="none";
    }
    */
    var mivalor=document.getElementById('txtValor');
    var addDato=document.createElement('li');
    addDato.className='list-group-item';
    var miname=document.createAttribute("name");
    miname.value="nodo";
    addDato.setAttributeNode(miname);
    addDato.innerHTML=`${mivalor.value}<button class="btn btn-danger float-right" name="delete">x</button>`;

    // var  addDato=document.createElement(`<li class="list-group-item"></li>`);

    milista.appendChild(addDato);

    miform.reset();

    mostrarAlerta();
    

};


function mostrarAlerta() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
    x.innerHTML="Dato añadido correctamente";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
/*
function mostrarAlerta() {
    
    let alerta=document.createElement("div");
    alerta.className="alert alert-primary text-center";
    alerta.innerHTML="Insertado correctamente";

    let micontenedor=document.getElementById("contenedor");

    micontenedor.insertBefore(alerta,micontenedor.childNodes[0]);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

}
*/

function removeItem(e) {

    if (e.target.name==="delete") {
        e.target.parentElement.remove();
    }
    comprobarlistavacia();
};

function comprobarlistavacia(){

    
    var nodoslista=document.querySelector("[name='nodo']");
    
    if (nodoslista===null) {

        let textovacio=document.createElement("h4");
        let miid=document.createAttribute("id");

        miid.value="textovacio";
        textovacio.setAttributeNode(miid);

        textovacio.innerHTML="Lista vacía";

        milista.insertBefore(textovacio,milista.childNodes[0]);
        
    }

}


function filtrar(e) {

    var strBusqueda=e.target.value.toLowerCase();

    //if(strBusqueda!="")   {

       var lalista= milista.querySelectorAll("[name='nodo']");  
       
       lalista.forEach(element => {
           if (element.firstChild.textContent.toLocaleLowerCase().includes(strBusqueda)) {
                element.style.display='block';
           }else {
            element.style.display='none ';
           }
           //console.log(element.firstChild.textContent);


       });
    //}

};

}());



