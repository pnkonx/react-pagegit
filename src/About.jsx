import './about.css'

export function About() {
    return(
        <>
          <div class="about">
            <h1>Who is Premier Construction?</h1>
            <div class="aboutContentDiv">
                <div class="textAbout">
                    <h3>We are locally owned and operated.</h3>
                    <p> With over 10 years experience, we pride ourselves in providing reliable service and products to the central Willamette Valley.</p>
                    <p>We can help you bring your dream to life. Our team can create long lasting solutions tailored to your needs. </p>
                </div>
                <div className='aboutImg'>
                    <img src="sources/cameron-smith-28c3pajQlyI-unsplash.jpg" alt="" class="mainImage"></img>
                </div>
            </div>
        </div>  
        </>
    );
}