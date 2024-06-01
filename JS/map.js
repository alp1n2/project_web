    ymaps.ready(init);
    var myMap;
    function init(){     
    const map = new ymaps.Map('map', {
        center: [52.265172, 104.229878],
        zoom: 15,
        // выключение элементов управления.
        controls: []
      });
    }