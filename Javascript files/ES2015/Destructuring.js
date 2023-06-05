//Obj Destruct 1
8
1846

//Obj Destruct 2
{yearNeptuneDiscovered: 1846,
yearMarsDiscovered: 1659}

//Obj Destruct 3
'Your name is Alejandro and you like purple'
'Your name is Melissa and you like green'
'Your name is undefined and you like green'

//Arr Destruct1
'Maya'
'Marisa'
'Chi'

//Arr Destruct2
'Raindrops on roses'
'whiskers on kittens'
["Bright copper kettles",
"warm woolen mittens",
"Brown paper packages tied up with strings"
]

//Arr Destruct3
[10, 30, 20]

//Refactor
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const {a, b} = obj.numbers

//Swap
[arr[0], arr[1]] = [arr[1], arr[0]]

//Race
const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest])
