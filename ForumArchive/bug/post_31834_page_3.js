[{"Owner":"Deltakosh","Date":"2017-09-14T17:07:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe change the shadows to get far more precision and now we can do self shadowing\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut now the shadows are really sensitive to how bones change the world matrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry I must be stupid but I cannot find the link to the playground\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-14T18:04:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_br /_gt_\n\tThe model is too big for the playground_co_ here is the text file to copy_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14848_qt__gt_pcode_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-14T18:07:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ shadows are really nice_co_ I just realized .frustumEdgeFalloff exists_co_ the only problem is with skeleton models._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-14T20:15:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk after analysing your bones they seem to produce matrices with a negative determinant.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot a big deal_co_ just set shadowGenerator.bias _eq_ -1_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-15T16:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for helping and checking!_lt_br /_gt__lt_br /_gt_\n\tSo the exporter is producing wrong matrices?_lt_br /_gt_\n\tOr something changed while importing the skeleton?_lt_br /_gt__lt_br /_gt_\n\tI made a minimal blender file with skeleton animation and exported it. (attached)_lt_br /_gt_\n\tI think there is nothing wrong with it. It cannot be simpler._lt_br /_gt__lt_br /_gt_\n\tHere is the playground_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#DCYRZX%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#DCYRZX#5_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo_co_ I can set the bias to -1 and the shadows are working in the playground_co_ but it_t_s not a solution in my game._lt_br /_gt_\n\tI cannot set the bias to -1 everywhere_co_ it just not works_co_ everything is dark then (even the lit sides of the walls)_co_ I have to use a value like 0.00002.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m stuck with this _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/bias-1.jpg.2af90dc1a42f0f9b0339257bf15a0b75.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14865_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/bias-1.thumb.jpg.9707822eb7f5047b2d8d05246b2161bc.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bias-1.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14864_qt__gt_wiggle.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-15T20:55:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is something wrong in the matrices because if I manually fix them it works_dd_ (see line#31)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DCYRZX%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DCYRZX#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the code used to try to clean the indices_dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.geometry.ts#L1003_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.geometry.ts#L1003_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-16T18:41:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou were right_co_ the wrong matrix weights caused the shadow problems. If sum of weights is not 1.0_co_ the influencer matrix in the end will be bad._lt_br /_gt__lt_br /_gt_\n\tI have re-written this cleaning function_co_ it just distorted the weights. (I think_co_ i really tried to understand...)_lt_br /_gt__lt_br /_gt_\n\tThis new code normalizes the weights so the sum will be 1.0_co_ no matter if it was less then 1.0 or more._lt_br /_gt_\n\tThe result looks good with all meshes I tried - the only thing left is_co_ part of my goblin mesh has zero on _lt_strong_gt_all _lt_/strong_gt_weights. so no influence I think. That part of the mesh still looks bad and inverse_co_ and I don_t_t know how to correct it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        private static _CleanMatricesWeights(matricesWeights_dd_ number[])_dd_ void {\n            if (!SceneLoader.CleanBoneMatrixWeights) {\n                return_sm_\n            }\n            let size _eq_ matricesWeights.length_sm_\n            for (var i _eq_ 0_sm_ i &lt_sm_ size_sm_ i +_eq_ 4) {\n                let weight _eq_ 0_sm_\n                for (var j _eq_ 0_sm_ j &lt_sm_ 4_sm_ j++) {\n                    weight +_eq_ matricesWeights[i + j]_sm_\n                }\n                if (weight&gt_sm_0.0) {\n                    let mweight _eq_ 1.0/weight_sm_\n                    for (var j _eq_ 0_sm_ j &lt_sm_ 4_sm_ j++) {\n                        matricesWeights[i + j] *_eq_ mweight_sm_\n                    }\n                }\n            }\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadow-part.jpg.cabf0972790925e40d4e91163c98485f.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14877_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadow-part.thumb.jpg.d73f780c25e15ff4c22bb0c7fbcbbe6e.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shadow-part.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadow-z.jpg.a265036661f1af9a4e6575151e42fd2a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14878_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadow-z.thumb.jpg.760243a83a18afe733474d444d12f86d.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shadow-z.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-18T15:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe real problem is the one you are mentioning. When all weights are 0. The resulting code will obviously be wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an idea_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bone matrices will contain an unchanged matrix at index bones.length. So perhaps the idea could be to also update matrices indices and just point to this identity matrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it make sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-20T15:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes that would be perfect._lt_br /_gt_\n\tZero influence is _qt_legit_qt_ in meshes In my opinion_co_ if I make a flag with a flagpole and weight-paint only the flag to move etc._lt_br /_gt__lt_br /_gt_\n\tOne more thing when for example the only weight (of only one bone) is low like 0.1_lt_br /_gt_\n\tThat means only a little infuence._lt_br /_gt_\n\tMaybe then the weights sould be_lt_br /_gt_\n\t0.1 the minimally influencing bone_lt_br /_gt_\n\t0.9 the _qt_identity bone_qt__lt_br /_gt__lt_br /_gt_\n\tit can happen with weight paint like my model_co_ so maybe my normalization of weight (if sum is under 1.0) is not correct!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-20T17:07:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCorrect. Do you want to try to update the function that cleans the matrices?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-22T18:43:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNow it_t_s working perfectly!_lt_br /_gt_\n\tWith every mesh I tried._lt_br /_gt_\n\tI had to move the function into babylon.sceneLoader.ts_co_ because the skeletons are not ready when parsing the geometry._lt_br /_gt__lt_br /_gt_\n\tHere is the diff_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BitOfGold/Babylon.js/commit/e0e8a24e9bbdb0d8c4528441f4b82b8b2bee03e7_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BitOfGold/Babylon.js/commit/e0e8a24e9bbdb0d8c4528441f4b82b8b2bee03e7_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI don_t_t know how to send a PR from this because there are many other changes in my fork/master._lt_br /_gt_\n\tI think I cannot do that without making another github user and another fork?_lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadowaok.jpg.ac2d8042e39f99c899ff2adee7d68dcf.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14954_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/shadowaok.thumb.jpg.68332c4785cd1debbb4247aa8f10aef1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shadowaok.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-22T19:57:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is cool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically you can fork bjs again_co_ apply this change and do the PR _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-09-23T09:39:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPR sent!_lt_br /_gt_\n\t(I could not fork another copy from the same repo from github_co_ maybe with some command line git I don_t_t know. But I_t_m now using another github account)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2017-12-11T03:32:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Is your PR in? _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I find that I still need to do _qt_shadowGenerator.bias_eq_-0.3_sm__qt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-12-11T10:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16886-satguru/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16886_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16886-satguru/_qt_ rel_eq__qt__qt__gt_@satguru_lt_/a_gt_ yes_co_ no problem with my models now._lt_br /_gt_\n\tMaybe it_t_s another_co_ different error._lt_br /_gt_\n\tNegative scale can look similar bad with shadows._lt_br /_gt__lt_br /_gt_\n\tA very similar bad transparent/distorted look was with (when using PBR material)_co_ the setting of alphaMode (I had to set it 0)\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#002451_sm_color_dd_#ffffff_sm_font-size_dd_16px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_mo_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_material_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_subMaterials_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_]._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_specularColor_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffeead_sm__qt__gt_C3_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.4_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.4_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.4_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_mo_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_material_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_subMaterials_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_]._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_alphaMode_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_mo_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_material_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_subMaterials_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_]._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_specularColor_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffeead_sm__qt__gt_C3_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.12_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.12_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0.12_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_mo_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_material_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_subMaterials_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_]._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_alphaMode_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]