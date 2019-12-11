const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1');


/**
 * Constructor del la cadena de bloques
 */
function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];

    /*Genesis Block
        Los valores son albitrarios en el primer bloque
        En los bloques siguientes deben ser validos los Hash
    */
    this.createNewBlock(100, '0', '0');
}

/**
 * Crea un nuevo bloque y lo guarda en la cadena
 * @nonce un numero aleatorio
 * @previousBlockHash Hash del bloque anterior
 * @hash Hash del bloque actual
 */
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

/**
 * Retorna el ultimo bloque 
 */
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

/**
 * Crea una nueva transaccion
 * @amount Monto de la transaccion
 * @sender Direccion de la persona que envia el monto
 * @recipient Direccion del destinatario
 */
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionId: uuid().split('-').join('')
    };

    return newTransaction;
}


/**
 * addTransactionToPendingTransactions method
 */
Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}

/**
 * Cifra los datos, retornando un Hash de los mismos
 * @previousBlockHas Hash del bloque anterior
 * @currentBlockData Objecto blockchain
 * @nonce Numero 
 */
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);

    return hash;
}

/**
 *  Verifica que un bloque sea legítimo
 * 
 *  A partir de estos datos que suministramos, el método proofOfWork intentará generar un hash 
 *  específico. Este hash específico en nuestro ejemplo será un hash que comienza con cuatro ceros.
 *  Entonces, con el currentBlockData dado y el previousBlockHash, el método de alguna manera 
 *  generará un hash resultante que comienza con cuatro ceros.
 * 
 *  @previousBlockHash Hash del bloque anterior
 *  @currentBlockData Objeto actual (bloque)
 */
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
 
    while(hash.substring(hash.length,hash.length - 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        //console.log(hash);
    }

    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain){
    let validChain = true;

    for(var i = 1; i < blockchain.length; i++){
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i - 1];
        //console.log('previousBlockHash =>', prevBlock['hash']);
        //console.log('currentBlockHash =>', currentBlock['hash']);
        const blockHash = this.hashBlock(prevBlock['hash'], { transactions: 
            currentBlock['transactions'], index: currentBlock['index']}, currentBlock['nonce']);

        if(blockHash.substring(hash.length, hash.length - 4) !== '0000')
            validChain = false;

        if(currentBlock['previousBlockHash'] !== prevBlock['hash']) //Chain is not valid
            validChain = false;
    }

    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;

    if(!correctNonce || !correctPreviousHash || !correctHash || !correctTransactions)
        chainIsValid = false;

    return validChain;
}

Blockchain.prototype.getBlock = function(blockHash){
    let correctBlock = null;
    this.chain.forEach(block => {
        if(block.hash === blockHash)
            correctBlock = block;
    });

    return correctBlock;
}

Blockchain.prototype.getTransaction = function(transactionId){
    let correctTransaction = null
    let correctBlock = null;

    this.chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if(transaction.transactionId === transactionId){
                correctTransaction = transaction;
                correctBlock = block;
            }
        });
    });

    return {transaction : correctTransaction, block: correctBlock};
}

Blockchain.prototype.getAddressData = function(address){
    const addressTransactions = [];

    this.chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if(transaction.sender === address || transaction.recipient === address){
                    addressTransactions.push(transaction);
            }
        });
    });

    let balance = 0;
    addressTransactions.forEach(transaction => {
        if (transaction.recipient === address) balance += transaction.amount;
        else if (transaction.sender === address) balance -= transaction.amount;
    });

    return { 
        addressTransactions: addressTransactions,
        addressBalance: balance
    };
}

module.exports = Blockchain;