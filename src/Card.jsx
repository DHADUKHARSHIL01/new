import { useState } from "react";

function Card() {
 

  const [number, setPrice] = useState(189900);

  function increment() {
    setPrice(number + 189900);
  }

  function decrement() {
    if (number > 189900) {
      setPrice(number - 189900);
    }
  }

 
  const [darkTheme, setDarkTheme] = useState(false)

  
  return (
    <>
  <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className='button-container'>
          <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
            Toggle Theme
          </button>
        </div>
      </nav>
      <div className='content'>
        <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>
          Do take a note of the <code>color</code> property in the nav bar.
        </p>
      </div>
    </div>

      <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">img</h5>
          <p className="card-text w-50">
           
              <img
                src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png/mxw_640,f_auto"
                alt="..."
                className="w-50"
              />
    
          </p>
          <a href="#" className="btn btn-primary" >
            Show img
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
