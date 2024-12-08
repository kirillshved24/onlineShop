import dotsBig from '../../icons/dots_big.svg'
import Line1 from '../../icons/line1.svg'
export const ContentBlock = ({ currentPage }) =>
    <div className='container'>
        <div className="shopContent">
            <img src={dotsBig} alt='vectorObject' />
            <div className='shopIcon'></div>
        </div>
        <div className='shopTitleText'>
            <p className='shopTitle'>{currentPage}</p>
            <div className='shopText'>
                <img src={Line1} alt='Line' />
                <p className='menuItem'>Home</p>
                <p className='fashionee'>{currentPage}</p>
            </div>
        </div>
        <div className='linePosition'></div>
    </div>