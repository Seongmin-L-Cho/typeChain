import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    CryptoJS.SHA256(index + previousHash + timestamp + data);
  };

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
  }
}

// Block.calculateBlockHash() // static이 아니면 바로 calculateBlockHash를 block에서 부를수는 없음

const genesisBlock: Block = new Block(0, "121212", "", "hello", 1234568);

let blockchain: [Block] = [genesisBlock];

const getBlockChanin = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; // 블록체인 길이 알기용

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
