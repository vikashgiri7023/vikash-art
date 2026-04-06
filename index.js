const { execSync } = require("child_process");
const fs = require("fs");

let startDate = new Date("2026-01-04"); // Sunday

const letters = {
  V: ["10001","10001","10001","10001","01010","01010","00100"],
  I: ["11111","00100","00100","00100","00100","00100","11111"],
  K: ["10001","10010","10100","11000","10100","10010","10001"],
  A: ["01110","10001","10001","11111","10001","10001","10001"],
  S: ["01111","10000","10000","01110","00001","00001","11110"],
  H: ["10001","10001","10001","11111","10001","10001","10001"]
};

const word = "VIKASH";

let pattern = Array(7).fill("");

for (let char of word) {
  let letter = letters[char];
  for (let i = 0; i < 7; i++) {
    pattern[i] += letter[i] + "00";
  }
}

pattern.forEach((row, i) => {
  row.split("").forEach((col, j) => {
    if (col === "1") {
      let date = new Date(startDate);
      date.setDate(startDate.getDate() + j * 7 + i);

      // 5 commits per block = dark green
      for (let k = 0; k < 5; k++) {
        fs.writeFileSync("file.txt", (Date.now() + Math.random()).toString());

        execSync("git add .");
        execSync(`git commit -m "VIKASH FINAL" --date="${date.toISOString()}"`);
      }
    }
  });
});