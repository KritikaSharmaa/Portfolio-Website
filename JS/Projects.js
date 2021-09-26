let Project_container = document.querySelector(".Project_container");
let AllProjectInfo = [
  {
    Icon: "fab fa-black-tie",
    Name: "RESUME BUILDER",
    Lang: "React • Redux • Tailwindcss • Firebase",
    About: `It is a Web Application that has following features :
        <p>•helps the users to build
        their resume using predefined templates.
        • User can generate public link or download the respective resume in
        the PDF format.`,
    Github: "https://github.com/KritikaSharmaa/ResumeBuilder",
    Website: "https://kritika-resume-builder.herokuapp.com/",
  },
  {
    Icon: "far fa-file-excel",
    Name: "EXCEL CLONE",
    Lang: "Html • CSS • Javascript",
    About: `It is a MS Excel clone which has following features : 
        <p>• Formula evaluation • Cycle detection in formula • save and clear functionality •Allows user to format cells individually in worksheet</p>`,
    Github: "https://github.com/KritikaSharmaa/MsExcel-Clone",
    Website: "https://kritikasharmaa.github.io/MsExcel-Clone/",
  },
  {
    Icon: "fas fa-camera",
    Name: "FUNCAM",
    Lang: "Html • CSS • Javascript",
    About: `Web Application that has following features :
        <p>• Allow users to save and download their images and videos •Filter , zoom-in and zoom-out functionality •User can download and remove image from gallery</p>`,
    Github: "https://github.com/KritikaSharmaa/camera-app",
    Website: "https://kritikasharmaa.github.io/camera-app/",
  },
  {
    Icon: "fas fa-dragon",
    Name: "POKEMON CARD GAME",
    Lang: "Html • CSS • Javascript",
    About: `It is a classic two player game where on the basis of chosen characteristics of a pokemon,after revealing the card the player gets the highest point wins.The player scores maximum points after 5 matches wins.`,
    Github: "https://github.com/KritikaSharmaa/Pokemon-Card-Game",
    Website: "https://kritikasharmaa.github.io/Pokemon-Card-Game/",
  },
  {
    Icon: "fas fa-film",
    Name: "Flimic App",
    Lang: "React",
    About: `Filmic app is a movie rental website that let you rent movies to stream at home
    <p>Features of this project are - Customers can rent movie, filter movie on basis of genres, add movie to watchList, delete movies from 	the list and search a movie</p>.`,
    Github: "https://github.com/KritikaSharmaa/Flimic-app",
    Website: "https://kritikasharmaa.github.io/Pokemon-Card-Game/",
  },
  {
    Icon: "fas fa-calendar-check",
    Name: "Jira App",
    Lang: "Html • CSS • Javascript",
    About: `A Web Application designed to help teams of all types Plan,track and manage project.
    <p>Some features of this project are -Save,Delete and Edit tickets, Search tickets and user can also give priority to tickets according to
    their timeline</p>.
    `,
    Github: "https://github.com/KritikaSharmaa/jira-app",
    Website: "https://kritikasharmaa.github.io/Pokemon-Card-Game/",
  },
];

for (let i = 0; i < AllProjectInfo.length; i++) {
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
      <a href=${AllProjectInfo[i].Website} target="_blank" class="${
    i > 2 ? "hide" : ""
  }">Website</a>
    </div>`;
}

// {
//   /* <script>
//       let All_links=["https://www.youtube.com/","https://www.cowin.gov.in/"]
//       for(let i=0;i<All_links.length;i++){
//           let Links=document.createElement("div");
//           Links.classList.add("Links");
//           Links.innerHTML=`
//           <a href=${All_links[i]}>google</a>
//           <a href=${All_links[i]}>cowin</a>`;
//           document.querySelector(".links_container").append(Links);
//       }
//   </script>  */
// }

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
