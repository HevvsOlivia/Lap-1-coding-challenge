function all() {
    fetch("http://localhost:3000/places/")
        .then(resp => resp.json()
            .then(function (array) {
                for (let i = 0; i < array.length; i++) {
                    const countryName = document.createElement("h1");
                    const countryLanguage = document.createElement("p");
                    countryName.innerText = array[i].name;
                    document.body.appendChild(countryName);
                    countryLanguage.innerText = `Language: ${array[i].language}`;
                    document.body.appendChild(countryLanguage);
                }
            }
            )
        )
}

all();
