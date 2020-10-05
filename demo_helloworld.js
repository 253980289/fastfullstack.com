/// <reference path = "kfssdk.d.ts" /> 
function $(key) {
    return document.querySelector(key);
}
var CHANNEL_NAME = "demo_helloworld";
function publish() {
    var msg = $('#msg');
    kfssdk.publish_channel_msg({
        _channel: CHANNEL_NAME,
        _sub_type: "say",
        _msg: { data: msg.value }
    });
    msg.value = "";
    msg.focus();
}
kfssdk.init({
    appid: 100001,
    appkey: "gjseabmtoljxeknc",
    onready: function () {
        kfssdk.create_channel({
            _channel: CHANNEL_NAME,
            _channel_option: {
                _max_keep_msg_list_len: 20
            },
            _last_msg_len: 20
        });
    },
    oncreate_channel: function (msg_body) {
        var msg = $('#msg');
        msg.readOnly = false;
        msg.select();
        msg.focus();
    },
    onpublish_channel_msg: function (msg_body) {
        var data = JSON.stringify(msg_body);
        $('#msg_list').value += data + "\r\n";
    },
    onmodify_channel: function (msg_body) {
        if (msg_body._user_join) {
            if (msg_body._channel === CHANNEL_NAME) {
                $('#msg_list').value += "用户【" + msg_body._user_join + "】加入\r\n";
            }
        }
        if (msg_body._user_leave) {
            if (msg_body._channel === CHANNEL_NAME) {
                $('#msg_list').value += "用户【" + msg_body._user_leave + "】离开\r\n";
            }
        }
        if (msg_body._user_online) {
            if (msg_body._channel === CHANNEL_NAME) {
                $('#msg_list').value += "用户【" + msg_body._user_online + "】上线\r\n";
            }
        }
        if (msg_body._user_offline) {
            if (msg_body._channel === CHANNEL_NAME) {
                $('#msg_list').value += "用户【" + msg_body._user_offline + "】离线\r\n";
            }
        }
    }
});
