import { toggleTheme } from './theme';

// TechPulse responsive mobile navigation

const pages = [
    { name: "Home", file: "index.html" },
    { name: "News", file: "pages/news.html" },
    { name: "Blog", file: "pages/blog.html" },
    { name: "Categories", file: "pages/categories.html" },
];

function getPagePath(file: string): string {
    const currentPath = window.location.pathname;
    const isInsidePages = currentPath.includes("/pages/");

    if (isInsidePages) {
        return file === "index.html" ? "../index.html" : `./${file.replace("pages/", "")}`;
    }

    return `./${file}`;
}

function getCurrentPage() {
    const path = window.location.pathname.replace(/\\/g, "/");

    if (path.endsWith("/news.html")) return "News";
    if (path.endsWith("/blog.html")) return "Blog";
    if (path.endsWith("/categories.html")) return "Categories";
    return "Home";
}

function createMobileMenu(header: HTMLElement): void {
    if (!header || header.querySelector(".mobile-menu")) return;

    const menuButtonElement = header.querySelector("button.md\\:hidden") as HTMLButtonElement | null;
    if (!menuButtonElement) return;
    const menuButton = menuButtonElement;

    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "mobile-menu");
    menuButton.classList.add("mobile-menu-button");

    const menu = document.createElement("div");
    menu.id = "mobile-menu";
    menu.className = "mobile-menu";
    menu.setAttribute("aria-hidden", "true");

    const currentPage = getCurrentPage();


    pages.forEach((page) => {
        const link = document.createElement("a");
        link.href = getPagePath(page.file);
        link.textContent = page.name;

        if (page.name === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        link.addEventListener("click", () => closeMobileMenu());
        menu.appendChild(link);
    });

    // Dark mode button for mobile
    const themeButton = document.createElement("button");
    themeButton.type = "button";
    themeButton.className = "theme-toggle mobile-theme-toggle";
    themeButton.setAttribute("aria-label", "Switch theme");
    themeButton.innerHTML = "🌙 <span>Theme</span>";
    themeButton.addEventListener("click", () => {
        if (typeof toggleTheme === "function") {
            toggleTheme();
        }
    });
    menu.appendChild(themeButton);

    header.appendChild(menu);

    menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.contains("open");

        if (isOpen) {
            closeMobileMenu();
        } else {
            menu.classList.add("open");
            menu.setAttribute("aria-hidden", "false");
            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "Close navigation menu");
            menuButton.textContent = "✕";
        }
    });

    // Close the menu when the user clicks outside it.
    document.addEventListener("click", (event: Event) => {
        if (event.target instanceof Node && !header.contains(event.target)) {
            closeMobileMenu();
        }
    });

    // Close the menu when changing from mobile to desktop.
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
    }
}

export function initializeNavigation() {
    document.querySelectorAll("header").forEach((header) => {
        // Only attach the navigation to the top header containing the main nav.
        if (header.querySelector("nav") && header.querySelector("button.md\\:hidden")) {
            createMobileMenu(header);
        }
    });
}
