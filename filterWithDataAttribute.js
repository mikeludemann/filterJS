var filtering = filtering || {};

filtering.showing = {

    fading: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer){
        
        var showElements = $(elements);
      
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.show(timer);
                   
                } else {
              
                    showElements.hide(timer);
                    
                    $(completeFilter).fadeIn(timer);
                  
                }

            }, function(){

                    var filterActive = elementEvent.filter(this).data(dataAttribute);  
                
                    showElements.show(timer);

            });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
              
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.show(timer);
                   
                } else {
              
                    showElements.hide(timer);
                    
                    $(completeFilter).fadeIn(timer);
                  
                }

            });

        }

    },

    sliding: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer){

        var showElements = $(elements);
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
              
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.show(timer);
                   
                } else {
              
                    showElements.hide(timer);
                    
                    $(completeFilter).slideDown(timer);
                    
                }

            }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.show(timer);

            });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);

                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.show(timer);
                   
                } else {
              
                    showElements.hide(timer);
                    
                    $(completeFilter).slideDown(timer);
                  
                }

            });

        }

    },

    animateWidth: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer){

        var showElements = $(elements);

        var widthElements = $(elements).css("width");
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
              
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"width": widthElements}).show(timer);
                   
                } else {
              
                    showElements.css({"width": "0"}).hide(timer);
                    
                    $(completeFilter).show(timer).animate({"width": widthElements});
                  
                }

            }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.css({"width": widthElements}).show(timer);

            });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
              
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"width": widthElements}).show(timer);
                    
                } else {
              
                    showElements.css({"width": "0"}).hide(timer);
                    
                    $(completeFilter).show(timer).animate({"width": widthElements});
                  
                }

            });

        }

    },

    animateHeight: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer){

        var showElements = $(elements);

        var heightElements = $(elements).css("height");
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
                
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"height": heightElements}).show(timer);
                    
                } else {
                
                    showElements.css({"height": heightElements}).hide(timer);
                        
                    $(completeFilter).show(timer).animate({"height": heightElements});
                    
                }

            }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.css({"height": heightElements}).show(timer);

            });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
                
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"height": heightElements}).show(timer);
                    
                } else {
                
                    showElements.css({"height": "0"}).hide(timer);
                    
                    $(completeFilter).show(timer).animate({"height": heightElements});
                    
                }

            });

        }

    },

    animateWidthAndHeight: function(elements, dataElements, dataAttribute, dataAttributeAll, clickElement, eventElement, timer){

        var showElements = $(elements);

        var heightElements = $(elements).css("height");
        var widthElements = $(elements).css("width");
        
        if(eventElement.toLowerCase() == "hover"){

            var elementEvent = $(clickElement).hover(function(){

            var filterActive = elementEvent.filter(this).data(dataAttribute);
            
            var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
            
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"width": widthElements, "height": heightElements}).show(timer);
                    
                } else {
                
                    showElements.css({"width": "0", "height": "0"}).hide(timer);
                        
                    $(completeFilter).show(timer).animate({"width": widthElements, "height": heightElements});
                    
                }

            }, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
                
                showElements.css({"width": widthElements, "height": heightElements}).show(timer);

        });

        } else {

            var elementEvent = $(clickElement).on(eventElement, function(){

                var filterActive = elementEvent.filter(this).data(dataAttribute);
              
                var completeFilter = dataElements.replace("]","*='" + filterActive +"']");
              
                if(filterActive == dataAttributeAll){
                
                    showElements.css({"width": widthElements, "height": heightElements}).show(timer);
                   
                } else {
              
                    showElements.css({"width": "0", "height": "0"}).hide(timer);
                    
                    $(completeFilter).show(timer).animate({"width": widthElements, "height": heightElements});
                  
                }

            });

        }

    }

}