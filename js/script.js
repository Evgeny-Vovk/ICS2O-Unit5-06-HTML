// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const number1 = parseInt(document.getElementById('number1').value)
  const number2 = parseInt(document.getElementById('number2').value)
  var repeat = 0
  var answer = 0

  // process
  while (repeat < number1) {
    answer = answer + number2
    repeat++
  }
  
  //output
  document.getElementById("answer").innerHTML = "The answer is: " + answer
}