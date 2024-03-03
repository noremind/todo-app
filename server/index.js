import app from './app.js'

const server = app

const PORT = 5000

server.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`Server listening port ${PORT}`)
})