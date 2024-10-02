const accountId = 144553
let accountEmail = "tanmay@google.com"
var accountPassword = "124" // avoid using var due to issues in block scope and functional scope
accountCity = "Jaipur"
let accountState;

// accountId = 44321
accountEmail = "hc@hc.com"
accountPassword = 49488883
accountCity = "Bengaluru"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])