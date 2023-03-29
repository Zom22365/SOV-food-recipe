import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from 'src/components/HeaderComponent';

const Format = (props) => {
    return (<>
        <HeaderComponent />
        <div className='app'>
            {props.children}
        </div>

    </>);
}

export default Format;