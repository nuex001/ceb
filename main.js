const addAnimations = () => {
    const about = document.getElementById('about');
    const service = document.getElementById('service');
    const blog = document.getElementById('blog');
    const merch = document.getElementById('merch');

    const triggerbottom = window.innerHeight / 5 * 4;
    if (home.getBoundingClientRect().top < triggerbottom) {
        // console.log("reached");
        home.classList.add("active");
    } else {
        home.classList.remove("active");
    }

    // if (service.getBoundingClientRect().top < triggerbottom) {
    //     // console.log("reached");
    //     service.classList.add("active");
    // } else {
    //     service.classList.remove("active");
    // }

    // if (blog.getBoundingClientRect().top < triggerbottom) {
    //     // console.log("reached");
    //     blog.classList.add("active");
    // } else {
    //     blog.classList.remove("active");
    // }

    // if (merch.getBoundingClientRect().top < triggerbottom) {
    //     // console.log("reached");
    //     merch.classList.add("active");
    // } else {
    //     merch.classList.remove("active");
    // }
}
// const menuBtn= document.getElementById("menu");
// const ulpop= document.getElementById("ulpop");

// const togglemenu = () =>{
//     menuBtn.classList.toggle("change")
//     ulpop.classList.toggle("active")
// }
// menuBtn.addEventListener("click", togglemenu);
window.addEventListener('scroll', addAnimations);
