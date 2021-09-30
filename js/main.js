$(document).ready(function(){
	$('.logos').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
		]
	});

	$('#team').slick({
		// centerMode: true,
		leftMode: true,
		leftPadding: '10px',
		rightPadding: '260px',
		rightMargin: '200px',
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrow-left.png' style='width:45px; height:10px'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrow-right.png' style='width:45px; height:10px'>",
  // centerPadding: '60px',
		variableWidth: true,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				leftMode: true,
				leftPadding: '40px',
				slidesToShow: 1
			}
			}
		]
		});
});

