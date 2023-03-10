const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movies = [];

function clearMovieInputs(userInputs) {
  for (const input of userInputs) {
    input.value = "";
  }
}

const renderMovies = (input = "") => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !input
    ? movies
    : movies.filter((movie) =>
        movie.info.title.toLowerCase().includes(input.toLowerCase())
      );

  console.log(filteredMovies);

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { info } = movie;

    for (key in info) {
      movieElement.textContent = info.title + " - " + key + ":" + info[key];
    }
    movieList.append(movieElement);
  });
};

const addMovieHandler = () => {
  const userInputs = document
    .getElementById("user-input")
    .querySelectorAll("input");
  if (
    userInputs[0].value.trim() === "" ||
    userInputs[1].value.trim() === "" ||
    userInputs[2].value.trim() === ""
  ) {
    return;
  }
  const movie = {
    info: {
      title: userInputs[0].value,
      [userInputs[1].value.toLowerCase()]: userInputs[2].value,
    },
    id: Math.random(),
  };
  movies.push(movie);
  renderMovies();
  clearMovieInputs(userInputs);
  //console.log(movie);
};

const searchMovieHandler = () => {
  const searchInput = document.getElementById("filter-title").value;
  renderMovies(searchInput);
};

searchMovieBtn.addEventListener("click", searchMovieHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
