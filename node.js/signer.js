const http  = require('http');
const Web3  = require('web3');
const web3  = new Web3();
var account = web3.eth.accounts.create();

var data_to_sign = "Hello world!";
var signature    =  web3.eth.accounts.sign(data_to_sign, account['privateKey']);
console.log("Invoke Verifier.verify() with the following arguments:")
console.log("messageHash: " + signature["messageHash"]);
console.log("v          : " + signature["v"]);
console.log("r          : " + signature["r"]);
console.log("s          : " + signature["s"]);
console.log("signer     : " + account["address"]);
