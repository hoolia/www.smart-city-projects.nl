var stickyOffset = 0;
function getURLVar(key) {
  var value = [];

  var query = String(document.location).split('?');

  if (query[1]) {
    var part = query[1].split('&');

    for (i = 0; i < part.length; i++) {
      var data = part[i].split('=');

      if (data[0] && data[1]) {
        value[data[0]] = data[1];
      }
    }

    if (value[key]) {
      return value[key];
    } else {
      return '';
    }
  }
}
function isEmpty( el ){
  return !$.trim(el.html())
}
$(document).ajaxStop(function() {
  function isEmpty( el ){
    return !$.trim(el.html())
  }
  if (!isEmpty($('#product'))) {
    $('#product .option-container').addClass('has-option');      
  }	
});

// resize code for equal size grids and content start
var img_ratio = 1.0/1.0;

var mass = {
  'resizeGrid': function(section,rows){
    // Equal height grid divs 
    var gridwidth = $(section+' .owl-carousel .owl-item').width();
    $(section+' .owl-carousel .owl-item .item .item-inner .image img').css("height",(gridwidth/img_ratio));

    if(rows > 1) {                  
      var gridheight = -1;
      $(section+' .owl-carousel .owl-item .item .item-inner .caption').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });
      $(section+' .owl-carousel .owl-item .item .item-inner .caption').each(function() {
        $(this).height(gridheight);
      });
    }
  },
  'equalDivs': function(){
    // for equal height grid divs 
    if ($(window).width() <= 478 ) {
      var gridheight = -1;

      $('.custom-category .col-xs-6 .item .item-inner .caption').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });

      $('.custom-category .col-xs-6 .item .item-inner .caption').each(function() {
        $(this).height(gridheight - 0);
      });
    }
    // blog page equal height grid divs 
    if ($(window).width() >= 479 ) {
      var gridheight = -1;

      $('.blog-blog .article-list.grid').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });

      $('.blog-blog .article-list.grid').each(function() {
        $(this).height(gridheight + 10);
      });
    }
  },
  'resizeInsta': function(){
    // Instagram equal height grid divs 
    var gridheight;
    gridheight = $('#instagram_block_home1 .owl-carousel img').width();
    $('#instagram_block_home1 .owl-carousel img').css("height",gridheight);
  },
  'resizethumbs':function(){   
    // product page slideshow thumbs 
    var thumbwidth = $('.additional-images.owl-carousel .owl-stage .owl-item').width();
    $('.additional-images.owl-carousel .owl-item img').css("height",(thumbwidth/img_ratio));
  },
  'resizeRecentGrid':function(){   
    // product page slideshow thumbs 
    var thumbwidth = $('#recently-viewed-products.owl-carousel .owl-stage .owl-item').width();
    $('#recently-viewed-products.owl-carousel .owl-item img').css("height",(thumbwidth/img_ratio));
  }
}

// resize code for equal size grids and content end

$(window).resize(function() {
  setTimeout(function(){
    mass.equalDivs();
    mass.resizeInsta();
    mass.resizeRecentGrid();
  },200);
});



$(document).ready(function() {
  
  $('.shopify-currency-form select').on('change', function() {
    $(this)
    .parents('form')
    .submit();
  });
  
mass.equalDivs();
  mass.resizeInsta();



  // sidebar mobile toggle code start 
  if ($(window).width() <=991 ) {

    $('#sidebar-toggle .oc-menu-bar').click(function (e) {
      e.stopPropagation();
      var effect = $(this).closest('#sidebar-toggle.oc-menu').find('.menu-effect').val();
      $('#column-left').addClass('sidebar-toggle');
      $('.sidebar-overlay').toggle();
      if(effect == "none") {
        $('#column-left').toggle();
      }

      if(effect == "fade") {
        $('#column-left').fadeToggle();
      }

      if(effect == "slide") {
        $('#column-left').slideToggle();
      }

    });

    $('#column-left').click(function(e){
      e.stopPropagation();
    });

    $(document.body).click(function(e){
      var effect = $('#sidebar-toggle.oc-menu').find('.menu-effect').val();
      $('.sidebar-overlay').hide();
      if(effect == "none") {
        $('#column-left').hide();
      }
      if(effect == "fade") {
        $('#column-left').fadeOut();
      }
      if(effect == "slide") {
        $('#column-left').slideUp();
      }
    });
  }
  // sidebar mobile toggle code end

  // Adding active class for mobtabs on mobile layout
  $('.mobtab a').click(function(e){
    $('.mobtab a').removeClass('active');
    $(this).addClass('active');
  });

  // product video 
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // color swatch js snippet
  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    var optionValue = $(this).val();
    $(this)
    .closest('form')
    .find('.single-option-selector')
    .eq(optionIndex)
    .val(optionValue)
    .trigger('change');

    var optionIndexSectionSwatch = $(this).closest('.swatch .swatch-element').attr('data-variant');
    console.log(optionIndexSectionSwatch);
        var optionValue = $(this).val();
    $(this)
    .closest('form')
    .find('input[name=id]').val(optionIndexSectionSwatch);
    //.trigger('change');
    //$('input[name=hidden_field_name]').val('newVal');

    console.log($(this)
    .closest('form')
    .find('input[name=id]').val());
   // .eq(optionIndex)
   //     .closest('form').find('#productSelect option[value=' + optionIndexSectionSwatch + ']'));


    
                //$("#select option[value=3]").attr('selected', 'selected');

    
  });

  // product page add to cart
  $('#button-cart').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart').button('loading');
      },
      complete: function() {
        $('#button-cart').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        $.getJSON('/cart.js', function(cart) {
          load(cart);
        });
		
        
        	window.top.location.href="/cart";
        

      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning('Item variant already added to the cart.');
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  $('#button-cart-sticky').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy_sticky select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart-sticky').button('loading');
      },
      complete: function() {
        $('#button-cart-sticky').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        $.getJSON('/cart.js', function(cart) {
          load(cart);
        });
		
        
        	window.top.location.href="/cart";
        
      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning('Item variant already added to the cart.');
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  $('#button-cart-buy').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart-buy').button('loading');
      },
      complete: function() {
        $('#button-cart-buy').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        $.getJSON('/cart.js', function(cart) {
          window.top.location.href="/checkout";
        });

      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning('Item variant already added to the cart.');
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  //stickyMenu();

  var headerSpaceH = $('header').outerHeight(true);
  $('header').before('<div class="headerSpace unvisible" style="height:'+headerSpaceH+'px;"></div>');	

  // Scroll
  var currentP = 0;
  var stickyOffset1 = 0;

  stickyOffset = $('header').offset().top;
  stickyOffset += $('header').outerHeight();
  if(isEmpty($('header.hd2'))) { 
    stickyOffset += 30;
  }
  
  if (!isEmpty($('#product-product'))) {
    stickyOffset1 = $('#form_buy').offset().top;
    stickyOffset1 += $('#form_buy').outerHeight();
  }

  $(window).scroll(function(){
    var headerH = $('header').height();
    var scrollP = $(window).scrollTop();
    var winInnW = window.innerWidth;

    if(scrollP != currentP){
      //Sticky header
      // if( winInnW > 991 ){
        if(scrollP >= stickyOffset){
          $('.fix').addClass('fix-header');

          $('.headerSpace').removeClass('unvisible');
          $('.headerSpace').addClass('show');

        } else {
          $('.fix').removeClass('fix-header');

          $('.headerSpace').addClass('unvisible');
          $('.headerSpace').removeClass('show');

        }
      // }
      if (!isEmpty($('#product-product'))) {

        if(scrollP >= stickyOffset1){
          $('.form_buy_sticky').addClass('fix-header2');
          $('.form_buy_sticky').addClass('fix-header1');
          $('html').css('padding-bottom','64px');
        } else {
          $('.form_buy_sticky').removeClass('fix-header1');
          $('.form_buy_sticky').removeClass('fix-header2');
          $('html').css('padding-bottom','0px');
        } 
      }
      currentP = $(window).scrollTop();
    }
  });

  if (!isEmpty($('#product'))) {
    $('#product .option-container').addClass('has-option');      
  }
  if (!isEmpty($('#product2'))) {
    $('#product2 .option-container').addClass('has-option');      
  }

  // move breadcrumbs
  /*$("header").after('<div class="breadcrumbs"><div class="container"></div></div>');	
  var breadcrumb = $('ul.breadcrumb');
  var breadcrumbs_container = $('.breadcrumbs .container');
  var breadcrumbs = $('.breadcrumbs');
  if(isEmpty($('body.common-home'))) { 
    if(!isEmpty($('#content > h1'))) { 
      var page_title = $('#content > h1');
    } else if(!isEmpty($('#content h1:first-of-type'))) { 
      var page_title = $('#content h1:first-of-type');
    } else if(!isEmpty($('#content h2:first-of-type'))) { 
      var page_title = $('#content h2:first-of-type');
    } else {
      var page_title = $('#content h3:first-of-type');
    }
    page_title.prependTo(breadcrumbs);
  }
  breadcrumb.appendTo(breadcrumbs_container);

  if ($(".hd3").length) {
    breadcrumbs.addClass('hd3');
  }*/
  // Highlight any found errors
  $('.text-danger').each(function() {
    var element = $(this).parent().parent();

    if (element.hasClass('form-group')) {
      element.addClass('has-error');
    }
  });

  /* Search */
  //$('#btn-search-category').click(function () {
  $('#search input[name=\'q\']').parent().find('button').on('click', function() {
    var url = '/search';
    var type = $('#search input[name=\'type\']').val();
    if(type == 'blog') {
      var value = $('#search.blog input[name=\'q\']').val();
    } else {
      var value = $('header #search input[name=\'q\']').val();
      type = 'product';
    }
    if(value == "Search all products..." || value ==""){
      jQuery('#search input[name=\'q\']').focus();
      return false;
    }else {
      url += '?type=' + type + '&q=' + encodeURIComponent(value);
    }
    location = url;
  });

  $('#search input[name=\'q\']').on('keydown', function(e) {
    if (e.keyCode == 13) {
      if($('#search input[name=\'type\']').val() == 'blog') {
        $('#search.blog input[name=\'q\']').parent().find('button').trigger('click');        
      } else {
        $('header #search input[name=\'q\']').parent().find('button').trigger('click');
      }
    }
  });

  // Menu
  $('#menu .dropdown-menu').each(function() {
    var menu = $('#menu').offset();
    var dropdown = $(this).parent().offset();

    var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

    if (i > 0) {
      $(this).css('margin-left', '-' + (i + 10) + 'px');
    }
  });

  // Product List
  $('#list-view').click(function() {
    $('#content .product-grid > .clearfix').remove();

    $('#content .row > .product-grid').attr('class', 'product-layout product-list col-xs-12 product-item');
    $('#grid-view').removeClass('active');
    $('#list-view').addClass('active');

    $(".product-item .item").each(function() {
      var caption = $(this).find('.caption');
      $(this).find('.action-links').appendTo(caption);
    });

    localStorage.setItem('display', 'list');
    localStorage.setItem('type', 'none');
  });

  // Product Grid
  $('#grid-view').click(function() {
    var cols = $('#column-right, #column-left').length;

    if (cols == 2) {
      $('#content .product-list').attr('class', 'product-layout product-grid grid-style col-lg-6 col-md-6 col-sm-6 col-xs-6 product-item');
    } else if (cols == 1) {
      $('#content .product-list').attr('class', 'product-layout product-grid grid-style col-lg-4 col-md-4 col-sm-6 col-xs-6 product-item');
    } else {
      $('#content .product-list').attr('class', 'product-layout product-grid grid-style col-lg-3 col-md-3 col-sm-6 col-xs-6 product-item');
    }

    $('#list-view').removeClass('active');
    $('#grid-view').addClass('active');

    $(".product-item .item").each(function() {
      var images_container = $(this).find('.images-container');
      $(this).find('.action-links').appendTo(images_container);
    });

    localStorage.setItem('display', 'grid');
    localStorage.setItem('type', 'none');
  });

  if (localStorage.getItem('display') == 'list') {
    $('#list-view').trigger('click');
    $('#list-view').addClass('active');
  } else {
    $('#grid-view').trigger('click');
    $('#grid-view').addClass('active');
  }

  // grid-style

  $('.grid-style .item').mouseover(function() {
    $(this).closest('.grid-style').addClass('active');
  });
  $('.grid-style .item').mouseout(function() {
    $(this).closest('.grid-style').removeClass('active');
  });

  // Checkout
  $(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
    if (e.keyCode == 13) {
      $('#collapse-checkout-option #button-login').trigger('click');
    }
  });

  // tooltips on hover
  $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

  // Makes tooltips work on ajax generated content
  $(document).ajaxStop(function() {
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
  });
});

// Cart add remove functions
var cart = {
  'add': function(product_id, quantity,redirect) {
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: 'id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
      dataType: 'json',
      beforeSend: function() {
        var btn = $(this);
        if(redirect) {
          $('.button-cart.button').button('loading');
        } else {
        $('.button-cart > .button').button('loading');
        }
        
      },
      complete: function() {
        if(redirect) {
          $('.button-cart.button').button('reset');
        } else {
          $('.button-cart > .button').button('reset');
        }
      },
      success: function(json) {
        $('.alert, .text-danger').remove();

        if (json['redirect']) {
          location = json['redirect'];
        }

         $.getJSON('/cart.js', function(cart) {
          if(redirect) {
          window.top.location.href="/checkout";
          }
          
          window.top.location.href="/cart";
          
        });
      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning('Item variant already added to the cart.');
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  },
  'remove': function(key) {
    $.ajax({
      url: '/cart/update.js',
      type: 'post',
      data: 'updates['+key+']=0',
      dataType: 'json',
      beforeSend: function() {
        //$('#cart > button').button('loading');
      },
      success: function(json) {
        $('#cart > button').button('reset');
        if (getURLVar('route') == '/cart' || getURLVar('route') == '/checkout') {
          location = '/cart';
        } else {
          setTimeout(function () {
            load(json);
          }, 5);       
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
      }
    });
  }
}

function load(cart){
  $('#cart .dropdown-menu > li:first-child .table > tbody > tr').remove();
  $.each(cart.items, function (index, cartItem) {
    var line = index + 1;
    var cents = "";

    if (cartItem.price % 100 < 10) {
      cents = "0";
    }
    var price = parseInt(cartItem.price / 100) + "." + cents + cartItem.price % 100;

    var cartRemove = 'onclick="cart.remove(\''+cartItem.id+'\')"';
    var cartItem = "<tr><td class='text-center'><a href='" + cartItem.url + "' title='" + cartItem.title + "'><img class='cart-image' src='" + cartItem.image + "' alt='" + cartItem.title + "' title='" + cartItem.title + "'></a></td><td class='text-left info-item'><a class='cart-name' href='" + cartItem.url + "'>" + cartItem.title + "</a><p class='cart-quantity'>" + cartItem.quantity + " &times;</p><p class='cart-price'><span class='money'>" + Shopify.formatMoney(price, moneyFormat) + "</span></p></td><td class='text-center cart-close'><button type='button' "+cartRemove+"' title='Remove' class='btn btn-danger btn-xs'><i class='ion-android-close'></i></button></td></tr>";
    $('#cart .dropdown-menu > li:first-child .table > tbody').append(cartItem);
  });
  if (cart.item_count < 1) {
    $('#cart .dropdown-menu > li:first-child .table > tbody').append('<p class="text-center cart-empty">Your shopping cart is empty!</p>');
    $('#cart .dropdown-menu li:not(:first-child):last-child').removeClass('show');
    $('#cart .dropdown-menu li:not(:first-child):last-child').addClass('hide');
  } else {
    $('#cart .dropdown-menu p.cart-empty').remove();
    $('#cart .dropdown-menu li:not(:first-child):last-child').removeClass('hide');
    $('#cart .dropdown-menu li:not(:first-child):last-child').addClass('show');
  }
  $('#cart > button #cart-total .txt_number').html(cart.item_count);
  $('#cart > button .total-price').html('<span class=money>'+Shopify.formatMoney(cart.total_price, moneyFormat)+'<i class="fas fa-chevron-down"></i></span>');
  $('#cart-subtotal').html('<span class=money>'+Shopify.formatMoney(cart.total_price, moneyFormat)+'</span>');
  
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
  e.preventDefault();

  $('#modal-agree').remove();

  var element = this;

  $.ajax({
    url: $(element).attr('href'),
    type: 'get',
    dataType: 'html',
    success: function(data) {
      html  = '<div id="modal-agree" class="modal">';
      html += '  <div class="modal-dialog">';
      html += '    <div class="modal-content">';
      html += '      <div class="modal-header">';
      html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
      html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
      html += '      </div>';
      html += '      <div class="modal-body">' + data + '</div>';
      html += '    </div>';
      html += '  </div>';
      html += '</div>';

      $('body').append(html);

      $('#modal-agree').modal('show');
    }
  });
});

// Autocomplete */
(function($) {
  $.fn.autocomplete = function(option) {
    return this.each(function() {
      this.timer = null;
      this.items = new Array();

      $.extend(this, option);

      $(this).attr('autocomplete', 'off');

      // Focus
      $(this).on('focus', function() {
        this.request();
      });

      // Blur
      $(this).on('blur', function() {
        setTimeout(function(object) {
          object.hide();
        }, 200, this);
      });

      // Keydown
      $(this).on('keydown', function(event) {
        switch(event.keyCode) {
          case 27: // escape
            this.hide();
            break;
          default:
            this.request();
            break;
        }
      });

      // Click
      this.click = function(event) {
        event.preventDefault();

        value = $(event.target).parent().attr('data-value');

        if (value && this.items[value]) {
          this.select(this.items[value]);
        }
      }

      // Show
      this.show = function() {
        var pos = $(this).position();

        $(this).siblings('ul.dropdown-menu').css({
          top: pos.top + $(this).outerHeight(),
          left: pos.left
        });

        $(this).siblings('ul.dropdown-menu').show();
      }

      // Hide
      this.hide = function() {
        $(this).siblings('ul.dropdown-menu').hide();
      }

      // Request
      this.request = function() {
        clearTimeout(this.timer);

        this.timer = setTimeout(function(object) {
          object.source($(object).val(), $.proxy(object.response, object));
        }, 200, this);
      }

      // Response
      this.response = function(json) {
        html = '';

        if (json.length) {
          for (i = 0; i < json.length; i++) {
            this.items[json[i]['value']] = json[i];
          }

          for (i = 0; i < json.length; i++) {
            if (!json[i]['category']) {
              html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
            }
          }

          // Get all the ones with a categories
          var category = new Array();

          for (i = 0; i < json.length; i++) {
            if (json[i]['category']) {
              if (!category[json[i]['category']]) {
                category[json[i]['category']] = new Array();
                category[json[i]['category']]['name'] = json[i]['category'];
                category[json[i]['category']]['item'] = new Array();
              }

              category[json[i]['category']]['item'].push(json[i]);
            }
          }

          for (i in category) {
            html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

            for (j = 0; j < category[i]['item'].length; j++) {
              html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
            }
          }
        }

        if (html) {
          this.show();
        } else {
          this.hide();
        }

        $(this).siblings('ul.dropdown-menu').html(html);
      }

      $(this).after('<ul class="dropdown-menu"></ul>');
      $(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

    });
  }
})(window.jQuery);