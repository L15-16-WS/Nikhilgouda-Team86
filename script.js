const events = [
  {
    title: "AGAM Live Music for Meals",
    category: "music",
    date: "2025-06-05",
    venue: "MLR Convention Centre, Whitefield",
    price: "₹1887",
    image: "https://example.com/agam.jpg"
  },
  {
    title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    category: "comedy",
    date: "2025-06-06",
    venue: "MLR Convention Centre, Whitefield",
    price: "₹1499",
    image: "https://example.com/bassi.jpg"
  },
  {
    title: "Terrarium-Making Workshop",
    category: "workshop",
    date: "2025-06-07",
    venue: "Klayzo, Bengaluru",
    price: "₹1499",
    image: "https://example.com/terrarium.jpg"
  }
  // Add more events as needed
];

function displayEvents(filteredEvents) {
  const container = document.getElementById('events-container');
  container.innerHTML = '';
  filteredEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <div class="content">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <p class="price">${event.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterEvents(category) {
  if (category === 'all') {
    displayEvents(events);
  } else {
    const filtered = events.filter(event => event.category === category);
    displayEvents(filtered);
  }
}

// Initial display
displayEvents(events);

