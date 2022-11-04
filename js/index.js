let typed = new Typed(".typing", {
  strings: [
    "Web Designer",
    "Web Developer",
    "UI/UX Designer",
    "Computer Repair",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
let year = new Date().getFullYear();
document.querySelector(".getYear").textContent = year;
console.log(year);
