var stage = 1;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const personalInfo = document.querySelector('#personal-info');
    const travelPref = document.querySelector('#travel-preferences');
    const healthInfo = document.querySelector('#health-info');
    const submitButton = document.querySelector('#submit');
    const backButton = document.querySelector('#back');
    const nextButton = document.querySelector('#next');
    const name = document.querySelector('#name');
    const dob = document.querySelector('#dob');
    const nationality = document.querySelector('#nationality');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');

    const tripType = document.querySelector('#trip-type');
    const oneWay = document.querySelector('#one-way');
    const roundTrip = document.querySelector('#round-trip');

    const departureDate = document.querySelector('#departure-date').parentElement;
    const returnDate = document.querySelector('#return-date').parentElement;
    const returnLocation = document.querySelector('#return-location').parentElement;

    const validateSection = function (stage) {
        if (stage === 1) {
            let error = false;
            let numRegex = /\d/;
            let emailRegex = /\S+@\S+\.\S+/;
            let phoneRegex = /\d{3}-?\d{3}-?\d{4}/;

            // Validate name
            if (name.value === '') {
                name.setCustomValidity('Please enter your name');
                error = true;
            } else if (typeof name.value != 'string' || !isNaN(name.value) || numRegex.test(name.value)) {
                name.setCustomValidity('Please enter a valid name');
                error = true;
            }

            // Validate date of birth
            if (dob.value === '') {
                dob.setCustomValidity('Please enter your date of birth');
                error = true;
            } else if (isNaN(Date.parse(dob.value))) {
                dob.setCustomValidity('Please enter a valid date of birth');
                error = true;
            } else if (dob.value < dob.min) {
                dob.setCustomValidity('Please enter a date of birth greater than or equal to ' + dob.min);
                error = true;
            } else if (new Date(dob.value) > new Date()) {
                dob.setCustomValidity('Please enter a date of birth that is not in the future');
                error = true;
            }

            // Validate nationality
            if (nationality.value === '') {
                nationality.setCustomValidity('Please enter your nationality');
                error = true;
            } else if (typeof nationality.value != 'string' || !isNaN(nationality.value) || numRegex.test(nationality.value)) {
                nationality.setCustomValidity('Please enter a valid nationality');
                error = true;
            }

            // Validate email
            if (email.value === '') {
                email.setCustomValidity('Please enter your email');
                error = true;
            } else if (!emailRegex.test(email.value)) {
                email.setCustomValidity('Please enter a valid email');
                error = true;
            }

            // Validate phone number
            if (phone.value === '') {
                phone.setCustomValidity('Please enter your phone number');
                error = true;
            } else if (!phoneRegex.test(phone.value)) {
                phone.setCustomValidity('Please enter a valid phone number');
                error = true;
            }

            if (error) {
                backButton.click();
                backButton.click();
            }
        }

        if (stage === 2) {
            let error = false;
            let numRegex = /\d/;
            let dateRegex = /\d{4}-\d{2}-\d{2}/;
            let date = new Date();

            //  Validate trip type
            if (!oneWay.checked && !roundTrip.checked) {
                tripType.setCustomValidity('Please select a trip type');
                error = true;
            }

            // // Validate departure date
            // if (departureDate.value === '') {
            //     departureDate.setCustomValidity('Please enter your departure date');
            //     error = true;
            // } else if (!dateRegex.test(departureDate.value)) {
            //     departureDate.setCustomValidity('Please enter a valid departure date');
            //     error = true;
            // } else if (departureDate.value < date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()) {
            //     departureDate.setCustomValidity('Please enter a departure date that is not in the past');
            //     error = true;
            // }

            // // Validate return date
            // if (returnDate.value === '' && !oneWay.checked) {
            //     returnDate.setCustomValidity('Please enter your return date');
            //     error = true;
            // } else if (!dateRegex.test(returnDate.value) && !oneWay.checked) {
            //     returnDate.setCustomValidity('Please enter a valid return date');
            //     error = true;
            // } else if (returnDate.value < date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() && !oneWay.checked) {
            //     returnDate.setCustomValidity('Please enter a return date that is not in the past');
            //     error = true;
            // } else if (returnDate.value < departureDate.value && !oneWay.checked) {
            //     returnDate.setCustomValidity('Please enter a return date that is after your departure date');
            //     error = true;
            // }

            if (error) {
                backButton.click();
            }
        }
        // return true;
    }

    nextButton.addEventListener('click', function () {
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
    });

    backButton.addEventListener('click', function () {
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

    submitButton.addEventListener('click', function (event) {
        validateSection(1);
        validateSection(2);
    });

    oneWay.addEventListener('click', function () {
        roundTrip.checked = false;
        if (oneWay.checked) {
            returnDate.hidden = true;
            returnLocation.hidden = true;
        } else {
            returnDate.hidden = false;
            returnLocation.hidden = false;
        }
    });

    roundTrip.addEventListener('click', function () {
        oneWay.checked = false;
        if (roundTrip.checked) {
            returnDate.hidden = false;
            returnLocation.hidden = false;
        } else {
        }
    });



});
