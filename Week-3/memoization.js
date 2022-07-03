const memoizedAdd = () => {
	let cache = {};
	return (value) => {
		if(value in cache){
			console.log('fetching from cache');
			return cache[value];
		} else {
			console.log('calculating result');
			let result = value + 10;
			cache[value] = result;
			return result;
		}
	}
}

const newAdd = memoizedAdd();
console.log(newAdd(10)); // it is calculated 
console.log(newAdd(10)); // it is cached and returend from cache


