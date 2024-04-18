// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];



const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");


mainEl.style.backgroundColor = 'var(--main-bg)';
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';


const h1 = document.createElement('h1');

h1.textContent = "DOM Manipulation"

mainEl.appendChild(h1);

mainEl.classList.add('flex-ctr');

topMenuEl.classList.add('flex-around');






menuLinks.forEach(anchor => { 
 const menuLink = document.createElement('a');
menuLink.textContent = anchor.text ;
menuLink.href = anchor.href;
topMenuEl.appendChild(menuLink)

});

//   for (let i = 0; i < menuLinks.length; i++) {
//    
//     anchor.textContent = menuLinks[i]
//      

 
// }
//  anchor.getAttribute('menuLinks'); 
