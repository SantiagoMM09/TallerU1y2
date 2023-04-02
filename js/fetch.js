function buscarHeroe(){
    const clave = '?ts=1&orderBy=modified&apikey=4dac857dd59aada566277c83779b4275&hash=5d67597a72440fdeeeff2050019b5d9b';
    
    //Obtener el valor del input
    const heroe = document.getElementById("buscador").value;
            
    //obtener el elemento donde se mostrara el resultado
    const resultado = document.getElementById("resultado");

    //buscar personajes por nombre
    fetch(`https://gateway.marvel.com:443/v1/public/characters${clave}&name=${heroe}`)
        .then(response => response.json())
        .then(data => {
            if (data.data.results.length === 0) {
               alert(`No se encontró ningun personaje con el nombre ${heroe}`)
            } else {
                const heroeId = data.data.results[0].id;

                fetch(`https://gateway.marvel.com:443/v1/public/characters/${heroeId}${clave}`)
                    .then(response => response.json())
                    .then(data => {
                        const nombre = document.createElement("p");
                        nombre.innerText = data.data.results[0].name;
                        
                        resultado.innerHTML = "";
                        resultado.appendChild(nombre);

                        const imagen = document.createElement("img");
                        if (data.data.results[0].thumbnail && data.data.results[0].thumbnail.path && data.data.results[0].thumbnail.extension) {
                            imagen.src = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension;
                          } else {
                            imagen.src = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`
                        }        

                        resultado.appendChild(imagen);        
                    })
                    .catch(err => console.error(err));
            }
        })
        .catch(err => console.error(err));
}

function variantes(){

    fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&orderBy=modified&apikey=4dac857dd59aada566277c83779b4275&hash=5d67597a72440fdeeeff2050019b5d9b`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        
        const mostrarRespuesta = respuesta.data.results;
        const table = document.createElement('table');
        const tableHeader = document.createElement('tr');
        const nameHeader = document.createElement('th');
        const idHeader = document.createElement('th');
        
        nameHeader.innerText = "Nombre";
        idHeader.innerText = "ID";
        tableHeader.appendChild(nameHeader);
        tableHeader.appendChild(idHeader);
        table.appendChild(tableHeader);

        for(let i = 0; i < mostrarRespuesta.length; i++){
            const heroeRow = document.createElement('tr');
            const nameData = document.createElement('td');
            const idDat = document.createElement('td');
            
            nameData.innerText = mostrarRespuesta[i].name;
            idDat.innerText = mostrarRespuesta[i].id;

            heroeRow.appendChild(nameData);
            heroeRow.appendChild(idDat);
            table.appendChild(heroeRow);
        }
        document.body.appendChild(table); 

    }).catch(error => console.log(error));
}

variantes()
