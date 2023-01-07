// function evenOdd(number){
//    if(number%2==0){
//     console.log(number, 'is Even Number');
//    }else{
//     console.log(number, "is Odd Number");
//    }
// }
// evenOdd(15);

// const products={
//     product1: 'mobile', price: 12000,
//     product2: 'laptop',color: 'pink'
// }
// products.price=5555;
// console.log(products.price);

// const shopping={
//     books:5,
//     papers:16,
//     penColor: 'red',
//     booksName:'Stastics',
//     mouse:2,
//     mouseBrand:'logitech'
// }
// const names = Object.values(shopping);
// const keys = Object.keys(shopping);
// console.log(names);
// console.log(keys);
// first way to get propertys 
// const propartyFway=shopping.penColor;
// console.log(propartyFway);
// // second way 
// const propertySway=Object.values(shopping);
// const propertySwayk=Object.keys(shopping);
// console.log(propertySway);
// console.log(propertySwayk);

// problem 1: find the property of the objects
const shopping={
    books:5,
    papers:16,
    penColor: 'red',
    booksName:'Stastics',
    mouse:2,
    mouseBrand:'logitech'
}
// finding specific properties from bject 
const penColor1 = shopping.penColor;
console.log(penColor1);
const penColor2 = shopping['penColor'];
console.log(penColor2);