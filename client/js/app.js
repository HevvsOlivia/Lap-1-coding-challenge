function getRandomPlace() {
    fetch('http://localhost:3000/places/random')
        .then(resp => resp.json())
        .then(function (text) {
            document.getElementById('name').innerText = text.name;
            document.getElementById('language').innerText = `Language: ${text.language}`;
        }
        )
}

getRandomPlace();
