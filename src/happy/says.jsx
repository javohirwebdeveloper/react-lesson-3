import './says.css';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import vector from '../assets/vector.svg';
import arrow from '../assets/arrow.svg';

export const Says = () => {

  return (
    <div className='Says'>
           <h2>Happy Clients Says</h2>
           <div className="users flex gap-x-6">
            <div className="user1 hover:shadow-2xl">
              <div className="user1-top">
                <img src={user1} alt="" />
                <ul>
                  <li><h5>KHALIL NAZIR</h5></li>
                  <li><p>CEO of UI.Desk</p></li>
                </ul>
                <img className='vector' src={vector} alt="" />
                </div>
                <p className='user_say'>Thirty for remove plenty regard you summer though. He preference 
                  Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
            </div> <div className="user1 hover:shadow-2xl">
              <div className="user1-top">
                <img src={user2} alt="" />
                <ul>
                  <li><h5>ZEESHAN ANWER</h5></li>
                  <li><p>CEO of UI Box</p></li>
                </ul>
                <img className='vector' src={vector} alt="" />
                </div>
                <p className='user_say'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
            </div> 
           </div>
           <img src={arrow} alt=""  className='my-12'/>
       </div>
  );
}

