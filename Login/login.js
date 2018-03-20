if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var loginContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getPoliceStationNo",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_userId",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_contact",
				"type": "string"
			},
			{
				"name": "_postalAddress",
				"type": "string"
			},
			{
				"name": "_uid",
				"type": "string"
			},
			{
				"name": "_policeStationNo",
				"type": "string"
			}
		],
		"name": "setDataBase",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_superUserName",
				"type": "string"
			},
			{
				"name": "_superUserPass",
				"type": "string"
			}
		],
		"name": "verifySuperUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getId",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dbg",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_policeStationNo",
				"type": "string"
			},
			{
				"name": "userId",
				"type": "string"
			}
		],
		"name": "setPoliceStation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_postalAddress",
				"type": "string"
			},
			{
				"name": "userId",
				"type": "string"
			}
		],
		"name": "setPostalAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userId",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "loginVerify",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getPostalAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getUid",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "userId",
				"type": "string"
			}
		],
		"name": "getContact",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_contact",
				"type": "string"
			},
			{
				"name": "userId",
				"type": "string"
			}
		],
		"name": "setContact",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);

var l = loginContract.at('0x8d03d528e9885ea140ce6ae344c9e61390879240');
 console.log(l);

$("#button").click(function() {
    var userName=document.getElementById("userName").value;
    var passWord=document.getElementById("passWord").value;
    l.loginVerify(userName,passWord,function(error, result){
            if(!error)
            {   console.log(result);
                if(result==true){
                    window.location="profile.html?user="+userName;
                }
                //console.log("login successfull");
            }
            else
                console.error(error);
        })
});
