const states = require('./states.json');

const upper = s => s.toUpperCase();
const extractName = st => st.name;

const stateArray = Object.values(states);
const namesAndCities = stateArray.reduce((obj, state) => {
    return {
        ...obj,
        [state.name]: Object.keys(state.cities)
    }
}, {});

function getByAbbreviation(abbr) {
    abbr = upper(abbr)
    return states[abbr];
}

function searchByName(searchTerm) {
    searchTerm = upper(searchTerm)
    
    const names = stateArray.map(extractName).map(upper);
    const index = names.findIndex(n => n.includes(searchTerm));
    if (index >= 0) {
        return stateArray[index];
    } else {
        return null;
    }
}

function statesWithCity(searchTerm) {
    searchTerm = upper(searchTerm);    
    const upperArr = Object.values(namesAndCities).map(arr => arr.map(upper));
    const indexes = [];

    for (let i=0; i<upperArr.length; i++) {
        if (upperArr[i].includes(searchTerm)) {
            indexes.push(i);
        }
    }
    return indexes.map(i => stateArray[i].name);
}

module.exports = {
    getByAbbreviation,
    searchByName,
    statesWithCity,
};
