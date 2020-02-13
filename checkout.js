console.log('Hit!!')
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const cart_url = "http://localhost:3000/carts"
const cartid_url = `http://localhost:3000/carts/${id}`

// const div= document.querySelector('div')
fetch(cart_url)
    .then(res => res.json())
    .then(carts =>{
        console.log(carts)
        carts.map(cart =>{
            cart.coffees.map(coffee =>{  
            let div = document.createElement('div')
            let coffeeName = document.createElement('h5')
            let coffeeImg = new Image (200,200)
            let coffeePrice = document.createElement('h5')
            let coffeeQuantity = document.createElement ('input')
            const button = document.createElement("button")

            div.className = 'coffeeNameContainer'
            coffeeName.className = 'coffeeName'
            coffeePrice.className = 'coffeePrice'
            coffeeImg.className = 'coffeeImg'
            button.className = 'button'
            coffeeQuantity.className = 'coffeequantity'

            coffeeName.innerText = `${coffee.coffee_roaster.name}${coffee.blend.name}`
            coffeeImg.src = coffee.image
            coffeePrice.innerText = coffee.price
            coffeeQuantity.type = "number"
            button.innerText = "remove"; 
            button.addEventListener ("click", function() {
                console.log(confirm("remove"))
                div.remove()
                fetch(cartid_url, {
                    method: 'DELETE'
                })
            })
           
            div.append(coffeeImg, coffeeName, coffeePrice, coffeeQuantity, button)
            document.body.appendChild(div)


                })
            })
        })


        
        
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // updateCartTotal()
        // function updateCartTotal() {
        //     let cartItemContainer= document.getElementsByClassName('coffeeNameContainer')[0]
        //     // console.log(cartItemContainer)
        //     let cartRows = cartItemContainer.getElementByClassName('coffeePrice')
        //     for (let i = 0; i < cartRows.length; i++) {
        //         let cartRow = cartRows[i]
        //         let priceElement = cartRow.getElementByClassName('coffeePrice')[0]
        //         let quantityElement = cartRow.getElementByClassName('coffeequantity')[0]
                
        //         let price = priceElement.innerText
        //         console.log(price)
        //     }
        // }

            

            
            
            
            
            
            
            
            
            
                // const number = document.getElementsById("number")[0];
            // document.body.appendChild(button);




