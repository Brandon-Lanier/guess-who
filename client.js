$(document).ready(readyNow);

function readyNow(){
    $('body').html('<h3>Click On: <span id="randomName"></span></h3>');
    addPeople();
    pickPerson()
}

function addPeople(){
    for (let person of people) {
    $('body').append(`
    <div class="people">
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
    </div>`)
    }
}

function randomNumber(){
    let min = 0;
    let max = people.length - 1;
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickPerson() {
    let indexNumber = randomNumber();
    let randomName = people[indexNumber].name;
    $('#randomName').append(randomName);
    return randomName;
}



