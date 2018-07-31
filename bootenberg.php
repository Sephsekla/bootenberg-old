<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Bootenberg\Bootenberg_Core
 * @author      Joe Bailey-Roberts
 * @license     GPL3+
 *
 * @wordpress-plugin
 * Plugin Name: Bootenberg
 * Description: Bringing the power of Bootstrap 4 to Gutenberg
 * Version:     1.0.0
 * Author:      Joe Bailey-Roberts
 * Text Domain: bootenberg
 * Domain Path: /translation
 * License:     GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

namespace Bootenberg\Bootenberg_Core;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

/* Enqueue block themes and scripts */
require __DIR__ . '/lib/bootenberg-scripts.php';




