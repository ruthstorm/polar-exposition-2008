/*
	Multiverse by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('ie');

	// Touch?
		if (browser.mobile)
			$body.addClass('touch');

	// Transitions supported?
		if (browser.canUse('transition')) {

			// Play initial animations on page load.
				$window.on('load', function() {
					window.setTimeout(function() {
						$body.removeClass('is-preload');
					}, 100);
				});

			// Prevent transitions/animations on resize.
				var resizeTimeout;

				$window.on('resize', function() {

					window.clearTimeout(resizeTimeout);

					$body.addClass('is-resizing');

					resizeTimeout = window.setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

				});

		}

	// Scroll back to top.
		$window.scrollTop(0);

	// Panels.
		var $panels = $('.panel');

		$panels.each(function() {

			var $this = $(this),
				$toggles = $('[href="#' + $this.attr('id') + '"]'),
				$closer = $('<div class="closer" />').appendTo($this);

			// Closer.
				$closer
					.on('click', function(event) {
						$this.trigger('---hide');
					});

			// Events.
				$this
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('---toggle', function() {

						if ($this.hasClass('active'))
							$this.triggerHandler('---hide');
						else
							$this.triggerHandler('---show');

					})
					.on('---show', function() {

						// Hide other content.
							if ($body.hasClass('content-active'))
								$panels.trigger('---hide');

						// Activate content, toggles.
							$this.addClass('active');
							$toggles.addClass('active');

						// Activate body.
							$body.addClass('content-active');

					})
					.on('---hide', function() {

						// Deactivate content, toggles.
							$this.removeClass('active');
							$toggles.removeClass('active');

						// Deactivate body.
							$body.removeClass('content-active');

					});

			// Toggles.
				$toggles
					.removeAttr('href')
					.css('cursor', 'pointer')
					.on('click', function(event) {

						event.preventDefault();
						event.stopPropagation();

						$this.trigger('---toggle');

					});

		});

		// Global events.
			$body
				.on('click', function(event) {

					if ($body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

			$window
				.on('keyup', function(event) {

					if (event.keyCode == 27
					&&	$body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

	// Header.
		var $header = $('#header');

		// Links.
			$header.find('a').each(function() {

				var $this = $(this),
					href = $this.attr('href');

				// Internal link? Skip.
					if (!href
					||	href.charAt(0) == '#')
						return;

				// Redirect on click.
					$this
						.removeAttr('href')
						.css('cursor', 'pointer')
						.on('click', function(event) {

							event.preventDefault();
							event.stopPropagation();

							window.location.href = href;

						});

			});

	// Footer.
		var $footer = $('#footer');

		// Copyright.
		// This basically just moves the copyright line to the end of the *last* sibling of its current parent
		// when the "medium" breakpoint activates, and moves it back when it deactivates.
			$footer.find('.copyright').each(function() {

				var $this = $(this),
					$parent = $this.parent(),
					$lastParent = $parent.parent().children().last();

				breakpoints.on('<=medium', function() {
					$this.appendTo($lastParent);
				});

				breakpoints.on('>medium', function() {
					$this.appendTo($parent);
				});

			});

	// Main.
		var $main = $('#main');

		// Thumbs.
			$main.children('.thumb').each(function() {

				var	$this = $(this),
					$image = $this.find('.image'), $image_img = $image.children('img'),
					x;

				// No image? Bail.
					if ($image.length == 0)
						return;

				// Image.
				// This sets the background of the "image" <span> to the image pointed to by its child
				// <img> (which is then hidden). Gives us way more flexibility.

					// Set background.
						$image.css('background-image', 'url(' + $image_img.attr('src') + ')');

					// Set background position.
						if (x = $image_img.data('position'))
							$image.css('background-position', x);

					// Hide original img.
						$image_img.hide();

			});

		// Poptrox.
			$main.poptrox({
				baseZIndex: 20000,
				caption: function($a) {

					var s = '';

					$a.nextAll().each(function() {
						s += this.outerHTML;
					});

					return s;

				},
				fadeSpeed: 300,
				onPopupClose: function() { $body.removeClass('modal-active'); },
				onPopupOpen: function() { $body.addClass('modal-active'); },
				overlayOpacity: 0,
				popupCloserText: '',
				popupHeight: 150,
				popupLoaderText: '',
				popupSpeed: 300,
				popupWidth: 150,
				selector: '.thumb > a.image',
				usePopupCaption: true,
				usePopupCloser: true,
				usePopupDefaultStyling: false,
				usePopupForceClose: true,
				usePopupLoader: true,
				usePopupNav: true,
				windowMargin: 50
			});

			// Hack: Set margins to 0 when 'xsmall' activates.
				breakpoints.on('<=xsmall', function() {
					$main[0]._poptrox.windowMargin = 0;
				});

				breakpoints.on('>xsmall', function() {
					$main[0]._poptrox.windowMargin = 50;
				});



				// My additions to the template
		// Context blocks from JSON data.
		// Load and insert context blocks from emails.json
		function loadContextData() {
			console.log('Loading context from JSON...');
			
			$.ajax({
				url: 'assets/data/emails.json',
				dataType: 'json',
				success: function(contextData) {
					insertContextBlocks(contextData);
				},
				error: function(xhr, status, error) {
					console.warn('Could not load context data:', error);
				}
			});
		}

		function insertContextBlocks(contextData) {
			console.log('Grouping photos by date and inserting context blocks...');
			
			// Group photos by date
			var dateGroups = groupPhotosByDate();
			
			// Process each date group
			$.each(dateGroups, function(dateKey, photoGroup) {
				var contextEntry = contextData[dateKey];
				
				if (contextEntry && photoGroup.photos.length > 0) {
					// Find the last photo in this date group
					var $lastPhotoInGroup = $(photoGroup.photos[photoGroup.photos.length - 1]);
					
					// Check if we already added a context block after this group
					if (!$lastPhotoInGroup.next('.context-block').length) {
						var $contextArticle = createContextArticle(contextEntry, photoGroup.photos.length);
						$lastPhotoInGroup.after($contextArticle);
						console.log('Added context block for ' + dateKey + ' (' + photoGroup.photos.length + ' photos)');
					}
				}
			});
		}

		function groupPhotosByDate() {
			var groups = {};
			
			$('.thumb').each(function() {
				var $thumb = $(this);
				var imgSrc = $thumb.find('img').attr('src');
				var datePrefix = extractDatePrefix(imgSrc);
				
				if (datePrefix) {
					if (!groups[datePrefix]) {
						groups[datePrefix] = {
							datePrefix: datePrefix,
							photos: []
						};
					}
					groups[datePrefix].photos.push($thumb[0]);
				}
			});
			
			return groups;
		}

		function extractDatePrefix(src) {
			if (!src) return null;
			var match = src.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})/);
			return match ? match[1] : null;
		}

		function createContextArticle(entry, photoCount) {
			var dateStr = formatDate(entry.id);
			var contextContent = formatContextContent(entry.context);
			var photoCountText = photoCount > 1 ? ' (' + photoCount + ' photos)' : '';
			
			var articleHtml = [
				'<article class="context-block thumb" data-context-id="' + entry.id + '">',
				'	<div class="context-header">',
				'		<h2>Expedition Notes from Email' + photoCountText + '</h2>',
				'		<h3>' + dateStr + '</h3>',
				'	</div>',
				'	<div class="context-content">',
				'		<div class="context-text">' + contextContent + '</div>',
				'		<div class="context-meta">',
				'			<small>From expedition archives • ' + entry.filename + '</small>',
				'		</div>',
				'	</div>',
				'</article>'
			].join('\n');
			
			return $(articleHtml);
		}

		function formatDate(datePrefix) {
			try {
				var parts = datePrefix.split('_');
				var datePart = parts[0];
				var dateParts = datePart.split('-');
				var year = parseInt(dateParts[0]);
				var month = parseInt(dateParts[1]) - 1;
				var day = parseInt(dateParts[2]);
				var date = new Date(year, month, day);
				
				return date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				});
			} catch (e) {
				return datePrefix;
			}
		}

		function formatContextContent(content) {
			if (!content) return '<p><em>No context available</em></p>';
			
			// Clean up content (remove Windows line endings)
			var cleanContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
			
			// Split by double line breaks for paragraphs
			var paragraphs = cleanContent.split(/\n\s*\n/).filter(function(p) {
				return p.trim();
			});
			
			var formatted = paragraphs.map(function(paragraph) {
				var lines = paragraph.split('\n').filter(function(line) {
					return line.trim();
				});
				
				// Check if it's a numbered list
				if (lines.length > 1 && lines.every(function(line) {
					return /^\d+\./.test(line.trim());
				})) {
					var listItems = lines.map(function(line) {
						return '<li>' + escapeHtml(line.replace(/^\d+\.\s*/, '')) + '</li>';
					}).join('');
					return '<ol>' + listItems + '</ol>';
				}
				
				// Check for signatures (lines starting with common sign-offs)
				var lastLine = lines[lines.length - 1];
				if (lines.length > 1 && /^(love|luv|cheers|regards|best|dad|paul|margaret|m\.|p\{|pj)/i.test(lastLine.trim())) {
					var bodyLines = lines.slice(0, -1);
					var signature = lastLine.trim();
					
					var result = '';
					if (bodyLines.length > 0) {
						result += '<p>' + escapeHtml(bodyLines.join(' ')) + '</p>';
					}
					result += '<p class="context-signature">' + escapeHtml(signature) + '</p>';
					return result;
				}
				
				// Regular paragraph
				return '<p>' + escapeHtml(lines.join(' ')) + '</p>';
			});
			
			return formatted.join('');
		}

		function escapeHtml(text) {
			var div = document.createElement('div');
			div.textContent = text;
			return div.innerHTML;
		}

		// Initialize context loading after page load
		$window.on('load', function() {
			// Small delay to ensure all images are processed first
			setTimeout(loadContextData, 500);
		});

})(jQuery);