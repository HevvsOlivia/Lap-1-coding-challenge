

function all() {
    fetch("http://localhost:3000/places/")
        .then(resp => resp.json()
            // .then(json => {
            //     showAllPlaces(json)

            // })

            .then(function (array) {
                for (let i = 0; i < array.length; i++) {
                    const countryName = document.createElement("h1");
                    const countryLanguage = document.createElement("p");
                    countryName.innerText = array[i].name;
                    countryLanguage.innerText = array[i].language;
                    // document.getElementById('text').innerHTML = obj;
                    document.body.appendChild(countryName);
                    document.body.appendChild(countryLanguage);
                }
            }
            )
        )
}

all();
