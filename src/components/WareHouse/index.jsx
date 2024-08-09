import { useSelector } from 'react-redux';
import './WareHouse.css';

function WareHouse() {
  //   const tmpData = useSelector(warehouseSlice.getInitialState);
  const Warehouses = useSelector((state) => state.warehouse.filteredWarehouses.length > 0
    ? state.warehouse.filteredWarehouses
    : state.warehouse.warehouses
  );

  if (!Warehouses) {
    return <div>No warehouses available</div>;  // Handle the case where Warehouses is undefined
  }

  return (
    <div className='card-container'>
      {Warehouses.map((warehouse, index) => (
        <div key={index} className='mx-5 p-3 col-lg-3 col-md-6 main-card'>
          <div className="card-img">
            {/* Image can go here */}
          </div>
          <div className="card-data">
            <h4>Name: {warehouse.name}</h4>
            <h4>City: {warehouse.city}</h4>
            <h4>Space Available: {warehouse.space_available}</h4>
          </div>
          <div className="my-3 card-btn-container">
            <div className="my-3 card-btn">
              click
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WareHouse;
