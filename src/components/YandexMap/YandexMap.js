import React from 'react';
import './YandexMap.scss';

export const YandexMap = () => {
  return (
    <div className="box-address">
      <div className="address">
        <h1 className="h-address">Мы вас ждём!</h1>
        <div className="card-address">
          <p className="p-address">Адрес:</p>
          <p className="p-address">
            г.Екатеринбург,
            <br /> ул.Чкалова, дом 3, 3 этаж
          </p>
        </div>
      </div>
      <iframe
        title="map"
        className="map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac855dd8516036f82412a7ec183dcfa5867790ca2bb9d522ef0387b9ebcb90fd0&amp;source=constructor"
        frameBorder="0"
      />
    </div>
  );
};
