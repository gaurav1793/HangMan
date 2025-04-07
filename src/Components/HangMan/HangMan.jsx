import React from 'react'
import level0 from '../../assets/Images/0.jpg';
import level1 from '../../assets/Images/1.jpg';
import level2 from '../../assets/Images/2.jpg';
import level3 from '../../assets/Images/3.jpg';
import level4 from '../../assets/Images/4.jpg';
import level5 from '../../assets/Images/5.jpg';
import level6 from '../../assets/Images/6.jpg';
import level7 from '../../assets/Images/7.jpg';
import level8 from '../../assets/Images/8.jpg';
import level9 from '../../assets/Images/9.jpg';
import level10 from '../../assets/Images/10.jpg';


const HangMan = ({ step }) => {
    const images = [level0, level1, level2, level3, level4, level5
        , level6, level7, level8, level9, level10
    ]
    return (
        <div className='h-[350px] w-[360px]'>
            <img
                src={step >= images.length ? images[images.length - 1] : images[step]}
            />
        </div>
    )
}

export default HangMan