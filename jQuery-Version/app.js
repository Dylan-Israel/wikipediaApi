$(document).ready(() => {

    $("#search").click(() => {
        const searchTerm = $('#searchTerm').val();
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json&callback=?`;
      
        $.ajax({
            type: "GET",
            url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: (data, textStatus, jqXHR) => {
                $('#output').html('');
                
                if (data[1]) {
                    for (let i = 0; i < data[1].length; i++) {
                        $('#output').prepend(`<div><div class='btn-primary'><a href='${data[3][i]}'><h2>${data[1][i]}</h2><p>${data[2][i]}</p></a></div></div>`);
                    }
                }
            
                $("#searchTerm").val('');
            },
            error: function (errorMessage) {
                console.log(errorMessage);
            }
        });
    });
    
    $("#searchTerm").keypress((e) => {
        if (e.which === 13) {
            $("#search").click();
        }
    });
});