let fib = {

	n: 7,

	[Symbol.iterator]: function () {

		let i = 1;
		let oldValue = 0;
		let newValue = 0;

		return {

			next: () => {

				if (i++ <= this.n) {

					[oldValue, newValue] = [newValue, oldValue + newValue || 1];
					return { value: oldValue, done: false };

				} else {

					return { done: true };
				}
			},
		};
	},
};

for (let num of fib) {

	console.log(num);
} 