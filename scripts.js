// scripts.js

// Mock data for apps
const apps = [
    {
        id: 1,
        name: "MaxBot Ai",
        description: "⚡premium unlocked⚡",
        thumbnail: "images/app1.png",
        downloadLink: "downloads/app1.apk"
    },
    {
        id: 2,
        name: "Mod App 2",
        description: "Ad-free experience.",
        thumbnail: "images/app2.png",
        downloadLink: "downloads/app2.apk"
    },
    {
        id: 3,
        name: "Mod App 3",
        description: "Unlocked premium features.",
        thumbnail: "images/app3.png",
        downloadLink: "downloads/app3.apk"
    },
    {
        id: 4,
        name: "Mod App 4",
        description: "Max level unlocked.",
        thumbnail: "images/app4.png",
        downloadLink: "downloads/app4.apk"
    }
];

// Function to render apps
const renderApps = (filteredApps = apps) => {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = ''; // Clear previous results
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        appCard.innerHTML = `
            <img src="${app.thumbnail}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" class="download-button">Download</a>
        `;

        appContainer.appendChild(appCard);
    });
};

// Generate falling balls
const generateBalls = () => {
    const animationContainer = document.querySelector('.background-animation');
    for (let i = 0; i < 50; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDuration = `${Math.random() * 5 + 2}s`;
        ball.style.animationDelay = `${Math.random() * 5}s`;
        animationContainer.appendChild(ball);
    }
};

// Event listener for search input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredApps = apps.filter(app => 
            app.name.toLowerCase().includes(query) ||
            app.description.toLowerCase().includes(query)
        );
        renderApps(filteredApps);
    });
    renderApps(); // Initial render
    generateBalls(); // Create background animation
});