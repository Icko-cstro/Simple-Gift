export default function Layout(root) {
  root.innerHTML = `
      <div id="container">
        <header id="header"></header>
        <navigation id="navigation"></navigation>
        <main id="main"></main>
        <footer id="footer"></footer>
      </div>
    `;

  return {
    header: document.getElementById('header'),
    navigation: document.getElementById('navigation'),
    main: document.getElementById('main'),
    footer: document.getElementById('footer'),
  };
}
