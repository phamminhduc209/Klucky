(function($){
    "use strict";
		$.cssNumber.transform = true;
		if (!("transform" in document.body.style)) {
			$.cssHooks.transform = {
				get: function(elem, computed, extra) {
					var value = $(elem).data('transform');
					return value != null ? value : 1;
				},
				set: function(elem, value) {
					var $elem = $(elem);
					var size = { // without margin
						width: $elem.outerWidth(),
						height: $elem.outerWidth()
					};
					$elem.data('transform', value);
					if (value != 1) {
						$elem.css({
							transform: 'scale(' + value + ')',
							marginLeft: (size.width * value - size.width) / 2,
							marginRight: (size.width * value - size.width) / 2,
							marginTop: (size.height * value - size.height) / 2,
							marginBottom: (size.height * value - size.height) / 2
						});
					} else {
						$elem.css({
							transform: null,
							margin: null
						});
					}
				}
			};
		} 
})(jQuery); // End of use strict