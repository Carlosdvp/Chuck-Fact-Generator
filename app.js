


// the Chucck Norris API random quote generator
// const chuckAPI = 'https://api.chucknorris.io/jokes/random';
const chuckAPI = 'http://api.icndb.com/jokes/random';


// using axios to GET the data and post it to Twitter with Twit
function getChuckQuote() {

  axios.get(chuckAPI)
  .then(function (response) {
    const data = response.data.value.joke;
    console.log(data);
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

getChuckQuote();


//
// use an event handler to tie the getChuckQuote function to the 'next joke' button
var chuckButton = document.getElementById('next-joke-button');

// Grab the element on the page that wil display the quote
var chuckFact = document.getElementById('chuck-fact');


// add the vent listener

chuckButton.addEventListener('click', function(event) {
  event.preventDefault();
})

chuckButton.addEventListener('click', getChuckQuote);

//