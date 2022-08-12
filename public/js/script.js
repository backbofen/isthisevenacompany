document.getElementById("button").addEventListener("click", select);

function select() {

    var email = new FormData(document.querySelector('form'))

    $.ajax({
       type: 'post',
       url: '/id',
       data : {
            "email" : email
       },
       error: function(err) {
            console.log(err);
       }

   });
}

