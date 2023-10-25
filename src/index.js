var stage = 1;

const validateSection = function(stage) {
    if (stage === 1) {
        const personalInfo = document.querySelector('#personal-info');
        const name = document.querySelector('#name');
        // if (name.value === '') {
        //     alert('Please enter your name');
        //     return false;
        // } else if (typeof name.value != 'string' || !isNaN(name.value)) {
        //     alert('Please enter a valid name');
        //     return false;
        // }
    }
    return true;
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('border', 'border-secondary');
    });

    const personalInfo = document.querySelector('#personal-info');
    const travelPref = document.querySelector('#travel-preferences');
    const healthInfo = document.querySelector('#health-info');
    const submitButton = document.querySelector('#submit');
    const backButton = document.querySelector('#back');
    const nextButton = document.querySelector('#next');
    nextButton.addEventListener('click', function() {
        // validate entries
        if (validateSection(stage)) {
            if (stage === 1) {
                personalInfo.hidden = true;
                travelPref.hidden = false;
                healthInfo.hidden = true;
                stage = 2;
                backButton.hidden = false;
            } else if (stage === 2) {
                personalInfo.hidden = true;
                travelPref.hidden = true;
                healthInfo.hidden = false;
                backButton.hidden = false;
                stage = 3;
                submitButton.hidden = false;
                nextButton.hidden = true;
            } else if (stage === 3) {
                backButton.hidden = true;
            }
        }
    });

    backButton.addEventListener('click', function() {
        if (stage === 1) {
            backButton.hidden = true;
        } else if (stage === 2) {
            personalInfo.hidden = false;
            travelPref.hidden = true;
            healthInfo.hidden = true;
            stage = 1;
            backButton.hidden = true;
        } else if (stage === 3) {
            personalInfo.hidden = true;
            travelPref.hidden = false;
            healthInfo.hidden = true;
            stage = 2;
            submitButton.hidden = true;
            nextButton.hidden = false;
        }
    });

    const oneWay = document.querySelector('#one-way');
    const roundTrip = document.querySelector('#round-trip');

    oneWay.addEventListener('click', function() {
        roundTrip.checked = false;
    });

    roundTrip.addEventListener('click', function() {
        oneWay.checked = false;
    });

});
