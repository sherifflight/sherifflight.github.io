/*
 *  Main Script System
 *  author: Anthony Dillon
 */

var _this = this;

$(document).ready(function () {
    setup();
});

function setup() {
    var imageObj = new Image();
    setTimeout(function () {
        $('#loader').hide();
    }, 1000);
    init();
}

function init() {
    setupTopMenu();
}

function setupTopMenu() {
    $('#top #top-right div').bind('click', function () {
        var hasSelected = $(this).hasClass('selected');
        closeTopRightDropDowns();
        if (!hasSelected) {
            $(this).addClass('selected');
            $('.drop-down', this).show();
            addTransOverlay();
            $('#top #top-right div').bind('mouseover', function () {
                if (!$(this).hasClass('selected')) {
                    $('#top #top-right div').removeClass('selected');
                    $('#top #top-right .drop-down').hide();
                    $(this).addClass('selected');
                    $('.drop-down', this).show();
                }
            });
        } else {
            $('#top #top-right div').unbind('mouseover');
            //systemMenu.setLocked(false);
        }
    });




    $('#top #top-left #control-buttons div').bind('click', function () {
        var buttonClicked = $(this).attr('id');
        $('.' + currentSystemSelected + ' .control .' + buttonClicked).trigger('click');
    });

    $('#top #top-right #speakers .banshee').mouseover(function () {
        $('#top #top-right #speakers .banshee .banshee-play').css('background-image', 'url(../img/top/banshee-play-highlight.png)');
    });

    $('#top #top-right #speakers .banshee').mouseout(function () {
        $('#top #top-right #speakers .banshee .banshee-play').css('background-image', 'url(../img/top/banshee-play.png)');
    });

}

function closeTopRightDropDowns() {
    $('#top #top-right div').removeClass('selected');
    $('#top #top-right .drop-down').hide();
    $('.fullscreenTransOverlay').unbind('click');
    $('.fullscreenTransOverlay').remove();
    $('#top #top-right div').unbind('mouseover');
}

function addTransOverlay() {
    $('body').append('<div class="fullscreenTransOverlay"></div>');
    //systemMenu.setLocked(true);
    $('.fullscreenTransOverlay').bind('click', function () {
        closeTopRightDropDowns();
    });
}

/*function setupWorkspaces(){
 workspaces = new Workspaces(this);
 workspaces.init();
 }*/

function setupSystemSettings() {
    systemSettings = new SystemSettings(this);
    systemSettings.init();
}

function setupErrorMessage() {
    errorMessage = new ErrorMessage(this);
    errorMessage.init();
}

function setupSystemOverlay() {
    systemOverlay = new SystemOverlay(this);
    systemOverlay.init();
}

function setupSystemMenu() {
    systemMenu = new SystemMenu(this);
    systemMenu.init();
}

function setupLibreSystem() {
    libreSystem = new LibreSystem(this);
    libreSystem.init();
}

function setupSoftwareSystem() {
    softwareSystem = new SoftwareSystem(this);
    softwareSystem.init();
}

function setupNotificationSystem() {
    notificationSystem = new NotificationSystem();
    notificationSystem.init();
}

function setupShutdownSystem() {
    shutdownSystem = new ShutdownSystem();
    shutdownSystem.init();
}

function setupFirefoxSystem() {
    firefoxSystem = new FirefoxSystem(this);
    firefoxSystem.init();
}

function setupMoviePlayerSystem() {
    moviePlayerSystem = new MoviePlayerSystem(this);
    moviePlayerSystem.init();
}

function setupEmailSystem() {
    emailSystem = new EmailSystem(this);
    emailSystem.init();
}

function setupUbuntuOneSystem() {
    ubuntuOneSystem = new UbuntuOneSystem(this);
    ubuntuOneSystem.init();
}

function setupFileSystem() {
    fileSystem = new FileSystem(this);
    fileSystem.init();
}

function setupWelcomeSystem() {
    welcomeSystem = new WelcomeSystem(this);
    welcomeSystem.init();
}

function setupGuidedTourSystem() {
    guidedTourSystem = new GuidedTourSystem(this);
    guidedTourSystem.init();
}

function closeAllWindows($tourIndex) {
    var _tourIndex = $tourIndex;
    $('#systemOverlay').hide();
    errorMessage.close();
    firefoxSystem.close();
    emailSystem.close();
    ubuntuOneSystem.close();
    fileSystem.close();
    shotwellSystem.close();
    libreSystem.close('writer');
    libreSystem.close('calc');
    libreSystem.close('impress');
    softwareSystem.close();
    moviePlayerSystem.close();
    guidedTourSystem.setIndex(_tourIndex);
}

function setupShotwellSystem() {
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/Buckoff.jpg', 'photo', _buck_off_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/DarkeningClockwork.jpg', 'photo', _darkening_clockwork_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/DybblsbroStation.jpg', 'photo', _dybbølsbro_station_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/FedericaMiglio.jpg', 'photo', _federica_miglio_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/JardinPolar.jpg', 'photo', _jardin_polar_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/LangelinieAlle.jpg', 'photo', _langelinie_alle_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/MomijiDream.jpg', 'photo', _momiji_dream_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/MountSnowdon.jpg', 'photo', _mount_snowdon_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/NotAlone.jpg', 'photo', _not_alone_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/PowerOfWords.jpg', 'photo', _power_of_words_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/PurpleDancers.jpg', 'photo', _purple_dancers_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/SandMaze.jpg', 'photo', _sand_maze_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/SmallFlowers.jpg', 'photo', _small_flowers_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/StalkingOcelot.jpg', 'photo', _stalking_ocelot_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/TheGrassAintGreener.jpg', 'photo', _the_grass_aint_greener_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));
    fileLibrary.push(new File(fileLibrary.length, '../img/shotwell/library/WildWheat.jpg', 'photo', _wildWheat_title_, _photo_size_, _photo_date_, '/' + _home_folder_ + '/' + _pictures_folder_));

    fileLibrary.push(new File(fileLibrary.length, '../videos/IAmWeAre.flv', 'video', _introduction_ubuntu_title_, _video_size_, _video_date_, '/' + _home_folder_ + '/' + _videos_folder_));

    fileLibrary.push(new File(fileLibrary.length, '../audio/preview.mp3', 'audio', _Happiness_title_, _music_size_, _music_date_, '/' + _home_folder_ + '/' + _music_folder_));

    shotwellSystem = new ShotwellSystem(this);
    shotwellSystem.init();
}

function topShadow($display) {
    if ($display) {
        $('#top').addClass('dropShadow');
        $('#control-buttons').hide();
        $('#top').unbind('mouseover');
        $('#top').unbind('mouseout');
    } else {
        $('#top').removeClass('dropShadow');
        $('#top').bind('mouseover', function () {
            currentSystemSelected = currentSystemSelected.replace(' pie_hover', '');
            var currentWindowFullScreen = $('.' + currentSystemSelected).hasClass('fullsize');
            if (!$('#systemOverlay').is(':visible') && currentWindowFullScreen) {
                $('#control-buttons').show();
            }
        });
        $('#top').bind('mouseout', function () {
            $('#control-buttons').hide();
        });
    }
}

function blurWindows() {
    var $currentBackground = '';
    var $indexLastSlash = 0;
    var $newBackgroundLink = '';
    for (i in openWindows) {
        if (openWindows[i] == true) {
            $('#' + i).addClass('blurred');
            $.each($('#' + i + ' *'), function () {
                if ($(this).is('img')) {
                    $currentBackground = $(this).attr('src');
                    $indexLastSlash = $currentBackground.lastIndexOf('/');
                    $newBackgroundLink = $currentBackground.substr(0, $indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
                    $(this).attr('src', $newBackgroundLink);
                } else {
                    $currentBackground = $(this).css('background-image');
                    if ($currentBackground != 'none') {
                        $indexLastSlash = $currentBackground.lastIndexOf('/');
                        $newBackgroundLink = $currentBackground.substr(0, $indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
                        $(this).css('background-image', $newBackgroundLink);
                    }
                }
            });
        }
    }

    /*$.each($('#menu *'), function(){
     if($(this).is('img')){
     $currentBackground = $(this).attr('src');
     $indexLastSlash = $currentBackground.lastIndexOf('/');
     $newBackgroundLink = $currentBackground.substr(0,$indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
     $(this).attr('src',$newBackgroundLink);
     }else{
     $currentBackground = $(this).css('background-image');
     if($currentBackground != 'none'){
     $indexLastSlash = $currentBackground.lastIndexOf('/');
     $newBackgroundLink = $currentBackground.substr(0,$indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
     $(this).css('background-image',$newBackgroundLink);
     }
     }
     });*/
    $.each($('#top-right *'), function () {
        if ($(this).is('img')) {
            $currentBackground = $(this).attr('src');
            $indexLastSlash = $currentBackground.lastIndexOf('/');
            $newBackgroundLink = $currentBackground.substr(0, $indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
            $(this).attr('src', $newBackgroundLink);
        } else {
            $currentBackground = $(this).css('background-image');
            if ($currentBackground != 'none') {
                $indexLastSlash = $currentBackground.lastIndexOf('/');
                $newBackgroundLink = $currentBackground.substr(0, $indexLastSlash) + '/blur' + $currentBackground.substr($indexLastSlash);
                $(this).css('background-image', $newBackgroundLink);
            }
        }
    });

}

function unblurWindows() {
    var $currentBackground = '';
    var $newBackgroundLink = '';
    for (i in openWindows) {
        if (openWindows[i] == true) {
            $('#' + i).removeClass('blurred');
            $.each($('#' + i + ' *'), function () {
                if ($(this).is('img')) {
                    $currentBackground = $(this).attr('src');
                    $newBackgroundLink = $currentBackground.replace('/blur', '');
                    $(this).attr('src', $newBackgroundLink);
                } else {
                    $currentBackground = $(this).css('background-image');
                    if ($currentBackground != 'none') {
                        $newBackgroundLink = $currentBackground.replace('/blur', '');
                        $(this).css('background-image', $newBackgroundLink)
                    }
                }
            });
        }
    }

    $.each($('#menu *'), function () {
        if ($(this).is('img')) {
            $currentBackground = $(this).attr('src');
            $newBackgroundLink = $currentBackground.replace('/blur', '');
            $(this).attr('src', $newBackgroundLink);
        } else {
            $currentBackground = $(this).css('background-image');
            if ($currentBackground != 'none') {
                $newBackgroundLink = $currentBackground.replace('/blur', '');
                $(this).css('background-image', $newBackgroundLink)
            }
        }
    });
    $.each($('#top-right *'), function () {
        if ($(this).is('img')) {
            $currentBackground = $(this).attr('src');
            $newBackgroundLink = $currentBackground.replace('/blur', '');
            $(this).attr('src', $newBackgroundLink);
        } else {
            $currentBackground = $(this).css('background-image');
            if ($currentBackground != 'none') {
                $newBackgroundLink = $currentBackground.replace('/blur', '');
                $(this).css('background-image', $newBackgroundLink)
            }
        }
    });
}

