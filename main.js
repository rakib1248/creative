const main_humbergar = document.getElementById("main_humbergar");
const humbergar = document.getElementById("humbergar");
const extradiv = document.getElementById("extradiv");
const dark = document.getElementById("dark");
const moon = document.getElementById("moon");

humbergar.addEventListener("click", () => {
  main_humbergar.classList.toggle("hidden");
  extradiv.classList.toggle("hidden");
});

moon.onclick = () => {
  dark.classList.toggle("dark");
};
