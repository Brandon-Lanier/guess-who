$(document).ready(readyNow);

let randomName = '';

function readyNow(){
    $('#nameGen').html('<h1>Click On: <span id="randomName"></span></h1>');
    pickPerson();
    addPeople();
    $('#container').on('click', '.people', selectPerson)
}

function addPeople() {
    $('#container').empty();
    $('#container').fadeIn(2000);
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
    let max = people.length - 1; // max number is array length - 1
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickPerson() {
    $('#randomName').empty(); // Clear name before new one selected
    $('body').css('background-color', '') //Resets background color
    let indexNumber = randomNumber(); // Selects a random number the length of the people array.
    randomName = people[indexNumber].name; //random index in people array
    $('#randomName').append(randomName);
    return randomName;
}

function selectPerson() {
     let person = $(this).data().name; // The person selected's stored data name
     if (person === randomName) { //if random name matches stored data name in div.
        $('body').css('background-color', '#00d639'); // Change background to green if correct
        setTimeout(() => {correctPerson()}, 100);
     } else {
        $('body').css('background-color', 'red');
        setTimeout(() => {`${alert('Not Quite.  Let\'s try again!')}`, $('body').css('background-color', '')}, 100); //without timeout the alert will run before background color change.
     }
}

function correctPerson() {
    alert('You Did It! Let\'s play again!');
    setTimeout(() => {addPeople(), pickPerson()}, 2000); // After alert, add new shuffled array of pictures and restart the pick person function
    $('#container').fadeOut(2000)
}
 
function shuffle(array) { // This is sourced from an array randomizer on the web.
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }




