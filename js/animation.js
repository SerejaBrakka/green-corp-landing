const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i > endNumber) return;
  if (i < endNumber) {
    element.innerText = i;
  }
  if (i === endNumber) {
    element.innerText = i + "+";
  }
  i += 100;

  setTimeout(() => {
    increaseNumberAnimationStep(i, element, endNumber);
  }, INCREASE_NUMBER_ANIMATION_SPEED);
}
function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

document
  .querySelector("#budget")
  .addEventListener("change", function handleSelectChange(event) {
    console.log(screen.width);
    if (event.target.value === "other") {
      let formContainer = document.createElement("div");
      formContainer.classList.add("form__group");
      formContainer.classList.add("form__other-input");

      let input = document.createElement("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
      formContainer.appendChild(input);

      const form = document.querySelector("form");
      console.log(form);
      let button = document.querySelector(".form__submit");
      form.insertBefore(formContainer, button);
    }
    let otherInput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && !!otherInput) {
      otherInput.remove();
    }
  });

let animationInited = false;

function updateScroll() {
  let countElementPosition = document.querySelector(
    ".features__clients-count"
  ).offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  if (countElementPosition > windowBottomPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }
}
window.addEventListener("scroll", updateScroll);

function addSmoothScroll(anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector(".more-button"));
