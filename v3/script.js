"use strict";
//Task_1
// отримання модального вікна для введення інтервалу
let interval = prompt("Введіть інтервал (в мілісекундах):");

// отримання блоку з зображеннями
let imageBlock = document.getElementById("image-block");

// список нових зображень, які будуть використовуватись для зміни
let newImages = [
  "https://picsum.photos/401",
  "https://picsum.photos/402",
  "https://picsum.photos/403"
];

// індекс поточного зображення
let index = 0;

// зміна зображень на сторінці через інтервал
setInterval(function() {
  // збільшення індексу для вибору наступного зображення зі списку
  index = (index + 1) % newImages.length;
  // зміна зображення на сторінці
  let image1 = document.getElementById("image1");
  let image2 = document.getElementById("image2");
  let image3 = document.getElementById("image3");
  switch (index) {
    case 0:
      image1.src = newImages[0];
      image2.src = newImages[1];
      image3.src = newImages[2];
      break;
    case 1:
      image1.src = newImages[1];
      image2.src = newImages[2];
      image3.src = newImages[0];
      break;
    case 2:
      image1.src = newImages[2];
      image2.src = newImages[0];
      image3.src = newImages[1];
      break;
  }
}, interval);


//Task 2
let date = new Date();
let hours = date.getHours();

let body = document.body;

if (hours >= 6 && hours < 12) {
  body.style.backgroundColor = "orange";
} else if (hours >= 12 && hours < 18) {
  body.style.backgroundColor = "lightblue";
} else if (hours >= 18 && hours < 22) {
  body.style.backgroundColor = "purple";
} else {
  body.style.backgroundColor = "black";
}

//Task3
// отримання модального вікна для введення діапазону
let min = +prompt("Введіть мінімальне значення діапазону:");
let max = +prompt("Введіть максимальне значення діапазону:");

// створення таблиці
let table = document.createElement("table");

// заповнення таблиці комірками
for (let i = 0; i < 10; i++) {
  let row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell();
  }
}

// заповнення комірок таблиці випадковими числами в діапазоні, вказаному користувачем
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    // генерація випадкового числа у вказаному діапазоні
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // заповнення комірки таблиці згенерованим числом
    table.rows[i].cells[j].innerHTML = randomNumber;
  }
}
  
// оформлення таблиці на кшталт шахової дошки
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    if ((i + j) % 2 == 0) {
    table.rows[i].cells[j].style.backgroundColor = "white";
    } else {
    table.rows[i].cells[j].style.backgroundColor = "black";
    }
  }
}

// вставлення таблиці в елемент з ідентифікатором "table-block"
let tableBlock = document.getElementById("table-block");
tableBlock.appendChild(table);
