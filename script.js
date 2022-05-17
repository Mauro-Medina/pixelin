const defaultSize = 16

let currentSize = defaultSize

const grid = document.querySelector(".grid")
const grid16 = document.querySelector(".grid16")
const grid32 = document.querySelector(".grid32")
const clrGrid = document.querySelector(".clearGrid")

grid16.onclick = function() {
  if (currentSize !== 16) {currentSize = 16
  clearGrid()}
}
grid32.onclick = function() {
  if (currentSize !== 32) {currentSize = 32
  clearGrid()}
}
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