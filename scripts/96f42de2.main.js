(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};o=function(a){return Math.floor(Math.random()*a)},q=function(a,b,c){return a.substr(0,c)+b+a.substr(c+1)},c=function(a){var b,c;return c=a.split(" "),c=function(){var a,d,e;for(e=[],a=0,d=c.length;d>a;a++)b=c[a],e.push(b.charAt(0).toUpperCase()+b.slice(1));return e}(),c.join(" ")},m=function(a){return a[o(a.length)]},window.vowels="aeoiu",window.consonants="bcdfghjklmnpqrstvwxyz",u=1e3,k=function(a,b){var d,e,f,g,h,i;for(a=a.toLowerCase(),d=a.length,h=i=0;b>=0?b>=i:i>=b;h=b>=0?++i:--i)e=o(d),f=a[e],g=y.call(vowels,f)>=0?vowels.replace(f,"")[o(vowels.length-1)]:y.call(consonants,f)>=0?consonants.replace(f,"")[o(consonants.length-1)]:f,a=q(a,g,e);return c(a)},d=function(){var b,c,d,e,f,g,h;return f=$("#name").val(),b=f.length/3,e=k(f,b),g=s(e),c=""+e+", the "+g.adjective+" "+g.job+" from "+g.planet+".",navigator.getUserMedia&&(t(),l()),$("#bio").html("You are "+c),h="I am "+c+" @octaviaprojnyc",$("#tweetlink").attr("href","https://twitter.com/intent/tweet?hashtags=galactify&url=http://octaviaproject.org/galactify&text="+h),d=function(){return $("#results-view").fadeIn(u),a(e,g.adjective,g.job,g.planet)},$("#input").fadeOut(u,d)},e=function(){var a,b,d,e,f,g;for(a=1+o(7),Math.random()<.1&&(e=!0),d="",f=g=0;a>=0?a>=g:g>=a;f=a>=0?++g:--g)b=m(e?vowels:consonants),e=!e,d+=b,"q"===b&&(d+="u");return c(d)},r=function(){var a;return $("#name").val(""),a=function(){return $("#input").fadeIn(u),p()},$("#results-view").fadeOut(u,a)},$(document).keypress(function(a){return 13===a.which?d():void 0}),$("#galactify-me").click(function(a){return d()}),$("#again").click(function(a){return r()}),$("#gallery").click(function(a){var b;return b=function(){return $("#gallery-view").fadeIn(u)},$("#results-view").fadeOut(u,b)}),$("#back").click(function(a){var b;return b=function(){return $("#results-view").fadeIn(u)},$("#gallery-view").fadeOut(u,b)}),s=function(a){var c,d,g,h,i;return c=m(b),d=m(f),g=e(),i=m(n),h=i.replace("%%planet%%",g),{adjective:c,job:d,planet:h}},navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,v=document.querySelector("video"),window.canvas=document.querySelector("canvas"),window.ctx=window.canvas.getContext("2d"),h=null,p=function(){var a;return $(window.canvas).remove(),a=$(document.createElement("canvas")).attr("width",300).attr("height",300).attr("id","photo").css("border-radius","150px"),$("#output").append(a),window.canvas=document.querySelector("canvas"),window.ctx=window.canvas.getContext("2d")},t=function(){return h?window.ctx.drawImage(v,0,0,300,300):void 0},a=function(a,b,c,d){var e;return e=window.canvas.toDataURL("image/jpeg",.5),x(a,b,c,d,e),w(a,b,c,d,e)},x=function(a,b,c,d,e){var f,g;return f=JSON.parse(localStorage.getItem("galactify_gallery")),g={name:a,adjective:b,job:c,planet:d,img:e},f?f.push(g):f=[g],localStorage.setItem("galactify_gallery",JSON.stringify(f))},w=function(a,b,c,d,e){var f,g,h;return g=$(document.createElement("img")),g.attr("src",e),g.attr("title",""+b+" "+c+", "+d),g.tooltip(),h=$(document.createElement("div")),h.html(a),f=$(document.createElement("div")),f.attr("class","bio-container"),f.append(g),f.append(h),$("#gallery-view").prepend(f)},(g=function(){var a,b,c,d,e;if(b=JSON.parse(localStorage.getItem("galactify_gallery"))){for(e=[],c=0,d=b.length;d>c;c++)a=b[c],e.push(w(a.name,a.adjective,a.job,a.planet,a.img));return e}})(),i=function(a){return v.src=window.URL.createObjectURL(a),h=a},j=function(){return console.log("foo")},navigator.getUserMedia?navigator.getUserMedia({video:!0},i,j):window.alert("We can't fully galactify you in your browser :(. Try Chrome or Firefox for the full experience."),l=function(){return Caman("#photo",function(){return this.brightness(20),this.saturation(o(80)-20),this.contrast(40),this.clip(10+o(60)),this.hue(o(100)),this.exposure(30),this.sepia(o(60)),this.sharpen(o(100)),this.render()})},b=["honorable","ruthless","immortal","wise","adolescent","atemporal","analog","adventurous","angelic","bubbly","big-haired","benevolent","charming","geometric","gorgeous","circular","dimpled","digital","edible","envied","exalted","frugal","fuzzy","feline","flickering","gleaming","majestic","hilarious","handsome","hospitable","immaculate","infamous","jubilant","kaleidoscopic","kooky","rainbow","mysterious","metallic","gleaming","recursive","bioluminescent","notable","old-fashioned","opulent","posh","pushy","revolving","stylish","sophisticated","serpentine","triangular","tidy","tender","unlawful","unusual","virtual","holographic","teenage","zesty","reclusive","subterranean","microscopic","plucky","thousand year-old","golden","genderless","chameleon"],f=["shapeshifter","android","cephalopod","disembodied head","alchemist","barber","engineer","telepath","royal","chimera","mechanic","landlord","mermaid","ambassador","architect","botanist","bounty hunter","mathematician","roboticist","insectoid","clone","pilot","net-girl","it-girl","idol","financier","fortune teller","cleric","ball of pure energy","pixie","wraith","security officer","librarian","doctor","spy","romance novelist","hacker","plant creature","thief","charlatan","pegasus","minotaur","banshee","dancer","sorcerer","swindler","beastmaster","scrap collector","mind harpist","chanteuse","bureaucrat","radio bandit","meal encoder","time shaman"],n=["pleasure planet %%planet%%","exile planet %%planet%%","desert planet %%planet%%","the ice moon of %%planet%%","planet %%planet%%","floating city of %%planet%%","starbase %%planet%%","the cloud city of %%planet%%","the %%planet%% asteroid","the %%planet%% system","the %%planet%% empire","lava planet %%planet%%"]}).call(this);