document.getElementById("button").addEventListener("click", select);

function select() {

    var id = 2;

    $.ajax({
       type: 'post',
       url: '/id',
       data : "negro",
       error: function(err) {
            console.log(err);
       }

   });
}
