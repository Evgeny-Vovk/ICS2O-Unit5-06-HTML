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
  const firstNumber = parseInt(document.getElementById('first-number').value)
  const secondNumber = parseInt(document.getElementById('second-number').value)
  var repeat = 0
  var answer = 0

  // process
  while (repeat < firstNumber) {
    answer = answer + secondNumber
    repeat++
  }
  
  //output
  document.getElementById("answer").innerHTML = "The answer is: " + answer
}