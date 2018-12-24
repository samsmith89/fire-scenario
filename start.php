<?php
/**
 * Plugin Name: Fire Scenario Generator
 * Description: This plugin is to create scenrios for firefighter/engineers for training purposes.
 * Version: 1.0
 * Author: Sam Smith
 * Author URI: https://gsamsmith.com
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation.  You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

 // this requires and runs everything in init.php
 require dirname(__FILE__) . '/init.php';
 // upon activation this creates all the needed pages
 register_activation_hook(__FILE__, 'install_pages');
