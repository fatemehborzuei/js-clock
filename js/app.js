const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

   
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

}, 1000);
