import ImageUrls from "./imageUrls.json"

export function homeSection() {
  const divEl = document.querySelector("div#content");

  const image = document.createElement("img");
  const header = document.createElement("h2");
  const description = document.createElement("p");

  image.src = ImageUrls.restaurant_home;
  image.alt = "Restaurant";
  header.textContent = "My restaurant";
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate beatae enim accusamus at animi assumenda aperiam sint magni voluptas temporibus earum asperiores amet nesciunt veritatis, esse optio autem officiis sequi, veniam molestias doloribus. Quia nam, at accusamus voluptate ullam eius voluptatibus molestiae modi perferendis ducimus, laborum rerum cupiditate? Voluptates, autem! Dolorum corporis iure quam sapiente. Consectetur, voluptate! Dolorem voluptatem atque quis quia, commodi placeat inventore accusamus adipisci cum vitae veniam veritatis fuga velit numquam repellat unde eveniet dolores optio non! Sequi cumque velit nostrum modi nemo eligendi magni suscipit quasi cupiditate et. Deleniti accusamus fugit labore doloremque nihil a.";

  divEl.appendChild(image);
  divEl.appendChild(header);
  divEl.appendChild(description);
}
