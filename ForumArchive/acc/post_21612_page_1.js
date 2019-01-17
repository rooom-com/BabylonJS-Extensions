[{"Owner":"iodizer","Date":"2016-03-31T18:17:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_   function pauseFn() {\n                   \n                    if ( typeof pauseFn.tog _eq__eq_ _t_undefined_t_ ) {\n                        \n                        pauseFn.tog _eq_ true_sm_\n                        \n                    }\n\n                    if(pauseFn.tog_eq__eq_true){\n                            meshes _eq_ scene.getActiveMeshes()_sm_\n                            for(i in meshes.data){\n                                scene.getAnimatableByTarget(meshes.data[i]).pause()_sm_\n                            }\n                            pauseFn.tog_eq_false_sm_\n                        }\n                    \n                    else{\n                        meshes _eq_ scene.getActiveMeshes()_sm_\n                        for(i in meshes.data){\n                            scene.getAnimatableByTarget(meshes.data[i]).restart()_sm_\n                        } \n                        pauseFn.tog_eq_true_sm_\n                    }\n                    \n                      \n                }\n                   _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iodizer","Date":"2016-03-31T18:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI tried the code above but it does not work -- is there a standard way to pause all animations?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-31T18:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tscene does have an Animatables property_co_ which would eliminate the need for mesh for loop.  That is flawed.  What if a camera is animating?\n_lt_/p_gt_\n\n_lt_p_gt_\n\treturn statement is pointless.  Reason for your problem is unclear.  Add console logging to check if flow control is what you expect.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iodizer","Date":"2016-03-31T21:58:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the feedback and help JC_co_ I removed the slop from my example\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will look into the Animatibles object which I didn_t_t notice\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iodizer","Date":"2016-03-31T22:46:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve tried this now but no success.  scene.Animatibles is undefined ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    function pauseFn() {\n              \n                    if ( typeof pauseFn.tog _eq__eq_ _t_undefined_t_ ) {\n                        pauseFn.tog _eq_ true_sm_ \n                    }\n                    \n                    if(pauseFn.tog_eq__eq_true){\n                            for(i in scene.Animatables){\n                                scene.Animatables[i].pause()_sm_\n                            }\n                            pauseFn.tog_eq_false_sm_\n                        }\n                    \n                    else{\n                        for(i in scene.Animatables){\n                                scene.Animatables[i].restart()_sm_\n                        }\n                        pauseFn.tog_eq_true_sm_\n                    }\n                    \n                }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-04-01T09:34:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s not animatible_co_ it_t_s animatAble.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iodizer","Date":"2016-04-01T14:08:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\toh my yes it is -- works now! thank you! I have fixed the spelling error above.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]