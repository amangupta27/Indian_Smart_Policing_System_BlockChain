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

  const reader = new FileReader();
  reader.onloadend = function() {
    const ipfs = window.IpfsApi('localhost', 5001);
    const buf = buffer.Buffer(reader.result);
    console.log(buf);
      console.log('a');
    ipfs.files.add(buf, (err, result) => {
      if(err) {
        //console.error(err);
        return;
      }
      url = `http://127.0.0.1:8080/ipfs/${result[0].hash}/`;
      console.log(url);
      Coursetro.addEvidence(document.getElementById("firNo").value,url,{ from: web3.eth.accounts[0],gas: 3000000});

    });
  }
  const photo = document.getElementById("filesToUpload");
  reader.readAsArrayBuffer(photo.files[0]);
}
