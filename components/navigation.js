export default function Navigation(root) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  root.innerHTML = isLoggedIn
    ? `
      <a href="/home">Home</a>
      <a href="/pages/1">Pages</a>
      <a href="#" id="logout">Logout</a>
    `
    : `
      <a href="/">Login</a>
    `;

  if (isLoggedIn) {
    const logoutLink = document.getElementById('logout');
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/';
    });
  }
}
