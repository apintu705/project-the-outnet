function navbar(){
    return `
    <div id="uppernavbar">
    <div class="nutext">Returns</div>
    <div class="nuline"></div>
    <div class="nutext">Delivery</div>
    <div class="nuline"></div>
    <div class="nutext">Customer Care</div>
    <div class="nuline"></div>
    <div class="nutext">Create A Return</div>
    <div class="nuline"></div>
    <div class="nutext">Track Your Order</div>
</div>
<div id="navbar">
    <div id="navbari">
        <a href="signin.html"><div id="usernameuu"><i style="font-size:24px;margin-right:20px" class="fa">&#xf007;</i>Sign In</div></a>
        <div class="nuline" id="lame"></div>
        <div style="font-size:24px">India</div>
    </div>
    <h1 id="home" style="font-size:40px; margin-left:300px;margin-right:300px">THE OUTNET</h1>
    <div id="navbari">
        <div><i style="font-size:24px;margin-right:20px" class="fa">&#xf002;</i>Search</div>
        <div class="nuline"></div>
        <div><i style="font-size:24px ;margin-right:40px" class="fa">&#xf08a;</i></div>
        <a href="cart.html"<div><i style="font-size:24px" class="fa">&#xf290;</i></div></a>
    
    </div>
</div>
<div id="navbaritems">
    <p id="appendsuperbrand"class="navitemstext" style="margin-left: 180px;">Superbrands</p>
    <a href="product.show.html"><P id="appendjustin" class="navitemstext">Just In</P></a>
    <a href="product.show.html"><P  id="appendbestseller"class="navitemstext">Bestsellers</P></a>
    <a href="product.show.html"><P id="appenddesigner" class="navitemstext">Designers</P></a>
    <a href="product.show.html"><P id="appendclothing" class="navitemstext">Clothing</P></a>
    <P id="appendshoes" class="navitemstext">Shoes</P>
    <P id="appendbags" class="navitemstext">Bags</P>
    <P id="appendacc" class="navitemstext">Accessories</P>
    <a href="product.show.html"><P id="appendiris"class="navitemstext">Iris & Ink</P></a>
    <P id="appendedi" class="navitemstext">Editorial</P>
    <a href="product.show.html"><P id="appendmen" class="navitemstext">Men's</P></a>

</div>

<div id="navbarappend"></div>
<div id="navdown">
    <div><i style="font-size:24px" class="fa">&#xf10b;</i>App-y shopping: Download our new app</div>
    <div class="nwline"></div>
    <div> 15% off your first clothing order with FIRST15</div>
    <div class="nwline"></div>
    <div>From Balmain to Burberry, discover our list of must-have Superbrands </div>
</div>

    `
}
export default navbar;