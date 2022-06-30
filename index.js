var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var time1 = $('input[name="time1"]').val();
        var num1 = $('input[name="num1"]').val();
        var breed1 = $('input[name="breed1"]').val();
        
        var time2 = $('input[name="time2"]').val();
        var num2 = $('input[name="num2"]').val();
        var breed2 = $('input[name="breed2"]').val();
        
        var time3 = $('input[name="time3"]').val();
        var num3 = $('input[name="num3"]').val();
        var breed3 = $('input[name="breed3"]').val();
        
        var time4 = $('input[name="time4"]').val();
        var num4 = $('input[name="num4"]').val();
        var breed4 = $('input[name="breed4"]').val();        
        
        var time5 = $('input[name="time5"]').val();
        var num5 = $('input[name="num5"]').val();
        var breed5 = $('input[name="breed5"]').val();
        
        var time6 = $('input[name="time6"]').val();
        var num6 = $('input[name="num6"]').val();
        var breed6 = $('input[name="breed6"]').val();   
        
        
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        
        
        
        var kk = [[breed1,num1,time1],
              [breed2,num2,time2],
              [breed3,num3,time3],
              [breed4,num4,time4],
              [breed5,num5,time5],
              [breed6,num6,time6]];
        
      
 msg =[]


let ppn=[]

for(var i=0;i<kk.length;i++){
           if(kk[i][1] >= 1) {
               
  msg =msg + ["種類："+ kk[i][0] + "\n数量：" + kk[i][1] + "\n価格：" + kk[i][2] + "円"] + "\n"+ "============================="+ "\n"  
           }else{
    }
  }  
        
        

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});



