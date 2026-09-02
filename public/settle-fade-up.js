(function () {
  var FLAG = "cg-fade-up-done";

  function settle(el) {
    if (!el || !el.classList || !el.classList.contains("animate-fade-up")) return;
    el.classList.remove("animate-fade-up");
    el.setAttribute("data-settled", "");
    el.style.opacity = "1";
    el.style.transform = "none";
    if (!document.querySelector(".animate-fade-up")) {
      sessionStorage.setItem(FLAG, "1");
    }
  }

  function settleAll() {
    document.querySelectorAll(".animate-fade-up").forEach(settle);
    sessionStorage.setItem(FLAG, "1");
  }

  function sessionDone() {
    return sessionStorage.getItem(FLAG) === "1";
  }

  if (sessionDone()) settleAll();

  document.addEventListener("animationstart", function (event) {
    var el = event.target;
    if (!el || !el.classList || !el.classList.contains("animate-fade-up")) return;
    if (sessionDone()) settle(el);
  });

  document.addEventListener("animationend", function (event) {
    var el = event.target;
    if (event.animationName !== "fade-up") return;
    if (!el || !el.classList || !el.classList.contains("animate-fade-up")) return;
    settle(el);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") settleAll();
  });

  new MutationObserver(function (records) {
    if (!sessionDone()) return;
    records.forEach(function (record) {
      record.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        if (node.classList.contains("animate-fade-up")) settle(node);
        node.querySelectorAll(".animate-fade-up").forEach(settle);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
