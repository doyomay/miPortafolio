/**
 * Created by Gerardo on 14/02/2015.
 */
var habilidades = document.getElementsByClassName('Habilidad');
var nivel,li;
for(var i in habilidades){
    nivel = habilidades[i].dataset.nivel || 0;
    li = habilidades[i].children[0].children;
    for(var j=1; j<=nivel; j++){
        li[j].setAttribute('class','Habilidad-item Habilidad-activo');
    }
}