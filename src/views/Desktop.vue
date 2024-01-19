<template>
<div id="desktop">
    <div id="begins">
        <div id="begins-top">
            <div id="menu">
                <img :src="photo" alt="" id="head-image" :title="uname">
            </div>
            <div id="mu">
                <div id="item1" >
                    <span class="btns">所有应用</span>
                </div>
                <div id="item2" >
                    <span class="btns">系统</span>
                </div>
                <div id="item3" >
                    <span class="btns">个性化</span>
                </div>
                <div id="item4" >
                    <span class="btns">应用商店</span>
                </div>
                <div id="item5" >
                    <span class="btns">账户</span>
                </div>
                <div id="item6" >
                    <span class="btns">资源管理</span>
                </div>
                <div id="item7" >
                    <span class="btns">Vi更新</span>
                </div>
            </div>
            <div id="nextmenu">
                <ul title="想要退出的话请点“关机”哦">
                    <li @click="hsetting" title="点击关闭开始菜单">关闭</li>
                    <li title="点击更改账户设置">更改账户设置</li>
                    <li title="点击锁屏">锁屏</li>
                    <li title="点击重启一次">重启</li>
                    <li title="点击关闭本系统，下次见">关机</li>
                </ul>
            </div>
       </div>
        <div id="begins-main">
           <ul id="menusitm">
              <li v-for="item in allapp" :key="item.id">
                 <img :src="item.pic" alt="">
                 <br>
                 <span>{{ item.workname }}</span>
              </li>
           </ul>
        </div>
    </div>
    <div id="search">
        <div id="sform">
            <input type="text" name="sinput" placeholder="有什么想查找的吗？" v-model="searchInput" id="sinput"><i class="bi bi-x" @click="clsc"></i>
            <button id="sbtn"> <i class="bi bi-search"></i> </button>
        </div>
        <div id="result">
            <li v-for="item in filteredItems" :key="item.id" :title="'点击下载：'+item.workname+','+
                           '版本：'+item.date">
                    <a :href="item.urls" target="_blank">
                        <img :src="item.pic" id="softph">
                        <br>
                        <span>{{ item.workname }}</span>
                    </a>
            </li>
            <li v-for="item in allapps" :key="item.id">
                <a href="" target="_blank">
                    <img :src="item.pic" alt="">
                    <br>
                    <span>{{ item.workname }}</span>
                 </a>
              </li>
        </div>
    </div>
    <div id="animate" class="vi-menu">
        <div id="sform">
            <input type="text" name="sinput" placeholder="有什么想查找的吗？" v-model="anisearch" id="sinput">
            <i class="bi bi-x" @click="dwanimate"></i>
        </div>
        <div id="result" class="vi-result" style="margin-top:-1vw">
           <ul style="margin-top:-23vw">
                <li v-for="item in animates" :key="item.id" :title="
                  '动漫：'+item.workname+'\n'+
                  '类型：'+item.fenlei+'\n'+
                  '作者：'+item.author+'\n'+
                  '日期：'+item.date+'\n'+
                  '简介：'+item.intro
                ">
                    <a :href="item.urls" target="player" @click="anires">
                        <img :src="item.pic" id="softph" style="width:100px;height:80px;border-radius:12%;">
                        <br>
                        <span>{{ item.workname }}</span>
                    </a>
                </li>
           </ul>
        </div>
    </div>
    <div id="lmusic" class="vi-menu">
        <i class="bi bi-x" @click="dlmusic"></i>
        <Music />
    </div>
    <div id="svideo" class="vi-menu">
        <i class="bi bi-x" @click="dsvideo"></i>
    </div>
    <div id="cgame" class="vi-menu">
        <i class="bi bi-x" @click="dcgame"></i>
    </div>
    <div id="comics" class="vi-menu">
        <i class="bi bi-x" @click="dcomics"></i>
    </div>
    <div id="vichat" class="vi-menu">
        <i class="bi bi-x" @click="dvichat"></i>
     </div>
     <div id="needs" class="vi-menu">
        <i class="bi bi-x" @click="dneeds"></i>
     </div>
     <div id="players">
        <i class="bi bi-x" @click="dplayer"></i>
        <iframe src="" frameborder="0" name="player" id="player"></iframe>
     </div>
    <nav id="menus">
            <div id="pres">
                    <div id="setting" title='开始' @click="setting">
                        <img src="../../src/assets/img/2021/tub.png">
                    </div>
                    <div id="notese" title="搜索" @click="opsearch">
                        <i class="bi bi-search"></i>
                    </div>
                    <div id="add" title="看动漫" @click="wanimate">
                        <i class="bi bi-tv"></i>
                    </div>
                    <div id="music" title="听音乐" @click="lmusic">
                        <i class="bi bi-music-note-beamed"></i>
                    </div>
                    <div id="shortvs" title="短视频" @click="svideo">
                        <i class="bi bi-play-btn-fill"></i>
                    </div>
                    <div id="games" title="游戏" @click="cgame">
                        <i class="bi bi-xbox"></i>
                    </div>
                    <div id="comic" title="小说和漫画" @click="comics">
                        <i class="bi bi-book"></i>
                    </div>
                    <div id="chat" title="弹幕聊天" @click="vichat">
                        <i class="bi bi-chat-dots-fill"></i>
                    </div>
                    <div id="need" title="需求中心" @click="needs">
                        <i class="bi bi-cart-fill"></i>
                    </div>
                </div>
                <div id="extends" title="扩展">
                    <i class="bi bi-chevron-compact-up"></i>
                </div>
                <div id="timeandrq" title="时间与日期">
                    <span id="sh">{{ times }}</span>
                </div>
    </nav>
     <div id="hidebnr">
            <div id="soft">
                <div>
                    <form style="width:320px" class="input-group form-group">
                        <input type="text" name="kwd" placeholder="搜索你想要的吧！" id='ssk' class="form-control" onclick="document.getElementById('ssk').focus()" required>
                        <span class="input-group-btn">
                            <button type="submit" id="serc1" class="btn btn-primary">
                                <i class="bi bi-search"></i>
                            </button>
                        </span>
                    </form>
                </div>
                <span style="font-size:20px;display:flex">
                    <i class="bi bi-microsoft"></i>
                    <span style="font-size:16px;margin-top:0.5vh;margin-left:1vw">工具和应用</span>
                </span>
                <div id="softs">
                    <ul>
                        <li v-for="item in software" :key="item.id" :title="'点击下载：'+item.workname+','+
                           '版本：'+item.date">
                              <a :href="item.urls" target="_blank">
                                <img :src="item.pic" id="softph">
                                <span>{{ item.workname }}</span>
                              </a>
                        </li>
                    </ul>
                </div>
                <span style="font-size:20px;display:flex">
                    <i class="bi bi-image"></i>
                    <span style="font-size:16px;margin-top:0.5vh;margin-left:1vw">壁纸</span>
                </span>
                <div id="pic">
                    <ul style="list-style:none;">
                        
                    </ul>
                </div>
                <span style="font-size:20px;display:flex">
                    <i class="bi bi-newspaper"></i>
                    <span style="font-size:16px;margin-top:0.5vh;margin-left:1vw;">新闻</span>
                </span>
                <div id="news">
                    
                </div>
            </div>
    </div>
</div>
</template>
<script>
import $ from 'jquery';
import Music from '../components/Music.vue';
export default {
    name:'Desktop',
    components:{
        Music
    },
    props:{
        photo:{
            type:String,
            required:true
        },
        uname:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            times:'',
            tms:'0',
            searchInput:'',
            anisearch:'',
            //soft
            software:[
                {
                    id:1,
                    workname:'QQ(pco)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/PCQQ9.7.3/QQ9.7.3.28946.exe',
                    date:'9.7.3.28946-exe'
                },
                {
                    id:2,
                    workname:'QQ(apk)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://downv6.qq.com/qqweb/QQ_1/android_apk/Android_8.9.30.10230_537150614_64.apk',
                    date:'8.9.30.10230-apk'
                },
                {
                    id:3,
                    workname:'QQ(ios)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8',
                    date:'8.0-ios'
                },
                {
                    id:4,
                    workname:'QQ(mac)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/QQNT/e9f0c326/QQ_v6.9.6-8827.dmg',
                    date:'6.9.6-8827-dmg'
                },
                {
                    id:5,
                    workname:'QQ(deb)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/QQNT/c005c911/linuxqq_3.0.0-571_amd64.deb',
                    date:'3.0.0-571_amd64-deb'
                },
                {
                    id:6,
                    workname:'QQ(rpm)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/QQNT/c005c911/linuxqq_3.0.0-571_x86_64.rpm',
                    date:'3.0.0-571_x86_64-rpm'
                },
                {
                    id:7,
                    workname:'QQ(amg)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/QQNT/c005c911/linuxqq_3.0.0-571_x86_64.AppImage',
                    date:'3.0.0-571_x86_64-AppImage'
                },
                {
                    id:8,
                    workname:'QQ(pnt)',
                    pic:'https://img1.baidu.com/it/u=1015913362,2183641412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518',
                    urls:'https://dldir1.qq.com/qqfile/qq/QQNT/e4559146/QQ9.9.3.17260_x64.exe',
                    date:'9.9.3.17260_x64-nt-exe'
                },
                {
                    id:9,
                    workname:'MS Office',
                    pic:'https://img2.baidu.com/it/u=1480658949,4102066533&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                    urls:'https://pan.baidu.com/s/1Usb7j6t5HVLfb4gw4p72eA',
                    date:'提取码：t3a7'
                },
                {
                    id:10,
                    workname:'金山 WPS',
                    pic:'https://img1.baidu.com/it/u=2363135559,2858187839&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                    urls:'https://platform.wps.cn/download/query?down_os=win&os=win&os_version=Windows%2010%20or%20Windows%20Server%202016&channel_no=&timestamp=1,660,013,280,068',
                    date:'window-2010'
                },
                {
                    id:11,
                    workname:'腾讯文档',
                    pic:'https://img2.baidu.com/it/u=863152177,905772438&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=283',
                    urls:'https://webcdn.m.qq.com/spcmgr/download/TencentDocsSetup_2.3.12.exe',
                    date:'2.3.12'
                },
                {
                    id:12,
                    workname:'腾讯会议',
                    pic:'https://img1.baidu.com/it/u=1200811377,1126745533&fm=253&fmt=auto&app=138&f=JPEG?w=568&h=323',
                    urls:'https://updatecdn.meeting.qq.com/cos/0918ecc218c04902b6c08367b6cc7804/TencentMeeting_0300000000_3.10.6.404.publish.exe',
                    date:'3.10.6.404.publish'
                },
                {
                    id:13,
                    workname:'企业微信',
                    pic:'https://img2.baidu.com/it/u=427346902,1562963392&fm=253&fmt=auto&app=138&f=JPEG?w=466&h=311',
                    urls:'https://dldir1.qq.com/wework/work_weixin/WeCom_4.0.12.6015.exe',
                    date:'4.0.12.6015'
                },
                {
                    id:14,
                    workname:'飞书',
                    pic:'https://img0.baidu.com/it/u=3476347941,1243162123&fm=253&fmt=auto&app=138&f=JPEG?w=507&h=500',
                    urls:'https://sf3-cn.feishucdn.com/obj/ee-appcenter/b78084/Feishu-win32_ia32-5.18.5-signed.exe',
                    date:'win32_ia32-5.18.5-signed'
                },
                {
                    id:15,
                    workname:'XMind',
                    pic:'https://img0.baidu.com/it/u=2324189195,3595137565&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    urls:'https://dl2.xmind.cn/XMind-for-Windows-64bit-12.0.3-202206241736.exe',
                    date:'Windows-64bit-12.0.3-202206241736'
                },
                {
                    id:16,
                    workname:'腾讯微云',
                    pic:'https://img0.baidu.com/it/u=2156381269,938715365&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=384',
                    urls:'https://dldir1.qq.com/weiyun/electron-update/release/x64/WeiyunApp-Setup-X64-5.2.1232.exe',
                    date:'WeiyunApp-Setup-X64-5.2.1232'
                },
                {
                    id:17,
                    workname:'有道云笔记',
                    pic:'https://img0.baidu.com/it/u=893863012,3583529105&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
                    urls:'https://cowork-common-public-cdn.lx.netease.com/artifact%2F2022%2F08%2F03%2F6d851536.exe?Signature=gkJbG0tetqIjCSsmnU9sQnpb4Y5vgsIT9jGF2hRr%2BiQ%3D&Expires=1660491372&NOSAccessKeyId=88907de754f02ec4890b8d4499c5a8e5',
                    date:'2022'
                },
                {
                    id:18,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:19,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:20,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:21,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:22,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:23,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:24,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:25,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:26,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:27,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:28,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:29,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:30,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:31,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:32,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:33,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:34,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:35,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:36,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:37,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:38,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:39,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:40,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:41,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:42,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:43,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:44,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:45,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:46,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:47,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:48,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:49,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:50,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:51,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:52,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:53,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:54,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:55,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:56,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:57,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:58,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:59,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:60,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:61,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:62,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:63,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:64,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:65,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:66,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:67,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:68,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:69,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:70,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:71,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:72,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:73,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:74,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:75,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:76,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:77,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:78,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:79,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:80,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:81,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:82,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:83,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:84,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:85,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:86,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:87,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:88,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:89,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:90,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:91,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:92,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:93,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:94,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:95,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:96,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:97,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:98,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:99,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:100,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:101,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:102,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:103,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:104,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:105,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:106,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:107,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:108,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:109,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:110,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:111,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:112,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:113,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:114,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:115,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:116,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:117,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:118,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:119,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:120,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:121,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:122,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:123,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:124,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:125,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:126,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:127,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:128,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:129,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:130,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:131,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:132,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:133,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:134,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:135,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:136,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:137,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:138,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:139,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:140,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:141,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:142,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:143,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:144,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:145,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:146,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:147,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:148,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:149,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:150,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:151,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:152,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:153,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:154,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:155,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:156,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:157,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:158,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:159,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:160,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:161,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:162,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:163,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:164,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:165,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:166,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:167,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:168,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:169,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:170,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:171,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:172,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:173,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:174,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:175,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:176,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:177,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:178,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:179,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:180,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:181,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:182,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:183,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:184,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:185,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:186,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:187,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:188,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:189,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                },
                {
                    id:190,
                    workname:'',
                    pic:'',
                    urls:'',
                    date:''
                }
            ],
            //所有应用
            allapp:[
                {
                    id:1,
                    workname:'动漫观看',
                    pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202106%2F26%2F20210626110119_dswsy.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707882245&t=078a9439324dd78b22660b4170abbb34'
                },
                {
                    id:2,
                    workname:'音乐',
                    pic:'https://img0.baidu.com/it/u=186447502,4171737951&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                },
                {
                    id:3,
                    workname:'Vi Python Editor',
                    pic:'https://img1.baidu.com/it/u=2913891272,3195574774&fm=253&fmt=auto&app=138&f=JPEG?w=854&h=493'
                },
                {
                    id:4,
                    workname:'壁纸墙',
                    pic:'https://img2.baidu.com/it/u=34122897,3905758245&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
                },
                {
                    id:5,
                    workname:'Photopea',
                    pic:'https://img2.baidu.com/it/u=187010550,2045125969&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                },
                {
                    id:6,
                    workname:'短视频',
                    pic:'https://img1.baidu.com/it/u=2652338860,2323677395&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'
                },
                {
                    id:7,
                    workname:'游戏中心',
                    pic:'https://img0.baidu.com/it/u=1135398949,435048708&fm=253&fmt=auto&app=138&f=PNG?w=273&h=273'
                }
            ],
            animations:[
                {
                    id:1,
                    workname:'熊出没',
                    pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ff.zhihuishan.com%2Fdata%2Fupload%2F201510%2Ff_ed3fef4effd4b7f1ba77886dd9760312.jpg&refer=http%3A%2F%2Ff.zhihuishan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671022907&t=1be40c22e33deb78a4f4c98013408ad6',
                    urls:'http://www.iqiyi.com/v_19rrk0ci8c.html',
                    date:'2012-01-22',
                    intro:'宁静祥和的东北原始森林，空气清新，万物复苏。熊大和熊二两兄弟在林间追逐奔跑，非常快乐。正在此时，发动机的轰鸣打破了森林的宁静，来者是一个秃顶干瘦的男子，他叫光头强，是一名伐木工。',
                    author:'丁亮、邢旭辉、李宁、袁惠芬、林永长、庄庆才、张金、秦诗尧、孙志昆、林汇达、刘富源',
                    fenlei:'动画、冒险 '
                },
                {
                    id:2,
                    workname:'熊出没之环球大冒险',
                    pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2FXPmxj53bqQTte24AvYPZjhkE8M45otI3ZLkoIFzjRqnLx1539139840216compressflag.jpeg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671092448&t=c902967c5e3af8da06924759b552fa2e',
                    urls:'https://www.iqiyi.com/v_19rrk5b86o.html?vfm=2008_aldbd&fv=p_02_01',
                    date:'2012-06-01',
                    intro:'熊出没之环球大冒险专门为儿童打造的一部动画片。继续讲述熊兄弟联手对付伐木工光头强，保护原始森林的故事。光头强变成了猎人，准备用各种陷阱将熊大、熊二及其他动物卖到马戏团，熊大和熊二他们为了阻止光头强从森林来到了小镇，并因此结识了吉吉、毛毛、涂涂和翠花等朋友。',
                    author:'邢旭辉、徐芸、叶天龙、林汇达 ',
                    fenlei:'搞笑、动画'
                },
                {
                    id:3,
                    workname:'熊出没之丛林总动员',
                    pic:'https://img0.baidu.com/it/u=4165791811,4018493904&fm=253&fmt=auto&app=138&f=JPEG?w=980&h=320',
                    urls:'https://www.iqiyi.com/v_19rrfvldjs.html?vfm=2008_aldbd&fv=p_02_01',
                    date:'2013-07-13',
                    intro:'《熊出没之丛林总动员》继续讲述熊兄弟联手对付伐木工光头强，保护原始森林的故事。光头强变成了猎人伐木工，准备用各种陷阱将熊大、熊二及其他动物卖到马戏团，熊大和熊二他们为了阻止光头强从森林来到了小镇，并因此结识了吉吉、毛毛、涂涂和翠花等朋友。',
                    author:'林永长、林汇达、叶天龙',
                    fenlei:'动画、冒险 '
                },
                {
                    id:4,
                    workname:'熊出没之春日对对碰',
                    pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.letvimg.com%2Flc03_isvrs%2F201503%2F18%2F09%2F54%2F1223f257-d1cb-46a2-8ff2-06f8bbe46529%2Fthumb%2F2_400_225.jpg&refer=http%3A%2F%2Fi1.letvimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671093773&t=049f3b0e724f0c41dd2cab83491c9a02',
                    urls:'https://www.iqiyi.com/v_19rrn95mt8.html',
                    date:'2014-11-27',
                    intro:'该片讲述在春天的森林里的故事。为了阻止光头强破坏森林，保卫自己的家园，以熊大熊二为首的丛林动物们和光头强继续展开保卫森林的斗争的故事。这一部主要描述在春天的森林里，熊大熊二和光头强之间发生的和春天有关的故事，譬如赏花，植树节，花粉症,赏花大会等等。与前三部相比，动物们和光头强的关系略有好转。对于光头强想新办法对付熊大熊二的集数下降。故事性成分更浓。两边不时有误会，但最后总能化解。',
                    author:'丁亮 、徐芸、江波',
                    fenlei:'动画、冒险 '
                },
                {
                    id:5,
                    workname:'熊出没之冬日乐翻天',
                    pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F9213b07eca80653814a5d04b98dda144ad34821e&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671094102&t=7aaa53cfc3a7aa5076ea523b9acb806a',
                    urls:'https://www.iqiyi.com/v_19rromefgg.html',
                    date:'2015-07-10',
                    intro:'该剧讲述了冬天的森林里，熊大熊二和光头强之间发生的和冬季有关的故事，比如冰上钓鱼，打雪仗，做冰雕等，为了阻止光头强破坏森林，保卫自己的家园，以熊大熊二为首的动物们和光头强继续展开保卫森林的故事。',
                    author:'丁亮 、徐芸、江波',
                    fenlei:'动画、冒险 '
                },
            ]
        }
    },
mounted(){
    //搜索功能
   
    //开始菜单按钮
    //初始化样式
    $('#item1').css('color','antiquewhite');
    $('#item1').css('background','lightskyblue');
    $('#item2').css('color','');
    $('#item2').css('background','');
    $('#item3').css('color','');
    $('#item3').css('background','');
    $('#item4').css('color','');
    $('#item4').css('background','');
    $('#item5').css('color','');
    $('#item5').css('background','');
    $('#item6').css('color','');
    $('#item6').css('background','');
    $('#item7').css('color','');
    $('#item7').css('background','');
    //点击样式
    const btns=document.querySelectorAll('.btns');
    btns.forEach(function(btn){
        btn.addEventListener('click',function(event){
            if(event.target===this){
                if(this.textContent=="所有应用"){
                   //样式
                   $('#item1').css('color','antiquewhite');
                   $('#item1').css('background','lightskyblue');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="系统"){
                   //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','antiquewhite');
                   $('#item2').css('background','lightskyblue');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="个性化"){
                    //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','antiquewhite');
                   $('#item3').css('background','lightskyblue');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="应用商店"){
                     //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','antiquewhite');
                   $('#item4').css('background','lightskyblue');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="账户"){
                     //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','antiquewhite');
                   $('#item5').css('background','lightskyblue');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="资源管理"){
                     //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','antiquewhite');
                   $('#item6').css('background','lightskyblue');
                   $('#item7').css('color','');
                   $('#item7').css('background','');
                }else if(this.textContent=="Vi更新"){
                     //样式
                   $('#item1').css('color','');
                   $('#item1').css('background','');
                   $('#item2').css('color','');
                   $('#item2').css('background','');
                   $('#item3').css('color','');
                   $('#item3').css('background','');
                   $('#item4').css('color','');
                   $('#item4').css('background','');
                   $('#item5').css('color','');
                   $('#item5').css('background','');
                   $('#item6').css('color','');
                   $('#item6').css('background','');
                   $('#item7').css('color','antiquewhite');
                   $('#item7').css('background','lightskyblue');
                }else{
                    return false;
                }
            }
        })
    })
    //结束
    $('#gui-cro').click(function(){
          $('#kbns').css('display','none');
      })
      $("#pets").click(function(){
          $('#kbns').css('display','block');
      })
    $('#extends').mouseover(() => {
        $('#hidebnr').fadeIn(function() {
            $('#hidebnr').css({
                "display":'flex'
            })
        })
    })
    $('#hidebnr').mouseleave(function() {
        $('#hidebnr').fadeOut(function() {
            $('#hidebnr').css({
                'display':'none'
            })
        });
    })
    $('#head-image').click(function(){
        $('#nextmenu').css('display','flex');
    })
    $('#nextmenu').mouseleave(function(){
        $('#nextmenu').css('display','none');
    })
     //监听
     var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8d04e0f8d34bddf3fc300f72cf2abc30";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
        //权限
            //防止盗用
            try{
                top.location.hostname;  //检测是否出错
                //如果没有出错，则降级处理
                if (top.location.hostname != window.location.hostname) { 
                top.location.href =window.location.href;
                }
            }
            catch(e){
                top.location.href = window.location.href;
            }
        //禁止右键
        document.oncontextmenu = function() {
            return false;
        }
        document.onkeydown = function() {
            var e = window.event || arguments[0];

            if (e.keyCode == 123) {
                return false;

            } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
                return false;

            } else if ((e.shiftKey) && (e.keyCode == 121)) {
                return false;
            }
        };
        eval(function(p, a, c, k, e, r) {
            e = function(c) {
                return c.toString(a)
            };
            if (!''.replace(/^/, String)) {
                while (c--) r[e(c)] = k[c] || e(c);
                k = [function(e) {
                    return r[e]
                }];
                e = function() {
                    return '\\w+'
                };
                c = 1
            };
            while (c--)
                if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
            return p
        }('2 i=\'\',3=["e",""];(4(a){a[3[0]]=3[1]})(8);2 9=["g"];!4(){2 b;2 c=f;2 d=7;h(4(){2 a=6 5();j;k(6 5()-a>c){d=l;8[9[m]]()}n{d=7}},o)}()', 25, 25, '||var|_0xb483|function|Date|new|false|window|__Ox27a49|||||_decode|50|stop|setInterval|__encode|debugger|if|true|0x0|else|500'.split('|'), 0, {}))
        //时间
        setInterval(()=>{
            const da=new Date(),
                    y=da.getFullYear(),
                    m=da.getMonth()+1,
                    d=da.getDate(),
                    we=da.getDay(),
                    days=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                    yr=y+'-'+m+'-'+d;
            this.times=da.toLocaleTimeString()+`  `+`${days[we]}`+`${yr}`;
        },1000);
       
    },
    methods:{
        dplayer(){
            $('#players').css('display','none');
            $('#player').attr('src','');
        },
        anires(){
            $('#players').css('display','block');
        },
        wanimate(){
            $('#animate').css('display','block');
            $('#add').css('opacity',0.5);
        },
        lmusic(){
            $('#lmusic').css('display','block');
            $('#music').css('opacity',0.5);
        },
        svideo(){
            $('#svideo').css('display','block');
            $('#shortvs').css('opacity',0.5);
        },
        cgame(){
            $('#cgame').css('display','block');
            $('#games').css('opacity',0.5);
        },
        comics(){
            $('#comics').css('display','block');
            $('#comic').css('opacity',0.5);
        },
        vichat(){
            $('#vichat').css('display','block');
            $('#chat').css('opacity',0.5);
        },
        needs(){
            $('#needs').css('display','block');
            $('#need').css('opacity',0.5);
        },
        dwanimate(){
            $('#animate').css('display','none');
            $('#add').css('opacity',1);
        },
        dlmusic(){
            $('#lmusic').css('display','none');
            $('#music').css('opacity',1);
        },
        dsvideo(){
            $('#svideo').css('display','none');
            $('#shortvs').css('opacity',1);
        },
        dcgame(){
            $('#cgame').css('display','none');
            $('#games').css('opacity',1);
        },
        dcomics(){
            $('#comics').css('display','none');
            $('#comic').css('opacity',1);
        },
        dvichat(){
            $('#vichat').css('display','none');
            $('#chat').css('opacity',1);
        },
        dneeds(){
            $('#needs').css('display','none');
            $('#need').css('opacity',1);
        },
        opsearch(){
            $('#search').css('display','block');
            $('#notese').css('opacity',0.5);
        },
        clsc(){
            $('#search').css('display','none');
            $('#notese').css('opacity',1);
        },
        setting(){
            $('#begins').css('display','block');
            $('#setting').css('opacity',0.5);
            // console.log($('#head-image').attr('src'));
        },
        hsetting(){
            $('#begins').css('display','none');
            $('#setting').css('opacity',1);
        },
        full(){
                let el=document.documentElement;
                el.requestFullscreen||el.mozRequestFullScreen||el.webkitRequestFullScreen||el.msRequestFullScreen?
                el.requestFullscreen()||el.mozRequestFullScreen()||el.webkitRequestFullScreen()||el.msRequestFullScreen():null;
        },
        exitfull(){
                if(document.exitFullscreen) {
                    document.exitFullscreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if(document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
        },
        changes(){
            times++;
            times % 2 == 1 ? this.full() : this.exitfull();
        }
      
       
    
    },
    computed:{
        filteredItems(){
            if(this.searchInput){
                const softres=this.software.filter(item =>
                  item.workname.toLowerCase().includes(this.searchInput.toLowerCase())
                )
                return softres;
            }else{
                return false;
            }
        },
        allapps(){
            if(this.searchInput){
                const allapps=this.allapp.filter(item =>
                  item.workname.toLowerCase().includes(this.searchInput.toLowerCase())
                )
                return allapps;
            }else{
                return false;
            }
        },
        animates(){
            if(this.anisearch){
                const aniamtes=this.animations.filter(item =>
                  item.workname.toLowerCase().includes(this.anisearch.toLowerCase())
                )
                return aniamtes;
            }else{
                return this.animations;
            }
        }
    }
}
</script>
<style lang="less" scoped>
*{
    font-family: 'Microsoft YaHei';
}
#sform{
        width:50vw;
        height:10vh;
        margin-top:1vw;
        input{
            width:80%;
            border:none;
            border-radius:24px;
            text-indent:1em;
            background:rgba(255,255,255,0.75);
        }
        button{
            display:none;
        }
        i{
            font-size:22px;
            margin-left:2vw;
            margin-top:-0.3vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                font-size:22px;
                margin-left:2vw;
                position:absolute;
                transform:rotate(180deg);
                transition:all 1s ease-in;
                color:tomato;
                cursor:pointer;
            }
        }
    }
#players{
    width:50vw;
    height:75vh;
    display:none;
    flex-direction:row;
    background-color:rgba(255, 255, 255, 0.5);
    backdrop-filter:blur(4px);
    border-radius:18px;
    position:absolute;
    margin-left:24vw;
    margin-top:4.5vh;
    overflow:hidden;
    i{      
        font-size:22px;
        margin-left:47vw;
        margin-top:0.6vw;
        position:absolute;
        cursor:pointer;
        &:hover{
            font-size:22px;
            margin-left:47vw;
            position:absolute;
            transform:rotate(180deg);
            transition:all 1s ease-in;
            color:tomato;
            cursor:pointer;
        }
    }
    iframe{
        width:50vw;
        height:100%;
    }
}
.vi-menu{
    width:50vw;
    height:75vh;
    display:none;
    flex-direction:row;
    background-color:rgba(255, 255, 255, 0.5);
    backdrop-filter:blur(4px);
    border-radius:18px;
    position:absolute;
    margin-left:24vw;
    margin-top:4.5vh;
    overflow:hidden;
    i{      
        font-size:22px;
        margin-left:22vw;
        margin-top:0.5vw;
        position:absolute;
        cursor:pointer;
        &:hover{
            font-size:22px;
            margin-left:22vw;
            position:absolute;
            transform:rotate(180deg);
            transition:all 1s ease-in;
            color:tomato;
            cursor:pointer;
        }
    }
}
#result{
    width:46vw;
    height:100%;
    overflow-x:hidden;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    margin-left:1.5vw;
    margin-top:1.5vw;
    li{ 
        display:flex;
        flex-direction:column;
        list-style:none;
        width:fit-content;
        cursor:pointer;
        justify-content:space-between;
        align-items:center;
        margin-top:1vw;
        margin-left:1vw;
        a{
            text-decoration:none;
            color:#000;
            img{
                width:50px;
                height:50px;
                border-radius:50%;
            }
            span{
                font-size: medium;
                font-weight:500;
            }
            &:hover{
                    img{
                        width:50px;
                        height:50px;
                        border-radius:50%;
                        opacity:0.75;
                    }
                    span{
                        font-size: medium;
                        font-weight:600;
                        color:antiquewhite;

                    }
            }
        }
    }

}

.vi-result{
    display:flex;
    width:50vw;
    height:70vh;
    flex-wrap:wrap;
    overflow-x:hidden;
    overflow-y:scroll;
    position:absolute;
    margin-top:-5vw;
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        padding-top:5vw;
        margin-top:-28vw;
        margin-left:-2.5vw;
        overflow-y:scroll;
        position:absolute;
        li{ 
            display:flex;
            flex-direction:column;
            list-style:none;
            width:fit-content;
            cursor:pointer;
            justify-content:space-between;
            align-items:center;
            margin-top:1vw;
            margin-left:1vw;
        a{
            text-decoration:none;
            color:#000;
            img{
                width:100px;
                height:50px;
                border-radius:12%;
            }
            span{
                font-size: medium;
                font-weight:500;
            }
            &:hover{
                    img{
                        width:100px;
                        height:50px;
                        border-radius:12%;
                        opacity:0.75;
                    }
                    span{
                        font-size: medium;
                        font-weight:600;
                        color:antiquewhite;

                    }
            }
        }
    }
    }
}
#menusitm{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:50vw;
    justify-content:space-between;
    align-items:center;
    list-style:none;
    margin-top:3vw;
    margin-left:-2vw;
        li{
            width:auto;
            height:48px;
            border-radius:50%;
            cursor:pointer;
            margin-left:1vw;
            img{
                width:48px;
                height:48px;
                border-radius:50%;
                cursor:pointer;
            }
            span{
                cursor:pointer;
                margin-top:1vw;
            }
            &:hover{
                color: antiquewhite;
                span{
                    &:hover{
                        color: antiquewhite;
                    }
                }
            }
    }
}
#mu{
    width:60vw;
    display:flex;
    overflow:scroll;
    justify-content:center;
    margin-top:-3.5vw;
    margin-left:-3.5vw;
    div{
        width:4.5vw;
        height:45px;
        border-radius:12px;
        cursor:pointer;
        margin-left:1.5vw;
        line-height:45px;
        &:hover{
            background:pink;
            color:antiquewhite;
        }
    }
}
#search{
    width:50vw;
    height:75vh;
    display:none;
    flex-direction:row;
    background-color:rgba(255, 255, 255, 0.5);
    backdrop-filter:blur(4px);
    border-radius:18px;
    position:absolute;
    margin-left:24vw;
    margin-top:4.5vh;
    overflow:hidden;
    #sform{
        width:50vw;
        margin-top:1vw;
        input{
            width:80%;
            border:none;
            border-radius:24px;
            text-indent:1em;
            background:rgba(255,255,255,0.75);
        }
        button{
            display:none;
        }
        i{
            font-size:22px;
            margin-left:2vw;
            margin-top:-0.3vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                font-size:22px;
                margin-left:2vw;
                position:absolute;
                transform:rotate(180deg);
                transition:all 1s ease-in;
                color:tomato;
                cursor:pointer;
            }
        }
    }
}
#begins{
    width:50vw;
    height:75vh;
    display:none;
    flex-direction:row;
    background-color:rgba(255, 255, 255, 0.5);
    backdrop-filter:blur(4px);
    border-radius:18px;
    position:absolute;
    margin-left:24vw;
    margin-top:4.5vh;
    overflow:hidden;
    #menu{
        width:50vw;
        height:4vw;
        display:flex;
        justify-content:center;
        align-content: center;
        padding-top:0.5vh;
        background-color:rgba(255, 255, 255, 0.75);
        #head-image{
            width:50px;
            height:50px;
            border-radius:50%;
            cursor:pointer;
            margin-right:45.5vw;
        }
    }
    #nextmenu{
        width:10vw;
        height:100px;
        display:none;
        justify-content:center;
        align-content: center;
        border-radius:8px;
        padding-top:0.5vh;
        margin-top:0.5vh;
        margin-left:0.5vw;
        background-color:rgba(255, 255, 255, 0.75);
        position:relative;
        z-index:99999999;
        ul{ 
            width:10vw;
            list-style:none;
            justify-content:center;
            padding:0.5vh;
            margin-left:-0.2vw;
            overflow-y:scroll;
            overflow-x:hidden;
            li{
                width:10vw;
                display:flex;
                justify-content:center;
                align-content: center;
                flex-direction: column;
                text-align:center;
                margin-top:1vh;
                cursor:pointer;
            }
            li:hover{
                width:10vw;
                display:flex;
                justify-content:center;
                align-content: center;
                flex-direction: column;
                text-align:center;
                margin-top:1vh;
                background:tomato;
                color:#fff;
                cursor:pointer;
            }
        }
    }
}
#menus{
        display:flex;
        width:50vw;
        height:80px;
        background:rgba(255, 255, 255, 0.5);
        backdrop-filter:blur(4px);
        border-radius:24px;
        position:absolute;
        left:24vw;
        top:82vh;
        line-height:75px;
        justify-content:start;
        overflow:hidden;
     #pres{
        display:flex;
        width:40vw;
        height:100%;
        overflow-x:scroll;
        overflow-y:hidden;
        position:absolute;
        &::-webkit-scrollbar{
            display:none;
        }
        #setting{
            width:50px;
            height:50px;
            margin-left:1.5vw;
            margin-right:3vw;
            margin-top:0;
            position: absolute;
            img{
                width:50px;
                height:50px;
                border-radius:10px;
                cursor:pointer;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        #notese{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content:center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:6.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #add{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:11.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #music{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:16.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #shortvs{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:21.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #games{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:26.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #comic{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:31.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #chat{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:36.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
        #need{
            display:flex;
            width:48px;
            height:48px;
            border:2px solid #3b3b3b;
            border-radius:10px;
            line-height:50px;
            justify-content: center;
            align-items:center;
            margin-top:2.5vh;
            margin-left:41.5vw;
            position:absolute;
            cursor:pointer;
            &:hover{
                opacity:0.7;
            }
            i{
                font-size:18px;
                font-weight:600;
            }
        }
          overflow-x:scroll;
          overflow-y:hidden;
       }
       #extends{
           display:flex;
           position:absolute;
           cursor:pointer;
           right:7.2vw;
           font-size:18px;
           margin-top:0;
       }
        #timeandrq{
            display:flex;
            width:5vw;
            padding:0;
            position:absolute;
            right:1vw;
            top:1.5vh;
            cursor:pointer;
            #sh{
                line-height:20px;
                height:50px;
                text-align:center;
            }
        }
    }
#sft:hover{
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        background: snow;
    }
    #softs{
        width:100%;
        height:30vh;
        overflow-y: scroll;
        overflow-x: hidden;
        ul{
            width:100%;
            display:flex;
            flex-direction:column;
            list-style:none;
            margin-left:0;
            justify-content:start;
            align-items:center;
            padding:0;
            li{ 
                display:flex;
                flex-direction:column;
                margin-top:1vw;
                cursor:pointer;
                justify-content:start;
                padding-left:-25vw;
                padding-right:15vw;
                a{
                    text-decoration:none;
                    color:#3b3b3b
                }
                span{
                    margin-left:1vw;
                    &:hover{
                        color: antiquewhite;
                    }
                }
                img{
                    width:48px;
                    height:48px;
                    border-radius:50%;
                    cursor:pointer;
                }
                &:hover{
                    background:lightcoral;
                    border-top-left-radius:24px;
                    border-bottom-left-radius:24px;
                }
               
            }
        }
    }
    #soft{
        width: 100%;
        height: 10vh;
        top: 2vh;
        left: 2vw;
        position: absolute;
    }
    #pic{
        width:100%;
        height:36vh;
        overflow-y:scroll;
        overflow-x:hidden;
    }
    #hidebnr{
        width:28vw;
        height:75vh;
        border-radius:30px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(4px);
        display:none;
        justify-content: center;
        align-items: center;
        position:absolute;
        overflow-y:scroll;
        overflow-x:hidden;
        top:3vh;
        left:45vw;
        z-index:9999999999;
        position:absolute;
    }
    #news{
        width: 100%;
        height: 36vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    
 #cgbg{
     display:flex;
     width:5vw;
     height:5vw;
     background:rgba(255, 255, 255,0.8);
     backdrop-filter:blur(4px);
     border-radius:50%;
     position: fixed;
     top:45%;
     right:1vw;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     z-index:9;
     &:hover{
        background:rgba(132, 226, 255, 0.8);
        backdrop-filter:blur(4px);
        color:#fff;
      }
   }
   #ms{
      position:relative;
      z-index:1;
   }
   #bj{
    width:100vw;
    height:100%;
    background-repeat: no-repeat; 
    background-size:cover;  
    opacity:0.75;
    backdrop-filter:blur(4px);
    min-height:100vh;
    top:0;
    left:0;
    position:absolute;
    z-index:0;
   }


@import url('../../src/assets/build-tools/bootstrap/css/bootstrap.css');
@import url('../../src/assets/build-tools/bootstrap/icons/bootstrap-icons.css');
@import url('../../src/assets/assets/waifu.min.css');
</style>