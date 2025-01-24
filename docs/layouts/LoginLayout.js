import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export function LoginLayout(content) {
    const container = document.createElement('div');
    const header = Header();
    const footer = Footer();

    // Create a wrapper for the main content
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'main-container'; // Add a class for styling

    contentWrapper.appendChild(content); // Append the content to the wrapper
    container.appendChild(header);
    container.appendChild(contentWrapper); // Append the wrapper to the main container
    container.appendChild(footer);

    return container;
}