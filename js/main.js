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

    var hamburgerBg = new TimelineMax();


    // hamburgerBg.to('.hamburgerMenu', 1, { width: '300px' })



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

    $('.alertContainer').hide();

    var defaultLoad = new TimelineMax({ repeat: -1 });

        defaultLoad.from('.defaultNameLineFill', 0, {  width: '0%'})
                   .to('.defaultNameLineFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultDescriptionLineOneFill', 0, { width: '0%'})
                   .to('.defaultDescriptionLineOneFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultDescriptionLineTwoFill', 0, { width: '0%'})
                   .to('.defaultDescriptionLineTwoFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultDescriptionLineThreeFill', 0, { width: '0%'})
                   .to('.defaultDescriptionLineThreeFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultLineStatusOneFill', 0, { width: '0%'})
                   .to('.defaultLineStatusOneFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultLineStatusTwoFill', 0, { width: '0%'})
                   .to('.defaultLineStatusTwoFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultLineStatusThreeFill', 0, { width: '0%'})
                   .to('.defaultLineStatusThreeFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultLineStatusFourFill', 0, { width: '0%'})
                   .to('.defaultLineStatusFourFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultLineStatusFiveFill', 0, { width: '0%'})
                   .to('.defaultLineStatusFiveFill', .5, { width: '100%'}, '-=1')

                   .from('.defaultHeaderLineFill', 0, { width: '0%'})
                   .to('.defaultHeaderLineFill', .5, { width: '100%'}, '-=1')




    
    function showDefaultCard() {
        $('.defaultCard').show();
        $('.dataLoadedCard').hide();
        TweenMax.to('.bgHeaderColor', 0, { background: '#f4f8fb'});
        TweenMax.to('.dashboardBtn', 0, { background: '#f4f8fb'});
    }

    function showDataLoaded() {
        $('.defaultCard').hide();
        $('.dataLoadedCard').show();
        TweenMax.to('.bgHeaderColor', 0, { background: '#006CD6'});
        TweenMax.to('.dashboardBtn', 0, { background: '#3399FF'});
        TweenMax.to('.visitors', 0, { background: '#ffffff'});
        TweenMax.to('.vistorsWeeklyTrend', 0, { background: '#ffffff'});
        TweenMax.to('.activePlans', 0, { background: '#ffffff'});
        TweenMax.to('.nextPayment', 0, { background: '#ffffff'});
        TweenMax.to('.paymentDate', 0, { background: '#ffffff'});

        var tl = new TimelineMax();

        tl.to('.barFill1', .2, {  background:'#0080FF', height: '30px'})
        .to('.barFill2', .2, { background: '#0080FF', height: '41px'})
        .to('.barFill3', .2, { background: '#0080FF', height: '61px'})
        .to('.barFill4', .2, { background: '#0080FF', height: '83px'})
        .to('.barFill5', .2, { background: '#0080FF', height: '26px'})
        .to('.barFill6', .2, { background: '#0080FF', height: '53px'})
        .to('.barFill7', .2, { background: '#0080FF', height: '79px'});

        function showBackupAlert() {
            $('.alertContainer').show();
            var backupAlert = new TimelineLite({pased: true});
            backupAlert.from('.alertbgOne', .2, { opacity:0, x: 50, scale: .5 })
                        .from('.alertbgTwo', .2, { opacity:0, x: 50, scale: .5 })
                        .from('.alertbgThree', .2, { opacity:0, x: 50, scale: .5 });
            $( ".click" ).click(function() {
                backupAlert.to('.alertbgOne', .2, { x: 20 })
                           .to('.alertbgTwo', .2, { x: 60 })
                           .to('.alertbgThree', .2, { x: 100 })
                           .to('.alertContainer', .2, { x: 1000 })
                           .to('.bgHeaderColor', 1, { backgroundColor: '#3580F6'})
                           .to('.bgHeaderColor', 1, { backgroundColor: '#006CD6'});
                           
            });
        }
        setTimeout(showBackupAlert, 2000);




    }
    setTimeout(showDefaultCard, 0);
    setTimeout(showDataLoaded, 2000); 
});