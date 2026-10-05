

function menuBarsChange(x) {
    x.classList.toggle('change');

    openNavMenu();
}

function openNavMenu() {
    // Define element
    const NAV = document.getElementById('main-menu-navigation');

    // Toggle the class of the nav
    // When toggled, the new class will be selected in the mobile layout media query
    if (!NAV.classList.contains('full-screen-nav')) {
        NAV.classList.remove('main-nav');
        // Forces page to top
        // Without this, the absolute positioning of the menu bars and nav container 
        //  could be off screen
        window.scrollTo(0, 0);
        NAV.classList.toggle('full-screen-nav');
        document.body.classList.add("no-scroll");

    } else { // Sets normal mobile layout view
        NAV.classList.remove('full-screen-nav');
        document.body.classList.remove("no-scroll");
        NAV.classList.add('main-nav');
    }    
}