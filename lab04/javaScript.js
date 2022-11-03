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
