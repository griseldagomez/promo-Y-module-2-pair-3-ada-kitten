'use strict';

//EJERCICIO 1
const kittenOne = `<li class="card">
  <article>
    <img
      class="card_img"
      src="https://dev.adalab.es/gato-siames.webp"
      alt="siames-cat"
        />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race">Siamés</h4>
    <p class="card_description">
      Porte elegante, su patrón de color tan característico y sus ojos
      de un azul intenso, pero su historia se remonta a Asía al menos
      hace 500 años, donde tuvo su origen muy posiblemente.
    </p>
  </article>
</li>`;

const kittenTwo = `<li class="card">
  <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat">
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">Sphynx</h4>
  <p class="card_description">
    Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
    hasta con pinta de alienígena han llegado a definir a esta raza
    gatuna que se caracteriza por la «ausencia» de pelo.
  </p>
</li>`;

const kittenThree = `<li class="card">        
  <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat">
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">Maine Coon</h4>
  <p class="card_description">
    Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
    bella mirada se ha convertido en una de sus señas de identidad.
    Sus ojos son grandes y las orejas resultan largas y en punta.   
  </p>          
</li>`;

document.querySelector('.list').innerHTML = kittenOne + kittenTwo + kittenThree; 

//EJERCICIO 2

const buttonPlus = document.querySelector ('.js-btn-add');
const form = document.querySelector ('.new-form');

buttonPlus.addEventListener ('click', (event) => {
  form.classList.add('collapsed'); //llamamos a la variable que contiene el formulario y le tenemos que añadir la clase de css con js que hace que el formulario desaparezca.
  event.
  form.classList.toggle('new-form'); 
  
}) ;

// form.addEventListener ('click', (event) => {})

const input_search_desc = document.querySelector ('.js_in_search_desc');
const button_search = document.querySelector ('.js-btn-search');

button_search.addEventListener('click', () => {
  const descrSearchText = input_search_desc.value;

  if(kittenOne.includes(descrSearchText) ) {
    kittenOne.classList.remove('collapsed');
  } else {
    kittenOne.classList.add('collapsed');
  }
  
  if(kittenTwo.includes(descrSearchText) ) {
    kittenTwo.classList.remove('collapsed');
  } else {
    kittenTwo.classList.add('collapsed');
  }
  
  if(kittenThree.includes(descrSearchText) ){
    kittenThree.classList.remove('collapsed');
  } else {
    kittenThree.classList.add('collapsed');
  }
});
  