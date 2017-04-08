(function(){
  'use strict';

  describe("Generate prime numbers in an array when given a value: ", function() {

    describe("Case for an invalid value input", function() {

      it("should return invalid for an invalid input", function() {
        expect(getPrimes('abcdefghijklmnopqrstuvwxyz')).toEqual('Invalid');
      });

    });

    describe("Case for a value less than or equal to zero", function() {

      it("should return 'put num greater than zero' for 0", function() {
        expect(getPrimes(0)).toEqual('put num greater than zero');
      });

      it("should return 'put num greater than zero' for -10", function() {
        expect(getPrimes(-10)).toEqual('put num greater than zero');
      });

      it("should return 'put num greater than zero' for -135", function() {
        expect(getPrimes(-135)).toEqual('put num greater than zero');
      });
    });

    describe("Case for when no prime array is generated", function() {

      it("should return [] for 1", function() {
        expect(getPrimes(1)).toEqual([]);
      });

    });

    describe("Case for when prime array is generated", function() {

      it("should return [2, 3, 5, 7] for 7", function() {
        expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 50", function() {
        expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      });

      it("should return [2] for 2", function() {
        expect(getPrimes(2)).toEqual([2]);
      });
      
    });
  });
})();