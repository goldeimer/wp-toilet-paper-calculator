<?php

/*
Plugin Name: Goldeimer Toilet Paper Calculator
Plugin URI: https://github.com/goldeimer/wp-toilet-paper-calculator#README
Description: Goldeimer's toilet paper calculator WordPress plugin
Version: 0.1
Author: Goldeimer gemeinnützige GmbH
Author URI: https://goldeimer.de
Text Domain: goldeimer-tpc
Domain Path: /lang/
*/

namespace Goldeimer\WordPress\WpToiletPaperCalculator;

use Goldeimer\PhpUtil\Traits\Singleton;
use Goldeimer\WordPress\WpUtil\WebpackAssetLoader;

final class WpToiletPaperCalculator
{
    use Singleton;

    private static WebpackAssetLoader $loader;

    final public function __construct()
    {
        self::$loader = new WebpackAssetLoader(
            plugin_dir_url(__FILE__),
            dirname(__FILE__)
        );

        self::$loader->register();

        \add_shortcode(
            'goldeimer-toilet-paper-calculator',
            [$this, 'shortcodeCallback']
        );
    }

    final public static function init()
    {
        self::getInstance();
    }

    final public function shortcodeCallback()
    {
        self::$loader->enqueue();

        return '<div id="app-container-toilet-paper-calculator"></div>';
    }
}

WpToiletPaperCalculator::init();
