let menuList = document.querySelector("ul");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let menuBar = document.querySelector(".menu");
let slider = document.querySelector(".slider");
let left = document.querySelector(".left span");
let right = document.querySelector(".right span");
let listItems = document.querySelector(".product-list");
let sortOption = document.querySelector(".sort-by .option-list");
let filterOption = document.querySelector(".filter-by .option-box");
let sortHead = document.querySelector(".all-inner");
let filterHead = document.querySelector(".category");
let sortExpandLess = document.querySelector(".sort-by .less");
let sortExpandMore = document.querySelector(".sort-by .more");
let filterExpandMore = document.querySelector(".filter-by .more");
let filterExpandLess = document.querySelector(".filter-by .less");
filterHead.addEventListener("click", () => {
  if (filterOption.classList[1]) {
    filterOption.classList.remove("hidden");
    filterExpandLess.classList.remove("hidden");
    filterExpandMore.classList.add("hidden");
    filterHead.classList.add("b-bottom");
  } else {
    filterOption.classList.add("hidden");
    filterExpandMore.classList.remove("hidden");
    filterExpandLess.classList.add("hidden");
    filterHead.classList.remove("b-bottom");
  }
});
sortHead.addEventListener("click", () => {
  if (sortOption.classList[1]) {
    sortOption.classList.remove("hidden");
    sortExpandLess.classList.remove("hidden");
    sortExpandMore.classList.add("hidden");
  } else {
    sortOption.classList.add("hidden");
    sortExpandMore.classList.remove("hidden");
    sortExpandLess.classList.add("hidden");
  }
});
let index = 1;
let myInterval;
let imgList = [
  {
    path: "images/list1.webp",
    price: 379,
    caption: "Adrika Refined Women Dress",
  },
  {
    path: "images/list2.webp",
    price: 307,
    caption: "Feminine Elegent Bracelet",
  },
  {
    path: "images/list3.webp",
    price: 192,
    caption: "Trendy Woment Fancy Dress",
  },
  {
    path: "images/list4.webp",
    price: 209,
    caption: "Fancy Woment Socks",
  },
  {
    path: "images/list5.webp",
    price: 349,
    caption: "Bluetooth Wireless Headphone",
  },
  {
    path: "images/list6.webp",
    price: 349,
    caption: "Styles Unique Men Belts",
  },
  {
    path: "images/list7.webp",
    price: 379,
    caption: "Trendy Party Wear Men Shirts",
  },
  {
    path: "images/list8.webp",
    price: 399,
    caption: "Attractive Women Casual Shoes",
  },
  {
    path: "images/list9.webp",
    price: 369,
    caption: "Relaxed Graceful Men Slipper",
  },
  {
    path: "images/list10.webp",
    price: 351,
    caption: "vivo y16 Cases & Covers",
  },
  {
    path: "images/list11.webp",
    price: 999,
    caption: "Comfy Modern Men T-shirts",
  },
  {
    path: "images/list12.webp",
    price: 699,
    caption: "Fancy Elegent Men Tshirts",
  },
  {
    path: "images/list13.webp",
    price: 399,
    caption: "Fashionate Men Tshirts",
  },
  {
    path: "images/list14.webp",
    price: 499,
    caption: "Adrika Fashionable Saree",
  },
  {
    path: "images/list15.webp",
    price: 599,
    caption: "Fashionable Latest Women Pant",
  },
  {
    path: "images/list16.webp",
    price: 1599,
    caption: "Alisha Superior Kurttis",
  },
  {
    path: "images/list17.webp",
    price: 319,
    caption: "Modern Stylus Girls Tshirts",
  },
  {
    path: "images/list18.webp",
    price: 319,
    caption: "Aadab Fashionable Men Slipper",
  },
  {
    path: "images/list19.webp",
    price: 329,
    caption: "Pretty Stylish Girls Frocks",
  },
  {
    path: "images/list20.webp",
    price: 119,
    caption: "Cables",
  },
];
imgList.forEach((item) => {
  listItems.innerHTML += `<div class="card"">
  <img src="${item.path}" class="card-img" alt="list-img">
  <div class="card-body">
    <h5 class="card-title">${item.caption}</h5>
    <p class="card-text"><span>&#8377;${
      item.price
    }</span>   <del>  &#8377;${Math.floor(
    item.price + item.price
  )}</del> <span class="price-off"> 50% off</span> </p>
    <button><a href="#" class="btn btn-primary">Add to Cart</a></button>
  </div>
</div>`;
});
slider.appendChild(
  Object.assign(document.createElement("img"), {
    src: "images/slider/flipSlider1.webp",
  })
);
console.log(menuList);
function toggleMenuBar() {
  console.log("Clicked on Menu bar");
  menuList.classList[0]
    ? menuList.classList.remove("hide")
    : menuList.classList.add("hide");
}
let slideLeft = () => {
  index == 1 ? (index = 10) : index--;
  slider.removeChild(slider.lastElementChild);
  slider.appendChild(
    Object.assign(document.createElement("img"), {
      src: `images/slider/flipSlider${index}.webp`,
    })
  );
};
let slideRight = () => {
  index === 10 ? (index = 1) : index++;
  slider.removeChild(slider.lastElementChild);
  slider.appendChild(
    Object.assign(document.createElement("img"), {
      src: `images/slider/flipSlider${index}.webp`,
    })
  );
};
let createInterval = () => {
  myInterval = setInterval(slideRight, 2000);
};
createInterval();
menuBar.onclick = () => toggleMenuBar();
console.log(right);
console.log(slider.lastElementChild);
left.onclick = () => {
  clearInterval(myInterval);
  slideLeft();
  createInterval();
};
right.onclick = () => {
  clearInterval(myInterval);
  slideRight();
  createInterval();
};
