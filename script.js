// Navbar Script Begin
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const threshold = 40; // Adjust threshold value if needed

  if (scrollTop > lastScrollTop && scrollTop > threshold) {
    // Scrolling down and past the threshold
    navbar.style.top = "-100px"; // Adjust to your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  if (window.scrollY > 100) {
    // Change color after scrolling 100px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

// Navbar Script End

// Go to Top button

// Get the button Begin
var upButton = document.getElementById("upButton");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
upButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Go To Top Button End

// hero automatic slider begin
let currentSlide = 1;
const totalSlides = 3;

function autoScroll() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById(`img-${currentSlide}`).checked = true;
}

// Change slide every 5 seconds (5000 milliseconds)
setInterval(autoScroll, 5000);
// hero automatic slider end

// Gallert Begin
const items = document.querySelectorAll(".item");

function insertViewTransitionName() {
  items.forEach((item, i) => {
    item.style.viewTransitionName = `item-${i++}`;
  });
}

function animateItem(e) {
  const hero = document.querySelector('li[data-pos="1"]');
  const target = e.target;
  [hero.dataset.pos, target.dataset.pos] = [
    target.dataset.pos,
    hero.dataset.pos,
  ];
}

function init(e) {
  if (!e.target.matches("li")) return;
  insertViewTransitionName();
  !document.startViewTransition
    ? animateItem(e)
    : document.startViewTransition(() => animateItem(e));
}

window.addEventListener("click", init, false);
// Gallery End
