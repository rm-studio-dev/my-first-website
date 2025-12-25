// فقط دسکتاپ، زیرمنو با hover باز میشه، نیازی به موبایل نیست
const dropdowns = document.querySelectorAll('.dropbtn');

dropdowns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // جلوگیری از رفتن لینک
        const content = btn.nextElementSibling;
        content.classList.toggle('open');
    });
});
