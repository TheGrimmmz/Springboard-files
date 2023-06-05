describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it('should not add a new payment with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment', function () {
      let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      }

      expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should not create payment with empty input', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();

      expect(curPayment).toEqual(undefined);
    });

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
    });
  });
