var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);

/**Random Crystal Power**/
var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
	$('.math').append(math);
	
}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}

	$('.math').append(math);
	$('.number').append(number);

	$(document).ready(function(){
	$('#blue').click(function(){
		math = math + red;
		config();
	})
	$('#red').click(function(){
		math  = math  + blue;
		config();
	})
	$('#yellow').click(function(){
		math  = math  + yellow;
		config();
	})
	$('#green').click(function(){
		math  = math  + green;
		config();
	})
});


/** Dancing H1 Text Animation **/

var dance = {
  
  init: function() {
    this.dance();
  },
  
  config: {
    newSize: 40,
  },
  
  dance: function(config) {
    var newText = '',
        h1 = $('h1'),
        text = $('h1').text(),
        oldSize = h1.css('font-size'),
        length = text.length,
        i;
  
    for( i = 0; i < length; i++ ) {
      
      newText += '<span>' + text.charAt(i) + '</span>';    
    }
    
    h1.html(newText);
    
    h1.on('mouseenter mouseleave', 'span', function(e) {
      var span = $(this);
      
      if( e.type == 'mouseenter') {
         
        span.stop(true,false).animate({fontSize: dance.config.newSize + 'px'});
        
      } else if( e.type == "mouseleave" ) {
        
        span.animate({fontSize: oldSize});
      }  
    });
  }
};

$(function() {
  dance.init();
});













