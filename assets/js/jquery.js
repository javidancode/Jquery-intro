// $(document).ready(function() {
    
// });

$(function() {
    
    // let elem = document.querySelector("h4").innerText;

    let elems = $("#products h4");

    // for (const item of elems) {
    //     console.log(item);
    // }

    $("#products button").first().click(function() {
        // console.log($("this").html(`<span class="text-danger">bye bye</span>`));
        $("#products .box").hide(2000,function() {
            $("#products .box").css("background-color","blue")
        });
    })

    $("#products button").first().next().click(function() {
        // console.log($("this").html(`<span class="text-danger">bye bye</span>`));
        $("#products .box").show(2000,function() {
            $("#products .box").css("background-color","blue")
        });
    })

    $("#products button").last().click(function() {
        // console.log($("this").html(`<span class="text-danger">bye bye</span>`));
        $("#products .box").toggle(2000,function() {
            $("#products .box").css("background-color","blue")
        });
    })




})