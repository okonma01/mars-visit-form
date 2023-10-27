// testing src/index.js

const {
    validatePersonalInfo,
    validateTravelPreferences,
    validateHealthInfo
} = require('../src/validate');

describe('Mars Visit Application Form', () => {

    // Test cases for Personal Information section
    describe('Personal Information', () => {
        it('should return true if all fields are valid', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(true);
        });

        // Test cases for name
        it('should return false when name is missing', () => {
            const personalInfo = {
                // Missing name
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when name is blank', () => {
            const personalInfo = {
                name: '',                   // Blank name
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when name is invalid', () => {
            const personalInfo = {
                name: 'John Smith 123',     // Invalid name
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        // Test cases for dob
        it('should return false when date of birth is missing', () => {
            const personalInfo = {
                name: 'John Smith',
                // Missing dob
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when date of birth is blank', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '',                    // Blank dob
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when date of birth is invalid', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-32',                    // Invalid dob
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when date of birth is before 1900-01-01', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1899-12-31',                    // Invalid dob
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when date of birth is after today', () => {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const tomorrowString = tomorrow.toISOString().substring(0, 10);

            const personalInfo = {
                name: 'John Smith',
                dob: tomorrowString,                    // Invalid dob
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        // Test cases for nationality
        it('should return false when nationality is missing', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                // Missing nationality
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when nationality is blank', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: '',                        // Blank nationality
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when nationality is invalid', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: '1st Nations',             // Invalid nationality
                email: 'john.smith@email.com',
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        // Test cases for email
        it('should return false when email is missing', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                // Missing email
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when email is blank', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: '',                              // Blank email
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when email is invalid', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'johnDOTsmithATemailDOTcom',    // Invalid email
                phone: '1234567890'
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        // Test cases for phone
        it('should return false when phone is missing', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                // Missing phone
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when phone is blank', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '',                              // Blank phone
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });

        it('should return false when phone is invalid', () => {
            const personalInfo = {
                name: 'John Smith',
                dob: '1990-01-01',
                nationality: 'Canadian',
                email: 'john.smith@email.com',
                phone: '555-555-555',                   // Invalid phone
            };
            expect(validatePersonalInfo(personalInfo)).toBe(false);
        });


    });

    // Test cases for Travel Preferences section
    describe('Travel Preferences', () => {
        const today = new Date();
        const todayString = today.toISOString().substring(0, 10);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayString = yesterday.toISOString().substring(0, 10);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowString = tomorrow.toISOString().substring(0, 10);

        it('should return true if all fields are valid', () => {
            const travelPreferences = {
                tripType: 'one-way',
                departureDate: todayString,
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(true);
        });

        // Test cases for trip type
        it('should return false when trip type is missing', () => {
            const travelPreferences = {
                // Missing trip type
                departureDate: todayString,
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when trip type is blank', () => {
            const travelPreferences = {
                tripType: '',                       // Blank trip type
                departureDate: todayString,
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        // Test cases for departure date
        it('should return false when departure date is missing', () => {
            const travelPreferences = {
                tripType: 'one-way',
                // Missing departure date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when departure date is blank', () => {
            const travelPreferences = {
                tripType: 'one-way',
                departureDate: '',                  // Blank departure date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when departure date is in the past', () => {
            const travelPreferences = {
                tripType: 'one-way',
                departureDate: yesterdayString,        // Past departure date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        // Test cases for return date
        it('should return false when return date is missing', () => {
            const travelPreferences = {
                tripType: 'round-trip',
                departureDate: todayString,
                // Missing return date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when return date is blank', () => {
            const travelPreferences = {
                tripType: 'round-trip',
                departureDate: todayString,
                returnDate: '',                     // Blank return date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when return date is in the past', () => {
            const travelPreferences = {
                tripType: 'round-trip',
                departureDate: todayString,
                returnDate: yesterdayString,        // Past return date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

        it('should return false when return date is before departure date', () => {
            const travelPreferences = {
                tripType: 'round-trip',
                departureDate: todayString,
                returnDate: yesterdayString,        // Return date before departure date
                departureLocation: 'Toronto 🇨🇦',
                accomodationPreferences: 'None',
            };
            expect(validateTravelPreferences(travelPreferences)).toBe(false);
        });

    });

    // Test cases for Health Information section
    describe('Health Information', () => {
        it('should return true if all fields are valid', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith',
                emergencyContactPhone: '555-555-5555',
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(true);
        });

        // Test cases for emergency contact name
        it('should return false when emergency contact name is missing', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                // Missing emergency contact name
                emergencyContactPhone: '555-555-5555',
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact name is blank', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: '',                   // Blank emergency contact name
                emergencyContactPhone: '555-555-5555',
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact name is invalid', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith 123',    // Invalid emergency contact name
                emergencyContactPhone: '555-555-5555',
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact name is the same as name', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'John Smith',        // Same as name
                emergencyContactPhone: '555-555-5555',
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        // Test cases for emergency contact phone
        it('should return false when emergency contact phone is missing', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith',
                // Missing emergency contact phone
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact phone is blank', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith',
                emergencyContactPhone: '',                  // Blank emergency contact phone
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact phone is invalid', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith',
                emergencyContactPhone: '555-555-555',      // Invalid emergency contact phone
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });

        it('should return false when emergency contact phone is the same as phone', () => {
            const healthInfo = {
                name: 'John Smith',
                phone: '1234567890',
                medicalConditions: 'None',
                allergies: 'None',
                emergencyContactName: 'Jane Smith',
                emergencyContactPhone: '1234567890',       // Same as phone
                specialRequests: 'None',
            };
            expect(validateHealthInfo(healthInfo)).toBe(false);
        });
    });

});