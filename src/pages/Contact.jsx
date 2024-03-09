import 'src/pages/contact.css'

export default function Contact() {
    return(
        <div class="contact">
            <h2>Contact Us</h2>
            <div class="contactOptions">
                <div class="contactInfoDiv">
                    <h4>1-541-555-1111</h4>
                    <h4>premierConstruction@gmail.com</h4>
                    <h4>Serving the greater Eugene Springfield Area</h4>
                    <h4>Office Hours: Mon-Fri 11 a.m. - 2 p.m.</h4>
                </div>
                <form>
                    <div class="inputSection">
                        <label>Name</label>
                        <input type="text"></input>
                    </div>
                    <div class="inputSection">
                        <label>Phone Number</label>
                        <input type="text"></input>
                    </div>
                    <div class="inputSection">
                        <label>Email</label>
                        <input type="email"></input>
                    </div>
                    <div class="inputSection">
                        <label>Brief Description of Project</label>
                        <textarea name="textarea" rows="5" cols="25"></textarea>
                    </div>
                    <button type="submit" class="requestQuote">Submit Quote Request</button>
                </form>
            </div>
        </div>
    );
}