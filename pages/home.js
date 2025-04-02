import Navigation from '../components/navigation.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Layout from '../layouts/default.js';

export default function Home() {
  const { header, navigation, main, footer } = Layout(this.root);

  Header(header);
  Navigation(navigation);
  Footer(footer);
}

