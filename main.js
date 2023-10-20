const $timer = document.querySelector("#timer");
const $days = document.querySelector("#days");
const $hours = document.querySelector("#hours");
const $minutes = document.querySelector("#minutes");
const $seconds = document.querySelector("#seconds");
const $burgerButton = document.querySelector("#burger-button");
const $closeBurgerButton = document.querySelector("#close-burger-button");
const $burgerMenu = document.querySelector("#burger-menu");
const $desktopMenu = document.querySelector("#desktop-menu");
const $faqItems = document.querySelectorAll("#faq li");
const $faqButtons = document.querySelectorAll(".faq-down-arrow");

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = endDate - currentDate;

  if (timeDifference <= 0) {
    // cambiar numeros a rojos
    $timer.innerHTML = "Offer just expired!";
  } else {
    const days = Math.floor(
      timeDifference / (MILLISECONDS * TIME_UNIT * TIME_UNIT * DAY_UNIT)
    );
    const hours = Math.floor(
      (timeDifference % (MILLISECONDS * TIME_UNIT * TIME_UNIT * DAY_UNIT)) /
        (MILLISECONDS * TIME_UNIT * TIME_UNIT)
    );
    const minutes = Math.floor(
      (timeDifference % (MILLISECONDS * TIME_UNIT * TIME_UNIT)) /
        (MILLISECONDS * TIME_UNIT)
    );
    const seconds = Math.floor(
      (timeDifference % (MILLISECONDS * TIME_UNIT)) / MILLISECONDS
    );

    $days.textContent = days;
    $hours.textContent = hours;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
  }
}

// set burger menu buttons handlers
$burgerButton.addEventListener("click", () => {
  $burgerMenu.style.top = "0";
});
$closeBurgerButton.addEventListener("click", () => {
  $burgerMenu.style.top = "-100vh";
});

// set faq dropdown button hanlder
$faqItems.forEach(($faq) => {
  $faq.addEventListener("click", function () {
    const answer = $faq.querySelector(".answer");

    answer.classList.toggle("show-answer");

    $faq.querySelector("button").classList.toggle("rotated");
  });
});

// set the offer countdown on page load.
const endDate = new Date();
const TIME_UNIT = 60;
const DAY_UNIT = 24;
const MILLISECONDS = 1000;
const OFFER_DAYS = 1;
endDate.setDate(endDate.getDate() + OFFER_DAYS);
addEventListener(
  "DOMContentLoaded",
  setInterval(updateCountdown, MILLISECONDS)
);
