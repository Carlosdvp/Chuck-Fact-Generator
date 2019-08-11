// the Chucck Norris API random quote generator
const chuckAPI = 'https://api.chucknorris.io/jokes/random';
// const chuckAPI = 'http://api.icndb.com/jokes/random';


// using axios to GET the data and post it to Twitter with Twit
function getChuckQuote() {
	// Grab the element on the page that wil display the quote
	var chuckFact = document.getElementById('chuck-fact');

  axios.get(chuckAPI)
  .then(function (response) {
    // grab the joke
    const data = response.data.value.joke;
    // print the data on the page
    chuckFact.innerHTML = data;
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

getChuckQuote();
