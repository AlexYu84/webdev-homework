// Note: Your JavaScript code should be inside of functions

// Function to dynamically create the "Welcome" section
const createWelcomeSection = () => {
  // Select the parent element where the section will be appended
  const welcomeSection = document.getElementById('welcome');

  // Create the container for the image and bio
  const container = document.createElement('div');
  container.classList.add('d-flex', 'flex-column', 'align-items-center', 'p-3', 'rounded'); // Bootstrap classes for vertical layout
  container.style.backgroundColor = '#f8f9fa'; // Optional: Light background color

  // Create and append the big "Hello" heading
  const helloHeading = document.createElement('h1');
  helloHeading.textContent = 'Hello'; // Big greeting
  helloHeading.classList.add('display-4', 'mb-4'); // Bootstrap class for large text and spacing
  container.appendChild(helloHeading);

  // Create and append the image
  const img = document.createElement('img');
  img.src = '../images/image0.jpg'; // Replace with the actual path to your image
  img.alt = 'an image of me!';
  img.classList.add('img-fluid', 'rounded-circle', 'mb-3'); // Bootstrap classes for rounded corners and spacing
  img.style.width = '150px'; // Optional: Set image width
  container.appendChild(img);

  // Create and append the bio container
  const bioContainer = document.createElement('div');
  bioContainer.classList.add('text-center');
  bioContainer.style.maxWidth = '500px'; // Constrain the width of the bio text
  bioContainer.style.margin = '0 auto'; // Center-align the container

  // Create and append the bio text
  const bio = document.createElement('p');
  bio.innerHTML = `
          <strong>Hello! My name is Alex Yu. </strong>
          I am a first year graduate student here at PSU
          studying Computer Science. Computers are my life and I love doing all things
          related to it. I also have way too many hobbies ranging from music, working 
          on cars, to building keyboards.
  `;
  bio.classList.add('text-center', 'mb-0'); // Bootstrap class to center-align text
  bioContainer.appendChild(bio);

  // Append the bio container to the main container
  container.appendChild(bioContainer);

  // Append the main container to the "welcome" section
  welcomeSection.appendChild(container);
};

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createWelcomeSection);


// Function to fetch data from the API
const fetchData = async (url) => {
  try {
      const response = await fetch(url); // Retrieve data from the API
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON response
      return data; // Return the parsed data
  } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Return null in case of an error
  }
};

// Function to create a starship card
const createStarshipCard = (starship) => {
  // Create the main card container
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3', 'p-3', 'shadow-sm', 'rounded'); // Bootstrap classes for styling
  card.style.backgroundColor = '#f8f9fa'; // Light grey background

  // Create and append the starship name (as a heading)
  const cardTitle = document.createElement('h3');
  cardTitle.textContent = starship.name || 'Unknown Starship';
  cardTitle.classList.add('card-title', 'text-center', 'mb-4');
  card.appendChild(cardTitle);

  // Create and append the starship manufacturer
  const manufacturerElement = document.createElement('p');
  manufacturerElement.innerHTML = `<strong>Manufactured by:</strong> ${starship.manufacturer || 'N/A'}`;
  manufacturerElement.classList.add('mb-2');
  card.appendChild(manufacturerElement);

  // Create and append the starship cost
  const costElement = document.createElement('p');
  costElement.innerHTML = `<strong>Cost:</strong> ${starship.cost_in_credits ? `${starship.cost_in_credits} credits` : 'Unknown'}`;
  costElement.classList.add('mb-2');
  card.appendChild(costElement);

  // Create and append the starship speed
  const speedElement = document.createElement('p');
  speedElement.innerHTML = `<strong>Max Speed:</strong> ${starship.max_atmosphering_speed || 'N/A'}`;
  speedElement.classList.add('mb-2');
  card.appendChild(speedElement);

  // Create and append the cargo capacity
  const cargoElement = document.createElement('p');
  cargoElement.innerHTML = `<strong>Cargo Capacity:</strong> ${starship.cargo_capacity || 'N/A'}`;
  cargoElement.classList.add('mb-2');
  card.appendChild(cargoElement);

  return card; // Return the completed starship card
};

// Function to initialize the starship cards display
const displayStarships = async () => {
  const url = 'https://swapi.dev/api/starships/'; // Star Wars API endpoint
  const data = await fetchData(url); // Fetch the starship data

  if (data && data.results) {
      const starshipsContainer = document.getElementById('starships'); // Target container in the DOM
      starshipsContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-around'); // Flexbox styling for card layout
      data.results.forEach((starship) => {
          const starshipCard = createStarshipCard(starship);
          starshipCard.style.width = '300px'; // Set a fixed card width
          starshipsContainer.appendChild(starshipCard); // Append each starship card to the container
      });
  } else {
      console.error('No starship data available.');
  }
};

// Run the display function after DOM is loaded
document.addEventListener('DOMContentLoaded', displayStarships);


// Select the form element
const form = document.getElementById('userForm');

// Listen for the submit event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if the form is valid
    if (!form.checkValidity()) {
        form.classList.add('was-validated'); // Apply Bootstrap validation styles
        console.warn('Form is invalid. Please fill out all required fields.');
        return; // Exit the function if the form is invalid
    }

    // Grab form data
    const formData = new FormData(form);
    const userInfo = {};
    formData.forEach((value, key) => {
        userInfo[key] = value;
    });

    // Output form data to the console
    console.group('Form Submission');
    console.log('%cUser Information:', 'font-weight: bold; color: blue;');
    console.table(userInfo); // Nicely formatted output in table format
    console.groupEnd();

    // Optionally clear the form after submission
    form.reset();
    form.classList.remove('was-validated');
});
