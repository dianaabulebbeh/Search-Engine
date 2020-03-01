    
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
        var html = '';
        for (var i = 0; i< data.length; i++) {
            html += '<h2>' + data[i]   +'</h2>';
        }
        $('#target').html(html);
        
          
       
       
      }
    });
  }




