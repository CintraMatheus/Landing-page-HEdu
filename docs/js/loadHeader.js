// js/loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
  var html = `
    <header class="site-header">
      <div class="header-logo">
        <a href="./index.html">
          <img src="img/logoHEdu.png" alt="HEdu Logo" />
        </a>
      </div>
      <nav>
        <a href="./sobre.html">Sobre</a>
        <a href="./solucao.html">Solução</a>
        <a href="./blog.html">Blog</a>
      </nav>
    </header>
  `;

  var placeholder = document.getElementById("header-placeholder");
  if (placeholder) {
    placeholder.innerHTML = html;
  }
});