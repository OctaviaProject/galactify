(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};p=function(a){return Math.floor(Math.random()*a)},r=function(a,b,c){return a.substr(0,c)+b+a.substr(c+1)},c=function(a){var b,c;return c=a.split(" "),c=function(){var a,d,e;for(e=[],a=0,d=c.length;d>a;a++)b=c[a],e.push(b.charAt(0).toUpperCase()+b.slice(1));return e}(),c.join(" ")},n=function(a){return a[p(a.length)]},x="aeoiu",d="bcdfghjklmnpqrstvwxyz",v=1e3,l=function(a,b){var e,f,g,h,i,j;for(a=a.toLowerCase(),e=a.length,i=j=0;b>=0?b>=j:j>=b;i=b>=0?++j:--j)f=p(e),g=a[f],h=A.call(x,g)>=0?x.replace(g,"")[p(x.length-1)]:A.call(d,g)>=0?d.replace(g,"")[p(d.length-1)]:g,a=r(a,h,f);return c(a)},e=function(){var b,c,d,e,f,g,h;return f=$("#name").val(),b=f.length/3,e=l(f,b),g=t(e),c=""+e+", the "+g.adjective+" "+g.job+" from "+g.planet+".",u(),m(),$("#bio").html("You are "+c),h="I am "+c,$("#tweetlink").attr("href","https://twitter.com/intent/tweet?hashtags=OPLaunchParty,galactify&text="+h),d=function(){return $("#results-view").fadeIn(v),a(e,g.adjective,g.job,g.planet)},$("#input").fadeOut(v,d)},f=function(){var a,b,e,f,g,h;for(a=1+p(7),Math.random()<.1&&(f=!0),e="",g=h=0;a>=0?a>=h:h>=a;g=a>=0?++h:--h)b=n(f?x:d),f=!f,e+=b,"q"===b&&(e+="u");return c(e)},s=function(){var a;return $("#name").val(""),a=function(){return $("#input").fadeIn(v),q()},$("#results-view").fadeOut(v,a)},$(document).keypress(function(a){return 13===a.which?e():void 0}),$("#galactify-me").click(function(a){return e()}),$("#again").click(function(a){return s()}),$("#gallery").click(function(a){var b;return b=function(){return $("#gallery-view").fadeIn(v)},$("#results-view").fadeOut(v,b)}),$("#back").click(function(a){var b;return b=function(){return $("#results-view").fadeIn(v)},$("#gallery-view").fadeOut(v,b)}),t=function(a){var c,d,e,h,i;return c=n(b),d=n(g),e=f(),i=n(o),h=i.replace("%%planet%%",e),{adjective:c,job:d,planet:h}},navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,w=document.querySelector("video"),window.canvas=document.querySelector("canvas"),window.ctx=window.canvas.getContext("2d"),i=null,q=function(){var a;return $(window.canvas).remove(),a=$(document.createElement("canvas")).attr("width",300).attr("height",300).attr("id","photo").css("border-radius","150px"),$("#output").append(a),window.canvas=document.querySelector("canvas"),window.ctx=window.canvas.getContext("2d")},u=function(){return i?window.ctx.drawImage(w,0,0,300,300):void 0},a=function(a,b,c,d){var e;return e=window.canvas.toDataURL("image/jpeg",.5),z(a,b,c,d,e),y(a,b,c,d,e)},z=function(a,b,c,d,e){var f,g;return f=JSON.parse(localStorage.getItem("galactify_gallery")),g={name:a,adjective:b,job:c,planet:d,img:e},f?f.push(g):f=[g],localStorage.setItem("galactify_gallery",JSON.stringify(f))},y=function(a,b,c,d,e){var f,g,h;return g=$(document.createElement("img")),g.attr("src",e),g.attr("title",""+b+" "+c+", "+d),g.tooltip(),h=$(document.createElement("div")),h.html(a),f=$(document.createElement("div")),f.attr("class","bio-container"),f.append(g),f.append(h),$("#gallery-view").prepend(f)},h=function(){var a,b,c,d,e;if(b=JSON.parse(localStorage.getItem("galactify_gallery"))){for(e=[],c=0,d=b.length;d>c;c++)a=b[c],e.push(y(a.name,a.adjective,a.job,a.planet,a.img));return e}},j=function(a){return w.src=window.URL.createObjectURL(a),i=a},k=function(){return console.log("foo")},navigator.getUserMedia({video:!0},j,k),m=function(){return Caman("#photo",function(){return this.brightness(20),this.saturation(p(80)-20),this.contrast(40),this.clip(10+p(60)),this.hue(p(100)),this.exposure(30),this.sepia(p(60)),this.sharpen(p(100)),this.render()})},b=["honorable","ruthless","immortal","wise","adolescent","atemporal","analog","adventurous","angelic","bubbly","big-haired","benevolent","charming","geometric","gorgeous","circular","dimpled","digital","edible","envied","exalted","frugal","fuzzy","feline","flickering","gleaming","majestic","hilarious","handsome","hospitable","immaculate","infamous","jubilant","kaleidoscopic","kooky","rainbow","mysterious","metallic","gleaming","recursive","bioluminescent","notable","old-fashioned","opulent","posh","pushy","revolving","stylish","sophisticated","serpentine","triangular","tidy","tender","unlawful","unusual","virtual","holographic","teenage","zesty","reclusive","subterranean","microscopic","plucky","thousand year-old","golden","genderless","chameleon"],g=["shapeshifter","android","cephalopod","disembodied head","alchemist","barber","engineer","telepath","royal","chimera","mechanic","landlord","mermaid","ambassador","architect","botanist","bounty hunter","mathematician","roboticist","insectoid","clone","pilot","net-girl","it-girl","idol","financier","fortune teller","cleric","ball of pure energy","pixie","wraith","security officer","librarian","doctor","spy","romance novelist","hacker","plant creature","thief","charlatan","pegasus","minotaur","banshee","dancer","sorcerer","swindler","beastmaster","scrap collector","mind harpist","chanteuse","bureaucrat","radio bandit","meal encoder","time shaman"],o=["pleasure planet %%planet%%","exile planet %%planet%%","desert planet %%planet%%","the ice moon of %%planet%%","planet %%planet%%","floating city of %%planet%%","starbase %%planet%%","the cloud city of %%planet%%","the %%planet%% asteroid","the %%planet%% system","the %%planet%% empire","lava planet %%planet%%"],h()}).call(this);