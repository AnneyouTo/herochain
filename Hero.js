const Web3 = require('web3');

// 连接到BSC节点的RPC端点
const rpcURL = 'https://bsc-dataseed.binance.org/';
const web3 = new Web3(rpcURL);

// 你要查询的钱包地址
const walletAddress = '0xYourWalletAddress';

// 获取钱包地址的余额
web3.eth.getBalance(walletAddress, (err, balance) => {
  if (!err) {
    console.log('钱包余额:', web3.utils.fromWei(balance, 'ether'), 'BNB');
  } else {
    console.error('获取余额时出错:', err);
  }
});
