var params = (new URL(document.location)).searchParams;
var key = params.get('key');




$(function () {
    // 送信
    $('#form1').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var time0 = $('input[name="time1"]').val();
        var num1 = $('input[name="num1"]').val();
        var breed = $('input[name="breed"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});
   
       
        
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${breed} \n${num1} \n${time0} \n${reasons}`;
        sendText(msg);
        return false;
       
    });
    

    // 送信
    $('#form2').submit(function () {
       // var reasons = $('textarea[name="reasons"]').val();
       // var time0 = $('input[name="time2"]').val();
        var num2 = $('input[name="num2"]').val();
        var breed2 = $('input[name="breed2"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});
   
       
        
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${breed2} \n${num2} \n${time2} \n${reasons2}`;
        sendText(msg);
        return false;
       
    });
    
});









