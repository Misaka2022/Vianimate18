<template>
  <div class="logandreg">
    <div id="welcome">
      <div id="cinfo">
        <span id="wel" @click="welClos">
            <i class="bi bi-x"></i>
          </span>
          <span id="tpc">
            <i class="bi bi-chat-left-dots"></i> 消息通知
        </span>
       </div>
        <div id="tpsi">{{ code }}</div>   
    </div>
      <div id="arti-tl">
          <span id="clos" title="点击此处可退出本站">
            <i class="bi bi-x"></i>
          </span>
          <form method="post" id="fm">
              <span id="headtitle">L & R</span>
              <p id="us">
                <label for="username">您的账号：</label>
                <input type="text" name="username" id="username" v-model="username"
                placeholder="您的账号是什么呢？" required>
              </p>
              <p id="wd">
                <label for="psw" >您的密码：</label>
                <input type="password" name="psw" id="psw" v-model="psw"
                placeholder="别忘了密码哦"  required>
              </p>
               <p id="wdr">
               <label for="rpsw" id="rplb" title="点击获取验证码" @click="getCode" :disabled="disabled"
               :style="{cursor:`${cursor}`,pointerEvents:`${pointerEvents}`}">{{ yz }}</label>
               <input type="text" name="rpsw" id="rpsw" v-model="rpsw"
               placeholder="别忘了验证码哦" value="" required>
               <input type="text" disabled id="res">
               </p>
               <p id="pto">
               <label for="uspt" id="usph" @click="pickphoto">您的头像：</label>
               <input type="text" name="uspt" id="uspt" :value="uspt" 
               placeholder="选择你喜欢的头像吧" disabled>
               </p>
               <p id="tips">
                  <span id="tips-reb">
                     密码忘记了？<router-link to="/rebackpsw">找回密码</router-link>
                  </span>
               </p>
               <p id="xy">
                    <input type="checkbox" for="xys" name="xieyi" required="required" id="xieyi" @click="xieyi">
                    <span id="xys">我已阅读并同意<a href="#" id="usexieyi" @click="usexieyi">《Vianimate使用协议》</a></span>
               </p>
               <button type="button" id="anni"  @click="sendResult">{{ lr }}</button>
               <input type="text" id="uls" style="display:none">
          </form>
          <div id="ifs">
               <div v-bind:class="usif">
                  <div id="hd">
                    <img src="../assets/img/2021/tub.png" alt="" class="logo">
                    <span class="tile">Vianimate 动漫</span>
                </div>
                <h4>欢迎使用Vianimate动漫系统</h4>
                <small>下滑以登录或注册</small>
                <br>
                你应该知道以下规范。 <br>
                1.不要用它来制作出版作品。<br>
                2.不得使用技术手段攻击和爬取代码。 <br>
                3.这是作者权益，不允许任何人修改。<br>
                这个系统有一些可描述的用途。
                它是一个管理动画和其他东西的人需要使用，它是专业的。 <br>
                1.你想快速使用它，你想学习如何使用它。现在，请阅读下面的一些信息。首先打开浏览器，比如，火狐，谷歌Chorme。 <br>
                2.其次，输入你的账号和密码。如果您没有此帐户，您可以单击“注册”获得帐户。<br>
                3.当您注册或登录时，我们一定会保护您的帐户和密码。我们收集您的一些信息来检查您的状态。所以，如果你同意这个行动和协议，你可以点击提交按钮。<br>
                关于我们<br>
                我们是在2015年开始的，起初的名字是白云创意。经过7年的发展，我们决定将工作室的名字命名为Vianimate。如果你有好的动画创意，欢迎告诉我们(email:misaka0835@163.com)。<br>
                
                Welcome to Vianimate Management System.There are some laws you should be know.<br>
                1.Don't use it to make publish works.<br>
                2.Don't change code if you get it.<br>
                3.It's Copyright for author don't allow anybody to change.<br>
                
                There are some use describle for this system.<br>
                1.This system is a manage animation and other things which someone need to use and it is pro.<br>
                2.You want to use it quickly and you want to learn how to use.Now,read some infomation below.<br>
                (1)First,open your broswer.Such as,FireFox,Google Chorme.<br>
                (2)Second,input your account number and password.If you have no account for this,you can click "Register" to get the account.<br>
                (3)Our protect your account and password certainly when you register or login.And our gather some infomation of you to scan the state of you.So,if you agree this action and protocol you can click the square over submit button.<br>
                
                About us<br>
                We are develope in 2015 and the begin name is BaiYun Creative.And after 7 years of development,we are decided the name of the work house name is Vianimate.<br>
                If you have a good idea for animate,welcome to tell us.(email:misaka0835@163.com) 
                </div>
                <br>
                <button id="tongyi" @click="tongyi">我已阅读并同意该协议</button> 
           </div>
      </div>
      <div id="hplst">
          <h4 style="background:#fff;padding-right:5vw">头像选择</h4>
          <p id="ls">
             <ul id="pickp">
                <li v-for="(item,index) in hpurl" :key="index" @click="picks(index)">
                      <img :src="item.url" alt="" id="pp">
                </li>
             </ul>
          </p>
     </div>
     <nav>
      <div id="setting" title='Vianimate动漫'>
         <img src="../../src/assets/img/2021/tub.png">
      </div>
      <div id="notese" title="登录" @click="logs">
        <i class="bi bi-journal-bookmark"></i>
      </div>
      <div id="add" title="注册" @click="adds">
        <i class="bi bi-plus"></i>
      </div>
      <div id="extends" title="扩展">
          <i class="bi bi-chevron-compact-up"></i>
      </div>
      <div id="timeandrq" title="时间与日期">
          <span id="sh">{{ times }}</span>
      </div>
  </nav>
  </div>
</template>

<script>
import router from '@/router';
import $ from '../../node_modules/jquery';

export default {
  name: 'LoginPage',
  data(){
     return{
        times:'',
        pool:[],
        code:"",
        usif:{
          userinfo:true
        },
        hpurl:[
            {
              id:1,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb4a87154-18b6-4163-ac80-f4dc4bf58d09%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620875&t=fa710969c67e6ff6471016d5004e6f6f"
            },
            {
              id:2,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fa3f953ad-ade7-4e12-91f2-0d3749adf67a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620875&t=6b21d33d18d021ab6d28865625cfd2a1"
            },
            {
              id:3,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb888548a-1661-46b7-86ed-b730d32b2ed9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620874&t=0aa6d15b64cad75747564da68d6d0bcc"
            },
            {
              id:4,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4f2d9a4f-313b-43ec-a347-66d2a11e241b%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620875&t=77456ea731a526c1892bcb4c513d72a7"

            }
            ,
            {
              id:5,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fff954ed0-244c-45f5-8525-47814fd214a8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620875&t=d68c46e2eea825071e6ec10ae6267fe9"

            },
            {
              id:6,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2081d6f2-cf3c-4937-90df-7166729a8a82%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697621008&t=50e78c461e51a777815cc2fe94396710"
            },
            {
              id:7,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F31%2F20200331000349_odinr.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697620873&t=b81c0b8f4685e4bd606d50f3fd3b0804"
            },
            {
              id:8,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc5ba55f7-baab-42b6-b01d-2d1765b51af3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171246&t=306588afe1bef2152329b6bd2f0e396c"
            },
            {
              id:9,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F29b23ae1-005a-49fb-909b-e3d76228f1c2%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171246&t=7b6abc4f3eaa083cf34ae337f0690328"
            },
            {
              id:10,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F34f05490-4b5a-4f1c-9787-bc652865765f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171246&t=04f55d2de0f7efd6a0559dc16ff4b5b2",

            },
            {
              id:11,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc1868888-ee06-4b4b-8311-787c5fcfc372%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171246&t=ca97307ec16ad5d9d58972b1271aa9d3",

            },
            {
              id:12,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1f0256fe-b59a-4aca-9b89-8f1ac61ac3aa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171246&t=3384ecd2ef3f89b2d53e235fca76c5dc",

            },
            {
              id:13,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2788378f-8056-43f2-9dd1-2378492925a8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171247&t=fda847dfe141bb1307ad6f2227e196c8",

            },
            {
              id:14,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe7059566-75c2-4757-9b07-2dd91b2a009f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171247&t=a7901b3e9d694be08f4a50b19a073848",

            },
            {
              id:15,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202110%2F31%2F20211031215023_805c2.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171245&t=abbef4692b191b2905a7625fa1fb755a",

            },
            {
              id:16,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F056708c6-0633-4b8e-9fdb-38f0d182aaaf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171580&t=6dabb9673b32a88016e0d83ead025e45",

            },
            {
              id:17,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F34b72822-b16e-42c6-8ff4-c67dcbd65b62%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171580&t=df7fe3f10a11849b54e83d5caabcfa3b",

            },
            {
              id:18,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F66675a50-609a-41a8-98c9-1be96f4037d3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171953&t=4d85f2b98ea130193c3635c65a98726e",

            },
            {
              id:19,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F71e4d634-1588-4012-b9b8-1c9d3a3ff9be%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171953&t=195f2a2ab5822ea4496deeba87193034",

            },
            {
              id:20,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2Fc145308e-a727-43fe-a2f0-eb084af7d4d3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171953&t=1e72f1096d3459af0a96df85cbdf6304",

            },
            {
              id:21,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F287eaf05-2d5f-448f-beb8-6345d2ff7e02%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171958&t=62c0ea2029ca907d3315030f48ccf87c",

            },
            {
              id:22,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4531187d-b299-4d06-81b9-a97bf0ecb316%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699171958&t=76c8826cfbc687e2e6c1609b7c0b5c6e",

            },
            {
              id:23,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F10%2F20200510010150_2zSAt.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=b1be7edf7246caa46c4a85bbf3bf4e7f",

            },
            {
              id:24,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F01%2F20200501100245_vgkkv.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=d2634816caef6c74b4e8c7d676c8e9b5",

            },
            {
              id:25,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F14%2F20200614201754_UdLFQ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=2098023f733d0aa476a8e63e1f1b6d0b",

            },
            {
              id:26,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F08%2F20210408061705_50a89.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=15623c50d13fcd4186f6eddc1d45796a",

            },
            {
              id:27,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330091314_yNVUZ.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=6e9f1c7bde9c157f3b6dd8d276bb3585",

            },
            {
              id:28,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F21%2F20200721225542_2R83m.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=f9fb4be10253ff78054fb83b76049cca",

            },
            {
              id:29,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F29%2F20200429071750_hpyyf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=874e91fe6be1dce6f57e41c5490d535c",

            },
            {
              id:30,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F11%2F20210511152045_e94aa.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699172238&t=c4c1da0bb51599ee4a52dff3d3f71d46",

            },
            {
              id:31,
              url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F62627729-e947-4a05-a7b5-687b32d8cff2%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699173106&t=68dcb85dce3ba256d3067e89967a8a3a"

            }
        ],
        username:'',
        psw:'',
        rpsw:'',
        uspt:'',
        userLsts:['Alice'],
        passwords:['123456'],
        uspts:[],
        userLst:['Alice'],
        password:['123456'],
        userp:[],
        yz:"获取验证：",
        lr:"登录",
        disabled:'false',
        cursor:'pointer',
        pointerEvents:'auto'
     }
  },
  created(){
     //数据
     if(this.userLsts==null && this.passwords==null && this.userp==null){
        this.userLsts.unshift(this.getCookieValue('username'));
        this.passwords.unshift(this.getCookieValue('psw'));
        this.userp.unshift(this.getCookieValue('uspt'));
      }else{
        this.userLsts.push(this.getCookieValue('username'));
        this.passwords.push(this.getCookieValue('psw'));
        this.userp.push(this.getCookieValue('uspt'));
      }
  },
  mounted(){

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
    //隐藏头像选择
     $('#hplst').mouseleave(function(){
              $('#hplst').css('display','none');
     })
     $('#welcome').fadeOut();
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
    getCookieValue(name){
          let cookies = document.cookie.split(";");
          for (let i = 0; i < cookies.length; i++) {
              let cookie = cookies[i].split("=");
              if (cookie[0] === name) {
                  return decodeURIComponent(cookie[1]);
              }
          }
      },
    logs(){
        $('#htl').text('登录');
        $('#wdr').css({
            'display':'block'
        });
        $('#pto').css({
            'display':'block'
        });
        $('#tips').css('display','block');
        $('#arti-tl').css('display','block');
        $('#fm').attr('action','../view/Desktop.php');
        $('#anni').val('登录');
        $('#headtitle').val('登录');
        $('title').text("Vianimate动漫-登录");
        this.lr="登录";
     },
     adds(){
        $('#htl').text('注册');
        $('#wdr').css({
            'display':'block'
        });
        $('#pto').css({
            'display':'block'
        });
        $('#tips').css('display','none');
        $('#anni').val('注册');
        $('#headtitle').val('注册');
        $('#arti-tl').css('display','block');
        $('#fm').attr('action','../view/note.php');
        $('title').text("Vianimate动漫-注册");
        this.lr="注册";
     },
    sendResult(){
       const array=this.userLsts;
       const pass=this.passwords;
       const usnm=this.username;
       const pswd=this.psw;
       if(this.lr=="登录"){
          if(array.includes(usnm) && pass.includes(pswd)){
              this.$emit('logpage','true');
              this.$emit('uspt',this.uspt);
              this.$emit('usnm',this.username);
              $('title').text("Vianimate动漫-桌面");
          }else{
              alert("用户和密码错误")
          }
      }else if(this.lr=="注册"){
        if(usnm!=null && pswd !=null && 0<usnm.length<12 && 0<pswd.length<16){
          if(array.includes(usnm) && pass.includes(pswd)){
               alert('用户已存在');
          }else{
              array.unshift(usnm);
              pass.unshift(pswd);
              //设置cookie保存用户信息
               let expires=new Date();
               expires.setTime(expires.getTime()+(24*60*60*1000));
               let cokk=document.cookie="username="+usnm+";"+"psw="+pswd+";"+"uspt="+this.userp[0]+";"+"expires="+expires.toUTCString();
               if(cokk){
                  alert("注册成功！");
                  this.lr=="登录";
                  this.logs();
               }
               
          }
        }
      }
    },
    picks(index){
      this.uspt=this.hpurl[index].url;
    },
    pickphoto(){
        $('#hplst').css('display','block');
    },
    usexieyi(){
      $('#prot').css("display","block");
    },
    handleScroll2(){
        var container = document.querySelector('.imf');
        var scrollTop = container.scrollTop;  // 页面滚动的距离
        var scrollbar = container.querySelector('::-webkit-scrollbar');
        if (scrollTop > 100) {
        scrollbar.style.opacity = 0;  // 滚动距离超过 100px，隐藏滚动条
        } else {
        scrollbar.style.opacity = 1;  // 滚动距离小于等于 100px，显示滚动条
        }
    },
    tongyi(){
      $('#prot').css("display","none");
          document.getElementById('xieyi').checked=true;
          if(document.getElementById('xieyi').checked=true){
              document.getElementById('tongyi').disabled=true;
          }else{
              document.getElementById('xieyi').checked=false;
              document.getElementById('tongyi').disabled=false;
          }
    },
    xieyi(){
      if(document.getElementById('xieyi').checked=true){
            document.getElementById('tongyi').disabled=true;
        }else{
            document.getElementById('tongyi').disabled=false;
        }
    },
    welClos(){
      $('#welcome').css('display',"none");
      $('#tpsi').css({'text-align':'center','padding-left':'2vw'});
    },
    getCode(){
      this.code='您本次的验证码是：'+this.randomString();
      this.countDown(60);
      $('#res').css({
            'display':'block',
            'border':'none',
            'background':'none'
        });
      $('#welcome').css('display','flex').fadeIn();
    },
    randomString(){
        return Math.random().toString(36).slice(2,8).padEnd(6,'0');
    },
    countDown(seconds){
              let remainingTime =seconds;
              const interval = setInterval(() => {
              remainingTime--;
              if (remainingTime === 0) {
                  clearInterval(interval);
                  this.yz='获取验证：';
                  this.code="";
                  this.disabled='false';
                  this.cursor='pointer';
                  this.pointerEvents='auto';
              } else {
                  console.log(remainingTime);
                  this.yz=remainingTime+'s后获取：';
                  this.disabled='true';
                  this.cursor='not-allowed';
                  this.pointerEvents='none';
              }
      },1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#tpc{
  font-size:14px;
  text-align:left;
  margin-top:-3vw;
  margin-left:-20vw;
  cursor:default;
  position:absolute;
}
#cinfo{
  display:flex;
  justify-content: center;
  width:80%;
  height:5vw;
  margin-left:0;
  position:absolute;
}
#tpsi{
  width:24vw;
  height:12vh;
  margin-left:-3.5vw;
  position:absolute;
}
nav {
  display:flex;
  width:50vw;
  height:80px;
  background:rgba(255, 255, 255, 0.5);
  backdrop-filter:blur(4px);
  border-radius:24px;
  position:absolute;
  left:24vw;
  top:80vh;
  line-height:75px;
  justify-content:start;
  overflow:hidden;
  #setting{
    width:50px;
    height:50px;
    margin-left:1.5vw;
    margin-right:1.3vw;
    margin-top:0vh;
    position:relative;
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
      width:46px;
      height:46px;
      border:2px solid #3b3b3b;
      border-radius:10px;
      line-height:46px;
      justify-content:center;
      align-items:center;
      margin-top:2.5vh;
      margin-right:1.5vw; 
      position:relative;
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
      width:46px;
      height:46px;
      border:2px solid #3b3b3b;
      border-radius:10px;
      line-height:46px;
      justify-content: center;
      align-items:center;
      margin-top:2.5vh;
      position: relative;
      cursor:pointer;
      &:hover{
          opacity:0.7;
      }
      i{
          font-size:18px;
          font-weight:600;
      }
  }
  #extends{
      display:flex;
      width:46px;
      height:46px;
      border:2px solid #3b3b3b;
      border-radius:10px;
      line-height:46px;
      justify-content: center;
      align-items:center;
      margin-top:2.5vh;
      margin-left:24vw;
      position: relative;
      cursor:pointer;
      &:hover{
          opacity:0.7;
      }
      i{
          font-size:18px;
          font-weight:600;
      }
  }
  #timeandrq{
      display:flex;
      width:5vw;
      padding:0;
      position:relative;
      right:-1vw;
      top:1.5dvh;
      cursor:pointer;
      #sh{
          line-height:20px;
          height:50px;
          text-align:center;
      }
  }
}
#usph{
  cursor:pointer;
}
#hplst{
    display:none;
    width:20vw;
    height:70vh;
    border-radius:24px;
    flex-direction:column;
    flex-wrap:wrap;
    overflow:hidden;
    margin-top:-67.5vh;
    left:75vw;
    padding-left:2vw;
    position:absolute;
    background:#fff;
}
#hplst>h4{
    display:flex;
    position:fixed;
    padding-left:5vw;
    /* z-index:999; */
}
#hplst>p{
    width:20vw;
    height:65vh;
    margin-top:2vh;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    overflow-y:scroll;
    overflow-x:hidden;
}
#hplst>p>ul{
  width:20vw;
  list-style:none;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  margin-left:-4.5vw;
}
#hplst>p>ul>li{
  justify-content: start;
  align-items: center;
}
#hplst>p>ul>li>img{
    width:5vw;
    height:5vw;
    border-radius:50%;
    margin-top:2vw;
    cursor:pointer;
    margin-left:2vw;
}
#headtitle{
  font-size:18px;
  font-weight:500;
  margin-left:4vw;
  margin-bottom:2vw;
  letter-spacing:1em;
  cursor:default;
}
.userinfo{
  border:none;width:25vw;height:85%;padding:2vw;position:sticky;overflow-y:scroll;
}
.logo{
  width:42px;
  height:42px;
  margin-left:-1vw;
  margin-right:0.5vw
}
.tile{
  font-size:18px;
  margin-top:0.2vw;
}
#welcome{
      width:24vw;
      height:18vh;
      margin-top:2vw;
      margin-left:75.5vw;
      padding-top:3.5vw;
      padding-left:4vw;
      border-radius:24px;
      font-size:18px;
      background:lightyellow;
      overflow:hidden;
      position:absolute;
      z-index:99999999999999;
      div{
        #wel{
         position:absolute;
         z-index:99999999999999;
        i{
              font-size:20px;
              cursor:pointer;
              margin-top:-3.5vw;
              margin-left:8vw;
              overflow:hidden;
              position:absolute;
              &:hover{
                    font-size:20px;
                    cursor:pointer;
                    color:tomato;
                    margin-top:-3.5vw;
                    margin-left:8vw;
                    overflow:hidden;
                    position:absolute;
              }
          }
      }
      }
  }
 
  #arti-tl{
      display:flex;
      width:50dvw;
      height:75dvh;
      background:rgba(255, 255, 255, 0.5);
      backdrop-filter:blur(4px);
      position:relative;
      border-radius:24px;
      z-index:999999999;
      top:3dvh;
      left:24dvw;
      overflow: hidden;
      #clos{
          display:flex;
          right:1dvw;
          top:1dvh;
          font-size:2em;
          color:rgb(48, 176, 255);
          position: absolute;
          cursor: pointer;
          &:hover{
              transform: rotate(360deg);
              transition: all ease 2s;
              color:tomato;
          }
      }
      form{
          display:flex;
          flex-direction:column;
          align-items: center;
          justify-content:center;
          margin-top:14dvh;
          margin-left:26.5dvw;
          position:absolute;
          #us{
              display:flex;
              flex-direction:row;
              justify-content: center;
          }
          #wd{
              display:flex;
              flex-direction:row;
              justify-content: center;
          }
          #wdr{
              flex-direction:row;
              justify-content: center;
              #res{
                display:none;
              }
          }
          #pto{
              flex-direction:row;
              justify-content:center;
          }
          #tips{
              #tips-reb{
                  a{
                      text-decoration:none;
                  }
                  
              }
              #tips-reg{
                  margin-left:2dvw;
                  a{
                      text-decoration:none;
                  }
              }
          }
          #xy{
              #xys{
                  a{
                      text-decoration:none;
                  }
              }
          }
          #anni{
              width:10dvw;
              height:fit-content;
              border-radius:24px;
              background:rgb(255, 197, 131);
              color:#fff;
              border:none;
              margin-top:2.5vh;
              margin-left:1vw;
              position:relative;
              z-index:9;
              &:hover{
                  background:rgb(131, 255, 158);
                  color:#389fff;
              }
          }
          #htl{
              font-size:18px;
              font-weight:600;
              text-align:center;
              margin-bottom:2dvh;
              letter-spacing:1em;
              padding-left:2dvw;
              left:50%;
              top:3dvh;
          }
      }
      #ifs{
          left:0;
          width:24dvw;
          height:75dvh;
          position:relative;
          #tongyi{
            margin-top:-24vw;
            margin-left:1vw;
            position:relative;
          }
      }
  }
.logandreg{
  width:100vw;
  height:100%
}
#oph{
    display:none;
  }
  #uspt{
    width:12.5vw;
  }
  #hdp{
    width:10vw;
    height:20vh;
    position:absolute;
    z-index:99999;
  }
  #ddp{
    width:8vh;
    height:8vh;
    border-radius:50%;
  }
  #username,
  #psw,
  #rpsw,
  #uspt{
    border:none;
    border-bottom:2px gray solid;
    background:none;
    border-radius:12px;
    text-align:center;
  }
  #username:focus,
  #psw:focus,
  #rpsw:focus,
  #uspt:focus{
    border:none;
    border-bottom:2px #9F88FF solid;
    background:none;
    border-radius:12px;
    text-align:center;
    outline:none;
  }
  .username{
    border:none;
    border-bottom:2px #9F88FF solid;
    background:none;
    border-radius:12px;
    text-align:center;
    outline:none;
  }

@import url('../assets/build-tools/bootstrap/css/bootstrap.css');
@import url('../assets/build-tools/bootstrap/icons/bootstrap-icons.css');
</style>
