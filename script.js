// CAMPUS LOCATIONS

const locations = [
    "Library",
    "CSE Department",
    "Bytes Lab",
    "Auditorium",
    "Mechanical Block",
    "Grand Hall",
    "Canteen",
    "Administrative Office"
];


// SEARCH LOCATION

function searchLocation() {

    let input = document
        .getElementById("searchInput")
        .value.trim().toLowerCase();

    let cards = document.querySelectorAll(".location-card");

    if (input === "") {
        alert("Please enter a location!");
        return;
    }

    let found = false;

    cards.forEach(card => {

        let name = card.dataset.name.toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!found) {
        alert("Sorry! Location not found.");
    }

}


// RESET SEARCH

function resetSearch() {

    document.getElementById("searchInput").value = "";

    document.querySelectorAll(".location-card").forEach(card => {
        card.style.display = "block";
    });

}


// SHOW DETAILS

function showDetails(location) {

    document.getElementById("details").innerHTML =
        "<h3>📍 " + location + "</h3>" +
        "<p>You selected " + location + ".</p>" +
        "<p>Use Find Route to get directions.</p>";

    document.getElementById("details").scrollIntoView({
        behavior: "smooth"
    });

}


// ADD LOCATIONS TO DROPDOWNS

const start = document.getElementById("start");

const destination = document.getElementById("destination");

locations.forEach(location => {

    let option1 = document.createElement("option");

    option1.value = location;
    option1.textContent = location;

    start.appendChild(option1);

    let option2 = document.createElement("option");

    option2.value = location;
    option2.textContent = location;

    destination.appendChild(option2);

});


// SAMPLE ROUTES

const routes = {

    "Library|Bytes Lab":
        "Walk towards the CSE Department and follow the corridor to Bytes Lab.",

    "Bytes Lab|Library":
        "Exit Bytes Lab and follow the corridor towards the Library.",

    "Library|Canteen":
        "Follow the main campus pathway towards the Canteen.",

    "Canteen|Library":
        "Follow the campus pathway towards the Library.",

    "Mechanical Block|Grand Hall":
        "Follow the campus pathway towards Grand Hall.",

    "Grand Hall|Mechanical Block":
        "Follow the signboards towards Mechanical Block.",

    "CSE Department|Auditorium":
        "Follow the main campus pathway towards the Auditorium.",

    "Auditorium|CSE Department":
        "Follow the campus pathway towards the CSE Department."

};


// FIND ROUTE

function findRoute() {

    let from = start.value;

    let to = destination.value;

    let result = document.getElementById("routeResult");

    if (from === "" || to === "") {

        result.innerHTML = "⚠️ Please select both locations.";

        return;

    }

    if (from === to) {

        result.innerHTML = "You are already at your destination!";

        return;

    }

    let key = from + "|" + to;

    let direction = routes[key];

    if (!direction) {

        direction = "Follow campus signboards from " +
            from + " towards " + to +
            ". Add the verified campus route to get exact directions.";

    }

    result.innerHTML =

        "<h3>🧭 Your Route</h3>" +

        "<p><b>Starting Point:</b> " + from + "</p>" +

        "<p><b>Destination:</b> " + to + "</p>" +

        "<p><b>Direction:</b> " + direction + "</p>" +

        "<p>Have a safe journey! 😊</p>";

}