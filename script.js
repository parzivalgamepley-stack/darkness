:root{
  --bg:#05050a;
  --text:#ececf6;
  --muted:#b9b9cb;
  --line:rgba(255,255,255,.10);
  --red:#b20a2c;
  --red2:#ff2a55;
  --shadow: 0 22px 70px rgba(0,0,0,.65);
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  color:var(--text);
  background: #05050a;
  overflow-x:hidden;
}

.container{
  width:min(1100px, calc(100% - 48px));
  margin:0 auto;
}

/* ===== FUNDO COM IMAGEM + CAMADAS ===== */
.bg{
  position:fixed;
  inset:0;
  z-index:-1;
  pointer-events:none;
  overflow:hidden;
}

.bg__image{
  position:absolute;
  inset:0;
  background-image: url("bg.png");
  background-size: cover;
  background-position: center;
  filter: saturate(1.05) contrast(1.08) brightness(.75);
  transform: scale(1.05);
}

.bg__vignette{
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(900px 520px at 50% 25%, rgba(0,0,0,.10), rgba(0,0,0,.55) 60%, rgba(0,0,0,.92) 100%),
    linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.75));
}

.bg__embers{
  position:absolute;
  inset:0;
  opacity:.18;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

/* ===== FOGO ANIMADO (CSS puro, por cima do fundo) ===== */
.fire{
  position:absolute;
  left:-10%;
  right:-10%;
  bottom:-25%;
  height:75%;
  opacity:.55;
  mix-blend-mode: screen;
  filter: blur(8px) saturate(1.2);
  transform: translateZ(0);
  background:
    radial-gradient(120px 220px at 10% 90%, rgba(255,190,90,.0) 0%, rgba(255,120,40,.85) 40%, rgba(255,40,40,.25) 70%, rgba(0,0,0,0) 100%),
    radial-gradient(140px 260px at 25% 92%, rgba(255,190,90,.0) 0%, rgba(255,140,60,.82) 42%, rgba(255,42,85,.22) 72%, rgba(0,0,0,0) 100%),
    radial-gradient(180px 300px at 45% 95%, rgba(255,210,120,.0) 0%, rgba(255,140,60,.78) 44%, rgba(178,10,44,.25) 74%, rgba(0,0,0,0) 100%),
    radial-gradient(140px 260px at 65% 92%, rgba(255,190,90,.0) 0%, rgba(255,140,60,.82) 42%, rgba(255,42,85,.22) 72%, rgba(0,0,0,0) 100%),
    radial-gradient(120px 220px at 85% 90%, rgba(255,190,90,.0) 0%, rgba(255,120,40,.85) 40%, rgba(255,40,40,.25) 70%, rgba(0,0,0,0) 100%);
  animation: fireMove 3.8s ease-in-out infinite;
}

.fire--back{
  opacity:.30;
  filter: blur(14px) saturate(1.15);
  animation-duration: 5.4s;
  bottom:-28%;
}
.fire--mid{
  opacity:.48;
  filter: blur(10px) saturate(1.25);
  animation-duration: 4.4s;
  bottom:-26%;
}
.fire--front{
  opacity:.58;
  filter: blur(7px) saturate(1.35);
  animation-duration: 3.6s;
  bottom:-25%;
}

@keyframes fireMove{
  0%,100%{
    transform: translateX(0) translateY(0) skewX(-2deg) scale(1);
  }
  50%{
    transform: translateX(2.5%) translateY(-2.5%) skewX(1.5deg) scale(1.02);
  }
}

/* ===== TOPBAR ===== */
.topbar{
  position:sticky; top:0;
  z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(5,5,10,.58);
  border-bottom:1px solid var(--line);
}
.topbar__inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
  gap:16px;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
  color:var(--text);
}
.brand__mark{
  width:34px; height:34px;
  display:grid; place-items:center;
  border-radius:14px;
  background: rgba(178,10,44,.18);
  border: 1px solid rgba(178,10,44,.35);
  box-shadow: 0 12px 40px rgba(178,10,44,.18);
}
.brand__name{
  font-weight:950;
  letter-spacing:.9px;
  text-transform: uppercase;
}
.nav{ display:flex; gap:18px; align-items:center; }
.nav a{
  color: rgba(236,236,246,.78);
  text-decoration:none;
  font-weight:850;
  font-size:14px;
  letter-spacing:.3px;
}
.nav a:hover{ color: var(--text); }

.menu{
  display:none;
  width:44px; height:44px;
  border-radius:16px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  cursor:pointer;
  padding:10px;
}
.menu span{
  display:block;
  height:2px;
  margin:5px 0;
  background: rgba(236,236,246,.88);
  border-radius:2px;
}
.mobile{
  display:none;
  border-top:1px solid var(--line);
  padding:10px 0 14px;
}
.mobile a{
  display:block;
  padding:10px 0;
  text-decoration:none;
  color: rgba(236,236,246,.78);
  font-weight:950;
  letter-spacing:.3px;
}
.mobile a:hover{ color: var(--text); }
.mobile.show{ display:block; }

/* ===== HERO ===== */
.hero{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap:42px;
  padding:72px 0 18px;
  align-items:center;
}
.eyebrow{
  margin:0 0 14px;
  color: rgba(236,236,246,.72);
  text-transform:uppercase;
  letter-spacing:2.2px;
  font-size:12px;
}
.title{
  margin:0;
  line-height:1.02;
  letter-spacing: 2px;
  font-size: clamp(48px, 6vw, 78px);
}
.title__main{
  text-shadow:
    0 22px 90px rgba(255,42,85,.24),
    0 0 28px rgba(178,10,44,.38);
}
.title__sig{
  margin-left:10px;
  color: rgba(255,180,90,.85);
  text-shadow: 0 22px 80px rgba(255,140,60,.28);
}
.subtitle{
  margin:14px 0 0;
  color:var(--muted);
  max-width:60ch;
  font-size:16px;
  line-height:1.75;
}

.cta{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin:22px 0 14px;
}
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:12px 16px;
  border-radius:18px;
  text-decoration:none;
  color:var(--text);
  background: linear-gradient(135deg, rgba(178,10,44,.95), rgba(255,42,85,.70));
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 24px 90px rgba(178,10,44,.28);
  font-weight:950;
  letter-spacing:.2px;
  cursor:pointer;
}
.btn:hover{ filter: brightness(1.06); }
.btn--ghost{
  background: rgba(255,255,255,.05);
  border:1px solid var(--line);
  box-shadow:none;
  color: rgba(236,236,246,.92);
}

.chips{ display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; }
.chip{
  font-size:12px;
  font-weight:950;
  letter-spacing:.9px;
  text-transform:uppercase;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(255,140,60,.20);
  background: rgba(255,140,60,.08);
  color: rgba(236,236,246,.92);
}

/* Card “crest” com contraste sobre o fundo */
.hero__right{ display:grid; place-items:center; }
.crest{
  width:min(420px, 100%);
  border-radius:26px;
  position:relative;
  overflow:hidden;
  box-shadow: var(--shadow);
  border:1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.30);
}
.crest__glow{
  position:absolute; inset:-2px;
  background:
    radial-gradient(420px 220px at 50% 20%, rgba(255,140,60,.18), transparent 65%),
    radial-gradient(500px 260px at 60% 40%, rgba(255,42,85,.16), transparent 65%);
  filter: blur(8px);
}
.crest__frame{
  position:relative;
  padding:22px;
  backdrop-filter: blur(6px);
}
.crest__label{
  font-weight:1000;
  letter-spacing:2px;
  font-size:38px;
  text-transform:uppercase;
  text-shadow:
    0 22px 70px rgba(255,42,85,.22),
    0 0 22px rgba(178,10,44,.35);
}
.crest__sub{
  margin-top:8px;
  color: rgba(236,236,246,.72);
  letter-spacing:.6px;
}

/* ===== SECTIONS ===== */
.section{ padding:56px 0; }
h2{ margin:0 0 14px; font-size:26px; letter-spacing:.4px; }
.lead{
  margin:0 0 22px;
  color:var(--muted);
  max-width:84ch;
  line-height:1.8;
}

.grid3{ display:grid; grid-template-columns: repeat(3, 1fr); gap:16px; }
.grid2{ display:grid; grid-template-columns: repeat(2, 1fr); gap:16px; }

.card{
  border:1px solid var(--line);
  background: rgba(0,0,0,.28);
  border-radius:24px;
  padding:18px;
  box-shadow: 0 22px 70px rgba(0,0,0,.22);
  backdrop-filter: blur(6px);
}
.card--accent{
  border-color: rgba(255,42,85,.22);
  background: rgba(178,10,44,.12);
}
.card h3{ margin:0 0 10px; letter-spacing:.3px; }
.card p{ margin:0; color:var(--muted); line-height:1.7; }

.bigName{
  margin:6px 0 8px;
  font-size:22px;
  font-weight:1000;
  letter-spacing:1px;
  color: rgba(236,236,246,.95);
  text-transform: uppercase;
}
.muted{ color: rgba(236,236,246,.70); }

.list{
  margin:0;
  padding-left:18px;
  color:var(--muted);
  line-height:1.9;
}
.list li{ margin:6px 0; }

.tags{ display:flex; gap:8px; flex-wrap:wrap; margin-top:12px; }
.tag{
  font-size:12px;
  font-weight:1000;
  letter-spacing:.8px;
  text-transform:uppercase;
  padding:7px 10px;
  border-radius:999px;
  background: rgba(255,140,60,.10);
  border: 1px solid rgba(255,140,60,.22);
  color: rgba(236,236,246,.92);
}

/* Painel */
.panel{
  border:1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.32);
  border-radius:28px;
  padding:22px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:18px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(6px);
}
.panel__cta{ display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; }
.hint{ margin:14px 0 0; color: rgba(236,236,246,.65); }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }

.panel__badge{
  border:1px solid rgba(255,255,255,.12);
  border-radius:26px;
  overflow:hidden;
  background: rgba(0,0,0,.25);
  box-shadow: 0 22px 70px rgba(0,0,0,.35);
}
.badgeTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 18px;
  background: linear-gradient(135deg, rgba(255,140,60,.55), rgba(255,42,85,.50));
}
.badgeTitle{
  font-weight:1000;
  letter-spacing:1.3px;
  text-transform:uppercase;
}
.badgeBody{ padding:16px 18px; color: rgba(236,236,246,.82); }
.badgeBody p{ margin:8px 0; }
.line{ height:1px; background: rgba(255,255,255,.12); margin:12px 0; }
.small{ color: rgba(236,236,246,.65); }

.footer{
  padding:26px 0 10px;
  text-align:center;
  color: rgba(236,236,246,.55);
  border-top:1px solid var(--line);
  margin-top:34px;
}

/* Responsivo */
@media (max-width: 900px){
  .hero{ grid-template-columns: 1fr; padding-top:44px; }
  .grid3{ grid-template-columns: 1fr; }
  .grid2{ grid-template-columns: 1fr; }
  .panel{ grid-template-columns: 1fr; }
  .nav{ display:none; }
  .menu{ display:inline-block; }
}
