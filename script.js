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
// const shopping={
//     books:5,
//     papers:16,
//     penColor: 'red',
//     booksName:'Stastics',
//     mouse:2,
//     mouseBrand:'logitech'
// }
// finding specific properties from bject 
// const penColor1 = shopping.penColor;
// console.log(penColor1);
// const penColor2 = shopping['penColor'];
// console.log(penColor2);
// // finding object all property and keys
// const keys = Object.keys(shopping);
// const values = Object.values(shopping);
// console.log(keys);
// console.log(values);

// // if property value is in a variable then find the value 
// shopping['mouse']=150;
// const propertyName='mouse';
// const propertyValue=shopping[propertyName];
// console.log(propertyValue);
// shopping.push['tutu',12];
// console.log(shopping);

const shopping = {
    books: 5,
    papers: 16,
    penColor: 'red',
    booksName: 'Stastics',
    mouse: 2,
    mouseBrand: 'logitech'
}
// getting values and keys by loop 
// const keys=Object.keys(shopping);
// for(let i = 0; i<keys.length; i++){
//     const propertyKeys = keys[i];
//     const propertyValue = shopping[propertyKeys];
//     console.log(propertyValue);
// }

// gettinh keys and values by for in loop 

// for(let propertyName in shopping){
//     const propertyValues= shopping[propertyName];
//     console.log(propertyName, ":", propertyValues);
// }

// Switch Case 
// const color ='tou';
// switch(color){
//     case 'blue' :
//         console.log("TT");
//         break
//     case 'red' :
//         console.log("TtT");
//         break
//     case 'yellow' :
//         console.log("ThhT");
//         break
//     case 'black' :
//         console.log("TklT");
//         break
//         default:
//             console.log('No color match')
// }

// three problem solving 

// function make_avg(arr, sizeofarr){
//     for(let i = 0; i<=arr.length;i++){
// const values = arr[i];
// return values;
//     }
// }

// console.log(make_avg(10,20,30));

// function inchToFeet(inch){
//     const feet=inch/12;
//     return feet;
// }
// console.log(inchToFeet(24));



const arr =[5,8,10,15,20,63,55,89,55];
for(let i = 0; i<arr.length; i++){
    const elements = arr[i];
    if(elements%2!==0){
        console.log(elements);
    }
}