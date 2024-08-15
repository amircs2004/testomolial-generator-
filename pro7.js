
const tetsto = [ 
    {
        name: "amir",
       photoURL: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=is&k=20&c=6aYTwfOaqmcJSufJX5ZJNnI07GepPGZPSJ8hNmWPg8I=",
    text:"I recently had the pleasure of working with tech, and I cannot recommend them enough. As a developer, tech's knowledge and expertise in all things tech-related, especially with Apple products, is truly impressive. They were able to help me with all of my technical needs and provided solutions that were efficient and effective. Not only that, but their professionalism and communication skills made the entire process smooth and stress-free. I am grateful for their assistance and would highly recommend tech to anyone in need of a skilled and reliable developer. Thank you, tech, for your outstanding work!"
    },
    {
        name: "jack",
        photoURL: "https://media.istockphoto.com/id/473749880/photo/portrait-of-a-happy-young-businessman.jpg?s=612x612&w=0&k=20&c=SdDIY7yMXGa4T1NMRE78RJQH4tHFsfhGzA_X4Nig0Bo=",
     text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam quis doloribus rerum eos excepturi aliquid ducimus incidunt, quae accusamus porro minima voluptatem soluta explicabo natus alias quisquam nesciunt inventore."

    },
    {
        name: "beyonce",
        photoURL:"https://media.istockphoto.com/id/928024264/photo/close-up-of-beaming-smile-bearded-man-looking-at-camera-while-standing-over-grey-background-he.jpg?s=612x612&w=0&k=20&c=b7mbaL3wKieQBuvpK0ObG_Tl1-Fr2h10zpkoemH4GYA=" ,
     text:"something (such as a story or movie) considered as an object to be examined, explicated, or deconstructed"
    },
];
const imgEl = document.querySelector("img");
const textEL = document.querySelector(".test");
const usernameEl = document.querySelector(".username");
let idx = 0;
updatetesto()
function updatetesto () {
   const {name ,photoURL ,text} = tetsto[idx];
   imgEl.src = photoURL;
   textEL.innerText = text ;
   usernameEl.innerText =  name ;
idx++
if (idx === tetsto.length) {
    idx = 0;
}
setTimeout ( ()=> {
    updatetesto()
}, 8000)
}

