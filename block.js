<style>
    #helpLayer {
        position: fixed;
        width: 200px;
        height: 100px;
        line-height: 100px;
        color: red;
        border: 1px solid red;
        text-align: center;
    }
</style>

<div id="helpLayer" style="display: none;">
    Блок в центре экрана
</div>

<script>
    function getViewportHeight() {
        if(window.visualViewport && window.visualViewport.height) return window.visualViewport.height;
        var de=document.documentElement;
        return self.innerHeight || ( de && de.clientHeight ) || document.body.clientHeight;
    }

    function getViewportWidth() {
        if(window.visualViewport && window.visualViewport.width) return window.visualViewport.width;
        var de = document.documentElement;
        return self.innerWidth || ( de && de.clientWidth ) || document.body.clientWidth;
    }

    function show(){
        var layer  = document.getElementById('helpLayer');
        var c=window.getComputedStyle(layer, null);
        layer.style.left = Math.floor((getViewportWidth() - parseInt(c.width))/2) + "px";
        layer.style.top = Math.floor((getViewportHeight() - parseInt(c.height))/2) + "px";
        layer.style.display = 'block';
        console.log('width = ', parseInt(c.width));
        console.log('height = ', parseInt(c.height));
        return false;
    }
    onload=show();
</script>
