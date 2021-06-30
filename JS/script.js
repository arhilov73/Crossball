
// Script to sort the table:
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.ration-season-table thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
});


// Script to show more nav-items:
document.querySelector('.nav-item.dropdown').addEventListener('click', () => {
    document.querySelector('.dropdown-menu').classList.toggle('invisible');
    document.querySelector('.nav-dropdown-arrow').classList.toggle('active');
})


// Script to show 2nd lvl of aside acc menu:
document.querySelector('#toggle-acc-item').addEventListener('click', () => {
    document.querySelector('#toggle-acc-item').classList.toggle('item-active');
    document.querySelector('.acc-menu-arrow').classList.toggle('active');
    document.querySelector('.acc-menu-lvl2').classList.toggle('invisible');
})


// Script for calling mobile menu:
const nav = document.querySelector('.nav');
document.querySelector('.burger-toggle').addEventListener('click', () => {
    nav.hasAttribute('style') ? nav.removeAttribute('style') : nav.setAttribute('style','right: 0;');
    
})