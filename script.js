document.addEventListener('DOMContentLoaded', () => {
    // Switch between multiple headings
    document.getElementById('change-heading-btn').addEventListener('click', () => {
        const headings = document.querySelectorAll('.main-title');
        let visibleHeadingIndex = -1;

        // Find the currently visible heading
        headings.forEach((heading, index) => {
            if (heading.style.display !== 'none') {
                visibleHeadingIndex = index;
                heading.style.display = 'none'; // Hide the current heading
            }
        });

        // Show the next heading in the list (loop back to the first)
        const nextHeadingIndex = (visibleHeadingIndex + 1) % headings.length;
        headings[nextHeadingIndex].style.display = 'block';
    });

    // Add or remove an element when a button is clicked
    document.getElementById('toggle-element-btn').addEventListener('click', () => {
        const dynamicText = document.getElementById('dynamic-text');
        if (dynamicText) {
            dynamicText.remove(); // Remove the element
        } else {
            const newText = document.createElement('p');
            newText.id = 'dynamic-text';
            newText.textContent = 'This paragraph has been added back dynamically!';
            document.getElementById('dynamic-section').appendChild(newText);
        }
    });
});