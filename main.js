/* const data = [
  'https://images.unsplash.com/photo-1695132616044-6c3afcbd5b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1695133389296-fdd6c49d422c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1696229951930-df940c1e4255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
]; */

// spinner

/* const spinner = () => {
  const spinnerElem = document.createElement('div');
  spinnerElem.classList.add('spinner');
  main.appendChild(spinnerElem);
}; */

//
/* const dataDarstellen = () => {

  const gallery = document.createElement('div');
  data.map((image) => {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('src', image);
    gallery.appendChild(imageElem);
  });
  main.appendChild(gallery);
}; */

//
/* 
data.length < 1 ? spinner() : dataDarstellen(); 
*/

//<progress id="file" max="100" value="70">70%</progress>

// NDA => Non-Disclossure Agreement

// document.createElement                                       neues Element
// document.querySelector                                       greiffen existierendes Element
// document.appendChild                                         bringt Element an Element an
// document.classList.add // delete // toggle // exchange       addiert / löscht / umschaltet / tauschen CSS-Klassen
// innerText                                                    deffiniert Text
// setAttribute                                                 deffiniert Eigenschaft
// style                                                        deffiniert Styles

// query === Abfrage

const main = document.querySelector('main');

// Aufgabe => <h1>Hello There</h1>

const titleElement = document.createElement('h1');
titleElement.innerText = 'Hello There';
main.appendChild(titleElement);

const addProgressBar = (_max, _value, _color) => {
  const progressBar = document.createElement('progress');
  progressBar.setAttribute('max', _max);
  progressBar.setAttribute('value', _value);
  progressBar.innerText = '50%';
  progressBar.style.color = _color;
  main.appendChild(progressBar);
};

const buyStatus = {
  isProductChoosen: false,
  isAddresseGiven: false,
  isPaymentDefined: false,
  isBuyConfirmed: false,
};

const updateProgressBar = () => {
  return Object.values(buyStatus).reduce((acc, curr) => curr + acc);
};

/* addProgressBar(4, updateProgressBar(), 'blue');
addProgressBar(100, 25, 'green');
addProgressBar(100, 75, 'red'); */

{/* <button class="button--active">Active</button>
<button class="button--passive">Passive</button> */}

// document.createElement                                       neues Element
// document.querySelector                                       greiffen existierendes Element
// document.appendChild                                         bringt Element an Element an
// document.classList.add // delete // toggle // exchange       addiert / löscht / umschaltet / tauschen CSS-Klassen
// innerText                                                    deffiniert Text
// setAttribute                                                 deffiniert Eigenschaft
// style                                                        deffiniert Styles
// .addEventListener                                            addiert Intearktivität


const buttonElement = document.createElement("button")
buttonElement.innerText = "Active"
buttonElement.addEventListener("click", ()=> buttonElement.innerText = "Passive")
main.appendChild(buttonElement)

