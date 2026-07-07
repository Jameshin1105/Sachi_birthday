$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$('.photo').addClass('photo-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	function balloonStep() {
		var w = $(window).width();
		return Math.min(100, (w - 40) / 5);
	}
	
	// 풍선 5개를 화면 가로 중앙에 정렬하고, 배너 아래에 배치하는 함수
function positionBalloons() {
	var ids = ['b11','b22','b33','b44','b55'];

	// 아직 balloons_flying 단계 전이라 id가 안 바뀌었으면 아무것도 하지 않음
	if ($('#b11').length === 0) return;

	var gap = 10; // 풍선 사이 간격(px). 원하는 만큼 조절 가능
	var widths = ids.map(function(id){
		return $('#' + id).outerWidth(true);
	});
	var totalWidth = widths.reduce(function(sum, w){ return sum + w; }, 0) + gap * (ids.length - 1);

	var vw = $(window).width();
	var startLeft = (vw - totalWidth) / 2; // 그룹 전체를 중앙 정렬하는 시작 좌표

	// 배너 아래로 오도록 top 위치 계산 (배너가 없으면 기존 300 값 사용)
	var topPos = 300;
	if ($('.bannar').length) {
		topPos = $('.bannar').position().top + $('.bannar').outerHeight() + 20;
	}

	var currentLeft = startLeft;
	ids.forEach(function(id, i){
		$('#' + id).animate({ top: topPos, left: currentLeft }, 500);
		currentLeft += widths[i] + gap;
	});
}

$(window).resize(function(){
	$('#b1,#b2,#b3,#b4,#b5').stop();
	positionBalloons();
});

	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		positionBalloons();
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==23){
				$("p:nth-child(22)").fadeOut('slow').promise().done(function () {
					$('#video').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
		}
		
		msgLoop(0);
		
	});
	$('#video').click(function(){
		$(this).fadeOut('slow');
		$('#videoModal').css('display', 'flex');
		var audio = $('.song')[0];
		audio.pause();
		audio.currentTime=0;
	})
	$('#skipVideo').click(function(){
		$(this).fadeOut('slow');
		$('#videoModal').css('display', 'none');
		var audio = $('.song')[0];
		audio.play();
		$('#restart').fadeIn('fast');
	})
	$('#restart').click(function(){
		// turn bulbs off first for a nice visual cue
		$('.bulb').removeClass(function(index, className){
			return (className.match(/(^|\s)bulb-glow-\S+/g) || []).join(' ');
		});
		$('body').removeClass('peach peach-after');
		var audio = $('.song')[0];
		audio.pause();
		audio.currentTime = 0;
	
		$('body').fadeOut(800, function(){
			location.reload();
		});
	});
});




//alert('hello');