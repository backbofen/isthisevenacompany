document.getElementById("button").addEventListener("click", select);

function select() {

    var id = 2
    console.log(document.querySelector('#input').value);

    $.ajax({
       type: 'post',
       url: '/id',
       data : {
            "du hurensohn" : id
       },
       error: function(err) {
            console.log(err);
       }

   });
}

