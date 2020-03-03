function fun(){
	var i = document.getElementById("text").value;
	var x = document.getElementById("navbar");
	if(i=="0"){
		x.style.left = "0px";
		document.getElementById("text").value = "1";
	}
	else{
		x.style.left = "-100%";
		document.getElementById("text").value = "0";
	}
}

$(document).ready(function() {

	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		var progressBar = $('progress');
		
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});

	} else {

		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			
			max = getMax();
			setWidth();
		});
	}
});