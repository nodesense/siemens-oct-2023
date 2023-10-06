import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

 

interface FooterProps {
    title: string;
    year?: number; // TS optional
}

// single line function, no return keyword, 1 line code
// destructing in the function declaration
// const title = props.title, const year = props.year
const Footer:React.FC<FooterProps> =  ({title, year}) => (
    <div>
        <hr />
        {/* using default value blue without provider */}
        <ThemeContext.Consumer>
            {/* color is passed from context , which is blue color */}
          { color => <p style = { {color: color} }>Copyrights @{title}, {year}, 
                                color theme {color} </p> }  
        </ThemeContext.Consumer>
        
    </div>
)

// defaultProps is react keyword
Footer.defaultProps = {
    year: 2022 // 2022 is used if parent component doesnt pass data
}

export default Footer;