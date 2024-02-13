import './food.css';
import organic from '../assets/aboutimg.png';
import fresh from '../assets/freshimg.png';
import cooker from '../assets/cooker.png';
import check from '../assets/check.svg';

export const Food = () => {

  return (
    <div className='Food'>
       <div className='organic flex justify-between items-center'>
           <div className="organic__left">
            <h2 className='top-32'>About US</h2>
            <p>Organic food is grown without the use of synthetic
                 chemicals, such as human-made pesticides and fertilizers,
                  and does not contain genetically modified organisms (GMOs).
                   Organic foods include fresh produce, meats, and dairy products as well as processed 
                   foods such as crackers, drinks, and frozen meals.</p>
                   <button>Learn More</button>
           </div>
           <div className="organic__right">
            <img src={organic} alt="" />
           </div>
       </div>
        <div className='organic flex justify-between items-center'>
           <div className="organic__right">
            <img src={fresh} alt="" />
           </div>
           <div className="organic__left">
            <h2 className='top-32'>Fresh Vegetables
Every Day</h2>
            <p>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy.
               Request norland neither mistake for yet. Between the for morning assured country believe.</p>
                   <button>Learn More</button>
           </div>
          
       </div>
        <div className='organic flex justify-between items-center'>
           <div className="organic__left">
            <h2 className='top-32'>Cooked by the
Best Chefs</h2>
            <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy.
               Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.</p>
                   <ul>
                    <li className='flex gap-x-4'><img src={check} alt="" /><h4> A guaranteed delicious meal</h4></li>
                    <li className='flex gap-x-4'><img src={check} alt="" /><h4> Food is guaranteed hygienic</h4></li>
                    <li className='flex gap-x-4'><img src={check} alt="" /><h4> Cooked quickly</h4></li>
                   </ul>
           </div>
           <div className="organic__right">
            <img src={cooker} alt="" />
           </div>
       </div>
       </div>
  );
}

