<?php

 if ( is_page('Scenario One') ) { ?>
   <form>
   <dl>
     <dt>Status</dt>
     <dd>
       <select name="position">
         <option value="Open">Open</option>
         <option value="Closed">Closed</option>
       </select>
     </dd>
   </dl>
   <dl>
     <dt>Issue Content</dt>
     <dd>
       <textarea name="content" cols="60" rows="10"></textarea>
     </dd>
   </dl>
   <div>
     <input type="submit" value="Submit Issue" />
     <?php echo 'sometext' ?>
   </div>
 </form>
 <?php
 }
}
add_filter( 'the_content', 'issue_create_html' );
