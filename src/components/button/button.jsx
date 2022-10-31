// Creating the buttons//

import './button.css';

function Buttons(){
    return(
        <div className='container button-contain'>
            <a href='#about' className='btn pri'>
                Learn more
            </a>

            <a href='#contact' className='btn sec'>
                Contact ME
            </a>
        </div>
    )
}


export default Buttons;