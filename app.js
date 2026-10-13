(() => {
  const config = window.ANNUR_CONFIG || {};
  const website = config.websiteUrl || "https://sites.google.com/view/annursu/home?authuser=0";

  // Render announcement cards from config.js so AJK can update simple content.
  const list = document.querySelector("#announcement-list");
  const announcements = Array.isArray(config.announcements) ? config.announcements : [];
  if (list) {
    list.innerHTML = announcements.map((item) => `
      <article class="announcement-card">
        <span class="tag">${escapeHTML(item.tag || "MAKLUMAN")}</span>
        <h3>${escapeHTML(item.title || "Pengumuman")}</h3>
        <p>${escapeHTML(item.text || "")}</p>
      </article>
    `).join("");
  }

  setHref("#khairat-register", config.khairatRegistrationUrl || website);
  setHref("#khairat-enquiry", config.khairatEnquiryUrl || website);
  setHref("#donation-link", config.donationUrl || website);
  const contactCopy = document.querySelector("#contact-copy");
  if (contactCopy && config.contactText) contactCopy.textContent = config.contactText;
  document.querySelectorAll('a[href*="sites.google.com/view/annursu"]').forEach((a) => {
    if (a.getAttribute("href") === "https://sites.google.com/view/annursu/home?authuser=0") {
      a.href = website;
    }
  });
  document.querySelector("#year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#main-nav");
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  let installPrompt;
  const banner = document.querySelector("#install-banner");
  const installButton = document.querySelector("#install-button");
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    if (!sessionStorage.getItem("annur-install-dismissed")) banner.hidden = false;
  });
  installButton?.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    banner.hidden = true;
  });
  document.querySelector("#dismiss-install")?.addEventListener("click", () => {
    banner.hidden = true;
    sessionStorage.setItem("annur-install-dismissed", "1");
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((err) => {
        console.error("Service worker tidak dapat didaftarkan:", err);
      });
    });
  }

  function setHref(selector, url) {
    const el = document.querySelector(selector);
    if (el && typeof url === "string" && url.trim()) el.href = url;
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    })[char]);
  }
})();
