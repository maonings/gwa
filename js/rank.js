var app=new Vue({el:"#app",data:data,methods:{getUseFriends(){var _this=this,account=web3.eth.coinbase;$.ajax({type:'get',url:_this.baseUrl+"/user/rankYesterday",data:{"addr":account},success:function(data){_this.rankYesterdayList=data.data;}})},setCookie:function(name,value){var Days=7;var exp=new Date();exp.setTime(exp.getTime()+Days*24*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString()},getCookie:function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))return unescape(arr[2]);else return null},initLang:function(){var _this=this;var value=this.getCookie("lang");for(var key in _this.lang){if(key==value){_this.langItem=_this.lang[key];break}}},changeLang:function(index){this.setCookie("lang",index);this.initLang();this.showNav=false},getNavs:function(){this.showNav=!this.showNav},showPop:function(arg,callback){if(arg=="directPop"){this.directPop=true}else if(arg=="groupPop"){this.groupPop=true}else if(arg=="seasonPop"){this.seasonPop=true}},hidePop:function(){this.directPop=false;this.groupPop=false;this.seasonPop=false},init:async function(){this.initLang();return await this.initWeb3()},initWeb3:async function(){if(window.ethereum){window.web3=new Web3(ethereum);try{await ethereum.enable();this.web3Provider=ethereum}catch(error){}}else if(window.web3){this.web3Provider=web3.currentProvider;window.web3=new Web3(web3.currentProvider)}else{console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')}this.checkAccount();this.getUseFriends();return this.initGame()},initTop:function(){},initTopData:function(){},initGameData:function(){var _this=this;_this.initTop()},initGame:function(){},getPlayerInfo:function(name){},jsonData:function(n){},checkAccount:function(){var _this=this;_this.account=web3.eth.coinbase;setInterval(function(){if(_this.account!=web3.eth.coinbase){_this.account=web3.eth.coinbase;window.location.reload()}},3000)},},mounted:function(){var value=this.getCookie("lang");if(!value){this.setCookie("lang",this.defaultLang)}this.init()}})
