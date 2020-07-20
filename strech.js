//1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

(function(){
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// variable without var, let, const can be access anywhere on the page
// the function above is basically stating that:
//b = 3
// var a = b
// b becomes a global variable while a is a local variable
// b is define and a is undefine
    
// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, 
// view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).
    
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
function createBase(int) {
    return function addsix(){
        return int + 6
    }
}
    
// 3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
//Object oriented: datas are mutable
//Clear sets of instructions making it easy to read
//


//functional programming: datas are immuatable
//imphasizes on otimization compared to readability
//newer so harder to find documentations for