export const getCharacters = async (page = 1) => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=5&page=${page}`
    );
    const results = await res.json();
    return results[0];
  } catch(error) {
    console.error(error.message);
  }
}
export const getRandomGif = async () => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random`
    );
    const response = res[0].json();
    return response;
  } catch(e) {
    console.error(error.message);
  }
}
