import React, { useEffect } from 'react';
import './YandexMap.scss';

export const YandexMap = () => {
  useEffect(() => {
    window.ymaps.ready(() => {
      var myMap = new window.ymaps.Map(
        'map',
        {
          center: [56.81493824, 60.58643014],
          zoom: 16,
          controls: ['smallMapDefaultSet'],
        },
        { suppressMapOpenBlock: true }
      );
      myMap.geoObjects.add(
        new window.ymaps.Placemark(
          [56.81386239, 60.58378076],
          {
            iconCaption: 'ITHub College',
          },
          {
            iconColor: '#d46df8',
          }
        )
      );
      myMap.behaviors.disable('scrollZoom');
    });
  });
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
      <div className="map" id={'map'} />
    </div>
  );
};
