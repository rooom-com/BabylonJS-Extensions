[{"Owner":"JCPalmer","Date":"2014-07-22T02:13:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tower of Babel is now in GitHub.  To summarize_co_ it is a rewrite of the first Babylon exporter for Blender.  In addition to internal modularization_co_ its main improvements are_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_It produces a .babylon_co_ (.js &amp_sm_ .ts inline code modules)_co_ and a log file._lt_/li_gt__lt_li_gt_It extracts &amp_sm_ optimizes Shape Keys in groups_co_ based on their name.  Changes to use this coming later._lt_/li_gt__lt_li_gt_Camera rotation &amp_sm_ light position animation has been added._lt_/li_gt__lt_li_gt_Camera LockedTarget is now transferred from Blender._lt_/li_gt__lt_/ul_gt__lt_p_gt_It should be noted that all output formats (.babylon_co_ .js_co_ &amp_sm_ .ts) are independent of each other.  Decide on the one you wish to use and  delete / ignore the others._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The .babylon Is roughly 8 to 11 % smaller than the old one.  This is achieved by reducing the size of numbers like -0.0000 to 0._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The log file records the process performed_co_ as well as displays up to 12 warning messages.  Should the python script error_co_ the stack trace describing the problem will also be contained in the log file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The .js is a standalone source file.  You would reference it with a script tag just as you would babylon.js.  To load the entire scene_co_ add this to your .html_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt__lt_strong_gt_blender_file_name.initScene(scene)_sm__lt_/strong_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Meshes without a parent are implemented as sub-classes of either Babylon.Mesh or Babylon.Automaton.  If you wish to load them separately like SceneLoader. importMesh does_co_ you would instance them._lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt__lt_strong_gt_var inst _eq_ new blender_file_name.meshName(scene)_sm__lt_/strong_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The .ts would be added into your code base_co_ to converted to a .js as part of your build process._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The sub-classes may also be sub-classed themselves coming from either the .js or .ts.  How varies based on which file. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It should be noted that the sharing of vertices or _qt_Babylon Instances_qt_ IS NOT supported for .js or .ts_co_ due to the way _qt_Babylon Instances_qt_ is currently implemented._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_gryff has supplied many blend files for testing.  I have grouped them along with the outputs_co_ &amp_sm_ multiple versions of .html files to load them into a directory structure.  It was meant to be placed in GitHub_co_ so future changes can be easily tested to avoid regressions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now I have included them as a .zip.  I am very far from a Git expert_co_ so I will leave it to others to know whether to put it in as separate files or 1 .zip.  I have more for Automaton that I have left out right now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please test this with your .blend files._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2263_qt__gt_blender-test.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-22T03:12:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Tower of Babel is now in GitHub._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I saw that on github while browsing to see what updates there maybe - said it was added 2 hours ago._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fascinating Jeff. Great to see your progress. Will spend time looking at what is in the zip file and how it is used._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_gryff has supplied many blend files for testing_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think _qt__lt_em_gt_many_lt_/em_gt__qt_ might be a little bit of an overstatement. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ Jeff_co_ what Blender version did you work with - 2.69?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-22T14:19:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_gryff_co__lt_/p_gt__lt_p_gt_Yes_co_ 2.69.  BTW_co_ both the Blender and the TOB versions used at run time are the first line of the log file.  I am not aware that the version of Blender that the .blend was save in is actually accessible.  But if it could be found in the python API_co_ it should also be listed in line 1._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the blender-test zip file_co_ there is a blender-in directory for all the .blend files.  I changed the names of the blend files to reflect the main thing being tested.  Could probably use a read me to describe more than can be put in a file name_co_ also with the directions written here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is also a lib directory to hold the babylon.js.  This probably should not be populated in Github.  Also_co_ probably made a mistake by not changing the name of the .js.  It should probably be _qt_babylon.js_qt_.  This way all the .html_t_s in the root directory_co_ never need to ever be edited as time goes on._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The TOB-out directory holds the .babylon_co_ .js_co_ .ts_co_ &amp_sm_ .log of every .blend exported.  It is in a separate directory so that every thing can easily be deleted.  This ensures that you are not actually running with stuff exported previously.  It has the stuff I generated_co_ but it to should probably be saved in Github empty._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally_co_ the root dir of the zip_co_ has a xxx_JSON.html &amp_sm_ xxx_inline.html for each .blend.  Again_co_ they are probably not perfect yet.  They should be changed to load _qt_./lib/babylon.js_qt_ not _qt_./lib/babylon.1.13-beta.js_qt_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have fun!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-22T15:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Yes_co_ 2.69  ....  I am not aware that the version of Blender that the .blend was save in is actually accessible._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nothing to worry about Jeff. I have 16 different versions of Blender installed on my computer - all the way back to 2.49. And before you ask_co_ it is because some addon scripts_co_ that  I have used_co_ break in more advanced versions of Blender. For example the script I used to create the _qt_lipsync_qt_ demo only works in Blender 2.60/2.61_co_ and some scripts I have used to create meshes for Second Life only work in early 2.5x versions of  Blender._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A big change in Blender came with the 2.63 version with the introduction of Ngons (faces with more than 4 vertices). Open a .blend file created in Blender 2.66_co_ in the 2.61 version - you get no faces. It can be worked around - but is a pain._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The reason I asked - is so that I am on the same page as you. But of course I can also test your export script on a number of different Blender versions _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-22T15:16:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On the shape key front_co_  _qt_lipsync_qt_ in a babylon context DOES NOT need a blender script.  That part of the process would be now done in javascript.  Assuming you could get past 2.63_co_ the mesh &amp_sm_ keys is all you need in the Blender side._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More on that later._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-22T16:45:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s awesome_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you just add a folder on the github with your .py and a readme.md with this documentation?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-22T18:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_It extracts &amp_sm_ optimizes Shape Keys in groups_co_ based on their name.  Changes to use this coming later._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ eagerly awaiting this _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-22T18:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_I am in the process of switching from Netbeans to Eclipse_co_ which HAS to be better at Typescript.  It also has a github helper plug-in in addition to git support.  I need all the help I can get in this area  (This is different from CSV).  I am not using Netbeans projects for this_co_ just editing files_co_ so I can not rely on it to commit directories_co_ and move them upstream._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now here is another zip for gryff_co_ with changes above made &amp_sm_ readme added.  Hopefully_co_ I_t_ll be able to do actual Babylon builds &amp_sm_ move up changes to the repository with ease after the conversion._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the contents of the readme.md_dd__lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This directory is for regression testing of the Tower of Babel.  It is assumed that the add-in has already been installed &amp_sm_ enabled in Blender._lt_br_gt__lt_br_gt_Place the version of babylon.js you wish to use in the _t_lib_t_ directory.  The earliest supported is 1.13.  All of the html files reference it as _t_babylon.js_t_ to avoid having to edit them.  FYI_co_ the htmls write a message into the browser console_co_ listing the version_co_ in-case you forget._lt_br_gt__lt_br_gt_The _t_blender-in_t_ directory holds each of the .blend files.  The name reflects the main thing being tested.  Refer to the table below_co_ for a more complete list of features being tested._lt_br_gt__lt_br_gt_The _t_TOB-out_t_ directory is where you should direct the .babylon/.js/.ts/.log output from Blender.  This directory is isolated_co_ so that everything can easily be deleted.  This ensures that you are not actually running with stuff exported previously.  This directory is empty in Github_co_ so each .html will not run unless_co_ you open Blender with the respective .blend &amp_sm_ export to this directory._lt_br_gt__lt_br_gt_Speaking of htmls_co_  the this directory has a xxx_JSON.html &amp_sm_ xxx_inline.html for each .blend._lt_br_gt__lt_br_gt_Here is the list of tests &amp_sm_ secondary features they test_dd__lt_br_gt__lt_br_gt_.blend       secondary features_lt_br_gt_------------ ------------------------------------------------------------------------------_lt_br_gt_armature     skeletal animation_lt_br_gt_automaton   Camera LockedTarget_co_ Automaton_t_s embedded Action Manager_co_ Single ShapeKeyGroup_lt_br_gt_camera_anim  Multi-materials_co_ textures_lt_br_gt_mesh_parent  Shadows_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2276_qt__gt_blender-test.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-22T18:24:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeff_co_ the readme.md mentions_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_automaton    Camera LockedTarget_co_ Automaton_t_s embedded Action Manager_co_ Single ShapeKeyGroup_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I don_t_t see anything else about _qt_automaton_qt_ in the new zip files._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-22T18:29:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ I am still working on that one_co_ mostly the html part that does the animation.  Also it generates code for Babylon.Automaton &amp_sm_ Babylon.ShapeKeyGroup_co_ which is just going to blow up till it is released_co_  I pulled it from the zip_co_ just like the first one.  Also I just noticed that shadows are not working.  That is why TOB is version 0.99_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-25T15:55:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am now on Eclipse_co_ mostly.  My hand converted Automaton .js files to .ts files have some problems_co_ as well as the .ts files generated out of the exporter.  At least I can now see the problems_co_ but that is not what this current message is about._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wanted to push up what was the zip file of this topic.  As said before_co_ certain directories should not be populated in GitHub_co_ lib &amp_sm_ TOB-out.  I have edited .gitignore with this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_# files inside parts of blender-test directory structureExporters/Blender/blender-test/lib/babylon.js # not *.* incase doing a sub-class testExporters/Blender/blender-test/TOB-out/*.*_lt_/pre_gt__lt_p_gt_The problem is that then there are no files to commit_co_ and Eclipse does not give an empty directory to commit_co_ so it can be pushed.  Any suggestions.  I tried removing the entry for lib_co_ &amp_sm_ deleted babylon.js_co_ but still nothing shows up to commit / push._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-26T20:57:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gryff_co__lt_/p_gt__lt_p_gt_On the mesh that I did_co_ mesh_parent.blend_co_ I cannot get shadows to work in either the old exporter_co_ or TOB(.babylon &amp_sm_ .js).  I achecked that the shadow generator is being populated with a render list of _t_Gus_t__co_ and the ground is set to receive shadows._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have put the light in extreme positions.  Where it is now_co_ I get this dark triangle in the middle of the ground_co_ but it is not even on the correct side of Gus._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think it my Blender skills that are in question_co_ since all three produce the exact same result.  Could you look / fix this model_co_ such that it gives a shadow_co_ at least with old exporter?  Just steal the html from zip file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2309_qt__gt_mesh_parent.blend.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-27T06:43:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_I have put the light in extreme positions.  Where it is now_co_ I get this dark triangle in the middle of the ground_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ will look at the file and see what I can do. I have a feeling though it might have to do with BJS lighting in general and not the BJS version. (Something I think I have run into before -_qt__lt_em_gt_the dark triangle_lt_/em_gt__qt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More later as I have a couple of issues with a couple of clients that need to be resolved_lt_/p_gt__lt_p_gt_._lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-27T15:41:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!  No hurry_co_ I have my hands fully trying to convert what I have so far on Automatons to Typescript.  Actually_co_ the conversion I thing is done_co_ but this Gulp thing throws pages of errors_co_ when I try to build a babylon.js._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-29T15:20:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t think it is your Blender skills Jeff - it seems to be an issue with the Directional light functionality._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example 1 - Gingerbred man with a directional light in front and close to him_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/shadows/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Shadow1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_Result_dd_ black area on ground._lt_/u_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example 2 - Gingerbred man with directional light in front and far away _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/shadows/index1.html_qt_ rel_eq__qt_external nofollow_qt__gt_Shadow2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_Result_dd_ No black area on ground_lt_/u_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example 3 - A row of blocks with a directional light in front and close to them_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/shadows/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_Shadow3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Result_dd_  the same black area on the ground - but also note not all the shadows of the blocks and the shadows are angled._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To me it looks like an issue with the Directional light functionality of BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-29T15:53:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeff_co_ here is a pic showing the way the Directional Light works in the Unity game engine. Note that even though the light is positioned in the center of the scene_co_ the cylinder_co_  which you might think of as behind that light_co_ is illuminated. In Unity the position of the light does not matter - only the direction (rotation)  of the light._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In BJS it looks like an area behind the light is not illuminated_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-7026-0-53511000-1406649062.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-7026-0-53511000-1406649062.jpg_qt_ data-fileid_eq__qt_2332_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-53511000-1406649062.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-29T16:11:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ thanks. I_t_ll just leave what I got for now_co_ since it is a valid test.  Moving this stuff up in the near future_co_ along with some TOB fixes (mostly in the .ts output area_co_ &amp_sm_ ability to specify a directory for texture file location). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I finally got back to shape keys in the last day or so.  Fully typescript converted now &amp_sm_ finishing directly in typescript.  Working on movement &amp_sm_ rotation coordinated with deformation _co_ for things like_dd_ walking_co_ stair climbing_co_ flying.   I wrote it yesterday using Actions_co_ called directly using action.execute().  I am not happy with it_co_ though I never actually ran it.  Not so much with the actions_co_ but things need to be so specific in terms of position coordinates_co_ that they are both difficult to know_co_ and worthless to re-use._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Mulling the concept of _t_forward_t__co_ and a method in Automaton like moveForward(relativeVec3).  Would need to capture any changes to rotation_co_ to maintain knowing where forward is (override computeWorldMatrix() probably).  If this works_co_ then is no reason this concept cannot be implemented back at the BABYLON.Mesh class_co_ instead of BABYLON.Automaton._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-30T00:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gryff is right_co_ light position is used to compute the shadow map so everything behind the light is in the dark (And sounds like this is logical no?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For illumination (not shadowing so) only the direction is used_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-08-04T23:08:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_49130_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_8028_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1406679404_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_light position is used to compute the shadow map so everything behind the light is in the dark (And sounds like this is logical no?)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is logical if we consider some kind of _qt_spot light_qt_ or _qt_area light_qt__co_ but very often in 3D modelers and game engines (for instance Unity 3D_co_ also Quest3D if I remember well)_co_ _qt_directionnal light_qt_ is considered as _qt_the sun_qt_. That means you can only put one in your scene_co_ and_co_ as gryff said_co_ anywhere you position it the engine always considers it as an _qt_infinite distance light_qt__co_ far away from the scene_co_ only the direction is then used to compute lightning and shadowing (and not its position_co_ nor any kind of distance attenuation)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-08-04T23:18:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW_co_ JCPalmer_co_ these days you_t_re constantly talking about _qt_BABYLON.Automaton_qt_..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I find this nowhere !_lt_/p_gt__lt_p_gt_I search the whole Babylon project (up to date from Github_co_ 5 minutes ago) and no occurence of automaton at all..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is this mysterious object_co_ where can I find it_co_ where can I find info about it ?_lt_/p_gt__lt_p_gt_Argl please my curiosity can_t_t stand it any longer _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-06T01:09:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@JCPalmer_dd_ To you think you can add the work you did with camera and lights animation to the blender exporter?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-08-06T21:50:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_49768_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_8028_qt_ data-ipsquote-username_eq__qt_Vousk-prod._qt_ data-cite_eq__qt_Vousk-prod._qt_ data-ipsquote-timestamp_eq__qt_1407194307_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_BTW_co_ JCPalmer_co_ these days you_t_re constantly talking about _qt_BABYLON.Automaton_qt_..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I find this nowhere !_lt_/p_gt__lt_p_gt_I search the whole Babylon project (up to date from Github_co_ 5 minutes ago) and no occurence of automaton at all..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is this mysterious object_co_ where can I find it_co_ where can I find info about it ?_lt_/p_gt__lt_p_gt_Argl please my curiosity can_t_t stand it any longer _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have not yet put in my pull request_co_ as you probably figured out.  I am not built for many releases &amp_sm_ this project is not merely animation transferred from Blender.  Only shape-keys end states are.  You produce the animation through an API on the JS side.  It has been changing as I have been testing it out and seeing how it needs to be improved._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am not really thrilled about making either non-compatible changes or living with mistakes.  I want to have the API set.  I have code to compute the normals which is not working_co_ and other things never tested_co_ but will make API my top priority_co_ so I can put out something._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]