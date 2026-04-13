/*
###### 4 ######
let index = 10;
let jump = 2;
for (;;) {
  if (index < jump ** jump) {
    break;
  }
  console.log(index);
  index -= jump;
} */
/* 
###### 5 #######
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let num = letter.length;
for (let i = +false; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue;
  }

  console.log(` ${num} => ${friends[i]}`);
  num++;
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh"); */

/* 
###### 6 ########
let start = 0;
let swappedName = "elZerO";
let newWord = "";
for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    newWord += swappedName[i].toLowerCase();
  } else newWord += swappedName[i].toUpperCase();
}
console.log(newWord); 
*/

/* 
###### 7 #######
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] !== "number") {
    continue;
  }
  if (mix[i] == true) {
    continue;
  }
  console.log(mix[i]);
}
 */

//

/* 
################### loops challenge ###############




let myAdmins = ["Ahmed", "Osama", "Samera", "Sayed", "Stop"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let i = 0;

while (i < myAdmins.length) {
  if (myAdmins[i] === "Stop") break;
  i++;
}
/
while (i < myAdmins.length && myAdmins[i] !== "Stop") {
  i++;
} 
  /
document.write(`<div>We Have ${i} Admins</div> <hr/>`);

for (let j = 0; j < i; j++) {
  let firstLetter = myAdmins[j][0];
  document.write(`<div>The Admin For Team ${j + 1} Is ${myAdmins[j]} </div> `);
  document.write(`<h3>Team Member :</h3>`);
  let count = 1;
  for (let k = 0; k < myEmployees.length; k++) {
    if (myEmployees[k].startsWith(firstLetter)) {
      document.write(`<p>- ${count++} ${myEmployees[k]}</p>`);
    }
  }
  document.write(`<hr/>`);
}

*/