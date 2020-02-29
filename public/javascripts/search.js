    
function SetDefault(Text){
    testAjax(Text);
      }
function testAjax(data) {
    $.ajax({
        url: "/search/ser",
        type: "GET",
        data: {data},  
        contentType: 'text/json',
      success:function(data) {
         
          $( "#myInput" ).autocomplete({
            source: data
        });
       
      }
    });
  }




