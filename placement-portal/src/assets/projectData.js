const PrashantImg = require('../assets/prashantImg.jpg')
const AnshuImg = require('../assets/AnshuImg.jpg')
const SurajImg = require('../assets/SurajImg.jpg')
const nawnitImg = require('../assets/nawnitImg.jpg')
const localProfile1 = require('../assets/profile.jpg');
const localProfile = {
  img: 'https://drive.google.com/file/d/19YwVudYYqSdHRB063y1DB-vwszr4f-7V/view?usp=drive_link'
};



// Team Members Data
export const teamData = [
  {
    name: "Vivek Kumar",
    role: "Web Developer",
    department: "CE",
    img: localProfile1,
  },
  {
    name: "Prashant Kumar",
    role: "Backend Dev",
    department: "CE",
    img:PrashantImg,
  },
  {
    name: "Suraj kr Thakur",
    role: "Web Developer",
    department: "CE",
    img: SurajImg,
  },
  {
    name: "Anshu Kumar",
    role: "Web Developer",
    department: "CE",
    img:AnshuImg,
  },
  {
    name: "Navnit Kumar",
    role: "Web Developer",
    department: "CE",
    img: nawnitImg,
  },
  {
    name: "Prince Kumar",
    role: "Data Analysis",
    department: "CE",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhtdO_3HLpDMCdrlnK9AjcBcHFMKy7lt0rA&s",
  },
  {
    name: "Rishab kumar",
    role: "MERN",
    department: "CE",
    img: "https://imgcdn.stablediffusionweb.com/2024/2/28/64f23186-ec94-4291-885b-3c0f433877df.jpg",
  },
 
];

// Only profile image array
export const profileImg = [{ img: localProfile }];

// Job Sites Data
export const jobSites = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/jobs/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Naukri.com",
    url: "https://www.naukri.com/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXi0FqrRdQAZ0N0Zigf9Y1IhiXxYP0N7vuIA&s",
  },
  {
    name: "Indeed",
    url: "https://www.indeed.com/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9xNnfrfODUv6TqB5mm_MkUXi2-rVprm0qYDFXKOTEkqZH5tN5LBIjD9nk78hetXVT54&usqp=CAU",
  },
  {
    name: "Glassdoor",
    url: "https://www.glassdoor.com/Job/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5LVZtiRjc9xKvuIZic2oy5I4JI4GWREmGg&s"
  },
  {
    name: "Monster",
    url: "https://www.monster.com/",
    icon: "https://media.trustradius.com/vendor-logos/3P/9O/U2TQ1UUPMEM3.JPEG",
  },
];

// Export default if needed
export default teamData;
