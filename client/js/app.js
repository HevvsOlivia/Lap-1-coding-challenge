function getRandomPlace() {
    fetch('http://localhost:3000/places/random')
        .then(resp => resp.json())
        .then(function (text) {
            document.getElementById('name').innerHTML = text.name;
            document.getElementById('language').innerHTML = text.language;
        }
        )
}

getRandomPlace();
