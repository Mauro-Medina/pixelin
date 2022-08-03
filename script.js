const grid = document.querySelector(".grid")
const clrGrid = document.querySelector(".clearGrid")
const gridRange = document.querySelector(".gridRange")

let currentSize = gridRange.value

gridRange.addEventListener('input', function(){
  currentSize = gridRange.value
  clearGrid()
  setupGrid(currentSize)
})

clrGrid.onclick = function() {clearGrid()}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add("grid-element")
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}
function changeColor(e) {
  e.target.style.backgroundColor = "#000000"
}
function clearGrid() {
  grid.innerHTML = ""
  setupGrid(currentSize)
}
window.onload = () => {
  clearGrid()
}