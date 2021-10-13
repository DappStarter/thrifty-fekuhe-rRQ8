require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note office pulp install drip equal genius'; 
let testAccounts = [
"0xca93572e8c1be5804fd5ac19bee6a6511caf37536fdfd8e36406269c098d0b2b",
"0xe019f52a692c306f45ffe19a43c73024f83a023219e600a1141286f9efc544ea",
"0xad1936ae683518fdb516e7c92c7a0d906859e980a4d45ce712d327f787f8652c",
"0xba29d1fd66fb89a7388f1553b2774226eb86f66a88a7bb58e3b4c9168a598db8",
"0x32947ca8372f4fecb5adcaa91b0988aee5da75f2e1630c052c16d5574becbfbe",
"0x93ec0ae4dc571de108bc2fcf9471d12c4dcbb41d6bc6a30b70c5232a5a03a741",
"0xf8532284318b2af9c31e0d84125df170b4452d39a70a87a04bf76137e145aca4",
"0x7259e0c5e028c2ca398870e5d2c1c40dc6d01685026083a2d7eab801eb7bdd77",
"0x6fa7e34a34545ea25a02f2e5f8a3f8a597aac50e17a4120caa138eb99dbdac41",
"0x946de7dab5065aee6107160182b6adfc5a3da08eb953822544f910afd96ae178"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

