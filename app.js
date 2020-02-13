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
