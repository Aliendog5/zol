    <?php
    session_start();
    ?>
    <div class="main">
        <ul class="user">
            <li>
                <a href="index.html" class="index">商城首页</a>
            </li>
            <?php

                if(!empty($_SESSION["userName"])){
                    print_r('<li>您好<a <a href="#">'.$_SESSION["userName"].'</a></li><li><a href="#" class="loginOut">退出</a></li>');
                }else{
                    print_r('<li> Hi~欢迎来到Z商城，请 <a href="login.html" >登录</a> </li> <li><a href="logon.html">免费注册</a></li>');
                }
            ?>

        </ul>
        <ol>
            <li>
                <a href="#">我的订单</a>
            </li>
            <li class="my_li">
                买家中心
                <i class="arrow"></i>
                <div>
                    <p>
                        <a href="#">关注的店铺 <span>0</span></a>
                    </p>
                    <p>
                        <a href="#">关注的商品 <span>0</span></a>
                    </p>
                </div>
            </li>
            <li>
                <a href="cart.html" class="cart">购物车 <span>0</span>件</a>
            </li>
            <li>
                <a href="#">帮助中心</a>
            </li>
            <li class="my_li phone-shopping">
                手机商城
                <i class="arrow"></i>
                <div>
                    <img src="images/img/shop_wechat.png" alt="">
                </div>
            </li>
            <li>
                <a href="#">中关村在线</a>
            </li>
            <li>
                <a href="#">招商合作</a>
            </li>
            <li class="my_li">
                联系客服
                <i class="arrow"></i>
                <div class="tel">
                    <p>400-688-1999</p>
                </div>
            </li>
        </ol>
    </div>
    <div class="confirm">
        <div class="center">
            <p>您确定要退出登录吗？</p>
            <button class="yes">YES</button>
            <button class="no">NO</button>
        </div>
    </div>