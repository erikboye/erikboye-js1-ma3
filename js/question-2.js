// Q2

const apiGames = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

async function getGames(URL) {
	try {
		const response = await fetch(URL);
		const jsonObject = await response.json();
		 console.log(jsonObject.results);

         document.querySelector ('.loading').classList.add('hide');

		for (let i = 0; i < jsonObject.results.length; i++) {
			document.querySelector('main').innerHTML += `
                <div class = "card" >
                    <h2>${jsonObject.results[i].name}</h2>
                    <h3>${jsonObject.results[i].rating}</h3>
                    <p>${jsonObject.results[i].tags.length}</p>
                </div>
            `;
            if (i === 7) {
                break;
            }
		}
	} catch (error) {
		document.querySelector('.alert').innerHTML = showAlertTouser('danger', 'ERROR ERROR YOU DID WRONG'
		);
        console.log(error)

	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getGames(apiGames);
