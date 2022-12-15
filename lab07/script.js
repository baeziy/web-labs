$(document).ready(function () {
  $("#btn").click(function () {
    var x = document.getElementById("inputColor").value;
    $("#color").css({ color: x });
  });

  $(".btn1").click(function () {
    $(".btn2").toggleClass("green");
  });

  $(".btn2").click(function () {
    $(".btn2")
      .animate({ left: "500px" })
      .animate({ top: "500px" })
      .animate({ left: "-3px" })
      .animate({ top: "-8px" });
  });

  $(".box").mouseleave(function () {
    $(".box").css({ "background-color": "blue", color: "white" });
  });
  $(".box").click(function () {
    $(".box").hide();
  });

  $(".addS").click(function () {
    $("table").append(
      $("<tr><td>empty</td><td>empty</td><td>empty</td><td>empty</td></tr>")
    );
  });

  $(".search").click(function () {
    $(".pink").css({ "background-color": "lightpink" });
    $(".gray").css({ "background-color": "lightgray" });
  });
});
