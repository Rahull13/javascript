const accountId = 123456
let accountEmail = "rahul@rahul.com"
var accountPassword = '12345'
accountCity = 'Abd'
let accountState;

// accountId = 32 // not allowed
accountEmail = 'rp@rp.com'
accountPassword = '4321'
accountCity = 'bhuj'

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])