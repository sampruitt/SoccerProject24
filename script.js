API-KEY = "1242e89b4051d152b507b5f6550ca898";



fetch("https://v3.football.api-sports.io/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": API-KEY
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});