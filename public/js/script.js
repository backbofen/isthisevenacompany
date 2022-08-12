document.getElementById("button").addEventListener("click", select);

function select() {

    var id = 2
    cosole.log(document.getElementById("input"));

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

