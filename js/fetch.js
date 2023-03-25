const marvel = {
    render: () => {

        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&orderBy=modified&apikey=4dac857dd59aada566277c83779b4275&hash=5d67597a72440fdeeeff2050019b5d9b';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((data)=>{ //json
            //console.log(json, 'RES.JSON')

            const heroArray = data.results;
        })
    }
};

marvel.render();