import Layout from '../../layouts/default';
import LoginForm from '../../components/loginForm';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './login.css';

export default function Login() {
  const { header, main, footer } = Layout(this.root);

  Header(header);
  main.innerHTML = `
    <div class="mainContainer">
      ${LoginForm()}
    </div>
  `;
  Footer(footer);

  const form = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    if (username === 'Riechelle' && password === 'itsmy21st') {
      localStorage.setItem('isLoggedIn', 'true');
      this.redirect('/home');
    } else {
      errorMessage.style.display = 'block';
    }
  });
}