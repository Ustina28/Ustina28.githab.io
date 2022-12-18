const Node = require("./node.js")
const n1 = new Node(null, 'A', null)
const n2 = new Node(l, 'B', n1)
console.log(n2.strPath())
