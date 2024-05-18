const crypto = require('crypto');

class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }

  print() {
    console.log('==========');
    for (let i = 0; i < this.size; i++) {
      let dataStrArr = [];
      for (const data of this.table[i]) {
        dataStrArr.push(`${data[0]}->${data[1]}`);
      }
      console.log(`${i}: ${dataStrArr.join(', ')}`);
    }
  }

  hash(key) {
    return Math.floor(parseInt(crypto.createHash('md5').update(key).digest('hex'), 16) % this.size);
  }

  add(key, value) {
    const i = this.hash(key);
    for (const data of this.table[i]) {
      if (data[0] === key) {
        data[1] = value;
        return;
      }
    }
    this.table[i].push([key, value]);
  }

  get(key) {
    const i = this.hash(key);
    for (const data of this.table[i]) {
      if (data[0] === key) {
        return data[1];
      }
    }
    return null;
  }
}


const hashTable = new HashTable();
hashTable.add('key1', 'value1');
hashTable.add('key2', 'value2');
hashTable.add('key3', 'value3');
hashTable.print();
hashTable.add('key1', 'valueA');
hashTable.add('key4', 'value4');
hashTable.print();
console.log(hashTable.get('key2'));
console.log(hashTable.get('key5'));
