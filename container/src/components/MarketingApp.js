import React, {useRef, useEffect} from 'react';
import { mount } from 'marketing/MarketingApp';

//console.log(mount);

export default ()=> {
    const ref = useRef(null);

    useEffect(() => {
        if(ref.current)
            mount(ref.current); 
    });

    return <div className='marketing-app-container' ref={ref}/>
}