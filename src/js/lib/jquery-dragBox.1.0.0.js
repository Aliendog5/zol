(function(jQuery){

    jQuery.fn.dragbox = function(){

        function DragBox(){
            this.ele = null;
            this.init = function(obj){
                this.ele = obj;// obj就是DOM对象 就是盒子
                return this;
            }
            this.moveStart = function(){
                var self = this;
                this.ele.onmousedown = function(evt){
                    evt.stopPropagation();

                    var e = evt || window.event;
                    var disX = e.clientX-self.ele.offsetLeft;
                    var disY = e.clientY-self.ele.offsetTop;

                    self.moveIng(disX, disY);
                    self.moveEnd();

                }

            };
            this.moveIng = function(x, y){
                var self = this;

                document.onmousemove = function(evt){
                    var e = evt || window.event;
                    $(self.ele).css({
                        "margin":0,
                        "top":0,
                        "left":0
                    });
                    self.ele.style.left = e.pageX - x + "px";
                    self.ele.style.top = e.pageY - y + "px"
                }
            };
            this.moveEnd = function(){
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }

        }

        var drag = new DragBox();
        drag.init(this[0]).moveStart();

        return drag;

    }

})(jQuery)