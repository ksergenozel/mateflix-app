export default class MoviesAPI {
  static async getNowPlayingMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&page=${page}`,
    );
    const data = await response.json();
    return data;
  }
  static async getUpcomingMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&page=${page}`,
    );
    const data = await response.json();
    return data;
  }
  static async getTopRatedMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&page=${page}`,
    );
    const data = await response.json();
    return data;
  }
  static async getPopularMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&page=${page}`,
    );
    const data = await response.json();
    return data;
  }
  static async getDetailsForMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US`,
    );
    const data = await response.json();
    return data;
  }
  static async getCastOfMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US`,
    );
    const data = await response.json();
    return data;
  }
  static async getVideosOfMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US`,
    );
    const data = await response.json();
    return data;
  }
  static async getSearchResults(query, page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&query=${query}&page=${page}&include_adult=false`,
    );
    const data = await response.json();
    return data;
  }
  static async getRandomMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4c0f037766fb2c31c1d7cebff987b5b1&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`,
    );
    const data = await response.json();
    return data;
  }
}
