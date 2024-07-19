<script>
const h = "nightowl-color-scheme", l = "light", o = "dark";
let n = null, t = l, g = !0, i = "currentState";

try {
  n = localStorage;
} catch {}

function a() {
  const e = document.createElement("style");
  e.innerHTML = `
    body.nightowl-dark {
        background-color: #121212;
        color: #ffffff;
    }

    body.nightowl-dark a {
        color: #1e90ff;
    }

    body.nightowl-dark img, body.nightowl-dark video, body.nightowl-dark iframe, body.nightowl-dark .exclude-from-dark-mode {
        filter: none;
    }

    /* Additional dark mode styles */
    body.nightowl-dark .navbar {
        background-color: #333;
    }

    body.nightowl-dark .footer {
        background-color: #111;
        color: #ccc;
    }
  `, document.head.appendChild(e);
}

function M(e) {
  g = !1, e.defaultMode === "dark" && (t = o), e.toggleButtonMode && (i = e.toggleButtonMode), document.readyState === "complete" ? (a(), d(), c()) : window.addEventListener("load", () => {
    a(), d(), c();
  });
}

window.addEventListener("load", () => {
  g && (a(), d(), c());
});

function m() {
  t = o;
  const e = document.querySelector("html");
  e && (e.classList.remove("nightowl-light"), e.classList.add("nightowl-dark"));
}

function f() {
  t = l;
  const e = document.querySelector("html");
  e && (e.classList.remove("nightowl-dark"), e.classList.add("nightowl-light"));
}

function k() {
  t = t === o ? l : o, w();
}

function w() {
  t === o ? m() : f(), u();
}

function u() {
  const e = document.getElementById("nightowl-switcher-default");
  if (e) {
    const r = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>`, s = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>`;
    i === "newState" ? e.innerHTML = t === o ? r : s : i === "currentState" && (e.innerHTML = t === o ? s : r);
  }
}

function c() {
  const e = document.createElement("div");
  const size = localStorage.getItem('toggle-size') || '50px';
  const position = localStorage.getItem('toggle-position') || 'calc(100vw - 100px)';

  e.id = "nightowl-switcher-default";
  e.style.position = "fixed";
  e.style.left = position;
  e.style.top = "10px";
  e.style.width = size;
  e.style.height = size;
  e.style.borderRadius = "50%"; 
  e.style.backgroundColor = i === "newState" ? "black" : "white";
  e.style.display = "flex";
  e.style.justifyContent = "center";
  e.style.alignItems = "center";
  e.style.cursor = "pointer";
  e.style.zIndex = "9999";
  e.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  e.style.transition = "all 0.3s ease-in-out";
  e.style.overflow = "hidden";
  e.style.color = i === "newState" ? "white" : "black";
  e.addEventListener("click", () => {
    k();
    p();
  });
  document.body.appendChild(e);
  u();

  // Create controls for size and position
  const controlPanel = document.createElement('div');
  controlPanel.style.position = 'fixed';
  controlPanel.style.left = '10px';
  controlPanel.style.bottom = '10px';
  controlPanel.style.zIndex = '9999';
  controlPanel.style.padding = '10px';
  controlPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  controlPanel.style.color = 'white';
  controlPanel.style.borderRadius = '5px';

  const sizeLabel = document.createElement('label');
  sizeLabel.textContent = 'Size:';
  controlPanel.appendChild(sizeLabel);

  const sizeInput = document.createElement('input');
  sizeInput.type = 'number';
  sizeInput.value = parseInt(size);
  sizeInput.style.marginLeft = '5px';
  sizeInput.style.marginRight = '10px';
  sizeInput.addEventListener('input', () => {
    localStorage.setItem('toggle-size', `${sizeInput.value}px`);
    document.getElementById('nightowl-switcher-default').style.width = `${sizeInput.value}px`;
    document.getElementById('nightowl-switcher-default').style.height = `${sizeInput.value}px`;
  });
  controlPanel.appendChild(sizeInput);

  const positionLabel = document.createElement('label');
  positionLabel.textContent = 'Position:';
  controlPanel.appendChild(positionLabel);

  const positionInput = document.createElement('input');
  positionInput.type = 'text';
  positionInput.value = position;
  positionInput.style.marginLeft = '5px';
  positionInput.addEventListener('input', () => {
    localStorage.setItem('toggle-position', positionInput.value);
    document.getElementById('nightowl-switcher-default').style.left = positionInput.value;
  });
  controlPanel.appendChild(positionInput);

  document.body.appendChild(controlPanel);
}

function y() {
  let e = null;
  try {
    n && (e = n.getItem(h));
  } catch {}
  e && [o, l].includes(e) ? t = e : v() && (t = o);
}

function d() {
  y();
  w();
}

function p() {
  if (t !== null)
    try {
      n && n.setItem(h, t);
    } catch {}
}

function v() {
  return window.matchMedia && (window.matchMedia("(prefers-color-scheme: dark)").matches || window.matchMedia("(prefers-color-scheme:dark)").matches);
}

export {
  M as createNightowl
};
</script>
