export function InputForm(fields) {
    const container = document.createElement('div');
    container.className = 'login-container';

    fields.forEach(field => {
        // Create a wrapper for the floating input
        const wrapper = document.createElement('div');
        wrapper.className = 'form-floating mb-3'; // Add Bootstrap classes for floating label

        // Create the input element
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.className = 'form-control'; // Add Bootstrap class for styling
        input.id = field.name; // Set the id to match the label's for attribute
        input.placeholder = field.placeholder; // Set placeholder for accessibility

        // Create the label element
        const label = document.createElement('label');
        label.setAttribute('for', field.name); // Set the for attribute to link with the input
        label.textContent = field.label;

        // Append input and label to the wrapper
        wrapper.appendChild(input);
        wrapper.appendChild(label);
        
        // Append the wrapper to the container
        container.appendChild(wrapper);
    });

    // Create and append the submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Login';
    container.appendChild(submitButton);

    return container;
}