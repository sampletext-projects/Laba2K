function changeCSS(cssFile, cssLinkIndex) {
    const oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    const newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

window.onload = function () {
    $("section").hide();
    $("footer").hide();
    $("section:first").show();
};


$(".show").click(function () {
    if ($(".ch").is($(".ch").css("visibility", "visible"))) {
        $(".ch").css("visibility", "hidden");
        $(".ch2").css("visibility", "hidden");
        $(".ch3").css("visibility", "hidden");
    }
});

$(".hide").click(function () {
    $(".ch").css("visibility", "visible");
    $(".ch2").css("visibility", "visible");
    $(".ch3").css("visibility", "visible");

});
///////////////////////////////////////////////////////////////////////////////////////////////////

$(".ch input:checkbox").click(function () {


    showed();

    ShowBlock();

});


$(".ch2 input:checkbox").click(function () {

    ShowHeaders();

});

$(".ch3 input:checkbox").click(function () {
    ShowParams();

});

function ShowBlock() {
    var temp = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp.push($(it).attr("value"));
    });

    var temp2 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp2.push($(it).attr("value"));
    });

    var temp3 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });

    $('input[name = "headerss"]').prop("disabled", true);
    // $('input[name = "block"]').prop("disabled", false);
    $('input[name = "param"]').prop("disabled", true);


    for (let item of temp) {
        switch (item) {
            case "block1":

                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);

                break;
            case "block2":

                $('input[value = "futurE"]').prop("disabled", false);

                break;
            case "block3":

                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "param2"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);

                break;
            case "block4":

                $('input[value = "without"]').prop("disabled", false);

                break;
            case "block5":

                $('input[value = "futurE"]').prop("disabled", false);
                $('input[value = "param2"]').prop("disabled", false);
                break;
            case "block6":

                $('input[value = "futurE"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                break;
            case "block7":

                $('input[value = "without"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);


        }


    }


}

function ShowBlock2() {
    var temp = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp.push($(it).attr("value"));
    });

    var temp2 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp2.push($(it).attr("value"));
    });

    var temp3 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });

    $('input[name = "headerss"]').prop("disabled", true);
    $('input[name = "block"]').prop("disabled", false);
    $('input[name = "param"]').prop("disabled", true);

    for (let item of temp) {
        switch (item) {
            case "block1":
                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);
                break;
            case "block2":
                $('input[value = "futurE"]').prop("disabled", false);
                break;
            case "block3":
                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "param2"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);
                break;
            case "block4":
                $('input[value = "without"]').prop("disabled", false);
                break;
            case "block5":
                $('input[value = "futurE"]').prop("disabled", false);
                $('input[value = "param2"]').prop("disabled", false);
                break;
            case "block6":
                $('input[value = "futurE"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                break;
            case "block7":

                $('input[value = "without"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                $('input[value = "param3"]').prop("disabled", false);
                break;
        }
    }
}


function ShowHeaders() {
    var temp = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp.push($(it).attr("value"));
    });

    var temp2 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp2.push($(it).attr("value"));
    });

    var temp3 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });

    if (temp2.length === 0) {
        //ShowBlock2();
        //ShowParams();
        return;
    }


    $('input[name = "block"]').prop("disabled", true);
    // $('input[name = "headerss"]').prop("disabled", false);
    $('input[name = "param"]').prop("disabled", true);

    for (let item of temp2) {
        switch (item) {
            case "desigN":
                $('input[value = "block1"]').prop("disabled", false);
                $('input[value = "block3"]').prop("disabled", false);
                if ($('input[value = "block1"]').checked) {
                    $('input[value = "param2"]').prop("disabled", false);
                }
                $('input[value = "param3"]').prop("disabled", false);
                break;
            case "futurE":
                $('input[value = "block2"]').prop("disabled", false);
                $('input[value = "block5"]').prop("disabled", false);
                $('input[value = "block6"]').prop("disabled", false);
                $('input[value = "param2"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                break;
            case "without":
                $('input[value = "block4"]').prop("disabled", false);
                $('input[value = "block7"]').prop("disabled", false);
                $('input[value = "param1"]').prop("disabled", false);
                break;
        }
    }
}

function ShowParams() {
    var temp = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp.push($(it).attr("value"));
    });

    var temp2 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp2.push($(it).attr("value"));
    });

    var temp3 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });


    $('input[name = "block"]').prop("disabled", true);
    $('input[name = "headerss"]').prop("disabled", true);
    // $('input[name = "param"]').prop("disabled", false);


    for (let item of temp3) {
        switch (item) {
            case "param1":
                $('input[value = "block6"]').prop("disabled", false);
                $('input[value = "block7"]').prop("disabled", false);


                $('input[value = "futurE"]').prop("disabled", false);

                $('input[value = "without"]').prop("disabled", false);


                break;
            case "param2":

                $('input[value = "block3"]').prop("disabled", false);
                $('input[value = "block5"]').prop("disabled", false);


                $('input[value = "desigN"]').prop("disabled", false);


                $('input[value = "futurE"]').prop("disabled", false);


                break;
            case "param3":


                $('input[value = "block1"]').prop("disabled", false);
                $('input[value = "block3"]').prop("disabled", false);
                $('input[value = "block7"]').prop("disabled", false);

                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "without"]').prop("disabled", false);

                break;


        }


    }
}

function ShowParams2() {
    var temp = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp.push($(it).attr("value"));
    });

    var temp2 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp2.push($(it).attr("value"));
    });

    var temp3 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });


    $('input[name = "block"]').prop("disabled", true);
    $('input[name = "headerss"]').prop("disabled", true);
    $('input[name = "param"]').prop("disabled", false);


    for (let item of temp3) {
        switch (item) {
            case "param1":
                $('input[value = "block6"]').prop("disabled", false);
                $('input[value = "block7"]').prop("disabled", false);


                $('input[value = "futurE"]').prop("disabled", false);

                $('input[value = "without"]').prop("disabled", false);


                break;
            case "param2":

                $('input[value = "block3"]').prop("disabled", false);
                $('input[value = "block5"]').prop("disabled", false);


                $('input[value = "desigN"]').prop("disabled", false);


                $('input[value = "futurE"]').prop("disabled", false);


                break;
            case "param3":


                $('input[value = "block1"]').prop("disabled", false);
                $('input[value = "block3"]').prop("disabled", false);
                $('input[value = "block7"]').prop("disabled", false);

                $('input[value = "desigN"]').prop("disabled", false);
                $('input[value = "without"]').prop("disabled", false);

                break;


        }


    }
}


function showed() {
    var temp2 = [];

    $(".ch input:checked:disabled").each(function (j, ite) {
        temp2.push($(ite).attr("value"));
    });

    var temp3 = [];

    $(".ch input:checked:not(:disabled)").each(function (z, it) {
        temp3.push($(it).attr("value"));
    });


    for (let item of temp2) {
        switch (item) {
            case "block1":
                $(".sec2").hide();
                break;
            case "block2":
                $(".sec3").hide();
                break;
            case "block3":
                $(".sec4").hide();
                break;
            case "block4":
                $(".sec5").hide();
                break;
            case "block5":
                $(".sec6").hide();
                break;
            case "block6":
                $(".sec7").hide();
                break;
            case "block7":
                $(".footer").hide();
                break;

        }
    }
    for (let item of temp3) {
        switch (item) {
            case "block1":
                $(".sec2").show();
                break;
            case "block2":
                $(".sec3").show();
                break;
            case "block3":
                $(".sec4").show();
                break;
            case "block4":
                $(".sec5").show();
                break;
            case "block5":
                $(".sec6").show();
                break;
            case "block6":
                $(".sec7").show();
                break;
            case "block7":
                $(".footer").show();
                break;

        }
    }
}

function showedHead() {

    var temp4 = [];

    $(".ch2 input:checked:not(:disabled)").each(function (z, it) {
        temp4.push($(it).attr("value"));
    });


    $("section").hide();
    $(".sec1").show();

    for (let item of temp4) {
        switch (item) {
            case "desigN":

                $(".sec2").show();
                $(".sec4").show();

                break;

            case "futurE":

                $(".sec3").show();
                $(".sec6").show();
                $(".sec7").show();

                break;

            case "without":

                $(".sec5").show();

                $(".footer").show();

                break;

        }
    }


}

function showedParam() {

    var temp4 = [];

    $(".ch3 input:checked:not(:disabled)").each(function (z, it) {
        temp4.push($(it).attr("value"));
    });


    $("section").hide();
    $(".sec1").show();

    for (let item of temp4) {
        switch (item) {
            case "param1":

                $(".sec7").show();
                $(".footer").show();

                break;

            case "param2":

                $(".sec4").show();
                $(".sec6").show();

                break;

            case "param3":

                $(".sec2").show();
                $(".sec4").show();
                $(".footer").show();

                break;

        }
    }


}