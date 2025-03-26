const cursor_dot = document.querySelector('.cursor_dot');
const cursor_circle = document.querySelector('.cursor_circle');
// const cursor = document.querySelector('.cursor');
const interactiveElements = document.querySelectorAll("a, button");
console.log(interactiveElements);
const cursorRadius = 5;
const cursorCircleRadius = 15;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
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