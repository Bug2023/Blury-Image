const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 1)

function blurring() {
  setInterval(load++,0.005) 

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  
}


