import './App.css';
import { Header } from './header/header.jsx';
import { About } from './about/about.jsx';
import { Food } from './food/food.jsx';
import { Dishes } from './dishes/dishes.jsx';
import { Says } from './happy/says.jsx';
import { Email } from './email/email.jsx';
import { Footer } from './footer/footer.jsx';
import { FooterBottom } from './footer/footer-bottom.jsx';
function App() {

  return (
    <div className='app'>
    <div className='container'>
      <Header/>
      <About/>
      <Food/>
      <Dishes/>
      <Says/>
      <Email/>
      <Footer/>
    </div>
    <div>
    <FooterBottom/></div>
    </div>
  )
}

export default App
