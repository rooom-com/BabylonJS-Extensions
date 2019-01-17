[{"Owner":"cx20","Date":"2017-06-20T14:40:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried the glTF 2.0 sample with some glTF 2.0 Loader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/cx20/gltf-test/tree/2.0#more-complex-models_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/cx20/gltf-test/tree/2.0#more-complex-models_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ Babylon.js does not seem to be able to display the skinning animation model of glTF 2.0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelow is the error contents displayed on the console when loading the RiggedSimple.gltf model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cdn.rawgit.com/cx20/gltf-test/99c7752dfbca68f7f8e1b33960ac8f158d6e37b2/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cdn.rawgit.com/cx20/gltf-test/99c7752dfbca68f7f8e1b33960ac8f158d6e37b2/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.glTFFileLoader.js_dd_2516\nUncaught TypeError_dd_ getNextOutputValue is not a function\n    at LINEAR (babylon.glTFFileLoader.js_dd_2516)\n    at loadAnimation (babylon.glTFFileLoader.js_dd_2531)\n    at loadAnimations (babylon.glTFFileLoader.js_dd_2579)\n    at postLoad (babylon.glTFFileLoader.js_dd_3133)\n    at babylon.glTFFileLoader.js_dd_3466\n    at babylon.glTFFileLoader.js_dd_3516\n    at checkSuccess (babylon.glTFFileLoader.js_dd_3207)\n    at babylon.glTFFileLoader.js_dd_3216\n    at Function.GLTFLoader.LoadCommonMaterialPropertiesAsync (babylon.glTFFileLoader.js_dd_3284)\n    at Function.GLTFLoader.LoadCoreMaterialAsync (babylon.glTFFileLoader.js_dd_3214)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think that the model of skinning animation of glTF 1.1 was able to be displayed_co_ so it would be nice to be able to support glTF 2.0 display as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_gltf_20170620.png.8eff617a65d721770ffeac0afad8c6d0.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13475_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_gltf_20170620.thumb.png.112a1faf7eadc1a7480255779e4f0ce7.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylonjs_gltf_20170620.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-20T15:10:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt should be good today or tomorrow _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ We have it ready! \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cx20","Date":"2017-06-24T02:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_ _lt_/span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt_ style_eq__qt_color_dd_#ffffff_sm__qt__gt_@Deltakosh_lt_/a_gt_ Thank you for supporting skinning animation!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI confirmed that it works except models of WalkingLady and BrainStem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee _dd_ _lt_a href_eq__qt_https_dd_//github.com/cx20/gltf-test/tree/2.0#more-complex-models_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/cx20/gltf-test/tree/2.0#more-complex-models_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWalkingLady does not display even currectly with other glTF loaders_co_ there is a possibility of a problem with the model (or converter).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRelated _dd_ _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Sample-Models/issues/83_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF-Sample-Models/issues/83_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that BrainStem is WIP because _qt_Not implemented_qt_ error is given.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cdn.rawgit.com/cx20/gltf-test/0ece75c19338a1e699e7c2e80d115bd76eb2df4d/examples/babylonjs/index.html?model_eq_BrainStem&amp_sm_scale_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cdn.rawgit.com/cx20/gltf-test/0ece75c19338a1e699e7c2e80d115bd76eb2df4d/examples/babylonjs/index.html?model_eq_BrainStem&amp_sm_scale_eq_1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.glTFFileLoader.js_dd_2618 \nUncaught Error_dd_ Not implemented\n    at GLTFLoader._updateBone (babylon.glTFFileLoader.js_dd_2618)\n    at babylon.glTFFileLoader.js_dd_2609\n    at GLTFLoader._traverseNode (babylon.glTFFileLoader.js_dd_2861)\n    at babylon.glTFFileLoader.js_dd_2609\n    at babylon.glTFFileLoader.js_dd_3063\n    at Observer.callback (babylon.glTFFileLoader.js_dd_3016)\n    at Observable.notifyObservers (babylon.max.js_dd_5052)\n    at babylon.glTFFileLoader.js_dd_3021\n    at XMLHttpRequest.request.onreadystatechange (babylon.max.js_dd_5586)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_gltf_20170624.png.2650a08c755207836f710504689c40cb.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13542_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_gltf_20170624.thumb.png.e79f73534119f771ad6d8903b131776a.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylonjs_gltf_20170624.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2017-06-24T22:59:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t@cx20 Thanks for the report. I_t_m working on the _qt_Not Implemented_qt_ error.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2017-06-24T23:30:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2379_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2379_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat should fix it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cx20","Date":"2017-06-25T06:16:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t@bghgary Thank you for fixing. I will try it when Nightly build version is made.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-26T16:58:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNightly posted _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cx20","Date":"2017-06-26T17:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI confirmed that the BrainStem model is displayed with the glTF 2.0 loader of Babylon.js. It looks good _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cdn.rawgit.com/cx20/gltf-test/428f1f702dcc1baaff20f71a1bc0665cf0cf10f4/examples/babylonjs/index.html?model_eq_BrainStem&amp_sm_scale_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cdn.rawgit.com/cx20/gltf-test/428f1f702dcc1baaff20f71a1bc0665cf0cf10f4/examples/babylonjs/index.html?model_eq_BrainStem&amp_sm_scale_eq_1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_BrainStem_gltf2_20170627.png.4780a22d48fff6b69e391c260df39aa7.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13593_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/babylonjs_BrainStem_gltf2_20170627.png.4780a22d48fff6b69e391c260df39aa7.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylonjs_BrainStem_gltf2_20170627.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]