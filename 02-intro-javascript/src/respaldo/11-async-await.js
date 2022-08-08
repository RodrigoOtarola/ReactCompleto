//async, transformar una solicitud en un promesa
const getImagen = async () => {
    try {


        const apiKey = 'Y96RP1YAwBhEGfnqruzkBjc21wnX4G65';

        //peticion de tipo response, espera que promesa ejecute antes de ejecutar la otra iteracion
        //await tiene que ir si o si dentro de un async
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        //guarda url de imagen en memoria
        const img = document.createElement('img');
        img.src = url;

        //Mostrar imagen en el html
        document.body.append(img);
    } catch (e) {
        console.log('error');
    }
}
getImagen();