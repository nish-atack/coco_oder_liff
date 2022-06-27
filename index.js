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
   
       
        
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg1 = `種類：${breed1} \n数量：${num1} 匹 \n受取時間：${time1}`;
    var msg2 = `種類：${breed2} \n数量：${num2} 匹 \n受取時間：${time2}`; 
    var msg3 = `種類：${breed3} \n数量：${num3} 匹 \n受取時間：${time3}`;
    var msg4 = `種類：${breed4} \n数量：${num4} 匹 \n受取時間：${time4}`;         
    var msg5 = `種類：${breed5} \n数量：${num5} 匹 \n受取時間：${time5}`;
    var msg6 = `種類：${breed6} \n数量：${num6} 匹 \n受取時間：${time6}`;        
        
     if (num1 >= 1) {
         msg=msg1
    }else if(num2 >= 1) {
        msg=msg2
    }else if(num3 >= 1) {
        msg=msg3
    }else if(num4 >= 1) {
        msg=msg4
    }else if(num5 >= 1) {
        msg=msg5
    }else if(num6 >= 1) {
        msg=msg6
    }
        
        
        
        
        
        sendText(msg);

        return false;
    });
});






