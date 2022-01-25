// TODO: current version doesn't allow similar values.
//  to address that we can keep key/value connection.

class OmniArray_draft {
  a = []; // "index-to-[k,v]" constant access
  k = new Map(); // "key-to-index" constant access
  v = new Map(); // "value-to-index" constant access

  add(k, v) {
    const el = [k, v];
    const i = this.a.length;
    this.a.push(el);
    if (this.a[this.a.length - 1] === el) {
      this.k.set(k, i);

      const uniqueVal = JSON.parse(k) + '~&' + JSON.parse(v);
      this.v.set(uniqueVal, i);
      return true;
    } else {
      // this.a.length should be equal i to confirm untouched this.a (same for this.k and this.v)
      return false;
    }
  }

  getKeyByVal(val) {
    return this.a[this.getIndexByVal(val)][0];
  }

  getKeyByIndex(idx) {
    return this.a[idx][0];
  }

  getIndexByVal(val) {
    return this.v.get(val);
  }

  getIndexByKey(key) {
    return this.k.get(key);
  }

  getValByIndex(idx) {
    return this.a[idx][1];
  }

  getValByKey(key) {
    return this.a[this.getIndexByKey(key)][1];
  }

  toObject() {
    const o = {};
    this.a.forEach((e) => (o[e[0]] = e[1]));
    return o;
  }

  toString() {
    return JSON.stringify(this.toObject());
  }

  // hasKey() {}
  //
  // hasValue() {} // TODO: current version doesn't allow similar values
  //
  // remove() {}
  //
  // clear() {}
}

const omni = new OmniArray_draft();

omni.add('id_0', 'val_0');
omni.add('id_1', 'val_1');
omni.add('id_2', 'val_2');

console.log(`Expect getKeyByVal("val_1") return "id_1": "${omni.getKeyByVal('val_1')}"`);
omni.getKeyByVal('val_1') === 'id_1' ? console.log('ok') : console.log('failed');

console.log(`Expect getKeyByIndex(2) return "id_2": "${omni.getKeyByIndex(2)}"`);
omni.getKeyByIndex(2) === 'id_2' ? console.log('ok') : console.log('failed');

console.log(`Expect getIndexByVal("val_0") return "0": "${omni.getIndexByVal('val_0')}"`);
omni.getIndexByVal('val_0') === 0 ? console.log('ok') : console.log('failed');

console.log(`Expect getIndexByKey("id_2") return "2": "${omni.getIndexByKey('id_2')}"`);
omni.getIndexByKey('id_2') === 2 ? console.log('ok') : console.log('failed');

console.log(`Expect getValByIndex(1) return "val_1": "${omni.getValByIndex(1)}"`);
omni.getValByIndex(1) === 'val_1' ? console.log('ok') : console.log('failed');

console.log(`Expect getValByKey("id_2") return "val_2": "${omni.getValByKey('id_2')}"`);
omni.getValByKey('id_2') === 'val_2' ? console.log('ok') : console.log('failed');

console.log('omni toObject', omni.toObject());

console.log('omni toString', omni.toString());
