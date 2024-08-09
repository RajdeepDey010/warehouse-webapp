import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterWarehousesByName } from '../../redux/warehouseSlice';
import './TopNav.css'

function TopNav() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        dispatch(filterWarehousesByName(searchTerm));
    };

    return (
        <div className="header">
            <div className="row top-nav-row">
                <div className="brand my-1">
                    <h1>WareHouse</h1>
                </div>
                <div className="inp-container p-0 my-4 w-50 bg-white">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        className="btn btn-light" t
                        ype="submit"
                        onClick={handleSearch}>
                        <i className='fa fa-search' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNav

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { filterWarehousesByName } from '../../redux/warehouseSlice';
// import './TopNav.css';

// function TopNav() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const dispatch = useDispatch();

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleSearch = () => {
//         dispatch(filterWarehousesByName(searchTerm));
//     };

//     return (
//         <div className="header">
//             <div className="row top-nav-row">
//                 <div className="brand my-1">
//                     <h1>WareHouse</h1>
//                 </div>
//                 <div className="inp-container p-0 my-4 w-50 bg-white d-flex">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search"
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                     />
//                     <button
//                         className="btn btn-primary ms-2"
//                         type="button"
//                         onClick={handleSearch}
//                     >
//                         <i className='fa fa-search' />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TopNav;
