// CUSTOM JS
// Pascal Warren*   
// CUSTOM JS   
            function myNum() {   //Lottery random number generator

            document.getElementById('demo').innerHTML = ""; //clear before initializing

            for(var i = 1; i <= 5; i++) {            
                        var num1, num2, num3, num4, num5, ball;
                        num1 = Math.round(Math.random() * (69 - 1) + 1); 
                        ball = Math.round(Math.random() * (26 - 1) + 1);    

                        do {
                              num2 = Math.round(Math.random() * (69 - 1) + 1);
                          } while(num2 == num1);

                        do {
                              num3 = Math.round(Math.random() * (69 - 1) + 1);
                          } while(num3 == num1 || num3 == num2);

                        do {
                              num4 = Math.round(Math.random() * (69 - 1) + 1);
                          } while(num4 == num1 || num4 == num2 || num4 == num3);

                        do {
                              num5 = Math.round(Math.random() * (69 - 1) + 1);
                        } while(num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4);

                        // ORDER NUMBERS
                        do {
                        if(num1 > num2) {
                        temp = num1;
                        num1 = num2;
                        num2 = temp;
                        }
                        if(num2 > num3) {
                        temp = num2;
                        num2 = num3;
                        num3 = temp;
                        }
                        if(num3 > num4) {
                        temp = num3;
                        num3 = num4;
                        num4 = temp;
                        }
                        if(num4 > num5) {
                        temp = num4;
                        num4 = num5;
                        num5 = temp;
                        }
                       } while(num1 > num2 || num2 > num3 || num3 > num4 || num4 > num5);

                       var winners = num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + " " + '<span class="ball text-left">' + ball + '</span>';

               var x = document.getElementById("demo");
               x.innerHTML += winners + "<br />";
              }
            }
            // OVERLAY EFFECTS
            $(document).ready( function() {
 
              $('#demo, #are, #you, #ready').hide();
                
              $('.btn').click(function(e){
                  $(document).off("click");// Turn 'CLICKING' the page off
                   $("button[type='submit']").prop('disabled',true); // Turn .btn off
                   $('.btn').css('pointer-events', 'none'); // Remove pointer events on .btn
                  $('.btn, .press-text, .foot').foggy();
                    $('#are').fadeIn(500).fadeOut(500, function() {
                       $('#you').fadeIn(500).fadeOut(500, function(){
                           $('#ready').fadeIn(1000).fadeOut(2000, function(){
                              $('.btn, .press-text').animate({opacity:0}, 1000);
                              $('#demo').css("display", "block").animate({top: '50%', opacity: 1}, 2000, function() {
                              $(document).on("click"); // Turn 'CLICKING' back on
                              $(document).click(function(e) {
                                    $('#demo').animate({opacity: 0}, 1000, function() {
                                        $('#demo').css({"display":"none", "top":"0"});
                                    });
                                    $('.btn, .press-text').animate({opacity:1}, 1000, function(){
                                        $('.btn, .press-text, .foot').foggy(false);                               
                                    });
                                  $("button[type='submit']").prop('disabled',false); // Renable .btn 
                                  $('.btn').css('pointer-events', 'auto'); // Turn .btn back on
                                  $(document).off("click");// Reset 'CLICKING' the page to 'off'
                                    e.preventDefault();
                                    e.stopPropagation();
                              });
                            });
                         }); 
                       });
                     });
                  e.preventDefault();
                  e.stopPropagation();
                });
            });