let navElements = document.querySelectorAll('#nav-select');
let blockElements = document.querySelectorAll('.block');

// Adding click event listeners to each nav element
navElements.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        // Toggling the display of the corresponding block element
        let block = blockElements[index];
        if (block.style.display === 'block') {
            block.style.display = 'none'; // Hide the block if it's currently visible
        } else {
            block.style.display = 'block'; // Show the block if it's currently hidden
        }
    });
});