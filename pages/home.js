import Navigation from '../components/navigation';
import Welcome from '../components/welcome';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../layouts/default';

export default function Home() {
  const { header, navigation, main, footer } = Layout(this.root);

  Header(header);
  Navigation(navigation);
  Welcome(main);
  Footer(footer);
}

