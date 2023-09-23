import type { NextApiRequest, NextApiResponse } from 'next';
import Web3 from 'web3';
const web3 = new Web3(process.env.INFURA_URL); // Replace with your Infura URL or other provider

async function getWalletBalance(walletAddress: string): Promise<string> {
  try {
    // Fetch the wallet balance using Web3.js
    const balance = await web3.eth.getBalance(walletAddress);
    return web3.utils.fromWei(balance, 'ether'); // Convert from wei to ether
  } catch (error) {
    throw new Error('Error fetching wallet balance');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: {walletAddress},
    method,
  } = req


  switch(method){
    case 'POST':{
      if (!walletAddress) {
        res.status(400).json({ error: 'Wallet address is required' });
        return;
      }
    
      try {
        const balance = await getWalletBalance(walletAddress as string);
        res.status(200).json({ balance });
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    }
    default: 
      return res.status(405).end("Error")

  }

}
