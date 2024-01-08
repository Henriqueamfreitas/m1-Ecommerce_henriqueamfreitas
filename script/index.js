let cardsSection = document.querySelector('.main-cards') 
let ul = cardsSection.children[0]
ul.className = 'ul-main-cards'

let cardsUL = document.querySelector('.ul-main-cards') 
let cartListUL = document.querySelector('.cart-list')

let cartNumber = 0
let cardValue = document.querySelector('.details-values').children[1]

let cartPrice = 0
let cardPrice = document.querySelector('.cart-details').children[1].children[1]

function creatingCards(object){
    let listOfProducts = document.querySelector('.ul-main-cards')
    listOfProducts.innerHTML = ''
    for (i=0; i<object.length; i+=1){
        let  product = object[i]
        let productID = document.createElement('li')
        let productImage = document.createElement('img')
        let productTag = document.createElement('p')
        let productNameItem = document.createElement('h1')
        let productDecription = document.createElement('p')
        let productValue = document.createElement('p')
        let buttonAddToCart = document.createElement('button')

        productID.id = `p${product.id}`
        productID.className = 'product-cards'
        productImage.src = product.img
        productImage.className = 'card-image'
        productTag.innerHTML = product.tag
        productTag.className = 'card-tag'
        productNameItem.innerHTML = product.nameItem
        productNameItem.className = 'card-nameItem'
        productDecription.innerHTML = product.description
        productDecription.className = 'card-productDecription'
        productValue.innerHTML = `R$${product.value},00`
        productValue.className = 'card-productValue'
        buttonAddToCart.innerHTML = product.addCart
        buttonAddToCart.id = product.id
        buttonAddToCart.classList.add('productButton')

        buttonAddToCart.addEventListener('click', function(event){
            let elementID = parseInt(event.target.id)
            if(verifyProduct(elementID) == false){
                cartNumber+=1
                cardValue.innerHTML = `${cartNumber}`
                cartPrice+=searchProductPrice(elementID)
                cardPrice.innerHTML = `R$${cartPrice},00`
            
                let cartEmpty = document.querySelector('aside').children[1]
                let cartProducts = document.querySelector('aside').children[2]
                let cartDetails = document.querySelector('aside').children[3]

                if(cartNumber == 0){
                    cartProducts.classList.add('hidden')
                    cartProducts.classList.remove('cart-products')
                    cartDetails.classList.add('hidden')
                    cartDetails.classList.remove('cart-details')
                    cartEmpty.classList.add('cart-empty')
                    cartEmpty.classList.remove('hidden')
                } else{
                    cartProducts.classList.add('cart-products')
                    cartProducts.classList.remove('hidden')
                    cartDetails.classList.add('cart-details')
                    cartDetails.classList.remove('hidden')
                    cartEmpty.classList.add('hidden')
                    cartEmpty.classList.remove('cart-empty')
            

                    let product = searchProduct(elementID)
                    let elementProduct = addToCart(product)
                    cartListUL.append(elementProduct)}
            } else{
                toastr.warning('Este produto já está no seu carrinho de compras')
            }
        })

        productID.append(productImage, productTag, productNameItem, productDecription, productValue, buttonAddToCart)
        cardsUL.append(productID)
    }
}
creatingCards(data)

function searchProduct(id){
    for (let i=0; i<data.length; i+=1){
        if(data[i].id == id){
            return data[i]
        }
    }
}

function addToCart(object){
    let productID = document.createElement('li')
    let productImage = document.createElement('img')
    let div = document.createElement('div')
    let productNameItem = document.createElement('h1')
    let productValue = document.createElement('p')
    let buttonRemoveProduct = document.createElement('button')

    productID.id = `l${object.id}`
    productID.className = 'shopping-cart-item'
    productImage.src = object.img
    productImage.className = 'shopping-cart-image'
    div.className = 'name-price-button'
    productNameItem.innerHTML = object.nameItem
    productValue.innerHTML = `R$${object.value},00`
    buttonRemoveProduct.innerHTML = 'Remover produto'
    buttonRemoveProduct.id = object.id
    buttonRemoveProduct.classList.add('productButton')

    buttonRemoveProduct.addEventListener('click', function(event){
        cartNumber-=1
        cardValue.innerHTML = `${cartNumber}`
        let listPath = event.composedPath()
        let elementID = listPath[0].id
        cartPrice-=searchProductPrice(elementID)
        cardPrice.innerHTML = `R$${cartPrice},00`
        listPath[2].remove()

        if(cartNumber==0){
            let cartEmpty = document.querySelector('aside').children[1]
            let cartProducts = document.querySelector('aside').children[2]
            let cartDetails = document.querySelector('aside').children[3]
    
            cartProducts.classList.add('hidden')
            cartProducts.classList.remove('cart-products')
            cartDetails.classList.add('hidden')
            cartDetails.classList.remove('cart-details')
            cartEmpty.classList.add('cart-empty')
            cartEmpty.classList.remove('hidden')
        }
    })

    div.append(productNameItem, productValue, buttonRemoveProduct)
    productID.append(productImage, div)
    return productID
}

let cartEmpty = document.querySelector('aside').children[1]
let cartProducts = document.querySelector('aside').children[2]
let cartDetails = document.querySelector('aside').children[3]

cartProducts.classList.add('hidden')
cartProducts.classList.remove('cart-products')
cartDetails.classList.add('hidden')
cartDetails.classList.remove('cart-details')
cartEmpty.classList.add('cart-empty')
cartEmpty.classList.remove('hidden')

function verifyProduct(id){
    let element = document.querySelector(`#l`+id)
    if(element == null){
        return false
    }
        return true
}

function searchProductPrice(id){
    for (let i=0; i<data.length; i+=1){
        if(data[i].id == id){
            return parseInt(data[i].value)
        }
    }
}

let headerMenu = document.querySelector('.header-menu') 

function creatingFilterButtons(element, object){
    for (i=0; i<headerMenu.children.length; i+=1){

    let button = document.createElement('button')
    let test1 = object[i].id
    let test2 = object[i].type

    element.children[i].innerHTML = ''
    
    button.id = test1
    button.innerHTML = test2
    button.classList.add('filterButton')

    button.addEventListener('click', function(event){
    if(button.innerHTML == 'Todos'){
        creatingCards(data)
    } else{
    creatingCards(filterCardsByTag(data, button.innerHTML))
    }    
    })

    element.children[i].append(button)
}}
creatingFilterButtons(headerMenu, filters)

function filterCardsByTag(list, str){ 
    let arrayTemp = []

    for (let i=0; i<list.length; i+=1){
        if(list[i].tag == str) 
        arrayTemp.push(list[i])
    }
    return arrayTemp
}

function filterCardsByName(list, str){ 
    let arrayTemp = []

    for (let i = 0; i < data.length; i++) {
        let itemName = data[i].nameItem
        if(str === ''){
            arrayTemp = list
            return arrayTemp
        } else if (itemName.toLowerCase().indexOf(str) > -1) {
            arrayTemp.push(list[i])
        }
    }
    return arrayTemp
}

let searchButton = document.querySelector('.search-button')
let input = document.querySelector('.search-input')

input.addEventListener('keyup', function(event) {
    let inputValue = input.value.toLowerCase()
    creatingCards(filterCardsByName(data, inputValue))
});

toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': false,
    'progressBar': true,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '3000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
};
