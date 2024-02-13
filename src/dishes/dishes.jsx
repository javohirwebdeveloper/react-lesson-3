import './dishes.css';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import box3 from '../assets/box3.png';


export const Dishes = () => {

  return (
    <div className='Dishes'>
         <h2>Special Dishes for you</h2>
         <p>Made with premium & 100% Organic ingredients</p>
         <div className="dishes_types flex gap-x-12 justify-center">
              <div className="dishes_box hover:shadow-2xl">
                <img src={box1} alt="" />
                <h4>Green Salad</h4>
                <p>A salad combined witha delicious
cut of bacon and mixed with tasty
and fresh sesome oil.</p>
              </div> <div className="dishes_box hover:shadow-2xl">
                <img src={box2} alt="" />
                <h4>Beef Salad</h4>
                <p>A salad combined witha delicious
cut of bacon and mixed with tasty
and fresh sesome oil.</p>
              </div> <div className="dishes_box hover:shadow-2xl">
                <img src={box3} alt="" />
                <h4>Nut Salad</h4>
                <p>A salad combined witha delicious
cut of bacon and mixed with tasty
and fresh sesome oil.</p>
              </div>
         </div>
         <button>View All</button>
       </div>
  );
}

