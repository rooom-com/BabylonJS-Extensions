[{"Owner":"gwenael","Date":"2014-04-23T10:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was wondering if a test was not missing in this function. Here_t_s its current implementation_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.VertexBuffer.prototype.update _eq_ function (data) {        this._engine.updateDynamicVertexBuffer(this._buffer_co_ data)_sm_        this._data _eq_ data_sm_                if (this._kind _eq__eq__eq_ BABYLON.VertexBuffer.PositionKind &amp_sm_&amp_sm_ this._mesh) {            this._mesh._resetPointsArrayCache()_sm_        }    }_sm__lt_/pre_gt__lt_p_gt_and here_t_s how I think it should be_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.VertexBuffer.prototype.update _eq_ function (data) {        if(!this._updatable) {            return_sm_        }        this._engine.updateDynamicVertexBuffer(this._buffer_co_ data)_sm_        this._data _eq_ data_sm_                if (this._kind _eq__eq__eq_ BABYLON.VertexBuffer.PositionKind &amp_sm_&amp_sm_ this._mesh) {            this._mesh._resetPointsArrayCache()_sm_        }    }_sm__lt_/pre_gt__lt_p_gt_Or a new parameter _t_force_t_ could be used as is_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.VertexBuffer.prototype.update _eq_ function (data_co_ force) {        if(!this._updatable &amp_sm_&amp_sm_ !force) {            return_sm_        }        this._engine.updateDynamicVertexBuffer(this._buffer_co_ data)_sm_        this._data _eq_ data_sm_                if (this._kind _eq__eq__eq_ BABYLON.VertexBuffer.PositionKind &amp_sm_&amp_sm_ this._mesh) {            this._mesh._resetPointsArrayCache()_sm_        }    }_sm__lt_/pre_gt__lt_p_gt_In this case_co_ should _t__updatable_t_ be set to true when force equals true?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T16:10:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re right here is the new version_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public update(data_dd_ number[])_dd_ void {            if (!this._updatable) {                console.log(_qt_You cannot update a non-updatable vertex buffer_qt_)_sm_                return_sm_            }            this._engine.updateDynamicVertexBuffer(this._buffer_co_ data)_sm_            this._data _eq_ data_sm_            if (this._kind _eq__eq__eq_ BABYLON.VertexBuffer.PositionKind &amp_sm_&amp_sm_ this._mesh) {                this._mesh._resetPointsArrayCache()_sm_            }        }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:17:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok. I will check if it_t_s what I did in my code for geometry instances. Coming soon..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T16:19:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Please wait for the typescript version before _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:22:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No problem. I_t_ll send you a link to my fork/branch first so you could check the code and see if I need to rename stuff_co_ do stuff differently and so on and then_co_ once typescript version is ready I_t_ll do the pull-request._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:39:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW_co_ geometry instances would be really useful for a LOD system_co_ did you start working on it? I could already modify my code to foresee its integration._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:40:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Or even start working on the LOD system._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T16:41:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not started so feel free (a lot of typescript is already done btw)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]