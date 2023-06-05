// count down from 4 to 0 every 1000 ms
// then console.log every step
// after it hits 0 console.log DONE!


function countDown(number){
let interval = setInterval(function() {
    number--
    if (number <= 0) {
        clearInterval(interval)
        console.log ("DONE!")
    } else {
    console.log(number)
    }
}, 1000)
}
