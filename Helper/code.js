// define your class here
class NumberHelper {
    static isEven(n) {
        if (n % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    static isPositive(n) {
        if (n > 0) {
            return true
        } else if (n < 0) {
            return false
        }
    }
    static isNegative(n) {
        if (n < 0) {
            return true
        } else if (n > 0) {
            return false 
        }
    }
}

NumberHelper.isEven(2)
module.exports = NumberHelper