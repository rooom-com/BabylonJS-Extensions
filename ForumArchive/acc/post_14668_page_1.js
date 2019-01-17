[{"Owner":"gryff","Date":"2015-05-21T16:34:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It has been a while since I first use a skybox - the Christmas village I created. Recently_co_ I have been experimenting with skyboxes again - but with a larger terrain - and have run into a problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I have used a simplified version of code that I first found in Wingnut_t_s _qt__lt_em_gt_Skybox Tour_lt_/em_gt__qt_ that is on the BJS examples webpage._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is my basic skybox using that code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/skybox/index1.html_qt_ rel_eq__qt_external nofollow_qt__gt_Basic Skybox_lt_/a_gt_ - with both ground plane and skybox set to 1000x1000 (x_co_z dimensions)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I want to use a Blender created terrain and add the same skybox to it. Here are the results_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1_dd_ Skybox size _eq_1000 - _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/skybox/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_Skybox + blender terrain_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2_dd_ Skybox size _eq_ 200 - _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/skybox/index3.html_qt_ rel_eq__qt_external nofollow_qt__gt_Skybox + blender terrain_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In case 1_co_ the skybox does not show - just the red _qt_clearColor_qt_. But that skybox size  worked fine in basic example_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve tried it with BJS 1.14 and 2.0 with same results - so I don_t_t think it is a problem with BJS. I suspect the problem lies with my code - but I have no idea where._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So suggestions welcome - as I_t_m not _qt__lt_em_gt_sharpest knife in the drawer_lt_/em_gt__qt_ when it comes to coding _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ alt_eq__qt__dd_unsure_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-21T17:34:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Without checking the code (on my phone _dd_-)) - maybe z clipping of the camera?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-05-21T17:59:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_maybe z clipping of the camera_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TY for the suggestion Raanan. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had tried to account for that by setting a maximum Z value of the camera to  2000._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_BUT_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried to set it with _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_myCamera2.MaxZ_eq_ 2000_sm__lt_/pre_gt__lt_p_gt_when of course it should be_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_myCamera2.maxZ_eq_ 2000_sm__lt_/pre_gt__lt_p_gt_I guess it just failed silently._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TY for making me go back and look at my code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[gryff &lt_sm_--- bangs head on desk _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt_ ]_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-21T19:32:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__dd_-)_lt_/p_gt__lt_p_gt_I_t_m happy the problem was solved_co_ don_t_t bang the head too hard!_lt_/p_gt__lt_p_gt_This is_co_ by the way_co_ why I love TypeScript. Solves just that..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]