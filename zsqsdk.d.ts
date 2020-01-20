// admin,question,title,show
declare interface Ishow_cutomer_service { 
    admin: number;
    question: any;
    title: string;
    show: boolean;
}
declare interface Iuser { 
    uid: number;
    nickname: string;
    head_portrait: string;
    head_portrait_version: number;
    sex: number;
    last_position: string;
}
declare interface Izsqapp { 
    appid: number;
    appkey: string;
    onready: () => void;
    onreconnect: () => void;
    onclose: () => void;
    onerr: (proto_name, result) => void;
}
declare interface Ierr_obj { 
    _err_no: string;
    _err_desc: string;
}
declare interface Ievent_funs { 
    ok: (data_obj: any, seq: number) => void;
    err: (err_obj: Ierr_obj, seq: number) => void;
}
declare interface Imsg_body_get_user_info { 
    _uid_list: number[];
}

declare var zsqsdk: {
	// 常量属性
    NO_LIMIT: number;
    UID_ADMIN: number;
    APPID_SYSTEM: number;
	
	// 变量属性
    uid: number;
    nickname: string;
    head_portrait: string;
    head_portrait_version: number;
    sex: number;
    last_position: string;
    users: {
    	[key:number]: Iuser
    };

    // 系统方法
	init: (zsqapp: any) => void;
	switch_app: (zsqapp: any) => void;
	appid: () => number;
	is_self: (uid: number) => boolean;
	get_head_portrait: (user: Iuser) => string;
	set_nickname: () => void;
	gen_app_channel_name: (name) => string;
	get_app_show_channel_name: (name) => string;
	cur_service_time: () => number;
	get_app_data_url: (uid: number) => string;
	addEventListener: (event_name: string, event_funs: Ievent_funs, event_owner: any, seq: number, insert_before: boolean) => void;
	removeEventListener: (event_name: string, event_funs: Ievent_funs, event_owner: any, seq: number) => void;
	removeAllEventListener: (event_name: string) => void;
	set_show_loading: (show_loading: (show: boolean) => void) => void;
	show_loading: (show: boolean, _immediately: boolean) => void;
	show_cutomer_service: (params: Ishow_cutomer_service) => void;

	// 协议方法，这里以get_user_info为参考虑示例，其它协议接口定义的每个msg_body格式请自行参数up2.proto和common2.proto文件
    get_user_info: (msg_body: Imsg_body_get_user_info) => number;
    send_private_msg: (msg_body: any) => number;
    get_offline_private_msg: (msg_body: any) => number;
    set_ranking_score: (msg_body: any) => number;
    get_ranking: (msg_body: any) => number;
    set_like: (msg_body: any) => number;
    get_like_num: (msg_body: any) => number;
    get_like_list: (msg_body: any) => number;
    bind_file_system: (msg_body: any) => number;
    create_channel: (msg_body: any) => number;
    destroy_channel: (msg_body: any) => number;
    publish_channel_msg: (msg_body: any) => number;
    subscribe_channel: (msg_body: any) => number;
    unsubscribe_channel: (msg_body: any) => number;
    modify_channel: (msg_body: any) => number;
    get_channel_public_data: (msg_body: any) => number;
    add_channel_users: (msg_body: any) => number;
    remove_channel_users: (msg_body: any) => number;
    get_channel_info: (msg_body: any) => number;
    get_channel_msg: (msg_body: any) => number;
    remove_channel_msg: (msg_body: any) => number;
    get_file_list: (msg_body: any) => number;
    create_dir: (msg_body: any) => number;
    create_file: (msg_body: any) => number;
    read_file: (msg_body: any) => number;
    write_file: (msg_body: any) => number;
    rename_file: (msg_body: any) => number;
    rename_dir: (msg_body: any) => number;
    move_file: (msg_body: any) => number;
    move_dir: (msg_body: any) => number;
    del_file: (msg_body: any) => number;
    del_dir: (msg_body: any) => number;
    share_file: (msg_body: any) => number;
    get_self_share_file: (msg_body: any) => number;
    get_share_file: (msg_body: any) => number;
    search_public_share_file: (msg_body: any) => number;
    mount_share_file: (msg_body: any) => number;
    unmount_share_file: (msg_body: any) => number;
    store_set: (msg_body: any) => number;
    store_update: (msg_body: any) => number;
    store_remove: (msg_body: any) => number;
    store_get: (msg_body: any) => number;
    store_increase: (msg_body: any) => number;
};
