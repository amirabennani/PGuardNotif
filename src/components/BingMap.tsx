import React, { useEffect } from 'react';

const BingMap: React.FC = () => {
  useEffect(() => {
    const map = new window.Microsoft.Maps.Map('#bing-map', {
      credentials: 'PDUYKgTOrbK1Xpa6QYMO~7KSPrsWONb5T-r0vBpi23w~AqWnVYrMAs9c71UpfP8HVWstWogtkzFkSknXOnkEQOwHwUaJ7Q3bELvBmKLB-dk7',
      center: new window.Microsoft.Maps.Location(47.60357, -122.32945),
      zoom: 10
    });
  }, []);

  return (
    <div id="bing-map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default BingMap;
