let dim = 16;
let squareDim = 500 / dim - 2;
const container = document.getElementById('container');
const newBoard = document.getElementById('newBoard');
const clear = document.getElementById('clear');

createGrid(dim);

newBoard.addEventListener('click', (e) => {
  const divs = document.querySelectorAll('div.square');
  divs.forEach((div) => {
    container.removeChild(div);
  });
  dim = prompt('Create new grid');
  squareDim = 500 / dim - 2;
  createGrid(dim); 
});

function createGrid(dimension) {
  for(let i = 0; i < dimension; i++) {
    for(let j = 0; j < dimension; j++) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('square');
    container.appendChild(createDiv);
    }   
  }

  const divs = document.querySelectorAll('div.square');
  divs.forEach((div) => {
    div.setAttribute('style', `width: ${squareDim}px; height: ${squareDim}px`);
    div.addEventListener('mouseover', function(e) {
        div.setAttribute('style', `width: ${squareDim}px; height: ${squareDim}px; 
        background-color: red`);
    });
    clear.addEventListener('click', (e) => {
      div.setAttribute('style', `width: ${squareDim}px; height: ${squareDim}px; 
        background-color: white`);
    })
  });
}

