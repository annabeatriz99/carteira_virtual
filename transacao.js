const crypto = require ('crypto')
const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const CryptumSdk = require('cryptum-sdk');
const SDK = new CryptumSdk();

const Web3 = require('web3');

//contrato de token
const web3 = new Web3('https://mainnet.infura.io/v3/your-project-id');

//chave privada do endereco da careira
const privateKey = 'private_key';
const fromAddress = 'wallet_address';

//definicao de endereco 
const toAddress = 'token_address';
const tokenSymbol = 'token_symbol';

const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

//transacao eth para token
const transaction = {
  from: fromAddress,
  to: tokenAddress,
  value: 0,
  data: transferData,
};

const sdk = new CryptumSdk({
  environment: 'testnet',
  apiKey: "42OELP0OP5NvqKvckOUT6xU728wDTkmj"
}) 

const wallet = await sdk.wallet.generateWallet({
  protocol: 'ETHEREUM',
})

const { hash } = await sdk.token.create({
  wallet,
  name: 'moedacripto',
  symbol: 'TOK',
  decimals: 18,
  amount: '1000000',
  protocol: 'ETHEREUM'
})

const ec = new EC('secp256k1');

class Carteira {
  constructor() {
    this.chavePrivada = null;
    this.chavePublica = null;
    this.UTXOs = {};
    this.sdk = new CryptumSdk()

  }
  

  gerarChave() {
    const chave = ec.genKeyPair();
    this.chavePrivada = chave.getPrivate('hex');
    this.chavePublica = chave.getPublic('hex');
  }

  getSaldo() {
    let saldo = 0;
    for (const id in this.UTXOs) {
      const utxo = this.UTXOs[id];
      if (utxo.eMinha(this.chavePublica)) {
        saldo += utxo.valor;
      }
    }
    return saldo;
  }

  enviarFundos(destinatario, valor) {
    if (this.getSaldo() < valor) {
      console.log('Fundos insuficientes. Transação cancelada.');
      return null;
    }

    const inputs = [];
    let total = 0;
    for (const id in this.UTXOs) {
      const utxo = this.UTXOs[id];
      if (utxo.eMinha(this.chavePublica)) {
        total += utxo.valor;
        inputs.push(new TransacaoInput(id));
        if (total >= valor) {
          break;
        }
      }
    }

    const novaTransacao = new Transacao(this.chavePublica, destinatario, valor, inputs);
    novaTransacao.gerarAssinatura(this.chavePrivada);

    for (const input of inputs) {
      delete this.UTXOs[input.idTransacaoOutput];
    }

    return novaTransacao;
  }
}

class Transacao {
  constructor(em, para, valor, inputs) {
    this.em = em;
    this.para = para;
    this.valor = valor;
    this.inputs = inputs;
    this.id = this.calcularHash();
    this.assinatura = '';
  }

  calcularHash() {
    return SHA256(this.em + this.para + this.valor + JSON.stringify(this.inputs)).toString();
  }

  gerarAssinatura(chavePrivada) {
    const hashTransacao = this.calcularHash();
    const chave = ec.keyFromPrivate(chavePrivada, 'hex');
    const assinatura = chave.sign(hashTransacao, 'base64');
    this.assinatura = assinatura.toDER('hex');
  }

  eValida() {
    if (this.em === null) return true;
    if (!this.assinatura || this.assinatura.length === 0) {
      throw new Error('A transação não possui assinatura.');
    }

    const chavePublica = ec.keyFromPublic(this.em, 'hex');
    return chavePublica.verify(this.calcularHash(), this.assinatura);
  }
}

class TransacaoOutput {
  constructor(valor, destinatario) {
    this.valor = valor;
    this.destinatario = destinatario;
    this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  eMinha(chavePublica) {
    return chavePublica === this.destinatario;
  }
}

class TransacaoInput {
  constructor(idTransacaoOutput) 
}
//assinatura da transacao
web3.eth.accounts.signTransaction(transaction, privateKey).then((signedTx) => {
  web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', (receipt) => {
    console.log(`Transferência de ${amount} ${tokenSymbol} enviada para ${toAddress}.`);
  });
});