const LOGINS = [
  { username: "admjao", password: "SlAxMjMhMTIz" },
  { username: "pedro", password: "cGVkcm9oZW5yaXF1ZTIwMTI=" }, //pedrohenrique2012
  { username: "lucca", password: "bHVjY2FtZWxvMDAwMQ==" }, //luccamelo0001
  { username: "jose", password: "am9zZXVmYw==" }, //joseufc
  { username: "jacintopinto", password: "bHVpenNhbmp1bGlhbm8xMg==" }, //luizsanjuliano12
  { username: "nome4", password: "ZXVtdWRvMTIz" },        
  { username: "nome5", password: "ZXVtdWRvMTIz" },    
  { username: "nome6", password: "ZXVtdWRvMTIz" },    
  { username: "nome7", password: "ZXVtdWRvMTIz" },    
  { username: "nome8", password: "ZXVtdWRvMTIz" },
  { username: "nome9", password: "ZXVtdWRvMTIz" }
];

const SESSION_KEY = "xfut_session";

// Lista de jogos e opções (agora com data e hora exata de início)
const jogos = [
        { 
  nome: "Arábia Saudita X Austrália",
  inicio: "2025-06-10T15:15:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=espn-4" },
    { nome: "Opção 2", url: "https://embedflix.top/infra.php?url=/channels/bra/br6.php" },
    { nome: "Opção 3", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=espn4" },
    { nome: "Opção 4", url: "https://reidoscanais.vip/embed/?id=espn4" }
  ]
},
    { 
  nome: "Bolívia X Chile",
  inicio: "2025-06-10T17:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=sportv" },
    { nome: "Opção 2", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
    { nome: "Opção 3", url: "https://embedflix.top/infra.php?url=/channels/bra/br1.php" },
    { nome: "Opção 4", url: "https://reidoscanais.vip/embed/?id=sportvalternativo" }
  ]
},
      { 
  nome: "Uruguai X Venezuela",
  inicio: "2025-06-10T20:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=sportv-3" },
    { nome: "Opção 2", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv3" },
    { nome: "Opção 3", url: "https://reidoscanais.vip/embed/?id=sportv3alternativo" },
    { nome: "Opção 4", url: "https://reidoscanais.vip/embed/?id=sportv3" }
  ]
},
      { 
  nome: "Argentina X Colômbia",
  inicio: "2025-06-10T21:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=sportv-2" },
    { nome: "Opção 2", url: "https://embedflix.top/infra.php?url=/channels/bra/br4.php" },
    { nome: "Opção 3", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv2" },
    { nome: "Opção 4", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv2-2" }
  ]
},
      { 
  nome: "Brasil X Paraguai",
  inicio: "2025-06-10T21:45:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=sportv" },
    { nome: "Opção 2", url: "https://embedflix.top/tv/player.php?id=globo-sp" },
    { nome: "Opção 3", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=globosp" },
    { nome: "Opção 4", url: "https://embedflix.top/infra.php?url=/channels/bra/br1.php" }
  ]
},
      { 
  nome: "Peru X Equador",
  inicio: "2025-06-10T22:30:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "https://embedflix.top/tv/player.php?id=sportv-3" },
    { nome: "Opção 2", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv3" },
    { nome: "Opção 3", url: "https://reidoscanais.vip/embed/?id=sportv3" },
    { nome: "Opção 4", url: "https://reidoscanais.vip/embed/?id=sportv3alternativo" }
  ]
},
  { 
  nome: "Super Mundial a partir de 14.06 no XFUT",
  inicio: "2025-06-14T21:00:00-03:00",
  opcoes: [
    { nome: "Todas as Rodadas do primeiro jogo, até a Final!!", url: "https://jaoofc123.github.io/xfut/" }
  ]
},
{ 
  nome: "Al Ahly x Inter Miami",
  inicio: "2025-06-14T21:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Bayern x Auckland City",
  inicio: "2025-06-15T13:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "PSG x Atlético Madrid",
  inicio: "2025-06-15T16:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Palmeiras x Porto",
  inicio: "2025-06-15T19:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Botafogo x Seattle Sounders",
  inicio: "2025-06-15T23:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Chelsea x León",
  inicio: "2025-06-16T16:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Boca Juniors x Benfica",
  inicio: "2025-06-16T19:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Flamengo x Espérance",
  inicio: "2025-06-16T22:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Fluminense x Borussia",
  inicio: "2025-06-17T13:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "River Plate x Urawa Reds",
  inicio: "2025-06-17T16:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Ulsan Hyundai x Sundowns",
  inicio: "2025-06-17T19:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Monterrey x Inter",
  inicio: "2025-06-17T22:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "City x Wydad AC",
  inicio: "2025-06-18T13:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Real Madrid x Al-Hilal",
  inicio: "2025-06-18T16:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Pachuca x RB Salzburg",
  inicio: "2025-06-18T19:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
{
  nome: "Al Ain x Juventus",
  inicio: "2025-06-18T22:00:00-03:00",
  opcoes: [
    { nome: "Opção 1", url: "" },
    { nome: "Opção 2", url: "" },
    { nome: "Opção 3", url: "" },
    { nome: "Opção 4", url: "" }
  ]
},
  {
    nome: "Canais Fixos",
    inicio: null,
    opcoes: [
      { nome: "UFC 1", url: "https://nossoplayeronlinehd.com/tv/ufcfightpass" },
      { nome: "UFC 2", url: "https://reidoscanais.vip/embed/?id=ufcfightpass" },
      { nome: "Globo Sp", url: "https://embedcanaistv.com/globosp/" },
      { nome: "SBT", url: "https://nossoplayeronlinehd.lat/tv/sbt" },
      { nome: "Record Tv", url: "https://nossoplayeronlinehd.lat/tv/record" }
    ]
  }
];

const intervalosJogos = {};

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(n => String(n).padStart(2, '0')).join(':');
}

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");
  if (localStorage.getItem(SESSION_KEY) === "active") {
    msg.innerText = "Já existe um login ativo neste navegador!";
    return;
  }
  let encodedPass = "";
  try {
    encodedPass = btoa(p);
  } catch (e) {
    msg.innerText = "Senha contém caracteres inválidos!";
    return;
  }
  const isValid = LOGINS.some(login => login.username === u && login.password === encodedPass);
  if (isValid) {
    localStorage.setItem(SESSION_KEY, "active");
    showMain();
    msg.innerText = "";
  } else {
    msg.innerText = "Usuário ou senha inválidos!";
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  showLogin();
}

// Função para normalizar string (remover acentos)
function normalizar(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderJogos(filter = "") {
  const list = document.getElementById("games-list");
  list.innerHTML = "";
  // Limpa todos intervalos antigos
  for (const idx in intervalosJogos) {
    clearInterval(intervalosJogos[idx]);
    delete intervalosJogos[idx];
  }
  jogos
    .filter(jogo => normalizar(jogo.nome).includes(normalizar(filter)))
    .forEach((jogo, idx) => {
      const block = document.createElement("div");
      block.className = "game-block";

      const title = document.createElement("h3");
      title.innerText = jogo.nome;
      block.appendChild(title);

      let statusArea = null;
      if (jogo.inicio) {
        statusArea = document.createElement("div");
        statusArea.className = "status-area";
        statusArea.id = `status-jogo-${idx}`;
        block.appendChild(statusArea);
      }

      const opcoes = document.createElement("div");
      opcoes.className = "opcoes";
      jogo.opcoes.forEach(opcao => {
        const link = document.createElement("a");
        link.href = opcao.url;
        link.innerText = opcao.nome;
        link.className = "opcao-link";
        link.target = "_blank";
        opcoes.appendChild(link);
      });
      block.appendChild(opcoes);

      list.appendChild(block);

      if (jogo.inicio) {
        iniciarContagemJogo(jogo, idx);
      }
    });
}

const TEMPO_JOGO_MS = 120 * 60 * 1000; // 2 horas em ms

function iniciarContagemJogo(jogo, idx) {
  const statusArea = document.getElementById(`status-jogo-${idx}`);
  if (!statusArea) return;

  function updateStatus() {
    const agora = new Date();
    const inicio = new Date(jogo.inicio);
    const diff = inicio - agora;
    if (diff > 0) {
      if (diff <= 5 * 60 * 1000) {
        statusArea.innerHTML = `<span class="status ao-vivo-instant">AO VIVO EM INSTANTE</span> <span class="timer">${formatTime(diff)}</span>`;
      } else {
        statusArea.innerHTML = `<span class="status countdown">Começa em: <span class="timer">${formatTime(diff)}</span></span>`;
      }
    } else if (diff > -TEMPO_JOGO_MS) {
      const tempoRestante = TEMPO_JOGO_MS + diff;
    if (tempoRestante > 0) {
      statusArea.innerHTML = `<span class="status ao-vivo-agora">🟢 AO VIVO AGORA</span>`;
    } else {
      statusArea.innerHTML = `<span class="status encerrado">Jogo encerrado</span>`;
}
    } else {
      statusArea.innerHTML = `<span class="status encerrado">Jogo encerrado</span>`;
    }
  }
  updateStatus();
  // Limpa intervalo antigo se houver
  if (intervalosJogos[idx]) clearInterval(intervalosJogos[idx]);
  intervalosJogos[idx] = setInterval(updateStatus, 1000);
}

window.onload = function() {
  if (localStorage.getItem(SESSION_KEY) === "active") {
    showMain();
  } else {
    showLogin();
  }
  window.addEventListener("storage", function(e) {
    if (e.key === SESSION_KEY && e.newValue !== "active") {
      showLogin();
    }
  });
};

window.addEventListener("beforeunload", () => {
  localStorage.removeItem(SESSION_KEY);
});

function closeNotification() {
  const notif = document.getElementById("user-notification");
  if (notif) notif.style.display = "none";
}

function handleSearch() {
  const searchTerm = document.getElementById('search-input').value;
  renderJogos(searchTerm);
}

// ----------- CONTROLE DO RODAPÉ ---------------

function setupRodapeScroll() {
  const rodape = document.querySelector('.rodape-moderno');
  function verificarRodape() {
    // Só ativa se a tela da lista de jogos estiver visível
    if (document.getElementById("main-container").style.display === "block") {
      // Chegou no fim da página? (com margem de 2px para tolerância)
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        rodape.style.display = "block";
      } else {
        rodape.style.display = "none";
      }
    } else {
      rodape.style.display = "none";
    }
  }
  window.addEventListener('scroll', verificarRodape);
  window.addEventListener('resize', verificarRodape);
  verificarRodape(); // Checa inicialmente
}

function showLogin() {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
  localStorage.removeItem(SESSION_KEY);
  const rodape = document.querySelector('.rodape-moderno');
  rodape.classList.add('rodape-fixa');
  rodape.style.display = "block";
}

function showMain() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-container").style.display = "block";
  document.getElementById("notificacao-jogo").style.display = "block";
  renderJogos();
  const rodape = document.querySelector('.rodape-moderno');
  rodape.classList.remove('rodape-fixa');
  setupRodapeScroll();
}

// -----------------------------------------------------
