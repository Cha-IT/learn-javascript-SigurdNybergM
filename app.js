var myName = 'Sigurd';
console.log('Hei ' + myName);

let randomedNumber = Math.floor(Math.random()*10);
let randomedNumber2 = Math.floor(Math.random()*10);
console.log(+randomedNumber + randomedNumber2);
console.log(randomedNumber2 - randomedNumber);
console.log(randomedNumber2 * randomedNumber);
console.log(randomedNumber2 / randomedNumber);

var alder = Math.floor(Math.random()*100);
if (alder >= 18) {console.log('Du er myndig')}
else {console.log('Du er ikke myndig')}

var gammel = Math.floor(Math.random()*100);
if (gammel >= 67) {console.log('Du må kjøpe honnørbilett')}
else if (gammel >= 18) {console.log('Du må kjøpe voksenbilett')}
else {console.log('Du må kjøpe barnbilett')}