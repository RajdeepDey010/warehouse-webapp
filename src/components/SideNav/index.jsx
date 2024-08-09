import { useDispatch, useSelector } from 'react-redux'
import './SideNav.css'
import accordionSlice from '../../redux/accordionSlice'
import { filterWarehouses } from '../../redux/warehouseSlice';
import { useEffect, useState } from 'react';

function SideNav() {
  // const tmpData = useSelector(accordionSlice.getInitialState);
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const tmpData = useSelector((state) => state.accordion);
  const dispatch = useDispatch();
  const [minSpace, setMinSpace] = useState(0);
  const [maxSpace, setMaxSpace] = useState(10000);

  useEffect(() => {
    const maxCapacity = Math.max(...warehouses.map(warehouse => warehouse.space_available));
    setMaxSpace(Math.ceil(maxCapacity));
  }, [warehouses])

  const filterData = (chItem, category) => {
    // console.log(chItem);

    if (chItem === 'All') {
      dispatch(filterWarehouses({ city: null, cluster: null }));
    }
    else if (category === 'city') {
      dispatch(filterWarehouses({ city: chItem, cluster: null }));
    } else if (category === 'cluster') {
      dispatch(filterWarehouses({ city: null, cluster: chItem }));
    }
  };

  const handleMinSpaceChange = (e) => {
    const newMinSpace = Number(e.target.value);
    setMinSpace(newMinSpace);
    dispatch(filterWarehouses({ city: null, cluster: null, minSpace: newMinSpace, maxSpace }));
  };

  const handleMaxSpaceChange = (e) => {
    const newMaxSpace = Number(e.target.value);
    setMaxSpace(newMaxSpace);
    dispatch(filterWarehouses({ city: null, cluster: null, minSpace, maxSpace: newMaxSpace }));
  };

  return (
    <div className='side-nav'>
      <div className="title">
        <h3>Filter</h3>
        <hr />
      </div>

      <div className="accordion my-3">
        {
          tmpData.map((accordData, key) => {
            return (
              <div className="accordion-item individual-category">
                <div className="accordion-header">
                  <button className="accordion-button" data-bs-target={"#collapse" + key} data-bs-toggle="collapse">
                    <div className="category-title">
                      <a href="#">{accordData.category}</a>
                    </div>
                  </button>
                </div>
                <div className="accordion-collapse collapse show" id={"collapse" + key}>
                  <div className="accordion-body">
                    <ul>
                      {
                        accordData.item.map((list) =>
                          <li className="sub-items">
                            <a href="#" onClick={() => filterData(list, accordData.category)}>{list}</a>
                            <hr />
                          </li>
                        )
                      }
                      <li className="sub-items">
                        <a href="#" onClick={() => filterData('All', accordData.category)}>All</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="space-filter">
        <label>Min: {minSpace}</label>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="0"
          max={maxSpace}
          step="100"
          value={minSpace}
          onChange={handleMinSpaceChange}
          style={{ width: '100%' }}
        />
      </div>
      <div className="slider-container">
        <label>Max: {maxSpace}</label>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="0"
          max={maxSpace}
          step="100"
          value={maxSpace}
          onChange={handleMaxSpaceChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}

export default SideNav
