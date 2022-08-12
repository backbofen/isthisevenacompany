function ss() {

$.ajax({
    url: "/post",
    type: "POST",
    data: 'age',
    success: function (result) {
        console.log(result);
    }
});

}

ss();