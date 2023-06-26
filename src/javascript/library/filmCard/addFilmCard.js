import { STORAGE_KEY } from "../../api-service/api_keys";
import { getMovieById } from "../../api-service/api-service";



export async function addFilmCardToLibrary(id) {
    const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const isAtLibrary = libraryList?.find(x => x.id === Number(id));
  
    if (isAtLibrary) return console.log('film is at list');
  
    try {
        const movieObj = await getMovieById(id);
    libraryList.push(movieObj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));
    console.log(libraryList);
        
    } catch (error) {
        console.log('EROR', error )
    }
    
  }