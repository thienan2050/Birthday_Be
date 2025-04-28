var INS = {
	init: function() {
		var that = this;
		that.Main.init();
		window.noPS && that.ComparePD.init();
	},
	resize: function() {
	},
	load: function() {
		$('.preloader').delay(1000).fadeOut(500);
	},
  getNoteForAllItems: function () {
    // Get all elements with data-barcode attribute
    const elements = $('[data-barcode]');
  
    // Map each element to a Promise using its barcode value
    const promises = elements.map((index, element) => {
      const barcode = $(element).data('barcode');
      return this.getNotePromise(barcode).then((note) => {
        if (note) {
          const text = note.split('||').map(item => `<div class="taginforitemflex"><span>${item}</span></div>`);
          $(element).html(text.join('')).removeClass('hidden');
        }
      });
    }).get();
  
    // Return Promise.allSettled so we can wait for all requests to complete
    return Promise.allSettled(promises).then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Failed to fetch data for item ${index}:`, result.reason);
        }
      });
      console.log("All requests processed.");
      setTimeout(function(){ $(".pdLoopItem").matchHeight(); }, 0)
    });
  },
  getNotePromise: function(barcode, retries = 5, delay = 1000) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${shop.API_URL}/GetProductInfoByItemID`,
        dataType: "json",
        method: "POST",
        headers: {
          "Clienttag": `${shop.CLIENT_TAG}`,
          "Content-Type": "application/json"
        },
        data: JSON.stringify({ "Alias": `${barcode}` }),
        success: function ({ data }) {
          const { Note } = data || {};
          if(data != null){
            const note = (Note || '').replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" style="color: #337ab7;">Tại đây</a>').split('\n').map(item => item).join('') || '';
             resolve(note);
          }
        },
        error: function (jqXHR) {
          if (jqXHR.status === 429 && retries > 0) {
            // Check for Retry-After header and use it if available
            const retryAfter = parseInt(jqXHR.getResponseHeader('Retry-After'), 10);
            const nextDelay = retryAfter ? retryAfter * 1000 : delay * 2;
    
            // Retry after the calculated delay
            setTimeout(() => {
              INS.getNotePromise(barcode, retries - 1, nextDelay)
                .then(resolve)
                .catch(reject);
            }, nextDelay);
          } else {
            reject(jqXHR);
          }
        }
      });
    });
  }
}

/* jQuery for all*/
INS.Main = {
	init: function(){
		this.searchAutoComplete();
		this.scrollToTop();
		this.productItemAddCart();
		this.mobileActions();
    this.loadCartJs();
		if(window.noPS) this.bindEvent();
	},
	bindEvent: function(){
    var loopCheck = ($('.top-bar__slider .item').length > 1) ? true : false
		var sliderOWl = jQuery('.top-bar__slider').owlCarousel({
			items: 1,
			loop: loopCheck,
			autoplay: true,
			autoplayTimeout:5000,
			margin: 0,
			responsiveClass: true,
			paginationSpeed : 800,
			dots: false,
			nav : false,
			navText: ['‹' , '›'],
			afterAction: function(){

			}
		});
	},
	searchAutoComplete: function(){
		var $input = $('#searchFRM input[name="q"]');
		/*$input.bind('keyup change paste propertychange', function() {
			var key = $(this).val(),
					$parent = $(this).parents('.frmSearch'),
					$results = $(this).parents('.frmSearch').find('.ajaxSearchAuto');
			console.log(key);
			if(key.length > 0 && key !== $(this).attr('data-history')){
				$(this).attr('data-history', key);
				//var str = '/search?type=product&q=' + key + '&view=auto-complete';
				var str = '/search?q=filter=(title:product adjacent '+ key +')||(sku:product adjacent '+ key +')&view=auto-complete';
				$.ajax({
					url: str,
					type: 'GET',
					async: true,
					success: function(data){
						$results.find('.resultsContent').html(data);
					}
				})
				$results.fadeIn();
			}
		})*/
		var key = $input.val(),
				$parent = $input.parents('.frmSearch'),timeout = null,
				$results = $input.parents('.frmSearch').find('.ajaxSearchAuto');

		$input.bind('keyup', function() {
			clearTimeout(timeout);
			timeout = setTimeout(l, 500, $(this).val());
		})
		var l = function(t) {
			//debugger;
			if(t.length > 0 && t !== $(this).attr('data-history')){
				$(this).attr('data-history', t);
				//var str = '/search?type=product&q=' + key + '&view=auto-complete';
				var str = '/search?q=filter=(title:product** '+ t +')||(sku:product** '+ t +')&view=auto-complete';
				$.ajax({
					url: str,
					type: 'GET',
					async: false,
					success: function(data){
						$results.find('.resultsContent').html(data);
					}
				})
				$results.fadeIn();
			}
		}
		$('#searchFRM').on('submit', function(e){
			e.preventDefault();
			const searchType = {"type":"product","q":$('#inputSearchAuto').val()};
			localStorage.setItem("searchType", JSON.stringify(searchType));
			//var urlComponent = encodeURIComponent('title:product adjacent '+ $('#inputSearchAuto').val() +')||(sku:product adjacent '+ $('#inputSearchAuto').val());
			var urlComponent = encodeURIComponent('title:product** '+ $('#inputSearchAuto').val() +')||(sku:product** '+ $('#inputSearchAuto').val());
			window.location = '/search?q=filter=('+urlComponent+')';
		})

		$('body').click(function(evt) {
			var target = evt.target;
			if (target.id !== 'ajaxSearchResults' && target.id !== 'inputSearchAuto') {
				$("#ajaxSearchResults").hide();
			}
		});
		$('body').on('click', '#searchFRM input[type="text"]', function() {
			if ($(this).is(":focus")) {
				if ($(this).val() != '') {
					$("#ajaxSearchResults").show();
				}
			} else {

			}
		})
	},
	searchAutoComplete2: function(){
		$('#searchFRM').on('submit', function(e){
			e.preventDefault();
			const searchType = {"type":"product","q":$('#inputSearchAuto').val()};
			localStorage.setItem("searchType", JSON.stringify(searchType));
			var urlComponent = encodeURIComponent('title:product** '+ $('#inputSearchAuto').val() +')||(sku:product** '+ $('#inputSearchAuto').val());
			window.location = '/search?q=filter=('+urlComponent+')';
		})
		function selectSuggest(act){
	cur = $('.smart-search-wrapper > .select').index();
	length = $('.smart-search-wrapper > a').length;
	if (act == 38)
	{
		if (cur == -1 || cur == 0)
			cur = length - 1;
		else
			cur = cur - 1;
	}

	if (act == 40)
	{
		if (cur == -1 || cur == length - 1)
			cur = 0;
		else
			cur = cur + 1;
	}
	$('.smart-search-wrapper>a').removeClass('select');
	$('.smart-search-wrapper>a:nth-child('+ ( cur + 1)+')').addClass('select');
	$('.ultimate-search input[name=q]').val($('.smart-search-wrapper>.select').attr('data-title'));
	return false;
}

		(function($) {
			$.fn.smartSearch = function(_option) {
				var o, issending = false,
						timeout = null;
				var option = {
					smartoffset: true, //auto calc offset
					searchoperator: '**', //** contain, *= begin with, =* end with
					searchfield: "title",
					searchwhen: 'keyup', //0: after keydown, 1: after keypress, after space
					searchdelay: 500, //delay time before load data
				};

				if (typeof(_option) !== 'undefined') {
					$.each(_option, function(i, v) {
						if (typeof(_option[i]) !== 'undefined') option[i] = _option[i];
					})
				}
				o = $(this);
				o.attr('autocomplete', 'off');
				this.bind(option.searchwhen, function(event) {
					if (event.keyCode == 38 || event.keyCode == 40) {
						return selectSuggest(event.keyCode);
					} else {
						$(".smart-search-wrapper." + option.wrapper).remove();
						clearTimeout(timeout);
						timeout = setTimeout(l, option.searchdelay, $(this).val());
					}
				});
				var l = function(t) {
					if (issending) return this;
					issending = true;
					coll=''
					if(option.collection != null)
						coll= $(option.collection).val() + "&&";
					$.ajax({
						url: "/search?q=filter=(" + coll + "(" + option.searchfield + ":product" + option.searchoperator + t + "))&view=ultimate-search",
						dataType: "JSON",
						async: false,
						success: function(data) {
							if( $('.smart-search-wrapper.' + option.wrapper).length == 0 ) {
								$('body').append("<div class='smart-search-wrapper "  + option.wrapper + "'></div>");
							}
							p();
							$.each(data, function(i, v) {
								$(".smart-search-wrapper." + option.wrapper).append("<a data-title='"+ v.title + "'class='thumbs' href='" + v.url + "'> <img src='"+Haravan.resizeImage(v.featured_image, 'icon')+"'/></a><a data-title='"+ v.title + "' href='" + v.url + "'>" + v.title + "<span class='price-search'>"+v.price+"đ</span></a>");
							});
							issending = false;
						},

						error: function (xhr, ajaxOptions, thrownError) {
							//alert(xhr.status);
							//alert(thrownError);
						}
					});
				}

				$(window).resize(function() {
					p();
				});
				$(window).scroll(function() {
					p();
				});

				$(this).blur(function(){$('.smart-search-wrapper.' + option.wrapper).slideUp();});

				var p = function() {
					if( ! o.offset() ) {
						return;
					}
					$(".smart-search-wrapper." + option.wrapper).css("width", o.outerWidth() + "px");
					$(".smart-search-wrapper." + option.wrapper).css("left", o.offset().left + "px");
					if (option.smartoffset) {
						h = $(".smart-search-wrapper." + option.wrapper).height();
						if (h + o.offset().top - $(window).scrollTop() + o.outerHeight() > $(window).height()) {
							$(".smart-search-wrapper." + option.wrapper).css('top', '');
							$(".smart-search-wrapper." + option.wrapper).css('bottom', ($(window).scrollTop() + $(window).height() - o.offset().top) + "px");
						} else {
							$(".smart-search-wrapper." + option.wrapper).css('bottom', '');
							$(".smart-search-wrapper." + option.wrapper).css('top', (o.offset().top - $(window).scrollTop() + o.outerHeight()) + "px");
						}
					} else {
						$(".smart-search-wrapper." + option.wrapper).css('top', (o.offset().top - $(window).scrollTop() + o.outerHeight()) + "px");
					}
				}
				return this;
			};
		}(jQuery));
		jQuery('.ultimate-search input[name=q]').smartSearch({searchdelay:400, wrapper: 'search-wrapper', collection:'.collection_id'});


	},
	scrollToTop: function() {
		jQuery(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.tempFixed .itemFixed.backTop').addClass('trans');
				$('.social-fixed li.bt').fadeIn(500);
				$('#headerPage').addClass('fixed');
			} else {
				$('.tempFixed .itemFixed.backTop').removeClass('trans');
				$('.social-fixed li.bt').fadeOut(300);
				$('#headerPage').removeClass('fixed');
			}
		});

		//Click event to scroll to top
		jQuery('.backTop a, .btn-back__top').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
		jQuery('.tempFixed .itemFixed.hotLine label i').click(function() {
			$(this).parents('.hotLine').fadeOut(500)
		});
	},
	productItemAddCart: function(){
		$(document).on('click','.Addcart', function(){
			var qty = 1,
					variantID = $(this).attr('data-variantid'),
					cart = $('.header-action__cart'),
					image = $(this).parents('.pdLoopItem').find('.pdLoopImg img').eq(0);
			cart.addClass('loading');
			INS.Main.flyToElement(image,cart);
			INS.Main.ajaxAddCart(qty,variantID);
		})
		$(document).on('click','#quick-view-modal .btn-addcart', function(e){
			e.preventDefault();
			var qty = parseInt($('#quick-view-modal .form-input input[type=number]').val()),
					variantID = $('#quick-view-modal select#p-select').val(),
					cart = $('.cartFixed'),
					image = $(this).parents('#quick-view-modal').find('.p-product-image-feature');
			cart.addClass('loading');
			INS.Main.flyToElement(image,cart);
			INS.Main.ajaxAddCart(qty,variantID);
		})
	},
	flyToElement: function(flyer, flyingTo) {
		var $func = $(this);
		var divider = 10;
		var flyerClone = $(flyer).clone().css('max-width','100px');
		$(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 100001});
		$('body').append($(flyerClone));
		var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
		var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;

		$(flyerClone).animate({
			opacity: 0.5,
			left: gotoX,
			top: gotoY,
			width: 10,
			height: 10
		}, 1000,
													function () {
			$(flyingTo).fadeOut('fast', function () {
				$(flyingTo).fadeIn('fast', function () {
					$(flyerClone).fadeOut('fast', function () {
						$(flyerClone).remove();
						flyingTo.removeClass('loading');
					});
				});
			});
		});
	},
	ajaxAddCart: function(qty,id){
		var cartItem = parseInt($('.header-action__cart .cart-count').html());
		var params = {
			type: 'POST',
			url: '/cart/add.js',
			data: 'quantity=' + qty + '&id=' + id,
			dataType: 'json',
			success: function(line_item) { 
				$('.cartItemCount, .cart-count').text(cartItem + qty).removeClass('hide');
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);
	},
	mobileActions: function(){
		if($(window).width() < 768){
			$('body').on('click','.btn-toggle__nav', function(){
				//$('body').toggleClass('openNav');
				$('body').toggleClass('activeonemenu');
			});
			$(document).on('click','.shop-list__item .shop-head, .fTLinks .ft-head', function(){
				$(this).toggleClass('toggle').next().toggle();
			});
		}
	},
  loadCartJs: function(){
    $.ajax({
			type:"GET",
			url:"/cart.js",
			dataType: 'json',
			async: false,
			success: function(data){
        if(data != null){
          $('.header-action__cart .cart-count').html(data.item_count);
        }
      }
    })
  }
};

/* Compare Products js*/
INS.ComparePD = {
	init: function(){
		$(document).on('click','.btnCompare', this.toggleItemCompare);
		$(document).on('click','.mainCpPd .toggleButton a', this.toggleSlideCompare );
		$(document).on('click','.removeCPItem', function(){
			INS.ComparePD.removeItemCompare($(this).data('item'))
		});
		this.getDefaulItem();
	},
	toggleItemCompare: function(){
		$(this).toggleClass('checked');
		var id = $(this).data('id'),
				url = $(this).data('compare'),
				image = $(this).parents('.pdLoopImg').find('img').attr('src'),
				title = $(this).parents('.itemLoop').find('.productName').html();
		$('#compareProduct').fadeIn(500);
		INS.ComparePD.checkAddCompareList(id,url,image,title);
	},
	toggleSlideCompare: function(){
		$('#compareProduct .mainCpPd').toggleClass('toggleSlide');
	},
	checkAddCompareList: function(id,url,image,title){
		var sizeCheck = $('#compareProduct .listCpPd .compareItem[data-id="'+id+'"]').length;
		if( sizeCheck > 0 ){
			INS.ComparePD.removeItemCompare(id);
		}else{
			INS.ComparePD.addItemCompare(id,url,image,title);
		}
	},
	removeItemCompare: function(id){
		$('#compareProduct .listCpPd .compareItem[data-id="'+id+'"]').remove();
		$('.btnCompare[data-id="'+id+'"]').removeClass('checked');
		$.removeCookie(id, { path: '/' });
		var $item = $('#compareProduct .listCpPd .compareItem');
		INS.ComparePD.checkShowCompareBox($item);
	},
	checkShowCompareBox: function($item){
		var number = $item.length;
		switch(number) {
			case 0:
				$('#compareProduct').hide();
				$('#compareProduct .mainCpPd .linkToCompare').hide();
				$('#compareProduct .mainCpPd').removeClass('toggleSlide');
				break;
			case 1:
				$('#compareProduct').fadeIn(500);
				$('#compareProduct .mainCpPd .linkToCompare').fadeOut(500);;
				break;
			case 2:
				$('#compareProduct').fadeIn(500);
				$('#compareProduct .mainCpPd .linkToCompare').fadeIn(500);
				break;
			default:

		}
	},
	addItemCompare: function(id,url,image,title){
		var $compare = $('#compareProduct'),
				$wrapcompare = $compare.find('.listCpPd'),
				itemCompare = '';
		itemCompare += '<div class="compareItem" data-id="'+id+'">';
		itemCompare += '<div class="siteItem clearfix">';

		itemCompare += '<div class="imageItem">';
		itemCompare += '<a href="'+url+'"><img src="'+image+'" /></a>';
		itemCompare += '</div>';
		itemCompare += '<div class="detailItem">';
		itemCompare += '<a href="'+url+'">'+title+'</a>';
		itemCompare += '<a class="removeCPItem" href="javascript:void(0)" data-item="'+id+'">Xóa sản phẩm</a>';
		itemCompare += '</div>';

		itemCompare += '</div>';
		itemCompare += '</div>';
		if($wrapcompare.children().length < 2 ){
			$wrapcompare.append(itemCompare);
		}else{
			var idRemove = $wrapcompare.find('.compareItem:eq(-1)').data('id');
			INS.ComparePD.removeItemCompare(idRemove);
			$wrapcompare.append(itemCompare);
		}
		$.cookie(id, url , { expires: 1, path: '/' });
		var $item = $('#compareProduct .listCpPd .compareItem');
		INS.ComparePD.checkShowCompareBox($item);
	},
	getDefaulItem: function(){

		$.each($.cookie(), function(i, v) {
			var itemURL = v,
					itemID = '';
			if(itemURL.indexOf('product') > 0 ){
				itemID = i;
				$('.btnCompare[data-id="'+itemID+'"]').addClass('checked')
				$.ajax({
					url: itemURL + '.js',
					async: false,
					success: function (product) {
						var id = product.id,
								url = product.url,
								image = product.featured_image,
								title = product.title;
						INS.ComparePD.addItemCompare(id,url,image,title);
					}
				})
			}
		});

	}
};

if(f1genzPS) INS.init();

$(window).on('load resize', function(){
	INS.resize();
})
$(window).load(function(){
	if(f1genzPS){
		INS.load();
		if($(window).width() < 768){
			$('.shop-head').trigger('click')
		}
	}
})