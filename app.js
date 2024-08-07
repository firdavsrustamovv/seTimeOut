const myInp = document.getElementById("myInp");
const res = document.getElementById("res");
const load = document.getElementById("load");

const arr = [
  "salom",
  "hayir",
  "nima gap",
  "qalesan",
  "kettik",
  "ishla yaxshimi",
  "qerdasan",
  "ertalap",
  "uxlepan",
  "Doston",
  "Farrux",
  "Firdavs",
  "Javohir",
  "Oybek",
  "Kobalt",
  "Nexia",
  "Malibu",
  "Onix",
];

function myFunction() {
  let input = myInp.value;
  if (input.trim() === "") {
    res.innerHTML = "Nimadur Yozib Ketin";
  } else {
    load.style.display = "block";

    setTimeout(() => {
      let newArr = arr.map(() => {
        return arr[Math.floor(Math.random() * arr.length)];
      });
      res.innerHTML = newArr.slice(0, 3).join(", ");
      load.style.display = "none";
    }, 2000);
  }
}

function cloneObj(obj) {
  let copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}
const objects = {
  name: "Firdavs",
  age: 21,
  address: "Jizzakh",
};

const result = cloneObj(objects);
console.log(result);
