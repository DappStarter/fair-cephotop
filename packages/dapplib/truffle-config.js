require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food curve return payment update hunt light army genius'; 
let testAccounts = [
"0x6aaf36392bb67a9fe631b86a3b954b8f63d3428fbbe1a92e9bebc2d41f3452e0",
"0x22447be8376d6661b59df813ae4932c4404cfa13fc07168c25210dafebf79c51",
"0xffdb65b7bfed4268454904f09177d4985a0a8d187a60823be843d91850370e7e",
"0x25b3445fe3362e73f24b1d928a24079cc426b33c7e929c66380bebee019166cf",
"0xc1bebfbeff01c47cddcd5d4a383450a32046b58d37fe644a25ba6c0b7f3952ef",
"0xf862710e70834728b0fdd21bc08376d75acc3bdca0b3dccf196281828964c3c2",
"0xa4aa4383b7e63702dffda5add0734af0f5ee75ffacd60da623e99cc1b2302019",
"0xba41b20bc9e4fa4771e269daa2125c3554ab590767bf899178a5e0d570dc4441",
"0x45da0eee2845d91d22b246075b77fd2855d24f304a89b0b56ad2b3d83816cd55",
"0x802a1653b20f19971c680db736a5ed6e1b061abfa3668d352118165182ed2749"
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
            version: '^0.5.11'
        }
    }
};
