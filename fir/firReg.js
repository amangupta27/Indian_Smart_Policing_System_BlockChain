if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "FIRs",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "bytes32"
			},
			{
				"name": "occDate",
				"type": "bytes32"
			},
			{
				"name": "occTime",
				"type": "bytes32"
			},
			{
				"name": "compName",
				"type": "bytes32"
			},
			{
				"name": "compAddress",
				"type": "bytes32"
			},
			{
				"name": "compContact",
				"type": "bytes32"
			},
			{
				"name": "accusedName",
				"type": "bytes32"
			},
			{
				"name": "accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "otherDetails",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_date",
				"type": "bytes32"
			},
			{
				"name": "_occDate",
				"type": "bytes32"
			},
			{
				"name": "_occTime",
				"type": "bytes32"
			},
			{
				"name": "_compName",
				"type": "bytes32"
			},
			{
				"name": "_compAddress",
				"type": "bytes32"
			},
			{
				"name": "_compContact",
				"type": "bytes32"
			},
			{
				"name": "_accusedName",
				"type": "bytes32"
			},
			{
				"name": "_accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "_incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "_otherDetails",
				"type": "bytes32"
			}
		],
		"name": "addFIR",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_firDetail",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "bytes32"
			},
			{
				"name": "occDate",
				"type": "bytes32"
			},
			{
				"name": "occTime",
				"type": "bytes32"
			},
			{
				"name": "compName",
				"type": "bytes32"
			},
			{
				"name": "compAddress",
				"type": "bytes32"
			},
			{
				"name": "compContact",
				"type": "bytes32"
			},
			{
				"name": "accusedName",
				"type": "bytes32"
			},
			{
				"name": "accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "otherDetails",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getFirDetail",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var l = CoursetroContract.at('0x2af8f519b40405d5bd1fe824000a18480ce67863');

console.log(l);

function submit(){
  firno = document.getElementById("firNUm").value
  date = web3.fromUtf8(document.getElementById("firDate").value)
  occDate = web3.fromUtf8(document.getElementById("occDate").value)
  occTime = web3.fromUtf8( document.getElementById("occTime").value)
  compName = web3.fromUtf8( document.getElementById("compName").value)
  compAddress = web3.fromUtf8(document.getElementById("compAddress").value)
  compContact = web3.fromUtf8(document.getElementById("compContact").value)
  accusedName = web3.fromUtf8(document.getElementById("accName").value)
  accusedAddress = web3.fromUtf8(document.getElementById("accAddress").value)
  incidentDetails = web3.fromUtf8(document.getElementById("incidentDetails").value)
  otherDetails = web3.fromUtf8(document.getElementById("otherDetails").value)
  l.addFIR( firno,date,occDate,occTime,compName,compAddress,compContact,accusedName,accusedAddress,incidentDetails,otherDetails,{ from: web3.eth.accounts[0],gas: 3000000});
    l.getFirDetail(1,0,function(error, result){
        if(!error)
        {
            console.log((result));
        }
        else
            console.error(error);
    });
    window.location="../Login/profile.html";
}
/*
Coursetro.getFirDetail(2,2,function(error, result){
            if(!error)
                {
										console.log(web3.toUtf8(result[0]));
                }
            else
                console.error(error);
        });
*/
