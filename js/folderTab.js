//JavaScript for handling folder tabs
//Source: Catalin Rosu 2018
//https://catalin.red/css3-jquery-folder-tabs/

$(document).ready(function(){
    $("#content").find("[id^='tab']").hide(); //Hide all content
    $("#tabs li:first").attr("id","current"); //Activates the first tab
    $("#content #tab1").fadeIn(); //Show first tab's content

    $("#tabs a").click(function(e){
        e.preventDefault();
        if($(this).closest("li").attr("id") == "current"){ //Detection for current
            return;
        }
        else{
            $("#content").find("[id^='tab']").hide(); //Hide all content
            $("#tabs li").attr("id", ""); //Reset id's
            $(this).parent().attr("id","current"); //Activate this
            $("#"+$(this).attr("name")).fadeIn(); // Show content for the current tab
        }
    });
});