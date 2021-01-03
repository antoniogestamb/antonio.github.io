var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_Output_2_1 = new ol.format.GeoJSON();
var features_Export_Output_2_1 = format_Export_Output_2_1.readFeatures(json_Export_Output_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2_1.addFeatures(features_Export_Output_2_1);
var lyr_Export_Output_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_2_1, 
                style: style_Export_Output_2_1,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2_1.png" /> Export_Output_2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Export_Output_2_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Export_Output_2_1];
lyr_Export_Output_2_1.set('fieldAliases', {'Cod_Cetesb': 'Cod_Cetesb', 'Cod_ibge': 'Cod_ibge', 'Nome': 'Nome', 'Rotulo': 'Rotulo', 'UGRHI': 'UGRHI', 'Nome_ugrhi': 'Nome_ugrhi', });
lyr_Export_Output_2_1.set('fieldImages', {'Cod_Cetesb': '', 'Cod_ibge': '', 'Nome': '', 'Rotulo': '', 'UGRHI': '', 'Nome_ugrhi': '', });
lyr_Export_Output_2_1.set('fieldLabels', {'Cod_Cetesb': 'no label', 'Cod_ibge': 'no label', 'Nome': 'no label', 'Rotulo': 'no label', 'UGRHI': 'no label', 'Nome_ugrhi': 'no label', });
lyr_Export_Output_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});