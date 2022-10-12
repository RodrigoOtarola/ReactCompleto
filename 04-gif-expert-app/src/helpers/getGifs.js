//Para realizar busquedas de parametros.

//Petición a API.
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XRDwatGFkbYf6lP10C0d5BQTJFQOURp9&q=${category}&limit=10`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    //Permitira solo mostar los parametros del arreglo
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    //console.log(gifs);
    return gifs;
  };