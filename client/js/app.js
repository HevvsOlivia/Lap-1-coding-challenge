const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

//button to get all places
// button1.addEventListener('click', showAllPlaces())
button2.addEventListener('click', getRandomPlace)

// function showAllPlaces(jsonResponse) {
//     let allPlaces = jsonResponse['places']
//     let displayPlaces = document.querySelector('#text').textContent = allPlaces
//     displayPlaces.textContent = allPlaces
// }

// function all(e) {
//     e.preventDefault()
//     fetch("http://localhost:3000/places/")
//         .then(resp => resp.json()
//             .then(json => {
//                 showAllPlaces(json)

//             })

//             // (function (array) {
//             //     for(let i=0; i < array.length; i++){
//             //         let obj = array[i];
//             //         document.getElementById('text').innerHTML = obj;
//             //     }
//             // }
//         )

// }

//button to get random place


function getRandomPlace(e) {
    e.preventDefault()
    fetch('http://localhost:3000/places/random')
        .then(resp => resp.json())
        .then(function (text) {
            document.getElementById('text').innerHTML = text.name;
        }
        )
}
