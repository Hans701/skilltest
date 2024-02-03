export function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}

export function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handleFizzBuzz() {
  rl.question("Input angka untuk FizzBuzz: ", (answer: string) => {
    const range = parseInt(answer, 10);
    if (isNaN(range)) {
      console.log("Inputan hanya menerima angka. Coba lagi.");
      handleFizzBuzz();
      return;
    }
    askForAction();
  });
}

function handlePalindrome() {
  rl.question("Input kata untuk Polindrome: ", (answer: string) => {
    const isPalindromic = isPalindrome(answer);
    console.log(
      `Apakah "${answer}" adalah palindrome? ${
        isPalindromic ? "Benar" : "Salah"
      }`
    );
    askForAction();
  });
}

function askForAction() {
  rl.question(
    "Pilih 1 (FizzBuzz), 2 (Palindrome), 0 (exit)): ",
    (option: string) => {
      switch (option) {
        case "1":
          handleFizzBuzz();
          break;
        case "2":
          handlePalindrome();
          break;
        case "0":
          rl.close();
          break;
        default:
          console.log("Input tidak valid. Coba lagi.");
          askForAction();
      }
    }
  );
}
askForAction();
