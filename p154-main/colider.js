AFRAME.registerComponent("flying-fish",{
    init:function(){
    for(var i=1; i<=10;i++){
        var id=`hurdle${i}`;
        var posX=(Math.random()*3000+(-1000))
        var posY=(Math.random()*2+(-1))
        var posZ=(Math.random()*3000+(-1000))
        var position={x:posX,y:posY,z:posZ}
        this.flyingfish(id,position)
    }
    },
    flyingfish:function(id,position){
        var terrainel=document.querySelector("#terrain")
        var fishel=document.createElement("a-entity");
        fishel.setAttribute("id",id)
        fishel.setAttribute("position",position)
        fishel.setAttribute("material","color","red");
        fishel.setAttribute("gltf-model","./shiny_fish/scene.gltf")
        fishel.setAttribute("scale",{x:5,y:5,z:5})
        fishel.setAttribute("animation-mixture",{})
        terrainel.appendChild(fishel)
    }
})