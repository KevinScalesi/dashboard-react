import React from 'react'
import CategoryBox from './CatergoryBox'

function Categories(props)
{
    return(
        <div className="card-body">
            <div className="row">
                {props.categories.map((category, i) => <CategoryBox name={category} key={category + i}/>) }
            </div>
        </div>
    );
}

export default Categories;