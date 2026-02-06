// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(open));
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Copiar convite do Discord
const copyBtn = document.getElementById("copyInvite");
const hint = document.getElementById("copyHint");
const invite = "https://discord.gg/qSsS3kYW";

copyBtn?.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(invite);
    hint.textContent = "Convite copiado ✅ Cole no Discord/WhatsApp.";
  }catch{
    hint.textContent = "Não deu pra copiar automático. Copie aqui: " + invite;
  }
});
