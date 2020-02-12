const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/coffees/${id}`)
.then(response => response.json())
.then(coffee => {
    console.log(coffee)
    let coffeePicture = new Image(400,400)
    let coffeeBlend = document.createElement('h2')
    let coffeeFlavor = document.createElement('p')
    let coffeeName = document.createElement('h2')
    let coffeeCity = document.createElement('p')
    let coffeeCountry = document.createElement('p')

    coffeePicture.src = coffee.image
    coffeeBlend.innerText = coffee.blend.name
    coffeeFlavor.innerText = coffee.blend.flavor
    coffeeName.innerText = coffee.coffee_roaster.name
    coffeeCity.innerText = coffee.coffee_roaster.city
    coffeeCountry.innerText = coffee.coffee_roaster.country

    document.body.append(coffeePicture, coffeeBlend, coffeeFlavor, coffeeName, coffeeCity, coffeeCountry)
})