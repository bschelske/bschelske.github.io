function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.item');
    const sidebarLinks = document.querySelectorAll('.sidebar a'); // Targets sidebar links
    const buttons = document.querySelectorAll('.filter-btn');

    // 1. Update active button styling
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // This checks if the button's onclick attribute contains the category string
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // 2. Filter Main Project Cards
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    // 3. Filter Sidebar Links
    sidebarLinks.forEach(link => {
        const linkCategory = link.getAttribute('data-category');

        // We only hide links that have a data-category (keeping 'Navigation' header visible)
        if (category === 'all' || !linkCategory || linkCategory === category) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
}