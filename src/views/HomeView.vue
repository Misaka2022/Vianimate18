<template>
  <div class="home">
    <div id="login">
      <LoginPage @logpage="lgsh" @uspt="photos" @usnm="usnm"/>
    </div>
    <div id="des" v-show="show">
      <Desktop id="desk" :photo="photo" :uname="uname" />
    </div>
    <div id="cgbg" @click="change">
      <span>
        NEXT
        <br>
        <small>换壁纸</small>
        </span> 
    </div>
    <div id="bj" :style="{backgroundImage:`url(${loginImage})`}"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Desktop from './Desktop.vue';
import LoginPage from '@/components/LoginPage.vue';
import $ from 'jquery';

export default {
  name: 'HomeView',
  components: {
    LoginPage,
    Desktop
  },
  data(){
    return{
      imgIndex:1,
      loginImage:require('../assets/img/prebg/wallpaper/1.jpg'),
      show:false,
      photo:"",
      uname:""
    }
  },
  methods:{
   usnm(data){
      this.uname=data;
      return data;
   },
   photos(data){
      this.photo=data;
      return data;
   },
   lgsh(data){
      if(data=='true'){
         this.show=true;
         $('#login').remove();
      }else{
         return false;
      }
   },
    change(){
       if(this.imgindex<=24){
        this.imgindex+=1
        console.log(this.imgindex)
       }else{
        this.imgindex=1
       }
       this.loginImage=require(`../assets/img/prebg/wallpaper/${this.imgindex}.jpg`)
    }
    
  }
}
</script>

<style lang="less" scoped>
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
   #login,#des{
      position:relative;
      z-index:1;
   }
   #bj{
    width:100vw;
    height:100%;
    /* background: url('../assets/img/prebg/10.jpg');  */
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

//480
@media screen and(max-width:480px){
  #cgbg{
     display:flex;
     width:60px;
     height:60px;
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
    background-position:center;
    opacity:0.75;
    backdrop-filter:blur(4px);
    min-height:100vh;
    top:0;
    left:0;
    position:absolute;
    z-index:0;
   }
}
//768
@media screen and(min-width:480px) and(max-width:768px){
  #cgbg{
     display:flex;
     width:60px;
     height:60px;
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
    background-position:center;
    opacity:0.75;
    backdrop-filter:blur(4px);
    min-height:100vh;
    top:0;
    left:0;
    position:absolute;
    z-index:0;
   }
}
//992
@media screen and(min-width:768px) and(max-width:992px){
  #cgbg{
     display:flex;
     width:80px;
     height:80px;
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
    background-position:center;
    opacity:0.75;
    backdrop-filter:blur(4px);
    min-height:100vh;
    top:0;
    left:0;
    position:absolute;
    z-index:0;
   }
}
//>992
@media screen and(min-width:992px){
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
}
</style>