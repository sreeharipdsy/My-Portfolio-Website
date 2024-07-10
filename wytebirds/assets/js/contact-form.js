//form
$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbz-3y5gWF4PWFpm7gMQk8zVrNplHp2Bm7Q1B-Lc5C34AN_llijJWR0-qsKF5PsmpSHI/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response) {
            Swal.fire({
                title: "Thank you!",
                text: "We will Catch you Soon..!",
                icon: "success"
            }).then ((result) => {
                window.location.reload();
            });
        },
        error:function (err) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something went wrong"
            }); 
        }
    })
})

//mobile
$(document).ready(function() {
    $(".mob-input").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});