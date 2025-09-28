    const fs = require('fs');
    const path = require('path');
    const buildDir = path.join(__dirname, 'build');
    if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true });
    const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>COMP3104 Lab 04</title></head>
<body>
  <h1>Build Output</h1>
  <p>If you see this page on GitHub Pages, your CI deploy worked 🎉</p>
</body>
</html>`;
    fs.writeFileSync(path.join(buildDir, 'index.html'), html);
    console.log("Build complete: build/index.html");
