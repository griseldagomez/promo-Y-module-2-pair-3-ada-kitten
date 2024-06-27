'use strict';

//EJERCICO 1 eliminamos las listas de html y la añadimos a variables de js, y luego las añadimos al ul de html
//EJERCICIO 4 sustituir con variables el contenido de las etiquetas de html que hemos guardado en variables en el ejercicio1. 

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
const kittenRace1 = "Siamés"

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp"
const kittenName2 = "Fiona";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "Sphynx";

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp"
const kittenName3 = "Cielo";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta. ";
const kittenRace3 = "Maine Coon";



const kittenOne = `<li class="card">
    <img
      class="card_img"
      src="${kittenImage1}"
      alt="siames-cat"
        />
    <h3 class="card_title">${kittenName1}</h3>
    <h4 class="card_race">${kittenRace1}</h4>
    <p class="card_description"> ${kittenDesc1}</p>
</li>`;



const kittenTwo = `<li class="card">
  <img class="card_img" src="${kittenImage2}" alt="sphynx-cat">
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">${kittenDesc2}</p>
</li>`;

const kittenThree = `<li class="card">        
  <img class="card_img" src="${kittenImage3}" alt="maine-coon-cat">
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">${kittenDesc3}</p>          
</li>`;

document.querySelector('.list').innerHTML = kittenOne + kittenTwo + kittenThree;

// EJERCICIO 2

// EJERCICIO 5 
//Crear funciones manejadoras para añadir al evento del boton del formulario 
const buttonPlus = document.querySelector('.js-btn-add');
const form = document.querySelector('.new-form');


function showNewCatForm() {
  form.classList.remove('collapsed');
} // esta funcion lo que hace es que el formulario aparezca
function hideNewCatForm() {
  form.classList.add('collapsed');
}// Esta funcion lo que hace es que dessaparezca el formulario

//esta es la funcion manejadora le estamos diciendo que ejecute con un condicional las funciones declaradas anteriomente: si el formulario contiene collapsed el form aparece y sino desaparece.
function handleClickNewCatForm (event){
  if (form.classList.contains('collapsed')) {
    showNewCatForm()
  } else {
    hideNewCatForm()
  }
} 
//el evento de click hace que cada ver que la usuaria hace click se ejecuta la funcion manejadora declarada anteriormente.
buttonPlus.addEventListener('click', handleClickNewCatForm);



  //form.classList.toggle('new-form');
  //Cambiamos form classList.add ('collapsed') por form.classList.remove('collapsed'); para que cuando le demos click al botton el formulario aparezca y el toggle para que desaparezca.

  // Esto es lo que hicimos en el dia del ejercicio.
  //form.classList.add('collapsed'); //llamamos a la variable que contiene el formulario y le tenemos que añadir la clase de css con js que hace que el formulario desaparezca.

  // event.
  //form.classList.toggle('new-form'); //nos quedamos por aqui, no sabemos como hacer que el formulario vuelva a desaparecer


// form.addEventListener ('click', (event) => {})



// EJERCICIO 3

const input_search_desc = document.querySelector('.js_in_search_desc');
const button_search = document.querySelector('.js-btn-search');

button_search.addEventListener('click', () => {
  const descrSearchText = input_search_desc.value;//el valor que queremos obtener (value) y las condiciones con el código a ejecutar siempre van dentro del evento. que en este caso seria, que cada vez que la usuaria le de a buscar, filtre el valor que ha escrito.

  if (kittenOne.includes(descrSearchText)) {
    kittenOne.classList.remove('collapsed'); //usamos la clase collapsed porque es la clase de css que hace que desaparezca
  } else {
    kittenOne.classList.add('collapsed');
    console.log(word)
  }

  if (kittenTwo.includes(descrSearchText)) {
    kittenTwo.classList.remove('collapsed');
  } else {
    kittenTwo.classList.add('collapsed');
  }

  if (kittenThree.includes(descrSearchText)) {
    kittenThree.classList.remove('collapsed');
  } else {
    kittenThree.classList.add('collapsed');
  }
});


