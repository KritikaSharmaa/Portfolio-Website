//const selectAllSec = document.querySelectorAll(".section");
const selectSec2 = document.querySelector(".section2_outerDiv");

const callbackSec = function (entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section2-hidden");
};

const ObserverAllSection = new IntersectionObserver(callbackSec, {
  root: null,
  threshold: 0.15,
});

// selectAllSec.forEach(function (sec) {
//   ObserverAllSection.observe(sec);
//   sec.classList.add("section--hidden");
// });
ObserverAllSection.observe(selectSec2);
selectSec2.classList.add("section2-hidden");
