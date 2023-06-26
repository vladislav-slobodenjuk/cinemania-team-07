

// export async function addFilmCardToLibrary(id) {
//     const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//     const isAtLibrary = libraryList?.find(x => x.id === Number(id));
  
//     if (isAtLibrary) return console.log('film is at list');
  
//     const movieObj = await getMovieById(id);
//     libraryList.push(movieObj);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));
//   }