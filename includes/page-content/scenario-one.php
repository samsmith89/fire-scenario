<?php

// Will need to enqueue the JS in this fucntion as well
function scenario_one_create_html() {
   if ( is_page('scenario-one') ) { ?>
   <h1>some words</h1>
 <?php
 }
}

add_filter( 'the_content', 'scenario_one_create_html' );
