Library
=======


.. |div-ml-start| raw:: html

    </div>
    <div class="material-list">

.. |div-start| raw:: html

    <div class="material-list-item">
	
	
.. |div-end| raw:: html

    </div>
	
.. |jq-script| raw:: html

	<script type="text/javascript" src="../_static/jquery.js"></script> 

	<script>

        var $btns = $('.mat-btn').click(function() {
          if (this.id == 'all') {
				$('#parent > div').hide();
                $('#parent > div').fadeIn(500);
          } else {
				$('#parent > div').hide();
                var $el = $('.' + this.id).fadeIn(500);
                $('.' + this.id).prev('.section').fadeIn(500);
          }
          $btns.removeClass('active');
          $(this).addClass('active');
        })
	
	</script>
	
	
	
	
	
	
	
.. Start editing (do not edit anything above except the title)	
	
	
List of images filtered with tags.	


.. raw:: html 

	<div id="parent">

	<button class='mat-btn active' id='all'>all</button>
	<button class='mat-btn' id='boxes-ag'>A-G</button>

	
	

Boxes A-G
+++++++++

.. raw:: html 

    </div>
    <div class='material-list boxes-ag'>

|div-start|

.. thumbnail:: images/image_a.png
	  :group: boxes-ag
	  :title: Box A
	  
Box A

|div-end|

|div-start|

.. thumbnail:: images/image_b.png
	  :group: boxes-ag
	  :title: Box B
	  
Box B

|div-end|

|div-start|

.. thumbnail:: images/image_c.png
	  :group: boxes-ag
	  :title: Box C
	  
Box C

|div-end|

|div-start|

.. thumbnail:: images/image_d.png
	  :group: boxes-ag
	  :title: Box D
	  
Box D

|div-end|

|div-start|

.. thumbnail:: images/image_e.png
	  :group: boxes-ag
	  :title: Box E
	  
Box E

|div-end|

|div-start|

.. thumbnail:: images/image_f.png
	  :group: boxes-ag
	  :title: Box F
	  
Box F

|div-end|

|div-start|

.. thumbnail:: images/image_g.png
	  :group: boxes-ag
	  :title: Box G
	  
Box G

|div-end|










.. Stop editing (do not edit anything below)	




|div-end|

|div-end|


|jq-script|


Task
++++

Create a new section for images from 1 to 4. Add a new tag for these images.

Use images in the **images** folder.
