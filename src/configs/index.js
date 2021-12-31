const GOOGLE_LOGIN_CLIENT_ID = '140876642215-6e6e0r90qvkt1tgfdejb9da94ec74p1t.apps.googleusercontent.com';

const templates = [
    { id : "1", img: "https://ik.imagekit.io/lcq5etn9k/templates/7_jwzNnTjSJ.png", category : "All", type: "baisc",name: "template" },
    { id : "2", img: "https://ik.imagekit.io/lcq5etn9k/templates/6_wKLS6-srNC.png", category : "New", type: "baisc",name: "template" },
    { id : "3", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },
    { id : "4", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },
    { id : "5", img: "https://ik.imagekit.io/lcq5etn9k/templates/15_fSuqdFzlFN.png", category : "New", type: "baisc",name: "template" },
    // { id : "4", img: "https://ik.imagekit.io/lcq5etn9k/templates/9_nMm230qzhU.png", category : "All", type: "baisc",name: "template" },
    // { id : "5", img: "https://ik.imagekit.io/lcq5etn9k/templates/9_nMm230qzhU.png", category : "All", type: "baisc",name: "template" },
    // { id : "6", img: "https://ik.imagekit.io/lcq5etn9k/templates/12_5Z_zKtftK.png", category : "All", type: "baisc",name: "template" },
    // { id : "7", img: "https://ik.imagekit.io/lcq5etn9k/templates/2_X8aDRA8s5.png", category : "All", type: "baisc",name: "template" },
    // { id : "8", img: "https://ik.imagekit.io/lcq5etn9k/templates/1_u_QLznEs1.png", category : "All", type: "baisc",name: "template" },
    // { id : "9", img: "https://ik.imagekit.io/lcq5etn9k/templates/10_K5CpyeOAt1.png", category : "All", type: "baisc",name: "template" },
    // { id : "10", img: "https://ik.imagekit.io/lcq5etn9k/templates/4_Q2ArbRqRT.png", category : "All", type: "baisc",name: "template" },
    // { id : "11", img: "https://ik.imagekit.io/lcq5etn9k/templates/11_afmbaifCP.png", category : "All", type: "baisc",name: "template" },
    // { id : "12", img: "https://ik.imagekit.io/lcq5etn9k/templates/14_Ovjkmjn26L.png", category : "All", type: "baisc",name: "template" },
    // { id : "13", img: "https://ik.imagekit.io/lcq5etn9k/templates/3_vgSkFmPbJ.png", category : "All", type: "baisc",name: "template" },
    // { id : "14", img: "https://ik.imagekit.io/lcq5etn9k/templates/8_c58TWkqNsO.png", category : "All", type: "baisc",name: "template" },
    // { id : "15", img: "", category : "All", type: "baisc" },
    
]
const categories = ['All', 'New'];

const background_color = ['red','green','blue','yellow','violet','grey', 'white'];

const text_color = ['red','green','blue','yellow','violet','grey'];;
const theme = ['theme1', 'theme2', 'theme3','theme4']

const fonts = ['fjvkjdfvbjfd', 'dfvhbjhdbvdhf','fdvbhdfjhdfvbh','fdhvbjdfvbjhdf','fdjvbjdfvbjdfh'];
const fontPairing = ['600','700','800','900'];

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