// Select elements
const header = document.querySelector("header");
const first_skill = document.querySelector(".skills-wrap"); // 
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg .progress");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

let skillsPlayed = false;
let mlPlayed = false;


window.addEventListener("scroll", () => {
  stickyNavbar();
  if (!skillsPlayed) skillsCounter(); 
  if(!mlPlayed) mlCounter();
});
function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => updateCount(num, maxNum), 12);
  }
}

/*----------------Sticky Navbar-----------------*/
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

/*------------Scroll Reveal Animation-------------*/
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/*------------Check if skills section is in viewport-------------*/
function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  return window.innerHeight >= topPosition + el.offsetHeight;
}

/*------------Animated Counter-------------*/
// function updateCount(num, maxNum) {
//   let currentNum = +num.innerText;

//   if (currentNum < maxNum) {
//     num.innerText = currentNum + 1;
//     setTimeout(() => updateCount(num, maxNum), 12);
//   }
// }

/*------------Skills Progress Animation-------------*/
function skillsCounter() {
  if (!hasReached(first_skill)) return;

  console.log("✔ Skills section reached — Animating..."); 

  skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 427 - 427 * (target / 100); 

    progress_bars[i].style.setProperty("--target", strokeValue);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  // ✅ Trigger progress animation
  progress_bars.forEach((p) => {
    p.style.animation = "progress 2s ease-in-out forwards";
  });
}
/*------------Services Counter Animation------------*/

function mlCounter(){
  if(!hasReached(ml_section))return;
  mlPlayed = true;
  ml_counters.forEach((ctr) =>{
    let target = +ctr.dataset.target;
    setTimeout(() => {
      updateCount(ctr, target);
    },400);
  })

}
 