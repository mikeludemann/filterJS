# filterJS

Filtering elements with different animation
Using "data" Attribute in HTML and specifies this data Atrribute with the parameter "dataAttribute"

Example

```code

Using diffent modules

filtering.showing.fading(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector);

With Parameter
filtering.showing.fading(".box",".btn","click",1000,"filter",".");

filtering.showing.sliding(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector);

With Parameter
filtering.showing.sliding(".box",".btn","click",1000,"filter",".");

filtering.showing.animateWidth(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector);

With Parameter
filtering.showing.animateWidth(".box",".btn","click",1000,"filter",".");
filtering.showing.animateWidth(".box",".btn","click","fast","filter",".");

filtering.showing.animateHeight(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector);

With Parameter
filtering.showing.animateHeight(".box",".btn","click",1000,"filter",".");
filtering.showing.animateHeight(".box",".btn","click","fast","filter",".");

filtering.showing.animateWidthAndHeight(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector);

With Parameter
filtering.showing.animateWidthAndHeight(".box",".btn","click",1000,"filter",".");
filtering.showing.animateWidthAndHeight(".box",".btn","click","fast","filter",".");

Using datt Attribute in HTML

<div data-<The name of dataAttribute in your function>="text">...</div>

With Parameter
<div data-filter="text">...</div>

```

Example with data attribute filter

```code

Using diffent modules

filtering.showing.fading: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer);

With Parameter
filtering.showing.fading(".box","[data-name]","filter","all",".btn","click",1000);
filtering.showing.fading(".box","[data-name]","filter","all",".btn","hover",1000);

filtering.showing.sliding: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer);

With Parameter
filtering.showing.sliding(".box","[data-name]","filter","all",".btn","click",1000);
filtering.showing.sliding(".box","[data-name]","filter","all",".btn","hover",1000);

filtering.showing.animateWidth: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer);

With Parameter
filtering.showing.animateWidth(".box","[data-name]","filter","all",".btn","click",1000);
filtering.showing.animateWidth(".box","[data-name]","filter","all",".btn","hover",1000);

filtering.showing.animateHeight: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer);

With Parameter
filtering.showing.animateHeight(".box","[data-name]","filter","all",".btn","click",1000);
filtering.showing.animateHeight(".box","[data-name]","filter","all",".btn","hover",1000);

filtering.showing.animateWidthAndHeight: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer);

With Parameter
filtering.showing.animateWidthAndHeight(".box","[data-name]","filter","all",".btn","click",1000);
filtering.showing.animateWidthAndHeight(".box","[data-name]","filter","all",".btn","hover",1000);

Using datt Attribute in HTML

Filter Elements
<div <The name of dataAttribute in your function>="text">...</div>

With Parameter
<div data-filter="text">...</div>

Search Elements
<div data-<The name of dataElements in your function>=<The value of dataAttribute>>...</div>

With Parameter
<div data-name="test">...</div>

```