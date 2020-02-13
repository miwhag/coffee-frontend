const params = new URLSearchParams(window.location.search)
const roaster_class = document.querySelector('.roaster')
const blend_class = document.querySelector('.blend')
const shop_class = document.querySelector('.shop')

fetch("http://localhost:3000/coffee_roasters")
.then(response => response.json())
.then(roasters => {
    roasters.forEach(roaster => {
        let roasterName = document.createElement('option')
        roasterName.innerText = roaster.name
        roasterName.value = roaster.id
        roaster_class.append(roasterName)
       
})
})

fetch("http://localhost:3000/blends")
.then(response => response.json())
.then(blends => {
    blends.forEach(blend => {
        let blendName = document.createElement('option')
        blendName.innerText = blend.name 
        blendName.value = blend.id
        blend_class.append(blendName)
    })
})

fetch("http://localhost:3000/shops")
.then(response => response.json())
.then(shops => {
    shops.forEach(shop => {
        let shopName = document.createElement('option')
        shopName.innerText = shop.name
        shopName.value = shop.id
        shop_class.append(shopName)
    })
})

fetch('http://localhost:3000/coffees')
.then(response => response.json())
.then(coffees => {
    coffees.map(coffee => {
    console.log(coffee)
        let stock = document.createElement('p')
        stock.innerText = `${coffee.coffee_roaster.name} ${coffee.blend.name} ${coffee.stock}`
        document.body.append(stock)

    })
})
