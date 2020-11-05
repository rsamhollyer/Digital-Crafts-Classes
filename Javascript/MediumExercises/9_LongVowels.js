const longVowels = function (string) {
	const vowels = "AEIOU".split("");
	let testString = [...string.toUpperCase()];

	for (let i = 0; i < testString.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (testString[i] === vowels[j] && testString[i - 1] === vowels[j]) {
				testString[i] = vowels[j].repeat(4);
			}
		}
	}
	console.log(testString.join(""));
};
let test = longVowels("God Damn Good");
// console.log(test);

const vowelReplacer = function (string) {
	const regex = /[aeiou]{2}/gim;
	return string.replace(regex, (match, offset, string) =>
		string.charAt(offset).repeat(5)
	);
};

console.log(vowelReplacer("ccaabbaa || deebee || iizzii || guubuu || dooboo"));
