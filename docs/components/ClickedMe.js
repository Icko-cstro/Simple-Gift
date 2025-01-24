// Import the CSS for the ClickedMe component

export function ClickedMe() {
    const container = document.createElement('div');
    container.id = 'clickable-div';
    container.innerHTML = '<h1>Click me anywhere</h1>';

    container.addEventListener('click', function(event) {
        // Get all existing images
        const images = this.querySelectorAll('img');
        
        // Remove the oldest image if there are already 5 or more images
        if (images.length >= 5) {
            images[0].remove();
        }

        const img = document.createElement('img');
        img.src = 'https://fakeimg.pl/300x200'; // Replace with your image URL
        this.appendChild(img);

        img.onload = () => {
            // Get the dimensions of the clickable div
            const divRect = this.getBoundingClientRect();
            
            // Get the dimensions of the image after it has been added to the DOM
            const imgRect = img.getBoundingClientRect();

            let left = event.clientX - divRect.left; // Adjust for container position
            let top = event.clientY - divRect.top; // Adjust for container position

            if (left + imgRect.width > divRect.width) {
                left = divRect.width - imgRect.width; 
            }


            if (top + imgRect.height > divRect.height) {
                top = divRect.height - imgRect.height;
            }

            img.style.left = `${left-10}px`;
            img.style.top = `${top-10}px`;
            img.style.position = 'absolute';
        };
    });

    return container;
}