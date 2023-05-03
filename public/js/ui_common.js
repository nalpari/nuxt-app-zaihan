/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  @ loading
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_loadingShow = function () {
	var loadingTag = '<div class="loading"><span></span><span></span><span></span><span></span></div>';
	$("body").prepend(loadingTag);
}

var fn_loadingHide = function () {
	$(".loading").remove();
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  @ top 버튼
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_btnTop = function () {
	$(document).on("click", ".btn-top", function () {
		$(".contents-wrap").animate({ scrollTop: 0 }, 150)
	})
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	@ tab 보이기/숨기기
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_tabShowHide = function () {
  $(".tab-section li").click(function (e) {
		if( !$(this).hasClass("disabled") ) {
			$(this).closest(".tab-section").find("li").removeClass("active");
			$(this).addClass("active");

			var tabIndex = $(this).index();
			var $tab_contents = $(this).closest(".tab-wrap").find(".tab-content");

			$tab_contents.removeClass("show");
			$tab_contents.eq(tabIndex).addClass("show");
		}
	})
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	@ tab swiper (#tabMain, #tabSub 공통 사용)
  @ window 넓이가 tab 넓이보다 작을때 swiper 실행됨
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_tabSwiperMain = function () {
  var tabWidth = $("#tabMain").find(".swiper-wrapper").width() + 32;
  var tabSwiperMain = new Swiper( "#tabMain", {
    freeMode: true,
    slidesPerView: "auto",
    on: {
      init: function() {
        if ( tabWidth >= $(window).width() ) {
          $("#tabMain").removeClass("tab-fix");
        }
        else {
          $("#tabMain").addClass("tab-fix");
        }
      },
      resize: function() {
        if ( tabWidth >= $(window).width() ) {
          $("#tabMain").removeClass("tab-fix");
        }
        else {
          $("#tabMain").addClass("tab-fix");
        }
      }
    }
  })
}

var fn_tabSwiperSub = function () {
  var tabWidth = $("#tabSub").find(".swiper-wrapper").width() + 32;
  var tabSwiperSub = new Swiper( "#tabSub", {
    freeMode: true,
    slidesPerView: "auto",
    on: {
      init: function() {
        if ( tabWidth >= $(window).width() ) {
          $("#tabSub").removeClass("tab-fix");
        }
        else {
          $("#tabSub").addClass("tab-fix");
        }
      },
      resize: function() {
        if ( tabWidth >= $(window).width() ) {
          $("#tabSub").removeClass("tab-fix");
        }
        else {
          $("#tabSub").addClass("tab-fix");
        }
      }
    }
  })
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	@ input 박스에 X버튼 넣기
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_inputTextClear = function () {
	$(document).on("keyup", ".input-text", function (e) {
		if( !($(this).next(".textclear").length > 0) ) {
			$(this).after('<button type="button" class="textclear"></button>');
		}

		if ( $(this).val() == "") {
			setTimeout(function () {
				$(e.target).next(".textclear").remove();
			}, 150)
		}
	})

	$(document).on("focus", ".input-text", function () {
		if($(this).val() != "") {
			$(this).after('<button type="button" class="textclear"></button>');
		}
	})

	$(document).on("click", ".textclear", function () {
		$(this).prev(".input-text").val("");
		$(this).prev(".input-text").focus();
		$(this).remove();
	})

	$(document).on("blur", ".input-text", function (e) {
		setTimeout(function () {
			$(e.target).next(".textclear").remove();
		}, 300)
	})
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	@ dropdown
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_dropdown = function () {
	$(".dropdown").each(function () {
		var selectOption = $(this).find("li.selected");
		if( selectOption.hasClass("placeholder") ) {
			$(this).addClass("placeholder");
		}
		if ( selectOption.length > 0 ){
			$(this).find('.list-value').text(selectOption.text())
		}
	})

	$(document).on("click", ".dropdown", function () {
		var notThis = $(".dropdown").not($(this));
		if( !$(this).find(".list-value").attr("disabled") ) {
			if( $(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				notThis.removeClass("active");
				$(this).addClass("active");
			}
		}
	})

	$(document).on("click", "html", function (e) {
		var findTarget = $(e.target).parent();
		if( !(findTarget.hasClass("dropdown") || findTarget.hasClass("option-list")) ) {
			$(".dropdown").removeClass("active");
		}
	})

  $(document).on("click", ".option-list li", function () {
    var $notThis = $(this).parent(".option-list").find("li").not($(this));
		$notThis.removeClass("selected");
		$(this).addClass("selected");
		$(this).closest(".option-list").prev(".list-value").text($(this).text())

		if($(this).hasClass("placeholder")) {
			$(this).closest(".dropdown").addClass("placeholder");
		} else {
			$(this).closest(".dropdown").removeClass("placeholder");
		}
  })
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  @ toast message
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_toastMsg = function (toast_msg) {
	if (!$("body").find(".toast").length > 0) {
		$("body").append('<div class="toast"></div>');
	}

	$(".toast").html(toast_msg);
	setTimeout(function () { $(".toast").addClass("show"); }, 50);
	setTimeout(function () { $(".toast").removeClass("show"); }, 900)
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	@ Moment 메인화면 PC에서 레이아웃 그리드 형태로 변환
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
var fn_gridLayout = function() {
	$('.moment-wrap').masonry({
		columnWidth: '.moment',
		percentPosition: true,
		horizontalOrder: true,
		transitionDuration: 0
	});
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(document).ready(function () {
  $("body, .popup-full").height(window.innerHeight);

	fn_btnTop();
  fn_tabShowHide();
	fn_tabSwiperMain();
  fn_tabSwiperSub();
  fn_inputTextClear();
  fn_dropdown();
})

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(window).resize(function () {
	$("body, .popup-full").height(window.innerHeight);
})