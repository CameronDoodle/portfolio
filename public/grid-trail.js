(function () {
  var GRID = 20;
  var palette = ["#01befe", "#ffdd00", "#ff7d00", "#ff006d", "#adff02", "#8f00ff"];
  var MAX_CELLS = 48;
  var DECAY = 0.0016;

  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  var rgbCache = palette.map(hexToRgb);

  function bootTrail() {
    var surface = document.getElementById("grid-trail");
    if (!surface || !(surface instanceof HTMLCanvasElement)) return;
    var draw = surface.getContext("2d", { alpha: true });
    if (!draw) return;

    var cells = [];
    var lastGx = -1;
    var lastGy = -1;
    var colorIndex = 0;
    var raf = 0;
    var lastTs = 0;
    var running = false;
    var originLeft = 0;
    var originTop = 0;

    function syncBox() {
      var rect = surface.getBoundingClientRect();
      originLeft = rect.left;
      originTop = rect.top;
      var w = Math.max(0, Math.round(rect.width));
      var h = Math.max(0, Math.round(rect.height));
      if (surface.width !== w) surface.width = w;
      if (surface.height !== h) surface.height = h;
      draw.setTransform(1, 0, 0, 1, 0, 0);
    }

    function stamp(clientX, clientY) {
      if (document.hidden) return;
      var gx = Math.floor((clientX - originLeft) / GRID);
      var gy = Math.floor((clientY - originTop) / GRID);
      if (gx === lastGx && gy === lastGy) return;
      lastGx = gx;
      lastGy = gy;
      colorIndex = (colorIndex + 1) % palette.length;
      cells.push({
        gx: gx,
        gy: gy,
        life: 1,
        rgb: rgbCache[colorIndex],
      });
      if (cells.length > MAX_CELLS) cells.splice(0, cells.length - MAX_CELLS);
    }

    function tick(now) {
      if (!running) return;
      raf = window.requestAnimationFrame(tick);
      if (document.hidden) return;

      var dt = lastTs ? now - lastTs : 16;
      lastTs = now;
      if (dt > 50) dt = 16;

      draw.clearRect(0, 0, surface.width, surface.height);
      var decay = DECAY * dt;
      var write = 0;
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.life -= decay;
        if (cell.life <= 0) continue;
        var rgb = cell.rgb;
        draw.fillStyle =
          "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + cell.life * 0.85 + ")";
        draw.fillRect(cell.gx * GRID, cell.gy * GRID, GRID, GRID);
        cells[write++] = cell;
      }
      cells.length = write;
    }

    function start() {
      if (running) return;
      running = true;
      lastTs = 0;
      raf = window.requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      lastTs = 0;
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
      cells.length = 0;
      lastGx = -1;
      lastGy = -1;
      draw.clearRect(0, 0, surface.width, surface.height);
    }

    function onMove(event) {
      stamp(event.clientX, event.clientY);
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    syncBox();
    window.addEventListener("resize", syncBox);
    window.addEventListener("scroll", syncBox, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", syncBox);
      window.visualViewport.addEventListener("scroll", syncBox);
    }
    document.addEventListener("pointermove", onMove, { capture: true, passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    if (!document.hidden) start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootTrail);
  } else {
    bootTrail();
  }
})();
