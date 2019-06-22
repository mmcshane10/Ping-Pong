$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var string = $("input#string").val();
    var number = parseInt(string);
    var array1 = [];
    var html = ""

    for (i=1; i<=number; i++)
    array1.push(i);

    array1.forEach(function(array) {
      if ((array % 5 === 0) && (array % 3 === 0)) {
        $(".output").text("pingpong")
      } else if (array % 3 === 0) {
        $(".output").text("ping")
      } else if (array % 5 === 0) {
        $(".output").text("pong")
      } else {
        $(".output").text(array)
      }
    });

    for (var i =0; i < array1.length; i += 1) {
      html += "<li>" + array1[i]+ "</li>";
    }

    $(".output").text(html);
    $("#result").show()

    console.log(array1);

  });
});
