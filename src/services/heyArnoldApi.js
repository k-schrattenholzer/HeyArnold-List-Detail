export const getCharacters = async (page = 1) => {
  try {
    const res = await fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=5&page=${page}`
    );
    return await res.json();

    // const list = results.map((char) => ({
    //   id: char._id,
    //   name: char.name,
    //   image: char.image,
    // }));
    
    // for(let char of list) {
    //   const randomGif = await getRandomGif();
    //   return {
    //     id: char.id,
    //     name: char.name,
    //     image:char.image,
    //     randomGif
    //   }
    // }
    // console.log(list);
    // return list;

  } catch(error) {
    console.error(error.message);
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
// const getRandomGif = async () => {
//   try {
//     const res = await fetch(
//       `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random`
//     );
//     const response = await res.json();
//     console.log(response[0].gifLink);
//     return response[0].gifLink;
//   } catch(error) {
//     console.error(error.message);
//   }
// }
