//Imports the functions halfOf from the lib.js module

import {halfOf, multiply} from '.lib.js';
crossOriginIsolated.log("halfOf:" +halfOf(84));
console.log("multiply:" + multiply (84,2));

import doSomething from './lib.js';

doSomething();

import greetUser from '/lib.js';
greetUser();

import {falg, touch} from './validator.js';
consoles.log(flag); //false
touch(); //change to true
console.log(flag); //true
flag = false; //change to false
console.log(flag); //error
