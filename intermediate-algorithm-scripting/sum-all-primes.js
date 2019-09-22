// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
	// This list will hold all of the numbers from 1 to the num
	let numberList = [];
	let sum = 0;

	// Create a list of numbers from 1 - num
	for (let x = 1; x <= num; x++) {
		numberList.push(x);
	}

	// Create a list of all prime numbers within the original array.
	const primeList = numberList.filter(number => primeCheck(number));

	primeList.forEach(element => {
		sum = sum + element;
	});
	console.log(`Original Number List: ${numberList}`);
	console.log(`Prime Number List: ${primeList}`);
	console.log(`Sum of all prime numbers: ${sum}`);
	return sum;
}

// Helper function to check if a number is prime.
const primeCheck = num => {
	// 1 and 0 are not prime.
	if (num <= 1) {
		return false;
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
};

sumPrimes(10);
