var K = Object.defineProperty;
var ee = (n, e, t) => e in n ? K(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var a = (n, e, t) => (ee(n, typeof e != "symbol" ? e + "" : e, t), t);
import { Vector3 as k, Quaternion as te, Matrix as b } from "@babylonjs/core/Maths/math";
import { Camera as ie } from "@babylonjs/core/Cameras/camera";
import { RenderingGroup as z } from "@babylonjs/core/Rendering/renderingGroup";
import { Logger as E } from "@babylonjs/core/Misc/logger";
import { Mesh as ne } from "@babylonjs/core/Meshes/mesh";
import { CreatePlaneVertexData as se } from "@babylonjs/core/Meshes/Builders/planeBuilder";
import { StandardMaterial as re } from "@babylonjs/core/Materials/standardMaterial";
const V = 500;
let A = null;
const ae = 10;
let U = null;
const _ = 100;
function* oe(n, e) {
  let t = 0, i = null;
  for (; ; ) {
    const s = Date.now();
    if (s - t >= e) {
      t = s;
      let r = n == null ? void 0 : n.getEngine().getRenderingCanvasClientRect();
      r ? i = r : (i && E.Warn(
        "Canvas rect became null.  Returning last known value"
      ), E.Warn("Failed to get canvas rect."));
    }
    yield i;
  }
}
const le = (n) => (G(n), new Promise((e) => {
  let t = 0;
  const i = setInterval(() => {
    const s = A.next();
    s.value !== null ? (clearInterval(i), e(s.value)) : (t++, t >= ae && (clearInterval(i), E.Warn(
      "Exceeded maximum number of attempts trying to get canvas rect"
    ), e(null)));
  }, V);
})), q = (n) => (G(n), A.next().value), G = (n) => {
  (!A || n !== U) && (A = oe(
    n,
    V
  ), U = n);
}, ce = "Failed to update html mesh renderer position due to failure to get canvas rect.  HtmlMesh instances may not render correctly", L = { width: 0, height: 0 }, B = (n) => (e, t) => {
  const i = e.getMesh(), s = t.getMesh(), r = i.isHtmlMesh, o = s.isHtmlMesh;
  return r ? o && i.absolutePosition.z <= s.absolutePosition.z ? 1 : -1 : o ? 1 : n(e, t);
};
class Ie {
  /**
   * Contruct an instance of HtmlMeshRenderer
   * @param {Scene} scene
   * @param options object containing the following optional properties:
   * @param {string} options.containerId an optional id of the parent element for the elements that will be rendered as `HtmlMesh` instances.
   * @param {RenderOrderFunction} options.defaultOpaqueRenderOrder an optional render order function that conforms to the interface of the `opaqueSortCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the opaque sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.
   * @param {RenderOrderFunction} options.defaultAlphaTestRenderOrder an optional render order function that conforms to the interface of the `alphaTestSortCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the alpha test sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.
   * @param {RenderOrderFunction} options.defaultTransparentRenderOrder an optional render order function that conforms to the interface of the `transparentCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the transparent sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.
   * @returns
   */
  constructor(e, {
    parentContainerId: t = null,
    _containerId: i = "css-container",
    enableOverlayRender: s = !0,
    defaultOpaqueRenderOrder: r = z.PainterSortCompare,
    defaultAlphaTestRenderOrder: o = z.PainterSortCompare,
    defaultTransparentRenderOrder: l = z.defaultTransparentSortCompare
  } = {}) {
    a(this, "_maskRootNode");
    a(this, "_containerId");
    a(this, "_inSceneElements");
    a(this, "_overlayElements");
    a(this, "_cache", {
      cameraData: { fov: 0, position: new k(), style: "" },
      htmlMeshData: /* @__PURE__ */ new WeakMap()
    });
    a(this, "_width", 0);
    a(this, "_height", 0);
    a(this, "_widthHalf", 0);
    a(this, "_heightHalf", 0);
    a(this, "_cameraViewMatrix");
    a(this, "_projectionMatrix");
    a(this, "_cameraWorldMatrix");
    a(this, "_viewport");
    // Create some refs to avoid creating new objects every frame
    a(this, "_temp", {
      scaleTransform: new k(),
      rotationTransform: new te(),
      positionTransform: new k(),
      objectMatrix: b.Identity(),
      cameraWorldMatrix: b.Identity(),
      cameraRotationMatrix: b.Identity(),
      cameraWorldMatrixAsArray: new Array(16)
    });
    // Keep track of DPR so we can resize if DPR changes
    // Otherwise the DOM content will scale, but the mesh won't
    a(this, "_lastDevicePixelRatio", window.devicePixelRatio);
    // Keep track of camera matrix changes so we only update the
    // DOM element styles when necessary
    a(this, "_cameraMatrixUpdated", !0);
    // Keep track of position changes so we only update the DOM element
    // styles when necessary
    a(this, "_previousCanvasDocumentPosition", {
      top: 0,
      left: 0
    });
    a(this, "_renderObserver", null);
    a(this, "render", (e, t) => {
      var v, y, x, w, I, W;
      let i = !1;
      const s = e.useRightHandedSystem;
      this.updateContainerPositionIfNeeded(e), this._cameraMatrixUpdated && (this._cameraMatrixUpdated = !1, i = !0), (t.position.x !== this._cache.cameraData.position.x || t.position.y !== this._cache.cameraData.position.y || t.position.z !== this._cache.cameraData.position.z) && (this._cache.cameraData.position.copyFrom(t.position), i = !0), window.devicePixelRatio !== this._lastDevicePixelRatio && (this._lastDevicePixelRatio = window.devicePixelRatio, E.Log("In render - dpr changed: ", this._lastDevicePixelRatio), i = !0);
      const r = e.meshes.filter(
        (u) => u.isHtmlMesh && (i || u.requiresUpdate)
      );
      if (i = i || r.length > 0, !i)
        return;
      const l = t.getProjectionMatrix().m[5] * this._heightHalf;
      this._cache.cameraData.fov !== l && (t.mode == ie.PERSPECTIVE_CAMERA ? [
        (v = this._overlayElements) == null ? void 0 : v.domElement,
        (y = this._inSceneElements) == null ? void 0 : y.domElement
      ].forEach((u) => {
        u && (u.style.webkitPerspective = l + "px", u.style.perspective = l + "px");
      }) : [
        (x = this._overlayElements) == null ? void 0 : x.domElement,
        (w = this._inSceneElements) == null ? void 0 : w.domElement
      ].forEach((u) => {
        u && (u.style.webkitPerspective = "", u.style.perspective = "");
      }), this._cache.cameraData.fov = l), t.parent === null && t.computeWorldMatrix();
      const c = this._temp.cameraWorldMatrix;
      c.copyFrom(t.getWorldMatrix());
      const h = this._temp.cameraRotationMatrix;
      c.getRotationMatrix().transposeToRef(h);
      const d = this._temp.cameraWorldMatrixAsArray;
      c.copyToArray(d);
      const p = s ? 1 : -1;
      d[1] = h.m[1], d[2] = h.m[2] * p, d[4] = h.m[4] * p, d[6] = h.m[6] * p, d[8] = h.m[8] * p, d[9] = h.m[9] * p, b.FromArrayToRef(d, 0, c);
      const g = (
        // "translateZ(" +
        // fov +
        // "px)" +
        this.getCameraCSSMatrix(c)
      );
      this._cache.cameraData.style !== g && ([
        (I = this._inSceneElements) == null ? void 0 : I.cameraElement,
        (W = this._overlayElements) == null ? void 0 : W.cameraElement
      ].forEach((u) => {
        u && (u.style.webkitTransform = g, u.style.transform = g);
      }), this._cache.cameraData.style = g), r.forEach((u) => {
        this.renderHtmlMesh(u, s);
      });
    });
    a(this, "onCameraMatrixChanged", (e) => {
      this._cameraViewMatrix = e.getViewMatrix(), this._projectionMatrix = e.getProjectionMatrix(), this._cameraWorldMatrix = e.getWorldMatrix(), this._viewport = e.viewport, this._cameraMatrixUpdated = !0;
    });
    typeof document > "u" || (this._containerId = i, this.init(
      e,
      t,
      s,
      r,
      o,
      l
    ));
  }
  dispose() {
    var e, t;
    this._renderObserver && (this._renderObserver.remove(), this._renderObserver = null), (e = this._overlayElements) == null || e.container.remove(), this._overlayElements = null, (t = this._inSceneElements) == null || t.container.remove(), this._inSceneElements = null;
  }
  init(e, t, i, s, r, o) {
    if (typeof document > "u")
      return;
    let l = t ? document.getElementById(t) : document.body;
    l || (l = document.body);
    const c = `${this._containerId}_in_scene`;
    if (this._inSceneElements = this.createRenderLayerElements(c), l.insertBefore(
      this._inSceneElements.container,
      l.firstChild
    ), i) {
      const m = `${this._containerId}_overlay`;
      this._overlayElements = this.createRenderLayerElements(m);
      const S = +(e.getEngine().getRenderingCanvas().style.zIndex ?? "0") + 1;
      this._overlayElements.container.style.zIndex = `${S}`, this._overlayElements.container.style.pointerEvents = "none", l.insertBefore(
        this._overlayElements.container,
        l.firstChild
      );
    }
    const { width: h, height: d } = q(e) ?? L;
    this.setSize(h, d);
    const p = e.getEngine(), g = (() => {
      p.resize();
      const { width: m, height: S } = q(e) ?? L;
      this.setSize(m, S);
    }).bind(this);
    if ("ResizeObserver" in window) {
      const m = p.getRenderingCanvas();
      new ResizeObserver((Z) => {
        for (const J of Z)
          J.target === m && g();
      }).observe(m);
    } else
      window.addEventListener("resize", g);
    const v = this.onCameraMatrixChanged.bind(this);
    let y, x;
    const w = () => {
      const m = e.activeCamera;
      m && (y = m.onProjectionMatrixChangedObservable.add(
        v
      ), x = m.onViewMatrixChangedObservable.add(
        v
      ));
    };
    w(), e.onActiveCameraChanged.add(() => {
      var m, S;
      y && ((m = e.activeCamera) == null || m.onProjectionMatrixChangedObservable.remove(
        y
      )), x && ((S = e.activeCamera) == null || S.onViewMatrixChangedObservable.remove(
        x
      )), w();
    });
    const I = B(s), W = B(
      r
    ), u = B(
      o
    );
    e.setRenderingOrder(
      0,
      I,
      W,
      u
    ), this._renderObserver = e.onAfterRenderObservable.add(() => {
      this.render(e, e.activeCamera);
    });
  }
  createRenderLayerElements(e) {
    const t = document.getElementById(e);
    t && t.remove();
    const i = document.createElement("div");
    i.id = e, i.style.position = "absolute", i.style.width = "100%", i.style.height = "100%", i.style.zIndex = "-1";
    const s = document.createElement("div");
    s.style.overflow = "hidden";
    const r = document.createElement("div");
    return r.style.webkitTransformStyle = "preserve-3d", r.style.transformStyle = "preserve-3d", r.style.pointerEvents = "none", s.appendChild(r), i.appendChild(s), {
      container: i,
      domElement: s,
      cameraElement: r
    };
  }
  getSize() {
    return {
      width: this._width,
      height: this._height
    };
  }
  setSize(e, t) {
    this._width = e, this._height = t, this._widthHalf = this._width / 2, this._heightHalf = this._height / 2, [
      this._inSceneElements.domElement,
      this._overlayElements.domElement,
      this._inSceneElements.cameraElement,
      this._overlayElements.cameraElement
    ].forEach((s) => {
      s && (s.style.width = `${e}px`, s.style.height = `${t}px`);
    });
  }
  // prettier-ignore
  getCameraCSSMatrix(e) {
    const t = e.m;
    return `matrix3d(${this.epsilon(t[0])},${this.epsilon(-t[1])},${this.epsilon(t[2])},${this.epsilon(t[3])},${this.epsilon(t[4])},${this.epsilon(-t[5])},${this.epsilon(t[6])},${this.epsilon(t[7])},${this.epsilon(t[8])},${this.epsilon(-t[9])},${this.epsilon(t[10])},${this.epsilon(t[11])},${this.epsilon(t[12])},${this.epsilon(-t[13])},${this.epsilon(t[14])},${this.epsilon(t[15])})`;
  }
  // Convert a Babylon world matrix to a CSS matrix
  // This also handles conversion from BJS left handed coords
  // to CSS right handed coords
  // prettier-ignore
  getHtmlContentCSSMatrix(e, t) {
    const i = e.m, s = t ? -1 : 1;
    return `matrix3d(${this.epsilon(i[0])},${this.epsilon(i[1])},${this.epsilon(i[2] * -s)},${this.epsilon(i[3])},${this.epsilon(-i[4])},${this.epsilon(-i[5])},${this.epsilon(i[6] * s)},${this.epsilon(-i[7])},${this.epsilon(i[8] * -s)},${this.epsilon(i[9] * -s)},${this.epsilon(i[10])},${this.epsilon(i[11] * s)},${this.epsilon(i[12] * s)},${this.epsilon(i[13] * s)},${this.epsilon(i[14] * s)},${this.epsilon(i[15])})`;
  }
  getTransformationMatrix(e, t) {
    var $;
    if (this._cameraWorldMatrix || (this._cameraWorldMatrix = ($ = e.getScene().activeCamera) == null ? void 0 : $.getWorldMatrix()), !this._cameraWorldMatrix)
      return b.Identity();
    const i = e.getWorldMatrix();
    let s = 1, r = 1;
    e.sourceWidth && e.sourceHeight && (s = e.width / (e.sourceWidth / _), r = e.height / (e.sourceHeight / _));
    const o = this._temp.scaleTransform, l = this._temp.rotationTransform, c = this._temp.positionTransform, h = this._temp.objectMatrix;
    i.decompose(
      o,
      l,
      c
    ), o.x *= s, o.y *= r, b.ComposeToRef(
      o,
      l,
      c,
      h
    );
    const d = t ? -1 : 1, p = e.getAbsolutePosition();
    return h.setRowFromFloats(
      3,
      (-this._cameraWorldMatrix.m[12] + p.x) * _ * d,
      (-this._cameraWorldMatrix.m[13] + p.y) * _ * d,
      (this._cameraWorldMatrix.m[14] - p.z) * _,
      this._cameraWorldMatrix.m[15] * 1e-5 * _
    ), h.multiplyAtIndex(
      3,
      _
    ), h.multiplyAtIndex(
      7,
      _
    ), h.multiplyAtIndex(
      11,
      _
    ), h;
  }
  renderHtmlMesh(e, t) {
    var l, c;
    if (!e.element || !e.element.firstElementChild)
      return;
    let i = this._cache.htmlMeshData.get(e);
    i || (i = { style: "" }, this._cache.htmlMeshData.set(e, i));
    const s = e._isCanvasOverlay ? (l = this._overlayElements) == null ? void 0 : l.cameraElement : (c = this._inSceneElements) == null ? void 0 : c.cameraElement;
    e.element.parentNode !== s && s.appendChild(e.element), e.requiresUpdate && this.updateBaseScaleFactor(e);
    const r = this.getTransformationMatrix(
      e,
      t
    );
    let o = `translate(-50%, -50%) ${this.getHtmlContentCSSMatrix(
      r,
      t
    )}`;
    o += `${t ? "matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)" : ""}`, i.style !== o && (e.element.style.webkitTransform = o, e.element.style.transform = o), e.markAsUpdated();
  }
  updateBaseScaleFactor(e) {
    let t = this._width, i = this._height;
    const s = (e.width || 1) / (e.height || 1), r = t / i;
    s > r ? t = i * s : i = t / s, e.setContentSizePx(t, i);
  }
  async updateContainerPositionIfNeeded(e) {
    var l, c;
    const t = await le(e);
    if (!t) {
      E.Warn(ce);
      return;
    }
    const i = window.scrollY, s = window.scrollX, r = t.top + i, o = t.left + s;
    (this._previousCanvasDocumentPosition.top !== r || this._previousCanvasDocumentPosition.left !== o) && (this._previousCanvasDocumentPosition.top = r, this._previousCanvasDocumentPosition.left = o, [
      (l = this._inSceneElements) == null ? void 0 : l.container,
      (c = this._overlayElements) == null ? void 0 : c.container
    ].forEach((h) => {
      if (!h)
        return;
      const d = h.offsetParent, p = d.getBoundingClientRect(), $ = p.top + i, g = p.left + s, v = this.getAncestorMarginsAndPadding(d), y = window.getComputedStyle(document.body), x = parseInt(y.marginTop, 10), w = parseInt(y.marginLeft, 10);
      h.style.top = `${r - $ - v.marginTop + v.paddingTop + x}px`, h.style.left = `${o - g - v.marginLeft + v.paddingLeft + w}px`;
    }));
  }
  epsilon(e) {
    return Math.abs(e) < 1e-10 ? 0 : e;
  }
  // Get total margins and padding for an element, excluding the body and document margins
  getAncestorMarginsAndPadding(e) {
    let t = 0, i = 0, s = 0, r = 0;
    for (; e && e !== document.body && e !== document.documentElement; ) {
      const o = window.getComputedStyle(e);
      t += parseInt(o.marginTop, 10), i += parseInt(o.marginLeft, 10), s += parseInt(o.paddingTop, 10), r += parseInt(o.paddingLeft, 10), e = e.offsetParent;
    }
    return { marginTop: t, marginLeft: i, paddingTop: s, paddingLeft: r };
  }
}
let R = [];
const P = /* @__PURE__ */ new Map();
let O = [], f = null;
const he = () => f, de = (n, e, t) => {
  if (C(
    `In pointerEventsCapture.requestCapture - Pointer events capture requested for ${n}`
  ), fe(n)) {
    C(
      `In pointerEventsCapture.requestCapture - Capture request matched previous release request ${n}.  Cancelling capture request`
    );
    return;
  } else
    n !== f && ue(n, e, t);
  f || Y();
}, X = (n) => {
  C(
    `In pointerEventsCapture.requestRelease - Pointer events release requested for ${n}`
  ), !n || n === f ? Y() : me(n) ? P.delete(n) : (C(
    `In pointerEventsCapture.requestRelease - Received release request ${n} but no matching capture request was received`
  ), O.includes(n) || O.push(n));
}, pe = () => {
  X(f);
}, ue = (n, e, t) => {
  C(
    `In pointerEventsCapture.enqueueCaptureRequest - Enqueueing capture request for  ${n}`
  ), R.includes(n) || (R.push(n), P.set(n, { capture: e, release: t }));
}, me = (n) => {
  let e = !1;
  return R = R.filter((t) => t !== n ? !0 : (e = !0, C(
    `In pointerEventsCapture.cancelRequest - Canceling pointer events capture request ${n}`
  ), !1)), e;
}, fe = (n) => {
  let e = !1;
  return O = O.filter((t) => t !== n ? !0 : (e = !0, !1)), e;
}, Y = () => {
  const n = ye();
  C(
    `In pointerEventsCapture.transferPointerEventsOwnership - Transferrring pointer events from ${f} to ${n}`
  ), ve(), n && ge(n);
}, ve = () => {
  var n;
  C(
    `In pointerEventsCapture.doRelease - Releasing pointer events from ${f}`
  ), f && ((n = P.get(f)) == null || n.release(), P.delete(f), f = null);
}, ge = (n) => {
  var e;
  n && ((e = P.get(n)) == null || e.capture()), f = n, C(
    `In pointerEventsCapture.doCapture - Pointer events now captured by ${n}`
  );
}, ye = () => R.length > 0 ? R.shift() : null, C = (n) => {
  (typeof window > "u" || window["pointer-events-capture-debug"]) && console.log(
    `${performance.now()} - game.scene.pointerEvents - ${n} `,
    `currentOwner: ${f}`,
    `queue: ${R}`,
    `unmatched: ${O}`
  );
};
let M = null, T = 0;
const H = /* @__PURE__ */ new WeakMap(), N = (n) => {
  typeof document > "u" || (T === 0 && (document.addEventListener("pointermove", D), document.addEventListener("touchstart", D), M = M ?? n, E.Log(
    "PointerEventsCaptureBehavior: Starting observation of pointer move events."
  ), M.onDisposeObservable.add(Q)), T++);
}, Q = () => {
  document.removeEventListener("pointermove", D), document.removeEventListener("touchstart", D), M = null, E.Log(
    "PointerEventsCaptureBehavior: Stopping observation of pointer move events."
  ), T = 0;
}, F = () => {
  typeof document > "u" || M && (T--, T <= 0 && Q());
}, D = (n) => {
  if (!M)
    return;
  const e = q(M);
  if (!e)
    return;
  const { clientX: t, clientY: i } = "touches" in n ? n.touches[0] : n, s = t - e.left, r = i - e.top;
  let o;
  const l = M.pick(s, r, (d) => {
    const p = H.get(d);
    return d.isEnabled() && typeof p < "u" && p._captureOnPointerEnter;
  });
  let c;
  l.hit ? c = l.pickedMesh : c = null;
  const h = parseInt(he() || "");
  c && c.uniqueId === h || (h && (!c || c.uniqueId !== h) && pe(), c && (o = H.get(c), o.capturePointerEvents()));
};
class _e {
  constructor(e, t, { captureOnPointerEnter: i = !0 } = {}) {
    a(this, "name", "PointerEventsCaptureBehavior");
    a(this, "attachedMesh");
    a(this, "_captureOnPointerEnter");
    this.captureCallback = e, this.releaseCallback = t, this.attachedMesh = null, this._captureOnPointerEnter = i, typeof document > "u" && E.Warn(
      "Creating an instance of PointerEventsCaptureBehavior outside of a browser.  The behavior will not work."
    );
  }
  set captureOnPointerEnter(e) {
    this._captureOnPointerEnter !== e && (this._captureOnPointerEnter = e, this.attachedMesh && (this._captureOnPointerEnter ? N(this.attachedMesh.getScene()) : F()));
  }
  init() {
  }
  attach(e) {
    this.attachedMesh = e, H.set(e, this), this._captureOnPointerEnter && N(e.getScene());
  }
  detach() {
    this.attachedMesh && (H.delete(this.attachedMesh), this._captureOnPointerEnter && F(), this.attachedMesh = null);
  }
  dispose() {
    this.detach();
  }
  // Release pointer events
  releasePointerEvents() {
    this.attachedMesh && X(this.attachedMesh.uniqueId.toString());
  }
  // Capture pointer events
  capturePointerEvents() {
    this.attachedMesh && de(
      this.attachedMesh.uniqueId.toString(),
      this.captureCallback,
      this.releaseCallback
    );
  }
}
const Ee = {
  wrapElement(n) {
    const e = document.createElement("div");
    e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center";
    const t = document.createElement("div");
    return t.style.visibility = "hidden", t.appendChild(n), e.appendChild(t), e;
  },
  updateSize(n, e, t) {
    const i = n.firstElementChild;
    n.style.width = `${e}px`, n.style.height = `${t}px`;
    const [s, r] = [i.offsetWidth, i.offsetHeight], o = Math.min(e / s, t / r);
    i.style.transform = `scale(${o})`, i.style.visibility = "visible";
  }
}, Ce = {
  wrapElement(n) {
    const e = document.createElement("div");
    e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.overflow = "hidden";
    const t = document.createElement("div");
    return t.style.visibility = "hidden", t.appendChild(n), e.appendChild(t), e;
  },
  updateSize(n, e, t) {
    const i = n.firstElementChild;
    n.style.width = `${e}px`, n.style.height = `${t}px`;
    const [s, r] = [i.offsetWidth, i.offsetHeight], o = Math.max(e / s, t / r);
    i.style.transform = `scale(${o})`, i.style.visibility = "visible";
  }
}, xe = {
  wrapElement(n) {
    const e = document.createElement("div");
    e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center";
    const t = document.createElement("div");
    return t.style.visibility = "hidden", t.appendChild(n), e.appendChild(t), e;
  },
  updateSize(n, e, t) {
    const i = n.firstElementChild;
    n.style.width = `${e}px`, n.style.height = `${t}px`;
    const [s, r] = [i.offsetWidth, i.offsetHeight];
    i.style.transform = `scale(${e / s}, ${t / r})`, i.style.visibility = "visible";
  }
}, be = {
  wrapElement(n) {
    return n;
  },
  updateSize(n, e, t) {
    n && (n.style.width = `${e}px`, n.style.height = `${t}px`);
  }
}, j = {
  CONTAIN: Ee,
  COVER: Ce,
  STRETCH: xe,
  NONE: be
};
class We extends ne {
  /**
   * Contruct an instance of HtmlMesh
   * @param {Scene} scene
   * @param {string} id The id of the mesh.  Will be used as the id of the HTML element as well.
   * @param options object with optional parameters
   * @param {boolean} options.captureOnPointerEnter If true, then the mesh will capture pointer events when the pointer enters the mesh.  If false, then the mesh will capture pointer events when the pointer is over the mesh.  Default is true.
   * @param {boolean} options.isCanvasOverlay If true, the mesh would always appear on top of everything, Can achieve semi transparent effects, etc
   * @returns
   */
  constructor(t, i, { captureOnPointerEnter: s = !0, isCanvasOverlay: r = !1, fitStrategy: o = j.NONE } = {}) {
    super(i, t);
    a(this, "isHtmlMesh", !0);
    // Override the super class's _isEnabled property so we can control when the mesh
    // is enabled.  I.e., we don't want to render the mesh until there is content to show.
    a(this, "_enabled", !1);
    // The mesh is ready when content has been set and the content size has been set
    // The former is done by the user, the latter is done by the renderer.
    a(this, "_ready", !1);
    a(this, "_isCanvasOverlay", !1);
    a(this, "_requiresUpdate", !0);
    a(this, "_element");
    a(this, "_width");
    a(this, "_height");
    a(this, "_fillerElement");
    a(this, "_inverseScaleMatrix", null);
    a(this, "_captureOnPointerEnter", !0);
    a(this, "_pointerEventCaptureBehavior", null);
    a(this, "sourceWidth", null);
    a(this, "sourceHeight", null);
    a(this, "worldMatrixUpdateObserver");
    a(this, "_fitStrategy", j.NONE);
    if (typeof document > "u") {
      E.Warn(
        `Creating an instance of an HtmlMesh with id ${i} outside of a browser.  The mesh will not be visible.`
      );
      return;
    }
    this._fitStrategy = o, this._isCanvasOverlay = r, this.createMask(), this._element = this.createElement(), this.setEnabled(!0), this._captureOnPointerEnter = s, this._pointerEventCaptureBehavior = new _e(
      this.capturePointerEvents.bind(this),
      this.releasePointerEvents.bind(this),
      { captureOnPointerEnter: this._captureOnPointerEnter }
    ), this.addBehavior(this._pointerEventCaptureBehavior);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  /**
   * The HTML element that is being rendered as a mesh
   */
  get element() {
    return this._element;
  }
  /**
   * True if the mesh has been moved, rotated, or scaled since the last time this
   * property was read.  This property is reset to false after reading.
   */
  get requiresUpdate() {
    return this._requiresUpdate;
  }
  set captureOnPointerEnter(t) {
    this._captureOnPointerEnter = t, this._pointerEventCaptureBehavior && (this._pointerEventCaptureBehavior.captureOnPointerEnter = t);
  }
  dispose() {
    var t;
    super.dispose(), (t = this._element) == null || t.remove(), this._element = void 0, this._pointerEventCaptureBehavior && (this._pointerEventCaptureBehavior.dispose(), this._pointerEventCaptureBehavior = null);
  }
  markAsUpdated() {
    this._requiresUpdate = !1;
  }
  /**
   * Sets the content of the element to the specified content adjusting the mesh scale to match and making it visible.
   * If the the specified content is undefined, then it will make the mesh invisible.  In either case it will clear the
   * element content first.
   * @param {HTMLElement} element The element to render as a mesh
   * @param {number} width The width of the mesh in Babylon units
   * @param {number} height The height of the mesh in Babylon units
   */
  setContent(t, i, s) {
    this.setReady(!1), this.sourceWidth = null, this.sourceHeight = null, this._element && (this._width = i, this._height = s, this._requiresUpdate = !0, this.scaling.set(1, 1, -1), t && (this._element.appendChild(this._fitStrategy.wrapElement(t)), this.updateScaleIfNecessary()), this.sourceWidth && this.sourceHeight && this.setReady(!0));
  }
  // Overides BABYLON.Mesh.setEnabled
  setEnabled(t) {
    this._enabled = t, (!t || this._ready) && this.doSetEnabled(t);
  }
  setContentSizePx(t, i) {
    this.sourceWidth = t, this.sourceHeight = i, !(!this._element || !this._element.firstElementChild) && (this._fitStrategy.updateSize(this._element.firstElementChild, t, i), this.updateScaleIfNecessary(), this.width && this.height && this.setReady(!0));
  }
  setReady(t) {
    this._ready = t, t ? this.doSetEnabled(this._enabled) : this.doSetEnabled(!1);
  }
  doSetEnabled(t) {
    var i;
    this._element && (t && !this.worldMatrixUpdateObserver ? this.worldMatrixUpdateObserver = this.onAfterWorldMatrixUpdateObservable.add(() => {
      this._requiresUpdate = !0;
    }) : t || ((i = this.worldMatrixUpdateObserver) == null || i.remove(), this.worldMatrixUpdateObserver = null), this._element.style.display = t ? "" : "none", this.setElementZIndex(this.position.z * -1e4), super.setEnabled(t));
  }
  updateScaleIfNecessary() {
    this.scaling.set(1, 1, -1), this._inverseScaleMatrix && (this.bakeTransformIntoVertices(this._inverseScaleMatrix), this._inverseScaleMatrix = null);
    const t = this._width || 1, i = this._height || 1, s = b.Scaling(t, i, 1);
    this.bakeTransformIntoVertices(s), this._inverseScaleMatrix = new b(), s.invertToRef(this._inverseScaleMatrix);
  }
  createMask() {
    se({ width: 1, height: 1 }).applyToMesh(this);
    const i = this.getScene();
    this.checkCollisions = !0;
    const s = new re(`${this.id}-mat`, i);
    this._isCanvasOverlay || (s.backFaceCulling = !1, s.disableColorWrite = !0, s.disableLighting = !0), this.material = s, this.material.freeze();
  }
  setElementZIndex(t) {
    this._element && (this._element.style.zIndex = `${t}`);
  }
  /**
   * Callback used by the PointerEventsCaptureBehavior to capture pointer events
   */
  capturePointerEvents() {
    this._element && (this._element.style.pointerEvents = "auto", document.getElementsByTagName("body")[0].style.pointerEvents = "none");
  }
  /**
   * Callback used by the PointerEventsCaptureBehavior to release pointer events
   */
  releasePointerEvents() {
    this._element && (document.getElementsByTagName("body")[0].style.pointerEvents = "auto", this._element.style.pointerEvents = "none");
  }
  createElement() {
    if (typeof document > "u")
      return;
    const t = document.createElement("div");
    return t.id = this.id, t.style.backgroundColor = this._isCanvasOverlay ? "transparent" : "#000", t.style.zIndex = "1", t.style.position = "absolute", t.style.pointerEvents = "none", t.style.backfaceVisibility = "hidden", t;
  }
}
export {
  j as FitStrategy,
  We as HtmlMesh,
  Ie as HtmlMeshRenderer,
  _e as PointerEventsCaptureBehavior
};
