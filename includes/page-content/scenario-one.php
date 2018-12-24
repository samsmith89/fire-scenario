<?php

// Will need to enqueue the JS in this fucntion as well
function scenario_one_create_html() {
   if ( is_page('Scenario One') ) { ?>
     <div class="scene" id="scene">
       <a href="index.html">this will take you Home</a>
       <h3>This will solve the friction loss for two attack hand lines.</h3>
        <p>
          All you need to do is refresh the page and a new "scenario" will appear. Hose lines are from 1.75" - 3" You will need to solve for the first scenario, and when you solve for the first section the next part of the scenario will populate.
        </p>
        <p>This is a test to see how to dynamically put the values into words in HTML</p>
        <p><strong>You arrive on the scene to find a <span class="scene-elevation"></span>. The Officer tells the firefighter
        to grab a <span class="scene-5"></span> foot <span class="scene-hose"></span> line from the truck<span class="scene-nozzle"></span>
        The firefighter radios in that they are going to be running the line at <span class="scene-rand-gpm"></span> GPM. What psi are you going to run the line at for this scenario?</strong></p>
        <p>You will notice that every time you refresh the page that the values change in the middle
         of the sentences. This is how the scenario will be dynamically populated</p>

         <input id="numb">
         <button class="sub-but" type="button" onclick="checkMath(), showMore()">Submit</button>
         <p id="demo"></p>

      <div class="more-scene">
        <br>
        <p><strong>Command has been established and the next incoming unit is coming up to the scene awaiting assignment. Command tells them to pull a <span class="scene-5-2"></span> foot <span class="scene-hose-2"></span> line from the truck<span class="scene-nozzle-2"></span>The firefighter tells you that they are going to be running the line at <span class="scene-rand-gpm-2"></span> GPM. What psi are you going to run the second line at for this scenario?</strong></p>

         <input id="numb-2">
         <button type="button" onclick="checkMath2()">Submit</button>
         <p id="demo-2"></p>

     </div>
 <?php
 }
}

add_filter( 'the_content', 'scenario_one_create_html' );

add_action('wp_enqueue_scripts','ava_test_init');

  function ava_test_init() {
    wp_enqueue_script( 'line-line-live-js', plugins_url( '../js/line-line-live.js', __FILE__ ));
  }
