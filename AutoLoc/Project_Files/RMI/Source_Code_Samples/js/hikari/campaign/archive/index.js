$(".js-trg-more").on("click", function() {
    let index = $(".js-trg-more").index(this);
    
    $(this).hide();
    $(".js-target-more").eq(index).slideDown();
});