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
Calculator.prototype.add = function (num1,num2){ return num1+num2; };
Calculator.prototype.sub = function (num1,num2){ return num1-num2; };
Calculator.prototype.mul = function (num1,num2){ return num1*num2; };
Calculator.prototype.div = function (num1,num2){ return num1/num2; };
Calculator.prototype.mod = function (num1,num2){ return num1%num2; };



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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
