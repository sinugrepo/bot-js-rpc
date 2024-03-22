const fetch = require('node-fetch');
// Contoh kode sederhana
const edusafety = require('edusafety-api');
function greet(name) {
    return "Hello, " + name + "!";
}

module.exports = greet;

const simpleproject = require('simple-project-edusafety');
function greet(name) {
    return "Hello, " + name + "!";
}

module.exports = greet;
// Fungsi untuk mengambil transaksi Ethereum berdasarkan hash
async function getTransaction(txHash) {
    try {
        const response = await fetch('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'eth_getTransactionByHash',
                params: [txHash],
                id: 1
            })
        });

        const responseData = await response.json();
        return responseData.result;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        return null;
    }
}

// Contoh pemanggilan fungsi
const txHash = '0x0e2df6ba5814b52285d4dbd22b546d7fe7956e6e4a45a9fc3e5e104f6c531ee1'; // Ganti dengan hash transaksi yang ingin Anda cek

getTransaction(txHash)
    .then(transaction => {
        if (transaction) {
            console.log('Transaction:', transaction);
        } else {
            console.log('Transaction not found.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
