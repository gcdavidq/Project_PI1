import React, { useEffect ,useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null); // Referencia para el contenedor del mapa
  const mapInstance = useRef(null);

  useEffect(() => {
    // Verificar si el mapa ya ha sido inicializado
    if (mapInstance.current) {
        return; // Si ya existe, no lo inicialices nuevamente
    }  

    const L = window.L;
   
    // Inicializar el mapa cuando los scripts se carguen
    const map_12199ef0b8e62b6155eb542b69633944 = L.map('map_12199ef0b8e62b6155eb542b69633944', {
        center: [-12.10129, -77.02089],
        crs: L.CRS.EPSG3857,
        zoom: 15,
        zoomControl: true,
        preferCanvas: false,
      });

      mapInstance.current = map_12199ef0b8e62b6155eb542b69633944;

    var tile_layer_6b9b86a85db9b8fb7c13246b9ef872b7 = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {"attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors", "detectRetina": false, "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
    );

    tile_layer_6b9b86a85db9b8fb7c13246b9ef872b7.addTo(map_12199ef0b8e62b6155eb542b69633944);

    var marker_4727495682baf8ed84a36b1659eca9be = L.marker(
        [-12.1074306, -76.9995081],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);

    var icon_77684ea073df40909a2052eff93d1db8 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
    );
    marker_4727495682baf8ed84a36b1659eca9be.setIcon(icon_77684ea073df40909a2052eff93d1db8);

    var popup_fa03bf6b1317525d573ce493c3443035 = L.popup({"maxWidth": "100%"});
    
    var html_63115cd036a54b39abdfd585b990f1da = document.createElement("div");
    html_63115cd036a54b39abdfd585b990f1da.id="html_63115cd036a54b39abdfd585b990f1da";
    html_63115cd036a54b39abdfd585b990f1da.style.width="100%";
    html_63115cd036a54b39abdfd585b990f1da.style.height="100%";
    html_63115cd036a54b39abdfd585b990f1da.innerHTML ="X";
    
    popup_fa03bf6b1317525d573ce493c3443035.setContent(html_63115cd036a54b39abdfd585b990f1da);
    
    marker_4727495682baf8ed84a36b1659eca9be.bindPopup(popup_fa03bf6b1317525d573ce493c3443035);

    var marker_79c43e15f8f254edce2d2bd200aaecf9 = L.marker(
        [-12.085112, -76.9864309],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);

    var icon_6ed5d89c856d3f6b672daa7c80eb6b76 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_79c43e15f8f254edce2d2bd200aaecf9.setIcon(icon_6ed5d89c856d3f6b672daa7c80eb6b76);

    var popup_b50282384a911dca45bdde1edcdd0004 = L.popup({"maxWidth": "100%"});

    var html_2c7b149e672e6fac490dc7839886e1a0 = document.createElement("div");
    html_2c7b149e672e6fac490dc7839886e1a0.id="html_2c7b149e672e6fac490dc7839886e1a0";
    html_2c7b149e672e6fac490dc7839886e1a0.style.width="100%";
    html_2c7b149e672e6fac490dc7839886e1a0.style.height="100%";
    html_2c7b149e672e6fac490dc7839886e1a0.innerHTML ="A";

    popup_b50282384a911dca45bdde1edcdd0004.setContent(html_2c7b149e672e6fac490dc7839886e1a0);
    
    marker_79c43e15f8f254edce2d2bd200aaecf9.bindPopup(popup_b50282384a911dca45bdde1edcdd0004);

    var marker_e80e0848dacb33586d2ce983291c8181 = L.marker(
        [-12.0857563, -77.0058911],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_e9fdeddfad7d95db71727431818e0b37 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_e80e0848dacb33586d2ce983291c8181.setIcon(icon_e9fdeddfad7d95db71727431818e0b37);


    var popup_250b63e681194d4494ae854283aba8f9 = L.popup({"maxWidth": "100%"});
    
    var html_9dc19e916d439c7848b0a0baefa27c28 = document.createElement("div");
    html_9dc19e916d439c7848b0a0baefa27c28.id="html_9dc19e916d439c7848b0a0baefa27c28";
    html_9dc19e916d439c7848b0a0baefa27c28.style.width="100%";
    html_9dc19e916d439c7848b0a0baefa27c28.style.height="100%";
    html_9dc19e916d439c7848b0a0baefa27c28.innerHTML ="B";
    
    popup_250b63e681194d4494ae854283aba8f9.setContent(html_9dc19e916d439c7848b0a0baefa27c28);
    
    marker_e80e0848dacb33586d2ce983291c8181.bindPopup(popup_250b63e681194d4494ae854283aba8f9);

    var marker_a9b2ed732d3e9dfac6c85da7b8216379 = L.marker(
        [-12.0847895, -76.9989822],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);

    var icon_027571a15bc6166a9a62786c7ac89559 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_a9b2ed732d3e9dfac6c85da7b8216379.setIcon(icon_027571a15bc6166a9a62786c7ac89559);


    var popup_add7b9f75345cedf512452b2961410b5 = L.popup({"maxWidth": "100%"});
        
    var html_64a572130723c3b8ec78f7af15cd6ce6 = document.createElement("div");
    html_64a572130723c3b8ec78f7af15cd6ce6.id="html_64a572130723c3b8ec78f7af15cd6ce6";
    html_64a572130723c3b8ec78f7af15cd6ce6.style.width="100%";
    html_64a572130723c3b8ec78f7af15cd6ce6.style.height="100%";
    html_64a572130723c3b8ec78f7af15cd6ce6.innerHTML ="C";
    
    popup_add7b9f75345cedf512452b2961410b5.setContent(html_64a572130723c3b8ec78f7af15cd6ce6);

    marker_a9b2ed732d3e9dfac6c85da7b8216379.bindPopup(popup_add7b9f75345cedf512452b2961410b5);

    var marker_c4abe0406bebb40218c3ce8f9281693d = L.marker(
        [-12.0966951, -77.0095667],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_46b7d5ea48392d1ffc149158388c362d = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_c4abe0406bebb40218c3ce8f9281693d.setIcon(icon_46b7d5ea48392d1ffc149158388c362d);


    var popup_c4fd3cfac136c175f5ce42b810a8c200 = L.popup({"maxWidth": "100%"});
        
    var html_8964921bdd5c051277a7394c9eefb2e6 = document.createElement("div");
    html_8964921bdd5c051277a7394c9eefb2e6.id="html_8964921bdd5c051277a7394c9eefb2e6";
    html_8964921bdd5c051277a7394c9eefb2e6.style.width="100%";
    html_8964921bdd5c051277a7394c9eefb2e6.style.height="100%";
    html_8964921bdd5c051277a7394c9eefb2e6.innerHTML ="D";
    
    popup_c4fd3cfac136c175f5ce42b810a8c200.setContent(html_8964921bdd5c051277a7394c9eefb2e6);
    
    marker_c4abe0406bebb40218c3ce8f9281693d.bindPopup(popup_c4fd3cfac136c175f5ce42b810a8c200);
    var marker_b2eb25ddd659e276b2a1f607af107cea = L.marker(
        [-12.0936622, -77.0096659],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_041d3ebb9e7ed4757361bdfc2dd1db89 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_b2eb25ddd659e276b2a1f607af107cea.setIcon(icon_041d3ebb9e7ed4757361bdfc2dd1db89);

    var popup_af58534525d91567ad4479409c144631 = L.popup({"maxWidth": "100%"});
    
    var html_6991bda18f9a8cdd5288bc431484485b = document.createElement("div");
    html_6991bda18f9a8cdd5288bc431484485b.id="html_6991bda18f9a8cdd5288bc431484485b";
    html_6991bda18f9a8cdd5288bc431484485b.style.width="100%";
    html_6991bda18f9a8cdd5288bc431484485b.style.height="100%";
    html_6991bda18f9a8cdd5288bc431484485b.innerHTML ="E";
    popup_af58534525d91567ad4479409c144631.setContent(html_6991bda18f9a8cdd5288bc431484485b);

    marker_b2eb25ddd659e276b2a1f607af107cea.bindPopup(popup_af58534525d91567ad4479409c144631);

    var marker_cf3aafc338221e649b6099c08c34a3a7 = L.marker(
        [-12.1043287, -76.9934789],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_da0b8625d8754fe8a5a569c04e84454f = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_cf3aafc338221e649b6099c08c34a3a7.setIcon(icon_da0b8625d8754fe8a5a569c04e84454f);


    var popup_626b4784f476ee78ba8a6734ac28a411 = L.popup({"maxWidth": "100%"});
    
    var html_4dcf0db83c6aa82596cec61d637b8767 = document.createElement("div");
    html_4dcf0db83c6aa82596cec61d637b8767.id="html_4dcf0db83c6aa82596cec61d637b8767";
    html_4dcf0db83c6aa82596cec61d637b8767.style.width="100%";
    html_4dcf0db83c6aa82596cec61d637b8767.style.height="100%";
    html_4dcf0db83c6aa82596cec61d637b8767.innerHTML ="F";
    popup_626b4784f476ee78ba8a6734ac28a411.setContent(html_4dcf0db83c6aa82596cec61d637b8767);
    
    marker_cf3aafc338221e649b6099c08c34a3a7.bindPopup(popup_626b4784f476ee78ba8a6734ac28a411);

    var marker_321efbccbff9343353844255b4638edf = L.marker(
        [-12.1119763, -77.0062896],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_def98ac93e6d108e0dfeb1c4c83e111e = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_321efbccbff9343353844255b4638edf.setIcon(icon_def98ac93e6d108e0dfeb1c4c83e111e);


    var popup_e512547b1d35c79dc3e9ddc6502608ca = L.popup({"maxWidth": "100%"});
    
    var html_2e9ced1a1d699ddaf97a82c44b196983 = document.createElement("div");
    html_2e9ced1a1d699ddaf97a82c44b196983.id="html_2e9ced1a1d699ddaf97a82c44b196983";
    html_2e9ced1a1d699ddaf97a82c44b196983.style.width="100%";
    html_2e9ced1a1d699ddaf97a82c44b196983.style.height="100%";
    html_2e9ced1a1d699ddaf97a82c44b196983.innerHTML ="G";

    popup_e512547b1d35c79dc3e9ddc6502608ca.setContent(html_2e9ced1a1d699ddaf97a82c44b196983);
    
    marker_321efbccbff9343353844255b4638edf.bindPopup(popup_e512547b1d35c79dc3e9ddc6502608ca);

    var marker_6ce00c098d3d7410351e5f6e48a5255a = L.marker(
        [-12.1076544, -77.0025831],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_261f5771fda14f00b9337a5524735578 = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_6ce00c098d3d7410351e5f6e48a5255a.setIcon(icon_261f5771fda14f00b9337a5524735578);

    var popup_551ba6bb92bb9bf050ddcba0adbb9f47 = L.popup({"maxWidth": "100%"});

    var html_f1df9eb35db0f1d81af06fe2d4ad61f8 = document.createElement("div");
    html_f1df9eb35db0f1d81af06fe2d4ad61f8.id="html_f1df9eb35db0f1d81af06fe2d4ad61f8";
    html_f1df9eb35db0f1d81af06fe2d4ad61f8.style.width="100%";
    html_f1df9eb35db0f1d81af06fe2d4ad61f8.style.height="100%";
    html_f1df9eb35db0f1d81af06fe2d4ad61f8.innerHTML ="H";

    popup_551ba6bb92bb9bf050ddcba0adbb9f47.setContent(html_f1df9eb35db0f1d81af06fe2d4ad61f8);

    marker_6ce00c098d3d7410351e5f6e48a5255a.bindPopup(popup_551ba6bb92bb9bf050ddcba0adbb9f47);

    var marker_c618c1ea6d916f9d03e04cc9ba399311 = L.marker(
        [-12.1104314, -76.99745],
        {}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var icon_cd83c55aab37ab1ff86dade9d55d5fdd = L.AwesomeMarkers.icon(
        {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
    );
    marker_c618c1ea6d916f9d03e04cc9ba399311.setIcon(icon_cd83c55aab37ab1ff86dade9d55d5fdd);


    var popup_462a748e52eeaaccfc8d41d26918e627 = L.popup({"maxWidth": "100%"});
    
    var html_8b7cde10818626c81fcfd52ba5ad5c1e = document.createElement("div");
    html_8b7cde10818626c81fcfd52ba5ad5c1e.id="html_8b7cde10818626c81fcfd52ba5ad5c1e";
    html_8b7cde10818626c81fcfd52ba5ad5c1e.style.width="100%";
    html_8b7cde10818626c81fcfd52ba5ad5c1e.style.height="100%";
    html_8b7cde10818626c81fcfd52ba5ad5c1e.innerHTML ="I";
    popup_462a748e52eeaaccfc8d41d26918e627.setContent(html_8b7cde10818626c81fcfd52ba5ad5c1e);
    
    marker_c618c1ea6d916f9d03e04cc9ba399311.bindPopup(popup_462a748e52eeaaccfc8d41d26918e627);

    var poly_line_b20bfbe69e4b3426158f5efe4562b940 = L.polyline(
        [[-12.1089147, -77.002907], [-12.1080745, -77.0021924]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_905b9547fb4eb87b3976bab6971b47ce = L.polyline(
        [[-12.1089147, -77.002907], [-12.1082148, -77.0037881]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2813fa73d6b192ee88b90d3dbe3b9a11 = L.polyline(
        [[-12.1089147, -77.002907], [-12.1095917, -77.0020574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7bb4099475650c52b8c1cc8372901b5c = L.polyline(
        [[-12.0902991, -76.9991155], [-12.0903745, -76.9996711]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d441841c4155a3f268621a47eb973867 = L.polyline(
        [[-12.0902991, -76.9991155], [-12.0902137, -76.9985217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ed9a0cd9a2284f0c61921a97aac2edc = L.polyline(
        [[-12.10874, -77.0088049], [-12.1086039, -77.0088131]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_da1cc549c49d9f2ab1333553cc756e79 = L.polyline(
        [[-12.10874, -77.0088049], [-12.1087258, -77.0085121]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c757b91213ec30a6ee780dd277743d75 = L.polyline(
        [[-12.1086039, -77.0088131], [-12.10874, -77.0088049]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_59d301ceaecea97914a4de47a081b562 = L.polyline(
        [[-12.0903733, -77.004043], [-12.0906615, -77.0051292]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_deddabb9b344314acfd7611709a9b042 = L.polyline(
        [[-12.0903733, -77.004043], [-12.0909636, -77.0039411]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d014e2859fed2ac2f63ac656e4a8d375 = L.polyline(
        [[-12.0896969, -77.0041312], [-12.0903733, -77.004043]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_560b510463e31f1c4a4a1bc0febec464 = L.polyline(
        [[-12.094079, -77.0088047], [-12.0933405, -77.0084194]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e5359e70599acb30d95bbd219abb0129 = L.polyline(
        [[-12.094079, -77.0088047], [-12.0946611, -77.0091412]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a4f8f608d2bee5e375644e3f43e6b7e9 = L.polyline(
        [[-12.094079, -77.0088047], [-12.0938739, -77.0075724]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7170efe6fabfbb0bf0cd63a517f240e6 = L.polyline(
        [[-12.1090728, -77.0044729], [-12.1082148, -77.0037881]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c28d99303fa4e0c131f27a65e4ec987 = L.polyline(
        [[-12.1090728, -77.0044729], [-12.1092608, -77.0060725]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d7dd09d5e8f30db8c3bfeadcd962f1c2 = L.polyline(
        [[-12.0933405, -77.0084194], [-12.094079, -77.0088047]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a927f7b2e866697a54954a6707b50905 = L.polyline(
        [[-12.0933405, -77.0084194], [-12.092222, -77.0078018]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9ebfb24c3adadd20d35558c96f83c816 = L.polyline(
        [[-12.092222, -77.0078018], [-12.0916778, -77.0075095]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cd770256c5a94c43f6e0570bbf9e1dea = L.polyline(
        [[-12.092222, -77.0078018], [-12.0933405, -77.0084194]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_468338252134faba24e05571385fe486 = L.polyline(
        [[-12.0911121, -77.0072045], [-12.0916778, -77.0075095]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6e675dd98d8d635340d3a07ca93b996a = L.polyline(
        [[-12.0911121, -77.0072045], [-12.091623, -77.0062271]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_901b74543353c7667be2706361c3fd38 = L.polyline(
        [[-12.1082148, -77.0037881], [-12.1073865, -77.0030813]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f0407d8e3a80131bc443da24de5e1140 = L.polyline(
        [[-12.1082148, -77.0037881], [-12.1090728, -77.0044729]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9ac9d74549bb1a23ec07d9f8f837ee16 = L.polyline(
        [[-12.1082148, -77.0037881], [-12.1066784, -77.0039595]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7b6dc3fe819d30bed520548971bbe91d = L.polyline(
        [[-12.1082148, -77.0037881], [-12.1089147, -77.002907]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4d780f9cd3f3ceec4596aa51e6832927 = L.polyline(
        [[-12.1115904, -76.9990818], [-12.1116058, -76.999335]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e8b6c720c5fee0dcb8285dc639904343 = L.polyline(
        [[-12.091623, -77.0062271], [-12.091927, -77.0056455]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f58067b4e7d491120696f67bce3b5f81 = L.polyline(
        [[-12.091623, -77.0062271], [-12.0911121, -77.0072045]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_448044559df992e6a639a6959d6dec04 = L.polyline(
        [[-12.091623, -77.0062271], [-12.0911576, -77.0058561]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5b76e9f7c0f4c12d3aaf2115f3a73706 = L.polyline(
        [[-12.0846299, -76.9937074], [-12.0845476, -76.993118]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_15b59740d07147ae9b9c722d64466c25 = L.polyline(
        [[-12.1066784, -77.0039595], [-12.1070222, -77.00353]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e0af1b925f423ad498f8bc4bc974e6f1 = L.polyline(
        [[-12.1066784, -77.0039595], [-12.1082148, -77.0037881]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_01c3a5922350c13009d3c69322e01657 = L.polyline(
        [[-12.0904546, -77.0002662], [-12.0906765, -77.0018401]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d09e66bb2921408a7dda49a997499493 = L.polyline(
        [[-12.0904546, -77.0002662], [-12.0903745, -76.9996711]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_64db86f9d435163583b67bb047350b33 = L.polyline(
        [[-12.0954257, -77.0090002], [-12.0953911, -77.0089576]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ac0987729cbdc2febbcdeb758c4665e7 = L.polyline(
        [[-12.1073865, -77.0030813], [-12.1077271, -77.0026449]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c173dca7f361719628726e43b023ab67 = L.polyline(
        [[-12.1073865, -77.0030813], [-12.1082148, -77.0037881]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_870062ec393fade8e615133f0099a593 = L.polyline(
        [[-12.0896057, -77.0034418], [-12.0908793, -77.0032643]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7c44692e55d655f15cea19e0eb2dc60d = L.polyline(
        [[-12.0896057, -77.0034418], [-12.0896969, -77.0041312]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_83704055e014183c731ed6e9065f3f49 = L.polyline(
        [[-12.0911576, -77.0058561], [-12.0908618, -77.0054793]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fccd1322bcb65a561817210be98b8320 = L.polyline(
        [[-12.0911576, -77.0058561], [-12.091623, -77.0062271]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_09c0ab80146e7bf5b766daff87a2faad = L.polyline(
        [[-12.0908618, -77.0054793], [-12.0906615, -77.0051292]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_23923dbb3a22991545b88a6e346c8bcb = L.polyline(
        [[-12.0908618, -77.0054793], [-12.0911576, -77.0058561]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_146d03fd4e24905f5f70f1ff8f990749 = L.polyline(
        [[-12.0906615, -77.0051292], [-12.0903733, -77.004043]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9902ab0477320b799d202937addbdeb6 = L.polyline(
        [[-12.0906615, -77.0051292], [-12.0908618, -77.0054793]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6a52c1be16ce2cf0d88fe1ed217ee423 = L.polyline(
        [[-12.1092608, -77.0060725], [-12.1090728, -77.0044729]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c86503a6652a4059e70ce8fd29d9065 = L.polyline(
        [[-12.1092608, -77.0060725], [-12.1093179, -77.0061204]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_21df06a81d2af0cff374bb78152b11a4 = L.polyline(
        [[-12.0859001, -76.997233], [-12.0858487, -76.9968227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_61d5b667b20fc884986b6a7482a57b1e = L.polyline(
        [[-12.0859001, -76.997233], [-12.0859894, -76.997835]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_151779cf4769dda61c6b223035cf620c = L.polyline(
        [[-12.0859894, -76.997835], [-12.0860232, -76.9980782]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_965eae1102d8bbfa0c0c715ce2a8f22f = L.polyline(
        [[-12.0859894, -76.997835], [-12.0859001, -76.997233]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f8b501dc33449a8fcbf05419628e0ef1 = L.polyline(
        [[-12.0953911, -77.0089576], [-12.0946909, -77.0090793]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d4b4079e2739fae42f9cd70d8ad41ee3 = L.polyline(
        [[-12.0946909, -77.0090793], [-12.0946611, -77.0091412]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_68868bd408bf51e605626022225348f5 = L.polyline(
        [[-12.1097503, -76.9965945], [-12.1100208, -76.996563]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ca694060a094eada3c45d9bb721e36e7 = L.polyline(
        [[-12.1097503, -76.9965945], [-12.1089604, -76.9963374]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b66e90422b3a90c7825cece6eca6e416 = L.polyline(
        [[-12.0968414, -77.0051157], [-12.0966748, -77.0057198]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3d920ac27fd613a45ca7a6717969bd15 = L.polyline(
        [[-12.0968414, -77.0051157], [-12.0968728, -77.0030587]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_13819a97454ccfb0e9969294afcdb389 = L.polyline(
        [[-12.095172, -77.0024837], [-12.0951749, -77.0026337]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b959c355804d5ebe69b78635c4dd2f62 = L.polyline(
        [[-12.095172, -77.0024837], [-12.0945173, -77.0025845]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_31c60fa9e3f05e9f4e286600e491e44f = L.polyline(
        [[-12.095116, -77.0017923], [-12.0957112, -77.0017079]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5b5615b5990af02b45e4c2537afc3173 = L.polyline(
        [[-12.095116, -77.0017923], [-12.095172, -77.0024837]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7a3845ee8f8aa230b1f914608a3f2472 = L.polyline(
        [[-12.0963919, -77.0024755], [-12.0963706, -77.002311]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f9e330ef1be3a4da63f89ad9ab971226 = L.polyline(
        [[-12.0963919, -77.0024755], [-12.097939, -77.0022505]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_698e4a80ba21139bc274b25034762e9a = L.polyline(
        [[-12.094826, -77.0000409], [-12.095116, -77.0017923]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5afac33d5b5201ce35bdce67c18d3306 = L.polyline(
        [[-12.0946751, -76.9993919], [-12.094826, -77.0000409]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fc0918ab4feb09226e69d41b80e67aaf = L.polyline(
        [[-12.1076544, -77.0025831], [-12.1077271, -77.0026449]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_082aaf458b9e7c655d9d365bf326c6e6 = L.polyline(
        [[-12.0945669, -76.9990932], [-12.0939388, -76.9991666]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1b9cc76a475055668160f32f084132e6 = L.polyline(
        [[-12.0945669, -76.9990932], [-12.0946751, -76.9993919]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5beedbc2d8c63c242b62639b3b5716ca = L.polyline(
        [[-12.1077271, -77.0026449], [-12.1080745, -77.0021924]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d685d6bb36348639dc8777a5660b94a5 = L.polyline(
        [[-12.1077271, -77.0026449], [-12.1076544, -77.0025831]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0e02d0d552bc087b86b111bd451a3f07 = L.polyline(
        [[-12.0962705, -77.0016285], [-12.0968284, -77.0015494]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c6434329bf090a65db8e4ca4bd604426 = L.polyline(
        [[-12.0962705, -77.0016285], [-12.0957112, -77.0017079]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ab49cabb5e91d93cda0cd59aff9092a8 = L.polyline(
        [[-12.0962705, -77.0016285], [-12.0963706, -77.002311]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4dde71a0828152d1df0503eb0c83b721 = L.polyline(
        [[-12.0953455, -77.0064447], [-12.0954672, -77.0070147]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5102e24f6637304f1980914fff3523fc = L.polyline(
        [[-12.0963706, -77.002311], [-12.0963919, -77.0024755]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d47ed1ff94c8ad333b8c6271c95d7888 = L.polyline(
        [[-12.0963706, -77.002311], [-12.0962705, -77.0016285]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ebcac1451f77d2337063e8816bb160de = L.polyline(
        [[-12.0963706, -77.002311], [-12.095172, -77.0024837]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_de7ee0e29098bf0da814ff6ae5dab51d = L.polyline(
        [[-12.0957112, -77.0017079], [-12.0962705, -77.0016285]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_66e29611298e99e2d5045103b5df5feb = L.polyline(
        [[-12.0957112, -77.0017079], [-12.095116, -77.0017923]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d8199976c1d57981b3376ff05652ff11 = L.polyline(
        [[-12.0968284, -77.0015494], [-12.0973251, -77.0014789]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_26b1d2451470965226a5ae106b0461d0 = L.polyline(
        [[-12.0968284, -77.0015494], [-12.0962705, -77.0016285]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_eefa7d145c4773fb56338192c508f855 = L.polyline(
        [[-12.0973251, -77.0014789], [-12.0978677, -77.0014019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ba9a16726f9451354519127cd6ff2e06 = L.polyline(
        [[-12.0973251, -77.0014789], [-12.0968284, -77.0015494]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_dbdc6af95c4ed0279bc626528c761c63 = L.polyline(
        [[-12.0978677, -77.0014019], [-12.0986608, -77.0012894]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ba4e008f88c9fbddc5ea729f2e3ec6c3 = L.polyline(
        [[-12.0978677, -77.0014019], [-12.0973251, -77.0014789]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_35cdaf2337f2a671bbb529338454230d = L.polyline(
        [[-12.0978677, -77.0014019], [-12.0984517, -77.0002287]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_826fc34fbb618610c254dc543489483a = L.polyline(
        [[-12.0978677, -77.0014019], [-12.0979134, -77.0020706]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4f0f761ce67c57d1493a0184e1d32b40 = L.polyline(
        [[-12.1086949, -76.9994137], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8eb94c1c2605902bccb93c93b7884b0d = L.polyline(
        [[-12.1086949, -76.9994137], [-12.1081908, -76.9994421]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5aefc0136e229cb9b6749b42e7a91682 = L.polyline(
        [[-12.1000544, -77.0010917], [-12.100649, -77.0010073]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_35e8419a87159ecfd9ca53a023bdb5b6 = L.polyline(
        [[-12.100649, -77.0010073], [-12.1007774, -77.0016519]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a45b7b8057d72a2cb7f853a04e197455 = L.polyline(
        [[-12.0996463, -77.002017], [-12.099623, -77.0018216]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_813e558dceed72c4bec394435af1d655 = L.polyline(
        [[-12.0996463, -77.002017], [-12.0997109, -77.0026497]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b08e6eccbf44f2838d81b0e97749048f = L.polyline(
        [[-12.0996463, -77.002017], [-12.1008068, -77.0018493]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0bbe08e38d7163325c9b2c6cbd3d2c0b = L.polyline(
        [[-12.0985828, -77.0000517], [-12.0984517, -77.0002287]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1e16af979ac3518f44932574f9af629d = L.polyline(
        [[-12.0985828, -77.0000517], [-12.0993015, -76.9991183]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e26de9a0a389d223d056ec575be20c8e = L.polyline(
        [[-12.0979134, -77.0020706], [-12.097939, -77.0022505]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ec0aaf23a2ad0cd0322b023d7ee5c5c = L.polyline(
        [[-12.0979134, -77.0020706], [-12.0963706, -77.002311]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bbd1b25768d9c42c94635ca591a3a509 = L.polyline(
        [[-12.0979134, -77.0020706], [-12.0978677, -77.0014019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9acca60fd67851d09bfcc858d76fe7bb = L.polyline(
        [[-12.1074306, -76.9995081], [-12.1081908, -76.9994421]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d588fde074d983f9dd23ed3df0425531 = L.polyline(
        [[-12.1074306, -76.9995081], [-12.107035, -76.9995407]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c7b1c27479da57a27585234e0b19190e = L.polyline(
        [[-12.0984517, -77.0002287], [-12.0985828, -77.0000517]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_079d336698249a54fb60bd345124cda3 = L.polyline(
        [[-12.0984517, -77.0002287], [-12.0978677, -77.0014019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_851ed193414184d30003f3f89cff285c = L.polyline(
        [[-12.0993015, -76.9991183], [-12.100148, -76.9986414]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_68e1c626729f102b1958c2bbc69a9989 = L.polyline(
        [[-12.0993015, -76.9991183], [-12.0985828, -77.0000517]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3220fb3f3311a6a9f144eb3facef88ec = L.polyline(
        [[-12.1080745, -77.0021924], [-12.1089147, -77.002907]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f239329fad37dccceba8ce8b6d4e95a5 = L.polyline(
        [[-12.1080745, -77.0021924], [-12.1080064, -77.0021387]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fe8c69d419a1429430204bbf82865d91 = L.polyline(
        [[-12.1080745, -77.0021924], [-12.1087051, -77.0013281]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ce07f04a4ae4d1bb9774fbdc99afa1ce = L.polyline(
        [[-12.0975663, -76.9951408], [-12.097543, -76.9950061]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ca3a936e19bbea2e60b372ad3828d73d = L.polyline(
        [[-12.0975663, -76.9951408], [-12.0988609, -76.9949562]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1a484e55d8ea9d87ddbaed7006edae85 = L.polyline(
        [[-12.1117273, -77.0023525], [-12.1117861, -77.0034511]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9c3e3534d31ef8c14577e1c75b819ce8 = L.polyline(
        [[-12.1095626, -77.0006189], [-12.1109107, -77.0004309]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4c1baf998f96505e2e8c093c03b98963 = L.polyline(
        [[-12.099623, -77.0018216], [-12.0996463, -77.002017]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_23ee53ae88600d5f7736f8c966e53e28 = L.polyline(
        [[-12.099623, -77.0018216], [-12.0979134, -77.0020706]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e02fbbb78c440c6e906d78f7309a319a = L.polyline(
        [[-12.099623, -77.0018216], [-12.0995387, -77.0011623]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_82cf9bfeb8a4e00617e5484a69f47a62 = L.polyline(
        [[-12.1093657, -77.0006423], [-12.1093613, -77.0003974]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_82455e1fe518a010ee96ecc89e2c32dd = L.polyline(
        [[-12.1093657, -77.0006423], [-12.1095626, -77.0006189]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_15030a0a58afec820733232bf687cc28 = L.polyline(
        [[-12.1117861, -77.0034511], [-12.1117928, -77.0035463]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0869c10268b08c3fdabfae9d7b07cc37 = L.polyline(
        [[-12.1116851, -77.0006742], [-12.1116074, -77.0011789]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_10cbb7fabf7189cb845fccd3cb3b4595 = L.polyline(
        [[-12.1119146, -77.0053612], [-12.1119763, -77.0062896]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2c12bb20e95e21f533e4fd5c36933001 = L.polyline(
        [[-12.1109107, -77.0004309], [-12.1116074, -77.0011789]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d3b64d35f9495cdc0ebb368d00ec9734 = L.polyline(
        [[-12.1109107, -77.0004309], [-12.1116668, -77.0003276]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f3c33c4bfa518cd1d4b291d497bd0669 = L.polyline(
        [[-12.0858337, -76.9966999], [-12.0858487, -76.9968227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f0dfd0410ad05164bd8a0e53c80dfb3a = L.polyline(
        [[-12.0858337, -76.9966999], [-12.0850554, -76.9968174]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3841367424f162a768cce7c99ea959da = L.polyline(
        [[-12.0863931, -76.9928313], [-12.0864193, -76.992999]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_530a7f2b317a639a2814221c964f0671 = L.polyline(
        [[-12.1028016, -76.998129], [-12.1028104, -76.9967231]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7ccf72f8d3bbbdd6a2daec54e8549e64 = L.polyline(
        [[-12.1028016, -76.998129], [-12.1022283, -76.9982372]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0f687d3342d05762107719b32f657ffd = L.polyline(
        [[-12.1022283, -76.9982372], [-12.1028016, -76.998129]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a2d64c970eb6008f7509738af5206ade = L.polyline(
        [[-12.1022283, -76.9982372], [-12.1017759, -76.9983216]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_175a422b569e604f7568b0328f837b75 = L.polyline(
        [[-12.0866277, -76.9946397], [-12.0865083, -76.9958596]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_eaaf5b7b04802b29ee63c7636a8a2377 = L.polyline(
        [[-12.086471, -76.9934154], [-12.0866277, -76.9946397]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_547dc8dd87bc82d0d03b3ed436d2d451 = L.polyline(
        [[-12.0899893, -76.9969301], [-12.0900762, -76.9975062]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3a22c285bcc470309479b975e6248235 = L.polyline(
        [[-12.0899893, -76.9969301], [-12.0922111, -76.9966284]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_86e9fc0babe7958596a7328ebd5edc9b = L.polyline(
        [[-12.0899893, -76.9969301], [-12.0898827, -76.9962479]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_73a3fca9d16d5adad1847b79489f5d72 = L.polyline(
        [[-12.0889282, -77.003369], [-12.0882818, -77.0034626]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_727c3356c5426d8568e75d3d4943bfa1 = L.polyline(
        [[-12.1020063, -77.001469], [-12.1020087, -77.0016473]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_40fd3bf5d764b5a6a3c91505e603acb1 = L.polyline(
        [[-12.1020063, -77.001469], [-12.101101, -77.0016026]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1cd93bde4eec862161efcd772a5b5b39 = L.polyline(
        [[-12.1017759, -76.9983216], [-12.1022283, -76.9982372]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_70a8ed5d95842e84cc9cf702f0d1310e = L.polyline(
        [[-12.1017759, -76.9983216], [-12.101317, -76.9984034]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_38b0bd759137238e781164de0a30112d = L.polyline(
        [[-12.101317, -76.9984034], [-12.1017759, -76.9983216]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_09dc89850ff01c562e34ea32601fdd30 = L.polyline(
        [[-12.101317, -76.9984034], [-12.1007579, -76.998521]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c9164e73d7a41d4a4fc334ffcb279cbd = L.polyline(
        [[-12.1087258, -77.0085121], [-12.1092162, -77.0076552]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ced27b3cab4a868b03fb06053823bb01 = L.polyline(
        [[-12.1092162, -77.0076552], [-12.1092841, -77.0076407]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a0f57e75be7ca22e98a3df2f7ae51e0f = L.polyline(
        [[-12.11168, -77.0016435], [-12.1117273, -77.0023525]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7cc229a4768f4241e43c1480ba34094 = L.polyline(
        [[-12.1092623, -77.0075297], [-12.109192, -77.0065068]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_044ba5f152734f2e27fc0f44809dce3f = L.polyline(
        [[-12.1117928, -77.0035463], [-12.1119146, -77.0053612]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5fb5956f237f9ebf4dd25f97a2adb558 = L.polyline(
        [[-12.0906765, -77.0018401], [-12.090756, -77.0024189]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c0ef22d3e3b8ceb11a0c79943042a92 = L.polyline(
        [[-12.0906765, -77.0018401], [-12.0904546, -77.0002662]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5b0aca57655d0d76e99d138043908e59 = L.polyline(
        [[-12.097543, -76.9950061], [-12.09713, -76.9950614]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7e784a251d02ca0ec06c7087d2d68b16 = L.polyline(
        [[-12.097543, -76.9950061], [-12.0975663, -76.9951408]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d4a968a82a465be6bca09e5927b85908 = L.polyline(
        [[-12.1086464, -77.0007456], [-12.1086129, -77.0005013]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7e103b29e3108071bd147ee9850af95c = L.polyline(
        [[-12.1086464, -77.0007456], [-12.1088237, -77.0007202]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_660b3c16e2f358c4f8f946bf0e8a030c = L.polyline(
        [[-12.0935534, -77.0060876], [-12.0938739, -77.0075724]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_54c6347fc4ff750c9fb18522e0d0ba62 = L.polyline(
        [[-12.0935534, -77.0060876], [-12.0941482, -77.0060092]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cf3844b6351b37c6c4d0252d9eea1ea1 = L.polyline(
        [[-12.0935534, -77.0060876], [-12.0930249, -77.0060954]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4defc14d175fced4d2de4e55c405f65f = L.polyline(
        [[-12.0926884, -77.0091311], [-12.0912361, -77.0083344]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d6059570dc75494fe6595892edf43dd5 = L.polyline(
        [[-12.0952227, -77.0058577], [-12.0953455, -77.0064447]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9ac484e30605ccfcac454e4ca0206f8f = L.polyline(
        [[-12.0952227, -77.0058577], [-12.0946094, -77.0059348]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_100b907914e6549385275363558f3d66 = L.polyline(
        [[-12.0952227, -77.0058577], [-12.0966748, -77.0057198]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c0a0247f64d434e2a7050dceba1f87ee = L.polyline(
        [[-12.0938739, -77.0075724], [-12.0935534, -77.0060876]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_65222c53df324388e73e09a6491ee69b = L.polyline(
        [[-12.0938739, -77.0075724], [-12.094079, -77.0088047]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4e8672538ee6047e0d06f8d66f7d4773 = L.polyline(
        [[-12.1089604, -76.9963374], [-12.1097503, -76.9965945]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5ff0d03e8f5c0ec385f9cad12887545c = L.polyline(
        [[-12.1089604, -76.9963374], [-12.1091996, -76.9961227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_05824c39aec4a61b23d55f6ec49de7bc = L.polyline(
        [[-12.0870721, -77.005702], [-12.0870574, -77.0055946]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c9328943978c4b26854ab4222791b165 = L.polyline(
        [[-12.1100208, -76.996563], [-12.1097503, -76.9965945]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_60351ed9569ff9ec47d2a73ce716478e = L.polyline(
        [[-12.1100208, -76.996563], [-12.1103692, -76.9965373]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_10b2a094bee616f10f53d80d6aaa3c21 = L.polyline(
        [[-12.0966748, -77.0057198], [-12.0968414, -77.0051157]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_61704844870c5e807914d7648b4ac0df = L.polyline(
        [[-12.0966748, -77.0057198], [-12.0952227, -77.0058577]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c5bbf75d0af631ca32665b3dfbb3667 = L.polyline(
        [[-12.0966748, -77.0057198], [-12.0978217, -77.0060221]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3d35ff2415c8973162f9507a2378736f = L.polyline(
        [[-12.0895838, -77.0032727], [-12.0896057, -77.0034418]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_020e981b4e9f28386a6c6b87a1bc96c6 = L.polyline(
        [[-12.0895838, -77.0032727], [-12.0889282, -77.003369]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d1f003311a9b88f220baf7d05970d71f = L.polyline(
        [[-12.0857402, -77.0057842], [-12.0857563, -77.0058911]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_83c53e8a5e93f75e797fb403392139c0 = L.polyline(
        [[-12.1100558, -76.9953542], [-12.110489, -76.9949627]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_122f96f76f7d662ea964a4eea4ed0d65 = L.polyline(
        [[-12.1100558, -76.9953542], [-12.1091996, -76.9961227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f7680c7415353538e16576ae8a2fceed = L.polyline(
        [[-12.111254, -76.995827], [-12.1112697, -76.9960836]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_40e0dd8239a3566f55bb77ffc98eafb5 = L.polyline(
        [[-12.0869329, -77.0046708], [-12.0870574, -77.0055946]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0f3cbe1aaaa9a728df94027a78bc34dd = L.polyline(
        [[-12.0869329, -77.0046708], [-12.0868256, -77.0039076]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bbdf65ac1386b0020a8de251ae2e87d6 = L.polyline(
        [[-12.0870574, -77.0055946], [-12.0870721, -77.005702]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0da5d6bfd23462713967d399b75d2b24 = L.polyline(
        [[-12.0870574, -77.0055946], [-12.0857402, -77.0057842]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_21dbe6ab7a8ebc93d5248bc2f4daffae = L.polyline(
        [[-12.0870574, -77.0055946], [-12.0869329, -77.0046708]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cf255f77ffab05777de5c88331a66da6 = L.polyline(
        [[-12.1093179, -77.0061204], [-12.1092608, -77.0060725]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_54265e36efec83a0024382279b143bee = L.polyline(
        [[-12.0978217, -77.0060221], [-12.0966748, -77.0057198]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7953c31f2fb925d06cd1869d9c3b160e = L.polyline(
        [[-12.0978217, -77.0060221], [-12.1002338, -77.0062905]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d55b694b5e981f4576cbda536b085538 = L.polyline(
        [[-12.0978217, -77.0060221], [-12.0980089, -77.0054184]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8082e4c59fc8a2476735d23b6c3da3b4 = L.polyline(
        [[-12.0978217, -77.0060221], [-12.0976463, -77.0065916]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2ef06a809102aa07027399b8cebcd079 = L.polyline(
        [[-12.1085853, -77.0081412], [-12.1086039, -77.0088131]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_095a69109286cddb36be5910c3fe4d88 = L.polyline(
        [[-12.0881427, -77.0054383], [-12.0875206, -77.0055279]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_498e44436a87ebdffe6f4668a04a1be1 = L.polyline(
        [[-12.0857563, -77.0058911], [-12.0857402, -77.0057842]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f3566e9ed3c16133e011cff137bcbfe1 = L.polyline(
        [[-12.0857563, -77.0058911], [-12.0870721, -77.005702]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a723a57e5f171fcd5b34237b4b04390f = L.polyline(
        [[-12.1111916, -76.9948089], [-12.111254, -76.995827]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4ad05bd654b0843d72223882914f8c8f = L.polyline(
        [[-12.1057999, -77.000917], [-12.1058128, -77.00112]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6b310c96b7a0e2c284dc95026d2ba16e = L.polyline(
        [[-12.1057999, -77.000917], [-12.1052135, -77.0010026]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8ac67798a299ec642c4bcbaecf565d6f = L.polyline(
        [[-12.1070222, -77.00353], [-12.1073865, -77.0030813]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3e8723453d0f46813ded03b226bd3fad = L.polyline(
        [[-12.0849062, -77.0022461], [-12.0843463, -77.0023247]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d2d4eb2ba6c3634af04e315292b9f8ff = L.polyline(
        [[-12.0849062, -77.0022461], [-12.0850212, -77.00223]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b5b53ca819490541a8605874a976aaf2 = L.polyline(
        [[-12.097939, -77.0022505], [-12.0979134, -77.0020706]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e6463b0cc94441c89c1f263e7c71e3b9 = L.polyline(
        [[-12.097939, -77.0022505], [-12.0980258, -77.002893]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e631f4652a4b3f33f977884be70f5cca = L.polyline(
        [[-12.097939, -77.0022505], [-12.0996463, -77.002017]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c29f830ee4e887c5b98c5769130314a = L.polyline(
        [[-12.0853623, -77.0021821], [-12.0850212, -77.00223]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d863e3438cde0379d7da191744ffe96e = L.polyline(
        [[-12.0853623, -77.0021821], [-12.0857983, -77.0021209]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c3a3332acbe36ee2c349f96669ee2e0a = L.polyline(
        [[-12.1067863, -76.9974607], [-12.1068219, -76.9980456]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7e3b53ad2bd5b8d07c2dd1283594e306 = L.polyline(
        [[-12.1069678, -76.998027], [-12.1068619, -76.9966718]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ab22ac93ffbcb059f9ff8891e1c72364 = L.polyline(
        [[-12.1069678, -76.998027], [-12.1068219, -76.9980456]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_72c59c837c66e0ec347d815d275f3b80 = L.polyline(
        [[-12.1068219, -76.9980456], [-12.1068408, -76.9986703]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b120084e8162515a894343510d6c4af9 = L.polyline(
        [[-12.1068219, -76.9980456], [-12.1069678, -76.998027]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0d180baaf21affda93d3eab10c2ce8b3 = L.polyline(
        [[-12.0980258, -77.002893], [-12.0974614, -77.0029724]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_467daf39769cfe2b2a4464f1ac482a8f = L.polyline(
        [[-12.0980258, -77.002893], [-12.0986233, -77.0028091]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ca81fa95f5d08ccabf1bffe2dfcd194 = L.polyline(
        [[-12.0980258, -77.002893], [-12.097939, -77.0022505]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_020a4379922fec655ce31e68377f94c7 = L.polyline(
        [[-12.0980258, -77.002893], [-12.0981497, -77.00416]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c3065c63075894d0f543a0f1a7d6742c = L.polyline(
        [[-12.1068408, -76.9986703], [-12.1069975, -76.9986622]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6fa75094f72fb9590ab16a39f4a8f90c = L.polyline(
        [[-12.1068408, -76.9986703], [-12.1068857, -76.9995527]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4fa8d317c298956f5804efe6d7f21dfb = L.polyline(
        [[-12.1068925, -76.9996829], [-12.1069518, -77.0007489]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9b75344c356f4fba9b7ba76fb8369b76 = L.polyline(
        [[-12.0981497, -77.00416], [-12.0980258, -77.002893]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_613c93077fcdc26400bb77649f005157 = L.polyline(
        [[-12.0981497, -77.00416], [-12.0980089, -77.0054184]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c611c607da024b2371099cbb365b4956 = L.polyline(
        [[-12.107035, -76.9995407], [-12.1074306, -76.9995081]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_41cc56ab88bc6e4d7f1e399c52e4611c = L.polyline(
        [[-12.107035, -76.9995407], [-12.1069975, -76.9986622]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_436bf51ecabdd3a143c4e0808c77dcb1 = L.polyline(
        [[-12.107035, -76.9995407], [-12.1068857, -76.9995527]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_465e4117b8a2768d2b36c1701ec2c2db = L.polyline(
        [[-12.1069975, -76.9986622], [-12.1069678, -76.998027]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4f0af1c2df9301b843e0beea520df800 = L.polyline(
        [[-12.1069975, -76.9986622], [-12.1068408, -76.9986703]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_14c497da43fa5dfdca25d660f5b20b5b = L.polyline(
        [[-12.1067957, -76.9958628], [-12.1068912, -76.9951164]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d26a50f6218e330dec18c402ea26c14f = L.polyline(
        [[-12.0980089, -77.0054184], [-12.0981497, -77.00416]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_dcea3f385e1aae9ca439e05fa1198b6b = L.polyline(
        [[-12.0980089, -77.0054184], [-12.0978217, -77.0060221]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c2dc37401e641d2093c58c115266f225 = L.polyline(
        [[-12.0976463, -77.0065916], [-12.0974683, -77.0071628]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_29f5020d3442e77a04ac9153786fa2a2 = L.polyline(
        [[-12.0976463, -77.0065916], [-12.1001525, -77.0069141]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3b4323d4abff3d815599e2eb42ba92c0 = L.polyline(
        [[-12.0976463, -77.0065916], [-12.0978217, -77.0060221]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ab9f3047d6658c6f89fdd57e4a4a6df8 = L.polyline(
        [[-12.0974683, -77.0071628], [-12.0976463, -77.0065916]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_97f8a37b0f7d26993261eb1767f7a3d3 = L.polyline(
        [[-12.0974683, -77.0071628], [-12.0968986, -77.0089528]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_468ba98b728ba87c7e57fc7c7434888f = L.polyline(
        [[-12.0968986, -77.0089528], [-12.0974683, -77.0071628]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6de00602a23bfd4ee7b08685ff372fb9 = L.polyline(
        [[-12.0968986, -77.0089528], [-12.0966951, -77.0095667]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6efa203e948e8cc42febeda1355765d1 = L.polyline(
        [[-12.0968986, -77.0089528], [-12.0974611, -77.0090828]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_58dbad9f7937565c1e5e573cd69a8081 = L.polyline(
        [[-12.1068857, -76.9995527], [-12.1068925, -76.9996829]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c8215b8dc74a5cb09d9665d5b8058e0d = L.polyline(
        [[-12.1068857, -76.9995527], [-12.107035, -76.9995407]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d7013a2418f6cb36cdf7e76a5d793ac7 = L.polyline(
        [[-12.0966951, -77.0095667], [-12.0968986, -77.0089528]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf4e2c2eefdfda37d1f98dcb49cfea4d = L.polyline(
        [[-12.0966951, -77.0095667], [-12.0954257, -77.0090002]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0660c95354dc1f4f54bcc2bbe288ca28 = L.polyline(
        [[-12.0966951, -77.0095667], [-12.0965937, -77.009776]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_38573498cede77ab8fbf74b19b19864c = L.polyline(
        [[-12.0856225, -76.9878346], [-12.0858984, -76.989323]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a7d9094de3dcdda09e22e29c1c90d982 = L.polyline(
        [[-12.101383, -77.0044625], [-12.1019975, -77.0044666]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_af6b6665173abf1a3059609946d39efa = L.polyline(
        [[-12.0870186, -76.9979996], [-12.0874102, -76.9999337]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_167a2a9d73da9d7d8e71846568a6aa26 = L.polyline(
        [[-12.0860346, -76.9981601], [-12.0860232, -76.9980782]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_88cf1ef56e999cce4aa4de53a7b36e4e = L.polyline(
        [[-12.0860346, -76.9981601], [-12.0861245, -76.9988072]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1b02c58aec4fc96dccc4ec2b1d634236 = L.polyline(
        [[-12.0860346, -76.9981601], [-12.0870186, -76.9979996]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_418ac67b1e2c68b87351280023b8ef9a = L.polyline(
        [[-12.0846364, -76.986638], [-12.0848165, -76.9870982]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ee7979a56f5d02fef9fb9a374db852a9 = L.polyline(
        [[-12.0846364, -76.986638], [-12.085112, -76.9864309]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4ed37bcd22f63c901d0cfe04b981160b = L.polyline(
        [[-12.0843463, -77.0023247], [-12.0839218, -77.0023843]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fbf8c019bba56490b4965f9eff101969 = L.polyline(
        [[-12.0843463, -77.0023247], [-12.0849062, -77.0022461]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cf42942d0f4d7a3f948cbf67a7dd3b71 = L.polyline(
        [[-12.0936622, -77.0096659], [-12.0926884, -77.0091311]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e76548804ef8380185000f9ca7dd8388 = L.polyline(
        [[-12.0986233, -77.0028091], [-12.0980258, -77.002893]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0dfd34b468be0b158ba93ade66a14724 = L.polyline(
        [[-12.0986233, -77.0028091], [-12.0992228, -77.0027217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cb04965902f94a2310fb18ad191719db = L.polyline(
        [[-12.0974614, -77.0029724], [-12.0968728, -77.0030587]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ead9b9b0ca8e967143061ae0ce125c9 = L.polyline(
        [[-12.0974614, -77.0029724], [-12.0980258, -77.002893]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1f64ec2da423f4759e4a0a53c6c1d6df = L.polyline(
        [[-12.0912361, -77.0083344], [-12.0916778, -77.0075095]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0d92fd4c1afccea54231dc773c74afc8 = L.polyline(
        [[-12.0903745, -76.9996711], [-12.0904546, -77.0002662]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b87286e9343ffa73d6f48b1f59f741f2 = L.polyline(
        [[-12.0903745, -76.9996711], [-12.0902991, -76.9991155]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_99a3605439c5d50b09811f641a6ed86a = L.polyline(
        [[-12.1086129, -77.0005013], [-12.1085202, -77.0005154]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_83611f1bec4d6a2e24dfa1be4c377cf8 = L.polyline(
        [[-12.086152, -76.9910328], [-12.0863747, -76.9927348]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d8e595988ee836a96a1fa47a54e1ec40 = L.polyline(
        [[-12.086152, -76.9910328], [-12.0843042, -76.9913127]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f35a180c3921f1060b4a59c76d98deea = L.polyline(
        [[-12.0863747, -76.9927348], [-12.0863931, -76.9928313]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a2b9f03ff42e51fc875133284386bb6b = L.polyline(
        [[-12.084217, -76.9907105], [-12.0841794, -76.9901443]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_647b2725e354e2c6adef784276997d2e = L.polyline(
        [[-12.084217, -76.9907105], [-12.0860832, -76.9904258]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3d46ee7d8e89be5ef6142c6a2fac7797 = L.polyline(
        [[-12.0860832, -76.9904258], [-12.086152, -76.9910328]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bd2e0a62e1ed136dd3409a60bc7dd2d4 = L.polyline(
        [[-12.0860832, -76.9904258], [-12.084217, -76.9907105]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8545bed206a4467031e35b87959e8a54 = L.polyline(
        [[-12.0843042, -76.9913127], [-12.084217, -76.9907105]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0aad61b325ef837db22eead54074acc9 = L.polyline(
        [[-12.0843042, -76.9913127], [-12.086152, -76.9910328]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ec9e5feb4ba4b4f7ab8c9561cb721c3c = L.polyline(
        [[-12.0859966, -76.9898981], [-12.0860832, -76.9904258]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_43992de8993653b4701f2fe8989b415d = L.polyline(
        [[-12.0859966, -76.9898981], [-12.0841794, -76.9901443]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_df19fc7fd9fcbc2d6931190e9f9dd987 = L.polyline(
        [[-12.0997109, -77.0026497], [-12.0992228, -77.0027217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_705ba1ca8963824d2335806848510920 = L.polyline(
        [[-12.0997109, -77.0026497], [-12.0996463, -77.002017]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e0a7d45f3de7422c8b4f352679f06f8c = L.polyline(
        [[-12.1012826, -77.0105078], [-12.1015263, -77.0105628]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ddea9d58638b2eece3e9ffb038a89f15 = L.polyline(
        [[-12.1088973, -77.0009506], [-12.1095917, -77.0020574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1380bb920dbc798f612b14ebd5c90899 = L.polyline(
        [[-12.1088973, -77.0009506], [-12.1088237, -77.0007202]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fb06ee6b5301bacdd12c0e64cea528cb = L.polyline(
        [[-12.1088237, -77.0007202], [-12.1093657, -77.0006423]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_88c4b19ca8ffe753cbeee9db554ba0fc = L.polyline(
        [[-12.0864193, -76.992999], [-12.086471, -76.9934154]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6602888decb38d61577c1c9b73817149 = L.polyline(
        [[-12.0834988, -76.9993555], [-12.084136, -76.9992288]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aeb1caa5d3cae980500184a6ae02201c = L.polyline(
        [[-12.0929233, -76.9993085], [-12.0935541, -76.9992089]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_91fb705002c6d7a3704d35b3c5969db2 = L.polyline(
        [[-12.0929233, -76.9993085], [-12.0927108, -76.9987619]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f0a2a6fab941b05092f288b4e2778136 = L.polyline(
        [[-12.0929233, -76.9993085], [-12.0903745, -76.9996711]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fd606e1714318aee1d6131bba9dc13e3 = L.polyline(
        [[-12.107611, -77.0080043], [-12.1084649, -77.0079471]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7bc5f460bde0a779b7a1cccf209ec9bf = L.polyline(
        [[-12.107611, -77.0080043], [-12.1074083, -77.0078322]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_82a77a66b0c596b3ea226ca04c9e3051 = L.polyline(
        [[-12.107611, -77.0080043], [-12.107465, -77.0081537]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_71d8aba6b3e70ee3f33716f182cb3e72 = L.polyline(
        [[-12.0849518, -76.9989601], [-12.0847895, -76.9989822]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1218010e03946fe4aad69a9d6774d8ce = L.polyline(
        [[-12.0849518, -76.9989601], [-12.0846817, -76.9970042]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_54c5ec8d4e3fc0949bcea0bea35104e1 = L.polyline(
        [[-12.0849518, -76.9989601], [-12.0861245, -76.9988072]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f2805f968b853815b588252770ef62e1 = L.polyline(
        [[-12.0934434, -77.0027328], [-12.0924897, -77.0028672]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7325851d32e7c7611cfa90c27e60f5b = L.polyline(
        [[-12.1001525, -77.0069141], [-12.1002338, -77.0062905]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_09ffec584a0fcd89f21f6ec3c00f84a2 = L.polyline(
        [[-12.1001525, -77.0069141], [-12.0976463, -77.0065916]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bac07e75112d0191d7542ba65b8110f1 = L.polyline(
        [[-12.1031829, -77.0044773], [-12.1025744, -77.0044773]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fc07fb5f54b46158478da5cc25a8536d = L.polyline(
        [[-12.1031829, -77.0044773], [-12.1040169, -77.0044934]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2ec6d9d87451283e3f26ee8bdc775512 = L.polyline(
        [[-12.1057881, -77.0059255], [-12.1069279, -77.0069932]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b16026b38cc17ef7696a20d68a352d37 = L.polyline(
        [[-12.100044, -77.0074878], [-12.1001525, -77.0069141]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ca39b310f13782ce14625744cc42496a = L.polyline(
        [[-12.1006062, -76.9985525], [-12.1007579, -76.998521]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_86f0e0555865099c452925d164396b17 = L.polyline(
        [[-12.1006062, -76.9985525], [-12.100148, -76.9986414]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_69b591c564a8ef834decef312da5be43 = L.polyline(
        [[-12.1011324, -77.001791], [-12.101101, -77.0016026]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5e1b1f188861c795473337ec71c0fd5a = L.polyline(
        [[-12.1011324, -77.001791], [-12.1020087, -77.0016473]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8fe5183fb0ad46b14eb802d4717a77be = L.polyline(
        [[-12.100864, -77.0062909], [-12.1002338, -77.0062905]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fcca339ef1794e44c59cb97a830803f9 = L.polyline(
        [[-12.100864, -77.0062909], [-12.101015, -77.0062868]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a79be2c0934b79fe8041787aae6ad7f8 = L.polyline(
        [[-12.0990601, -77.0088976], [-12.100044, -77.0074878]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_12dd2c6d9cb9036c2edc52f40ac25176 = L.polyline(
        [[-12.0849535, -76.996067], [-12.0847945, -76.994903]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c62de79d71c30e8c54cc9cfe9a61f8c7 = L.polyline(
        [[-12.0986608, -77.0012894], [-12.0978677, -77.0014019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_71075efc6fc2f63ce85b88dd7a0f8242 = L.polyline(
        [[-12.0986608, -77.0012894], [-12.0995387, -77.0011623]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b8b1b6ac6b484e93ca92ab34381567f9 = L.polyline(
        [[-12.0873246, -76.9966289], [-12.0873075, -76.9965065]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_17abbd3610ddf646f9608474c3729b69 = L.polyline(
        [[-12.0873246, -76.9966289], [-12.0879707, -76.9965358]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2a1dab40ff730778b66f699aea2d90a4 = L.polyline(
        [[-12.0980601, -77.0090976], [-12.0990601, -77.0088976]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a0957c20d49e4dabd991f62fcfd3a804 = L.polyline(
        [[-12.0974611, -77.0090828], [-12.0980601, -77.0090976]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4c119af98b8b5f782ce4dff6f4c9bf96 = L.polyline(
        [[-12.0968728, -77.0030587], [-12.0974614, -77.0029724]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d0dfa29c7c6b0d965cc3c92b052576fa = L.polyline(
        [[-12.0946094, -77.0059348], [-12.0952227, -77.0058577]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_752ea010875704d30843cbfda024cfa1 = L.polyline(
        [[-12.0946094, -77.0059348], [-12.0941482, -77.0060092]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_58911b6ab1e3d68da10c973867e069df = L.polyline(
        [[-12.0962968, -77.0087977], [-12.0968986, -77.0089528]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c07337280b117c3a60edfc1a022d1332 = L.polyline(
        [[-12.1040169, -77.0044934], [-12.1045874, -77.0045004]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_620c61b5c912ba47301487570192bafc = L.polyline(
        [[-12.1040169, -77.0044934], [-12.1040031, -77.0050898]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3f70bb4d79eb9e44493ce9caa3f3cfdf = L.polyline(
        [[-12.1040169, -77.0044934], [-12.1031829, -77.0044773]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf70e70f4d299ebd86b1928e3aa7274e = L.polyline(
        [[-12.0883076, -77.003643], [-12.0896057, -77.0034418]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4bf4014f7338f52ba10c09bb42036130 = L.polyline(
        [[-12.0883076, -77.003643], [-12.0882818, -77.0034626]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fb644cd1e01141575976834e7d10f7de = L.polyline(
        [[-12.0850212, -77.00223], [-12.0849062, -77.0022461]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_117e5de6a13e145413bca818dfab1a57 = L.polyline(
        [[-12.0850212, -77.00223], [-12.0853623, -77.0021821]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f00e640aaa0c129b2dba10eca346ba90 = L.polyline(
        [[-12.0957206, -77.0082213], [-12.0962968, -77.0087977]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3c9e07637c602eea93264123e0fad8e2 = L.polyline(
        [[-12.0954672, -77.0070147], [-12.0957206, -77.0082213]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_865d9654d845bd7494090d94505a3977 = L.polyline(
        [[-12.1116668, -77.0003276], [-12.1116851, -77.0006742]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b9bf1a9a9162abce4175790ac787132e = L.polyline(
        [[-12.0965937, -77.009776], [-12.0966743, -77.0098011]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_af36c2a7e1ca49cade9ef673277aedb9 = L.polyline(
        [[-12.1104038, -76.9971077], [-12.1104314, -76.99745]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c5390a6ec8bdd3eb268589f53b301c43 = L.polyline(
        [[-12.1104038, -76.9971077], [-12.1103692, -76.9965373]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c133177397469f3d4a63224aa6511192 = L.polyline(
        [[-12.1058128, -77.00112], [-12.1059094, -77.0011141]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c38e707a4e55caf81b6bace37479e741 = L.polyline(
        [[-12.1058413, -77.0035871], [-12.1058402, -77.0041095]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2becfeadecfe4f5fd563001e7d3ee2fe = L.polyline(
        [[-12.0845339, -76.9930058], [-12.0843042, -76.9913127]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_820116418ffc92397490460a1f161dd5 = L.polyline(
        [[-12.0951749, -77.0026337], [-12.0963919, -77.0024755]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_350b4c403d520c40586e71c27439c0cf = L.polyline(
        [[-12.0912115, -77.0048275], [-12.091927, -77.0056455]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_993605244f6b1cd84984386dbd03459b = L.polyline(
        [[-12.0912115, -77.0048275], [-12.0910825, -77.004498]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2f96ff3d1d200747c6a5d21241c77e2f = L.polyline(
        [[-12.0912115, -77.0048275], [-12.0906615, -77.0051292]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fe59a2bd0abc7a946831739e8165ad09 = L.polyline(
        [[-12.091927, -77.0056455], [-12.091623, -77.0062271]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_01d6f31b25267e58e1c52aa071e4f38e = L.polyline(
        [[-12.091927, -77.0056455], [-12.0924894, -77.0059674]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0bdcc3f6ece1a8a1dad667e11e4bcb02 = L.polyline(
        [[-12.091927, -77.0056455], [-12.0912115, -77.0048275]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2e2fac04129382da2a3e8f2b16418993 = L.polyline(
        [[-12.0930249, -77.0060954], [-12.0935534, -77.0060876]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_69a23c49d4e3985b3e3101cf59a2556c = L.polyline(
        [[-12.0930249, -77.0060954], [-12.0924894, -77.0059674]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f140144254e17b65e7d90a711dfee9b8 = L.polyline(
        [[-12.0995387, -77.0011623], [-12.1000544, -77.0010917]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d9d012307f1620dcf20602ce305381b0 = L.polyline(
        [[-12.0995387, -77.0011623], [-12.0986608, -77.0012894]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_13b8ac3d53e88738fdd03fa22aff4993 = L.polyline(
        [[-12.0995387, -77.0011623], [-12.099623, -77.0018216]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0b557ff23445e03cd4fb2d95942460f9 = L.polyline(
        [[-12.0945156, -77.0027366], [-12.0945173, -77.0025845]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cdb93c5bb42da04985fe372e2f90c250 = L.polyline(
        [[-12.0945156, -77.0027366], [-12.0951749, -77.0026337]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b1c2c5a4aed67c99b9286be80888d0cb = L.polyline(
        [[-12.0945173, -77.0025845], [-12.09406, -77.0026444]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6fd268e3b03697a10ef07fc40f7653d5 = L.polyline(
        [[-12.09406, -77.0026444], [-12.0940535, -77.0027968]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_860f42f9dfeba4eab1ed8b1f8b4a0852 = L.polyline(
        [[-12.09406, -77.0026444], [-12.0934434, -77.0027328]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_495f104f8ecb14daf58fe7cfa4e8c8eb = L.polyline(
        [[-12.0940535, -77.0027968], [-12.0945156, -77.0027366]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ab39ef8b550ce64fb7f1db39f59967a9 = L.polyline(
        [[-12.1002338, -77.0062905], [-12.0978217, -77.0060221]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b424155a0187860c71559efdc5066abb = L.polyline(
        [[-12.1002338, -77.0062905], [-12.100864, -77.0062909]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f4d7794d43a49d9d28abcc8ad3bba282 = L.polyline(
        [[-12.1119763, -77.0062896], [-12.1118309, -77.0063018]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d0b6e1e8549a15238aa2d0ab1f581810 = L.polyline(
        [[-12.0909636, -77.0039411], [-12.0908793, -77.0032643]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_dcc259eb8434e5b03d57a973f984ba59 = L.polyline(
        [[-12.0909636, -77.0039411], [-12.0910825, -77.004498]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6df0198c56ad648ceb58d9f132378440 = L.polyline(
        [[-12.0847895, -76.9989822], [-12.0849518, -76.9989601]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f3704508721f6ba9b2f1b9504538d709 = L.polyline(
        [[-12.0847895, -76.9989822], [-12.084136, -76.9992288]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e02e137b0d96339fee7ac3f0af6e49a5 = L.polyline(
        [[-12.1081908, -76.9994421], [-12.1086949, -76.9994137]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5a8e75fd43550dcf5dbdd9bfb009a641 = L.polyline(
        [[-12.1081908, -76.9994421], [-12.1074306, -76.9995081]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8f6ee3555840605fd064e3eb08b1184e = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1099407, -76.9993228]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8fa64f367338f70a6594423d9d11b041 = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1086949, -76.9994137]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7202dcb51b5729c3e056eb2712ededcd = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1093613, -77.0003974]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_71fdacd8c1ee1775691f6c484043bd52 = L.polyline(
        [[-12.1099407, -76.9993228], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_30c25ed41f475cf253d1ba49e733448e = L.polyline(
        [[-12.1099407, -76.9993228], [-12.1105482, -76.9992839]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_67fc4fc6c1c68c04a2f880bdb827970f = L.polyline(
        [[-12.1105482, -76.9992839], [-12.1099407, -76.9993228]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e3212f600e2c242909f47d02a3e721c6 = L.polyline(
        [[-12.1105482, -76.9992839], [-12.1104886, -76.9983699]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_808cfcc8bab6a4f2717f2422561ca913 = L.polyline(
        [[-12.0908793, -77.0032643], [-12.0908539, -77.0030984]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fc03b59fcd7a30cf1b77c0207fde918b = L.polyline(
        [[-12.0908793, -77.0032643], [-12.0925075, -77.003024]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_af336a2c2f7845e92a9115345d9aee27 = L.polyline(
        [[-12.0908793, -77.0032643], [-12.0909636, -77.0039411]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1b453f5914d71ae24245918a36cce77b = L.polyline(
        [[-12.1104886, -76.9983699], [-12.1104314, -76.99745]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_55864230b3fcf69e45d6264820a32531 = L.polyline(
        [[-12.1104886, -76.9983699], [-12.1105482, -76.9992839]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_eb4c2f6c6d94603076abaf7fb6182a7d = L.polyline(
        [[-12.1104314, -76.99745], [-12.1104038, -76.9971077]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9b3d078bf3642820b678725f539ed804 = L.polyline(
        [[-12.1104314, -76.99745], [-12.1104886, -76.9983699]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ed3233ee001cdcecd0e2efe881b6454d = L.polyline(
        [[-12.1103692, -76.9965373], [-12.1100208, -76.996563]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_02172238674f3f2fab181e91a74cad4b = L.polyline(
        [[-12.1103692, -76.9965373], [-12.1104038, -76.9971077]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_44426709f208449763c25c930f3f9f5f = L.polyline(
        [[-12.0873075, -76.9965065], [-12.0869711, -76.9965527]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0fd693a370d9e15f5087ace9f8f2a9e3 = L.polyline(
        [[-12.1118309, -77.0063018], [-12.1119763, -77.0062896]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4b7c6b45b3f8054f777c9955ab09c168 = L.polyline(
        [[-12.1118309, -77.0063018], [-12.109192, -77.0065068]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2020c965f48d943d1c5f3c20c957c436 = L.polyline(
        [[-12.1074083, -77.0078322], [-12.1071558, -77.0073935]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6d45770a80e0a519ca892de62bbfa912 = L.polyline(
        [[-12.1074083, -77.0078322], [-12.107465, -77.0081537]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4a8b0d77b4a5236436c8bb60305aa76d = L.polyline(
        [[-12.1074083, -77.0078322], [-12.107611, -77.0080043]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b88ecc5cc7f8a9270e0c02994f97e3ed = L.polyline(
        [[-12.110489, -76.9949627], [-12.1100558, -76.9953542]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_013a0e5ee630c1822006cbc42df9409f = L.polyline(
        [[-12.110489, -76.9949627], [-12.1108833, -76.9948375]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_642a86cf2c6cb0629ed96a6307e475d9 = L.polyline(
        [[-12.109192, -77.0065068], [-12.1118309, -77.0063018]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bc659bb68cd776807f624faf4fa85862 = L.polyline(
        [[-12.109192, -77.0065068], [-12.1093179, -77.0061204]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_dec1048017241f7c1a072ce70af6c779 = L.polyline(
        [[-12.0908539, -77.0030984], [-12.0908793, -77.0032643]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_891567f4196334b502d01387dffd13b6 = L.polyline(
        [[-12.0908539, -77.0030984], [-12.0895838, -77.0032727]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5c6036dcad578e384d8c9048d7f034c6 = L.polyline(
        [[-12.0908539, -77.0030984], [-12.090756, -77.0024189]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4877a29116bc2f37aaea4247bd5698b1 = L.polyline(
        [[-12.1084649, -77.0079471], [-12.107611, -77.0080043]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b308e5da54499f9034fe8a4488e43627 = L.polyline(
        [[-12.1084649, -77.0079471], [-12.1085853, -77.0081412]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_810b0584986b59eaca6380d40422026d = L.polyline(
        [[-12.0875206, -77.0055279], [-12.0870574, -77.0055946]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_85c000ba329ca19b407dc8c36235571f = L.polyline(
        [[-12.107465, -77.0081537], [-12.1074083, -77.0078322]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aa1cfc24c0088a19ebe4418bad80c34e = L.polyline(
        [[-12.107465, -77.0081537], [-12.1075537, -77.0087256]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_35e5594097314ec1785232bb2624b5d8 = L.polyline(
        [[-12.107465, -77.0081537], [-12.107611, -77.0080043]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e31496e80d26e61229a9b6e860660887 = L.polyline(
        [[-12.1108833, -76.9948375], [-12.1111916, -76.9948089]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d34c6765c584aaef11e8ad128f39d259 = L.polyline(
        [[-12.1071558, -77.0073935], [-12.1074083, -77.0078322]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b7509e91430eb059f2a44beb5e4f6fc0 = L.polyline(
        [[-12.1071558, -77.0073935], [-12.1069857, -77.0070791]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f35f694a94efa4dedf9d6179d6c1f0a5 = L.polyline(
        [[-12.1092841, -77.0076407], [-12.1092623, -77.0075297]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6172a1cf6aaed9f9932997fe39d91b47 = L.polyline(
        [[-12.090756, -77.0024189], [-12.0906765, -77.0018401]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_acac518ca52ed4dd9e4f8477ef425917 = L.polyline(
        [[-12.090756, -77.0024189], [-12.0908539, -77.0030984]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3ee7c1d77ae850f6dde10ed7eeafd6cc = L.polyline(
        [[-12.1043287, -76.9934789], [-12.1044067, -76.9936019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7a179cd89b622598f27bf86c34b99456 = L.polyline(
        [[-12.1043287, -76.9934789], [-12.1031291, -76.9941217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3330aee0fff59f28e3519a4402c666ee = L.polyline(
        [[-12.1031291, -76.9941217], [-12.1031794, -76.9942478]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c31090b5a79a40f8e094b2bc642cd980 = L.polyline(
        [[-12.1031291, -76.9941217], [-12.1022059, -76.994325]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a7ab3ebe406d3a2ffbff9b7ca3090976 = L.polyline(
        [[-12.1022059, -76.994325], [-12.1022271, -76.9944715]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6970b28e96bdca0f15b92757656d1c0b = L.polyline(
        [[-12.1022059, -76.994325], [-12.1005602, -76.9945542]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7c75187c4220217cbf639abe677544db = L.polyline(
        [[-12.0999425, -76.994653], [-12.0993132, -76.9947496]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ed1c2806883a6cf31ecfd2453b871697 = L.polyline(
        [[-12.0860232, -76.9980782], [-12.0859894, -76.997835]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_14bb3804c00cbe196917d65395c9fa40 = L.polyline(
        [[-12.0860232, -76.9980782], [-12.0860346, -76.9981601]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_34feb5011eba1453de98cd4d5bd650ca = L.polyline(
        [[-12.0988575, -76.9948143], [-12.0988609, -76.9949562]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_41e4757ef833bec12c2c26e8d15b7f37 = L.polyline(
        [[-12.0988575, -76.9948143], [-12.097543, -76.9950061]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c5be97fd55fd72f54472817ae33f9a2b = L.polyline(
        [[-12.09713, -76.9950614], [-12.0955339, -76.9952692]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_11c480a6e4d0480f3e0f18c8ca041868 = L.polyline(
        [[-12.0847945, -76.994903], [-12.0846299, -76.9937074]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_421e0ad2c906253fe61ee95b4b68cd77 = L.polyline(
        [[-12.0955339, -76.9952692], [-12.0937799, -76.9955267]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_56b55bf92e56d40cfc8cba34855f472a = L.polyline(
        [[-12.0937799, -76.9955267], [-12.0937882, -76.9956812]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_982bae74a86f241706b65296bb883e5e = L.polyline(
        [[-12.0937799, -76.9955267], [-12.0931421, -76.9956433]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fd190a26012f8af04a49d5a37a8b82e2 = L.polyline(
        [[-12.0914279, -76.9959016], [-12.0914475, -76.9960266]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6016bced56bcd5d51e43ad44586b0008 = L.polyline(
        [[-12.0914279, -76.9959016], [-12.0898632, -76.9961306]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b761e3a074791ef14f49b31cf541a090 = L.polyline(
        [[-12.0898632, -76.9961306], [-12.0898827, -76.9962479]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cd17a46219736df669ddacfdc5786eaf = L.polyline(
        [[-12.0898632, -76.9961306], [-12.0885732, -76.9963161]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9a929ad6c9de097d6ccfa1c9c4d0e609 = L.polyline(
        [[-12.0885732, -76.9963161], [-12.0873075, -76.9965065]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d8b34a39c43b95571dfa58b7352a1a19 = L.polyline(
        [[-12.0900762, -76.9975062], [-12.0902137, -76.9985217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_937efe685d596b48701c24bcd96633d9 = L.polyline(
        [[-12.0900762, -76.9975062], [-12.0899893, -76.9969301]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bfd48ad2388e174385db51efb645608c = L.polyline(
        [[-12.0902137, -76.9985217], [-12.0902991, -76.9991155]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b64bc505e9d98af00e4a2716d531ac1e = L.polyline(
        [[-12.0902137, -76.9985217], [-12.0900762, -76.9975062]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_996cc0ea181e20bc4b2b0abcb6775fcc = L.polyline(
        [[-12.0850554, -76.9968174], [-12.0849535, -76.996067]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4e8b24484da3d0dbb32f34ba2894410e = L.polyline(
        [[-12.1085454, -77.0007606], [-12.1086464, -77.0007456]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0c4bb4780fab7b96fad7d81de1409fcc = L.polyline(
        [[-12.1085454, -77.0007606], [-12.1085589, -77.0009054]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_262be74f10c9c149ae5387dee28734fc = L.polyline(
        [[-12.1085202, -77.0005154], [-12.1085454, -77.0007606]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7965dbe9c8d3b14f0a28cd6f754c0277 = L.polyline(
        [[-12.0877823, -77.0035313], [-12.0874419, -77.0035715]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fe1fc13e077b04614c90794c62a33511 = L.polyline(
        [[-12.1080064, -77.0021387], [-12.1080745, -77.0021924]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4f8bb981481625c4cd13658a4224a543 = L.polyline(
        [[-12.1080064, -77.0021387], [-12.1076544, -77.0025831]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8648da81a09bbcf9c50909ec069631c8 = L.polyline(
        [[-12.1085589, -77.0009054], [-12.1080064, -77.0021387]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_11fba50dffdde62cdad5b2f6c88d73b0 = L.polyline(
        [[-12.1085589, -77.0009054], [-12.1086641, -77.0008901]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ce6704b187fbfaca96b4eee282a5e2f1 = L.polyline(
        [[-12.1095917, -77.0020574], [-12.1089147, -77.002907]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7d51c3284d16c6086de71e271443675 = L.polyline(
        [[-12.1095917, -77.0020574], [-12.1088973, -77.0009506]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d04273210190e69f6e0168372e862896 = L.polyline(
        [[-12.1095917, -77.0020574], [-12.1087051, -77.0013281]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_56fef56f6271ce2fb0ecf3a41cfb629e = L.polyline(
        [[-12.1116058, -76.999335], [-12.1116474, -77.0000642]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_132921570b4300125a1fc3aea8f5e274 = L.polyline(
        [[-12.0939388, -76.9991666], [-12.0945669, -76.9990932]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4f55ffade4552c5d3a49ff82baba8ba0 = L.polyline(
        [[-12.0939388, -76.9991666], [-12.0935541, -76.9992089]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf8fb793a0e24f389e1ae8b3aed2fee6 = L.polyline(
        [[-12.0931421, -76.9957978], [-12.0931421, -76.9956433]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8b7c98f3791c79edd49c4fadfff289a9 = L.polyline(
        [[-12.0931421, -76.9957978], [-12.0937882, -76.9956812]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_82824c7ea074070189dc9237feaf2f33 = L.polyline(
        [[-12.0931421, -76.9956433], [-12.0928038, -76.9956983]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_53ca0bc215c2e87742625bf8e4a0ceee = L.polyline(
        [[-12.1093613, -77.0003974], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_56e53ebae36808b43d8ce77b2b73ed2b = L.polyline(
        [[-12.1093613, -77.0003974], [-12.1086129, -77.0005013]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ab04fb988866faeaa77c0bf81af61049 = L.polyline(
        [[-12.0861245, -76.9988072], [-12.0860346, -76.9981601]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8d1a5ffd106d2001494d2d6c09c0c79f = L.polyline(
        [[-12.0861245, -76.9988072], [-12.0849518, -76.9989601]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e25dfb20c161b48f4837c104e04e4bc9 = L.polyline(
        [[-12.0986242, -77.0105843], [-12.0987806, -77.0106047]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a3d91d87974d1857d7ca89eef10ef083 = L.polyline(
        [[-12.0992228, -77.0027217], [-12.0986233, -77.0028091]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6e2ab3e5813edabc91bd058a17ff4a44 = L.polyline(
        [[-12.0992228, -77.0027217], [-12.0997109, -77.0026497]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_992730fae7fa78a752360a4eea87bb24 = L.polyline(
        [[-12.0869805, -76.9979272], [-12.0870186, -76.9979996]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_821ce68d62a1b7f3850ee5021d4a293a = L.polyline(
        [[-12.0869805, -76.9979272], [-12.0860232, -76.9980782]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0c342ca24ec3dcc9273969b43c64b9d8 = L.polyline(
        [[-12.0845476, -76.993118], [-12.0845339, -76.9930058]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_58cb4c17c16931f747c98a9c70954081 = L.polyline(
        [[-12.0865309, -76.9967353], [-12.0869805, -76.9979272]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_409be7417a45d2981cd5d66c292dac12 = L.polyline(
        [[-12.0865309, -76.9967353], [-12.0870334, -76.9966592]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_77bfaca6b95ca4afe7c01a80d0aa5818 = L.polyline(
        [[-12.0865164, -76.996616], [-12.0865309, -76.9967353]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_84dbf2a587685d8720975b1e9242f901 = L.polyline(
        [[-12.0865164, -76.996616], [-12.0858337, -76.9966999]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9e835fe4a38c9960c0d000685eaf0495 = L.polyline(
        [[-12.0835877, -77.0000022], [-12.0834988, -76.9993555]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_74f421615e69714cb6c0dfc87e657b32 = L.polyline(
        [[-12.0875554, -77.0024943], [-12.0873953, -77.0031034]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_afa07b8b953894e39d0d806f28b3d09d = L.polyline(
        [[-12.0875417, -77.0010083], [-12.0875554, -77.0024943]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_34c6be6d0e7cf82421de24ed5aac5106 = L.polyline(
        [[-12.0875417, -77.0010083], [-12.0875554, -77.0024943]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bc114d98ce18bb43a73c76079818ddd9 = L.polyline(
        [[-12.0993132, -76.9947496], [-12.0988575, -76.9948143]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bbb1bfacd5baeceef9a08cee8fa8cec5 = L.polyline(
        [[-12.0873953, -77.0031034], [-12.0874419, -77.0035715]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_80d8a8292dd29e887b52c13193313832 = L.polyline(
        [[-12.0874419, -77.0035715], [-12.0860291, -77.0037277]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d7928742177c0c1805cd3f8099c63549 = L.polyline(
        [[-12.0874419, -77.0035715], [-12.0874729, -77.0037877]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_868dff419ef2ca8494205ba32a754a63 = L.polyline(
        [[-12.0860291, -77.0037277], [-12.0857983, -77.0021209]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e96ba86f6fc216422ab5f01c59973be9 = L.polyline(
        [[-12.0846817, -76.9970042], [-12.0849423, -76.9969649]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_588e9821f58ae721bb0d46a7f63b5343 = L.polyline(
        [[-12.1016097, -77.0101367], [-12.1019212, -77.0096821]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_39d97866c5eff4372ae12ff472159aa2 = L.polyline(
        [[-12.1016097, -77.0101367], [-12.1012826, -77.0105078]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_169a13e4bc8edacbf8c814108ae250dd = L.polyline(
        [[-12.1069279, -77.0069932], [-12.1069857, -77.0070791]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_62c85cc5a742717d0c488942421a3e1a = L.polyline(
        [[-12.1069279, -77.0069932], [-12.1057881, -77.0059255]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_374206a6aea6fe39a4b0fbaa50c0734d = L.polyline(
        [[-12.1069857, -77.0070791], [-12.1071558, -77.0073935]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ae500e20db574d22747028d8f524852a = L.polyline(
        [[-12.1069857, -77.0070791], [-12.1069279, -77.0069932]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ac42324bbd875424975408ce5f777370 = L.polyline(
        [[-12.1028104, -76.9967231], [-12.1028016, -76.998129]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_830331de802c17a0a520b7e6f63f594e = L.polyline(
        [[-12.1028104, -76.9967231], [-12.1028157, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e872233a079508a71af26072cf0b235b = L.polyline(
        [[-12.0869711, -76.9965527], [-12.0865164, -76.996616]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3eb97925f4574f1e529f90a59cd10749 = L.polyline(
        [[-12.0928038, -76.9956983], [-12.0928064, -76.9958478]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3833d6462a8d7349445c61deca4b492d = L.polyline(
        [[-12.0928038, -76.9956983], [-12.0914279, -76.9959016]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_63bbc8974dfe62ce6d10f7ebf8993e49 = L.polyline(
        [[-12.0928064, -76.9958478], [-12.0931421, -76.9957978]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_75aee0888b8024ebb89aa081444e9576 = L.polyline(
        [[-12.0870334, -76.9966592], [-12.0873246, -76.9966289]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_09bfdd68e11618503e998b2f60734939 = L.polyline(
        [[-12.100148, -76.9986414], [-12.1006062, -76.9985525]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2f2732b598da64256abf50b2425609e6 = L.polyline(
        [[-12.100148, -76.9986414], [-12.0993015, -76.9991183]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_425a14f6bb0661d02715f6418d35ac0c = L.polyline(
        [[-12.0935541, -76.9992089], [-12.0929233, -76.9993085]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1f78369c8361fa589264cd4cba19be08 = L.polyline(
        [[-12.0935541, -76.9992089], [-12.0939388, -76.9991666]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8be84c2b1ec6b0ec3e558a62121031f4 = L.polyline(
        [[-12.0941482, -77.0060092], [-12.0946094, -77.0059348]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bd1c34e109bde9d738beed529ee111f3 = L.polyline(
        [[-12.0941482, -77.0060092], [-12.0935534, -77.0060876]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2e27aab67c8369b09873d4dfecdfaa7d = L.polyline(
        [[-12.0874619, -77.0003062], [-12.0875417, -77.0010083]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f84d9c10f885bcd582605797ca3690c8 = L.polyline(
        [[-12.0927108, -76.9987619], [-12.0922556, -76.9971883]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9c154fffaabce1f28b7669cd820a70dc = L.polyline(
        [[-12.0927108, -76.9987619], [-12.0929233, -76.9993085]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a4d8ab66de61e71a2ef34524f438c65a = L.polyline(
        [[-12.1069518, -77.0007489], [-12.1057999, -77.000917]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_981524b4fead04e9e369eba004af2807 = L.polyline(
        [[-12.0922556, -76.9971883], [-12.0922111, -76.9966284]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4a473c2da2b899d9a01c4f61177cadf9 = L.polyline(
        [[-12.0922556, -76.9971883], [-12.0927108, -76.9987619]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e819efe607991c2838b905d05412a924 = L.polyline(
        [[-12.0841846, -76.9895324], [-12.0842693, -76.9890509]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_227020b551102ee836e0d6454bc3820b = L.polyline(
        [[-12.0922111, -76.9966284], [-12.0921887, -76.9959242]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f68528e1bbb4958b5c827741fccd4cd7 = L.polyline(
        [[-12.0922111, -76.9966284], [-12.0922556, -76.9971883]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_43f9e1234886f058500abe874df3bcd3 = L.polyline(
        [[-12.0922111, -76.9966284], [-12.0899893, -76.9969301]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_262e003d31f67a39a2786c4602e36122 = L.polyline(
        [[-12.0879069, -77.0037088], [-12.0883076, -77.003643]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2e2e0501ec174e9fe59d737025119f62 = L.polyline(
        [[-12.1051908, -77.0031426], [-12.1058409, -77.0031356]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c60a7ea957327918434a3fbf3cf552f4 = L.polyline(
        [[-12.0858487, -76.9968227], [-12.0859001, -76.997233]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a5553a16ec303e9634f8300448abb9c0 = L.polyline(
        [[-12.0858487, -76.9968227], [-12.0858337, -76.9966999]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1d5c2b64f7647ff99a0285e5ae00f285 = L.polyline(
        [[-12.0858487, -76.9968227], [-12.0865309, -76.9967353]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_53dbd0e7648288e134ae87dd7e28062a = L.polyline(
        [[-12.1114005, -76.9965017], [-12.1115635, -76.998638]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_28ed740a7e15e16a7370e272c441eea7 = L.polyline(
        [[-12.1112697, -76.9960836], [-12.1114005, -76.9965017]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_30d825b3ffc974c0b3e7095f9dec3ac2 = L.polyline(
        [[-12.1051712, -77.004498], [-12.1045874, -77.0045004]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bfc67c38822e0dee545140484d19ed31 = L.polyline(
        [[-12.1051712, -77.004498], [-12.1051908, -77.0031426]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b1154207f453c717c763e3d6e4924f96 = L.polyline(
        [[-12.0879707, -76.9965358], [-12.0898827, -76.9962479]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_81fe04bd2d8da6d29e9ba347c4a9162f = L.polyline(
        [[-12.0898827, -76.9962479], [-12.0898632, -76.9961306]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b93b536ead208bb9e1c977a8adcf8f13 = L.polyline(
        [[-12.0898827, -76.9962479], [-12.0914475, -76.9960266]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f17c42aa1ca843414e2f2e6ed03bc12e = L.polyline(
        [[-12.0898827, -76.9962479], [-12.0899893, -76.9969301]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ad40ea4ce9b2fba75f9f9a154df7066b = L.polyline(
        [[-12.0914475, -76.9960266], [-12.0921887, -76.9959242]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_63cc0ad5a3fac69a7bb15a6ec41c2e4f = L.polyline(
        [[-12.0914475, -76.9960266], [-12.0914279, -76.9959016]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_77e98564125c0a2888ea2008359f6ff6 = L.polyline(
        [[-12.0843981, -76.9873642], [-12.0848165, -76.9870982]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a8fe2d4e832a11e783cf3b2f417e0995 = L.polyline(
        [[-12.0843981, -76.9873642], [-12.0839577, -76.9876924]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_69afe14c433a2a8c9a3f26b7bdf068f2 = L.polyline(
        [[-12.0921887, -76.9959242], [-12.0922111, -76.9966284]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5800e3763b9b1a8eb60762e9fe38eb2f = L.polyline(
        [[-12.0921887, -76.9959242], [-12.0928064, -76.9958478]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_996353ee23ef8d6cd0f4268bedb8625b = L.polyline(
        [[-12.0937882, -76.9956812], [-12.0955591, -76.9954322]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_61b65afa863245d4bd0fe825ee1a9005 = L.polyline(
        [[-12.0955591, -76.9954322], [-12.0955339, -76.9952692]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7bc33cdb8c9a7bc21378453f6827da68 = L.polyline(
        [[-12.0955591, -76.9954322], [-12.0975663, -76.9951408]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_92bf5180a397109029a9e7be58a6b0d9 = L.polyline(
        [[-12.0988609, -76.9949562], [-12.0988575, -76.9948143]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3bcdbcd66104891e41d0606e3243a602 = L.polyline(
        [[-12.0988609, -76.9949562], [-12.1004076, -76.9947242]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b16637aa0914a9db2b47bab6c0cac666 = L.polyline(
        [[-12.0848165, -76.9870982], [-12.0846364, -76.986638]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d933e5efd9657929a3516f8327393a5e = L.polyline(
        [[-12.0848165, -76.9870982], [-12.0843981, -76.9873642]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_33d2eaa9a1df340ba30f3a9f725b2d32 = L.polyline(
        [[-12.101149, -76.9946296], [-12.1022271, -76.9944715]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e40fb284ba7e872204760166bf2e0680 = L.polyline(
        [[-12.1022271, -76.9944715], [-12.1022059, -76.994325]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1bc088ddec494280e0693bc04c383994 = L.polyline(
        [[-12.1022271, -76.9944715], [-12.1031794, -76.9942478]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aaa5d085abf2a6b1cd221706f885b6b3 = L.polyline(
        [[-12.1031794, -76.9942478], [-12.1031291, -76.9941217]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ad608f94ca50b11decb7606722708156 = L.polyline(
        [[-12.1031794, -76.9942478], [-12.1033559, -76.994875]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aa7ea7bd532a6962842c94f2ac331e28 = L.polyline(
        [[-12.1031794, -76.9942478], [-12.1044067, -76.9936019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3fb960465d5ada1eeb81dd7c1f6bef27 = L.polyline(
        [[-12.1044067, -76.9936019], [-12.1043287, -76.9934789]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_84ae130a5211cd0d9d3171f4e4741029 = L.polyline(
        [[-12.1044067, -76.9936019], [-12.1047579, -76.9941036]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_31683337fdbb4257492093363e087c25 = L.polyline(
        [[-12.1051525, -77.0092396], [-12.1042634, -77.0094126]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ba98c684397d74075bcb1e676a2b9260 = L.polyline(
        [[-12.1051525, -77.0092396], [-12.1058121, -77.0091015]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d73028cae0134e8dd1bf33a13d0ecd4d = L.polyline(
        [[-12.1040031, -77.0050898], [-12.105165, -77.0050843]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_03db2df9426ac04a681fb6ef2d3a41f5 = L.polyline(
        [[-12.1040031, -77.0050898], [-12.1040169, -77.0044934]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8eba5fe7f9a54f6a975e994d58d5990c = L.polyline(
        [[-12.1040031, -77.0050898], [-12.101989, -77.0050869]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ea25c3f33b14327ffb6ea1b81fe9e191 = L.polyline(
        [[-12.1042634, -77.0094126], [-12.1051525, -77.0092396]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b38977509e45178a2cbfa5b20f58b0c8 = L.polyline(
        [[-12.1042634, -77.0094126], [-12.1019212, -77.0096821]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d7b37d211aa14559d7354d9149fb1511 = L.polyline(
        [[-12.0839577, -76.9876924], [-12.0843981, -76.9873642]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9042e572bf1419ebb8771a48fafc76b0 = L.polyline(
        [[-12.084136, -76.9992288], [-12.0847895, -76.9989822]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8dff0b90d73139b203dd89d5f68fd0db = L.polyline(
        [[-12.084136, -76.9992288], [-12.0834988, -76.9993555]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_036b8d5646cbf626f502c601b5f51368 = L.polyline(
        [[-12.0916778, -77.0075095], [-12.0911121, -77.0072045]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1c1a7476f8b9c16c6f14a1ccc3b9dd0c = L.polyline(
        [[-12.0916778, -77.0075095], [-12.092222, -77.0078018]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fe89fb67f0914c745892563012e3f4f2 = L.polyline(
        [[-12.0916778, -77.0075095], [-12.0912361, -77.0083344]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5db07a41434f6b72daa54d3204050b4e = L.polyline(
        [[-12.0916778, -77.0075095], [-12.0924894, -77.0059674]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_932876c7b340af757ff872ad97b5e91b = L.polyline(
        [[-12.0924894, -77.0059674], [-12.091927, -77.0056455]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3a77083b999c8359f38af8258508015e = L.polyline(
        [[-12.0924894, -77.0059674], [-12.0916778, -77.0075095]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a6da2442abdabb17b5e3aecf2ecbc1f1 = L.polyline(
        [[-12.0924894, -77.0059674], [-12.0930249, -77.0060954]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ef2f16b4949f8cbd4c194bf75bb7897b = L.polyline(
        [[-12.0842693, -76.9890509], [-12.0839577, -76.9876924]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a6135c2033ae4e42c5b141d55116946c = L.polyline(
        [[-12.1025744, -77.0044773], [-12.1019975, -77.0044666]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1319bababeef49e3bc93995d0b07968a = L.polyline(
        [[-12.1025744, -77.0044773], [-12.1031829, -77.0044773]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f9bd2bd81e7426f40c8564bf18c65d69 = L.polyline(
        [[-12.1019975, -77.0044666], [-12.101383, -77.0044625]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1fe48f90118928bfb2e4c4fe3260d712 = L.polyline(
        [[-12.1019975, -77.0044666], [-12.1025744, -77.0044773]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_98a16a225aa1575e910c9d2e35c684f4 = L.polyline(
        [[-12.1019975, -77.0044666], [-12.101989, -77.0050869]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0a446d723bca5a74063906cbe6ed9357 = L.polyline(
        [[-12.1031961, -77.0014569], [-12.1032022, -77.0012966]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2e4eefa9f6d00a67a26d6397f903ec9c = L.polyline(
        [[-12.1031961, -77.0014569], [-12.1052083, -77.0011795]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9d12d007f0fb5bf8b9e112a5d430c905 = L.polyline(
        [[-12.1045874, -77.0045004], [-12.1040169, -77.0044934]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0c3f48ee1f401bd209659e1e7622e788 = L.polyline(
        [[-12.1045874, -77.0045004], [-12.1051712, -77.004498]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9ff5165f66d9743f702bd24ec7d6562e = L.polyline(
        [[-12.101989, -77.0050869], [-12.1019975, -77.0044666]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_de63575b101b8153fe39f8ca82a4adbb = L.polyline(
        [[-12.101989, -77.0050869], [-12.1040031, -77.0050898]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f323a27b11b42279d8e8d5c872e5f3bc = L.polyline(
        [[-12.101989, -77.0050869], [-12.1018611, -77.0056468]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_202d6ba0d8400ddfa5c60e6f141348d4 = L.polyline(
        [[-12.1058224, -77.0050953], [-12.105165, -77.0050843]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9dce1c1ca7049f1b7d3909ccd1ee3f89 = L.polyline(
        [[-12.1058224, -77.0050953], [-12.1057881, -77.0059255]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1148ee85df508c45ef1829e71cb77c4a = L.polyline(
        [[-12.1018611, -77.0056468], [-12.1016955, -77.0062851]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5ff00d6860245891262831f1d78a9205 = L.polyline(
        [[-12.1018611, -77.0056468], [-12.101989, -77.0050869]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5e08a3e4fc5263374ac4a72e69e02fbc = L.polyline(
        [[-12.085112, -76.9864309], [-12.0846364, -76.986638]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f375eb5e4bb6d1a5ddd70f478dddca66 = L.polyline(
        [[-12.085112, -76.9864309], [-12.0853284, -76.9869401]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_db4ea94e5cacde4520a6e0823f99bdad = L.polyline(
        [[-12.1058409, -77.0031356], [-12.1051908, -77.0031426]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cacb1e3e55b7a09b3feb07fd8dd03eda = L.polyline(
        [[-12.1058409, -77.0031356], [-12.1058413, -77.0035871]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0304b88f16289486f411e4a3b13ec561 = L.polyline(
        [[-12.1020087, -77.0016473], [-12.1020063, -77.001469]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_86d21cd54979cc5877adb8eb2ebd6bb3 = L.polyline(
        [[-12.1020087, -77.0016473], [-12.1031961, -77.0014569]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e426f6b8c4e43fe8bdcf0ee5dddea03c = L.polyline(
        [[-12.0858984, -76.989323], [-12.0859966, -76.9898981]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0fc53b893d86524d75fce5e516fa0262 = L.polyline(
        [[-12.1016955, -77.0062851], [-12.1018611, -77.0056468]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f2c6741033dee0ef78fedc0157237b0c = L.polyline(
        [[-12.1016955, -77.0062851], [-12.101015, -77.0062868]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7cf46678310e64f32b8fd69dd26a0d41 = L.polyline(
        [[-12.0874729, -77.0037877], [-12.0879069, -77.0037088]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e63859f23811c86e2f48d2d84ccb7d7a = L.polyline(
        [[-12.0874729, -77.0037877], [-12.0881427, -77.0054383]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2184de3281de2ef675a590ff8fcf185c = L.polyline(
        [[-12.0853284, -76.9869401], [-12.0856225, -76.9878346]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8fdb31ff527cedb1174ad88e5359d78e = L.polyline(
        [[-12.1019212, -77.0096821], [-12.1016097, -77.0101367]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7e66bc3cfb1fbe959056409da1b70cd = L.polyline(
        [[-12.1019212, -77.0096821], [-12.1042634, -77.0094126]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2cd2e1daf83c70e2c45c35df2d24a351 = L.polyline(
        [[-12.0966743, -77.0098011], [-12.0986242, -77.0105843]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e6eb1bd14108999bfaa7d282ec61ccd0 = L.polyline(
        [[-12.0966743, -77.0098011], [-12.0966951, -77.0095667]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d20af09abfb778ff127f556776732413 = L.polyline(
        [[-12.1058121, -77.0091015], [-12.1069804, -77.0088518]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9fb844496b4aeba29cdae98c9ed4c02a = L.polyline(
        [[-12.1058121, -77.0091015], [-12.1051525, -77.0092396]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d5ddfa8861089c4a4783c0229f70cb77 = L.polyline(
        [[-12.1069804, -77.0088518], [-12.1075537, -77.0087256]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a135ac58206dcc274907c13e63acdcf5 = L.polyline(
        [[-12.1069804, -77.0088518], [-12.1058121, -77.0091015]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e6f8b6c4be55d0ad9c994cdc7b8f80cc = L.polyline(
        [[-12.1075537, -77.0087256], [-12.107465, -77.0081537]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2bae937178ee1141681a15bbb0e74db6 = L.polyline(
        [[-12.1075537, -77.0087256], [-12.1069804, -77.0088518]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d8dece5ab4ea1019d1f824b1e13f215d = L.polyline(
        [[-12.1084376, -77.0009272], [-12.1085589, -77.0009054]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0d2dff04d510771abe77ab342bff1412 = L.polyline(
        [[-12.1086641, -77.0008901], [-12.1086464, -77.0007456]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e10d5ca971e8e8fcb7192388f0fb738e = L.polyline(
        [[-12.1086641, -77.0008901], [-12.1088973, -77.0009506]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_930e1716054a04e1c08b162716b688c8 = L.polyline(
        [[-12.1087051, -77.0013281], [-12.1086641, -77.0008901]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cb932337e7c2460b4ed5e5445e7744b1 = L.polyline(
        [[-12.1058401, -77.0041795], [-12.1058224, -77.0050953]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ebf2dca253fc02278c1118e76e7dd58e = L.polyline(
        [[-12.1058401, -77.0041795], [-12.1066784, -77.0039595]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4eb200486f8798ed5c052295d984ceb4 = L.polyline(
        [[-12.1068619, -76.9966718], [-12.1067957, -76.9958628]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7f86d409413d0697553b010fd502884 = L.polyline(
        [[-12.1068619, -76.9966718], [-12.1067158, -76.9966804]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c7de5e31f57d50ddd29412371e1048b3 = L.polyline(
        [[-12.1067158, -76.9966804], [-12.1067863, -76.9974607]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_961ecc2a24b10cbc411994482f6cd98e = L.polyline(
        [[-12.1067158, -76.9966804], [-12.1068619, -76.9966718]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2162a3242d19d7e911e3e7a43f2c15a6 = L.polyline(
        [[-12.0865083, -76.9958596], [-12.0865164, -76.996616]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_951ea18e5c554aa7c7815701c1156db9 = L.polyline(
        [[-12.0849423, -76.9969649], [-12.0850746, -76.9969449]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_909830f1cdac1174c03c9bbaf032451a = L.polyline(
        [[-12.0850746, -76.9969449], [-12.0850554, -76.9968174]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ba67cd83b65d2a606be66054136c36aa = L.polyline(
        [[-12.0850746, -76.9969449], [-12.0858487, -76.9968227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0f067e5f47dad8cbb1fc05e717698f6b = L.polyline(
        [[-12.1015263, -77.0105628], [-12.1016097, -77.0101367]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8e2b518630a1b6cff30349301698f8a1 = L.polyline(
        [[-12.0857983, -77.0021209], [-12.0853623, -77.0021821]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_453c24c4ebb6cf41e6f00c253b87f382 = L.polyline(
        [[-12.0857983, -77.0021209], [-12.0860291, -77.0037277]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_37a09822e048c93fdecc099721751fbf = L.polyline(
        [[-12.1052083, -77.0011795], [-12.1052135, -77.0010026]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2413ae6eb32f7e0c172577efcd556c49 = L.polyline(
        [[-12.1052083, -77.0011795], [-12.1058128, -77.00112]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ad47eb7f09bea986320090ff18f87a2 = L.polyline(
        [[-12.0874312, -77.0000866], [-12.0874619, -77.0003062]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_db747274f75d1158d912bfe668bd810c = L.polyline(
        [[-12.0874102, -76.9999337], [-12.0874312, -77.0000866]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2372b6cd7a7bf17ad72f9693416e6af4 = L.polyline(
        [[-12.0837049, -77.0007791], [-12.0835877, -77.0000022]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a343ac35a26d1e98629bf76de1b538a5 = L.polyline(
        [[-12.0837214, -77.0008996], [-12.0837049, -77.0007791]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fa1e74bc53edb96c4e0eff613de9e9ad = L.polyline(
        [[-12.0839218, -77.0023843], [-12.0843463, -77.0023247]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ecc9ea5913a9dfe360e36d8b206bfc1d = L.polyline(
        [[-12.0839218, -77.0023843], [-12.0837214, -77.0008996]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_27a52e0b3ea994331d764f91728e97cf = L.polyline(
        [[-12.1047579, -76.9941036], [-12.1051603, -76.9943815]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6287e288bf08ff724137ae6381764f8d = L.polyline(
        [[-12.1047579, -76.9941036], [-12.1044067, -76.9936019]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4f06f47c742fbf2fb0fd9d686e7850a2 = L.polyline(
        [[-12.1047579, -76.9941036], [-12.1033559, -76.994875]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b8aa7746d0061068589a548ed61c91f5 = L.polyline(
        [[-12.1051603, -76.9943815], [-12.1056849, -76.9946068]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_565b34c4679ab9dc21bb9da55dd14a2f = L.polyline(
        [[-12.1051603, -76.9943815], [-12.1047579, -76.9941036]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ff338f26236d4c94d5a684c3b87c56c5 = L.polyline(
        [[-12.1056849, -76.9946068], [-12.1062093, -76.9948268]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4adbca046a384350fec6199e6602f5f6 = L.polyline(
        [[-12.1056849, -76.9946068], [-12.1051603, -76.9943815]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bedca7e052ff953791ad8daa34eaac86 = L.polyline(
        [[-12.1062093, -76.9948268], [-12.1067548, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_468670e015b3fa017124d28dd3e29cf8 = L.polyline(
        [[-12.1062093, -76.9948268], [-12.1056849, -76.9946068]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8543d04702e6d72a6339cc7ac5163139 = L.polyline(
        [[-12.1067548, -76.9950574], [-12.1062093, -76.9948268]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_df9d18ebba02841023ea38b4e95e7fe5 = L.polyline(
        [[-12.1067548, -76.9950574], [-12.1068912, -76.9951164]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0ab0d97c339bfede82691225ffecbb2f = L.polyline(
        [[-12.1067548, -76.9950574], [-12.1067158, -76.9966804]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e612386cccb780585354abdc032a27e2 = L.polyline(
        [[-12.1068912, -76.9951164], [-12.1091996, -76.9961227]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b6fbac24ce172a284bd3a9777d0940fb = L.polyline(
        [[-12.1068912, -76.9951164], [-12.1067548, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2398fb4186d79ec08b95ac86fb5f0bc5 = L.polyline(
        [[-12.1091996, -76.9961227], [-12.1068912, -76.9951164]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9a54fc476db95ca423d3fea07d69f961 = L.polyline(
        [[-12.1091996, -76.9961227], [-12.1100558, -76.9953542]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2f8656d703619419e983a47a3ac697ca = L.polyline(
        [[-12.1091996, -76.9961227], [-12.1089604, -76.9963374]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2de7a60eb3bbd37ef806ff877bb2aae5 = L.polyline(
        [[-12.0868256, -77.0039076], [-12.0869329, -77.0046708]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_99d0dc2e0cb0f6efa0406fcb1fd5947d = L.polyline(
        [[-12.0868256, -77.0039076], [-12.0874729, -77.0037877]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e7f8170208293b622d8ae9fffd2e4226 = L.polyline(
        [[-12.1007579, -76.998521], [-12.1006062, -76.9985525]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_62589fd0908e1121b9332670b999c4b5 = L.polyline(
        [[-12.1007579, -76.998521], [-12.101317, -76.9984034]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5b4498847e1cb5f24dbdb4c81f1b9c22 = L.polyline(
        [[-12.1115635, -76.998638], [-12.1115904, -76.9990818]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf72a2bf48e8777f0cd31fa7da500db3 = L.polyline(
        [[-12.101015, -77.0062868], [-12.101383, -77.0044625]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_467ce4d0caa9a3e87009205c7d5ae774 = L.polyline(
        [[-12.101015, -77.0062868], [-12.1016955, -77.0062851]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_80c0199429dbd34d603d1f868e01a316 = L.polyline(
        [[-12.101015, -77.0062868], [-12.100864, -77.0062909]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_852a06ea32ce5899650e3ee8e62e8e1d = L.polyline(
        [[-12.1116074, -77.0011789], [-12.11168, -77.0016435]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9512c7be003a36a7b2d15f8fbb67981e = L.polyline(
        [[-12.1033559, -76.994875], [-12.1028157, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7ffd355eaa96b77ca31f70234a105b87 = L.polyline(
        [[-12.1033559, -76.994875], [-12.1031794, -76.9942478]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a69d3f371f60705bd7d1a5d5a58f5eb6 = L.polyline(
        [[-12.1033559, -76.994875], [-12.1047579, -76.9941036]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5c9ed622346e62883eff8435c7b7def4 = L.polyline(
        [[-12.1032022, -77.0012966], [-12.1031961, -77.0014569]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fb7220e92d7132c807ed49b8a7895688 = L.polyline(
        [[-12.1032022, -77.0012966], [-12.1020063, -77.001469]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_46972e9d32bca8d0b21e8d865066a9e4 = L.polyline(
        [[-12.1028157, -76.9950574], [-12.1028104, -76.9967231]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2c9ea66cf7bc439a0a40f1f1ab6c8ed0 = L.polyline(
        [[-12.1028157, -76.9950574], [-12.1033559, -76.994875]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5035bc0bd2d26483831d9297e3530c42 = L.polyline(
        [[-12.101101, -77.0016026], [-12.1007774, -77.0016519]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c558ac6da36c39855640aaed6cc4be01 = L.polyline(
        [[-12.0882818, -77.0034626], [-12.0877823, -77.0035313]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cdc012436857cfe8e44ba2c7a35709f8 = L.polyline(
        [[-12.0925075, -77.003024], [-12.0924897, -77.0028672]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7f6254c653ae282a949b95f9aa201366 = L.polyline(
        [[-12.0925075, -77.003024], [-12.0940535, -77.0027968]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_74a10a32b81424afdedd7094184a6487 = L.polyline(
        [[-12.1052135, -77.0010026], [-12.1032022, -77.0012966]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_604c7d718db55350ecaabdcc5fc5473b = L.polyline(
        [[-12.0924897, -77.0028672], [-12.0925075, -77.003024]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2f1ae364fc899e15d79619e10f85de2a = L.polyline(
        [[-12.0924897, -77.0028672], [-12.0908539, -77.0030984]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ea6edf54199dfbf56d6d1509ec2d92bc = L.polyline(
        [[-12.1007774, -77.0016519], [-12.099623, -77.0018216]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7f3ac22b5073785d62d46213ec7c27da = L.polyline(
        [[-12.1007774, -77.0016519], [-12.1008068, -77.0018493]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_573e9229f429823bb37307fd52a556aa = L.polyline(
        [[-12.0910825, -77.004498], [-12.0912115, -77.0048275]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9136213813b509366b009a1af43093c1 = L.polyline(
        [[-12.0910825, -77.004498], [-12.0909636, -77.0039411]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f1a0570f24a97b3437d42c51954049c1 = L.polyline(
        [[-12.1058402, -77.0041095], [-12.1058401, -77.0041795]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_221d705a343dee36b98213ffa6c671e9 = L.polyline(
        [[-12.0987806, -77.0106047], [-12.0989498, -77.0106179]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c8e57bf337a592aefa34900261738f23 = L.polyline(
        [[-12.0989498, -77.0106179], [-12.0994497, -77.0106229]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cd51ccc8e334ca6b31dc1b30a7e27b83 = L.polyline(
        [[-12.0994497, -77.0106229], [-12.0996298, -77.0106147]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_16d2ea2ea01b3e7dced62cbaae5ef692 = L.polyline(
        [[-12.0996298, -77.0106147], [-12.1005752, -77.0104726]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_783a59365f5fb95d6122fa99797c83cb = L.polyline(
        [[-12.1116474, -77.0000642], [-12.1116668, -77.0003276]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8171e7e3136e8a33f2bb1e2c3f79aed0 = L.polyline(
        [[-12.1005752, -77.0104726], [-12.1012826, -77.0105078]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_154bcf73a30210fa5532343c1ef1c82e = L.polyline(
        [[-12.1008068, -77.0018493], [-12.1011324, -77.001791]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_24f3d4f7b7cd27568a93939df064a645 = L.polyline(
        [[-12.0841794, -76.9901443], [-12.0841846, -76.9895324]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7e4c56c892c4acc88fda90fd8431a7a9 = L.polyline(
        [[-12.0841794, -76.9901443], [-12.0859966, -76.9898981]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e85696cd4c06bbab5730c3d4d2e0ac54 = L.polyline(
        [[-12.105165, -77.0050843], [-12.1058224, -77.0050953]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d57aa12b7e4bb923f61ca8fcbe8180cd = L.polyline(
        [[-12.105165, -77.0050843], [-12.1040031, -77.0050898]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cb86274cc5c122fc29d3e288666e036e = L.polyline(
        [[-12.105165, -77.0050843], [-12.1051712, -77.004498]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ee3318a52655c713d74c7369b3fc4151 = L.polyline(
        [[-12.1072326, -77.0011069], [-12.1084376, -77.0009272]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e3ad44c0d0e9db45f4cf5c7b72faf83a = L.polyline(
        [[-12.0946611, -77.0091412], [-12.094079, -77.0088047]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6da9a4985ce7b726275bd7ba2abcda1e = L.polyline(
        [[-12.0946611, -77.0091412], [-12.0936622, -77.0096659]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6e718f46f67f2105f6cdd1088ec3818f = L.polyline(
        [[-12.1059094, -77.0011141], [-12.1085454, -77.0007606]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c57c377eac7a66f747f3f08ac460a507 = L.polyline(
        [[-12.1059094, -77.0011141], [-12.1072326, -77.0011069]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ff243b7ca8619cc8507a5db64c34ca5e = L.polyline(
        [[-12.1005602, -76.9945542], [-12.1004137, -76.9945804]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_06795073eaf387921864ab136d00412a = L.polyline(
        [[-12.1004137, -76.9945804], [-12.1004076, -76.9947242]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_31c3d51a7bddc0bea6f01087ac403f67 = L.polyline(
        [[-12.1004137, -76.9945804], [-12.0999425, -76.994653]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_69aa977e2f901b9bc1e673856f344811 = L.polyline(
        [[-12.1004076, -76.9947242], [-12.1005529, -76.9947054]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_28883dc04551f5eb75683d2980d89977 = L.polyline(
        [[-12.1005529, -76.9947054], [-12.1005602, -76.9945542]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e71893b92df628b274d4bffd7ee12abc = L.polyline(
        [[-12.1005529, -76.9947054], [-12.101149, -76.9946296]],
        {"bubblingMouseEvents": true, "color": "gray", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "gray", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8d695e80ef01d96992200ea399db3aa5 = L.polyline(
        [[-12.1074306, -76.9995081], [-12.1081908, -76.9994421]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f69d90eb87dc6c87230d687a55159662 = L.polyline(
        [[-12.1081908, -76.9994421], [-12.1086949, -76.9994137]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_29e2b7aa7669a5b59f69e649c90aa8b5 = L.polyline(
        [[-12.1086949, -76.9994137], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_791282b7c4b85ff6c5d3c5e7320d3985 = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1099407, -76.9993228]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f9dfecd9369c9280821bf4ec53b59d41 = L.polyline(
        [[-12.1099407, -76.9993228], [-12.1105482, -76.9992839]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_44f97f5fb6ebe6455c40f01221eb6706 = L.polyline(
        [[-12.1105482, -76.9992839], [-12.1104886, -76.9983699]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8f224ef093b1e7c46bb729021439b357 = L.polyline(
        [[-12.1104886, -76.9983699], [-12.1104314, -76.99745]],
        {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "red", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3294ed9823031304ce68c2d375081d9b = L.polyline(
        [[-12.1104314, -76.99745], [-12.1104886, -76.9983699]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1ade14bf4f3a5310444caa25fee330a5 = L.polyline(
        [[-12.1104886, -76.9983699], [-12.1105482, -76.9992839]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d04d6df6640a28c79bd02230bb8db571 = L.polyline(
        [[-12.1105482, -76.9992839], [-12.1099407, -76.9993228]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e78f11bb3d8184d6fea29aac74d290bb = L.polyline(
        [[-12.1099407, -76.9993228], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_439f79433d164f06e13e6b4c82d05a51 = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1093613, -77.0003974]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_db6d4a98e731acdd946d0a8a6b1e8342 = L.polyline(
        [[-12.1093613, -77.0003974], [-12.1086129, -77.0005013]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c0111b46f47d8efa89c89ab6f5d3e586 = L.polyline(
        [[-12.1086129, -77.0005013], [-12.1085202, -77.0005154]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ae620fb34c73c8f66af013acfa4cfa69 = L.polyline(
        [[-12.1085202, -77.0005154], [-12.1085454, -77.0007606]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0aefd725b10117b75785d109eb010fab = L.polyline(
        [[-12.1085454, -77.0007606], [-12.1085589, -77.0009054]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5627e5036a575a893c35bc037714f0bd = L.polyline(
        [[-12.1085589, -77.0009054], [-12.1080064, -77.0021387]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_638269872f9ae7c0aece6e077af20228 = L.polyline(
        [[-12.1080064, -77.0021387], [-12.1076544, -77.0025831]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a5218338e5249fb4932fc17c84e0b267 = L.polyline(
        [[-12.1076544, -77.0025831], [-12.1077271, -77.0026449]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf1738f1d69de113baa8e11bdd7f80e9 = L.polyline(
        [[-12.1077271, -77.0026449], [-12.1080745, -77.0021924]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fd619ab72a0820373e6754294d411568 = L.polyline(
        [[-12.1080745, -77.0021924], [-12.1087051, -77.0013281]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5303a732aba74fe6cd32c2fdd20c382f = L.polyline(
        [[-12.1087051, -77.0013281], [-12.1086641, -77.0008901]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_df566cc5a49b8156cafc364720c282b6 = L.polyline(
        [[-12.1086641, -77.0008901], [-12.1086464, -77.0007456]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_599d73f373f791fb90c1aeb901366666 = L.polyline(
        [[-12.1086464, -77.0007456], [-12.1088237, -77.0007202]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_abdd749ee43adc59d71846d1afb66de4 = L.polyline(
        [[-12.1088237, -77.0007202], [-12.1093657, -77.0006423]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_10e4ad9b15f03037377fa8de16e6b0b6 = L.polyline(
        [[-12.1093657, -77.0006423], [-12.1095626, -77.0006189]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_83e18e77d3a1619a1699f4cbf9339da6 = L.polyline(
        [[-12.1095626, -77.0006189], [-12.1109107, -77.0004309]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3592a7797503e7a6e64539370564ef04 = L.polyline(
        [[-12.1109107, -77.0004309], [-12.1116074, -77.0011789]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9860132f0394c039a45b2cb7266d8f75 = L.polyline(
        [[-12.1116074, -77.0011789], [-12.11168, -77.0016435]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7850d954f57eb5bc64e55381228c8f22 = L.polyline(
        [[-12.11168, -77.0016435], [-12.1117273, -77.0023525]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_97836c002e8238ad0743c61d4118a185 = L.polyline(
        [[-12.1117273, -77.0023525], [-12.1117861, -77.0034511]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9efa272c7c818102bfd071c84362fc38 = L.polyline(
        [[-12.1117861, -77.0034511], [-12.1117928, -77.0035463]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_94f606f5fcddbd487b89b8cfa35e6fd9 = L.polyline(
        [[-12.1117928, -77.0035463], [-12.1119146, -77.0053612]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0c0d346de09568894c78ef100af6a18a = L.polyline(
        [[-12.1119146, -77.0053612], [-12.1119763, -77.0062896]],
        {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a4ebe4a540521d6afcb3ccadd6c43c77 = L.polyline(
        [[-12.1119763, -77.0062896], [-12.1118309, -77.0063018]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_75b5fdffb0417a80cb4e47e8fbe1c143 = L.polyline(
        [[-12.1118309, -77.0063018], [-12.109192, -77.0065068]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a70ca43fb9362f440431f6f404ac2d34 = L.polyline(
        [[-12.109192, -77.0065068], [-12.1093179, -77.0061204]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_28b787053432cf63c07cba40ae7f3eb5 = L.polyline(
        [[-12.1093179, -77.0061204], [-12.1092608, -77.0060725]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4ca40d37f9f1d33cc2c3d935836cf9a8 = L.polyline(
        [[-12.1092608, -77.0060725], [-12.1090728, -77.0044729]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1cdeade0b761b837f317711362e0e9cd = L.polyline(
        [[-12.1090728, -77.0044729], [-12.1082148, -77.0037881]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bf4b3f3bc0384a0ba70e41dd19350fd0 = L.polyline(
        [[-12.1082148, -77.0037881], [-12.1089147, -77.002907]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c08666bc89bae2d51770e49df419facd = L.polyline(
        [[-12.1089147, -77.002907], [-12.1095917, -77.0020574]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_556d04bedae78b43343f9a45a480d3c0 = L.polyline(
        [[-12.1095917, -77.0020574], [-12.1088973, -77.0009506]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_192560b0f0c9bba35a91b19c24838829 = L.polyline(
        [[-12.1088973, -77.0009506], [-12.1088237, -77.0007202]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_79291822bedd83297c73020a8661ae74 = L.polyline(
        [[-12.1088237, -77.0007202], [-12.1093657, -77.0006423]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e3f6c4b11f3b59413d88e652527593f9 = L.polyline(
        [[-12.1093657, -77.0006423], [-12.1093613, -77.0003974]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_49a05ccf505b9ef9f7f7fcdf99a9c10a = L.polyline(
        [[-12.1093613, -77.0003974], [-12.1093153, -76.9993696]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_93611bcf078e6883010a521d79db7700 = L.polyline(
        [[-12.1093153, -76.9993696], [-12.1086949, -76.9994137]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_46641e8c8f2d084ea3d159ffc49a0cf1 = L.polyline(
        [[-12.1086949, -76.9994137], [-12.1081908, -76.9994421]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_674d26f228d3d8b02a93ccbc5a3ffa95 = L.polyline(
        [[-12.1081908, -76.9994421], [-12.1074306, -76.9995081]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ae1125e2ab8d38e0b2c781a5a9da5fa6 = L.polyline(
        [[-12.1074306, -76.9995081], [-12.107035, -76.9995407]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a336d26e448313264b69cf80cb3995ef = L.polyline(
        [[-12.107035, -76.9995407], [-12.1069975, -76.9986622]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_57354bac983b0ea17f38371c6d40b270 = L.polyline(
        [[-12.1069975, -76.9986622], [-12.1069678, -76.998027]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_785f655acea908b79e7cab423bb5f42b = L.polyline(
        [[-12.1069678, -76.998027], [-12.1068619, -76.9966718]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_60ee7e7e7b40705e960f97ff4f06f8f8 = L.polyline(
        [[-12.1068619, -76.9966718], [-12.1067957, -76.9958628]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_17a3d80b62a871c5d72b29ef654bde18 = L.polyline(
        [[-12.1067957, -76.9958628], [-12.1068912, -76.9951164]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c0ffcf9e775f28dc51a07375fb20c66b = L.polyline(
        [[-12.1068912, -76.9951164], [-12.1067548, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e34b638aec53719fac15bbed1dafd21d = L.polyline(
        [[-12.1067548, -76.9950574], [-12.1062093, -76.9948268]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7d1eb374d0807c237cab116b79dd12a1 = L.polyline(
        [[-12.1062093, -76.9948268], [-12.1056849, -76.9946068]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c3be19d988aa0cd73e17fedafa33a4ff = L.polyline(
        [[-12.1056849, -76.9946068], [-12.1051603, -76.9943815]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6432b11744b3906c4d1528eef5aa14ab = L.polyline(
        [[-12.1051603, -76.9943815], [-12.1047579, -76.9941036]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_72ff121f91db408fb9f7a1091ca12eb5 = L.polyline(
        [[-12.1047579, -76.9941036], [-12.1044067, -76.9936019]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ffadbad3635871fec0efb5e408fb28b0 = L.polyline(
        [[-12.1044067, -76.9936019], [-12.1043287, -76.9934789]],
        {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b93003b44bb92b61c00c58ad027fb257 = L.polyline(
        [[-12.1043287, -76.9934789], [-12.1031291, -76.9941217]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ad6e027c08ebab9c495f03df4e42baee = L.polyline(
        [[-12.1031291, -76.9941217], [-12.1031794, -76.9942478]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f639946eb0e42917c38de98da7136cfc = L.polyline(
        [[-12.1031794, -76.9942478], [-12.1033559, -76.994875]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1eccb4340324fc978ebc371d374679e1 = L.polyline(
        [[-12.1033559, -76.994875], [-12.1028157, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1e3c92815c6cd500a305b3a23a02a700 = L.polyline(
        [[-12.1028157, -76.9950574], [-12.1028104, -76.9967231]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_47fd74c03c090682ab72b343b7b6120d = L.polyline(
        [[-12.1028104, -76.9967231], [-12.1028016, -76.998129]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_40dbf0c100c4bcaf91fe1a19052f6e78 = L.polyline(
        [[-12.1028016, -76.998129], [-12.1022283, -76.9982372]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0c8d800308ae76e167ce7fe4aa694862 = L.polyline(
        [[-12.1022283, -76.9982372], [-12.1017759, -76.9983216]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6e6d5eaeb228b12d990f6fced1ad90c8 = L.polyline(
        [[-12.1017759, -76.9983216], [-12.101317, -76.9984034]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_28b3e26789a8a45a116e1b51f0f58a6d = L.polyline(
        [[-12.101317, -76.9984034], [-12.1007579, -76.998521]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5907ac78ccf8e4ac07acb2c7a4978b47 = L.polyline(
        [[-12.1007579, -76.998521], [-12.1006062, -76.9985525]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cebbcffc8bf7c2100bdc0345bf9254f5 = L.polyline(
        [[-12.1006062, -76.9985525], [-12.100148, -76.9986414]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_54df049ba9b73ced9a925421567a8b17 = L.polyline(
        [[-12.100148, -76.9986414], [-12.0993015, -76.9991183]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4bdaf26e16b1acb515405554d536858e = L.polyline(
        [[-12.0993015, -76.9991183], [-12.0985828, -77.0000517]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_dae55dda48094fa4d4af73a0c87eaa25 = L.polyline(
        [[-12.0985828, -77.0000517], [-12.0984517, -77.0002287]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_35cc8428da56f2982262d3e594fd6b97 = L.polyline(
        [[-12.0984517, -77.0002287], [-12.0978677, -77.0014019]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9b08b5ea016c2cb44e4992800d473313 = L.polyline(
        [[-12.0978677, -77.0014019], [-12.0979134, -77.0020706]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b19974ba6d1508a3f669304b5035cd69 = L.polyline(
        [[-12.0979134, -77.0020706], [-12.097939, -77.0022505]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2b75df28f06a988c7a2c55156c691e80 = L.polyline(
        [[-12.097939, -77.0022505], [-12.0980258, -77.002893]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_70303a2164504cb3dd2a3a6872b4328f = L.polyline(
        [[-12.0980258, -77.002893], [-12.0981497, -77.00416]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_858f003aa8f45f16d3367d4a87f3eb36 = L.polyline(
        [[-12.0981497, -77.00416], [-12.0980089, -77.0054184]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9cddce98192115e44df4ee8393670884 = L.polyline(
        [[-12.0980089, -77.0054184], [-12.0978217, -77.0060221]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_be24c5a6e48196293befc71fe1d2071b = L.polyline(
        [[-12.0978217, -77.0060221], [-12.0976463, -77.0065916]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_21474c66b7a5948425fda35140892b70 = L.polyline(
        [[-12.0976463, -77.0065916], [-12.0974683, -77.0071628]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_427af2be5ece91530bb497df44c888b4 = L.polyline(
        [[-12.0974683, -77.0071628], [-12.0968986, -77.0089528]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_300c60acda67b510be083bcf62dd56a1 = L.polyline(
        [[-12.0968986, -77.0089528], [-12.0966951, -77.0095667]],
        {"bubblingMouseEvents": true, "color": "orange", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "orange", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d3e343507c630a69da7ab3a0691cef82 = L.polyline(
        [[-12.0966951, -77.0095667], [-12.0954257, -77.0090002]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_543b641957538e4c5636eb4c57f1983f = L.polyline(
        [[-12.0954257, -77.0090002], [-12.0953911, -77.0089576]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f3c52782c05fa7eaca1412d3b2a13c64 = L.polyline(
        [[-12.0953911, -77.0089576], [-12.0946909, -77.0090793]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_363d71a13f4c23fa3754b457c639dd5c = L.polyline(
        [[-12.0946909, -77.0090793], [-12.0946611, -77.0091412]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5c7356d0f9a3305a9c5108f2e6920ed3 = L.polyline(
        [[-12.0946611, -77.0091412], [-12.094079, -77.0088047]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3709a142f6c53622740353e61a25a2ea = L.polyline(
        [[-12.094079, -77.0088047], [-12.0938739, -77.0075724]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_53f8eda9dfb62c5f0cde194100ad73a1 = L.polyline(
        [[-12.0938739, -77.0075724], [-12.0935534, -77.0060876]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_18d587616ed0d5fa2e1ed31f65316d77 = L.polyline(
        [[-12.0935534, -77.0060876], [-12.0930249, -77.0060954]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a185dbea24949aac9858fab11d9c080e = L.polyline(
        [[-12.0930249, -77.0060954], [-12.0924894, -77.0059674]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_4caf7541e4deb98ff8df8fd27d1aef9b = L.polyline(
        [[-12.0924894, -77.0059674], [-12.091927, -77.0056455]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_233033f2584cf4a018920cbda90d7299 = L.polyline(
        [[-12.091927, -77.0056455], [-12.0912115, -77.0048275]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6812f04107a909f454ca45399a72ef05 = L.polyline(
        [[-12.0912115, -77.0048275], [-12.0910825, -77.004498]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_61f790e3df402e63d7a7cf691c65eb1e = L.polyline(
        [[-12.0910825, -77.004498], [-12.0909636, -77.0039411]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_738c314bbe33f3b15b4ac157a66e9b28 = L.polyline(
        [[-12.0909636, -77.0039411], [-12.0908793, -77.0032643]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_924db1a86a41b03cffb83bf6d61ff31d = L.polyline(
        [[-12.0908793, -77.0032643], [-12.0908539, -77.0030984]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8db25ecac9590924beaebd16b5823a4c = L.polyline(
        [[-12.0908539, -77.0030984], [-12.0895838, -77.0032727]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5cc09491d12372831e7cbd82a0305069 = L.polyline(
        [[-12.0895838, -77.0032727], [-12.0889282, -77.003369]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_acfef1033e16a0b07c9fb3a52e9ed849 = L.polyline(
        [[-12.0889282, -77.003369], [-12.0882818, -77.0034626]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_af9f713c3d01a3a62a9d44b5afac53ba = L.polyline(
        [[-12.0882818, -77.0034626], [-12.0877823, -77.0035313]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f8756b678a44d1d9a8b19d314ffff61d = L.polyline(
        [[-12.0877823, -77.0035313], [-12.0874419, -77.0035715]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6b1ec6423c1def79f9ba170eb69117c2 = L.polyline(
        [[-12.0874419, -77.0035715], [-12.0874729, -77.0037877]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d85cb76fc3a9f8261d2bda2bcb8db21f = L.polyline(
        [[-12.0874729, -77.0037877], [-12.0881427, -77.0054383]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b23edf1e8d5d28d07d9a71834c0ed712 = L.polyline(
        [[-12.0881427, -77.0054383], [-12.0875206, -77.0055279]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_590405751b970a0ba3ba8e3c5d2114b3 = L.polyline(
        [[-12.0875206, -77.0055279], [-12.0870574, -77.0055946]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_fc8038d6fde3c789f1d4152d6ae8f556 = L.polyline(
        [[-12.0870574, -77.0055946], [-12.0857402, -77.0057842]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_01db345b2f3f7dde19ecf751e472acfc = L.polyline(
        [[-12.0857402, -77.0057842], [-12.0857563, -77.0058911]],
        {"bubblingMouseEvents": true, "color": "darkred", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkred", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_722d0cf2a12d13f54f6e2b0832ce0abb = L.polyline(
        [[-12.0857563, -77.0058911], [-12.0870721, -77.005702]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aff6b5558554dfa6bef43f3dd4473441 = L.polyline(
        [[-12.0870721, -77.005702], [-12.0870574, -77.0055946]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9c5e70ea897a8b27d92168a8edecd103 = L.polyline(
        [[-12.0870574, -77.0055946], [-12.0869329, -77.0046708]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_920a7c7125a36848808e68a632c54fe0 = L.polyline(
        [[-12.0869329, -77.0046708], [-12.0868256, -77.0039076]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7013ac5c8aa20345ed85743a911681a4 = L.polyline(
        [[-12.0868256, -77.0039076], [-12.0874729, -77.0037877]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_43ec27cf793122db603da4742dafd838 = L.polyline(
        [[-12.0874729, -77.0037877], [-12.0879069, -77.0037088]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_48a373c0e7c8865de023cc4e47ca94bd = L.polyline(
        [[-12.0879069, -77.0037088], [-12.0883076, -77.003643]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7d1c433a7b7a9b6716252f14345d1dab = L.polyline(
        [[-12.0883076, -77.003643], [-12.0882818, -77.0034626]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_836c3a651eaf08a23b499aedb1723494 = L.polyline(
        [[-12.0882818, -77.0034626], [-12.0877823, -77.0035313]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3dfb9cdb2409ff24104c0fa431f22059 = L.polyline(
        [[-12.0877823, -77.0035313], [-12.0874419, -77.0035715]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3e8b0257f8c05292ef18c5f6c0b5fea7 = L.polyline(
        [[-12.0874419, -77.0035715], [-12.0860291, -77.0037277]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b75d82c6ea4db84eb56671af36ba14b0 = L.polyline(
        [[-12.0860291, -77.0037277], [-12.0857983, -77.0021209]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_af9407f5a3693b4016a2d93781ab6f64 = L.polyline(
        [[-12.0857983, -77.0021209], [-12.0853623, -77.0021821]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_20edf6fa8453a04b21d61057c86352be = L.polyline(
        [[-12.0853623, -77.0021821], [-12.0850212, -77.00223]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f96d273a5f62c07f696554a527201056 = L.polyline(
        [[-12.0850212, -77.00223], [-12.0849062, -77.0022461]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e3f219e2fcb6ad108cb0a307f1c09c95 = L.polyline(
        [[-12.0849062, -77.0022461], [-12.0843463, -77.0023247]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_395daed7376388aa98e39fe2c289e69a = L.polyline(
        [[-12.0843463, -77.0023247], [-12.0839218, -77.0023843]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_31ac659043999baa1541f61fd378b8ca = L.polyline(
        [[-12.0839218, -77.0023843], [-12.0837214, -77.0008996]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_263612f0d9caecd53302c17eb287a3c6 = L.polyline(
        [[-12.0837214, -77.0008996], [-12.0837049, -77.0007791]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_11542a7c07f61a86420a252c3aa79739 = L.polyline(
        [[-12.0837049, -77.0007791], [-12.0835877, -77.0000022]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_737c70fc6ae4679efd309ba044ec6267 = L.polyline(
        [[-12.0835877, -77.0000022], [-12.0834988, -76.9993555]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_641e2e500f0550df24838e5ec0dd12b4 = L.polyline(
        [[-12.0834988, -76.9993555], [-12.084136, -76.9992288]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_50eb6441bb39db6abaa4683a2c6b890f = L.polyline(
        [[-12.084136, -76.9992288], [-12.0847895, -76.9989822]],
        {"bubblingMouseEvents": true, "color": "darkblue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkblue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_175fd0eca2feda5899e546656ea3467c = L.polyline(
        [[-12.0847895, -76.9989822], [-12.0849518, -76.9989601]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5f998f2a9d5dc97185d85e64bf9ee5e7 = L.polyline(
        [[-12.0849518, -76.9989601], [-12.0846817, -76.9970042]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cc2c73dac4da76112e52c3b0a5136172 = L.polyline(
        [[-12.0846817, -76.9970042], [-12.0849423, -76.9969649]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b215249b3252f97c355c4ffb5d5fa704 = L.polyline(
        [[-12.0849423, -76.9969649], [-12.0850746, -76.9969449]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a8ced3e74012d795d694ae2c4a06fc0c = L.polyline(
        [[-12.0850746, -76.9969449], [-12.0850554, -76.9968174]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c43e2e1e5dc4fb7bf11e7bfe1e8ff1d5 = L.polyline(
        [[-12.0850554, -76.9968174], [-12.0849535, -76.996067]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f04a73aca7d74dd9aee3dc31fde0daef = L.polyline(
        [[-12.0849535, -76.996067], [-12.0847945, -76.994903]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3f74f0e6ef800ed936ccd30d1e3ca7f6 = L.polyline(
        [[-12.0847945, -76.994903], [-12.0846299, -76.9937074]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_bd4bd63dae6351685ff39994ec6cd171 = L.polyline(
        [[-12.0846299, -76.9937074], [-12.0845476, -76.993118]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5bc5f78ef0cb013b069f7273640363b7 = L.polyline(
        [[-12.0845476, -76.993118], [-12.0845339, -76.9930058]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_d5a40ca744f4b907ce19a22e7bf37e2b = L.polyline(
        [[-12.0845339, -76.9930058], [-12.0843042, -76.9913127]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_87fd6e3b46dbe4f27a143e400d019eb5 = L.polyline(
        [[-12.0843042, -76.9913127], [-12.084217, -76.9907105]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a262a14b2fa05a65bf66edee49bb86b9 = L.polyline(
        [[-12.084217, -76.9907105], [-12.0841794, -76.9901443]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_825de70fdd78ba3ea670580485501691 = L.polyline(
        [[-12.0841794, -76.9901443], [-12.0841846, -76.9895324]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_055b96062977533af81a6cdee7c0f45c = L.polyline(
        [[-12.0841846, -76.9895324], [-12.0842693, -76.9890509]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_df84a63624f17f0eb4ac2f3330fe22b0 = L.polyline(
        [[-12.0842693, -76.9890509], [-12.0839577, -76.9876924]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_63a93e4c3e56660b1875b6c1fe65e8c6 = L.polyline(
        [[-12.0839577, -76.9876924], [-12.0843981, -76.9873642]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_7d6f7ee98fb176f7864592749ef92804 = L.polyline(
        [[-12.0843981, -76.9873642], [-12.0848165, -76.9870982]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1520e0861edcae7291c8dad785d70931 = L.polyline(
        [[-12.0848165, -76.9870982], [-12.0846364, -76.986638]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_857411fd91565ae132d29f7f1b61e045 = L.polyline(
        [[-12.0846364, -76.986638], [-12.085112, -76.9864309]],
        {"bubblingMouseEvents": true, "color": "darkgreen", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkgreen", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e5b9cf8e750b366c22d37c8eebd28ed8 = L.polyline(
        [[-12.085112, -76.9864309], [-12.0853284, -76.9869401]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_993a8c99c5c6eab14c121dc3b8c1d421 = L.polyline(
        [[-12.0853284, -76.9869401], [-12.0856225, -76.9878346]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_84fc38ef21a13bf5a62c8ba65d3feaef = L.polyline(
        [[-12.0856225, -76.9878346], [-12.0858984, -76.989323]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_3f1ae3b6d0ddfe6c8de9719ecf037153 = L.polyline(
        [[-12.0858984, -76.989323], [-12.0859966, -76.9898981]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2091e91c300dedbe45fa341098cfdcfd = L.polyline(
        [[-12.0859966, -76.9898981], [-12.0860832, -76.9904258]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6402874aa6b225fee89e16ea645575f9 = L.polyline(
        [[-12.0860832, -76.9904258], [-12.086152, -76.9910328]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_125552698a65f02ed9316e6a53bea305 = L.polyline(
        [[-12.086152, -76.9910328], [-12.0863747, -76.9927348]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_acb053866f61d33f59d16e0328d64f13 = L.polyline(
        [[-12.0863747, -76.9927348], [-12.0863931, -76.9928313]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f5c229c7e025a738655cd8ac474e48b4 = L.polyline(
        [[-12.0863931, -76.9928313], [-12.0864193, -76.992999]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1c0e53379e12135e5e61d5ece0229624 = L.polyline(
        [[-12.0864193, -76.992999], [-12.086471, -76.9934154]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f810df3ac919d636bb0f8429f04d11b4 = L.polyline(
        [[-12.086471, -76.9934154], [-12.0866277, -76.9946397]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_acaa736f03273206f710a6c12169c9b3 = L.polyline(
        [[-12.0866277, -76.9946397], [-12.0865083, -76.9958596]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_ce93d35111d6505e8a0463668a58fbd6 = L.polyline(
        [[-12.0865083, -76.9958596], [-12.0865164, -76.996616]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_f53922d976f35c8b327bb3eae3cfcb56 = L.polyline(
        [[-12.0865164, -76.996616], [-12.0865309, -76.9967353]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2f91087965da2f03dae2593debefce07 = L.polyline(
        [[-12.0865309, -76.9967353], [-12.0870334, -76.9966592]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_aff886881b9e9ec3ab279ad9bac66234 = L.polyline(
        [[-12.0870334, -76.9966592], [-12.0873246, -76.9966289]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8901a023b1fc51f1fa4a529fd5f8be75 = L.polyline(
        [[-12.0873246, -76.9966289], [-12.0879707, -76.9965358]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_11b8d6e773d42f6c2a9aa00b3be9958c = L.polyline(
        [[-12.0879707, -76.9965358], [-12.0898827, -76.9962479]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_557be91b999a0cddb05550da382d0f43 = L.polyline(
        [[-12.0898827, -76.9962479], [-12.0914475, -76.9960266]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_1e2b9a87394273a01629cf3c21cd9004 = L.polyline(
        [[-12.0914475, -76.9960266], [-12.0921887, -76.9959242]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_68654818e056f21497c4d916f69ce34f = L.polyline(
        [[-12.0921887, -76.9959242], [-12.0928064, -76.9958478]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5d66e25f5feabaa5ca895b40a51980dc = L.polyline(
        [[-12.0928064, -76.9958478], [-12.0931421, -76.9957978]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_9fa4a78e5fdd7babd1501d310cceffde = L.polyline(
        [[-12.0931421, -76.9957978], [-12.0937882, -76.9956812]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0f2720c6519693e1e91690277dabf75a = L.polyline(
        [[-12.0937882, -76.9956812], [-12.0955591, -76.9954322]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5970ba929a85a5783125928d53b25c39 = L.polyline(
        [[-12.0955591, -76.9954322], [-12.0975663, -76.9951408]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_8bb407c9d89a5a445ec2c9b2d83334e7 = L.polyline(
        [[-12.0975663, -76.9951408], [-12.0988609, -76.9949562]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e2dc593cbaf6bf080c88784bcb92c19f = L.polyline(
        [[-12.0988609, -76.9949562], [-12.1004076, -76.9947242]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_87af2032a025da6086ddf99846765171 = L.polyline(
        [[-12.1004076, -76.9947242], [-12.1005529, -76.9947054]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_2e9ab7449fda5ac1a6babf80621806be = L.polyline(
        [[-12.1005529, -76.9947054], [-12.101149, -76.9946296]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6c5def159f8b4881aeea9da59e554686 = L.polyline(
        [[-12.101149, -76.9946296], [-12.1022271, -76.9944715]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_c301abc5ddb561754a1cc5374e0ca196 = L.polyline(
        [[-12.1022271, -76.9944715], [-12.1031794, -76.9942478]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_30a488fd13d0a644c2d81dbee61f767d = L.polyline(
        [[-12.1031794, -76.9942478], [-12.1044067, -76.9936019]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_95b1d4398c2242b99c8b2282067a9a16 = L.polyline(
        [[-12.1044067, -76.9936019], [-12.1047579, -76.9941036]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_5d76a55c60b374cb16b84a310f63dcef = L.polyline(
        [[-12.1047579, -76.9941036], [-12.1051603, -76.9943815]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_b204fbd7587b0e8ed91ca1b85e13fb65 = L.polyline(
        [[-12.1051603, -76.9943815], [-12.1056849, -76.9946068]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_cf09955d7937f89f95f03847d015cb54 = L.polyline(
        [[-12.1056849, -76.9946068], [-12.1062093, -76.9948268]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a8ebba942908633fb5ce15cc4acb9952 = L.polyline(
        [[-12.1062093, -76.9948268], [-12.1067548, -76.9950574]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_291fb7cc4ec39e33b97cca86bac84351 = L.polyline(
        [[-12.1067548, -76.9950574], [-12.1067158, -76.9966804]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_0accb7258151fe51b8b95199553ed108 = L.polyline(
        [[-12.1067158, -76.9966804], [-12.1067863, -76.9974607]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_6bcf4f812402b5afd10fa60921cd5674 = L.polyline(
        [[-12.1067863, -76.9974607], [-12.1068219, -76.9980456]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_19f206b7e2c0504fe7dfde690800d306 = L.polyline(
        [[-12.1068219, -76.9980456], [-12.1068408, -76.9986703]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_e061feb56f80b170d3d55816f2541862 = L.polyline(
        [[-12.1068408, -76.9986703], [-12.1068857, -76.9995527]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_154ac17d50f06d300533576d453dd18a = L.polyline(
        [[-12.1068857, -76.9995527], [-12.107035, -76.9995407]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);


    var poly_line_a8754d48e50a7ba07bce726dbc3f976a = L.polyline(
        [[-12.107035, -76.9995407], [-12.1074306, -76.9995081]],
        {"bubblingMouseEvents": true, "color": "pink", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "pink", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 5}
    ).addTo(map_12199ef0b8e62b6155eb542b69633944);

    }, []); 

  return (
    <div style={{position:'relative', flex:'1', width: '100.0%',
        height: '100.0%', top:'0',bottom:'0',left:'0',right:'0'}}>
      <div
        id="map_12199ef0b8e62b6155eb542b69633944"
        style={{
          position: 'absolute',
          flex:'1',
          width: '100.0%',
          height: '100.0%',
          top: '0',
          left: '0',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '120px',
          height: 'auto',
          backgroundColor: 'white',
          zIndex: '9999',
          fontSize: '12px',
          border: '2px solid grey',
          padding: '10px',
        }}
      >
        <b>Ruta a Seguir</b><br />
        <i
          style={{
            background: 'red',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        X a I
        <br />
        <i
          style={{
            background: 'blue',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        I a H
        <br />
        <i
          style={{
            background: 'green',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        H a G
        <br />
        <i
          style={{
            background: 'purple',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        G a F
        <br />
        <i
          style={{
            background: 'orange',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        F a D
        <br />
        <i
          style={{
            background: 'darkred',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        D a B
        <br />
        <i
          style={{
            background: 'darkblue',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        B a C
        <br />
        <i
          style={{
            background: 'darkgreen',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        C a A
        <br />
        <i
          style={{
            background: 'pink',
            width: '10px',
            height: '10px',
            float: 'left',
            marginRight: '5px',
          }}
        ></i>{' '}
        A a X
        <br />
      </div>
    </div>
  );
};

export default MapComponent;