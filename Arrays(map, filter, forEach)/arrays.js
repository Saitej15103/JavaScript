/////----Array methods----///////

// let a=[1,2,3,4,5,6]
// console.log(a.filter(num=>num<6));


// let a=[1,2,3,4,5,6]
// console.log(a.filter(num=>num>4));


// let b=["vedanth","rahul","kumar","kiran"]
// console.log(b.map(x=>x>2));


// let a=[1,2,3,4,5,6]
// console.log(a.map(num=>num*5));


// let a=[1,2,3,4,5,6]
// console.log(a.map(num=>num>3));


// let c=[1,2,3,4,5,6]
// console.log(c.forEach(y=>y*2));


// let c=[1,2,3,4,5,6]
// c.forEach(y=>console.log(y*3));


// let d=[1,2,3,4,5,6]
// console.log(c.forEach(y=>console.log(y*3)));


 let data=[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
]

console.log(data.filter(x=>x.category==="electronics"));
console.log(data.filter(x=>x.category==="men's clothing"));


console.log(data.map(x=>x.category==="electronics"));
console.log(data.map(x=>x.category==="men's clothing"));