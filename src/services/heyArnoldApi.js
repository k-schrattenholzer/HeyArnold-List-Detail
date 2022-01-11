export const getCharacters = async () => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=10`
    );
    return await res.json();

  } catch(error) {
    console.error(error.message);
  }
}
//pagination version
// export const getCharacters = async (page = 1) => {
//   try {
//     const res = await fetch(
//       `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=5&page=${page}`
//     );
//     return await res.json();

//   } catch(error) {
//     console.error(error.message);
//   }
// }

export const getCharacter = async (charId) => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/characters/${charId}`
    );
    return await res.json();
  } catch (error) {
    console.error(error.message)
  }
}


const getRandomGifList = async () => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=5`
    );
    const response = await res.json();
    console.log(response);
    return response;
  } catch(error) {
    console.error(error.message);
  }
}

const getRandomGif = async () => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random`
    );
    const response = await res.json();
    console.log(response[0].gifLink);
    return response[0].gifLink;
  } catch(error) {
    console.error(error.message);
  }
}
