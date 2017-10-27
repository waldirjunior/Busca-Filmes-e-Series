<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta charset="utf-8" />
    <title>Próximos Episodios Séries - MouseBox</title>

    <?php include $_SERVER['DOCUMENT_ROOT']."/topo/metatopo.php"; ?>

    <meta name="msapplication-TileImage" content="http://van-der-noord.nl/whensmyshow/mstile-144x144.png">
    <meta name="msapplication-config" content="http://van-der-noord.nl/whensmyshow/browserconfig.xml">

    <link href="/comuns/plugins/pace/pace-theme-flash.css" rel="stylesheet" type="text/css" />
    <link href="/comuns/plugins/boostrapv3/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/comuns/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link href="/comuns/plugins/jquery-scrollbar/jquery.scrollbar.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/comuns/plugins/bootstrap-select2/select2.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/comuns/plugins/switchery/css/switchery.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/comuns/plugins/bootstrap3-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
    <link href="/comuns/plugins/jquery-menuclipper/jquery.menuclipper.css" rel="stylesheet" type="text/css" />
    <link href="/comuns/css/pages-icons.css" rel="stylesheet" type="text/css">
    <link class="main-stylesheet" href="/comuns/css/pages.css" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" type="text/css" href="/comuns/css/moviedbs.css" />
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    <!--[if lte IE 9]>
        <link href="pages/css/ie9.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <script type="text/javascript">
    window.onload = function()
    {
      // fix for windows 8
      if (navigator.appVersion.indexOf("Windows NT 6.2") != -1)
        document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="pages/css/windows.chrome.fix.css" />'
    }
    </script>
  </head>
  <body class="fixed-header   ">
    <!-- BEGIN SIDEBPANEL-->
    <?php include($_SERVER['DOCUMENT_ROOT']."/topo/menu.php"); ?>
    <!-- END SIDEBAR -->
    <!-- END SIDEBPANEL-->
    <!-- START PAGE-CONTAINER -->
    <div class="page-container">
      <!-- START HEADER -->
      <?php include($_SERVER['DOCUMENT_ROOT']."/topo/header.php"); ?>
      <!-- END HEADER -->
      <!-- START PAGE CONTENT WRAPPER -->
      <div class="page-content-wrapper full-height">
        <!-- START PAGE CONTENT -->



        <div class="content full-height" style="padding-top: 21px;">
          <div class="full-height">

             <div id="featured" style=""></div>
                <table>
                    <tr>
                        <td id="myTd">
                            <center>
                                <div id="myTitle" style="font-size: 50px;text-align: center; font-family: Arial; color: white;background-color: Black;z-index: 1;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';filter: alpha(opacity=50);opacity: .8;font-family: " Arial ";font-size: 20px;margin: 10px 0 0 10px;white-space: nowrap;overflow: hidden;width: 30em;">Digite nome da Série:</div>

                                <div id="replace">
                                    <input placeHolder="text" name="inputShow" id="inputShow" type="text" style="width: 600px; height: 75px; font-size: 50px; text-align: center;">
                                    <p id="insert"></p>
                                    <p id="insInf" onclick="alert(episodeInfo)"></p> 
                                    </input>
                                </div>
                            </center>
                        </td>
                    </tr>
                </table>
            <div class="h1-md" width="5em" height="1%" id="recentsT" style="
            background-color: white;
            z-index: 1;
            font-weight: 400;
            color:white;
            width:23%;
            font-family: Helvetica
            height:5%">

                <h2>Episódios recentes</h2>
            </div>

            <div style="height:25%;width:100%;background-color:white;z-index: 1;color:white;" id="recents">
                <div onclick="similar()" style="font-family:Arial;" id="seenText" class="seenText"></div>
                <div class="recent" id="recent1"> </div>
                <div class="recent" id="recent2"></div>
                <div class="recent" id="recent3"></div>
                <div class="recent" id="recent4"></div>
                <div class="recent" id="recent5"></div>
                <div class="recent" id="recent6"></div>
            </div>

          </div>
          </div>

        <!-- END PAGE CONTENT -->
      </div>
      <!-- END PAGE CONTENT WRAPPER -->
    </div>
    <!-- END PAGE CONTAINER -->
    <?php include($_SERVER['DOCUMENT_ROOT']."/rodape/quickview.php"); ?>
    <?php include($_SERVER['DOCUMENT_ROOT']."/rodape/overlay.php"); ?>
    <!-- END OVERLAY -->
    <!-- BEGIN VENDOR JS -->
    <script src="/comuns/plugins/pace/pace.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/modernizr.custom.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/boostrapv3/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery/jquery-easy.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery-unveil/jquery.unveil.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery-bez/jquery.bez.min.js"></script>
    <script src="/comuns/plugins/jquery-ios-list/jquery.ioslist.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/jquery-actual/jquery.actual.min.js"></script>
    <script src="/comuns/plugins/jquery-scrollbar/jquery.scrollbar.min.js"></script>
    <script type="text/javascript" src="/comuns/plugins/bootstrap-select2/select2.min.js"></script>
    <script type="text/javascript" src="/comuns/plugins/classie/classie.js"></script>
    <script src="/comuns/plugins/switchery/js/switchery.min.js" type="text/javascript"></script>
    <script src="/comuns/plugins/bootstrap3-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
    <script src="/comuns/plugins/jquery-menuclipper/jquery.menuclipper.js"></script>
    <!-- END VENDOR JS -->
    <!-- BEGIN CORE TEMPLATE JS -->
    <script src="/comuns/js/pages.min.js"></script>
    <script src="/comuns/js/pages.email.js" type="text/javascript"></script>
    <!-- END CORE TEMPLATE JS -->
    <!-- BEGIN PAGE LEVEL JS -->
    <script src="/comuns/js/scripts.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL JS -->


    <script src="http://van-der-noord.nl/scripts/time.to.js" type="text/javascript"></script>
    <script src="themoviedb.js"></script>
    <script src="main.js"></script>
    <script src="main2.js"></script>


  </body>
</html>