const name = 'Tushar'
const repoCount = 20;

console.log(`Hello my name is ${name}, my repo count is ${repoCount}`);

// declaring string
const name1 = new String('Tushar')

let subStr = name1.substring(0,4) // returns 'Tush'


/* 

STRING METHODS -

1) str.substring(start, endExclusive) // -ve values not allowed
2) to use -ve values, we use str.slice(start, end)
3) str.length()
4) str.toLowerCase()
5) str.toUpperCase()
6) str.charAt(4)
7) str.indexOf('T')
8) str.trim() // removes spaces from str
9) str.replace('target', 'changed_value')
10) str.includes('Tush') // returns boolean
11) str.split('basis') // returns an array of strings, divided on the basis of given basis
*/