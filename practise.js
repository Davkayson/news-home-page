const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const mobileMenuSection = document.querySelector('.mob-menu-section');
const outerContainer = document.querySelector('.outer-container');

const query = window.matchMedia('(min-width: 481px)');

function handleMobileChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Logic for small screens
    openMenu.style.display = 'none';
    mobileMenuSection.style = 'none'
  } else {
    openMenu.style.display = 'flex'
    mobileMenuSection.style = 'flex'
  }
}


// 1. Register the listener
query.addEventListener('change', handleMobileChange);

// 2. Initial check (run the function once on page load)
handleMobileChange(query);

openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    mobileMenuSection.style.display = "flex";
    outerContainer.style.height = "100vh";
    outerContainer.style.overflow = "hidden";
})

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    mobileMenuSection.style.display = "none";
    outerContainer.style.height = "auto";
    outerContainer.style.removeProperty('overflow');
})
