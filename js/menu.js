jQuery('document').ready(function($){

    var showMenu = $('.menu_icon'),
        menu = $('.nav_menu_full ul');


        showMenu.click(function(){
        
            if (menu.hasClass('show')){
                menu.removeClass('show');
            }else{
                menu.addClass('show');
            }           

        });

});