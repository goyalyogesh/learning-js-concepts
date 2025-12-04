//console.log(2 > 1);  // true


//console.log("2" > 1 ); // true
//console.log("02" > 1 ); //true

console.log(null > 0 );
console.log(null == 0 );
console.log(null >= 0 ); // true reason is that a equality check == and > < >= <= work differently
// comparison convert null to a number, treating it as 0. thats why (3) null >=0 is true and (1) null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === checks value strictly

console.log("2" === 2); // false