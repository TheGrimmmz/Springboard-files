const express = require('express');

const app = express();

const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian} = require('./helpers')

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }


    let result = {
      operation: "mean",
      result: findMean(nums)
    }

    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numStrings)
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
    let result = {
        operation: 'median',
        result: findMedian(nums)
    }

    return res.send(result);
});

app.get('/mode', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('you shall pass query key with comma-seperated numbers list')
    }
    let numStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'mode',
        result: findMode(nums)
    }
    return res.send(result)
})


app.use((req, res, next) =>{
    const err = new ExpressError('not found', 404);
    return next(err)
})

app.use((err, req, res, next) => {
    res.status(err. status || 500);
    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, () => {
    console.log('server starting on port 3000')
})
