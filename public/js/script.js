function select() {

    var id = $('#My-ID-Input').val();

    $.ajax({
       type: 'post',
       url: 'https://isthisevenacompany.de/id',
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