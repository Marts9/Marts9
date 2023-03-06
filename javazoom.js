
// syntax
new Zoomist(element[, options])

// for example
new Zoomist('#my-zoomist')

// advanced usage
const myZoomist = document.querySelector('#my-zoomist')
new Zoomist(zoomistElement, {
  // optional parameters
  maxRatio: 4,
  height: '60%',
  // if you need silder
  slider: true,
  // if you need zoomer
  zoomer: true,
  // event
  on: {
    ready() {
      console.log('Zoomist ready!')
    }
  }
})