import React  from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
const STYLES = ['btn--primary', 'btn--ouline'];
const SIZES = ['btn--medium', 'bt--large'];
export const Button = ({children ,type,onClick ,buttonStyle,buttonSize}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize)?buttonSize : SIZES[0];
    return (
        <Link to='/contact' className='btb-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
                </button> 
            </Link>
    );
} ;