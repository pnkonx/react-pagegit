import './header.css'

export function Header(){
    return(
        
            <div className="header">
                <img src='sources/logo3.svg' className='logo'></img>
                <div className='buttons'>
                    <button class="call">Call 541-625-5555 for your Free quote</button>
                    <button class="emailQuote">Request Your Free quote through Email</button>
                </div>
            </div>
        
    );
}