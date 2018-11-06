$(function() {
    console.log( "ready!" );

    // Nav Btns 



    $('.dashboardBtn').css({'background': '#3399FF', 
                            'border':'none',
                            'border-radius':'20px',
                            'height':'40px',
                            'width':'110px',
                            'font-size':'14px',
                            'color': 'white',
                            'margin':'46px 10px 0 10px', 
                            'cursor': 'pointer'});

    
    $('.hostingBtn').css({'background': 'transparent', 
                            'border':'none',
                            'border-radius':'20px',
                            'height':'40px',
                            'width':'110px',
                            'font-size':'14px',
                            'color': 'white',
                            'margin':'46px 10px 0 10px', 
                            'cursor': 'pointer'});


    $('.domainsBtn').css({'background': 'transparent', 
                          'border':'none',
                          'border-radius':'20px',
                          'height':'40px',
                          'width':'110px',
                          'font-size':'14px',
                          'color': 'white',
                          'margin':'46px 10px 0 10px', 
                          'cursor': 'pointer'});


    $('.marketplaceBtn').css({'background': 'transparent', 
                          'border':'none',
                          'border-radius':'20px',
                          'height':'40px',
                          'width':'110px',
                          'font-size':'14px',
                          'color': 'white',
                          'margin':'46px 10px 0 10px', 
                          'cursor': 'pointer'});



    // Nav Dropdown Logic Starts
    $('.navDropdownContainer').hide();
    
    $('.hamburgerMenu').click(function(){
        $('.navDropdownContainer').toggle();
    });

    $('.moreDropdownContainer').hide();

    $('.moreBtnContainer').click(function(){
        $('.moreDropdownContainer').toggle();
    });

 


});