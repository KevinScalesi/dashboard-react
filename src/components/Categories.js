import React from 'react'
import CategoryBox from './CatergoryBox'

function Categories()
{
    return(
        <div className="card-body">
            <div className="row">
                <CategoryBox name="Category 01"/>
                <CategoryBox name="Category 02"/>
                <CategoryBox name="Category 03"/>
                <CategoryBox name="Category 04"/>
                <CategoryBox name="Category 05"/>
                <CategoryBox name="Category 06"/>
            </div>
        </div>
    );
}

export default Categories;