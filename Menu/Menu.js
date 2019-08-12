/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
// function createMenu(content) {
//   //Create
//   const menu = document.createElement("div");
//   const list = document.createElement("ul");
  
//   //Style
//   menu.classList.add("menu");

//   //Add to DOM
//   menu.appendChild(list);

//   //Create menu items from array 
//   menuItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     list.appendChild(listItem);
//   });

//   //Add button listener and action
//   const button = document.querySelector(".menu-button");
//   button.addEventListener("click", (e => {
//     menu.classList.toggle("menu-open");
//     //console.log("click: ", click)
//     }
//   ));
  
  

  
//   return menu;
// }

// createMenu(menuItems);

// let header = document.querySelector(".header");
// header.appendChild(createMenu(menuItems));
function createMenu(content) {
  //Create
  const menu = document.createElement("div");
  const list = document.createElement("ul");

  //Structure
  menu.appendChild(list);

  //Style..add <li>s
  menu.classList.add("menu");

  //content of the li = listItem's content and make it a child element to ul
  menuItems.forEach(element => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    list.appendChild(listItem);
  });

  const button = document.querySelector(".menu-button");
  button.addEventListener("click", event => {
    menu.classList.toggle("menu--open");
    console.log("click");
  });

  console.log(menu);
  return menu;
}

createMenu(menuItems);

let header = document.querySelector(".header");
header.appendChild(createMenu(menuItems));