import React from 'react'


function TableRow(props){
    return (
        <tr>
            <td>{props.product.Name}</td>
            <td>{props.product.Description}</td>
            <td>{props.product.Price}</td>
            <td>
                <ul>
                    {props.product.Categories.map((category,i)=><li key={category + i}>{category}</li>)}
                </ul>
            </td>
            <td>
                <ul>
                    {props.product.Colors.map((color,i)=><li key={color + i}><span className={color.Clase}>{color.Color}</span></li>)}
                </ul>
            </td>
            <td>{props.product.Stock}</td>
        </tr>
    );
}

export default TableRow