const categoties = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemsCount}`);
});

