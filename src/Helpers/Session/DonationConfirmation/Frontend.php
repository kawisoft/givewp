<?php

namespace Give\Helper\Session\DonationConfirmation;

use function Give\Helper\Session\getSession;
use function Give\Helper\Session\removeDataFromSession;
use function Give\Helper\Session\storeDataIntoSession;
use function Give\Helpers\Form\Utils\isConfirmingDonation;

/**
 * Store posted data to donor session to access it in iframe if we are on payment confirmation page.
 *
 * Note: only for internal use.
 *
 * @return bool
 * @since 2.7.0
 */
function storePostedData() {
	if ( isConfirmingDonation() ) {
		$paymentGatewayId = ucfirst( give_clean( $_GET['payment-confirmation'] ) );
		storeDataIntoSession( "postDataFor{$paymentGatewayId}", array_map( 'give_clean', $_POST ) );

		return true;
	}

	return false;
}

/**
 * Remove posted data from donor session just before rendering payment confirmation view because beyond this view this data is not useful.
 *
 * Note: Only for internal use.
 *
 * @return bool
 * @since 2.7.0
 */
function removePostedData() {
	$paymentGatewayId = ucfirst( give_clean( $_GET['payment-confirmation'] ) );
	removeDataFromSession( "postDataFor{$paymentGatewayId}" );

	return false;
}

/**
 * Return stored posted data.
 *
 * Note: only for internal use.
 *
 * @return array|null
 * @since 2.7.0
 */
function getPostedData() {
	$session          = getSession();
	$paymentGatewayId = ucfirst( give_clean( $_GET['payment-confirmation'] ) );
	$key              = "postDataFor{$paymentGatewayId}";

	return ! empty( $session[ $key ] ) ? $session[ $key ] : null;
}