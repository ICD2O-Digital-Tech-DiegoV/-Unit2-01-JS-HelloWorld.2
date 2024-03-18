// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '8 + 6 =  ' + (8 + 6)
  document.getElementById('subtract-math').innerHTML = '22 - 8 =  ' + (22 - 8)
  document.getElementById('multiply-math').innerHTML = '5 + 5 * 5 = ' + (5 + 5 * 5)
  document.getElementById('divide-math').innerHTML = '(100 / 10) + 5 = ' + ((100 / 10) + 5)
  document.getElementById('exponent-math').innerHTML = '10 + 5 ** 3 = ' + (10 + 5 ** 3)
  document.getElementById('square-root-math').innerHTML = '√(100000) = ' + Math.sqrt(100000)
}
