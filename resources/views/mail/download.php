<?php
$type_of_resource= $data["type_of_resource"];
$resource_url= $data["resource_url"];
$resource_topic= $data["resource_topic"];
$resource_path= $data["resource_path"];
$image_path= $data["image_path"];
$download_link= $data["download_link"];
$description= $data["description"];
$total= strlen($description);
if($total>=200){
    $description=substr($description,0,200)." ...";
}
$company_name= $data["company_name"];

$related_resource_topic= $data["related_resource_topic"];
$related_image_path= $data["related_image_path"];
$related_resource_url= $data["related_resource_url"];
$related_description= $data["related_description"];

$related_total= strlen($related_description);
if($related_total>=200){
    $related_description=substr($related_description,0,200)." ...";
}


?>
<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>

        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->

      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Poppins:400,700);
        </style>
      <!--<![endif]-->



    <style type="text/css">
      @media only screen and (max-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
      }
    </style>


        <style type="text/css">



    @media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }

        </style>
        <style type="text/css">.hide_on_mobile { display: none !important;}
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;}
        @media only screen and (min-width: 480px) {
            .hide_section_on_mobile {
                display: table !important;
            }

            div.hide_section_on_mobile {
                display: block !important;
            }
        }
        .hide_on_desktop { display: block !important;}
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop {
            display: table !important;
            width: 100%;
        }
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }

          p, h1, h2, h3 {
              margin: 0px;
          }

          ul, li, ol {
            font-size: 11px;
            font-family: Ubuntu, Helvetica, Arial;
          }

          a {
              text-decoration: none;
              color: inherit;
          }

          @media only screen and (max-width:480px) {

            .mj-column-per-100 { width:100%!important; max-width:100%!important; }
            .mj-column-per-100 > .mj-column-per-75 { width:75%!important; max-width:75%!important; }
            .mj-column-per-100 > .mj-column-per-60 { width:60%!important; max-width:60%!important; }
            .mj-column-per-100 > .mj-column-per-50 { width:50%!important; max-width:50%!important; }
            .mj-column-per-100 > .mj-column-per-40 { width:40%!important; max-width:40%!important; }
            .mj-column-per-100 > .mj-column-per-33 { width:33.333333%!important; max-width:33.333333%!important; }
            .mj-column-per-100 > .mj-column-per-25 { width:25%!important; max-width:25%!important; }

            .mj-column-per-100 { width:100%!important; max-width:100%!important; }
            .mj-column-per-75 { width:100%!important; max-width:100%!important; }
            .mj-column-per-60 { width:100%!important; max-width:100%!important; }
            .mj-column-per-50 { width:100%!important; max-width:100%!important; }
            .mj-column-per-40 { width:100%!important; max-width:100%!important; }
            .mj-column-per-33 { width:100%!important; max-width:100%!important; }
            .mj-column-per-25 { width:100%!important; max-width:100%!important; }
        }</style>

      </head>
      <body style="background-color:#f0f0f0;">


      <div style="background-color:#f0f0f0;">

      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;background-color:#f0f0f0;width:100%;">
        <tbody>
          <tr>
            <td>


      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:5px 0px 5px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:middle;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">

            <tr>
              <td align="left" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">

      <!-- <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#7a7a7a;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;">Visit the Mining Markeplace Resource Center</p></div> -->

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


            </td>
          </tr>
        </tbody>
      </table>


      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:middle;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">

            <tr>
              <td align="center" style="font-size:0px;padding:25px 25px 25px 25px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:312px;">

        <a href="https://resources.miningmarketplace.com" target="_blank" style="color: #0000EE;">

      <img alt="Resource Center Logo" height="auto" src="https://storage.googleapis.com/topolio35082/plugin-assets/6320/35082/RC_logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="312">

        </a>

            </td>
          </tr>
        </tbody>
      </table>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

        <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill  origin="0.5, 0" position="0.5, 0" src="https://storage.googleapis.com/topolio35082/plugin-assets/6320/35082/pexels-77541108-06d6-4230-959e-9e2405fb1a5d.jpg" color="#0A0B0A" type="tile" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->

      <div style="background:#0A0B0A url(https://storage.googleapis.com/topolio35082/plugin-assets/6320/35082/pexels-77541108-06d6-4230-959e-9e2405fb1a5d.jpg) top center / cover no-repeat;margin:0px auto;max-width:600px;">
        <div style="line-height:0;font-size:0;">
        <table align="center" background="https://storage.googleapis.com/topolio35082/plugin-assets/6320/35082/pexels-77541108-06d6-4230-959e-9e2405fb1a5d.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0A0B0A url(https://storage.googleapis.com/topolio35082/plugin-assets/6320/35082/pexels-77541108-06d6-4230-959e-9e2405fb1a5d.jpg) top center / cover no-repeat;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:middle;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">

            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.2;text-align:left;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial; text-align: center;"><span style="font-size: 22px;"><strong><span style="color: rgb(236, 240, 241); font-family: Poppins, sans-serif;"><span style="font-size: 15px;">Thank you for using the Mining Marketplace Resource Center, the mining and construction industry's largest directory of free vendor-supplied technical content. We hope you will visit again soon.  </span><br></span></strong></span></p></div>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

        <!--[if mso | IE]>
        </v:textbox>
      </v:rect>

          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial; text-align: center;"><span style="font-size: 20px;"><strong>Your Resource Center Download</strong></span></p></div>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->

      <div class="mj-column-per-50 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td align="center" style="font-size:0px;padding:25px 25px 25px 25px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:250px;">

        <a href="<?php echo $resource_url; ?>" target="_blank" style="color: #0000EE;">

      <img alt="" height="auto" src="<?php echo $image_path; ?>" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250">

        </a>

            </td>
          </tr>
        </tbody>
      </table>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->

      <div class="mj-column-per-50 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td align="left" style="font-size:0px;padding:10px 20px 10px 20px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;"><span style="font-family: Poppins, sans-serif;"><a href="[download_link]" target="_blank" rel="noopener" style="color: #0000EE;"><strong><span style="font-size: 18px;"><?php echo $resource_topic; ?></span></strong></a></span></p>
<p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 14px; font-family: Poppins, sans-serif;"><?php echo $description; ?><em>
    <a href="<?php echo $resource_url; ?>" target="_blank" rel="noopener" style="color: #0000EE;">(View original online.)</a>
</em></span></p></div>

              </td>
            </tr>

            <tr>
              <td align="center" vertical-align="middle" style="font-size:0px;padding:20px 20px 20px 20px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%;">
        <tr>
          <td align="center" bgcolor="#e85034" role="presentation" style="border:none;border-radius:24px;cursor:auto;mso-padding-alt:9px 26px 9px 26px;background:#e85034;" valign="middle">
          <?php if($type_of_resource==6 or $type_of_resource==7){ ?>
            <a href="<?php echo $resource_path; ?>" style="display: inline-block; background: #e85034; color: #ffffff; font-family: Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; line-height: 100%; margin: 0; text-decoration: none; text-transform: none; padding: 9px 26px 9px 26px; mso-padding-alt: 0px; border-radius: 24px;" target="_blank">
              <span style="line-height: 1;">View</span>
            </a>
            <?php } else { ?>
          <a href="<?php echo $download_link; ?>" style="display: inline-block; background: #e85034; color: #ffffff; font-family: Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; line-height: 100%; margin: 0; text-decoration: none; text-transform: none; padding: 9px 26px 9px 26px; mso-padding-alt: 0px; border-radius: 24px;" target="_blank">
              <span style="line-height: 1;">Download</span>
            </a>
            <?php } ?>
          </td>
        </tr>
      </table>

      </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td style="font-size:0px;padding:10px 10px;padding-top:10px;word-break:break-word;">

      <p style="font-family: Ubuntu, Helvetica, Arial; border-top: solid 1px #000000; font-size: 1; margin: 0px auto; width: 100%;">
      </p>

      <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #000000;font-size:1;margin:0px auto;width:580px;" role="presentation" width="580px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->


              </td>
            </tr>

            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial; text-align: center;"><span style="font-size: 16px;"><strong>Related Material  </strong></span></p></div>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->

      <div class="mj-column-per-50 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td align="center" style="font-size:0px;padding:25px 25px 25px 25px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:250px;">

        <a href="" target="_blank" style="color: #0000EE;">

      <img alt="2023 Cement Products Media Kit" height="auto" src="<?php echo $related_image_path ?>" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250">

        </a>

            </td>
          </tr>
        </tbody>
      </table>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->

      <div class="mj-column-per-50 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

            <tr>
              <td align="left" style="font-size:0px;padding:10px 20px 10px 20px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;"><span style="font-family: Poppins, sans-serif;"><a href="" target="_blank" rel="noopener" style="color: #0000EE;"><strong><span style="font-size: 18px;"><?php echo $related_resource_topic; ?></span></strong></a></span></p>
<p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 14px; font-family: Poppins, sans-serif;"><?php echo $related_description; ?></span></p></div>

              </td>
            </tr>

            <tr>
              <td align="center" vertical-align="middle" style="font-size:0px;padding:20px 20px 20px 20px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%;">
        <tr>
          <td align="center" bgcolor="#e85034" role="presentation" style="border:none;border-radius:24px;cursor:auto;mso-padding-alt:9px 26px 9px 26px;background:#e85034;" valign="middle">
            <a href="<?php echo $related_resource_url ?>" style="display: inline-block; background: #e85034; color: #ffffff; font-family: Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; line-height: 100%; margin: 0; text-decoration: none; text-transform: none; padding: 9px 26px 9px 26px; mso-padding-alt: 0px; border-radius: 24px;" target="_blank">
              <span style="line-height: 1;">View Online</span>
            </a>
          </td>
        </tr>
      </table>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td>


      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


      <div style="margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:middle;width:600px;"
            >
          <![endif]-->

      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">

            <tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:center;color:#000000;"><p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;margin-top:10px"><span style="font-size: 13px;">© Copyright 2022. SEMCO Publishing</span></p>
<p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 13px;">8751 E. Hampden Ave B1 Denver, CO 80231 USA</span></p>
<p style="font-size: 11px; font-family: Ubuntu, Helvetica, Arial;;margin-bottom:10px"><span style="font-size: 13px;">+1 (303) 283-0640 <a href="mailto:support@semcopublishing.com" target="_blank" rel="noopener" style="color: #0000EE;">support@semcopublishing.com</a></span></p></div>

              </td>
            </tr>

      </table>

      </div>

          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


            </td>
          </tr>
        </tbody>
      </table>

      </div>

      </body>
    </html>
