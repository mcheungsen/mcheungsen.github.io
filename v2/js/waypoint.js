let $sections = $('section');

for (var i = 0;  i<$sections.length ; i++){
    new Waypoint({
        element: $sections[i],
        handler: function(direction){
          $(this.element).toggleClass('js-section-animate');  
        },
        offset: '50%',  
      });
}


