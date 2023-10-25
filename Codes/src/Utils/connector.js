const { ethers } = require("ethers");

const abi = [
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "numberId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "address",
    "name": "owner",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "phoneNumber",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "serviceProvider",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "monthlyFee",
    "type": "uint256"
   }
  ],
  "name": "TollFreeNumberAdded",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "numberId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "phoneNumber",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "serviceProvider",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "monthlyFee",
    "type": "uint256"
   }
  ],
  "name": "TollFreeNumberUpdated",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "_phoneNumber",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_serviceProvider",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_monthlyFee",
    "type": "uint256"
   }
  ],
  "name": "addTollFreeNumber",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_numberId",
    "type": "uint256"
   }
  ],
  "name": "getTollFreeNumberDetails",
  "outputs": [
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "phoneNumber",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "serviceProvider",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "monthlyFee",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "numberCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "tollFreeNumbers",
  "outputs": [
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "phoneNumber",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "serviceProvider",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "monthlyFee",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_numberId",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_phoneNumber",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_serviceProvider",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_monthlyFee",
    "type": "uint256"
   }
  ],
  "name": "updateTollFreeNumber",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x8AcA40eDF649655F3F297FB30DD735E69cC8d337"

export const contract = new ethers.Contract(address, abi, signer)
