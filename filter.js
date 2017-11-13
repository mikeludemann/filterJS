var filtering = filtering || {};

filtering.showing = {

    fading: function(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector){

        var showElements = $(elements);
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.hide(timer).filter(attributeSelector + filterActive).fadeIn(timer);

        }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.hide(timer).filter(attributeSelector + filterActive).fadeIn(timer);

            });

        }

    },

    sliding: function(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector){

        var showElements = $(elements);
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.hide(timer).filter(attributeSelector + filterActive).slideDown(timer);

        }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.hide(timer).filter(attributeSelector + filterActive).slideDown(timer);

            });

        }

    },

    animateWidth: function(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector){

        var showElements = $(elements);

        var widthElements = $(elements).css("width");
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"width": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"width": widthElements});

        }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"width": widthElements}).show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"width": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"width": widthElements});

            });

        }

    },

    animateHeight: function(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector){

        var showElements = $(elements);

        var heightElements = $(elements).css("height");
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"height": heightElements});

        }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": heightElements}).show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"height": heightElements});

            });

        }

    },

    animateWidthAndHeight: function(elements, clickElement, eventElement, timer, dataAttribute, attributeSelector){

        var showElements = $(elements);

        var widthElements = $(elements).css("width");
        var heightElements = $(elements).css("height");

        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": "0", "width": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"height": heightElements, "width": widthElements});

        }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": heightElements, "width": widthElements}).show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                showElements.css({"height": "0", "width": "0"}).hide(timer).filter(attributeSelector + filterActive).show(timer).animate({"height": heightElements, "width": widthElements});

            });

        }

    }

}