

const menuBtn = document.getElementById("menuBtn")
const smNav = document.getElementById("smNav")

const foodContainer = document.getElementById("cards-wrapper");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let visibleCount = 6; // initial cards to show
const increment = 6;

function renderFoodCards(start, end) {
  for (let i = start; i < end && i < foodData.length; i++) {
    const food = foodData[i];

    const foodCard = document.createElement("div");
    foodCard.innerHTML = `
      <div class="food-card">
        <div class="food-image">
          <img src="${food.image}" alt="Food Item" />
        </div>

        <div class="food-info">
          <h2 class="food-name">${food.name}</h2>
          <p class="food-description">${food.description}</p>

          <div class="price-rating">
            <div class="price">
              <span class="currency">₹</span>
              <span class="amount">${food.price}</span>
            </div>
            <div class="rating">
              <span class="star">★</span>
              <span class="rating-value">${food.rating}</span>
              <span class="rating-count">(${food.reviews})</span>
            </div>
          </div>

          <div class="progress-bars">
            <div class="progress-bar long"></div>
            <div class="progress-bar short"></div>
          </div>

          <div class="buttons">
            <button class="btn-primary">Buy Now</button>
            <button class="btn-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    foodContainer.appendChild(foodCard);
  }

  if (visibleCount >= foodData.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Initial render
renderFoodCards(0, visibleCount);



// Load more on button click
loadMoreBtn.addEventListener("click", () => {
  const start = visibleCount;
  visibleCount += increment;
  renderFoodCards(start, visibleCount);
});


smNav.style.display = "none"


menuBtn.addEventListener("click", () => {

  if (smNav.style.display === "none") {
    smNav.style.display = "flex"

  } else {
    smNav.style.display = "none"
  }
})

// trypeWritter effact 
const text = "Your Favourite Food delivery Partner......";
const element = document.getElementById("typewriter-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;

