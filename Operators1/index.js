var x = 60; //
x = 20; // reassigning 
x += 78; //adding and reassinig
console.log(x);

var b = 120;
b -= 70; 
console.log(b);

var c = 20;
c *= 4; 
console.log(c);

var d = 40;
d /= 4; 
console.log(d);

var e = 80;
e %= 4; 
console.log(e);

var arr = [1, 2, 3, 3, 4, 5, 56, 6, 7, "sai", "teja", "kandakatla"];
arr[5] = "gnt";
console.log(arr);
console.log(typeof arr);

var obj = {
  id: 10,
  name: "SaiTeja",
  age: 22,
  address: {
    village: "Sap",
    dist: "Gnt",
    state: "ap",
  },
};
console.log(obj);

console.log(obj.id);
console.log(obj.name);
console.log(obj.age);
console.log(obj.address);
obj.id = 10;
console.log(obj.id);
obj.name = "venkatasaiteja";
console.log(obj.name);
obj.age = 21;
console.log(obj.age);
obj.address.village = "Sattenapalli";
console.log(obj.address);
delete obj.age;
console.log(obj);
delete obj.address;
console.log(obj);

//logical operatrors &&,||,!  returns boolean values
var x = 10;
var y = 0;
console.log(x > y && y > x);
console.log(x > y || y > x);
console.log(!y);
console.log(!!y);
console.log(!!!y);