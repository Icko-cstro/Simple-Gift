import Navigation from '../components/navigation.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Layout from '../layouts/default.js';

export default function PageNotFound() {
  const { header, navigation, main, footer } = Layout(this.root);

  Header(header);
  Navigation(navigation);
  main.innerHTML = '<h1>Page Not Found</h1>';
  Footer(footer);
}
