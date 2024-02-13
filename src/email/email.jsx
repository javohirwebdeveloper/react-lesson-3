import './email.css';


export const Email = () => {

  return (
    <div className='email'>
          <h2>Subscribe to the Newsletter</h2>
          <p>Enter your email below to get our daily offers and news</p>
          <form className='flex gap-x-4'>
            <label>
                <input type="text" placeholder='Enter your email.' />
            </label>
            <button>Get Started</button>
          </form>
       </div>
  );
}

