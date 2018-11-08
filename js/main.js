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

    // Up Blink on Status Bar
    // var blink = new TimelineMax();
    // blink.to('.up', 1, {opacity: .2, repeat: 2})
    //      .to('.up', 1, {opacity: 1});

    



    // Status Progress Bar Chart Animation
    var tl = new TimelineMax();

    tl.to('.barFill1', .2, {  background:'#0080FF', height: '30px'})
    .to('.barFill2', .2, { background: '#0080FF', height: '41px'})
    .to('.barFill3', .2, { background: '#0080FF', height: '61px'})
    .to('.barFill4', .2, { background: '#0080FF', height: '83px'})
    .to('.barFill5', .2, { background: '#0080FF', height: '26px'})
    .to('.barFill6', .2, { background: '#0080FF', height: '53px'})
    .to('.barFill7', .2, { background: '#0080FF', height: '79px'});

    var defaultImg = new TimelineMax();

        // defaultImg.from('.defaultCard', 1, { opacity:0})
    
    // $('.defaultCard')



 


});