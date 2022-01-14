const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

console.log(first);

writeFileSync(
	'./content/result-sync.txt', 
	`Here is the result:\n${first}`,
	{ flag: 'a' },
);
