[{"Owner":"NRA","Date":"2018-11-17T14:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am developing a system with BJS in which I want to implement an action in which the user click to select an rectangled object and click a button to create another object on top of it. In sequence it could change the position of the second object_co_ but just following the center line of the first one and respecting its border limits_co_ that is_co_ keeping then aligned each other. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike the _qt_Slider Physics Joint_qt_ works_co_ but without using physics. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomebody has an idea to do this in a simple way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-17T15:50:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi NRA.  Here_t_s a basic box-stacker... using an actionManager on the bottom box.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#14Z1CI%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#14Z1CI#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt uses boundingBox info... to know where to stack the next stacked box.  Keep clicking the bottom box_co_ instead of a button.  I was too lazy to make a GUI-based  button.   _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_  Saturday morning cartoons make me be lazy... wearing my pajamas until after-noon.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_How about a little random Y rotation on each stacked box... _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#14Z1CI%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#14Z1CI#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ that_t_s a good testing playground to start-with.  Maybe this is enough help_co_ or maybe you could describe your wishes... in more detail.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235187_qt_ data-ipsquote-contentid_eq__qt_41336_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542465930_qt_ data-ipsquote-userid_eq__qt_30920_qt_ data-ipsquote-username_eq__qt_NRA_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ NRA said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIn sequence it could change the position of the second object_co_ but just following the center line of the first one and respecting its border limits_co_ that is_co_ keeping the_lt_strong_gt_m_lt_/strong_gt_ aligned each other. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDoes that mean... you would like to _qt_mouse-drag_qt_ the newly-stacked box... upward and downward along Y axis?  I think that can be done_co_ too.  There are some BRAND NEW pointer-drag tools laying around here somewhere... might be fun to try-out... if I can find them again.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-17T17:06:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks your attention! But I needed to take a trip and only tomorrow I will see this again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-18T22:54:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am back!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sure that you sample is a good starting point_co_ but may main issue is to move the newly created object on top of the starter object_co_ in fact an rectangular one not a box_co_ following an imaginary line which divides it on middle. And to complicated a little more the bottom rectangle could be rotated and when we will move the top object_co_ it need to follow the new center line. Is like the second object being child but with the constraint on its movement to the center line of the first one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you understand?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T10:12:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi NRA... thx for the details.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   I was just building a new playground with some tests_co_ and I accidentally killed it.  (with control - left-cursor keys - removed all changes to unsaved playground without any warnings... like an instant 50 control-z_t_s? - errrrf!)  (anger grumble anger -&gt_sm_ playground app)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tANYway_co_ I_t_ll tell you things...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou now know how to get half-heights for base box and stackbox... to stack things properly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter proper stacking... set stackbox.parent _eq_ box_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter that_co_ you can still rotate and slide stackbox ONLY... like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstackbox.translate(BABYLON.Axis.Y_co_ 2.5_co_ BABYLON.Space.LOCAL)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstackbox.rotate(BABYLON.Axis.Y_co_ 1.57_co_ BABYLON.Space.LOCAL)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also rotate the base box... in any way you wish_co_ and stackbox will still slide up/down base box Y axis_co_ and rotate-around it_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also experiment using WORLD instead of LOCAL... in your stackbox translate and rotate calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI THINK this is the solution.  Try some experiments.  Maybe I will try a better playground... later today_co_ after my anger for my lost playground... mellows-out.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_strong_gt_Update_dd__lt_/strong_gt_  I re-made the lost playground_dd_  _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#14Z1CI%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#14Z1CI#4_lt_/a_gt__lt_span_gt_  Click basebox to create a stackbox.  Stackbox is parented to basebox.  You can see that the stackbox (rectangular)... is slowly sliding-up the basebox Y axis... and spinning around it_co_ too.  Meantime_co_ basebox is wobbling-around with orbital rotation._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Are we getting closer to success?  I hope so._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-19T13:57:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ I see your point_co_ but my need is like you can see in the attached image_co_ in what I represent the base object and the stacked one_co_ which I move according to the center line of the base and beside its limits_co_ and I need to maintain this option even if the base is rotated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Box_Move.jpg.c5924e5070d1a97291599e5dd8442d7a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_21078_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Box_Move.jpg.c5924e5070d1a97291599e5dd8442d7a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Box_Move.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T14:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m confused_co_ but thx for the drawing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen base rotates (around Y only?)... do you want all the stacked boxes to stay in same place_co_ with same axes orientations?  (no parenting)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe base can rotate UNDER the stacked boxes_co_ but not _qt_carry them with it_qt_?  errr.  ??  (sorry)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-19T14:59:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that when the object is parented with the base if its_co_ the base_co_ is rotated (y axis) the object stay with it! What I need is to move it constraint on top of the base_co_ even if the base has been rotated! In the image when the base is like in horizontal I could move the box from left to right_co_ constraint to base limits and according to its center line. When I rotate the base_co_ the object could be moved from top to bottom_co_ constraint to base limits and according to its center line. That what I try to explain in image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Excuse my english\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T15:51:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh_co_ ok_co_ thx.  Yeah_co_ I think you need to keep all stacked boxes... always parented to base.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think there is an _qt_automatic_qt_ way to stop stacked box when it moves-to end of base.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter stackbox is created and parented to base_co_ then use ALL translate commands to put it where it needs to go... instantly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr if slow-translating (maybe using +/- buttons)_co_ or mouse-drag-translating_co_ move a little_co_ check if at-limit.  Again_co_ move a little_co_ check if at-limit.  YOU must keep checking to make sure the stacked box hasn_t_t reached end of base.  Mouse dragging is always done in little steps_co_ repeated fast.  Keyboad keys can go into repeat mode_co_ if held.  GUI buttons have methods of held-down_co_ too... all doing little tiny steps over and over.  (You know all this already_co_ I bet).  _lt_span_gt__lt_span_gt_(sorry)_lt_/span_gt__lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile moving_co_ if (stackbox.position.x + stackHalfWidth _eq_&gt_sm_ basebox.bbox.extends.x) then... DON_t_T MOVE ANY MORE.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (pseudo code - not real)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStacked box will be constrained in ANY way you tell it to be so.  Tell it to translate +x in LOCAL space... then it will only move along X axis.  Same with +/- Z axis.  You tell it what to do_co_ and continuously test to see if limits are reached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you want a more-automated way to do it_co_ but_co_ I can_t_t think of any.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you mouse-drag-moving the stack boxes along axes?  Or keyboard arrow keys?  GUI/HTML button clicks?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou also said that you sometimes need to rotate stacked boxes?  Will that ALWAYS be rotation around _lt_u_gt_THEIR_lt_/u_gt_ (local) Y axis?  Will rotations always be 90-degree steps?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have SO many questions_co_ huh?  Sorry.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T16:08:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBy the way_co_ IF you are already mouse-dragging stacked boxes...  and IF_co_ after rotating base 90 degrees (change for horizontal to vertical)... dragging gets _qt_stupid_qt_ and acts wrongly...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... then we have a DIFFERENT issue.  We would need to build an updater for the drag system... that acts correctly in EITHER vertical or horizontal _qt_mode_qt_.  (I think)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-19T20:09:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I do something better with some of yours concepts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FGXKFS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FGXKFS_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut It already has some issues! I know than its related to get the sphere/points position_co_ I tried to get _qt_absolutePosition_qt_ but do not solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-19T20:41:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found an way look at _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FGXKFS%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FGXKFS#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T20:56:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLookin_t_ good_co_ NRA.  Nice work!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s a demo of linesMesh path-updating...   _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1EBCJY%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1EBCJY#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(for redrawing lines)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I modified your demo... returned to parenting stackbox to base.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemoved path stuff... and used direct mesh moving in the keypress thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FGXKFS%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FGXKFS#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWeird.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Works_co_ though._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Are you noticing that keypress repeats go slower and slower... the longer the key is held?  I am.  I think that might be a bug in keyboard observer.  Not sure._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Good progress_co_ NRA_co_ you_t_re doing super!_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NRA","Date":"2018-11-20T00:51:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way is simplest and will work like I need!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreat to have your help! Thank you so much!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]