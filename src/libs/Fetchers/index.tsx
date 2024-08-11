import { ICard } from "@/libs/Types";

// devuelve todos los resultados de las populares movies de la primera pagina
export async function fetchTrending() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=944a8b04756c24bc60299b22c3747426&language=en-US&page=1&sort_by=popularity.desc",
    { cache: "no-store" }
  );
  const { results } = (await response.json()) as { results: ICard[] };
  return results;
}

// devuelve todos los resultados de las populares movies en las 10 primeras paginas en un array 
export async function fetchAllResults() {
  let results: ICard[] = [];
  let currentPage = 1;
  let hasMore = true;
  console.log(currentPage);

  while (currentPage <= 10 && hasMore) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=944a8b04756c24bc60299b22c3747426&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
      { cache: "no-store" }
    );
    const data = await response.json();

    results = results.concat(data.results);

    currentPage++;
  }

  return results;
}


export async function fetchMovieById(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data;
}


export async function fetchMovieByGenre(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/${id}/movie?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieByRecomendation(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=944a8b04756c24bc60299b22c3747426&language=en-US?page=1`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieByCredits(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchPersonById(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchPersonSocialById(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchMoviesByPersonId(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const data = await response.json();
  return data.cast;
}

export async function fetchAllbySearch(search:string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=944a8b04756c24bc60299b22c3747426&include_adult=false&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
}


export async function fetchAllbyGenre(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=944a8b04756c24bc60299b22c3747426`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchNowPlaying() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=944a8b04756c24bc60299b22c3747426`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchToRated() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=944a8b04756c24bc60299b22c3747426`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchUncoming() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=944a8b04756c24bc60299b22c3747426`
  );
  const data = await response.json();
  return data.results;
}