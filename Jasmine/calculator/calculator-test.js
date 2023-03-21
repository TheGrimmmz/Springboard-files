
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 150000,
    years: 35,
    rate: 7
  }
  expect(calculateMonthlyPayment(values)).toEqual('958.28')
})


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 200000,
    years: 20,
    rate: 4.0
  }
  expect(calculateMonthlyPayment(values)).toEqual('1211.96')
  })

/// etc
it('should handle high interest rate', function(){
  const values = {
    amount: 47500,
    years: 1,
    rate: 60
  }
  expect(calculateMonthlyPayment(values)).toEqual('5359.21')
})
