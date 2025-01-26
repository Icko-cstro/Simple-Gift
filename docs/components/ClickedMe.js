export function ClickedMe() {
    const container = document.createElement('div');
    container.id = 'clickable-div';
    container.innerHTML = '<h1>Click me anywhere</h1>';

    
    const imageLinks = [
        'https://res.cloudinary.com/drkmgpcad/image/upload/v1724236655/20240522_223149_0000_oil3uj.png',
        'https://res.cloudinary.com/drkmgpcad/image/upload/v1723987464/cld-sample.jpg',
        'https://res.cloudinary.com/drkmgpcad/image/upload/v1723987463/samples/cup-on-a-table.jpg',
        // Add more image links as needed
    ];

    container.addEventListener('click', function (event) {
        // Get all existing images
        const images = this.querySelectorAll('img');

        // Remove the oldest image if there are already 5 or more images
        if (images.length >= 5) {
            images[0].remove();
        }

        // Create a new image element
        const img = document.createElement('img');

        // Randomly select an image from the list
        const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        img.src = randomImageLink;

        // Append the image to the clickable div
        this.appendChild(img);

        img.onload = () => {
            // Get the dimensions of the clickable div
            const divRect = this.getBoundingClientRect();

            // Get the dimensions of the image after it has been added to the DOM
            const imgRect = img.getBoundingClientRect();

            // Calculate the position of the image relative to the click
            let left = event.clientX - divRect.left; // Adjust for container position
            let top = event.clientY - divRect.top; // Adjust for container position

            // Ensure the image stays within the bounds of the clickable div
            if (left + imgRect.width > divRect.width) {
                left = divRect.width - imgRect.width;
            }

            if (top + imgRect.height > divRect.height) {
                top = divRect.height - imgRect.height;
            }

            // Set the image position
            img.style.left = `${left - 10}px`;
            img.style.top = `${top - 10}px`;
            img.style.position = 'absolute';
        };
    });

    return container;
}