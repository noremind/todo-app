import express from 'express'

import bodyParser from 'body-parser'
import experssip from 'express-ip'
import routes from './routes/todos-routes.js'

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(experssip().getIpInfoMiddleware) // Allow get access IP info client

app.use((req, res, next) => { //CORS pretection and helped for merge another servers
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});

app.post('/api/todos', (req, res) => {
	try {

		fetch('http://localhost:5173/db/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'aplication/json' },
			body: JSON.stringify(req.body)
		})
			.then(response => response.json())
			.then(json => console.log(json))

		res.status(200).end()
	} catch (err) {
		console.log(err)
	}
})


routes(app)


export default app
