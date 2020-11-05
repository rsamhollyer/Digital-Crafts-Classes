const vowelReplacer = function (string) {
	const regex = /[aeiou]{2}/gim;
	let aStringToModify = string;
	const myModifiedString = aStringToModify.replace(
		regex,
		(match, offset, string) => string.charAt(offset).repeat(5)
	);
	return myModifiedString;
};

console.log(vowelReplacer("ccaabbaa || deebee || iizzii || guubuu || dooboo"));
