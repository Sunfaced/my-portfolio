import{r as n,j as s}from"./index-D-zocF_p.js";const r="/my-portfolio/assets/TheGame-a7xhtD4E.jpg",c=({title:i,img:t,gitHubLink:a,skills:o})=>{const[e,l]=n.useState(!1);return s.jsx("li",{className:"project",children:s.jsxs("a",{className:"project-link",href:a,children:[s.jsxs("div",{className:"image-container",children:[!e&&s.jsx("div",{className:"image-placeholder"}),s.jsx("img",{className:`project-img ${e?"loaded":""}`,src:t,alt:i,loading:"lazy",onLoad:()=>l(!0)})]}),s.jsx("h3",{className:"project-title",children:i}),s.jsx("p",{className:"project-skills",children:o})]})})},g="/my-portfolio/assets/PassGen-CgVTkMvs.jpg",m="/my-portfolio/assets/ToDo-DDrOVOU6.jpg",p="/my-portfolio/assets/qr-B9iM-zj4.jpg",h="/my-portfolio/assets/xiaomiHimo-CsRcSP7B.jpg",d="/my-portfolio/assets/iphone-K5hd-qRg.jpg",u="/my-portfolio/assets/online-store-tOkBnugz.png",j=[{title:"Online store",skills:"HTML, CSS, JavaScript, React",img:u,gitHubLink:"https://sunfaced.github.io/online-store/"},{title:"The Game",skills:"HTML, CSS, JavaScript",img:r,gitHubLink:"https://sunfaced.github.io/TheGame/"},{title:"Password Generator",skills:"HTML, CSS, JavaScript",img:g,gitHubLink:"https://sunfaced.github.io/password-generator/"},{title:"To Do list",skills:"HTML, CSS, JavaScript",img:m,gitHubLink:"https://sunfaced.github.io/LittleToDo/"},{title:"QR Reader",skills:"HTML, CSS, JavaScript, React",img:p,gitHubLink:"https://sunfaced.github.io/qr-reader/"},{title:"Xiaomi Himo landing page",skills:"HTML, CSS",img:h,gitHubLink:"https://sunfaced.github.io/xiaomi-himo/"},{title:"Iphone landing page",skills:"HTML, CSS",img:d,gitHubLink:"https://sunfaced.github.io/iphone-landing-page/"}],S=()=>s.jsx(s.Fragment,{children:s.jsx("main",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"title",children:"Проекты"}),s.jsx("ul",{className:"projects",children:j.map((i,t)=>s.jsx(c,{title:i.title,img:i.img,gitHubLink:i.gitHubLink,skills:i.skills},t))})]})})});export{S as default};
