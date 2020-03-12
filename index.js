function precarica( img ) {
    $( img ).each( function () {
        $( '<img/>' )[ 0 ].src = this;
    });
}
precarica([
        'mapa1.png',
        'mapa2.png',
        'mapa3.png',
        'mapa4.png',
        'mapa5.png'
    ]);
        
/*******jQuery for external title*********/
        
jQuery(document).ready(function () {
    $('.title-blue').mouseout(function(){
        $("#map").attr('src', 'mapa.png');
    }),
    $('.title-blue').mouseover( function(){
        $("#map").attr('src', 'mapa1.png');
    });
    $('.title-red').mouseout(function(){
        $("#map").attr('src', 'mapa.png');
    }),
    $('.title-red').mouseover( function(){
        $("#map").attr('src', 'mapa2.png');
    });
    $('.title-green').mouseout(function(){
        $("#map").attr('src', 'mapa.png');
    }),
    $('.title-green').mouseover( function(){
        $("#map").attr('src', 'mapa3.png');
    });	
    $('.title-yellow').mouseout(function(){
        $("#map").attr('src', 'mapa.png');
    }),
    $('.title-yellow').mouseover( function(){
        $("#map").attr('src', 'mapa4.png');
    });
    $('.title-pink').mouseout(function(){
        $("#map").attr('src', 'mapa.png');
    }),
    $('.title-pink').mouseover( function(){
        $("#map").attr('src', 'mapa5.png');
    });	
});					