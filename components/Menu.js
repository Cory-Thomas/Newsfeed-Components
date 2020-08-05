// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menuArray){
  const menu = document.createElement('div')
  const menuList = document.createElement('ul')
  const menuItem1 = document.createElement('li')
  const menuItem2 = document.createElement('li')
  const menuItem3 = document.createElement('li')
  const menuItem4 = document.createElement('li')
  const menuItem5 = document.createElement('li')
  const menuItem6 = document.createElement('li')

  menu.appendChild(menuList)
  menu.appendChild(menuItem1)
  menu.appendChild(menuItem2)
  menu.appendChild(menuItem3)
  menu.appendChild(menuItem4)
  menu.appendChild(menuItem5)
  menu.appendChild(menuItem6)

  menuItem1.textContent = menuArray[0]
  menuItem2.textContent = menuArray[1]
  menuItem3.textContent = menuArray[2]
  menuItem4.textContent = menuArray[3]
  menuItem5.textContent = menuArray[4]
  menuItem6.textContent = menuArray[5]

  menu.classList.add('menu')

  const menuButton = document.querySelector('.menu-button')

  menuButton.appendChild(menu)

  menuButton.addEventListener( 'click', event => {
    menu.classList.toggle('menu--open')
  })

  return menu;
}

const header = document.querySelector('.header')

const theMenu = menuMaker(menuItems)
header.appendChild(theMenu)
