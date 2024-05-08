// Generic class
class KeyPair<k, v> {
  constructor(public key: k, public value: v) {}
}
const pair = new KeyPair<string, number>("a", 4)

// Generic function
function arrayList<v>(value: v) {
  return [value]
}

let num = arrayList(1)
