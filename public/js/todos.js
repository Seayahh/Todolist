$("ul").on("click", "li", function () { 
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) { 
    e.stopPropagation();
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
});

$("input[type=text]").keypress(function (e) { 
    if (e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
    }
});

$("#plus").click(function (e) { 
    e.preventDefault();
    $("input[type=text]").fadeToggle()
});