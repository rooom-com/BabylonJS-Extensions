[{"Owner":"NasimiAsl","Date":"2016-02-16T05:32:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think it can be very useful if we can Make render target with Cameras .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis that possible in technical?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-16T06:25:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi N!  Isn_t_t that what is happening in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#6_lt_/a_gt_ ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-02-16T08:01:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ I dont know render target has activeCamera _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tis that work without viewport camera too ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-16T19:23:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-02-17T07:02:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks @dk and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-17T12:28:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHi guys!   I spent a few minutes trying to _qt_gang_qt_ the cameras_co_ and did not succeed.  _qt_Ganging_qt_ is not a commonly-used English term.   Google defines it as _qt_arrange (electrical devices or machines) together to work in coordination._qt_  _qt_Coordination_qt_... yeah_co_ that_t_s a good word... I suppose.  I made a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%237_qt_ rel_eq__qt_external nofollow_qt__gt_fresh playground_lt_/a_gt_.   I changed the var name _lt_em_gt_camera_lt_/em_gt_ to _lt_em_gt_camera0_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPretend I want to _qt_gang_qt_ camera0.alpha... with cameras 1-4 alpha. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I left/right-pan _qt_master_qt_ camera0 with the mouse_co_ I would like the other 4 _qt_slave_qt_ cameras to pan left/right_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t be fooled by setting _lt_em_gt_camera1.alpha _eq_ camera2.alpha _eq_ camera3.alpha _eq_ camera4.alpha _eq_ camera0.alpha_lt_/em_gt_ in the render loop.  Although that IS a type of _qt_ganging_qt__co_ it is a _lt_u_gt_non-offset_lt_/u_gt_ ganging.  ALL the cameras will have exactly the same alpha.  This is not desired.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want the _lt_u_gt_amount of change_lt_/u_gt_ in master camera0 alpha... to be applied to the alpha of the slave cameras (1-4). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love to see various _qt_ganging_qt_ solutions.  I looked at _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.camera.js_qt_ rel_eq__qt_external nofollow_qt__gt_camera class_lt_/a_gt_ to try to learn HOW mouse/controller movements... are hooked to cameras.  Nothing learned.  Likely it is done in the scary area called _qt_engine_qt_.  _lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAside_dd_  Base class Camera is sure messy.  Maybe that was necessary to create the new (overloaded?) universalCamera.  I foresee future overloading regrets_co_ there.  Although _qt_behavior modules_qt_ is something I dreamed-up and are likely implausible_co_ I think cameras are a good candidate for the use of such things.  But maybe not.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  All in all_co_ maybe someday_co_ I/we will write a tutorial that teaches how mouse movements become camera movements.  That _qt_connection_qt_ might be a good place for an exposed-to-user patch panel... where the user can _qt_re-wire_qt_ and branch/fork mouse/controller movements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeantime_co_ does anyone have _qt_ganging_qt_ solutions?  I would love to see them and hear about them.  Thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you don_t_t mind me _qt_borrowing_qt_ your thread for this_co_ Nasi.  And I hope you don_t_t mind that I call you _qt_Nasi_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-02-18T15:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut  just about a last part \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__t_I hope you don_t_t mind me _qt_borrowing_qt_ your thread for this_co_ Nasi.  And I hope you don_t_t mind that I call you _qt_Nasi_qt_. _lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ style_eq__qt_vertical-align_dd_middle_sm_border_dd_0px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ _t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti like looking  Black side of code (means some check and test more than normal test  for code) . because when we share a code in open source license we just test and correct code and test again so when we see right result we stop more testing so we need watch clean for other people  questions  about code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy writing is not for camera because i haven_t_t time for check it now but i like see your replay (looking  Black side of code ) after tomorrow when i upload eash.space ( i finished some part of documents and i upload it after 24 hours and share it ). i wait for your replay .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand we r not _qt_borrowing_qt_ when we thread_t_s  have good result \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor fun _dd_ pick one _t_wild_t_ or _t_Nasi_t_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]