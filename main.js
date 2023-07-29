const items = document.querySelectorAll('.items');
const aTags = document.querySelectorAll('.item');

const removeBorder = () => {
    // Remove the border from all
    items.forEach(item => item.classList.remove('selected'));
}

const handleBorder = (item) => {
    removeBorder();
    // Add a border to the selected item
    item.classList.add('selected');
}

aTags.forEach(a => a.addEventListener('click', () => handleBorder(a.parentElement)));


// Add & remove border with scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Section Start
    if(scrollPosition < 900) {
        removeBorder();
        handleBorder(aTags[0].parentElement);
    } else if(scrollPosition >= 900 && scrollPosition <= 1760) { // Section 1
        removeBorder();
        handleBorder(aTags[1].parentElement);
    } else if(scrollPosition > 1760 && scrollPosition <= 2500) { // Section 2
        removeBorder();
        handleBorder(aTags[2].parentElement);
    } else if(scrollPosition > 2500) { //Section 3
        removeBorder();
        handleBorder(aTags[3].parentElement);
    }
})