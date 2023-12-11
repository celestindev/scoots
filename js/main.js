// All my scripts goes here very important

const apiKey =
  "https://api.openweathermap.org/data/2.5/weather?id=3719028&units=metric&appid=38df4f6d3027269d8c24e32b31035019";
const city = "HAITI";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=3719028&units=metric&appid=38df4f6d3027269d8c24e32b31035019`;

const oneDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=3719028&units=metric&appid=38df4f6d3027269d8c24e32b31035019`;

// This is my Fetch current weather data very important
fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "Temp"
    ).innerText = `Temperature: ${data.main.temp} K`;
    document.getElementById(
      "Condition"
    ).innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById(
      "Humidity"
    ).innerText = `Humidity: ${data.main.humidity}%`;
  })
  .catch((error) => console.error("Error fetching current weather:", error));

// Here also is my Fetch one day forecast really nice
fetch(oneDayForecastUrl)
  .then((response) => response.json())
  .then((data) => {
    const oneDayForecast = data.list[0].weather[0].description;
    document.getElementById(
      "one-day-forecast"
    ).innerText = `Forecast: ${oneDayForecast}`;
  })
  .catch((error) => console.error("Error fetching one day forecast:", error));

// This part is my js code for rental page very important
const directoryURL = "https://raw.githubusercontent.com/celestindev/scoots/main/data/rentals.json";

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => displayRentals(data.rentals))
  .catch((error) => console.error("Error fetching data:", error));

function displayRentals(rentals) {
  const rentalsContainer = document.getElementById("container");

  rentals.forEach((rental) => {
    const rentalCard = document.createElement("div");
    rentalCard.classList.add("card");

    const rentalImg = document.createElement("img");
    rentalImg.src = rental.imageUrl; 
    rentalImg.alt = rental.type; 
    rentalImg.classList.add("img");


    const detailsPropertyName = rental.hasOwnProperty('details') ? 'details' : `detail${rental.type.replace(/\s/g, '')}`;
    const details = rental[detailsPropertyName];

    const rentalInfo = document.createElement("div");
    rentalInfo.innerHTML = `
      <h3>${rental.type}</h3>
      <p>Nbr. Persons: ${rental.nbrOfPersons}</p>
      <p>Half Day: $${rental.halfPrice}</p>
      <p>Full Day: $${rental.fullPrice}</p>
      <p>Description: ${rental.description}</p>
  

`;

    rentalCard.appendChild(rentalImg);
    rentalCard.appendChild(rentalInfo);

    rentalsContainer.appendChild(rentalCard);
  });
}

// This my code for current date very important

var footer = document.getElementById("footer_date");
var currentDate = new Date();
footer.innerHTML = currentDate.toLocaleString();
