Code
====

XML Code
++++++++

.. code-block:: xml
	
	<!DOCTYPE glossary PUBLIC "-//OASIS//DTD DocBook V3.1//EN">
	 <glossary><title>example glossary</title>
	  <GlossDiv><title>S</title>
	   <GlossList>
		<GlossEntry ID="SGML" SortAs="SGML">
		 <GlossTerm>Standard Generalized Markup Language</GlossTerm>
		 <Acronym>SGML</Acronym>
		 <Abbrev>ISO 8879:1986</Abbrev>
		 <GlossDef>
		  <para>A meta-markup language, used to create markup languages such as DocBook.</para>
		  <GlossSeeAlso OtherTerm="GML">
		  <GlossSeeAlso OtherTerm="XML">
		 </GlossDef>
		 <GlossSee OtherTerm="markup">
		</GlossEntry>
	   </GlossList>
	  </GlossDiv>
	</glossary>


JSON Code
+++++++++

.. literalinclude:: code/json
   :language: json
   
Task
++++

Create two types of code snippets:

1. Included in the file (use any code block you like).

2. Retreived from an external file: code/html.



