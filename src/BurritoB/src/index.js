const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


// utility functions
function readData(file) {
	let rawData = fs.readFileSync(`./src/data/${file}`);
	let data = JSON.parse(rawData);
	return data;
}

function writeData(file, data) {
	let string = JSON.stringify(data, null, 4);
	console.log(string)
	fs.writeFileSync(`./src/data/${file}`, string);
}


// routes
app.get('/api/users', (req, res, next) => {
	let users = readData('data.json')
	res.status(200).json(users);
});

app.get('/api/:user/complaints', (req, res, next) => {
	let data = readData('complaints.json');
	let complaints = data[req.params.user];
	res.status(200).send(complaints);
});

app.post('/api/complaint/respond', (req, res, next) => {
	let data = readData('complaints.json');
	let user = req.body.user,
		complaint = req.body.complaint,
		response = req.body.response;
	((data[user])[complaint]).explanation = response;
	writeData('complaints.json', data);
	//console.log(data);
	res.status(200).json((data[user])[complaint]);
});

app.post('/api/complaint/send', (req, res, next) => {
	let data = readData('complaints.json');
	let entry = {
		author: req.body.author,
		subject: req.body.subject,
		content: req.body.complaint,
		explanation: ""	
	}
	data[req.body.user][req.body.id] = entry;
	writeData('complaints.json', data);
	res.status(200).json(data[req.body.user][req.body.id]);
});

app.get('/*', (req, res, next) => {
	res.status(200).json({ "status": "serving requests" });
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})
