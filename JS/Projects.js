let Project_container = document.querySelector(".Project_container");
let AllProjectInfo = [
  {
    Icon: "far fa-file-excel",
    Name: "EXCEL CLONE",
    Lang: "Html • CSS • Javascript",
    About: `It is a MS Excel clone which has following features : 
        <p>• Formula evaluation • Cycle detection in formula • save and clear functionality •Allows user to format cells individually in worksheet</p>`,
    Github: "https://github.com/KritikaSharmaa/MsExcel-Clone",
    Website: "https://github.com/KritikaSharmaa/MsExcel-Clone",
  },
  {
    Icon: "fas fa-camera",
    Name: "FUNCAM",
    Lang: "Html • CSS • Javascript",
    About: `Web Application that has following features :
        <p>• Allow users to save and download their images and videos •Filter , zoom-in and zoom-out functionality •User can download and remove image from gallery</p>`,
    Github: "https://github.com/KritikaSharmaa/camera-app",
    Website: "https://github.com/KritikaSharmaa/camera-app",
  },
  {
    Icon: "far fa-calendar-check",
    Name: "JIRA APP",
    Lang: "Html • CSS • Javascript",
    About: `A Web Application designed to help teams of all type Plan,track and manage projects.It has following features :
        <p>•Save,Delete and Edit tickets • Search tickets •User can also give priority to tickets </p>`,
    Github: "https://github.com/KritikaSharmaa/MsExcel-Clone",
    Website: "https://github.com/KritikaSharmaa/MsExcel-Clone",
  },
  {
    Icon: "fas fa-dragon",
    Name: "POKEMON CARD GAME",
    Lang: "Html • CSS • Javascript",
    About: `It is a classic two player game in which players choose a characteristic of a pokemon,after revealing the cards the player whose pokemon has highest point on the basis of that chracteristic wins .The player scores maximum points after 5 matches wins.`,
    Github: "https://github.com/KritikaSharmaa/MsExcel-Clone",
    Website: "https://github.com/KritikaSharmaa/MsExcel-Clone",
  },
  {
    Icon: "fas fa-home",
    Name: "Decor",
    Lang: "Html • SASS",
    About: `•Decor is a web application that help user to book professional interior designer for their home •It is a responsive web application so it responds to the environment in which it is viewed`,
    Github: "https://github.com/KritikaSharmaa/MsExcel-Clone",
    Website: "https://github.com/KritikaSharmaa/MsExcel-Clone",
  },
];

for (let i = 0; i < AllProjectInfo.length; i++) {
  // console.log("loop");
  let Project_Card = document.createElement("div");
  Project_Card.classList.add("Project_Card");
  Project_container.append(Project_Card);
  Project_Card.innerHTML = `
  <div class="Project_icon">
  <i class="${AllProjectInfo[i].Icon}"></i>
  </div>
  <div class="Project_name">${AllProjectInfo[i].Name}</div>
  <hr class="new1">
  <div class="Project_Lang">${AllProjectInfo[i].Lang}</div>
  <div class="About_Project">${AllProjectInfo[i].About}</div>
  <div class="Links">
    <a href=${AllProjectInfo[i].Github} target="_blank">Github</a>
    <a href=${AllProjectInfo[i].Website}  target="_blank">Website</a>
  </div>`;
}

//Fade then Apperance Animation...
const selectSec4 = document.querySelector(".Project_container");

var iamobserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section4-hidden");
  },
  {
    root: null,
    threshold: 0.15,
  }
);
iamobserver.observe(selectSec4);
selectSec4.classList.add("section4-hidden");
