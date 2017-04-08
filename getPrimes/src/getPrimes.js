function getPrimes(value) {
  if (typeof(value) == "string"){
    return ("Invalid");
  }
  else if (value <= 0) {
    return ("put num greater than zero")
  }
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= value; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= value; j += i) {
                sieve[j] = true;
            }
        
        }
    }
    return primes;
  
}