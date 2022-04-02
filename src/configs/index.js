const GOOGLE_LOGIN_CLIENT_ID = '140876642215-6e6e0r90qvkt1tgfdejb9da94ec74p1t.apps.googleusercontent.com';

const templates = [
    { id : "1", img: "https://ik.imagekit.io/lcq5etn9k/templates/7_jwzNnTjSJ.png", category : "All", type: "baisc",name: "template" },
    { id : "2", img: "https://ik.imagekit.io/lcq5etn9k/templates/6_wKLS6-srNC.png", category : "New", type: "baisc",name: "template" },
    { id : "3", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },
    { id : "4", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },
    { id : "5", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },    
]
const categories = ['All', 'New'];

const background_color = ['red','green','blue','yellow','violet','grey', 'white'];

const text_color = ['red','green','blue','yellow','violet','grey'];;
const theme = ['theme1', 'theme2', 'theme3','theme4']
const fonts = ["Calibri", "Cambria",
"Noto",
"Georgia",
"Helvetica",
"Garamond",
"Verdana",
"Lato",
"Trebuchet MS",
"Book Antiqua",
];


// const fonts = ['Arial, sans-serif', 'Verdana, sans-serif','Helvetica, sans-serif','Tahoma, sans-serif','Trebuchet MS, sans-serif', 'Times New Roman, serif', 'Georgia, serif', 'Garamond, serif', 'Courier New, monospace', 'Brush Script MT, cursive'];
const fontPairing = ['500', '600','700','800','900'];

const fontSize = [
    { text : "Small" , value:12 },
    { text : "Medium" , value:14 },
    { text : "Large" , value:16 },
    { text : "Extra Large" , value:18 }
]

const icons = [
    { value:"summary", text: "Summary" , status : false},
    { value:"jobTitle", text: "Job Title" , status : false},
    { value:"industry", text: "Industry" , status : false},
    { value:"photo", text: "Photo" , status : false}
]
module.exports ={
    icons : icons,
    fontSize : fontSize,
    fonts : fonts,
    fontPairing : fontPairing,
    background_color : background_color,
    text_color : text_color,
    theme : theme,
    templates : templates,
    categories : categories,
    GOOGLE_LOGIN_CLIENT_ID : GOOGLE_LOGIN_CLIENT_ID
}