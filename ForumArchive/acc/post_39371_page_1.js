[{"Owner":"Hersir","Date":"2018-08-10T09:55:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twould like to propose some possible improvements for AssetsManager _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tthere are multiple tasks that can be added to manager_co_ but I think would be nice to have general `_lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_addTask(task_dd_ AbstractAssetTask)_lt_/span_gt_`  so custom tasks could be created and added to manager if needed.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tright now response in onSuccess  can be just string or ArrayBuffer but I think it would be great to get back request object so there would be more control what to do on success.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tminor but I didnt found way to add mime types to loader_co_ but that can be fixed on server side as well_co_ so server always serves files with proper mime type\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI came across this when was trying to implement svg file loader task to load svg as document.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWas quick to implement task but could not add it to mananger and it needed request.responseXML so had no acces to it_lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now used text file tasks and parse string using DomParser.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo what other think about this ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-10T11:52:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt sounds like a goood idea_co_ feel free to create a PR _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_About getting back the request_co_ I am all for it as long as it does not break back compat of the public APIs._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]