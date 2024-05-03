// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



const mainEl = document.querySelector("main");
const subMenuEl= document.getElementById("sub-menu");
const topMenuEl = document.getElementById("top-menu");




mainEl.style.backgroundColor = 'var(--main-bg)';
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';




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

const topMenuLinks = document.getElementsByTagName('a');
console.log(topMenuLinks); 


topMenuEl.addEventListener('click', function(e){
e.preventDefault();
if (e !== topMenuLinks) {
  return console.log('was not an <a> element');
}

});