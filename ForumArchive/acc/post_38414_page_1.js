[{"Owner":"NRA","Date":"2018-06-23T00:05:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have this code to evaluate onmousewheel in the screen!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can i use it in Babylon? In fact I want to use the _qt_rolled_qt_ var value in a babylon script!\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_head&gt_sm_\n    &lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_\n        function MouseScroll (event) {\n            var rolled _eq_ 0_sm_\n            if (_t_wheelDelta_t_ in event) {\n                rolled _eq_ event.wheelDelta_sm_\n            }\n            else {  // Firefox\n                    // The measurement units of the detail and wheelDelta properties are different.\n                rolled _eq_ -40 * event.detail_sm_\n            }\n            \n            var info _eq_ document.getElementById (_qt_info_qt_)_sm_\n            info.innerHTML _eq_ rolled_sm_\n        }\n\n        function Init () {\n                // for mouse scrolling in Firefox\n            var elem _eq_ document.getElementById (_qt_myDiv_qt_)_sm_\n            if (elem.addEventListener) {    // all browsers except IE before version 9\n                    // Internet Explorer_co_ Opera_co_ Google Chrome and Safari\n                elem.addEventListener (_qt_mousewheel_qt__co_ MouseScroll_co_ false)_sm_\n                    // Firefox\n                elem.addEventListener (_qt_DOMMouseScroll_qt__co_ MouseScroll_co_ false)_sm_\n            }\n            else {\n                if (elem.attachEvent) { // IE before version 9\n                    elem.attachEvent (_qt_onmousewheel_qt__co_ MouseScroll)_sm_\n                }\n            }\n        }\n    &lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body onload_eq__qt_Init ()_sm__qt_&gt_sm_\n    Use the mouse wheel on the field below.\n    &lt_sm_div id_eq__qt_myDiv_qt_ style_eq__qt_width_dd_200px_sm_ height_dd_200px_sm_ overflow_dd_auto_sm__qt_&gt_sm_\n        &lt_sm_div style_eq__qt_height_dd_2000px_sm_ background-color_dd_#a08080_sm__qt_&gt_sm_&lt_sm_/div&gt_sm_\n    &lt_sm_/div&gt_sm_\n    &lt_sm_br /&gt_sm_\n    The last roll amount_dd_ &lt_sm_span id_eq__qt_info_qt_ style_eq__qt_background-color_dd_#e0e0d0_sm__qt_&gt_sm_&lt_sm_/span&gt_sm_\n&lt_sm_/body&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-06-23T09:32:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30920-nra/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30920_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30920-nra/_qt_ rel_eq__qt__qt__gt_@NRA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this will help you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#EU1W1M_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#EU1W1M_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#08KEYA%2330_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#08KEYA#30_lt_/a_gt_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed6386864689_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?page_eq_53&amp_sm_tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_213732&amp_sm_embedComment_eq_213732&amp_sm_embedDo_eq_findComment#comment-213732_qt_ style_eq__qt_height_dd_292px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-06-23T14:38:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use the second approach and it works perfect!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]