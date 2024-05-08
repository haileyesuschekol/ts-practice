class KeyPair<k, v> {
  constructor(public key: k, public value: v) {}
}
const pair = new KeyPair<string, number>("a", 4)
