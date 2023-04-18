import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EmpListing = () =>
{
    const [ empdata, empdataChange ] = useState( null );

    useEffect( () =>
    {
        fetch( `${ process.env.REACT_APP_SERVER }/employee` ).then( ( res ) =>
        {
            return res.json();
        } ).then( ( resp ) =>
        {
            empdataChange( resp );
        } ).catch( ( err ) =>
        {
            console.log( err.message );
        } )
    } )
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (*)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            { empdata &&
                                empdata.map( item => (
                                    <tr key={ item.id }>
                                        <td>{ item.id }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.email }</td>
                                        <td>{ item.phone }</td>
                                        <td>
                                            <a href="/" className="btn btn-success">Edit</a>
                                            <a href="/" className="btn btn-danger">Remove</a>
                                            <a href="/" className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ) )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing;
