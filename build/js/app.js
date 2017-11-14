(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
Calculator.prototype.Add = function (num1=0,num2=0){ return (num1+num2); };
Calculator.prototype.Sub = function (num1=0,num2=0){ return (num1-num2); };
Calculator.prototype.Mul = function (num1=0,num2=0){ return (num1*num2); };
Calculator.prototype.Div = function (num1=0,num2=1){ return (num1/num2); };
Calculator.prototype.Mod = function (num1=0,num2=1){ return (num1%num2); };



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/pingpong.js":1}]},{},[2]);
