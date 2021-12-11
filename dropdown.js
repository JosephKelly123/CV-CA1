var paras_cntr = $('#dropdown-paras');
$('select').on('change', function () {
    var para_id = $(this).children(':selected').data('for-para');
    if (!para_id) paras_cntr.children().hide();
    paras_cntr.children('#para' + para_id).show().siblings().hide();
});

$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box").hide();
            }
        });
    }).change();
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var modal2 = document.getElementById("myModal2");


var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
    modal3.style.display = "block";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}



$(function () {

    $('#contact').click(function () {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
            container.fadeOut();
        }
    });

});

function myhiddendiv() {
    var T = document.getElementById("testing-hidden");
    T.style.display = "block";  
}

function myhiddendiv1() {
    var T = document.getElementById("testing-hidden1");
    T.style.display = "block";
}