function task1() {
  var arr = document.getElementById("takeArray").value.split(" ");
  const sum = arr.reduce((accumulator, value) => {
    return accumulator + Number(value);
  }, 0);

  document.getElementById("sum").innerHTML = sum;
}

function task2() {
  var arr = document.getElementById("takeArray2").value.split(" ");
  arr.sort();

  document.getElementById("sort").innerHTML = arr;
}

function task3() {
  var n = Number(document.getElementById("takeN").value);
  var table = "";
  for (var i = 1; i <= 10; i++) {
    table += n + " x " + i + " = " + i * n + "<br>";
  }

  document.getElementById("table").innerHTML = table;
}
function task4() {
  var areaOfSquare = 5 * 5;
  var areaOfRectangle = 4 * 15;
  document.getElementById("area").innerHTML =
    areaOfRectangle + areaOfRectangle + "cm^2";
}

function task5() {
  var n = document.getElementById("weekday").value.toLowerCase();
  var days = ["sunday", "monday", "tuesday", "wednesday", "friday", "saturday"];
  document.getElementById("yesNo").innerHTML = days.includes(n);
}
