(function(){
    $(function(){
        $.fn.extend({
            rotate:function (num1,num2){
                var step=num2-num1>0?Math.ceil((num2-num1)/10):Math.floor((num2-num1)/10);
                var num=0;
               this.timer= setInterval(function(){
                    num++;
                    $(this).css("transform","rotate("+(num1+step*num)+"deg)");
                    if(num>=10){
                        clearInterval(this.timer)
                    }
                }.bind(this),50)

            }
        })
    })
})(jQuery)