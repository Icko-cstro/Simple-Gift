import { InputForm } from '../components/InputForm.js';
import { LoginLayout } from '../layouts/LoginLayout.js';
import { ClickedMe } from '../components/ClickedMe.js';

export function renderLoginPage() {
    const fields = [
        { label: 'Username', type: 'text', name: 'username', placeholder: 'Username' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Password' }
    ];

    const formContainer = InputForm(fields); // Get the form container
    const clickedMeComponent = ClickedMe(); // Create the ClickedMe component

    // Create a container to hold both the form and the ClickedMe component
    const container = document.createElement('div')
    container.appendChild(clickedMeComponent);;
    container.appendChild(formContainer);
    

    // Use the LoginLayout to wrap the container
    return LoginLayout(container);
}