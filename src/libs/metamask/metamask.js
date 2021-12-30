// https://docs.metamask.io/guide/getting-started.html#basic-considerations

export const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
}

export const isMetaMaskConnected = () => {
  return window.ethereum.selectedAddress !== null;
}

export const connectMetaMask = async () => {
  try {
    await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
  } catch (error) {
    if (error.code === 4001) {
      // EIP-1193 userRejectedRequest error
      console.log('Please connect to MetaMask.'); 3
    } else {
      console.error(error);
    }
  }

  window.ethereum.on('accountsChanged', console.log)
}

export const disconnectMetaMask = async () => {
  try {
    await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
  } catch (error) {
    if (error.code === 4001) {
      // EIP-1193 userRejectedRequest error
      console.log('Please connect to MetaMask.'); 3
    } else {
      console.error(error);
    }
  }
}