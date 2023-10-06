import React, {createContext} from 'react';


// "blue" is default value used in case there is no provider for context
const ThemeContext = createContext("blue")

export default ThemeContext;