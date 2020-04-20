/*globals jQuery*/

import { iframeResize } from 'iframe-resizer';

/**
 * Initialize iframe resizer on iframe.
 *
 * @since 2.7.0
 * @param {object} iframe Iframe object.
 *
 * @return {object} iframeResize object.
 */
export const initializeIframeResize = function( iframe ) {
	return new iframeResize(
		{
			log: false,
			sizeWidth: true,
			heightCalculationMethod: 'documentElementOffset',
			widthCalculationMethod: 'documentElementOffset',
			onMessage: function( messageData ) {
				switch ( messageData.message ) {
					case 'giveEmbedFormContentLoaded':
						let parent = iframe.parentElement;
						const iframeToAutoScroll = document.querySelector( 'iframe[name="give-embed-form"][data-autoscroll="1"]:not(.in-modal)' );
						if ( iframe.parentElement.classList.contains( 'modal-content' ) ) {
							parent = parent.parentElement.parentElement;
						}

						parent.classList.remove( 'give-loader-type-img' );
						iframe.style.visibility = 'visible';

						// Attribute to dom when iframe loaded.
						iframe.setAttribute( 'data-contentLoaded', '1' );

						// Is there any iframe to auto scroll?
						if ( iframeToAutoScroll ) {
							// Scroll to latest iframe only if all iframe loaded.
							const allIframesCount = document.querySelectorAll( 'iframe[name="give-embed-form"]:not(.in-modal)' ).length,
								  allILoadedIframesCount = document.querySelectorAll( 'iframe[name="give-embed-form"][data-contentloaded="1"]:not(.in-modal)' ).length;

							if ( allIframesCount === allILoadedIframesCount ) {
								jQuery( 'html, body' ).animate( {
									scrollTop: iframeToAutoScroll.offsetTop,
									scrollLeft: iframeToAutoScroll.offsetLeft,
								} );
							}
						}

						break;
				}
			},
			onScroll: ( { x, y } ) => {
				// No need to auto scroll if form loaded in modal.
				if ( iframe.parentElement.classList.contains( 'modal-content' ) ) {
					return false;
				}

				jQuery( 'html, body' ).animate( { scrollTop: y, scrollLeft: x } );

				return false;
			},
			onInit: function( iframe ) {
				iframe.iFrameResizer.sendMessage( {
					currentPage: Give.fn.removeURLParameter( window.location.href, 'giveDonationAction' ),
				} );
			},
		},
		iframe
	);
};