describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100
      tipAmtInput.value = 20
      submitPaymentInfo()
    });

    it('should sum total bill amount of all payments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100)

      billAmtInput.value = 200
      tipAmtInput.value = 40

      submitPaymentInfo()

      expect(sumPaymentTotal('billAmt')).toEqual(300)
    });

    it('should sum tip percent of a single tip', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23)
      expect(calculateTipPercent(111, 11)).toEqual(10)
    });

    it('should generate new td from value and append to tr', function () {
      let newTr = document.createElement('tr')

      appendTd(newTr, 'test')

      expect(newTr.children.length).toEqual(1)
      expect(newTr.firstChild.innerHTML).toEqual('test')
    });

    it('should generate delete td and append to tr', function () {
      let newTr = document.createElement('tr')

      appendDeleteBtn(newTr)

      expect(newTr.children.length).toEqual(1)
      expect(newTr.firstChild.innerHTML).toEqual('X')
    });

    afterEach(function() {
      billAmtInput.value = ''
      tipAmtInput.value = ''
      allPayments = {}
      paymentId = 0
    });
  });
