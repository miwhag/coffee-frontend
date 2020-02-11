fetch('http://localhost:3000/coffees')
.then(response => response.json())
.then(coffees => {
    coffees.map(coffee => {
        console.log(coffee)
        let coffeeName = document.createElement('h3')
        coffeeName.innerText = `Coffee Roaster: ${coffee.coffee_roaster.name}, Coffee Blend: ${coffee.blend.name}`
        document.body.append(coffeeName)
    })
})