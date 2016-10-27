(function($){
$(document).ready(function(){
/* ==========================================================================
   Scroll Setup
   ========================================================================== */
$.Body = $('body');

var eq = 0;

var currentSlide = $('#intro');
$.Window = $(window);
$.Slides = $(".page-section");


/* Create an array of scrollpoints (where each of our slides resides)
=================================*/
var scrollPoints = []; //Scrollpoints in the document
var totalSlideHeight = 0; // our incrementing variable

$('.page-section').each(function(index){
    // cache
    $this = $(this);

    scrollPoints[index] = totalSlideHeight;
    // increment total slideHeight so our other slides can use it
    totalSlideHeight += $this.outerHeight();
});

var scrollPointsLength = scrollPoints.length;

/* Set Body Height to the length of our slides
=================================*/
var bodyheight = totalSlideHeight;
$.Body.css("height", bodyheight);

/* Our main scroll event
=================================*/

// make we are providing the right element for user's browser
$.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;


$.Window.bind('scroll', function(e) {
    scrollIt(e);
});

/*  Main Window Scroll (shout out to to the crew at suitupordie.com/ for this)
   ========================================================================== */
function scrollIt(e){

    var scrollTop = $(this).scrollTop();

    for(var x = -1; x < scrollPointsLength; ++x){
    if(scrollTop >= (scrollPoints[x]+1) && scrollTop <= scrollPoints[(x+1)]){

        eq = x;
        currentSlide = $.Slides.eq(x);
        $.Body.attr("current",currentSlide.attr("id"));
        break;

        }
    }

    $(currentSlide).stop().css({
        'margin-top' : (-scrollTop + scrollPoints[eq]) + 'px'
        });


    $.Slides.eq(eq+1).css({
        'margin-top': '0px'
        });


    $.Slides.slice(0,eq).each(function(i){
        $(this).css('margin-top', -(scrollPoints[i+1]-scrollPoints[i])+'px');

        });

    $.Slides.slice(eq+1, 11).hide();
    $.Slides.eq(eq+1).show();

} // scrollIt(e)

/* ==========================================================================
    NAV (uses data-roles) and plugin file
   ========================================================================== */

/* ==========================================================================
    Adapted from: Smooth Scroll (http://css-tricks.com/snippets/jquery/smooth-scrolling/)
   ========================================================================== */
$('nav a, .caboose a[href="#one"]').click(function() {
            $.Scroll.stop().animate({
                 scrollTop: (scrollPoints[$(this).attr("data-index")] + 10 )+ 'px' // use the data index to select which scrollpoint we are going to be moving to
            }, 1800, 'easeOutQuad');
            return false;
});


/* ==========================================================================
    Social
   ========================================================================== */
    // uses jasonmayes' twitter fetcher http://www.jasonmayes.com/projects/twitterApi/#sthash.w88tOLal.dpbs
    // uses widget ID Alison's twitter widget page
var twitterFetcherConfig = { 
  id: '380748765612617728',
  domId: '',
  maxTweets: 1,
  enableLinks: true,
  showUser: false,
  showTime: false,
  dateFunction: '',
  customCallback: handleTweet,
  showInteraction: false
}

twitterFetcher.fetch(twitterFetcherConfig);
    // custom function to render tweets
    function handleTweet(tweets){
        // twitter container
        var element = document.getElementById('twitter-feed');
        // holder div for our tweets
        var tweetText = document.createElement('div');
        tweetText.className += " tweet_text";

        for (var i = 0; i < tweets.length; i++) {
          tweetText.innerHTML += tweets[i];
        };
        element.appendChild(tweetText);
    }

    Socialite.load($('.social-links'));

/* ==========================================================================
   Colorbox
   ========================================================================== */
$('.gallery .youtube').colorbox({iframe:true, width : '640', height: '480'});
$('.gallery .colorbox').colorbox({maxWidth : '60%', width: '80%'});

/* ==========================================================================
   FORM POLYFILL / SUBMIT / VALIDATION
   ========================================================================== */

    //set global variables and cache DOM elements for reuse later
var form = $('#five').find('form'),
    formElements = form.find('input[type!="submit"],textarea'),
    formSubmitButton = form.find('[type="submit"]'),
    errorNotice = $('#errors'),
    successNotice = $('#success'),
    // loading = $('#loading'),
    errorMessages = {
        required: 'Sorry, this is required :)',
        name: 'umm, yeah gonna need your name.',
        email: 'need a valid email to respond to ;)',
        minlength: ' must be greater than '
    }

/* Hide/Show infield labels
=================================*/
var lables = form.add('label');
lables.inFieldLabels();

/* Validation
=================================*/
formSubmitButton.bind('click',function(){
    var formok = true,
        errors = []
    formElements.each(function(){
        var name = this.name,
            nameUC = name.ucfirst(),
            value = this.value,
            error = "";
            // placeholderText = this.getAttribute('placeholder'),
            type = this.getAttribute('type'), //get type old school way
            isRequired = this.getAttribute('required'),
            minLength = this.getAttribute('data-minlength');

        //if HTML5 formfields are supported
        if( (this.validity) && !this.validity.valid ){
            formok = false;
            // if name is missing
            if(this.validity.valueMissing && name == 'name'){
              error = errorMessages[name];
            }
            //if this is an email input and it is not valid
            else if(this.validity.typeMismatch && type == 'email' || this.validity.valueMissing && type == 'email'){
                // errors.push({"name": email, "message" : errorMessages.email});
                error = errorMessages[name];
            }
            //if there is a value missing
            if(this.validity.valueMissing && name == 'message'){
              error = errorMessages.required;
            }

            $(this).parent('p').addClass("error").children('label').text(error);
        }

        //if this is a required element
        if(isRequired){
            //if HTML5 input required attribute is not supported
            if(!Modernizr.input.required){
                if(value == placeholderText){
                    $(this).addClass('error');
                    formok = false;
            $(this).addClass('error').siblings('label').text(error);
                }
            }
        }
        // if HTML5 input email input is not supported
        if(type == 'email'){
            if(!Modernizr.inputtypes.email){
                var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                 if( !emailRegEx.test(value) ){
                    formok = false;
            $(this).parent('p').addClass("error").children('label').text(error);
                }
            }
        }
        //check minimum lengths
        if(minLength){
            if( value.length < parseInt(minLength) ){
                formok = false;
            $(this).parent('p').addClass("error").children('label').text(error);
            }
        }
    });
    //if form is not valid
    if(!formok){
      return false;
    }
    //if form is valid
    else {
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            success: formSuccess()
        });
    }
    return false; //this stops submission off the form and also stops browsers showing default error messages
});

function formSuccess(){
  form.get(0).reset();
  form.addClass('success');
  formElements.removeClass('error');
}

String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
  // END FORM

}); // ready
})(jQuery);
