const pg = require('pg');
const {Client} = pg;
//connectionString = process.env.DATABASE_URL <- Allways upload to git and heroku with this
const connectionString = 'postgres://aajebsdweyunsk:be11363ff059916498edea9fb7fe9009fd0c91645832da654a4a297147ab32bd@ec2-23-23-92-179.compute-1.amazonaws.com:5432/d5996oojmpqjvq';
const connectionPort = process.env.PORT || 8080;
const heroku = connectionString == process.env.DATABASE_URL;

function newClient() {
    let client = new Client({
        connectionString: connectionString,
        ssl: true,
    });

    return client;
}

function newSpot(req, res) {
	let cat = req.cat;
    let src = req.src;
    let loc = req.loc;
    let msg = req.msg;

    if (isNotEmpty(src)) {
        let client = newClient();
        let sql = 'INSERT INTO spots(cat, src, loc, msg, date) VALUES($1, $2, $3, $4, $5)';
        let params = [cat, src, loc, msg, Date.now()];

        client.connect();

        client.query(sql, params, (err, query) => {
            if (!err) {
                res.statusMessage = 'Spot recorded';
                res.send('Spot recorded');
                res.status(201).end();
            } else {
				res.statusMessage = 'Sorry, some shit went down';   
                res.status(500).end();
                res.err = err;
            }

            client.end();
        });
    } else {
        res.statusMessage = 'Src was not provided';
        res.status(403).end();
    }
}

function returnFromStatement(req, res) {
	let client = newClient();
	let where = req.query.where.split(',');
	let equal = req.query.equal.split(',');

	let statement = '';

	where.forEach((item, index) => {
		statement += item + ' = $' + (index + 1);

		if (index <= where.length - 2) {
			statement += ' AND ';
		}
	});

	let sql = 'SELECT * FROM spots WHERE ' + statement;

	client.connect();

	client.query(sql, equal, (err, query) => {
		if (!err) {
			res.send(query.rows);
			res.status(200).end();
		} else {
			res.statusMessage = 'Sorry, some shit went down';   
			res.status(500).end();
            res.err = err;
        }

        client.end();
    });
}

function returnQuery(req, res) {
	let client = newClient();
	let sql = 'SELECT * FROM spots';

	client.connect();

	client.query(sql, [], (err, query) => {
		if (!err) {
			let responseArr = [];
			if (query.rows.length > 0) {
				query.rows.forEach((item) => {
				responseArr.push(item);
			});
			res.send(responseArr);
			res.status(200).end();
			} else {
				res.statusMessage = 'Sorry, some shit went down';   
				res.status(500).end();
	            res.err = err;
	        }

        	client.end();
    	}
    });
}


function isNotEmpty(...str) {
    let state = true;

    str.forEach(item => {
        if (item == null || item == undefined) {
            state = false;
        } else if(!item.replace(/\s/g, "").length > 0) {
            state = false;
        }
    });

    return state;
}

module.exports = {
	newSpot: newSpot,
	returnQuery: returnQuery,
	returnFromStatement: returnFromStatement
}