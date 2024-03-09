import './navStyles.css'

export function Navigation() {
    return(
    <nav class="navigate">
        <ul class="navList">
            <li><a href="./About.jsx" id="aboutPage liElement">About</a></li>
            <li><a href="#" id="servicesPage liElement">Services</a></li>
            <li><a href="#" id="testimonialsPage liElement">Testimonials</a></li>
            <li><a href="#" id="qaPage liElement">Quality Assurance</a></li>
            <li><a href="#" id="contactPage liElement">Contact</a></li>
        </ul>
    </nav>
        
    );

}