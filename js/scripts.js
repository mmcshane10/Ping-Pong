$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    $("#result").empty()

    var string = $("input#string").val();
    var number = parseInt(string);
    var array1 = [];

    for (i=1; i<=number; i++)
    array1.push(i);

    array1.forEach(function(array) {
      if ((array % 5 === 0) && (array % 3 === 0)) {
        return "pingpong"
      } else if (array % 3 === 0) {
        return "ping"
      } else if (array % 5 === 0) {
        return "pong"
      } else {
        $("array").append(array)
      }
    });

    for (var i =0; i < array1.length; i += 1) {
      $("#result").append("<li>" + array1[i] + "</li>")
    }

    $("#result").show()
    console.log(array1);

  });
});
