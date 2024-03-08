import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { Footer } from './Footer';
import { About } from './About';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { QualityAssurance } from './QualityAssurance';
import { Contact } from './Contact'; 


export default function App() {
  return (
   <>
   <Header />
   
    <div class="mainDisplay">
      <Navigation />
      <About />
      <Services />
      <Testimonials />
      <QualityAssurance />
      <Contact /> 
    </div>
  <Footer />
   </>
  );
}