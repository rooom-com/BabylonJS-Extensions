[{"Owner":"MackeyK24","Date":"2016-10-19T22:21:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIF ITS NOT ALREADY IN BABYLON.JS (and i just don_t_t see it)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan we embed vertex and fragment programs in the .babylon file on the _t_materal_t_ object of the material customType_eq__qt_BABYLON.ShaderMaterial_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\t{\n\t\t\t_qt_customType_qt_ _dd_ _qt_BABYLON.ShaderMaterial_qt__co_\n\t\t\t_qt_name_qt_ _dd_ _qt_Items_qt__co_\n\t\t\t_qt_id_qt_ _dd_ _qt_dadbe3ae-445f-4fe4-b83f-000b27b2b8d4_qt__co_\n\t\t\t_qt_backFaceCulling_qt_ _dd_ true_co_\n\t\t\t_qt_wireframe_qt_ _dd_ false_co_\n\t\t\t_qt_alpha_qt_ _dd_ 1_co_\n\t\t\t_qt_shaderPath_qt_ _dd_ _qt_Items_qt__co_\n\t\t\t_qt_options_qt_ _dd_ {\n\t\t\t\t_qt_attributes_qt_ _dd_ [\n\t\t\t\t\t_qt_position_qt__co_\n\t\t\t\t\t_qt_uv_qt_\n\t\t\t\t]_co_\n\t\t\t\t_qt_uniforms_qt_ _dd_ [\n\t\t\t\t\t_qt_worldViewProjection_qt_\n\t\t\t\t]_co_\n\t\t\t\t_qt_needAlphaBlending_qt_ _dd_ false_co_\n\t\t\t\t_qt_needAlphaTesting_qt_ _dd_ false_co_\n\t\t\t\t_qt_samplers_qt_ _dd_ []_co_\n\t\t\t\t_qt_defines_qt_ _dd_ []\n\t\t\t}_co_\n\t\t\t_qt_textures_qt_ _dd_ {}_co_\n\t\t\t_qt_floats_qt_ _dd_ {}_co_\n\t\t\t_qt_floatArrays_qt_ _dd_ {}_co_\n\t\t\t_qt_colors3_qt_ _dd_ {}_co_\n\t\t\t_qt_colors4_qt_ _dd_ {}_co_\n\t\t\t_qt_vectors2_qt_ _dd_ {}_co_\n\t\t\t_qt_vectors3_qt_ _dd_ {}_co_\n\t\t\t_qt_vectors4_qt_ _dd_ {}_co_\n\t\t\t_qt_matrices_qt_ _dd_ {}_co_\n\t\t\t_qt_matrices2x2_qt_ _dd_ {}_co_\n\t\t\t_qt_matrices3x3_qt_ _dd_ {}\n\t\t}_co_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCan we add somewhere in a _t_base64_t_ encoded string for the shader programs... Something like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_vertexBase64_qt_ _dd_ _qt_*** BASE64 ENCODED VERTEX PROGRAM ***_qt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_fragmentBase64_qt_ _dd_ _qt_*** BASE64 ENCODED FRAGMENT PROGRAM ***_qt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen in the client side Material parser... If we got base64 parsdedMaterial data with our programs already there... no need to make TWO separate server trips to get our shader programs... plus the shader programs are then cached when storing .babylon files in indexedDB. Also it can easily work with sandbox and just drag that single .babylon file to sandbox (ONCE sandbox get the PR fix to use BABYLON.ShaderMaterial vertexBase64 and fragmentBase64) then folks custom shaders will work on the sandbox... Right now if you have BABYLON.ShaderMaterial defined in your .babylon file (and don_t_t use a qualified path) the server will never find or use them (unless you know where those files end up after posting to server and are available ... still would hard code sandbox path to shader program in your .babylon file.).. For some reason if don_t_t use path and just name... it looks in _t_/src/Sharder/myShader.vertex.fx_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways I_t_m going to play with the github Material.Parse stuff to use material.vertexBase64 and fragmentBase63 IF PRESENT... After i had them to the ShaderMaterial class...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope you guys like this idea ... That last one to get metadata added seems like a tough sell... I hope you consider this...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-20T15:48:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt was a tough sell but you made it _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not opposed at all with this one either!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-22T18:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHet David... I submitted the PR for vertexElement and fragmentElement to support Base64 encoded strings... Pretty small and clean and works great.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-24T16:46:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmerged\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]