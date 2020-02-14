const params = new URLSearchParams(window.location.search)
const id = params.get('id')
let photo = document.querySelector('.photo')
let info = document.querySelector('.info')


fetch(`http://localhost:3000/coffees/${id}`)
.then(response => response.json())
.then(coffee => {
    let coffeePicture = new Image
    let coffeeBlend = document.createElement('h2')
    let coffeeFlavor = document.createElement('p')
    let coffeeName = document.createElement('h2')
    let coffeeCity = document.createElement('p')
    let coffeeCountry = document.createElement('p')
    let button = document.createElement('button')
    

    coffeePicture.src = coffee.image
    coffeeBlend.innerText = coffee.blend.name
    coffeeFlavor.innerText = coffee.blend.flavor
    coffeeName.innerText = coffee.coffee_roaster.name
    coffeeCity.innerText = coffee.coffee_roaster.city
    coffeeCountry.innerText = coffee.coffee_roaster.country
    button.innerHTML = `<a href="checkout.html?id=${coffee.cart_id}">Add to Cart</a>`
  
    document.body.append(coffeePicture, coffeeBlend, coffeeFlavor, coffeeName, coffeeCity, coffeeCountry,button)

    button.addEventListener('click', function(){
        console.log("HEllo")
        fetch(`http://localhost:3000/add_cart_item/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cart_id:1

            })
        })
    })
})

