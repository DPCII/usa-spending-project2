
const axios = require('axios')
const fs = require('fs')

let baseURL = `https://api.usaspending.gov/api/v2/`
let year = 2017
let agencyId = 1146
let agencyRef = `references/agency/${agencyId}/`
let majorobjectclasscode = 20

// Promise chain to write raw json

axios.get(`${baseURL}${agencyRef}`)
.then(success => {
	let collectedData = success.data.results
    this.summary = collectedData
})
.then(() => {
	let majorclassurl = `financial_spending/major_object_class/?fiscal_year=${year}&funding_agency_id=${agencyId}`
	axios.get(`${baseURL}${majorclassurl}`)
	.then(success => {
		let collectedData = success.data.results
		this.summaryObj = collectedData
	})
})
.then(() => {
	let minorclassurl = `financial_spending/object_class/?fiscal_year=${year}&funding_agency_id=${agencyId}&major_object_class_code=${majorobjectclasscode}`
	axios.get(`${baseURL}${minorclassurl}`)
	.then(success => {
		let collectedData = success.data.results
        this.summaryMinorObj = collectedData
	})
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})



