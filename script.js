const cursor_dot = document.querySelector('.cursor_dot');
const cursor_circle = document.querySelector('.cursor_circle');
// const cursor = document.querySelector('.cursor');
const interactiveElements = document.querySelectorAll("a, button");
console.log(interactiveElements);
const cursorRadius = 4;
const cursorCircleRadius = 15;
let cursorX = 0;
let cursorY = 0;
let timer = null;
document.addEventListener('mousemove', e => {

    clearTimeout(timer);
    
    cursor_dot.classList.remove('is-hide');
    cursor_circle.classList.remove('is-hide');
    cursorX = e.clientX;
    cursorY = e.clientY;
    timer = setTimeout(function () {
        cursor_dot.classList.add('is-hide');
        cursor_circle.classList.add('is-hide');
      }, 1000);
});
interactiveElements.forEach(e=>{
    e.addEventListener("mouseover", e=>{
        console.log("mouseover");
        cursor_circle.classList.add("is-active");
    });
});
interactiveElements.forEach(e=>{
    e.addEventListener("mouseout", e=>{
        cursor_circle.classList.remove("is-active");
    });
});
function set_cursor(timestamp){
    cursor_dot.style.transform = `translate(${cursorX-cursorRadius}px, ${cursorY-cursorRadius}px)`;
    cursor_circle.style.transform = `translate(${cursorX-cursorCircleRadius}px, ${cursorY-cursorCircleRadius}px)`;

    window.requestAnimationFrame(set_cursor);
}


window.requestAnimationFrame(set_cursor);