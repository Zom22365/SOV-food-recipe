import React from 'react';
import CategoryComponent from 'src/components/CategoryComponent';
import Format from 'src/layout/format';

const Home = () => {
    return (
        <>
            <Format children={<CategoryComponent />} />

        </>
    );
}

export default Home;