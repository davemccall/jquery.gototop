/*
* gototop
*
* Hides/shows an element on the page that returns the user to the top of the page.
*
* http://www.dave-mccall.com/
*
* Usage: <a href="#" class="gototop" data-speed="1000">Goto top</a>
*
* Most people add some CSS to fix this to the bottom right corner of the page:
*
*  .gototop {
*      position: fixed;
*      bottom: 10px;
*      right: 10px;
*  }
*
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
    $.fn.gototop = function (options) {
        if (options == null) options = {};
        $(this).each(function () {
            var $this = $(this);
			var speed = options.speed;
			if (speed == null) speed = $this.data("speed");
			if (speed == null) speed = 2000;
			$this.hide().click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, speed);
				return false;
			});
		});
		$(window).scroll(function () {
			$(".gototop").toggle($("body").scrollTop() > 50);
		});
	}
})(jQuery);

$(document).ready(function () {
	$(".gototop").gototop();
});