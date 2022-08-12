function select() {

    var id = 2;

    $.ajax({
       type: 'post',
       url: '/id',
       data : {
            id : id
       },
       success: function(data) {
            var id = data.id;
            $('#My-ID-Input').val(id);
       },
       error: function(err) {
            console.log(err);
       }

   });
}

select();