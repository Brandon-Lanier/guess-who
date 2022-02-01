$(document).ready(readyNow);

let randomName = '';

function readyNow(){
    $('#nameGen').html('<h2>Click On: <span id="randomName"></span></h2>');
    pickPerson();
    addPeople();
    $('#container').on('click', '.people', selectPerson)
}

function addPeople() {
    $('#container').empty();
    // $('#container').slideLeft();
    let shuffledPeople = shuffle(people);
    for (let person of shuffledPeople) {
        $('#container').append(`
        <div class="people" data-name="${person.name}">
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>`);
    }
}

function randomNumber(){
    let min = 0;
    let max = people.length - 1;
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickPerson() {
    $('#randomName').empty();
    $('body').css('background-color', 'white')
    let indexNumber = randomNumber();
    randomName = people[indexNumber].name;
    $('#randomName').append(randomName);
    return randomName;
}

function selectPerson() {
     let person = $(this).data().name;
     if (person === randomName) {
        $('body').css('background-color', '#00d639');
        setTimeout(() => {correctPerson()}, 100);
     } else {
        $('body').css('background-color', 'red');
        setTimeout(() => {`${alert('Not Quite.  Let\'s try again!')}`, $('body').css('background-color', '')}, 100);
     }
}

function correctPerson() {
    alert('You Did It! Let\'s play again!');
    setTimeout(() => {addPeople(), pickPerson()}, 2000);
}
 
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }




