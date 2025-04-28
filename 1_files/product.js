INS.Product = {
	init: function(){
		this.addItemRelatedViewedPD();
		//this.removeProductCookie();
		//this.addFirstProductCompare();
		this.ajaxAddCart();
	},
	addItemRelatedViewedPD: function(){
		var flag = true,
				currentID = $('#currentPd'),
				oldItems = JSON.parse(localStorage.getItem('relatedViewedArr')) || [];
		$.each(oldItems, function(i, item) {
			if (item.idProduct == currentID.val()){
				flag= false;
				return false;
			}else{
				$('.inRelatedItem').each(function(i,v){
					var idTam = $(v).val();
					if (item.idProduct == idTam ){
						//console.log('ID bị trùng: '+idTam);
						flag= false;
						return false;
					}
				})
			}
		});
		if(flag){
			var newItem = {
				'idProduct': currentID.val(),
				'handleProduct' : currentID.attr('data-handle'),
			};
			if (oldItems.length > 5){
				oldItems.shift()
			}
			oldItems.push(newItem);
			localStorage.setItem('relatedViewedArr', JSON.stringify(oldItems));
		}
	},
	removeProductCookie: function(){
		$.each($.cookie(), function(i, item) {
			if(item.indexOf('product') > 0 ){
				INS.ComparePD.removeItemCompare(i);
			}
		})
	},
	addFirstProductCompare: function(){
		setTimeout(function(){
			var $pdInput = $('#pdCompareTemp'),
					id = $pdInput.val(),
					img = $pdInput.data('image'),
					url = $pdInput.data('url'),
					title = $pdInput.data('title');
			INS.ComparePD.addItemCompare(id,url,img,title);
		},1000)
	},
	ajaxAddCart: function(){
		$(document).on('click','.btn-addCart', function(){
			var qty = parseInt($('.wrapBlockInfo .groupQty input').val()),
					variantID = $('#product-select').val(),
					cart = $('.tempFixed .cartFixed'),
					image = $('.wrapperPdImage .featureImg img');
			cart.addClass('loading');
			INS.Main.flyToElement(image,cart);
			INS.Main.ajaxAddCart(qty,variantID);
		})
	}
}
if(f1genzPS) INS.Product.init();

