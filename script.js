// فقط دسکتاپ، پس نیازی به منوی موبایل نیست
// زیرمنوی dropdown
const dropdowns = document.querySelectorAll('.dropbtn');

dropdowns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // جلوگیری از رفتن لینک
        const content = btn.nextElementSibling;
        content.classList.toggle('open');
    });
});
