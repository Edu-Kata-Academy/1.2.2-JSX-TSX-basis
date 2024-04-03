import React from 'react';
import { cars } from "./constants";

import './index.css'

export function CarsComponent() {
  return (
      <div className="cars">
        <div className="cars__head">Марка</div>
        <div className="cars__head">Цена</div>
        <div className="cars__head">Год</div>
        <div className="cars__head">Цвет</div>
        <div className="cars__head">Заказать</div>
        {cars.map((car) => (
          <React.Fragment key={car.brand}>
            <div>{car.brand} {car.model}</div>
            <div>{car.price} {car.сurrency}</div>
            <div>{car.year}</div>
            <div>
              <select className="cars__select" >
                <option value="default">Выберите цвет</option>
                {car.color.map((color, _) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div>
              <button disabled={!car.isReserve}>Забронировать</button>
            </div>
          </React.Fragment>
        ))}
      </div>
  )
}
