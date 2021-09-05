const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname);

const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(url);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(
    ".productListName"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector(".price").textContent = `${product.price}`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector("section>a").href = "productItem.html?id=" + product.id;

  if (product.soldout) {
    copy.querySelector("article .price").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article .price").classList.add("discount");
  }

  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
