document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const resetButton = document.getElementById('resetButton');
    
    // Function to create a grid of squares
    function createGrid(size) {
        // Clear existing grid items
        gridContainer.innerHTML = '';

        // Calculate the number of squares per row and size of each square
        const numSquares = size * size;
        const squareSize = 960 / size; // 960px is the width/height of the grid
        
        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            gridContainer.appendChild(square);
        }
    }

    // Create initial 16x16 grid
    createGrid(10);

    // Reset button event listener
    resetButton.addEventListener('click', () => {
        const newSize = prompt('Enter the number of squares per side for the new grid:', '16');
        const size = parseInt(newSize, 10);

        if (!isNaN(size) && size > 0) {
            createGrid(size);
        } else {
            alert('Please enter a valid number.');
        }
    });
});
