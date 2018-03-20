if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];

var loginContract = web3.eth.contract([
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

var l = loginContract.at('0x2af8f519b40405d5bd1fe824000a18480ce67863');
console.log(l);
function submit()
{
    x = document.getElementById("FirNo").value;
    l.getFirDetail(x, 0, function (error, result) {
        if (!error) {
            //console.log(result);
            console.log(result);

            document.getElementById("firNumber").innerHTML = x;
            document.getElementById("firDate").innerHTML = web3.toUtf8(result[0]);
            document.getElementById("occDate").innerHTML = web3.toUtf8(result[1]);
            document.getElementById("occTime").innerHTML = web3.toUtf8(result[2]);
            document.getElementById("compName").innerHTML = web3.toUtf8(result[3]);
            document.getElementById("compAddress").innerHTML = web3.toUtf8(result[4]);
            document.getElementById("compContact").innerHTML = web3.toUtf8(result[5]);
            document.getElementById("accusedName").innerHTML = web3.toUtf8(result[6]);
            document.getElementById("accusedAddress").innerHTML = web3.toUtf8(result[7]);
            document.getElementById("incidentDescription").innerHTML = web3.toUtf8(result[8]);
            document.getElementById("otherDetails").innerHTML = web3.toUtf8(result[9]);
            /*
            document.getElementById("firNumber").innerHTML = x;
            document.getElementById("firDate").innerHTML = (result[0]);
            document.getElementById("occDate").innerHTML = (result[1]);
            document.getElementById("occPlace").innerHTML = (result[2]);
            document.getElementById("compName").innerHTML = (result[3]);
            document.getElementById("compAddress").innerHTML = (result[4]);
            document.getElementById("compContact").innerHTML = (result[5]);
            document.getElementById("AccusedName").innerHTML = (result[6]);
            document.getElementById("AccusedAddress").innerHTML = (result[7]);
            document.getElementById("Incident_Description").innerHTML =(result[8]);
            document.getElementById("otherDetails").innerHTML = (result[9]);
            */
        }
        else{
          console.log("Error occured");
        }
    });
}
