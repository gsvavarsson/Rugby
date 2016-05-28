app.instagram = {
    init: function() {
        this.carousel();
    },

    carousel: function () {
        // INSTAGRAM WIDGET
        $('.insta-control').on('click', function(e) {
            e.preventDefault();
            var $el = $(this);
            var count = $('.widget-instagram .big-item').length;
            var itemNumber = $el.attr('data-item-number');

            // BACK TO THE BEGINNING
            if(itemNumber >= (count + 1))
            {
                itemNumber = 1;
            }

            // TO THE END
            if (itemNumber <= 0)
            {
                itemNumber = count;
            }

            // NORMAL SWITCH
            $el.closest('.big-item').fadeOut(300);
            $('.big-item[data-item='+itemNumber+']').fadeIn(300);
        });
    }
};
