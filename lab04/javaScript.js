//task1 function
function task1() {
  const array = [2, 0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] - array[i] === 2)
        document.getElementById("task1").innerHTML =
          "array[j] = " + array[j] + "\narray[i] = " + array[i];
    }
  }
}

//task2 function
function task2() {
  var base = parseInt(document.getElementById("f1").value);
  var height = parseInt(document.getElementById("f2").value);
  var areaofTriangle = 0.5 * base * height;
  var areaofRectangle = base * height;
  document.getElementById("answer1").value = areaofTriangle;
  document.getElementById("answer2").value = areaofRectangle;
}

//task3 function
function task3() {
  const array = [2, 5, 1, 3];
  const string1 = JSON.stringify(array);
  document.getElementById("output1").innerHTML = string1;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  const string = JSON.stringify(array);
  document.getElementById("output2").innerHTML = string;
}
//task4 function
// function required() {
//   var pass1 = document.getElementById("pass1");
//   var pass2 = document.getElementById("pass2");
//   var pass3 = document.getElementById("pass3");
//   //var pass1 = document.getElementById("password");
//   var message = document.getElementById("error-nwl");
//   var goodColor = "#66cc66";
//   var badColor = "#ff6666";

//   if (
//     (pass1 == null || pass1 == "",
//     pass2 == null || pass2 == "",
//     pass3 == null || pass3 == "")
//   ) {
//     alert("Please Fill All Required Field");
//     return;
//   }
//   if (pass1.value.length >= 8) {
//     pass1.style.backgroundColor = goodColor;
//     message.style.color = goodColor;
//     message.innerHTML = "character number ok!";
//   } else {
//     pass1.style.backgroundColor = badColor;
//     message.style.color = badColor;
//     message.innerHTML = " you have to enter at least 8 digit!";
//     return;
//   }
// }

//task5 function
function task5() {
  var bill = parseInt(document.getElementById("billInput").value);
  var tax = 0.16 * bill;
  var e = document.getElementById("options");
  var value = e.value;
  var total = 0;
  if (value == "Outstanding") {
    total = 0.3;
  } else if (value == "Good") {
    total = 0.2;
  } else if (value == "it was okay") {
    total = 0.2;
  } else if (value == "bad") {
    total = 0.2;
  } else if (value == "terrible") {
    total = 0.2;
  }
  var service = tax + bill + total * bill;
  document.getElementById("answer5").value = service;
}

function checkPass() {
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");
  var pass3 = document.getElementById("pass3");
  var message = document.getElementById("error-nwl");
  var goodColor = "#66cc66";
  var badColor = "#ff6666";

  if (
    (pass1 == null || pass1 == "",
    pass2 == null || pass2 == "",
    pass3 == null || pass3 == "")
  ) {
    alert("Please Fill All Required Field");
    return False;
  }

  if (pass3.value.length >= 8) {
    pass3.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "character number ok!";
  } else {
    pass3.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = " you have to enter at least 8 digit!";
    return;
  }
}
