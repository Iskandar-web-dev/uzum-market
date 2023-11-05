export {header}
let header = document.createElement("header")

header.innerHTML = 
`
<div class="left">
<img src="./img/icons/uzum-market.png" alt="">
<button class='catalog'>Каталог</button>
</div>
<div class="center">
<div class="find">
<input type="text" class="search-inp">
<img src="./img/icons/search.png" alt="">
</div>
</div>
<div class="right">
<div class="user-div">
<img src="./img/icons/user_icon.png" alt="">
<a href="#" class="user-name">Войти</a>
</div>
<a href="#">Избранное</a>
<div class="cart_header">
<a href="#">Корзина</a>
<div class="cart_counter"><p class="c_counter">3</p></div>
</div>
</div>
`