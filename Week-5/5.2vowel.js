const vowels = ["a", "e", "i", "o", "u"];

const getVowelsCount = (string) => {
  const lowerCaseString = string.toLowerCase();
  const arr = lowerCaseString.split("");
  let counts = new Map();
  arr.forEach((element) => {
    if (vowels.indexOf(element) !== -1) {
      counts.set(element, counts.get(element) ? counts.get(element) + 1 : 1);
    }
  });

  return counts;
};

console.log(getVowelsCount("Rohini and Riya"));
//////////////////////////////////////////////////////////////////