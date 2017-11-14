var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("form#calculator").submit(function(event){
    event.preventDefault();
    var num1;
    var num2;
    if ($("num1").val()==undefined){num1=0;}
    else {num1=$("num1").val();}
    if ($("num2").val()==undefined){num2=0;}
    else {num2=$("num2").val();}

    if ($("operator").val() == 1){$("#solution").prepend("<p>" + Calculator.add(num1,num2) + "</p>");}
    if ($("operator").val() == 2){$("#solution").prepend("<p>" + Calculator.sub(num1,num2) + "</p>");}
    if ($("operator").val() == 3){$("#solution").prepend("<p>" + Calculator.mul(num1,num2) + "</p>");}
    if ($("operator").val() == 4){$("#solution").prepend("<p>" + Calculator.div(num1,num2).toFixed() + " R" + Calculator.mod(num1,num2) + "</p>");}
  });
});
