import React from 'react'
import TableRow from './TableRow'
import TableColumn from './TableColumn'

function Table(props){
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <TableColumn TableColumns={props.columns}/>
                </thead>
                <tfoot>
                    <TableColumn TableColumns={props.columns}/>
                </tfoot>
                <tbody>
                    {props.products.map((product,i) => <TableRow product={product} key={"product" + i}/>)}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Table