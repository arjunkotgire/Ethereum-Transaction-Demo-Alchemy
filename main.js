// index.js
import { Network, Alchemy,Wallet,Utils, } from 'alchemy-sdk';
import { ethers} from 'ethers';
import dotenv from 'dotenv';
dotenv.config();
import { createPrivateKey } from 'crypto';
const {API_KEY,PRIVATE_KEY} = process.env

// this is optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: "API_KEY", // Replace with your Alchemy API key
    network: Network.ETH_GOERLI, // Replace with your network
};

const alchemy = new Alchemy(settings);
const Wallet = new Wallet(PRIVATE_KEY);

async function main(){
    const transaction= {
        to: "Reciever's address",
        value:Utils.parseEther("ETH amount"), //desired amount in ether
        gasLimit:"21000",
        maxpriorityFeePerGas:Utils.parseUnits("5","gwei"),
        maxFeePerGas:Utils.parseUnits("20","gwei"),
        nonce: await alchemy.core.getTransactionCount(Wallet.getAddress()),
        type: 2, 
        chainId: 5, // corresponds to network  
    };

    const rawTransaction= await Wallet.signTransaction(transaction);
    const txhash= await alchemy.transact.sendTransaction(rawTransaction);
    console.log(txhash)
}
