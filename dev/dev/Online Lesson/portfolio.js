/* HEADER */
window.onload = function () {
  scrollfunction();
};
window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  var header = document.getElementById("header");

  if (document.documentElement.scrollTop > 70) {
    if (!header.classList.contains("navbar-fixde")) {
      header.classList.add("navbar-fixed");
      document.getElementsByTagName("body")[0].style.marginTop = "70px";
      header.style.display = "none";
      setTimeout(function () {
        header.style.display = "block";
      }, 40);
    }
  } else {
    if (header.classList.contains("navbar-fixed")) {
      header.classList.remove("navbar-fixde");
      document.getElementsByTagName("body")[0].style.marginTop = "0";
    }
  }
}

function menuToggle() {
  document.getElementById("menu").classList.toggle("show");
}

document.getElementById("toggleBtn").addEventListener("click", menuToggle);

/* WELCOME AREA */
var imageslideIndex = 1;
showImageSlides(imageslideIndex);

function imageSlideTimer() {
  plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3000);

function plusImageSlides(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);

  showImageSlides((imageslideIndex += n));
}

function currentImageSlide(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);

  showImageSlides((imageslideIndex = n));
}

function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    imageslideIndex = 1;
  }
  if (n < 1) {
    imageslideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[1].className = dots[i].className.replace(" active", "");
  }
  slides[imageslideIndex - 1].style.display = "block";
  dots[imageslideIndex - 1].className += " active";
}

document
  .getElementById("imagePrev")
  .addEventListener("click", plusImageSlides.bind(null, -1));
document
  .getElementById("imageNext")
  .addEventListener("click", plusImageSlides.bind(null, 1));

document
  .getElementById("firstDot")
  .addEventListener("click", currentImageSlide.bind(null, 1));
document
  .getElementById("secondDot")
  .addEventListener("click", currentImageSlide.bind(null, 2));
document
  .getElementById("thirdDot")
  .addEventListener("click", currentImageSlide.bind(null, 3));
document
  .getElementById("forthDot")
  .addEventListener("click", currentImageSlide.bind(null, 4));

/* PORTFOLIO AREA*/

function filterSelection(id) {
  var X, i;

  X = document.getElementsByClassName("listItem");
  for (i = 0; i < X.length; i++) {
    removeClass(X[i], "active");
  }
  addClass(document.getElementById(id), "active");

  X = document.getElementsByClassName("filterItem");
  if (id == "all") id = "";
  for (i = 0; i < X.length; i++) {
    removeClass(X[i], "show");
    if (X[i].className.indexOf(id) > -1) {
      addClass(X[i], "show");
    }
  }
}

function addClass(element, name) {
  if (element.className.indexOf(name) == -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");

  while (arr.indexOf(name) > -1) {
    arr.splice(arr.indexOf(name), 1);
  }

  element.className = arr.join(" ");
}

document
  .getElementById("all")
  .addEventListener("click", filterSelection.bind(null, "all"));
document
  .getElementById("uiux")
  .addEventListener("click", filterSelection.bind(null, "uiux"));
document
  .getElementById("java")
  .addEventListener("click", filterSelection.bind(null, "java"));
document
  .getElementById("db")
  .addEventListener("click", filterSelection.bind(null, "db"));

function viewportfolio(event) {
  var polyNode = event.target;

  if (polyNode.tagName.toLowerCase() == "i") {
    polyNode = polyNode.parentNode;
  }

  var overlayNode = polyNode;
  var imageNode = overlayNode.nextElementSibling;

  var itemNode = overlayNode.parentNode;
  var mainNode = itemNode.nextElementSibling;
  var subNode = mainNode.nextElementSibling;
  var textNode = subNode.nextElementSibling;

  document.getElementById("modalImage").src = imageNode.src;
  document.getElementById("modalMain").innerHTML = mainNode.innerHTML;
  document.getElementById("modalSub").innerHTML = subNode.innerHTML;
  document.getElementById("modalText").innerHTML = textNode.innerHTML;

  document.getElementById("portfolioModal").style.display = "block";
}

document.getElementById("modalClose").addEventListener("click", function () {
  document.getElementById("portfolioModal").style.display = "none";
});

var filterItems = document.getElementsByClassName("overlay");

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", viewportfolio);
}

/* REVIEW AREA */
var reviewSlideIndex = 0;

function reviewSlideTimer() {
  plusReviewSlides(1);
}

var reviewTimer = setInterval(reviewSlideTimer, 3000);

function plusReviewSlides(n) {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(reviewSlideTimer, 3000);
  showReviewSlides((reviewSlideIndex += n));
}

function showReviewSlides(n) {
  var i;
  var review_slides = document.getElementsByClassName("review-slide");

  if (n > review_slides.length - 3) {
    reviewSlideIndex = 0;
  }

  if (n < 0) {
    reviewSlideIndex = review_slides.length - 3;
  }

  for (i = 0; i < review_slides.length; i++) {
    removeClass(review_slides[i], "show");
    removeClass(review_slides[i], "res-show");
    addClass(review_slides[i], "hide");
  }

  removeClass(review_slides[reviewSlideIndex], "hide");
  addClass(review_slides[reviewSlideIndex], "res-show");
  removeClass(review_slides[reviewSlideIndex + 1], "hide");
  addClass(review_slides[reviewSlideIndex + 1], "show");
  removeClass(review_slides[reviewSlideIndex + 2], "hide");
  addClass(review_slides[reviewSlideIndex + 2], "show");
}

document
  .getElementById("reviewPrev")
  .addEventListener("click", plusReviewSlides.bind(null, -1));
document
  .getElementById("reviewNext")
  .addEventListener("click", plusReviewSlides.bind(null, 1));

/* NAVBAR ANCHOR */
function moveTo(id) {
  if (id == "brand") {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }

  document.getElementById("menu").classList.remove("show");
}

document
  .getElementById("navbarBrand")
  .addEventListener("click", moveTo.bind(null, "brand"));
document
  .getElementById("navbarAbout")
  .addEventListener("click", moveTo.bind(null, "about"));
document
  .getElementById("navbarService")
  .addEventListener("click", moveTo.bind(null, "service"));
document
  .getElementById("navbarPortfolio")
  .addEventListener("click", moveTo.bind(null, "portfolio"));
document
  .getElementById("navbarReview")
  .addEventListener("click", moveTo.bind(null, "review"));
