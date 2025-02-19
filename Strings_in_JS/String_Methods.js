// 1.take two strings with spaces at starting of one string and at the ending of another string remove the spaces and concat the both string and convert the combined string into uppercase string.
// var str1 = "     saiteja    "
// var str2 = "   tarun     "
// var str1_trim = str1.trim()
// var str2_trim = str2.trim()
// console.log(str1_trim)
// console.log(str2_trim)
// var concat = str1_trim.concat(str2_trim)
// console.log(concat)
// console.log(concat.toUpperCase())

//2.Extract Middle Portion of the string and get the last index of char of extracted string andConvert the portion to Lowercase.
// var a = "saitejakandakatla"
// var extract = a.slice(2,-2)
// console.log(extract)
// var b = extract[12]
// console.log(b)



//3.take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char .
// var str3 = "S"
// console.log(str3)
// var str4 = "aiteja"
// console.log(str4)
// var str5 = str3.concat(str4)
// console.log(str5)
// var str6 = str5.toUpperCase()
// console.log(str6)
// console.log(str6.slice(5,6))

//4.we have 2 string and extract first 3 chars of first string andextra last 3 chars of another string and concat those 2 results togetherand first char and last char of the resulted concatinated string should as uppercase.
// var x = "saiteja"
// console.log(x)
// var y = "kandakatla"
// console.log(y)
// var z = (x.slice(0,3)+y.slice(-3))
// console.log(z)
// var w = (z[0].toUpperCase()+z.slice(1,-1)+z[5].toUpperCase())
// console.log(w)

//5.You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last characters uppercase, extract a specific part of the string, concatenate it with another string.
// var m = "   saiteja   "
// console.log(m)
// var n = m.trim()
// console.log(n)
// var o = n[0].toUpperCase()+n.slice(1,-1)+n[6].toUpperCase()
// console.log(o)
// var p = o.slice(2)
// console.log(p)
// console.log(p.concat(m))

//6."hello there , how are you " find the index of are word in the sentence.
// var s = "hello there , how are you "
// console.log(s)
// var t = s.split(" ")
// console.log(t)
// console.log("Index of are is: ",t.indexOf("are"))




// ----------------object task----------------

//--first question--//

// var person ={
//     firstname:"kandakatla",
//     lastname:"saiteja",
//     age:21
// }
// console.log(person.firstname);
// person.city="hyd"
// console.log(person);

//--second question--//

// var product={
//     name:"kurkure",
//     price:"10rs",
//     instock:"available"
// }
// // console.log(product);
// product.price="20rs"
// // console.log(product);
// delete product.instock
// console.log(product);

// third question //

// var library ={
//     fantasy:"this is my book",
//     mystery:"this is not mt book",
// }
// library.scienceFiction='"harsha-book" "vedanth-book"'
// console.log(library);
// delete library.mystery
// console.log(library);

 // fourth question//
// var user ={
//     username:"shiva",
//     email:"shiva@gmail.com",
//     address:{
//       city:"hyderabad",
//       state:"telagana",
//       zip:500045,
//     }
// }
// Object.freeze(user)
// console.log(user);
// user.email="shiva52@gamil.com"
// console.log(user);
// Object.isFrozen(user)
// console.log(user);
// user.phone="8686376476"
// console.log(user);

// fifth question//

// var car ={
//     maker:"tata",
//     model:"nexon",
//     price:"2000000",

// }

// // Object.seal()
// // console.log(car);

// delete car.maker
// console.log(car);
// Object.isSealed()
