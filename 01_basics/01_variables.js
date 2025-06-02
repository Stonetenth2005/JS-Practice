const accountId = 12345;
let accountEmail = "tushar@gmail.com";
var accontPassword = "12435"; // it has problem in scoping {}, but similar to let
let accountState; // undefined

accountCity = "Raigarh"; // this is allowed in JS, but this is a bad method for memory allocation

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accontPassword = 212121;
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accontPassword, accountCity, accountState]);

/*
Prefer not to use var, because of the issue in block scoping and functional scope
*/
