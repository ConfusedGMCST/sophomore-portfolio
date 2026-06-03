const themeToggle = document.getElementById('theme-toggle');
const aboutButton = document.getElementById('about');
const githubButton = document.getElementById('github');
const homeButton = document.getElementById('home');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

aboutButton.addEventListener('click', () => {
    window.location = "about.html";
})

homeButton.addEventListener('click', () => {
    window.location = "index.html";
})

githubButton.addEventListener('click', () => {
    window.location = "https://github.com/ConfusedGMCST";
})