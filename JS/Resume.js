// const selectSecc3 = document.querySelector(".Education");

// var iamobserver = new IntersectionObserver(
//   (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove("section3-hidden");
//   },
//   {
//     root: null,
//     threshold: 0.15,
//   }
// );
// iamobserver.observe(selectSecc3);
// selectSecc3.classList.add("section3-hidden");

let AllSections = document.querySelectorAll(".FadeSec3");

let observerForSec3 = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section3-hidden");
  },
  {
    root: null,
    threshold: 0.15,
  }
);

for (let i = 0; i < AllSections.length; i++) {
  // console.log(AllSections[i]);
  observerForSec3.observe(AllSections[i]);
  AllSections[i].classList.add("section3-hidden");
}
//*********__________________IMPORTANT__________________*************** */
//jab sari website ban jaye uske bad slide ko b offset ki helpse set kardena

//RESUME SIDEBAR NAVLINKS

// if(window.innerWidth>1024 && window.pageYOffset<1200){
//   sideNav[0].classList.remove("acurr");
// }else  if(window.innerWidth>1024 && window.pageYOffset>1280 && window.pageYOffset<1640 ){
//   sideNav[0].classList.add("acurr");
//   sideNav[1].classList.remove("acurr");
// }else  if(window.innerWidth>1024 && window.innerWidth>1024 && window.pageYOffset>1770 && window.pageYOffset<2080){
//   sideNav[0].classList.remove("acurr");
//   sideNav[2].classList.remove("acurr");
//   sideNav[1].classList.add("acurr");
// }else  if(window.innerWidth>1024 && window.pageYOffset>2090 &&window.pageYOffset<2550){
//   sideNav[1].classList.remove("acurr");
//   sideNav[3].classList.remove("acurr");
//   sideNav[2].classList.add("acurr");
// }else  if(window.innerWidth>1024 && window.pageYOffset>2550 && window.pageYOffset<3120){
//   sideNav[2].classList.remove("acurr");
//   sideNav[3].classList.add("acurr");
// }else if(window.innerWidth>1024 ){
//   sideNav[3].classList.remove("acurr");

// }
let sideNav = document.querySelectorAll(".ResumeContent li");
function removeacurr() {
  for (let i = 0; i < sideNav.length; i++) sideNav[i].classList.remove("acurr");
}

document.addEventListener("scroll", function () {
  if (window.innerWidth > 1024 && window.pageYOffset < 1200) {
    removeacurr();
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 1200 &&
    window.pageYOffset < 2020
  ) {
    removeacurr();
    sideNav[0].classList.add("acurr");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 2020 &&
    window.pageYOffset < 2443
  ) {
    removeacurr();
    sideNav[1].classList.add("acurr");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 2443 &&
    window.pageYOffset < 2890
  ) {
    removeacurr();
    sideNav[2].classList.add("acurr");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 2917 &&
    window.pageYOffset < 3392
  ) {
    removeacurr();
    sideNav[3].classList.add("acurr");
    !important;
  } else if (window.innerWidth > 1024 && window.pageYOffset > 3392) {
    removeacurr();
  }
  // height 1024=============

  if (window.innerWidth <= 1024 && window.pageYOffset < 1200) {
    sideNav[0].classList.remove("acurr");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 1280 &&
    window.pageYOffset < 2180
  ) {
    sideNav[0].classList.add("acurr");
    sideNav[1].classList.remove("acurr");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2180 &&
    window.pageYOffset < 2460
  ) {
    sideNav[0].classList.remove("acurr");
    sideNav[2].classList.remove("acurr");
    sideNav[1].classList.add("acurr");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2460 &&
    window.pageYOffset < 2930
  ) {
    sideNav[1].classList.remove("acurr");
    sideNav[3].classList.remove("acurr");
    sideNav[2].classList.add("acurr");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2930 &&
    window.pageYOffset < 3490
  ) {
    sideNav[2].classList.remove("acurr");
    sideNav[3].classList.add("acurr");
  } else {
    sideNav[3].classList.remove("acurr");
  }
});
