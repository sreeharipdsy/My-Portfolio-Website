
$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
  url: "https://script.google.com/macros/s/AKfycbxmDu-UtC-XKB7SLpetY4mSJ7CtflTlsrsM6jkfE_t7gKq5Ul03Aa0RPTqlLW292hmI/exec",
  data: $("#submit-form").serialize(),
  method: "post",
  success:function (response) {
      Swal.fire({
          title: "Thank you!",
          text: "Form Submitted Successfully",
          icon: "success"
        }).then ((result) => {
            window.location.reload();
        });
    },
    error:function (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
        }); 
    }
})
});
