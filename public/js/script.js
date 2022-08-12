document.getElementById("button").addEventListener("click", select);

function select() {

    var id = 2;

    $.ajax({
       type: 'post',
       url: '/id',
       data : {
            broketail : id
       },
       success: function(data) {
            var id = data.broketail;
            $('#My-ID-Input').val(id);
       },
       error: function(err) {
            console.log(err);
       }

   });
}