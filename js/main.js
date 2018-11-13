$(function() {
    // Nav Btns Code STARTS 
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
    // Nav Btns Code ENDS 



    // Nav Dropdown Logic STARTS
    $('.navDropdownContainer').hide();
    $('.hamburgerMenu').click(function(){
        $('.navDropdownContainer').toggle();
    });
    // Nav Dropdown Logic ENDS

    // More Dropdown Code STARTS 
    $('.moreDropdownContainer').hide();
    $('.moreBtnContainer').click(function(){
        $('.moreDropdownContainer').toggle();
    });
    // More Dropdown Code ENDS



    // Status Progress Bar Chart Animation STARTS 
    var tl = new TimelineMax();

    tl.to('.barFill1', .2, {  background:'#0080FF', height: '30px'})
    .to('.barFill2', .2, { background: '#0080FF', height: '41px'})
    .to('.barFill3', .2, { background: '#0080FF', height: '61px'})
    .to('.barFill4', .2, { background: '#0080FF', height: '83px'})
    .to('.barFill5', .2, { background: '#0080FF', height: '26px'})
    .to('.barFill6', .2, { background: '#0080FF', height: '53px'})
    .to('.barFill7', .2, { background: '#0080FF', height: '79px'});
    // Status Progress Bar Chart Animation ENDS 



    // Content Placeholder Code STARTS
    // var defaultImg = new TimelineMax();

    function showDefaultCard() {
        $('.defaultCard').show();
        $('.dataLoadedCard').hide();
    }
    function showDataLoaded() {
        $('.defaultCard').hide();
        $('.dataLoadedCard').show();
    }
    setTimeout(showDefaultCard, 0);
    setTimeout(showDataLoaded, 2000);

    // Content Placeholder Code ENDS 


    // Backup Alert STARTS
    $('.alertContainer').hide();

    function showBackupAlert() {
        $('.alertContainer').show();
        var backupAlert = new TimelineLite({pased: true});
        backupAlert.from('.alertbgOne', .2, { opacity:0, x: 50, scale: .5 })
                    .from('.alertbgTwo', .2, { opacity:0, x: 50, scale: .5 })
                    .from('.alertbgThree', .2, { opacity:0, x: 50, scale: .5 });
        $( ".click" ).click(function() {
            backupAlert.to('.alertbgOne', .2, { x: 20 })
                       .to('.alertbgTwo', .2, { x: 40 })
                       .to('.alertbgThree', .2, { x: 60 })
                       .to('.alertContainer', .2, { x: 1000 })
                       .to('.bgHeaderColor', 1, { backgroundColor: '#3580F6'})
                       .to('.bgHeaderColor', 1, { backgroundColor: '#006CD6'});
                       
        });
    }
    setTimeout(showBackupAlert, 2100);
 

    // Backup Alert ENDS

 


    



 


});