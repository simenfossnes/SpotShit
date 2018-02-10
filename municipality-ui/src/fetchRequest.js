function dbStatement(statement) {
	let returnValue = fetch(newRequest('GET', 'https://cryptic-scrubland-95766.herokuapp.com/spotshit/statement?' + statement, {
	})).then(res => {
		return res.json();
	}).then(res => {
		return res;
	}).catch(err => {
		console.log(err);
	});

	return returnValue;
}

function newRequest(type, path, params) {
	let request;

	request = new Request(path, {
		method: 'GET'
	});

	return request;
}

/* useage :
	Promise.resolve(dbStatement(statement)).then((res) => {
		do whatever with res here
	});
}*/

module.exports = {
	dbStatement: dbStatement
}
