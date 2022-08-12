document.getElementById("button").addEventListener("click", select);

function select() {

    var email = document.querySelector('#input').value;

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

