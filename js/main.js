function diplay_show(blockId) {
    $(blockId).slideToggle();
}
var elemId = 1;

function toggle(blockId, id) {
    if (!($('#' + id).hasClass('active'))) {
        switch (elemId) {
            case 1:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#1').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 2:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#2').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 3:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#3').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 4:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#4').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 5:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#5').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 6:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#6').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 7:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#7').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 8:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#8').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 9:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#9').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 10:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#10').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 11:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#11').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 12:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#12').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 13:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#13').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 14:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#14').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
            case 15:
                $("#d-" + elemId).slideToggle();
                $(blockId).slideToggle();
                $('#15').toggleClass('active');
                $('#' + id).toggleClass('active');
                elemId = id;
                console.log(id);
                break;
        }

    }
}