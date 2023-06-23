const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let btn = null
document.addEventListener('DOMContentLoaded', function() {
    btn = document.querySelector(".theme-btn img")
    if (localStorage.getItem("theme") === null) {
        if (systemDarkMode) {
            localStorage.setItem("theme", "dark")
        }
        else {
            localStorage.setItem("theme", "light")
        }
    }
    applyTheme();
    btn.addEventListener('click', changeTheme)
});

function applyTheme() {
    let themeStylesheet = document.getElementById('themeStylesheet');
    if (localStorage.getItem("theme") === "dark") {
        btn.src = 'service_res/sun.svg'
        themeStylesheet.href = 'dark-theme.css';
    } else {
        btn.src = 'service_res/moon.svg'
        themeStylesheet.href = 'light-theme.css';
    }
}

function changeTheme() {
    let themeStylesheet = document.getElementById('themeStylesheet');
    if (localStorage.getItem("theme") === "dark") {
        btn.src = 'service_res/moon.svg'
        themeStylesheet.href = 'light-theme.css';
        localStorage.setItem("theme", "light")
    } else {
        btn.src = 'service_res/sun.svg'
        themeStylesheet.href = 'dark-theme.css';
        localStorage.setItem("theme", "dark")
    }
}

