// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1580625680',
  channelSecret: '0663b1fb9edd4d82507d85f66ab5816d',
  channelAccessToken: 'lmORS7vIMfB3UkmEVbWYeTb6vqV4Wg9ewW4lB4Cii1tzPNOLbSxyLtlaGCjWHyF+xzWBpfAv1SenSbX85K0s7YhK8WjhF6qoXC+1fZk8G4cOR5l9Iz9ASTC+VIb2wvXyIGUDID50RRfdiDyJtWxWNQdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
