let url='https://fakestoreapi.com/products'

let parentcontainer=document.createElement("div")
parentcontainer.style.display="flex"
parentcontainer.style.flexWrap="wrap"
parentcontainer.style.gap="50px"
parentcontainer.style.padding="25px"
parentcontainer.style.border="1px solid black"


async function a() {
    let data = await fetch(url)
    let data2 = await data.json()
    console.log(data2);


    data2.forEach(y => {
        let card =document.createElement("div")
        card.innerHTML=`
                         <img src = ${y.image}  width="300px" height="300px"/>
                         <h1>${y.category}</h1>
                         <p>${y.price}</p>
                         <p>${y.rating.rate}</p>
                         `
                         card.style.width="300px"
                         card.style.border="2px solid black"
                         card.style.textAlign="center"
                        //  card.style.padding="5px"
                        card.style.boxShadow="1px 1px 4px 0px black"
        parentcontainer.append(card)
        document.body.append (parentcontainer)
    });


}

a()