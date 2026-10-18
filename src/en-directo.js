// Source for /en-directo/app.js (bundled with esbuild, see package.json "bundle:en-directo").
import {
  login,
  logout,
  getUser,
  handleAuthCallback,
  acceptInvite,
  updateUser,
  requestPasswordRecovery,
  AuthError,
  MissingIdentityError,
} from "@netlify/identity";

const REFRESH_MS = 5000;
const $ = (sel) => document.querySelector(sel);
const views = ["loading", "login", "set-password", "forbidden", "dashboard"];
let pollTimer = null;
let inviteToken = null;
let lastCount = null;

const show = (name) => {
  for (const v of views) $(`#view-${v}`).hidden = v !== name;
};

const setMessage = (el, text, isError = true) => {
  el.textContent = text;
  el.classList.toggle("is-error", isError);
};

const describeError = (error) => {
  if (error instanceof MissingIdentityError) return "Netlify Identity no está activado en este sitio.";
  if (error instanceof AuthError) {
    if (error.status === 401) return "Correo o contraseña incorrectos.";
    if (error.status === 422) return "Revisa los datos: la contraseña debe tener al menos 8 caracteres.";
    return error.message;
  }
  return "Algo ha fallado. Inténtalo de nuevo.";
};

const stopPolling = () => {
  clearInterval(pollTimer);
  pollTimer = null;
};

const renderCount = (n) => {
  const el = $("#live-count");
  el.textContent = n;
  $("#live-label").textContent = n === 1 ? "persona en la web ahora mismo" : "personas en la web ahora mismo";
  if (lastCount !== null && n !== lastCount) {
    el.classList.remove("is-bump");
    void el.offsetWidth;
    el.classList.add("is-bump");
  }
  lastCount = n;
};

const fetchCount = async () => {
  try {
    const res = await fetch("/api/live-visitors", { credentials: "same-origin", cache: "no-store" });
    if (res.status === 401) return route();
    if (res.status === 403) {
      stopPolling();
      return show("forbidden");
    }
    if (!res.ok) throw new Error(String(res.status));
    const { count, checkedAt } = await res.json();
    renderCount(count);
    $("#live-updated").textContent = `Actualizado a las ${new Date(checkedAt).toLocaleTimeString("es-ES")}`;
    $("#live-status").classList.remove("is-offline");
  } catch {
    $("#live-status").classList.add("is-offline");
    $("#live-updated").textContent = "Sin conexión, reintentando…";
  }
};

const route = async () => {
  stopPolling();
  const user = await getUser();
  if (!user) return show("login");
  $("#user-email").textContent = user.email ?? "";
  $("#forbidden-email").textContent = user.email ?? "";
  if (!user.roles?.includes("admin")) return show("forbidden");
  show("dashboard");
  fetchCount();
  pollTimer = setInterval(() => document.visibilityState === "visible" && fetchCount(), REFRESH_MS);
};

$("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const msg = $("#login-message");
  const btn = e.submitter;
  btn.disabled = true;
  setMessage(msg, "");
  try {
    await login($("#login-email").value.trim(), $("#login-password").value);
    await route();
  } catch (error) {
    setMessage(msg, describeError(error));
  } finally {
    btn.disabled = false;
  }
});

$("#forgot-password").addEventListener("click", async () => {
  const msg = $("#login-message");
  const email = $("#login-email").value.trim();
  if (!email) return setMessage(msg, "Escribe tu correo arriba y vuelve a pulsar.");
  try {
    await requestPasswordRecovery(email);
    setMessage(msg, "Te hemos enviado un correo para restablecer la contraseña.", false);
  } catch (error) {
    setMessage(msg, describeError(error));
  }
});

$("#password-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const msg = $("#password-message");
  const btn = e.submitter;
  const password = $("#new-password").value;
  btn.disabled = true;
  setMessage(msg, "");
  try {
    if (inviteToken) await acceptInvite(inviteToken, password);
    else await updateUser({ password });
    inviteToken = null;
    await route();
  } catch (error) {
    setMessage(msg, describeError(error));
  } finally {
    btn.disabled = false;
  }
});

for (const btn of document.querySelectorAll("[data-logout]")) {
  btn.addEventListener("click", async () => {
    stopPolling();
    try {
      await logout();
    } finally {
      lastCount = null;
      show("login");
    }
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && pollTimer) fetchCount();
});

(async () => {
  try {
    const result = await handleAuthCallback();
    if (result?.type === "invite") {
      inviteToken = result.token;
      $("#password-title").textContent = "Crea tu contraseña";
      return show("set-password");
    }
    if (result?.type === "recovery") {
      $("#password-title").textContent = "Nueva contraseña";
      return show("set-password");
    }
  } catch (error) {
    show("login");
    return setMessage($("#login-message"), describeError(error));
  }
  route();
})();
