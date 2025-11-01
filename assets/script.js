// Theme toggle and scroll animation
(function(){
const root=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved==='light')root.setAttribute('data-theme','light');
const toggle=document.getElementById('themeToggle');
const icon=toggle.querySelector('.icon');
function updateIcon(){const isLight=root.getAttribute('data-theme')==='light';icon.textContent=isLight?'☀️':'🌙';}
toggle.addEventListener('click',()=>{const isLight=root.getAttribute('data-theme')==='light';if(isLight){root.removeAttribute('data-theme');localStorage.setItem('theme','dark');}else{root.setAttribute('data-theme','light');localStorage.setItem('theme','light');}updateIcon();});
updateIcon();
// scroll animations
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.style.animationPlayState='running';}})},{threshold:0.1});
document.querySelectorAll('.animate-fadein,.animate-slideup').forEach(el=>observer.observe(el));
// year
document.getElementById('year').textContent=new Date().getFullYear();
})();