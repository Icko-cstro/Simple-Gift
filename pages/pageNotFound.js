import Navigation from '../components/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../layouts/default';

export default function PageNotFound() {
  const { header, navigation, main, footer } = Layout(this.root);

  Header(header);
  Navigation(navigation);
  main.innerHTML = '<h1>Page Not Found</h1>';
  Footer(footer);
}
