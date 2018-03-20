if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else{
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "fir",
				"type": "uint256"
			},
			{
				"name": "evidence_link",
				"type": "string"
			}
		],
		"name": "addEvidence",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "fir",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getEvidenceLinks",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
var Coursetro = CoursetroContract.at('0xdd7b97cea0856a1641449367fae442a033c84932');

console.log(Coursetro);

function upload() {

      Coursetro.getEvidenceLinks(document.getElementById("firNo").value,0,function(error, result){
                  if(!error)
                      {
                          document.getElementById("evidence1").href=result;
                      }
                  else
                      console.error(error);
              });
}
