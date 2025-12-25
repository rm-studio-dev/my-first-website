// وقتی کل صفحه لود شد
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// انیمیشن خروج نرم موقع رفتن به صفحه دیگه
document.querySelectorAll("a").forEach(link => {
  // فقط لینک‌های داخلی که واقعی هستن و کلاس dropbtn ندارن
  if (link.href && link.origin === window.location.origin && !link.classList.contains("dropbtn")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.href;

      document.body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  }
});
