fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showBrand);
}

function showBrand(brand) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  const parent = document.querySelector("main");
  copy.querySelector("h3").textContent = brand.brandname;
  copy.querySelector("a").href =
    "productList.html?brandname=" + brand.brandname;
  parent.appendChild(copy);
}
