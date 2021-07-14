// Write a function which makes a list of strings representing all of the ways 
// you can balance n pairs of parentheses. 

function balancedParens(n) {
    return [];
} 

console.log(balancedParens(0), [""])
console.log(balancedParens(1), ["()"])
console.log(balancedParens(2), ["()()","(())"])
console.log(balancedParens(3), ["()()()","(())()","()(())","(()())","((()))"]) 
