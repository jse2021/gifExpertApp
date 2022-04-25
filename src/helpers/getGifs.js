     // obtengo los gifs de la api
    //  esta funcion es una promesa que resuelve la coleccion de las imagenes
     export const getGifs = async(category) => {       
        // pasos para la peticion http
        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI (category)}&api_key=RmTaTZWiqevzEgjKOdxW8pBUqamdEh3e`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img =>{
            return{
                id:img.id,
                title:img.title,
                // el ? verifica si viene una Imagen, ejecuta lo que sigue
                url: img.images?.downsized_medium.url
            }
        })
        
        return gifs;
    }
