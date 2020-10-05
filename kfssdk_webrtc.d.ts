declare namespace kfssdk {
    interface webrtc {
        type Callback = (mediaStream: any, err_info: string) => void;
        function capture_user_media(callback: Callback, options: any);

        // msg_body is same as create_channel
        function create_channel_for_webrtc(msg_body: any);
        
        // function create_webrtc_chat(remoteUserId: number, mediaStream: any, _channel: string);

        type ONMEDIA_STREAM_EVENT_RESULT = boolean | void;
        type ONMEDIA_STREAM_EVENT = (remoteUserId: number, mediaStreamRemote: any, init: boolean, remove: boolean) => ONMEDIA_STREAM_EVENT_RESULT;
        // zsqapp has onmedia_stream_event: ONMEDIA_STREAM_EVENT
        function init(zsqapp: any);
    }
};
