"use server";

export const randomMovieAction = async () => {
  return await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=2`).then((response) => response.json()).then(response => {
    return response.results[Math.floor(Math.random() * response.results.length)];
  });

}