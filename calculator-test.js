
it('should calculate the monthly rate correctly', function () {
const values ={
  amount: 10000,
  years: 10,
  rate: 5
}
expect(calculateMonthlyPayment(values)).toEqual('4166.67');
});


it("should return a result with 2 decimal places", function() {
  const values2= {
    amount:20000000,
    years: 30,
    rate: 13
  }
  expect(calculateMonthlyPayment(values2)).toEqual('21666666.67');
});
