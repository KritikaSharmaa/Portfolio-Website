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

//section 2 about Me
if (window.innerWidth <= 590) {
  document.querySelector(".aboutMe_intro").innerText =
    "I thrive on challenges and constantly set goals for myself to learn new skills.";
}

document.querySelector(".DownloadCV_btn").addEventListener("click", () => {
  window.location =
    "https://drive.google.com/file/d/1zMNUW2WCEpQodvFYuVp-dNv6r57MtHRv/view?usp=sharing";
});
