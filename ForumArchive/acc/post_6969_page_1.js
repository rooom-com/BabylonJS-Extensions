[{"Owner":"Ron","Date":"2014-06-05T16:43:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How to apply a texture on a mesh created by the following function _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function drawTriangle(scene) {var triangle _eq_ new BABYLON.Mesh(_t_triangle_t__co_ scene)_sm_var positions _eq_ [0_co_ 1_co_ 0_co_-1_co_ -1_co_ 0_co_1_co_ -1_co_ 0]_sm_var normals _eq_ [1_co_ 1_co_ 1_co_1_co_ 1_co_ 1_co_1_co_ 1_co_ 1]_sm_var indices _eq_ []_sm_indices.push(0)_sm_indices.push(1)_sm_indices.push(2)_sm_triangle.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind)_sm_triangle.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind)_sm_triangle.setIndices(indices)_sm_return triangle_sm_}_lt_/pre_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd_monospace_co_ serif_sm_font-size_dd_1em_sm__qt__gt_ Have tried the usual textures in the tutorial_co_ but they don_t_t work on this kind of objects_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-05T17:28:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have to add uv (texture coordinates). Somethign like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function drawTriangle(scene) {var triangle _eq_ new BABYLON.Mesh(_t_triangle_t__co_ scene)_sm_var positions _eq_ [0_co_ 1_co_ 0_co_-1_co_ -1_co_ 0_co_1_co_ -1_co_ 0]_sm_var normals _eq_ [1_co_ 1_co_ 1_co_1_co_ 1_co_ 1_co_1_co_ 1_co_ 1]_sm_var uv _eq_ [0_co_ 0_co_1_co_ 0_co_1_co_ 1]var indices _eq_ []_sm_indices.push(0)_sm_indices.push(1)_sm_indices.push(2)_sm_triangle.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind)_sm_triangle.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind)_sm_triangle.setVerticesData(uv _co_ BABYLON.VertexBuffer.UVKind)_sm_triangle.setIndices(indices)_sm_return triangle_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]