$(document).ready(function () {
  $('.product-zoom-image').on('click', function () {
    var pos = $('#light-box-position').val();
    var pos2 = $('.product-zoom-image').val();
    oczoom.closeCloudZoomBig(pos2);
    //oczoom.openLightBox(pos);
    //$('body').css('overflow','hidden');
  });

  $('.sub-image').on('click', function () {
    var pos = $(this).data('pos');
    $('#light-box-position').val(pos);
    $('.additional-images .owl-item .item').removeClass('img-active');
    $(this).closest('.item').addClass('img-active');
  });

  var slider = $('#slide_count').val();
  oczoom.initAdditionalImagesOwl(slider);
});

var oczoom = {
  'initAdditionalImagesOwl'  : function (slider) {
    $('.additional-images').owlCarousel({
      loop: false,
      margin: slider ? 3 : 10,
      nav: true,
      lazyLoad : true,
      dots: false,
      responsive:{
        0: {
          items: (slider && slider == 3 ) ? 1 : 2
        },
        480: {
          items: slider ? 2 : 3
        },
        768: {
          items: slider ? 2 : 3
        },
        992: {
          items: (slider && slider != 3) ? slider : 3
        },
        1200: {
          items: slider ? slider : 4 
        }
      }
    });
  },

  'openLightBox' : function (position) {
    var product_id = $('#product-identify').val();
    var flag = false;

    $.ajax({
      url : 'index.php?route=product/oczoom/openLightbox&product_id=' + product_id,
      type: 'get',
      success : function (json) {
        $('.lightbox-container').html(json['html']).show(500);
        oczoom.showSlides(position);
        flag = true;
      },
      complete: function () {
        if(!flag) {
          oczoom.closeLightBox();
        }
      }
    });
  },

  'showSlides' : function (position) {
    var i;
    var slides = $(".mySlides");

    if (position > slides.length) {position = 1}
    if (position < 1) {position = slides.length}

    $('#light-box-position').val(position);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[position-1].style.display = "inline-block";
  },

  'plusSlides' : function (n) {
    var position = parseInt($('#light-box-position').val());

    oczoom.showSlides(position += n);
  },

  'closeLightBox': function () {
    $('.lightbox-container').hide().html('');
    $('body').css('overflow','');
  },

  'closeCloudZoomBig': function () {
    $('#cloud-zoom-big').hide().html('');
  }
}