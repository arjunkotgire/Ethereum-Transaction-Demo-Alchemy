# Ethereum-Transaction-Demo-Alchemy
This script configures the Alchemy SDK, initializes a wallet, defines an Ethereum transaction, signs it, and submits it to the blockchain. The resulting transaction hash is then logged for reference.

## Overview

This repository provides a Node.js example for automating Ethereum transactions using the Alchemy SDK. [Alchemy SDK](https://www.alchemy.com/sdk) is a powerful blockchain developer platform that simplifies blockchain development tasks. The example demonstrates basic usage of the Alchemy SDK for fetching block information, token balances, NFTs, and listening to pending transactions.

## Getting Started

### 1. Create an App

Visit the [Alchemy SDK](https://www.alchemy.com/sdk) to create an app. After creating the app, you'll be provided with an API key and necessary details.

### 2. Install Dependencies

To integrate the Alchemy SDK into your project, follow these steps:

   1. Install the Alchemy SDK Package

   ```bash
    npm install alchemy-sdk
```

### 3. Code Example
create  the index.js file for the below:

```javascript
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "your Alchemy API-KEY",
    network: Network.your_ref_network,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('provided address')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("reference eth address");

// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "reference eth address" },
    (res) => console.log(res)
);
```

### Create a `.env` file in the project root and add your Alchemy API -KEY and your wallet private key
Note: Replace 'your_private_key_here' with your actual private key. Do not share it with anyone!

```env
API_KEY=your_reference_alchemy_API_key
PRIVATE_KEY=your_private_key_here
```

### 4. Run Code

```bash
node index.js
```

## Documentation

- [Alchemy SDK Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart)
- [Alchemy SDK JavaScript GitHub Repository](https://github.com/alchemyplatform/alchemy-sdk-js)
