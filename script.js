function firstWord(s) {
  // your code here
	
	if(s.includes(" "))
	{
	let arr=s.split(" ");
	for(let a of arr)
		{
			if(a!=" ")
			{
				return a.join("");
			}
		}
	}
	else{
		return s;
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
