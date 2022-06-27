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
    var msg1 = `ご注文内容：\n${breed1} \n${num1} \n${time1}`;
    var msg2 = `ご注文内容：\n${breed2} \n${num2} \n${time2}`;    
    var msg3 = `ご注文内容：\n${breed3} \n${num3} \n${time3}`;
    var msg4 = `ご注文内容：\n${breed4} \n${num4} \n${time4}`;          
    var msg5 = `ご注文内容：\n${breed5} \n${num5} \n${time5}`;
    var msg6 = `ご注文内容：\n${breed6} \n${num6} \n${time6}`;        
        
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






