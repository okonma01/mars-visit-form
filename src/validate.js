const numRegex = /\d/;
const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /\d{3}-?\d{3}-?\d{4}/;
const dateRegex = /\d{4}-\d{2}-\d{2}/;
const MIN_DATE = new Date('1900-01-01');

function validatePersonalInfo(data) {
    // Validate name
    if (data.name === '' || data.name == undefined) {
        return false;
    } else if (typeof data.name != 'string' || !isNaN(data.name) || numRegex.test(data.name)) {
        return false;
    }

    // Validate date of birth
    if (data.dob === '' || data.dob == undefined) {
        return false;
    } else if (isNaN(Date.parse(data.dob))) {
        return false;
    } else if (new Date(data.dob) > new Date()) {
        return false;
    } else if (new Date(data.dob) < MIN_DATE) {
        return false;
    }

    // Validate nationality
    if (data.nationality === '') {
        return false;
    } else if (typeof data.nationality != 'string' || !isNaN(data.nationality) || numRegex.test(data.nationality)) {
        return false;
    }

    // Validate email
    if (data.email === '') {
        return false;
    } else if (!emailRegex.test(data.email)) {
        return false;
    }

    // Validate phone number
    if (data.phone === '') {
        return false;
    } else if (!phoneRegex.test(data.phone)) {
        return false;
    }

    return true;
}

function validateTravelPreferences(data) {
    //  Validate trip type
    if (data.tripType === '' || data.tripType == undefined) {
        return false;
    }

    // Validate departure date
    date = new Date();
    const dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    if (data.departureDate === '' || data.departureDate == undefined) {
        return false;
    } else if (!dateRegex.test(data.departureDate)) {
        return false;
    } else if (data.departureDate < dateString) {
        return false;
    }

    // Validate return date
    if (data.tripType === 'round-trip' && (data.returnDate === '' || data.returnDate == undefined)) {
        return false;
    } else if (data.tripType === 'round-trip' && !dateRegex.test(data.returnDate)) {
        return false;
    } else if (data.tripType === 'round-trip' && data.returnDate < dateString) {
        return false;
    } else if (data.tripType === 'round-trip' && data.returnDate < data.departureDate) {
        return false;
    }
    
    return true;
}

function validateHealthInfo(data) {
    // Validate emergency contact name
    if (data.emergencyContactName === '' || data.emergencyContactName == undefined) {
        return false;
    } else if (typeof data.emergencyContactName != 'string' || !isNaN(data.emergencyContactName) || numRegex.test(data.emergencyContactName)) {
        return false;
    } else if (data.emergencyContactName.toLowerCase() === data.name.toLowerCase()) {
        return false;
    }

    // Validate emergency contact phone number
    if (data.emergencyContactPhone === '' || data.emergencyContactPhone == undefined) {
        return false;
    } else if (!phoneRegex.test(data.emergencyContactPhone)) {
        return false;
    } else if (data.emergencyContactPhone === data.phone) {
        return false;
    }

    return true;
}

module.exports = {
    validatePersonalInfo,
    validateTravelPreferences,
    validateHealthInfo
};