var word = [
  "algorithm",
  "program",
  "api",
  "argument",
  "ascii",
  "boolean",
  "bug",
  "https",
  "java",
  "c",
  "python",
  "react",
  "char",
  "object",
  "class",
  "statements",
  "constants",
  "arrays",
  "hashmap",
  "heap",
  "framework",
  "database",
  "sql",
  "coding",
  "loops",
  "switch",
  "null",
  "operator",
  "variable",
  "pointer",
  "runtime",
  "node",
  "javascript",
  "php",
  "callback",
  "graph",
  "vscode",
];
function pickAWord() {
  return word[Math.floor(Math.random() * word.length)];
}
export { pickAWord };
