//Sacada desde giphy
const apiKey= 'Y96RP1YAwBhEGfnqruzkBjc21wnX4G65';

//peticion fetch api
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//respuesta encadenada
peticion.then(resp=>resp.json()
)
    //Recuperar url de la imagen
    .then(({data})=>{
        const {url} = data.images.original;
        console.log(url);

        //guarda url de imagen en memoria
        const img = document.createElement('img');
        img.src = url;

        //Mostrar imagen en el html
        document.body.append(img);
    })
    .catch(console.warn);