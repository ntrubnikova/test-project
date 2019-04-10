Tables
======

Simple Table
++++++++++++

Simple table, no class.

+-------------+---------------------+
| Parameter   | Description         |
+=============+=====================+
| abc         | ``abc`` description |
+-------------+---------------------+

.. _list-table:	

List Table
++++++++++++

.. cssclass:: full-width

.. list-table:: 
   :widths: 15 10 30
   :header-rows: 1

   * - Treat
     - Quantity
     - Description
   * - Albatross
     - 2.99
     - On a stick!
   * - Crunchy Frog
     - 1.49
     - If we took the bones out, it wouldn't be
       crunchy, now would it?
   * - Gannet Ripple
     - 1.99
     - On a stick!

 
	 
CSV Table
+++++++++

.. csv-table:: 
   :header: "Treat", "Quantity", "Description"
   :widths: 15, 10, 30

   "Albatross", 2.99, "On a stick!"
   "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
   crunchy, now would it?"
   "Gannet Ripple", 1.99, "On a stick!"
   
Task
++++

Create a table with 4 columns and a table header.

The width of the columns: 10% 15% 25% 50%.

Content is arbitrary.