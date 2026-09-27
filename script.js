// Menu Filter

const filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    menuItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Dark Mode

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Testimonials Slider

const testimonials = [
  {
    text: "Amazing food and excellent service!",
    author: "Sarah",
  },
  {
    text: "Best Italian food I've ever had.",
    author: "Michael",
  },
  {
    text: "Beautiful ambience and delicious desserts.",
    author: "Emma",
  },
];

let index = 0;

setInterval(() => {
  index = (index + 1) % testimonials.length;

  document.getElementById("testimonial-text").textContent =
    testimonials[index].text;

  document.getElementById("testimonial-author").textContent =
    "- " + testimonials[index].author;
}, 3000);

// Reservation Form

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("message").textContent =
      "✅ Reservation submitted successfully!";
  });

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
