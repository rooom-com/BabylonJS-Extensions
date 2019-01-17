[{"Owner":"JCPalmer","Date":"2015-11-17T15:33:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If Positions_co_ Normals_co_ etc can now be Float32Arrays_co_ VertexData.merge() fails.  This is because receiving mesh_t_s array does not have a push function.  This is one of the only differences between typed arrays and Javascript arrays_dd_  typed arrays are of fixed size at the time of construction._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think a merge that will always work is one that_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_computes the new size of the combination_co__lt_/li_gt__lt_li_gt_instances a new array of the final size_lt_/li_gt__lt_li_gt_references receiving array by index_lt_/li_gt__lt_/ul_gt__lt_p_gt_Think we should be creating a new method like_co_ _mergeElement_co_ that does this and returns the new array which should replace the old one.  The current structure of Merge() is quite long_co_  adding this extra stuff_co_ would increase that.  having a sub method might actually have less code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I double checked for references to push().  They are contained to the canned geometry / ribbon methods_co_ so it looks like this is the only instance of this issue.  I have so many unfinished things that I cannot address this myself right now.  Wanted to bring it up_co_ so anyone else who encountered it would know it was a known issue._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-17T16:13:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s an interesting issue. _lt_/p_gt__lt_p_gt_I find your suggestion to be the best - return a new vertex data object that can be assigned to a new our existing geometry. Unless someone else jumps in I_t_ll try finding the time later to correct this._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-17T16:22:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree with this! If no one can do it_co_ I_t_ll do it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-11-17T18:23:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is a candidate for the new method.  Functionality should be the same.  Please review_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        private _mergeElement(source _dd_ number[] | Float32Array_co_ other _dd_ number[] | Float32Array) _dd_ number[] | Float32Array{            if (!other) return source_sm_            if (!source) return other_sm_                        var len _eq_ other.length + source.length_sm_            var ret _eq_ (source instanceof Float32Array) ? new Float32Array(len) _dd_ new Array&lt_sm_number&gt_sm_(len)_sm_            var z _eq_ 0_sm_            for (var i _eq_ 0_co_ len _eq_ source.length_sm_ i &lt_sm_ len_sm_ i++){                ret[z++] _eq_ source[i]_sm_            }            for (var i _eq_ 0_co_ len _eq_ other.length_sm_ i &lt_sm_ len_sm_ i++){                ret[z++] _eq_ other[i]_sm_            }            return ret_sm_                    }_lt_/pre_gt__lt_p_gt_I have a test using Float32Array already to go once this in in._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-17T19:20:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_green light for me!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-11-17T21:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I changed merge()_co_ compiled &amp_sm_ tested.  GitHub will not allow me to merge.  Here is the other part_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        public merge(other_dd_ VertexData)_dd_ void {            if (other.indices) {                if (!this.indices) {                    this.indices _eq_ []_sm_                }                var offset _eq_ this.positions ? this.positions.length / 3 _dd_ 0_sm_                for (var index _eq_ 0_sm_ index &lt_sm_ other.indices.length_sm_ index++) {                    this.indices.push(other.indices[index] + offset)_sm_                }            }            this.positions _eq_ this._mergeElement(this.positions_co_ other.positions)_sm_            this.normals   _eq_ this._mergeElement(this.normals  _co_ other.normals  )_sm_            this.uvs       _eq_ this._mergeElement(this.uvs      _co_ other.uvs      )_sm_            this.uvs2      _eq_ this._mergeElement(this.uvs2     _co_ other.uvs2     )_sm_            this.uvs3      _eq_ this._mergeElement(this.uvs3     _co_ other.uvs3     )_sm_            this.uvs4      _eq_ this._mergeElement(this.uvs4     _co_ other.uvs4     )_sm_            this.uvs5      _eq_ this._mergeElement(this.uvs5     _co_ other.uvs5     )_sm_            this.uvs6      _eq_ this._mergeElement(this.uvs6     _co_ other.uvs6     )_sm_            this.colors    _eq_ this._mergeElement(this.colors   _co_ other.colors   )_sm_            this.matricesIndices      _eq_ this._mergeElement(this.matricesIndices     _co_ other.matricesIndices     )_sm_            this.matricesWeights      _eq_ this._mergeElement(this.matricesWeights     _co_ other.matricesWeights     )_sm_            this.matricesIndicesExtra _eq_ this._mergeElement(this.matricesIndicesExtra_co_ other.matricesIndicesExtra)_sm_            this.matricesWeightsExtra _eq_ this._mergeElement(this.matricesWeightsExtra_co_ other.matricesWeightsExtra)_sm_        }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-17T21:23:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_typed arrays have a set method (_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set_lt_/a_gt_) _co_ so maybe something like this_dd_ _lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt__lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(source instanceof Float32Array) {   var ret _eq_ new Float32Array(len)_sm_   res.set(source)_sm_   res.set(other)_sm_   return res_sm_} else {   return source.concat(other)}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-11-17T21:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have not used set_co_ or concat for that matter.  Using commands should written in a compile language_co_ should be faster than looping in an interpreter.  Think you need to specify an offset for the 2nd set_co_ though_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Time to re-clone my local repo is just not available right now.  I am pretty sure no one has even figured out the option that gets them in trouble even exists.  Should not be a high priority to fix.  They could trigger it using cpu skinning_co_ but who is likely to merge once rendering has started_co_ and is also cpu skinning?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-06T17:19:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m baaaaaaaaack (well almost_co_ gulp not on my new re-cloned repo yet).  I have made the changes shown above to Merge.  For _mergeElement()_co_ I did some of the stuff Raanan brought up_co_ here_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        private _mergeElement(source _dd_ number[] | Float32Array_co_ other _dd_ number[] | Float32Array) _dd_ number[] | Float32Array{            if (!other ) return source_sm_            if (!source) return other_sm_                        var len _eq_ other.length + source.length_sm_            var isSrcTypedArray _eq_ source instanceof Float32Array_sm_            var isOthTypedArray _eq_ other  instanceof Float32Array_sm_                        // use non-loop method when the source is Float32Array            if(isSrcTypedArray) {               var ret32 _eq_ new Float32Array(len)_sm_               ret32.set(source)_sm_               ret32.set(other_co_ source.length)_sm_               return ret_sm_                            }else{                 var ret _eq_ []_sm_                ret.concat(&lt_sm_number[]&gt_sm_ source)_sm_                // can only use non-loop_co_ concat_co_ method when other is also number[]                 if (!isOthTypedArray) {                    return ret.concat(&lt_sm_number[]&gt_sm_ other)_sm_                                    } else {                    for (var i _eq_ 0_co_ len _eq_ other.length_sm_ i &lt_sm_ len_sm_ i++){                        ret.push(other[i])_sm_                    }                    return ret_sm_                }            }             }_lt_/pre_gt__lt_p_gt_When the source is already Float32Array_co_ it is no problem for set() if other is either Float32Array or number[].  The same is not true for number.concat().  Other must also be number[]._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ the original code created new arrays.  I thought a new array should also be created no matter what.  I am thinking a bunch of clones might be being merged_co_ and not sure what would happen.  Not a problem for Float32Array_co_ since a new array must be made.  Raanan_t_s code for number[] seemed too aggressive writing without creating a new array._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also changed the new serialize() method.  It did not have the matrice elements to do influencers &gt_sm_ 4.  Also reminds me_co_ might not Mesh.parse() create Float32Arrays right off the bat?  No looping is required_co_ just new Float32Array([1_co_2_co_3_co_4]).  The next version of tower of Babel generates code like this._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-06T17:26:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually_co_ I changed Mesh.merge() to handle clones_co_ so I should know know what happens_co_ but its Sunday.  I do not like to make important decisions on Sunday._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]