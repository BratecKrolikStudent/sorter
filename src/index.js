class Sorter {
  constructor() {
    this.storage = [];
    this.compareFunction = function (a, b) {
      return a - b;
    }
  }

  add(element) {
    this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    indices.sort();
    let arr = []
    for (let i = 0; i < indices.length; i++) {
      arr.push(this.storage[indices[i]]);
    }

    arr.sort(this.compareFunction);

    for (let i = 0; i < indices.length; i++) {
      this.storage[indices[i]] = arr[i]; 
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;