// شروع: برای اینکه اگر خواستی حالت fade-in داشته باشی
document.body.classList.add("is-loading");

// وقتی کل صفحه لود شد
window.addEventListener("load", () => {
  document.body.classList.remove("is-loading");
  document.body.classList.add("loaded");
});

// ------------------------------
// 1) Dropdown: کلیک روی "بازی‌ها" فقط منو را باز/بسته کند
// ------------------------------
document.querySelectorAll(".dropbtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // نذار صفحه بره بالا یا # باز شه
    const dropdown = btn.closest(".dropdown");
    if (!dropdown) return;

    dropdown.classList.toggle("open");
  });
});

// کلیک بیرون از dropdown => بسته شود
document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown.open").forEach((dd) => {
    if (!dd.contains(e.target)) dd.classList.remove("open");
  });
});

// ------------------------------
// 2) Page Transition: خروج نرم برای لینک‌های داخلی واقعی
// ------------------------------
const isRealInternalLink = (a) => {
  const hrefAttr = a.getAttribute("href");

  if (!hrefAttr) return false;
  if (hrefAttr.startsWith("#")) return false;       // لینک‌های #
  if (hrefAttr === "#") return false;

  // لینک‌های خارجی یا خاص
  if (hrefAttr.startsWith("mailto:")) return false;
  if (hrefAttr.startsWith("tel:")) return false;

  // اگر در تب جدید باز میشه
  if (a.target === "_blank") return false;

  // لینک داخلی واقعی؟
  try {
    const url = new URL(a.href);
    if (url.origin !== window.location.origin) return false;
  } catch {
    return false;
  }

  // اگر خود دکمه dropdown بود یا داخل dropdown کلیک شده ولی لینک #
 بود
  if (a.classList.contains("dropbtn")) return false;

  return true;
};

document.querySelectorAll("a").forEach((link) => {
  if (!isRealInternalLink(link)) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.href;

    // خروج نرم
    document.body.classList.remove("loaded");
    document.body.classList.add("is-loading");

    setTimeout(() => {
      window.location.href = target;
    }, 400); // با CSS هماهنگ
  });
});

// ==============================
// Search Open/Close (Click + Focus)
// ==============================
const searchWrap = document.querySelector(".search-wrapper");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

if (searchWrap && searchInput && searchBtn) {
  // کلیک روی ذره‌بین => باز + فوکوس روی input
  searchBtn.addEventListener("click", () => {
    searchWrap.classList.add("open");
    searchInput.focus();
  });

  // Esc => بستن
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchWrap.classList.remove("open");
      searchInput.blur();
      searchInput.value = "";
    }
  });

  // کلیک بیرون => بستن
  document.addEventListener("click", (e) => {
    if (!searchWrap.contains(e.target)) {
      searchWrap.classList.remove("open");
    }
  });
}

