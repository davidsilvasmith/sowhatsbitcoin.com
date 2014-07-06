  //open external links in a new window
  $(document).ready(function () {
      $("a[href^=http]").each(function () {
          if (this.href.indexOf(location.hostname) == -1) {
              $(this).attr({
                  target: "_blank",
                  title: "Opens in a new window"
              });
          }
      })
      
      /*$('h1').each(function() {
        var t = $(this).text();
        var bitcoinB = '<i class="fa fa-btc"></i>';
        if(t.indexOf('B')==0) {
          console.log('match');

          $(this).html(t.replace('B', bitcoinB));
        }
      });*/


  });
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-1211714-10', 'sowhatsbitcoin.com');
ga('send', 'pageview');

