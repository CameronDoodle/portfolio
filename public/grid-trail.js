(function () {
  var GRID = 20;
  var palette = ["#01befe", "#ffdd00", "#ff7d00", "#ff006d", "#adff02", "#8f00ff"];

  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  function bootTrail() {
    var surface = document.getElementById("grid-trail");
    if (!surface || !(surface instanceof HTMLCanvasElement)) return;
    var draw = surface.getContext("2d");
    if (!draw) return;

    var cells = new Map();
    var particles = [];
    var last = { gx: -1, gy: -1 };

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.floor(window.innerWidth * dpr);
      surface.height = Math.floor(window.innerHeight * dpr);
      surface.style.width = window.innerWidth + "px";
      surface.style.height = window.innerHeight + "px";
      draw.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function colorAt(i) {
      return palette[i % palette.length];
    }

    function stamp(clientX, clientY) {
      var gx = Math.floor(clientX / GRID);
      var gy = Math.floor(clientY / GRID);
      if (gx === last.gx && gy === last.gy) return;
      last = { gx: gx, gy: gy };

      var neighbors = [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      neighbors.forEach(function (pair, i) {
        var x = gx + pair[0];
        var y = gy + pair[1];
        var key = x + "," + y;
        cells.set(key, {
          key: key,
          gx: x,
          gy: y,
          life: i === 0 ? 1 : 0.7,
          color: colorAt(Math.abs(x + y + i) % palette.length),
        });
      });

      var originX = gx * GRID + GRID / 2;
      var originY = gy * GRID + GRID / 2;
      var count = 4 + Math.floor(Math.random() * 4);
      for (var i = 0; i < count; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 0.5 + Math.random() * 1.8;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.25,
          life: 1,
          size: Math.random() > 0.5 ? 4 : 6,
          color: colorAt(Math.floor(Math.random() * palette.length)),
        });
      }
      if (particles.length > 220) particles.splice(0, particles.length - 220);
      if (cells.size > 120) {
        var extra = Array.from(cells.values()).sort(function (a, b) {
          return a.life - b.life;
        });
        extra.slice(0, cells.size - 120).forEach(function (c) {
          cells.delete(c.key);
        });
      }
    }

    function tick() {
      draw.clearRect(0, 0, window.innerWidth, window.innerHeight);
      cells.forEach(function (cell, key) {
        cell.life -= 0.01;
        if (cell.life <= 0) {
          cells.delete(key);
          return;
        }
        var rgb = hexToRgb(cell.color);
        draw.fillStyle =
          "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + cell.life * 0.8 + ")";
        draw.fillRect(cell.gx * GRID, cell.gy * GRID, GRID, GRID);
        draw.strokeStyle = "rgba(17,17,17," + cell.life * 0.45 + ")";
        draw.lineWidth = 1;
        draw.strokeRect(cell.gx * GRID + 0.5, cell.gy * GRID + 0.5, GRID - 1, GRID - 1);
      });
      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.life -= 0.012;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        var sx = Math.round(p.x / 4) * 4;
        var sy = Math.round(p.y / 4) * 4;
        var prgb = hexToRgb(p.color);
        draw.fillStyle =
          "rgba(" +
          prgb.r +
          "," +
          prgb.g +
          "," +
          prgb.b +
          "," +
          Math.min(1, p.life + 0.15) +
          ")";
        draw.fillRect(sx, sy, p.size, p.size);
      }
      window.requestAnimationFrame(tick);
    }

    function onMove(event) {
      stamp(event.clientX, event.clientY);
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("pointermove", onMove, { capture: true, passive: true });
    document.addEventListener("mousemove", onMove, { capture: true, passive: true });
    window.requestAnimationFrame(tick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootTrail);
  } else {
    bootTrail();
  }
})();
