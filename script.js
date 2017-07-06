function doIt(){
    var title =$("#title").val();
    var caption =$("#caption").val();
    var file =$("#file").val().split( '\\' ).pop();

    var hey = '<div class="col-xm-7 col-md-3 border"><h5><b>'+title+'</b></h5><img  class="img-responsive center-block"  src="photos/'+file+'"> <h5><b>'+caption+'</b></h5>  <div class="last"><i onmouseover="del()" class="fa fa-trash pull-left dele" aria-hidden="true"></i><i onmouseover="tryy()" class="fa fa-heart pull-right" aria-hidden="true"></i></div></div>';
    var father = $("#photos");
    var div = father.append(hey);
    
    
} 
function tryy(){
$(".fa").click(function(){
    $(this).addClass("active");
});

    
}
function del(){
    $(".dele").click(
    function(){
        $(this).parents(".border").remove();
        
    }
    
    )
    
}