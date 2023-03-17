// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./images/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./images/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./images/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./images/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./images/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./images/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];


// let arrayTeste = []
// function test(array){
// for (i=0; i<data.length; i+=1){
//   array.push(data[i].tag)
// }
// return array
// }
// test(arrayTeste)

const filters = [
  {
    id: 1,
    type: "Todos",
  },
  {
    id: 2,
    type: "Camisetas",
  },
  {
    id: 3,
    type: "Acessórios",
  },
]


// TASKS
// 1- DONE Create a function that renders the product cards
// 2- DONE Logic of the button to add the product to the shopping cart
// 3- DONE Logic of the button to remove the product from the shopping cart
// 4- DONE Logic that informs the number of products in the cart
// 5- DONE Logic that does not allow the same item to be added more than once
// 6- DONE Logic that informs the total price of the products in the shopping cart
// 7- DONE Logic that filters the page according to the selected tag

// 8- Logic that filters the page according to the typed name
// 9- Logic that, if the shopping cart is empty, informs that the shopping cart is empty
// Understanding the task number 9
// a- if (ul class=cart-list) is empty, then the (div class=cart-details) must be inactive AND the class=cart-empty 
// must be active
    // document.querySelector("aside").children[2].remove("cart-details")
// b- if (ul class=cart-list) is NOT empty, then the (div class=cart-details) must be active AND the class=cart-empty 
// must be inactive
