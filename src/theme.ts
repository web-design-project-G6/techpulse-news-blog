// theme.js

const THEME_KEY = "techpulse-theme";

// Get saved theme
function getSavedTheme() {
    return localStorage.getItem(THEME_KEY);
}

// Apply theme to the whole website
function applyTheme(theme: "dark" | "light") {
    const html = document.documentElement;

    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }

    // Update all theme buttons
    document.querySelectorAll(".theme-toggle").forEach((button) => {
        if (theme === "dark") {
            button.innerHTML = "☀️";
            button.setAttribute("aria-label", "Switch to light mode");
            button.setAttribute("title", "Light Mode");
        } else {
            button.innerHTML = "🌙";
            button.setAttribute("aria-label", "Switch to dark mode");
            button.setAttribute("title", "Dark Mode");
        }
    });
}

// Set initial theme
function initializeTheme() {
    const savedTheme = getSavedTheme();

    // Use saved theme
    if (savedTheme) {
        applyTheme(savedTheme === "dark" ? "dark" : "light");
        return;
    }

    // If no saved theme, use system preference
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(prefersDark ? "dark" : "light");
}

// Toggle between light and dark
export function toggleTheme() {
    const html = document.documentElement;

    const isDark = html.classList.contains("dark");

    const newTheme = isDark ? "light" : "dark";

    localStorage.setItem(THEME_KEY, newTheme);

    applyTheme(newTheme);
}

// Wait until HTML is ready
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();

    // Add click event to every theme button
    document.querySelectorAll(".theme-toggle").forEach((button) => {
        button.addEventListener("click", toggleTheme);
    });
});