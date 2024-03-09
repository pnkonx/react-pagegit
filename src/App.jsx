import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { Footer } from './Footer';
/*import { About } from './pages/About';
import { Services } from './pages/Services';
import { Testimonials } from './pages/Testimonials';
import { QualityAssurance } from './pages/QualityAssurance';
import { Contact } from './pages/Contact'; */





export default function App() {

  return (
   <>
   <Header />
   
    <div class="mainDisplay">
      <Navigation />
     {/*} <About />
      <Services />
      <Testimonials />
      <QualityAssurance />
      <Contact />*/} 
    </div>
  <Footer />
   </>
  );
}