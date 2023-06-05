function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

//findMin
const findMin = (...arguments) => Math.min(...arguments)

//mergeObjs
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//doubleandReturn
const doubleAndReturn = (arr, ...arguments) => [...arr, ...arguments.map(value => value * 2)]

//sliceAndDice

const removeRandom = items => {
  let index = Math.floor(Math.random() * items.length)
  return [...items.slice(0, index), ...items.slice(index + 1)]
}

const extend = (arr1, arr2) => {return [...arr1, ...arr2]}


const addKeyValue = (obj, key, val) => {
  let newObj = {...obj}
  newObj[key] = val
  return newObj
}

const removeKey = (obj, key) => {
  newObj = {...obj}
  delete newObj[key]
  return newObj
}

const combine = (obj1, obj2) => {
  return {...obj1, ...obj2}
}

const update = (obj, key, val) => {
  newObj = {...obj}
  newObj[key] = val
  return newObj
}
