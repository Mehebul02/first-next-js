import React from 'react';

const CategoriesPageDetails = ({params}) => {
    if(params.feature.length == 3)return <div>
        {params.feature[2]}
    </div>
    if(params.feature.length == 2)return <div>
        {params.feature[1]}
    </div>
    return (
        <div>
            <h1>Categories page details</h1>
        </div>
    );
};

export default CategoriesPageDetails;