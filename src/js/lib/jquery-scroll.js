(function(){
    $(function(){
        $.extend({
            scrollTarget:function(target){

                var timer=setInterval(function(){
                    var step=(target-$(window).scrollTop())/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    $(window).scrollTop($(window).scrollTop()+step);
                    if(Math.abs($(window).scrollTop()-target)<=Math.abs(step)){
                        clearInterval(timer);
                        $(window).scrollTop(target)
                    }

                },10);
                return this;
            }
        })
    })
})(jQuery)