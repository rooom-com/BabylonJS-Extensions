[{"Owner":"agmcleod","Date":"2017-11-14T18:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have my own local copy of the shadow material_co_ as I can_t_t seem to pull it from the built version of babylon. I pull in BabylonJS via NPM and put it together using webpack. I import the local copy of the shadow only material_co_ and it hoists itself onto BABYLON. I did a diff against the one here_dd_ _lt_span_gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/materialsLibrary/babylon.shadowOnlyMaterial.js. There are no changes since originally pulling it._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason I ask is because since updating from 3.0.7 to the 3.1.0-beta3_co_ in order to fix another bug in firefox 56 on windows_co_ I_t_ve noticed that the particles and shadows are not rendering over top of the shadow only material for me anymore in Chrome &amp_sm_ Safari. Weirdly the particles work in firefox 38_co_ but the shadows still do not render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have babylon in my package.json. The webpack config is pretty standard on using the babel-loader_co_ no special considerations for babylonjs._t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code I use to create the ground_co_ using the shadow only material_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    const ground _eq_ BABYLON.Mesh.CreateGround(_t_ground1_t__co_ 10_co_ 16_co_ 2_co_ scene)\n    ground.position.x _eq_ 0\n    ground.position.y _eq_ 0\n    ground.position.z _eq_ 9\n    ground.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(ground_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0_co_ restitution_dd_ 0.6 }_co_ scene)\n    ground.receiveShadows _eq_ true\n\n    let groundMat\n    if (this.showTableMaterials) {\n      groundMat _eq_ new BABYLON.StandardMaterial(_t_groundMat_t__co_ scene)\n      groundMat.diffuseColor _eq_ new BABYLON.Color3(0.3294117647_co_ 0.631372549_co_ 0.3647058824)\n    } else {\n      groundMat _eq_ new BABYLON.ShadowOnlyMaterial(_t_shadowOnly_t__co_ scene)\n    }\n    ground.material _eq_ groundMat_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe shadow &amp_sm_ light setup_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    // This creates a light_co_ aiming down toward the table from the left\n    this.light _eq_ new BABYLON.DirectionalLight(_t_light1_t__co_ new BABYLON.Vector3(0_co_ -10_co_ 1)_co_ scene)\n    this.light.specular _eq_ BABYLON.Color3.White()\n    // Adjust light source to make more distinctive shadows\n    this.light.direction _eq_ new BABYLON.Vector3(0_co_ -3_co_ 2)\n\n    this.shadowGenerator _eq_ new BABYLON.ShadowGenerator(1024_co_ this.light)\n    this.shadowGenerator.useBlurExponentialShadowMap _eq_ true\n    this.shadowGenerator.useKernelBlur _eq_ true\n    this.shadowGenerator.blurKernel _eq_ MAX_SHADOW_KERNEL_BLUR\n    this.shadowGenerator.setDarkness(0.4)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen the mesh &amp_sm_ material for the dice_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_   _lt_span_gt_const_lt_/span_gt_ die _eq_ BABYLON.Mesh.CreateBox(`dice${dieNumber}`_co_ DICE_SIZE_co_ scene)\n    _lt_span_gt_this_lt_/span_gt_.setDiePosition(die_co_ dieNumber)\n\n    die.material _eq_ _lt_span_gt_this_lt_/span_gt_.diceMultiMat\n\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_5_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_2_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_12_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_3_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_18_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_24_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n    die.subMeshes.push(_lt_span_gt_new_lt_/span_gt_ BABYLON.SubMesh(_lt_span_gt_1_lt_/span_gt__co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_4_lt_/span_gt__co_ _lt_span_gt_30_lt_/span_gt__co_ _lt_span_gt_6_lt_/span_gt__co_ die))\n\n    _lt_span_gt_this_lt_/span_gt_.shadowGenerator.getShadowMap().renderList.push(die)_lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5) url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_) repeat scroll 0% 0%_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if i set the ground to use teh shadow only material in this test sandbox i have_co_ set the css body background to blue. This is how it looks_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYoull see no shadows under the dice_co_ and the fire only appears over the cubes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15663_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/badfire.gif.b37d85240196fba5c333d6bf82c2685c.gif_qt_ alt_eq__qt_badfire.gif.b37d85240196fba5c333d6bf82c2685c.gif_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe same setup in firefox_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15664_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/goodfire.gif.b9c7acd648a9fa4873fc0bc576506427.gif_qt_ alt_eq__qt_goodfire.gif.b9c7acd648a9fa4873fc0bc576506427.gif_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T19:04:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUnfortunately without a repro in the Playground I can barely help you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T19:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t(I noticed that you did not set  position for your light which is mandatory for shadows as it defines the viewpoint for the shadow map)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-14T20:03:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh good call_co_ didn_t_t realize that was a requirement with directional light. Done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll see if I can get a playground together to reproduce.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-15T01:11:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot quite there_co_ but interestingly enough_co_ the particles do get cut off_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#A8DRKJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#A8DRKJ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i change the clear color on my local example to use (0_co_ 0_co_ 0_co_ 0.1)_co_ a slightly opaque background_co_ i can see the particles again. Shadows still no go.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-15T19:47:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tStill unable to repro. I see the particles.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-16T02:52:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah I_t_m not sure what_t_s going on. Would it be helpful to share my code? It wouldn_t_t be a runnable example_co_ as it_t_s using other pieces of state.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-17T19:48:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBut do you repro using the PG that you linked?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]