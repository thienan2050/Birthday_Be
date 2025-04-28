
var slug = function(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
	str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
	str = str.replace(/^\-+|\-+$/g, "");
	return str;
}
/*
if(window.noPS){ 
	var owll = $('#imgFeatured > div');
	owll.addClass("owl-carousel owl-theme").owlCarousel({
		loop:false,
		nav:true,
		margin:10,
		items:1,
		navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
	});
}
*/

function sliderIndex(parent, child , desk , mb , dot, arrow ){
	var size = desk;
	if($(window).width() < 992){
		size = mb;
	}
	var length = $(parent).find(child).length;
	if(length > size){
		$(parent).slick({
			arrows: arrow == true ? true : false,
			dots: dot == true ? true : false,
			infinite: false,
			speed: 300,
			slidesToShow: desk,
			slidesToScroll: 1,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg class="vector" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"   clip-rule="evenodd" d="M9.12721 0.180771C9.18451 0.237928 9.22997 0.305829 9.26099 0.380583C9.29201 0.455338 9.30798 0.535478 9.30798 0.616412C9.30798 0.697347 9.29201 0.777487 9.26099 0.852242C9.22997 0.926996 9.18451 0.994897 9.12721 1.05205L2.17787 8.00016L9.12721 14.9483C9.24275 15.0638 9.30766 15.2205 9.30766 15.3839C9.30766 15.5473 9.24275 15.704 9.12721 15.8196C9.01167 15.9351 8.85497 16 8.69157 16C8.52817 16 8.37147 15.9351 8.25593 15.8196L0.872177 8.4358C0.814875 8.37865 0.769412 8.31074 0.738393 8.23599C0.707373 8.16124 0.691406 8.0811 0.691406 8.00016C0.691406 7.91923 0.707373 7.83909 0.738393 7.76433C0.769412 7.68958 0.814875 7.62168 0.872177 7.56452L8.25593 0.180771C8.31309 0.123469 8.38099 0.0780066 8.45574 0.0469869C8.5305 0.0159672 8.61063 0 8.69157 0C8.7725 0 8.85264 0.0159672 8.9274 0.0469869C9.00215 0.0780066 9.07005 0.123469 9.12721 0.180771Z"  fill="currentColor"/></svg></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg class="vector" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.872177 0.180771C0.929334 0.123469 0.997235 0.0780066 1.07199 0.0469869C1.14674 0.0159672 1.22688 0 1.30782 0C1.38875 0 1.46889 0.0159672 1.54365 0.0469869C1.6184 0.0780066 1.6863 0.123469 1.74346 0.180771L9.12721 7.56452C9.18451 7.62168 9.22997 7.68958 9.26099 7.76433C9.29201 7.83909 9.30798 7.91923 9.30798 8.00016C9.30798 8.0811 9.29201 8.16124 9.26099 8.23599C9.22997 8.31074 9.18451 8.37865 9.12721 8.4358L1.74346 15.8196C1.62792 15.9351 1.47122 16 1.30782 16C1.14442 16 0.987716 15.9351 0.872177 15.8196C0.756638 15.704 0.691728 15.5473 0.691728 15.3839C0.691728 15.2205 0.756638 15.0638 0.872177 14.9483L7.82152 8.00016L0.872177 1.05205C0.814875 0.994897 0.769412 0.926996 0.738393 0.852242C0.707373 0.777487 0.691406 0.697347 0.691406 0.616412C0.691406 0.535478 0.707373 0.455338 0.738393 0.380583C0.769412 0.305829 0.814875 0.2379280.872177 0.180771Z" fill="currentColor"/></svg></button>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: true,
						slidesToShow: mb,
						slidesToScroll: 1,
						dots: dot == true ? true : false,
					}
				}
			]
		});
	}
}

function plusQuantity() {
	if ( jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal)) {
			jQuery('input[name="quantity"]').val(currentVal + 1);
		} else {
			jQuery('input[name="quantity"]').val(1);
		}

	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}
function minusQuantity() {
	if (jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			jQuery('input[name="quantity"]').val(currentVal - 1);
		}
	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}
if(f1genzPS){
$(window).on('load resize', function(){
	setTimeout(function(){
		var cw = $('.header-page__nav').width(),
				nw = $('.nav-sidebar').width();
		$('.nav-sidebar .mainChild').css('width', cw - nw + 'px');
	}, 500)
})
$(document).ready(function(){
	//sliderIndex('#owlProduct-related', '.pdLoopItem', 5 , 1.6, false, true);
	sliderIndex('#listViewed', '.pdLoopItem', 5 , 1.6, false, true);
	$('.nav-sidebar__list li a i').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('toggle-nav').next().toggle();
	})	
	$(".btn-short-spec").click(function(){
		$(".teckthumb").trigger("click");
	})
	$(".swatch-element.color").click(function(){

		var color = $(this).attr("data-value");
		$(".variant_colorclick[data='"+slug(color)+"'] a").trigger("click")

	})
	var check = $(".imagevideohot").length;
	$(".thumbvideo span:nth-child(2)").html(check + ' video');
	if(check == 0){
		$(".thumbvideo").parent().hide();
		$('#tab-videos-gallery-0').hide();
	}
	/*
	setTimeout(function(){
		
		if(window.noPS){
			var checkavail = $(".thumbfeature").find(".imgthumb.active").length;
			if(checkavail > 0) return false;

			$(".imgthumb").removeClass("active");
			$(this).find(".imgthumb").addClass("active");


			var xhtml = '<div class="owl-carousel owl-theme variantchecksize">';
			var imagemix =``;
			if($(".fametagmix").length > 0){
				imagemix = $(".fametagmix").html();
			}
			$.each($(".featureimghot"),function(i,v){

				var img = $(this).attr("dataimg");

				if($(this).hasClass("imagevideohot") == true){
					xhtml += `<div><a href="#" onclick="return false;" datacount="${i}" class="atomvideo"><img style="width: 36px!important;" src="//theme.hstatic.net/200000420363/1001333448/14/youtube.png?v=872"  class="iconvideo" /><div class="fametag">
					${imagemix}
				</div><img alt="" src="${img}" ></a></div>`;
				}else{
					xhtml += `<div><a href="#" onclick="return false;" datacount="${i}" aria-label="Hình ảnh" class="imagehot">
					<div class="fametag">
					${imagemix}
				</div>
				<img alt="" src="${img}" ></a></div>`;
				}
			})
			xhtml += `</div>`;

			$("#imgFeatured").html("");
			$("#imgFeatured").html(xhtml);

			$(".tongleclass1 ").html("");
			$(".tongleclass1").html(xhtml);

			$(".tongleclass1thumb").html("");
			$(".tongleclass1thumb").html(xhtml);

			var checksizeleng = $("#imgFeatured .variantchecksize > div").length;

			if(checksizeleng >1){
				var owll = $('#imgFeatured > div');
				owll.owlCarousel({
					loop:false,
					nav:true,
					margin:10,
					items:1,
					navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
				});

				owll.on('changed.owl.carousel', function(e) {

					setTimeout(function(){
						var scount = $("#imgFeatured .owl-item.active a").attr("datacount");
						$(".imvariantcount").html(parseInt(scount) + 1);
					},300)



				});
			}else{
				$(".variantchecksize").removeClass("owl-carousel owl-theme");
			}
			var count = `<span class='colorsapncount'>Xem tất cả hình </span> (<span class="imvariantcount">1</span>/${checksizeleng})`;
			$(".thumcount").html(count);
		}
	},100)
*/
	if($(window).width() <767){
		$( "div.likequestion" ).click(function() {
			var html = $(this).find(".contenttohover").html();
			$(".crule").html(html).toggleClass("hide");

		})
	}else{
		$( "div.likequestion" )
			.mouseenter(function() {
			var html = $(this).find(".contenttohover").html();
			$(".crule").html(html).removeClass("hide");

		})
			.mouseleave(function() {
			$(".crule").addClass("hide");
		});
	}
	$(".teckthumb").click(function(e){
		e.preventDefault();
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");
		$("#tab-specification-gallery-0").trigger("click");
	});
	$( "body" ).on( "click", ".block-tab-top li", function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		var checkid = $(this).attr("id");
		$(".tabclick").removeClass("active");
		$(".tabclick[dataid='"+checkid+"']").addClass("active");
		$("body").addClass("hiddenover");

		$("#insProductPage .relative .wrapvideo").removeClass("active");
		$(".wrapvideo iframe").attr("src",'');


		if(checkid == 'tab-videos-gallery-0'){
			var lengt = $(".lengvideo").length;
			if(lengt > 1){
				getvideoowl()
			}
		}
		if(checkid == 'tab-featured-images-gallery-0'){
			galery()
		}
		if(checkid == 'tab-article-gallery-0' || checkid == 'tab-specification-gallery-0'){
			$("body").removeClass("hiddenover ");
			$("body").addClass("bodyhidden")
		}

	})

	$(".btn-closemenu,.overlayproduct").click(function(){
		$("body").removeClass("activeproduct hiddenover bodyhidden");
		$("#insProductPage .relative .wrapvideo").removeClass("active");
		$(".wrapvideo iframe").attr("src",'');
	})

	$(".thumbfeature1").click(function(e){
		e.preventDefault();
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");
		$("#tab-featured-images-gallery-0").trigger("click");
	})

	/*$(".thumbfeature").click(function(e){
		e.preventDefault();

		var checkavail = $(this).find(".imgthumb.active").length;
		if(checkavail > 0) return false;

		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");   


		var xhtml = '<div class="owl-carousel owl-theme variantchecksize">';
		$.each($(".featureimghot"),function(i,v){

			var img = $(this).attr("dataimg");

			if($(this).hasClass("imagevideohot") == true){
				xhtml += `<div><a href="#" onclick="return false;" datacount="${i}" class="atomvideo"><img style="width: 36px!important;" src="//theme.hstatic.net/200000420363/1001333448/14/youtube.png?v=872"  class="iconvideo" /><img alt="" src="${img}" ></a></div>`;
			}else{
				xhtml += `<div><a href="#" onclick="return false;" datacount="${i}" aria-label="Hình ảnh" class="imagehot"><img alt="" src="${img}" ></a></div>`;
			}
		})
		xhtml += `</div>`;

		$("#imgFeatured").html("");
		$("#imgFeatured").html(xhtml);

		$(".tongleclass1 ").html("");
		$(".tongleclass1").html(xhtml);

		$(".tongleclass1thumb").html("");
		$(".tongleclass1thumb").html(xhtml);

		var checksizeleng = $("#imgFeatured .variantchecksize > div").length;

		if(checksizeleng >1){
			var owll = $('#imgFeatured > div');
			owll.owlCarousel({
				loop:false,
				nav:true,
				margin:10,
				items:1,
				navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
			});

			owll.on('changed.owl.carousel', function(e) {

				setTimeout(function(){
					var scount = $("#imgFeatured .owl-item.active a").attr("datacount");
					$(".imvariantcount").html(parseInt(scount) + 1);
				},300)



			});
		}else{
			$(".variantchecksize").removeClass("owl-carousel owl-theme");
		}
		var count = `<span class='colorsapncount'>Xem tất cả hình </span> (<span class="imvariantcount">1</span>/${checksizeleng})`;
		$(".thumcount").html(count);

	})

	$(".desthumb").click(function(e){
		e.preventDefault();
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");
		$("#tab-article-gallery-0").trigger("click");
	})
	
	$(".thumbfeature1").click(function(e){
		e.preventDefault();
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");
		$("#tab-featured-images-gallery-0").trigger("click");
	})
	$(".block__promo .divb-right a").click(function(e){ 
		e.preventDefault();
		e.stopPropagation();
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".imgthumb").removeClass("active");
		$("#tab-km-gallery-0").trigger("click");
		return false;
	})


	$( "body" ).on( "click", ".imagehot", function() {
		$("body").addClass("activeproduct hiddenover");
		$("#tab-featured-images-gallery-0").trigger("click");
	});
	$( "body" ).on( "click", ".atomvideo", function() {
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$("#tab-videos-gallery-0").trigger("click");
	});
	$( "body" ).on( "click", ".vcolorclick", function() {
		var name = $(this).attr("dataname");
		$("body").addClass("activeproduct");
		$("body").removeClass("hiddenover");
		$(".colortab[dataname='"+name+"']").trigger("click");
	});

	
	$(".thumbvideo").click(function(e){
		e.preventDefault();
		//$("body").addClass("activeproduct");
		//$("body").removeClass("hiddenover");
		//$("#tab-videos-gallery-0").trigger("click");
		var checkavail = $(this).find(".imgthumb.active").length;
		if(checkavail > 0) return false;

		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb").addClass("active");


		var xhtml = '<div class="owl-carousel owl-theme variantchecksize">';
		$.each($(".imagevideohot"),function(i,v){

			var img = $(this).attr("dataimg");
			xhtml += `<div>
<a href="javascript:void(0)" datacount="${i}" class="atomvideo">
<img style="width: 36px!important;" src="//theme.hstatic.net/200000420363/1001333448/14/youtube.png?v=872"  class="iconvideo" />
<img alt="" src="${img}" >
</a>
</div>`;



		})
		xhtml += `</div>`;

		$("#imgFeatured").html("");
		$("#imgFeatured").html(xhtml);
		var checksizeleng = $("#imgFeatured  .variantchecksize > div").length;

		if(checksizeleng >1){
			var owll = $('#imgFeatured > div');
			owll.owlCarousel({
				loop:false,
				nav:true,
				margin:10,
				items:1,
				navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
			});

			owll.on('changed.owl.carousel', function(e) {

				setTimeout(function(){
					var scount = $("#imgFeatured .owl-item.active a").attr("datacount");
					$(".imvariantcount").html(parseInt(scount) + 1);
				},300)



			});
		}else{
			$(".variantchecksize").removeClass("owl-carousel owl-theme");
		}
		var count = `<span class='colorsapncount'>Xem tất cả hình </span> (<span class="imvariantcount">1</span>/${checksizeleng})`;
		$(".thumcount").html(count);


	})

	$(".ivideoclick").click(function(e){
		e.preventDefault();
		if($(window).width() > 991){
			$("#insProductPage .relative .wrapvideo").addClass("active");
			var idvideo = $(this).attr("idvideo");
			var src= 'https://www.youtube.com/embed/'+idvideo+'?autoplay=1'
			$(".wrapvideo iframe").attr("src",src);
		}else{
			var idvideo = $(this).attr("idvideo");
			$(".realclick").attr("href",'https://www.youtube.com/watch?v='+idvideo+'');
			$(".realclick").trigger("click")
		}


	})
	

	$( "body" ).on( "click", ".variant_colorclick a", function(e) {

		e.preventDefault();
		var checkavail = $(this).find(".imgthumb.active").length;
		if(checkavail > 0) return false;

		$(".imgthumb").removeClass("active");
		$(this).find(".imgthumb ").addClass("active");

		var name = $(this).find(".namecolor").html().trim();
		var namehandle = slug(name);

		var xhtml = '<div class="owl-carousel owl-theme variantchecksize">';
		var coutdem = 0;
		$.each($(".checkallimage"),function(i,v){

			if($(this).attr("data") == namehandle){

				var img = $(this).attr("dataimg");
				xhtml += `<div>
<a href="javascript:void(0)" datacount="${coutdem}" dataname = "${name}" class="vcolorclick">
<img alt="" src="${img}" >
</a>
</div>`;
				coutdem = coutdem + 1;
			}

		})
		xhtml += `</div>`;

		$("#imgFeatured").html("");
		$("#imgFeatured").html(xhtml);
		var checksizeleng = $("#imgFeatured  .variantchecksize > div").length;

		if(checksizeleng >1){
			var owll = $('#imgFeatured > div');
			owll.owlCarousel({
				loop:false,
				nav:true,
				margin:10,
				items:1,
				navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
			});

			owll.on('changed.owl.carousel', function(e) {

				setTimeout(function(){
					var scount = $("#imgFeatured .owl-item.active a").attr("datacount");
					$(".imvariantcount").html(parseInt(scount) + 1);
				},300)



			});
		}else{
			$(".variantchecksize").removeClass("owl-carousel owl-theme");
		}
		var count = `<span class='colorsapncount'>Xem tất cả hình </span> (<span class="imvariantcount">1</span>/${checksizeleng})`;
		$(".thumcount").html(count);



	})
	$( "body" ).on( "click", ".tongleclass1thumb a", function(e) {
		e.preventDefault();
		$(".tongleclass1thumb a").removeClass("active");
		$(this).addClass("active");
		var index = $(this).attr("datacount");
		var sliderOWl = $('.tongleclass1 > div');
		sliderOWl.owlCarousel({
			loop:false,
			nav:true,
			items:1,
			navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
		});

		sliderOWl.trigger('to.owl.carousel', index)




	})

	$( "body" ).on( "click", ".colortab", function(e) {
		e.preventDefault();

		var ids = $(this).attr("id");
		var name = $(this).html().trim();
		var namehandle = slug(name);
		console.log($(".checkallimage").length);
		var xhtml = '<div class="ztacolor owl-carousel owl-theme variantchecksize">';
		var coutdem = 0;
		var classc = '';
		$.each($(".checkallimage"),function(i,v){

			if($(this).attr("data") == namehandle){
				if(coutdem == 0){
					classc = 'active';
				}else{
					classc = '';
				}
				var img = $(this).attr("dataimg");
				xhtml += `<div>
<a href="javascript:void(0)" datacount="${coutdem}" class="${classc}" >
<img alt="" src="${img}" class="tmargin">
</a>
</div>`;
				coutdem = coutdem + 1;
			}

		})
		xhtml += `</div>`;
		console.log(xhtml);

		//console.log(xhtml)
		$(".tabclick[dataid = '"+ids+"'] .contentx1").html("");
		$(".tabclick[dataid = '"+ids+"'] .contentx2").html("");
		$(".tabclick[dataid = '"+ids+"'] .contentx1").html(xhtml);
		$(".tabclick[dataid = '"+ids+"'] .contentx2").html(xhtml);

		var checksizeleng = $(".tabclick[dataid = '"+ids+"'] .variantchecksize  > div").length;
		console.log(checksizeleng)
		if(checksizeleng >1 && $(window).width() > 767){
			setTimeout(function(){
				var owll = $(".tabclick[dataid = '"+ids+"'] .contentx1 > div");
				owll.owlCarousel({
					loop:false,
					singleItem: true,

					nav:true,
					margin:10,
					items:1,
					navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
				});
				owll.on('changed.owl.carousel', function(e) {

					setTimeout(function(){
						var index = $(".tabclick[dataid = '"+ids+"'] .owl-item.active a").attr("datacount");
						$(".tabclick[dataid = '"+ids+"'] a").removeClass("active");
						$(".tabclick[dataid = '"+ids+"'] a[datacount='"+index+"']").addClass("active");
					},300)

				});

				owll.on('mousewheel', '.owl-stage', function (e) {
					console.log(e)
					if (e.originalEvent.deltaY>0) {
						owll.trigger('next.owl');
					} else {
						owll.trigger('prev.owl');
					}
					e.preventDefault();
				});


				var owl22 = $(".tabclick[dataid = '"+ids+"'] .contentx2 > div"); 
				owl22.owlCarousel({
					loop:false,
					nav:false,
					margin:10,
					items:12,
					navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
				});
			},100)


		}else{
			$(".contentx1  .variantchecksize").removeClass("owl-carousel owl-theme");
			setTimeout(function(){
				$("body").removeClass("hiddenover");
			},300)

		}



	})



	



	setTimeout(function(){

		var xhtml = '';
		var xhtml2 = ''
		var xhtml2tab = ''
		$.each($(".select-swap > .color"),function(i,v){
			var color = $(this).find("input").val();
			xhtml += `<li id='tab-color-images-gallery-${i}' class='tab-item colortab' dataname="${color}">
${color}
</li>`;

			var img = $(this).find("label").attr("dataimg");
			xhtml2 += `<div class="variant_colorclick" data="${slug(color)}"><a href="">
<span class="imgthumb thmbvariant">
<img src="${img}">
</span>
<span class="namecolor">
${color}
</span>
</a>
</div>`;

			xhtml2tab += `<div class="tabclick" dataid="tab-color-images-gallery-${i}">
<div class="contentbox contentx1 tongleclass1x${i}">

</div>
<div class="contentbox contentx2 tongleclass1thumbx${i}">

</div>
</div>`;



		})
		$("#tab-videos-gallery-0").after(xhtml);
		$(".nextvariant").after(xhtml2);
		$(".contentshow").append(xhtml2tab);




	},300)



	$("#imgFeatured > div").on('changed.owl.carousel', function (event) {

		setTimeout(function(){

			var countx = $("#imgFeatured .owl-item.active a").attr("datacount");
			console.log(countx)
			$(".imvariantcount").html(countx);

		},300)


	})

	$( "body" ).on( "click", ".contentx2  a", function(e) {
		e.preventDefault();
		$(".contentx2  a").removeClass("active");
		$(this).addClass("active");
		var index = $(this).attr("datacount");
		var sliderOWl = $(this).parents(".tabclick").find(".contentx1 >div");
		sliderOWl.owlCarousel({
			loop:false,
			nav:true,
			items:1,
			navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
		});

		sliderOWl.trigger('to.owl.carousel', index)




	})


*/


})
function galery(){
	if($(window).width() >767){
		var owl2 = $('.tongleclass1 > div');
		owl2.owlCarousel({
			loop:false,
			nav:true,
			items:1,
			navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
		});
		owl2.on('mousewheel', '.owl-stage', function (e) {
			console.log(e)
			if (e.originalEvent.deltaY>0) {
				owl2.trigger('next.owl');
			} else {
				owl2.trigger('prev.owl');
			}
			e.preventDefault();
		});
		owl2.on('changed.owl.carousel', function(e) {

			setTimeout(function(){
				var index = $(".tongleclass1 .owl-item.active a").attr("datacount");
				$(".tongleclass1thumb a").removeClass("active");
				$(".tongleclass1thumb a[datacount='"+index+"']").addClass("active");
			},300)



		});

		var owl = $('.tongleclass1thumb > div');
		owl.owlCarousel({
			loop:false,
			nav:false,
			margin:10,
			items:12,
			navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
		});
	}else{
		$(".tongleclass1thumb").remove();
		$(".contentbox.tongleclass1 >div").removeClass("owl-carousel owl-theme");
		$("body").removeClass("hiddenover");
	}

}

function getvideoowl(){
	var owlx = $('.tongleclassvideo > div');
	owlx.owlCarousel({
		loop:false,
		nav:false,
		margin:10,
		items:1,
		navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
	});
	var owlx1 = $('.tongleclass1thumbvideo > div');
	owlx1.owlCarousel({
		loop:false,
		nav:false,
		margin:10,
		items:12,
		navText: ["<button class='am-next'>prev</button>","<button class='am-next'>Next</button>"]
	});
}

$(document).ready(function(){

	var hcheck =$("#headerPage .container").width();
	var hbody =$("body").width();
	var hbanner1 =$(".imagebanner1fix").width() + 25;
	var hbanner2 =$(".imagebanner2fix").width() + 25;
	var checkbannertrai = (hbody - hcheck)/2 - hbanner1;
	var checkbannerphai = (hbody - hcheck)/2 - hbanner2;
	$(".imagebanner1fix").css("left",checkbannertrai+'px');
	$(".imagebanner2fix").css("right",checkbannerphai+'px');
	if(checkbannertrai  < 0 ){
		$(".imagebanner1fix").addClass("huver");
		$(".imagebanner2fix").addClass("huver");
	}else{
		$(".imagebanner1fix").removeClass("huver");
		$(".imagebanner2fix").removeClass("huver");
	}

	$( window ).resize(function() {
		var hcheck =$("#headerPage .container").width();
		var hbody =$("body").width();
		var hbanner1 =$(".imagebanner1fix").width() + 15;
		var hbanner2 =$(".imagebanner2fix").width() + 15;
		var checkbannertrai = (hbody - hcheck)/2 - hbanner1;
		var checkbannerphai = (hbody - hcheck)/2 - hbanner2;
		$(".imagebanner1fix").css("left",checkbannertrai+'px');
		$(".imagebanner2fix").css("right",checkbannerphai+'px');

		if(checkbannertrai  < 0 ){
			$(".imagebanner1fix").addClass("huver");
			$(".imagebanner2fix").addClass("huver");
		}else{
			$(".imagebanner1fix").removeClass("huver");
			$(".imagebanner2fix").removeClass("huver");
		}

	});

	var width = 100;
	$.each($(".levlup_4"),function(){
		$(this).parent().addClass("arrowline");
		$(this).prev().find("span").addClass("vivaa");
		var _that = $(this);
		width = _that.prev().find("span").width();
		_that.attr("dataw",width);
	})

	$( ".mainChild.lv2" ).mouseenter(function() {
		$.each($(".levlup_4"),function(){
			var _that = $(this);
			width = _that.prev().find("span").width();
			_that.css("left",width);
		})
	}).mouseleave(function() {

	});

})
$('.sliderhandle').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	nextArrow:'<button class="slick-btn slider-index next"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.25 5.625L20.625 15L11.25 24.375" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	prevArrow:'<button class="slick-btn slider-index prev"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.25 5.625L20.625 15L11.25 24.375" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

});
$('.boxflexznewbox').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	rows:2,
	autoplay: true,
	autoplaySpeed: 5000,
	nextArrow:'<button class="slick-btn slider-index next"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.25 5.625L20.625 15L11.25 24.375" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	prevArrow:'<button class="slick-btn slider-index prev"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.25 5.625L20.625 15L11.25 24.375" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,

			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				dots: true,
			}
		}
	]

}); 
/* fixHeightProduct */
function fixHeightProduct(data_parent, data_target, data_image) {
  //debugger
	var box_height = 0;
	var box_image = 0;
	var boxtarget = data_parent + ' ' + data_target;
	var boximg = data_parent + ' ' + data_target + ' ' + data_image;
	jQuery(boximg).css('height', 'auto');
	jQuery($(boxtarget)).css('height', 'auto');
	jQuery($(boxtarget)).removeClass('fixheight');
	jQuery($(boxtarget)).each(function() {
		if (jQuery(this).find(data_image + ' img').height() > box_image) {
			box_image = jQuery(this).find($(data_image)).height();
		}
	});
	if (box_image > 0) {
		jQuery(boximg).height(box_image);
	}
	jQuery($(boxtarget)).each(function() {
		if (jQuery(this).height() > box_height) {
			box_height = jQuery(this).height();
		}
	});
	jQuery($(boxtarget)).addClass('fixheight');
	if (box_height > 0) {
		jQuery($(boxtarget)).height(box_height);
	}
	try {
		fixheightcallback();
	} catch (ex) {}
}
$(document).ready(function(){
	fixHeightProduct('.product-list__item', '.pdLoopImg', 'a.product-link');
  fixHeightProduct('#homeflashsale', '.pdLoopImg', 'a.product-link');
  fixHeightProduct('.flsalone1', '.pdLoopImg', 'a.product-link');
  fixHeightProduct('.blockContent', '.pdLoopImg', 'a.product-link');
  fixHeightProduct('.collection-page__product', '.pdLoopImg', 'a.product-link');
	//fixHeightProduct('.section-collection', '.itemLoop', 'a.product-link');
	
})



















$(document).ready(function(){
  console.log("Error in processing notes:");
  INS.getNoteForAllItems().then(function() {
    
  }).catch(function(error) {
    console.error("Error in processing notes:", error);
  }).finally(() => {
    /*fixHeightProduct('.product-list__item', '.pdLoopImg', 'a.product-link');
    fixHeightProduct('#homeflashsale', '.pdLoopImg', 'a.product-link');
    fixHeightProduct('.flsalone1', '.pdLoopImg', 'a.product-link');
    fixHeightProduct('.blockContent', '.pdLoopImg', 'a.product-link');
    fixHeightProduct('.collection-page__product', '.pdLoopImg', 'a.product-link');*/
  });
})
 }