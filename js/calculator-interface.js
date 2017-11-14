var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#calculator").submit(function(event){
    event.preventDefault();
    var num1;
    var num2;
    var myCalculator = new Calculator("hot pink");
    num1= parseInt($("#num1").val());
    num2= parseInt($("#num2").val());

    if ($("#operator").val() == 1){ $("#solution").append ("<p>" + myCalculator.Add(num1,num2) + "</p>"); }
    if ($("#operator").val() == 2){ $("#solution").prepend("<p>" + myCalculator.Sub(num1,num2) + "</p>"); }
    if ($("#operator").val() == 3){ $("#solution").prepend("<p>" + myCalculator.Mul(num1,num2) + "</p>"); }
    if ($("#operator").val() == 4){
      if (num2==0){$("#solution").prepend("ERR : Cannot divide by zero...");}
      else{$("#solution").prepend("<p>" + myCalculator.Div(num1,num2).toFixed() + " R" + myCalculator.Mod(num1,num2) + "</p>");}
    }
  });
});
