const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumb .brand").textContent = product.brandname;
  document.querySelector(".breadcrumb .productName").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.singleShirt"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.singleShirt").alt = product.productdisplayname;
}
