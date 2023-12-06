import React from 'react'
import ResData from '../assets/dataAssets/ResData'
import { Link} from 'react-router-dom'

const RestorentCardList = () => {

  console.log(ResData);
  return (
    <>
      <div>
        {ResData.map((data) => (
          <div key={data.id}>
            <Link to={`restorentcard/${data.id}`}>
              <h1>{data.name}</h1>
            </Link>

            <h4>{data.rating}</h4>
            <p>{data.cuisines}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RestorentCardList