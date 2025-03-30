// Common initialization functions for all pages

// Initialize all data stores if they don't exist
function initializeDataStores() {
    // Profile photos
    if (!localStorage.getItem('profilePhotos')) {
        localStorage.setItem('profilePhotos', JSON.stringify({
            me: null,
            starlight: null
        }));
    }

    // Quotes
    if (!localStorage.getItem('starlightQuotes')) {
        localStorage.setItem('starlightQuotes', JSON.stringify([
            { text: "You are the starlight that guides me through my darkest nights.", date: "2023-05-12" },
            { text: "In a universe full of stars, you shine the brightest.", date: "2023-06-18" }
        ]));
    }

    // Gallery
    if (!localStorage.getItem('starlightGallery')) {
        localStorage.setItem('starlightGallery', JSON.stringify([]));
    }

    // Memories
    if (!localStorage.getItem('starlightMemories')) {
        localStorage.setItem('starlightMemories', JSON.stringify([]));
    }

    // Poems
    if (!localStorage.getItem('starlightPoems')) {
        localStorage.setItem('starlightPoems', JSON.stringify([]));
    }
}

// Call the initialization function on page load
window.onload = initializeDataStores;