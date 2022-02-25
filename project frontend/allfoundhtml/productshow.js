function productshow(){
    return `
    <div id="psu">
        <div ><h3 id="no of products"></h3></div>
        <div id="recomended">Recommended<i style="font-size:24px;margin-left: 30px;" class="fa">&#xf107;</i></div>
    </div>
    <div id="psd">
        <div id="psc">
            <div id="cat" class="pscdpop">Category<i style="font-size:24px;float:right" class="fa">&#xf107;</i></div>
            <div  id="catdown"></div>
            <div class="pscdpop" id="dress">Dresses<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            <div class="downpop" id="dressdown"></div>
            <div id="size" class=pscdpop>Clothing Size<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            <div id="sizedown" class="downpop"></div>
            <div id="color" class=pscdpop>Color<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            <div id="colordown" class="downpop"></div>
            <div class=pscdpop>Price<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            <div class="downpop"></div>
            <div class=pscdpop>Fabric<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            
            <div id="designer" class=pscdpop>Designer<i style="font-size:24px;float:right;" class="fa">&#xf107;</i></div>
            <div id="designerdown" class="downpop"></div>
        </div>
        <div id="products"></div>
    </div>
    `
}
export default productshow;