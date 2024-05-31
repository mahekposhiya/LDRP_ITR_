/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './Activities.css'
import placement from '../../assets/Placement.png'
import ncc from '../../assets/NCC.jpg'
import nss from '../../assets/NSS.png'
import sports from '../../assets/SPORTS.png'
const Activities =() => {

    const slider = useRef();
    let tx =0;
    const slideBackward =()=>{
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform =`translateX(${tx}%)`


    }

    const slideForward= ()=>{
        if(tx>-50){
            tx -=25;
        }
        slider.current.style.transform =`translateX(${tx}%)`

    }
  return (
    <div className='activities'>
         <img src="src/assets/next-icon.png" alt="" className="next-btn"  onClick={slideForward} />
         <img src="src/assets/back-icon.png" alt="" className="back-btn"  onClick={slideBackward}/>

         <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="act-info">
                            <img src={placement} alt="" />
                            <div>
                                <h2>Placement</h2>
                                {/* <span>Ketan choudhari</span> */}
                            </div>
                        </div>
                        <p><b>Ketan Chaudhari </b> <br />

Placement Officer,LDRP-ITR,Gandhinagar <br />

placement@ldrp.ac.in <br />

Training and Placement is an important wing for any institution to promote knowledge with the advancement of technology. LDRP offer training for both students and faculties. Additionally, Institute is always engaging the faculty as well students in the career base workshops and other extra curriculum activities.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="act-info">
                            <img src={ncc} alt="" />
                            <div>
                                <h2>NCC</h2>
                            </div>
                        </div>
                        <p>NCC provides a suitable environment to motivate the youth to take up a career in the Armed Forces and Develop Character,Comradeship,Discipline,Leadership,Secular Outlook, Spirit of Adventure. <br />LDRP is having 50 seats of NCC which is running under 9 BT Gujarat Ahmedabad, NCC. <br />
Cadets are having parade on every Monday. <br />Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and Independence Day.
</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="act-info">
                            <img src={nss} alt="" />
                            <div>
                                <h2>NSS</h2>
                            </div>
                        </div>
                        <p>Volunteers works selflessly on “Don’t wait for the change, be the change”. <br />
LDRP is running 1 unit (100 Volunteers) of NSS. Students is actively participating social activities like Blood Donation Camp, Medical Check up Camp. <br />
 Volunteers are celebrating Engineers Day, Aids Day, Women’s Day, Population Day, Ozone Day, Teachers Day. <br />
Volunteers have participated in National Integration Camp, Pre Republic Day Camp and attended BHARTIYA CHATRA SANSAD Seminar.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="act-info">
                            <img src={sports} alt=""/>
                            <div>
                                <h2>Sports</h2>
                            </div>
                        </div>
                        <p>LDRP is having its own name and fame in sports & games. <br />

College students have participated in different sports & games like Cricket, Football, Volleyball, Kabaddi, Kho-Kho, Badminton, Table Tennis, Chess, Swimming, Athletics, Taekwondo, Cross Country etc…. <br />

Every Year college is organizing Inter Branch sports fest called “TRIUNFADOR – Fighter kabhi haar nahi maanta’.  <br /> </p>
                    </div>
                </li>
            </ul>
         </div>
    </div>
  )
}

export default Activities
