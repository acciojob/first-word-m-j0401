function firstWord(s) {
  // your code here
	let arr=s.split(" ");
	for(let a of arr)
		{
			if(a!=" ")
			{
				return a.join("");
			}
		}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
