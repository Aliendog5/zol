document.write('<div class="zc-topbar">    <div class="wrapper clearfix">        <div class="zc-login-info">            <span class="zc-back-home"><a href="http://www.zol.com">商城首页</a></span>                                         <span class="zc-login" title="weixin_181p12qr">您好，<a href="http://my.zol.com" target="_blank">weixin_181...</a></span>                <a href="https://login.zol.com/index.php?a=LoginOut&t=1519453043" class="login_act">退出</a>                    </div>        <ul class="zc-quick-menu">            <li><a href="http://my.zol.com/index.php?c=OrderManage">我的订单</a></li>            <li class="zc-my-center" onmouseover="showUI(this)" onmouseout="hideUI(this)">                <a href="http://my.zol.com/" class="zc-hd" >买家中心<i class="ico"></i></a>                <div class="zc-my-center-bd" id="zc-my-center-bd" style="display:none;">                    <a href="#" style="display:none;">我的优惠券&nbsp;&nbsp;<em>8</em></a>                    <a href="http://my.zol.com/index.php?c=FollowMerchant">关注的店铺&nbsp;&nbsp;<em id="focusShopNum">0</em></a>                    <a href="http://my.zol.com/index.php?c=FollowGoods">关注的商品&nbsp;&nbsp;<em id="focusGoodsNum">0</em></a>                </div>            </li>            <li><a href="http://order.zol.com/index.php?c=Cart" id="shop-cart-num">购物车0件</a></li>            <li><a href="http://help.zol.com/">帮助中心</a></li>            <li class="zc-separator">|</li>            <li class="zc-mobile" onmouseover="showUI(this)" onmouseout="hideUI(this)">                <a href="javascript:;" class="zc-hd zc-mobile-hd">手机商城<i class="ico"></i></a>                <div class="zc-mobile-bd" id="zc-mobile-bd" style="display:none;"><img src="http://icon.zol-img.com.cn/zol_shop_logo/shop_wechat.png" width="130" height="130"></div>            </li>            <li><a href="http://www.zol.com.cn">中关村在线</a></li><!--            <li><a href="http://zs.zol.com/">商家入驻</a></li>-->            <li><a href="http://www.rongroad.com#floor">招商合作</a></li>            <li class="lianxikefu">                <a href="javascript:;"  onmouseover="showUI(this)" onmouseout="hideUI(this)" class="zc-hd">联系客服<i class="ico"></i></a>                <div class="zc-service-tel">400-688-1999</div>            </li>        </ul>    </div></div><!--2017放假通知--><!--<div style="text-align:center;margin: 0 auto -20px;width: 1200px;">    <a href="http://help.zol.com/index.php?c=Detail&id=1372" target="_blank"><img src="http://icon.zol-img.com.cn/newshop/shop/index/2017fjtz.jpg" width="1200px" height="96px" /></a></div>--><script>        var Z_now_time = "1519453043";        var z_user_id = "50027331";        function showUI(obj) {            var className = obj.className;            if (className == "zc-my-center") {                obj.className = "zc-my-center zc-hover";                document.getElementById("zc-my-center-bd").style.display = "block";            } else if (className == "zc-mobile") {                obj.className = "zc-mobile zc-hover";                document.getElementById("zc-mobile-bd").style.display = "block";            } else {                obj.parentNode.className = "lianxikefu zc-hover";                obj.nextSibling.style.display = "block";            }        }        function hideUI(obj) {            var className = obj.className;            if (className == "zc-my-center zc-hover") {                obj.className = "zc-my-center";                document.getElementById("zc-my-center-bd").style.display = "none";            } else if (className == "zc-mobile zc-hover") {                obj.className = "zc-mobile";                document.getElementById("zc-mobile-bd").style.display = "none";            } else {                obj.parentNode.className = "lianxikefu";                obj.nextSibling.style.display = "none";            }        }        function getApiNumber() {            if (typeof jQuery == "undefined") {                return false;            } else {                var url = "http://www.zol.com/index.php?c=Ajax_Topbar&callback=?&t=" + Math.random();                $.getJSON(url, function (data) {                    if (data) {                        document.getElementById("shop-cart-num").innerHTML = "购物车" + data.cartNumber + "件";                        document.getElementById("focusShopNum").innerHTML = data.shopNumber;                        document.getElementById("focusGoodsNum").innerHTML = data.goodsNumber;                    }                });            }        }        getApiNumber();</script>')