const params = new URLSearchParams(window.location.search)
const ul = document.querySelector('ul')

fetch('http://localhost:3000/coffees')
.then(response => response.json())
.then(coffees => {
    coffees.map(coffee => {
        
        let coffeeContainer = document.createElement('li')
        let coffeePicture= new Image(300,300)

        coffeeContainer.innerHTML = `<a href="about_coffee.html?id=${coffee.id}">${coffee.coffee_roaster.name} ${coffee.blend.name}</a>`
        coffeePicture.src = coffee.image

        ul.append(coffeeContainer)
        coffeeContainer.append(coffeePicture)
    })
})


// const form = document.createElement("form")
// form.action = `localhost:3000/users/${li.dataset.id}`
// form.method = "POST"
// form.innerHTML = `
// <input type="submit" value="delete this user"/>
// <input type="hidden" name="_method" value="delete"/>`
// li.append(form)
// return li 



// li.dataset.id = user.id 


// const form = document.createElement("form")
// form.action = `localhost:3000/users/${li.dataset.id}`
// form.method = "POST"
// form.innerHTML = `
// <input type"text" placeholder="Name" name="name" valye ="${li.dataset.name}"
// <input type="submit" value="update this user"/>
// <input type="hidden" name="_method" value="put"/>`
// li.append(form)
// return li 



// li.dataset.id = user.id 
//li.dataset.name = user.name


{/* <main class=""/> */}