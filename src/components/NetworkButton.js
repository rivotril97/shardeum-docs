import React, {useState} from 'react';
// import styled from "styled-components";

export default function connectToLiberty() {

 const chainId = '0x1F90';
 const rpcURL = 'https://liberty10.shardeum.org/';
 const networkName = 'Shardeum Liberty 1.X';
 const currencyName = 'SHM';
 const currencySymbol = 'SHM';
 const explorerURL = 'https://explorer-liberty10.shardeum.org/';

//  const Button = styled.button `
//     background-color: black;
//     color: white;
//     font-size: 20px;
//     padding: 10px 60px;
//     border-radius: 5px;
//     margin: 10px 0px;
//     cursor: pointer;
//   `;

 const addNetwork = async () => {
   if (!window.ethereum) {
     console.error('Metamask not detected');
     return;
   }
   await window.ethereum.request({
     method: 'wallet_addEthereumChain',
     params: [
       {
         chainId: chainId,
         chainName: networkName,
         rpcUrls: [rpcURL],
         blockExplorerUrls: [explorerURL],

         nativeCurrency: {
           name: currencyName,
           symbol: currencySymbol, // 2-6 characters long
           decimals: 18,
         },
       },
     ],
   });
   // refresh
   //  window.location.reload();
  };

  return (

    // <Button onClick={addNetwork}>Connect to Liberty 1.X</Button>    

    // <button onClick={addNetwork}>Connect to Liberty 1.X</button>    

    <button class="button buttonHighContrast" onClick={addNetwork}>Connect to Liberty 1.X</button>

  );

}