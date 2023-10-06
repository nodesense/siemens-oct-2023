import React  from 'react';

interface HeaderProps {
    title: string;
}  

export const Header = (props: HeaderProps) => {
    console.log('Header render')
    // PROPS ARE IMMUTABLE
    // error
    //props.title = "welcome";

    // const title = props.title
    // destructring
    const {title} = props;

    return (
        <div>
            <h1>{title}</h1>
            <hr />
        </div>
    )
}


