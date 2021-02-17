let dim = 64;
const container = document.getElementById('container');
let squareDim = 600 / dim;

for(let i = 0; i < dim; i++) {
  for(let j = 0; j < dim; j++) {
  const createDiv = document.createElement('div');
  createDiv.classList.add('square');
  container.appendChild(createDiv);
  }   
}

const divs = document.querySelectorAll('div.square');
divs.forEach((div) => {
    div.setAttribute('style', `width: ${squareDim}px; height: ${squareDim}px`);
    div.addEventListener('mouseenter', function(e) {
        div.setAttribute('style', `width: ${squareDim}px; height: ${squareDim}px; 
        background-color: red`);
    });
});


