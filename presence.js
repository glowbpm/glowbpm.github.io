// Invisible presence heartbeat: lets the private /en-directo/ page count who is on the site right now.
(() => {
  // Identity emails (invite, password recovery, confirmation) link to the site root; hand them to the private page.
  if (/(invite|recovery|confirmation|email_change)_token=|access_token=/.test(location.hash)) {
    location.replace("/en-directo/" + location.hash);
    return;
  }

  const ENDPOINT = "/api/live-visitors";
  const HEARTBEAT_MS = 20000;

  const id =
    sessionStorage.getItem("glow-live-id") ||
    (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
  sessionStorage.setItem("glow-live-id", id);

  let timer = null;

  const send = (leave = false) => {
    const body = JSON.stringify(leave ? { id, leave: true } : { id });
    if (leave) {
      navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }));
      return;
    }
    fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(
      () => {},
    );
  };

  const start = () => {
    if (timer) return;
    send();
    timer = setInterval(send, HEARTBEAT_MS);
  };

  const stop = () => {
    clearInterval(timer);
    timer = null;
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") start();
    else {
      stop();
      send(true);
    }
  });
  window.addEventListener("pagehide", () => send(true));

  if (document.visibilityState === "visible") start();
})();
