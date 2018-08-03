$(document).ready(function(){

      wow = new WOW(
      {
      }) 
      .init();
		/*type writer*/

		var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



    /*
                        =========== owl 
    */
     $('.slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    animateOut: 'fadeOut',
    responsiveClass:true,
    navText:false,
    mouseDrag:true,
    dots:false,
    loopNum:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

  $('.testmonial-slider').owlCarousel({
     loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    nav:false,
    dots:true,
    dot:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
})

     $('.skill-parcent').appear(function(){
         $('#parcent1').barfiller({
        barColor: '#e8d200',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
         });

         $('#parcent2').barfiller({
        barColor: '#ff9966',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
         });

         $('#parcent3').barfiller({
        barColor: '#3399ff',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
         });
     })
   
     $('.counter').counterUp({
      delay: 20,
      time: 1500
    });

     // isotop ===================================================
     // external js: isotope.pkgd.js


// init Isotope

$('.element-item').addClass('col-md-4 col-xs-6');

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

          /*
            ================================================ scroll Start

          */
           $(".scrool-home").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });


           $(".scrool-about").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });
           
           
             
           $(".scrool-Services").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });
           $(".scrool-work").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });
           $(".scrool-client").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });
           $(".scrool-blog").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });
           $(".scrool-contact").click(function(){
              var hash =this.hash;
              var position = $(hash).offset().top;
              var fixtPosition=position-100;
              $('html').animate({
                      scrollTop:fixtPosition
              },900);
          });

           /*
            ================================================ scroll Start
          */

          $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
            if (scroll<15){
              $('.nav-bar').removeClass('affex-nav');
            }else{
              $('.nav-bar').addClass('affex-nav');
            }

          })




          $(window).on('scroll',function(){
            var scrollbtn = $(window).scrollTop();
            if (scrollbtn<800) {
               $('.up-arro').fadeOut();
              
            }else{
              $('.up-arro').fadeIn();
            }
          })
          $('.up-arro').click(function(){
            $('html').animate({
              scrollTop:0
            },700)
          })

       // $('.myportfolio').viewer();
       $('body').scrollspy({
        target: '.scrollpay',
        offset:110,

      })

});
    
