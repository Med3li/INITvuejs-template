<template>
    <div :id="$style.app" :class="$style.app" class="color-scheme">
        <img class="img-responsive" :class="$style.app__img" src="pictures/INITpug logo.png">

        <h1 :class="$style.app__greeting">{{greeting}}</h1>
        <button :class="$style.app__btn" class="color-scheme__mode-changer">Let me dark</button>
           
        <router-view></router-view>
         <nav :class='$style.app__navigation'>
            <router-link to="/">home</router-link>
            <router-link to="/github">github</router-link>
            <router-link to="/blog">blog</router-link>
            <router-link to="/docs">docs</router-link>
         </nav>
    </div>
</template>

<script>
//components

//data

//maps
//import {mapMutations} from 'vuex'
//import {mapActions} from 'vuex'
export default {
    name: 'app',
    data: function() {
        return {
            greeting: 'Welcome to your {{name}} {{type}}.',
        }
    },
    watch:{},
    methods:{
      
//vuex store : source of truth:vthe commit function searched by string
//all data convert to string just in vuex store probably
     
     },
    computed:{
      
//all functions in computed are a data type(integer,float,string...)
//return{x:3,y:6} or return x=3
    
        //return this.$store.state.greet+'x'
        //return this.$store.getters.editgreet
        //---> the same
     //score:function(){return this.$store.state.score;},
     
     //T:[]
     //..mapGetters(['score','hi'])=>...mapGetters(T)
     //for loop t[0]='score'
     //'this.$store.state.'+'score'
     //all things return in string type
     //return this.$store.state.score =>'this.$store.state.score'
    },
   
}
</script>
<style lang="scss" module>
.app {
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 40px;

    &__img {
        width: 250px;
        left: 50%;
        position: relative;
        transform: translateX(-50%)
    }

    &__greeting {
        font-size: 30px;
        margin: 20px;
        color: #212121;
        letter-spacing: 1px;
        font-weight: 600;
    }

    &__btn {
        background: #212121;
        border: none;
        padding: 15px 30px;
        border-radius: 50px;
        color: white;
        margin-top: 10px;
        -webkit-box-shadow: 0px 3px 10px #666;
        box-shadow: 0px 3px 10px #666;
        outline: none;
    }

    &__navigation {
        margin: 15px 0 0;

        a {
            padding: 0 7px;
            text-transform: uppercase;
            font-weight: 550;
            font-size: 15px
        }
    }
}
</style>