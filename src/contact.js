export function contactSection() {
  const contentEl = document.querySelector("div#content");

  const contactEl = document.createElement("h2");
  contactEl.textContent = "Contact us";

  const addressEl = document.createElement("p");
  addressEl.textContent = "Unit 4, 5 Coventry St, London W1D 7DH";

  contentEl.appendChild(contactEl);
  contentEl.appendChild(addressEl);
}
