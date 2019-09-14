
const axios = require('axios')
const fs = require('fs')

let baseURL = `https://api.usaspending.gov/api/v2/`
let year = 2017
let agencyId = 1146
let agencyRef = `references/agency/${agencyId}/`
let majorobjectclasscode = 20

axios.get(`${baseURL}${agencyRef}`)

// Promise chain to write raw json 

.then(success => {
	let collectedData = success.data.results
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
.then(() => {
	let majorclassurl = `financial_spending/major_object_class/?fiscal_year=${year}&funding_agency_id=${agencyId}`
	axios.get(`${baseURL}${majorclassurl}`)
	.then(success => {
		let collectedData = success.data.results
		let stringified = JSON.stringify(collectedData)
		fs.writeFile(__dirname + '/majorclass.json', stringified, 'utf8', (err) => {
			if(err) {
				console.error(err)
			}
			else {
				console.log(`successfully wrote ${collectedData.length} records to db/majorclass.json`)
			}
		}) 
	})
})
.then(() => {
	let minorclassurl = `financial_spending/object_class/?fiscal_year=${year}&funding_agency_id=${agencyId}&major_object_class_code=${majorobjectclasscode}`
	axios.get(`${baseURL}${minorclassurl}`)
	.then(success => {
		let collectedData = success.data.results
		let stringified = JSON.stringify(collectedData)
		fs.writeFile(__dirname + '/minorclass.json', stringified, 'utf8', (err) => {
			if(err) {
				console.error(err)
			}
			else {
				console.log(`successfully wrote ${collectedData.length} records to db/minorclass.json`)
			}
		}) 
	})
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})



