let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

let moviesTable = document.querySelector('#moviesTable tbody');

for (let movieTitle in movieData) {
  let movie = movieData[movieTitle];
  
  let row = document.createElement('tr');
  
  let titleCell = document.createElement('td');
  titleCell.textContent = movieTitle;
  row.appendChild(titleCell);
  
  let plotCell = document.createElement('td');
  plotCell.textContent = movie.plot;
  row.appendChild(plotCell);
  
  let castCell = document.createElement('td');
  castCell.textContent = movie.cast.join(', ');
  row.appendChild(castCell);
  
  let runtimeCell = document.createElement('td');
  runtimeCell.textContent = movie.runtime;
  row.appendChild(runtimeCell);
  
  let ratingCell = document.createElement('td');
  ratingCell.textContent = movie.rating;
  row.appendChild(ratingCell);
  
  let yearCell = document.createElement('td');
  yearCell.textContent = movie.year;
  row.appendChild(yearCell);
  
  moviesTable.appendChild(row);
}

let movieForm = document.querySelector('#movieForm');


movieForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  let titleInput = document.querySelector('#titleInput');
  let plotInput = document.querySelector('#plotInput');
  let castInput = document.querySelector('#castInput');
  let runtimeInput = document.querySelector('#runtimeInput');
  let ratingInput = document.querySelector('#ratingInput');
  let yearInput = document.querySelector('#yearInput');
  
  // Create a new movie object with the data entered by the user
  let newMovie = {
    plot: plotInput.value,
    cast: castInput.value.split(','),
    runtime: parseInt(runtimeInput.value),
    rating: parseFloat(ratingInput.value),
    year: parseInt(yearInput.value)
  };
  
  // Add the new movie to the existing movieData object
  movieData[titleInput.value] = newMovie;
  
  // Add a new row to the table with the new movie data
  let row = document.createElement('tr');
  row.innerHTML = `
    <td>${titleInput.value}</td>
    <td>${newMovie.plot}</td>
    <td>${newMovie.cast.join(', ')}</td>
    <td>${newMovie.runtime}</td>
    <td>${newMovie.rating}</td>
    <td>${newMovie.year}</td>
  `;
  moviesTable.appendChild(row);
  
  // Reset the form
  movieForm.reset();
});


  

















  console.log(document.URL);
  console.log(document.title);
  console.log(document.all);

  console.log('HAPPY ANNIVERSARY');





