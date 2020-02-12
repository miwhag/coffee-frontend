const params = new URLSearchParams(window.location.search)
let coffeeContainer = document.querySelector('div')

fetch('http://localhost:3000/coffees')
.then(response => response.json())
.then(coffees => {
    coffees.map(coffee => {
        let coffeeName = new Image(300,300)
        coffeeName.src = coffee.image
        coffeeContainer.append(coffeeName)
    })
})