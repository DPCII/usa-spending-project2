const axios = require('axios')
const fs = require('fs')

let baseURL = `https://api.usaspending.gov/api/v2/references/toptier_agencies/`
// let agencyRef = `toptier_agencies/`
// let peopleCount = 20

// let ids = []


// build 20 urls to make calls to, and return array of promises with those urls
// let calls = ids.map(id => `${baseURL}${id}`)
// .map(url => axios.get(url))

// let calls = `${baseURL}${agencyRef}`
// calls.map(el => axios.get(el))

axios.get(baseURL)


// execute all promises, writing to disk if successful

.then(success => {
	console.log(success)
	let collectedData = success.data.results
	// console.log(collectedData)
	let stringified = JSON.stringify(collectedData)
	fs.writeFile(__dirname + '/summary.json', stringified, 'utf8', (err) => {
		if(err) {
			console.error(err)
		}
		else {
			console.log(`successfully wrote ${collectedData.length} records to db/summary.json`)
		}
	}) 
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})



