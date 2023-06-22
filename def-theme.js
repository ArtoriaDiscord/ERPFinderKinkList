const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (systemDarkMode) {
    localStorage.setItem("theme", "dark")
}
else {
    localStorage.setItem("theme", "light")
}

function applyTheme() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    if (localStorage.getItem("theme") === "dark") {
        themeStylesheet.href = 'dark-theme.css';
    } else {
        themeStylesheet.href = 'light-theme.css';
    }
}

applyTheme();