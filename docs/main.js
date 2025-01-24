import { renderLoginPage } from './pages/LoginPage.js';

function renderPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear the app div
    if (page === 'login') {
        const loginPage = renderLoginPage();
        app.appendChild(loginPage);
    }
}

// Initial render
renderPage('login');