// Hide #navbar on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();
var count = 0;
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
   
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(window).scroll(function() {
    
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
           // ajax call get data from server and append to the div
    	
    		if(count<1){
    			setTimeout(
    			  function() 
    			  {
    			    $('#loading').show();	
    			  }, 1000);


    		
			$.ajax({
				url: 'ajax/demo_test.txt',
				dataType: 'html',
				success: function(html) {
					$('#bottom_feed_cards').append(html);
					$('#loading').hide();
				}
			});
		}
		count=+1;	
    }
});


