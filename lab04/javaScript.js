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
