const categories = document.querySelectorAll('.item');

console.log('Number of categories', categories.length);
console.log('');
categories.forEach((elemement) => {
    console.log('Category:', elemement.firstElementChild.textContent)
    console.log('Elements:', elemement.lastElementChild.children.length)
    console.log('')
})