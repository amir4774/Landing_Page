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