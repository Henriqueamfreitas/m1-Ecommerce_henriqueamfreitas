// Assigning the principal HTML elements to variables
let cardsSection = document.querySelector(".main-cards") 
let ul = cardsSection.children[0]
ul.className = "ul-main-cards"

let cardsUL = document.querySelector(".ul-main-cards") 
let cartListUL = document.querySelector(".cart-list")

let cartNumber = 0
let cardValue = document.querySelector(".details-values").children[1]

let cartPrice = 0
let cardPrice = document.querySelector(".cart-details").children[1].children[1]



// Creating the function that generates the product card
function creatingCards(object){
    let listOfProducts = document.querySelector(".ul-main-cards")
    listOfProducts.innerHTML = ""
    for (i=0; i<object.length; i+=1){
        let  product = object[i]

        // Creating the elements
        let productID = document.createElement("li")
        let productImage = document.createElement("img")
        let productTag = document.createElement("p")
        let productNameItem = document.createElement("h1")
        let productDecription = document.createElement("p")
        let productValue = document.createElement("p")
        let buttonAddToCart = document.createElement("button")

        // Assigning value to elements
        productID.id = `p${product.id}`
        productImage.src = product.img
        productTag.innerHTML = product.tag
        productNameItem.innerHTML = product.nameItem
        productDecription.innerHTML = product.description
        productValue.innerHTML = `R$${product.value},00`
        buttonAddToCart.innerHTML = product.addCart
        buttonAddToCart.id = product.id
        buttonAddToCart.classList.add("productButton")

        
        // Customizing the button
        buttonAddToCart.addEventListener("click", function(event){
            let elementID = parseInt(event.target.id) // remember that this was a string
            if(verifyProduct(elementID) == false){
            cartNumber+=1
            cardValue.innerHTML = `${cartNumber}`
            cartPrice+=searchProductPrice(elementID)
            cardPrice.innerHTML = `R$${cartPrice},00`

            let product = searchProduct(elementID)
            let elementProduct = addToCart(product)
            cartListUL.append(elementProduct)
            } else{
            alert("This product is already on your shopping cart")}
        })

        

        // Creating the hierarchy of elements
        productID.append(productImage, productTag, productNameItem, productDecription, productValue, buttonAddToCart)
        cardsUL.append(productID)
    }
}
creatingCards(data)


// Creating function that search for the product
function searchProduct(id){
    for (let i=0; i<data.length; i+=1){
        if(data[i].id == id){
            return data[i]
        }
    }
}


// Creating function that recieves a product and return a product card
function addToCart(object){
    // Creating the elements
    let productID = document.createElement("li")
    let productImage = document.createElement("img")
    let productTag = document.createElement("p")
    let productNameItem = document.createElement("h1")
    let productDecription = document.createElement("p")
    let productValue = document.createElement("p")
    let buttonRemoveProduct = document.createElement("button")

    // Assigning value to elements
    productID.id = `l${object.id}`
    productImage.src = object.img
    productNameItem.innerHTML = object.nameItem
    productValue.innerHTML = `R$${object.value},00`
    buttonRemoveProduct.innerHTML = "Remover produto"
    buttonRemoveProduct.id = object.id
    buttonRemoveProduct.classList.add("productButton")

    // Customizing the button
    buttonRemoveProduct.addEventListener("click", function(event){
        cartNumber-=1
        cardValue.innerHTML = `${cartNumber}`
        let listPath = event.composedPath()
        let elementID = listPath[0].id
        cartPrice-=searchProductPrice(elementID)
        cardPrice.innerHTML = `R$${cartPrice},00`
        listPath[1].remove()
    })

    // Creating the hierarchy of elements
    productID.append(productImage, productTag, productNameItem, productDecription, productValue, buttonRemoveProduct)
    return productID
}


// Function that evaluates if the item selected is already on the shopping cart
function verifyProduct(id){
    let element = document.querySelector(`#l`+id)
    if(element == null){
        return false
    }
        return true
}


// Creating function that search for the product and return its price
function searchProductPrice(id){
    for (let i=0; i<data.length; i+=1){
        if(data[i].id == id){
            return parseInt(data[i].value)
        }
    }
}


// Task 7
// Creating buttons for every item
let headerMenu = document.querySelector(".header-menu") 

function creatingFilterButtons(element, object){
    for (i=0; i<headerMenu.children.length; i+=1){
    // Creating the elements
    let button = document.createElement("button")

    // Cleaning the original value of elements
    element.children[i].innerHTML = ""
    
    // Assigning value to elements
    button.id = object[i].id
    button.innerHTML = object[i].type
    button.classList.add("filterButton")

    // Customizing the button
    button.addEventListener("click", function(event){
    if(button.innerHTML == "Todos"){
        creatingCards(data)
    } else{
    creatingCards(filterCards(data, button.innerHTML))
    }    
    })

    // Creating the hierarchy of elements
    element.children[i].append(button)
}}
creatingFilterButtons(headerMenu, filters)


// Creating function that filters by tag
function filterCards(list, str){ //list vai receber a data
    let arrayTemp = []

    for (let i=0; i<list.length; i+=1){
        if(list[i].tag == str) //button.innerHTML
        arrayTemp.push(list[i])
    }
    return arrayTemp
}



// TESTS OUTSIDE OF THE LOOP

