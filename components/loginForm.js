export default function LoginForm() {
  return `
    <div class="loginContainer">
      <h1>Login</h1>
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      <p id="error-message" style="color: red; display: none;">Invalid username or password.</p>
    </div>
  `;
}