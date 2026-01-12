const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const mobileMenuSection = document.querySelector('.mob-menu-section');
const outerContainer = document.querySelector('.outer-container');

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