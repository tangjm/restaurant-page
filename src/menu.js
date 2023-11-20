export function menuSection() {
  const contentEl = document.querySelector("div#content");

  const menuTitleEl = document.createElement("h2");
  menuTitleEl.textContent = "Menu";
  const menuItemsEl = document.createElement("ul");

  const items = ["Egg-fried rice", "Chickey satay", "Thai green curry"]
  items.forEach(item => {
    const itemEl = document.createElement("li"); 
    itemEl.textContent = item; 

    menuItemsEl.appendChild(itemEl);
  })

  contentEl.appendChild(menuTitleEl);
  contentEl.appendChild(menuItemsEl);
}
