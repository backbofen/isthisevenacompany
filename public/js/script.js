$.ajax({
    url: 'https://isthisevenacompany.com/geta',
    type: "POST",
    data: "hello"
   }).done(function(data) {
     console.log(data);
 })