const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
"chain":[{"index":1,"timestamp":1546832978058,"transactions":[],"nonce":100,"hash":"0","previousBlockHash":"0"},{"index":2,"timestamp":1546833020044,"transactions":[],"nonce":18140,"hash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100","previousBlockHash":"0"},{"index":3,"timestamp":1546833024908,"transactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"5a741270122f11e98852ef89f71662f8"}],"nonce":34402,"hash":"000067b51b5073a1aa7a3e593a0403609921c29d4056f71f224281e0dc8e1c0b","previousBlockHash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"},{"index":4,"timestamp":1546833240754,"transactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"5d461e30122f11e98852ef89f71662f8"},{"amount":"10","sender":"T5G45D657HY6D69S4S","recipient":"8T9GS1F65BS05S6F3S4","transactionId":"b26754b0122f11e98852ef89f71662f8"},{"amount":"20","sender":"T5G45D6T728KD7HY6D69S4S","recipient":"8T9GS1FYI58KS65BS05S6F3S4","transactionId":"cb036130122f11e98852ef89f71662f8"},{"amount":"30","sender":"T5G45D6TTG8KD7HY6D69S4S","recipient":"8T9GS17D8I58KS65BS05S6F3S4","transactionId":"d7640510122f11e98852ef89f71662f8"}],"nonce":55793,"hash":"00008c4157fdee611760c686f8883d00c389ed7d1ecd5a4944526362b16fe77f","previousBlockHash":"000067b51b5073a1aa7a3e593a0403609921c29d4056f71f224281e0dc8e1c0b"},{"index":5,"timestamp":1546833327382,"transactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"dded2560122f11e98852ef89f71662f8"},{"amount":"40","sender":"T5G45D6TTG8KD7HY6D69S4S","recipient":"8T9GS17D8I58KS65BS05S6F3S4","transactionId":"04249fb0123011e98852ef89f71662f8"},{"amount":"50","sender":"T5G45D6TTG8KD7HY6D69S4S","recipient":"8T9GS17D8I58KS65BS05S6F3S4","transactionId":"06dcbad0123011e98852ef89f71662f8"},{"amount":"60","sender":"T5G45D6TTG8KD7HY6D69S4S","recipient":"8T9GS17D8I58KS65BS05S6F3S4","transactionId":"09f51e60123011e98852ef89f71662f8"}],"nonce":72716,"hash":"0000f09e7086c8ee41b705355a5fa9bcb41e40a3293c59e470b410e67c913965","previousBlockHash":"00008c4157fdee611760c686f8883d00c389ed7d1ecd5a4944526362b16fe77f"},{"index":6,"timestamp":1546833358376,"transactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"118faeb0123011e98852ef89f71662f8"}],"nonce":96780,"hash":"00009eed79916f7fa0f85b727d867f65b1574d047268b77105614fc5e0ecdc92","previousBlockHash":"0000f09e7086c8ee41b705355a5fa9bcb41e40a3293c59e470b410e67c913965"},{"index":7,"timestamp":1546833362516,"transactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"2408fdd0123011e98852ef89f71662f8"}],"nonce":97777,"hash":"000063c67d8339d2499697079abb3b6fc4f5abfa1ee6bb86f682aa48488f90c3","previousBlockHash":"00009eed79916f7fa0f85b727d867f65b1574d047268b77105614fc5e0ecdc92"}],"pendingTransactions":[{"amount":12.5,"sender":"00","recipient":"41582790122f11e98852ef89f71662f8","transactionId":"2680b490123011e98852ef89f71662f8"}],"currentNodeUrl":"http://localhost:3001","networkNodes":[]
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));

/*
const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
    {
        amount:	10,
        sender:	'B4CEE9C0E5CD571',
        recipient:	'3A3F6E462D48E9',
    },
    {
        amount:	100,
        sender:	'4DRF5T4D5F4T5GF',
        recipient:	'TFR5G4S5E5F4R5',
    },
    {
        amount:	30,
        sender:	'DRF5T4G5S8E3F69',
        recipient:	'QAW518R1F9S4E8',
    }
]
const nonce = 100;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 4074));
*/