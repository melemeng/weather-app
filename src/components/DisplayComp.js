import React from 'react';

import '../style/container.css';



export function DisplayComp() {

    return (
        <div className='container'>
            <div className='box1'>
                <h4>Munich</h4>
                <p>datum</p>

                <h4>30 grad</h4>
                <p>27 / 17 C</p>
                <p>Moderate or heavy rain shower</p>

                <p>Wind: 7km/h</p>
                <p>Humidity: 77 %</p>

            </div>
            <div className='box2'>
               <iframe></iframe>

            </div>



        </div>




    );
}

 export function DisplayDays(){

    return(

        <div className='container-2'>
            <div className='box-3'>
                <h4>day 1</h4>
                <iframe></iframe>
                 <p>Moderate or heavy</p>
                 <p>27 / 17 C</p>
            </div>
            <div className='box-3'>
                <h4>day 2</h4>
                <iframe></iframe>
                 <p>Moderate or heavy</p>
                 <p>27 / 17 C</p>

             </div>
             <div className='box-3'>
                <h4>day 3</h4>
                <iframe></iframe>
                <p>Moderate or heavy</p>
                <p>27 / 17 C</p>
             </div>
             <div className='box-3'>
                 <h4>day 4</h4>
                 <iframe></iframe>
                 <p>Moderate or heavy</p>
                 <p>27 / 17 C</p>
             </div>

        </div>
    )

}