$(window).scroll(function()
{
    if ($("#navbar").offset().top >56) {
        $("#navbar").addClass("small");
    }
    else{
        $("#navbar").removeClass("small");
    }
});