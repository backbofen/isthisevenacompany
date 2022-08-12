function select() {

    $.ajax({
        url: 'https://isthisevenacompany.de/geta',
        type: "POST",
        data: "hello"
       }).done(function(data) {
         console.log(data);
     })
}

select();