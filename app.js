fetch('http://localhost:3000/coffees')
.then(response => response.json())
.then(coffees => {
    coffees.map(coffee => {
        let coffeeName = document.createElement('h3')
        coffeeName.innerText = `Coffee Roaster: ${coffee.coffee_roaster.name}, Coffee Blend: ${coffee.blend.name}`
        document.body.append(coffeeName)
    })
})

const select = document.querySelector('select')
fetch("http://localhost:3000/coffee_roasters")
.then( response => response.json())
.then(roasterArray => {
    roasterArray.forEach(roaster => {
    let option = document.createElement('option')
            option.innerText = roaster.name
            option.value = roaster.id

            select.append(option)
    })
})
