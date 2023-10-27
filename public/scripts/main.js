import { countries } from './countries.js'

const countrySection = document.querySelector(".country-section");
const numOfCountries = document.querySelector(".number-of-countries");
const startingWord = document.querySelector(".startingWord");
const anyWord = document.querySelector(".anyWord");
const input = document.querySelector("#input");
const sortButton = document.querySelector(".sort-button")
const searchTracker = document.querySelector("#search-tracker");
numOfCountries.textContent = countries.length.toLocaleString()

function countryDisplayMaker(countryName) {
    const newDisplay = document.createElement('div')
    const newDisplayP = document.createElement('p');
    newDisplay.classList.add("w-[10rem]", "md:w-1/4", "h-[10rem]", "md:h-[20rem]", "bg-blend-overlay", "bg-slate-700", "bg-center", "bg-mapBg",  "flex", "justify-center", "items-center");
    newDisplayP.classList.add("text-lg", "md:text-2xl", "font-bold", "text-white");
    newDisplayP.innerText = countryName;
    newDisplay.appendChild(newDisplayP);
    countrySection.appendChild(newDisplay);
}

for (const country of countries) {
    countryDisplayMaker(country);
}

function filterCountries(letter) {
    let filteredCountries;
    let searchMessage;

    if (startingWordActive) {
        filteredCountries = countries.filter(country => country.toLowerCase().startsWith(letter.toLowerCase()));
        searchMessage = `There are <span class="italic text-green-600 font-bold font-mono">${filteredCountries.length}</span> countries that start with <span class="italic text-red-700 font-bold font-mono">"${letter}"</span>.`;
        searchTracker.innerHTML = searchMessage;
    } else if (anyWordActive) {
        filteredCountries = countries.filter(country => country.toLowerCase().includes(letter.toLowerCase()));
        searchMessage = `There are <span class="italic text-green-600 font-bold font-mono">${filteredCountries.length}</span> countries containing <span class="italic text-red-700 font-bold font-mono">"${letter}"</span>.`;
        searchTracker.innerHTML = searchMessage;
    } else {
        filteredCountries = countries;
        searchMessage = "Showing all countries.";
        searchTracker.textContent = searchMessage;
    }

    countrySection.innerHTML = "";
    filteredCountries.forEach(country => {
        countryDisplayMaker(country);
    });
}

let startingWordActive = false;
let anyWordActive = false;

startingWord.addEventListener('click', function() {
    startingWordActive = !startingWordActive;
    anyWordActive = false;
});

anyWord.addEventListener('click', function() {
    anyWordActive = !anyWordActive;
    startingWordActive = false;
});


input.addEventListener('input', function(event) {
    const searchLetter = event.target.value.trim();
    filterCountries(searchLetter);
});

sortButton.addEventListener('click', function() {
    let searchLetter = input.value.trim();
    let filteredCountries;
    if (startingWordActive) {
        filteredCountries = countries.filter(country => country.toLowerCase().startsWith(searchLetter.toLowerCase()));
    } else if (anyWordActive) {
        filteredCountries = countries.filter(country => country.toLowerCase().includes(searchLetter.toLowerCase()));
    } else {
        filteredCountries = countries;
    }

    filteredCountries.sort();
    countrySection.innerHTML = "";
    filteredCountries.forEach(country => {
        countryDisplayMaker(country);
    });
});
