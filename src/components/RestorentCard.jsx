import React from 'react'
import {  useParams } from 'react-router-dom'
import RestorentData from '../assets/dataAssets/ResData'
import FoodData from "../assets/dataAssets/FoodData"

const RestorentCard = () => {
    const { id } = useParams();
const SelectedRestorent = RestorentData.find((res)=>res.id === parseInt(id))
const SelectedFoodMenu= FoodData.filter((food)=>food.id === parseInt(id))

if (!SelectedRestorent) {
    return <h1>No Restorent Found</h1>
}

  return (
    <div>
      <div>
        <h1 className="bg-orange-500">{SelectedRestorent.name}</h1>
      </div>

      <div>
        
       {
      SelectedFoodMenu.map((food)=>(
        <div key={food.id}>
          <h1>{food.name}</h1>
        </div>
      ))
       }
      </div>
    </div>
  );
}

export default RestorentCard