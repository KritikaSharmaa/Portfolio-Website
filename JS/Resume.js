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
