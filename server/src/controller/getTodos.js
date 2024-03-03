export async function getTodos(res) {
	let data = null
	try {
		await fetch('http://localhost:5173/db/todos')
			.then(response => response.json())
			.then(json => data = json)
		res.status(200)
		res.send(data)
		return data
	}
	catch (err) {
		console.error(err)
	}
}