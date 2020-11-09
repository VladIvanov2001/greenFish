ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center: [53.90, 27.56],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
}
