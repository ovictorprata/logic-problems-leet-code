/*
Link do desafio: https://leetcode.com/problems/sum-of-total-strength-of-wizards/
*/

 function countAnagrams(s) {
    s = s.split(' ')
    for(el of s){
        el = el.split('')
        const occurrences = el.reduce(function (acc, curr) {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
          }, {});

        console.log(Object.values(occurrences))
    }

    
    return s
};

s = "too hot"
console.log(countAnagrams(s))