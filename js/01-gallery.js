import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);
// const galleryItemsEl = document.querySelector(".gallery");
// console.log(galleryItemsEl);

// function initGalleryItem(items) {
//   let galleryEl = document.createElement("li");
//   galleryEl.classList.add("gallery__item");

//   let galleryElements = items.map((item) => {
//     let linkEl = document.createElement("a");
//     linkEl.classList.add("gallery__link");
//     linkEl.href = item.original;

//     let imgEl = document.createElement("img");
//     imgEl.classList.add("gallery__image");
//     imgEl.src = item.preview;
//     imgEl.alt = item.description;

//     linkEl.appendChild(imgEl);

//     return linkEl;
//   });

//   console.log(galleryElements);
//   galleryEl.append(...galleryElements);
//   galleryItemsEl.append(galleryEl);
// }
// initGalleryItem(galleryItems);
/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>; */
const galleryItemsEl = document.querySelector(".gallery");
const cardMarkup = createGalleryItem(galleryItems);
galleryItemsEl.insertAdjacentHTML("beforeend", cardMarkup);
function createGalleryItem(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
  return markup;
}

const container = document.querySelector(".gallery");
container.addEventListener("click", onClick);

function onClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target);
  evt.preventDefault();

  const modalOpen = basicLightbox.create(`
    <img src= "${evt.target.dataset.source}" width="1200" height="800">
`);

  modalOpen.show();

  container.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      modalOpen.close();
    }
  });
}
