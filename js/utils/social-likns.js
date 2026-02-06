const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/biswajit-deb-barman/",
  facebook: "https://www.facebook.com/profile.php?id=61585030424249",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://www.instagram.com/biswajit.deb.barman/",
  email: "mailto:biswajitdebbarman.civil@gmail.com",
  whatsapp: "https://wa.me/917602120054"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-social]").forEach(link => {
    const key = link.dataset.social;
    if (SOCIAL_LINKS[key]) {
      link.href = SOCIAL_LINKS[key];
    }
  });
});
