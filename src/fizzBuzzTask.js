
function fizzBuzz(number) {
    for (var num = number; num>0; num = num + 1) {
    	if (num % 3 == 0 && num % 5 == 0) {
            return "FizzBuzz"
    	}
    	else if (num % 5 == 0) {
    		return "Buzz"
    	}
    	else if (num % 3 == 0) {
    		return "Fizz"
    	}
    	else {
    		return num
    	}
    }
}


