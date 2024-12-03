import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Behavior } from '@babylonjs/core/Behaviors/behavior';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { Matrix } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Quaternion } from '@babylonjs/core/Maths/math';
import { Scene } from '@babylonjs/core/scene';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Viewport } from '@babylonjs/core/Maths/math.viewport';

export declare const FitStrategy: {
    CONTAIN: FitStrategyType;
    COVER: FitStrategyType;
    STRETCH: FitStrategyType;
    NONE: FitStrategyType;
};

declare type FitStrategyType = {
    wrapElement(element: HTMLElement): HTMLElement;
    updateSize(sizingElement: HTMLElement, width: number, height: number): void;
};

/**
 * This class represents HTML content that we want to render as though it is part of the scene.  The HTML content is actually
 * rendered below the canvas, but a depth mask is created by this class that writes to the depth buffer but does not
 * write to the color buffer, effectively punching a hole in the canvas.  CSS transforms are used to scale, translate, and rotate
 * the HTML content so that it matches the camera and mesh orientation.  The class supports interactions in editable and non-editable mode.
 * In non-editable mode (the default), events are passed to the HTML content when the pointer is over the mask (and not occluded by other meshes
 * in the scene).
 */
export declare class HtmlMesh extends Mesh {
    isHtmlMesh: boolean;
    _enabled: boolean;
    _ready: boolean;
    _isCanvasOverlay: boolean;
    _requiresUpdate: boolean;
    _element?: HTMLElement;
    _width?: number;
    _height?: number;
    _fillerElement?: HTMLElement;
    _inverseScaleMatrix: Matrix | null;
    _captureOnPointerEnter: boolean;
    _pointerEventCaptureBehavior: PointerEventsCaptureBehavior | null;
    sourceWidth: number | null;
    sourceHeight: number | null;
    worldMatrixUpdateObserver: any;
    _fitStrategy: FitStrategyType;
    /**
     * Contruct an instance of HtmlMesh
     * @param {Scene} scene
     * @param {string} id The id of the mesh.  Will be used as the id of the HTML element as well.
     * @param options object with optional parameters
     * @param {boolean} options.captureOnPointerEnter If true, then the mesh will capture pointer events when the pointer enters the mesh.  If false, then the mesh will capture pointer events when the pointer is over the mesh.  Default is true.
     * @param {boolean} options.isCanvasOverlay If true, the mesh would always appear on top of everything, Can achieve semi transparent effects, etc
     * @returns
     */
    constructor(scene: Scene, id: string, { captureOnPointerEnter, isCanvasOverlay, fitStrategy }?: {
        captureOnPointerEnter?: boolean | undefined;
        isCanvasOverlay?: boolean | undefined;
        fitStrategy?: FitStrategyType | undefined;
    });
    get width(): number | undefined;
    get height(): number | undefined;
    /**
     * The HTML element that is being rendered as a mesh
     */
    get element(): HTMLElement | undefined;
    /**
     * True if the mesh has been moved, rotated, or scaled since the last time this
     * property was read.  This property is reset to false after reading.
     */
    get requiresUpdate(): boolean;
    set captureOnPointerEnter(captureOnPointerEnter: boolean);
    dispose(): void;
    markAsUpdated(): void;
    /**
     * Sets the content of the element to the specified content adjusting the mesh scale to match and making it visible.
     * If the the specified content is undefined, then it will make the mesh invisible.  In either case it will clear the
     * element content first.
     * @param {HTMLElement} element The element to render as a mesh
     * @param {number} width The width of the mesh in Babylon units
     * @param {number} height The height of the mesh in Babylon units
     */
    setContent(element: HTMLElement, width: number, height: number): void;
    setEnabled(enabled: boolean): void;
    setContentSizePx(width: number, height: number): void;
    protected setReady(ready: boolean): void;
    protected doSetEnabled(enabled: boolean): void;
    protected updateScaleIfNecessary(): void;
    protected createMask(): void;
    protected setElementZIndex(zIndex: number): void;
    /**
     * Callback used by the PointerEventsCaptureBehavior to capture pointer events
     */
    capturePointerEvents(): void;
    /**
     * Callback used by the PointerEventsCaptureBehavior to release pointer events
     */
    releasePointerEvents(): void;
    protected createElement(): HTMLDivElement | undefined;
}

/**
 * An instance of this is required to render HtmlMeshes in the scene.
 * if using HtmlMeshes, you must not set render order for group 0 using
 * scene.setRenderingOrder.  You must instead pass the compare functions
 * to the HtmlMeshRenderer constructor.  If you do not, then your render
 * order will be overwritten if the HtmlMeshRenderer is created after and
 * the HtmlMeshes will not render correctly (they will appear in front of
 * meshes that are actually in front of them) if the HtmlMeshRenderer is
 * created before.
 */
export declare class HtmlMeshRenderer {
    _maskRootNode?: TransformNode;
    _containerId?: string;
    _inSceneElements?: RenderLayerElements | null;
    _overlayElements?: RenderLayerElements | null;
    _cache: {
        cameraData: {
            fov: number;
            position: Vector3;
            style: string;
        };
        htmlMeshData: WeakMap<object, {
            style: string;
        }>;
    };
    _width: number;
    _height: number;
    _widthHalf: number;
    _heightHalf: number;
    _cameraViewMatrix?: Matrix;
    _projectionMatrix?: Matrix;
    _cameraWorldMatrix?: Matrix;
    _viewport?: Viewport;
    _temp: {
        scaleTransform: Vector3;
        rotationTransform: Quaternion;
        positionTransform: Vector3;
        objectMatrix: Matrix;
        cameraWorldMatrix: Matrix;
        cameraRotationMatrix: Matrix;
        cameraWorldMatrixAsArray: any[];
    };
    _lastDevicePixelRatio: number;
    _cameraMatrixUpdated: boolean;
    _previousCanvasDocumentPosition: {
        top: number;
        left: number;
    };
    private _renderObserver;
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
    constructor(scene: Scene, { parentContainerId, _containerId, enableOverlayRender, defaultOpaqueRenderOrder, defaultAlphaTestRenderOrder, defaultTransparentRenderOrder, }?: {
        parentContainerId?: string | null;
        _containerId?: string;
        defaultOpaqueRenderOrder?: RenderOrderFunction;
        defaultAlphaTestRenderOrder?: RenderOrderFunction;
        defaultTransparentRenderOrder?: RenderOrderFunction;
        enableOverlayRender?: boolean;
    });
    dispose(): void;
    protected init(scene: Scene, parentContainerId: string | null, enableOverlayRender: boolean, defaultOpaqueRenderOrder: RenderOrderFunction, defaultAlphaTestRenderOrder: RenderOrderFunction, defaultTransparentRenderOrder: RenderOrderFunction): void;
    private createRenderLayerElements;
    protected getSize(): {
        width: number;
        height: number;
    };
    protected setSize(width: number, height: number): void;
    protected getCameraCSSMatrix(matrix: Matrix): string;
    protected getHtmlContentCSSMatrix(matrix: Matrix, useRightHandedSystem: boolean): string;
    protected getTransformationMatrix(htmlMesh: HtmlMesh, useRightHandedSystem: boolean): Matrix;
    protected renderHtmlMesh(htmlMesh: HtmlMesh, useRightHandedSystem: boolean): void;
    protected render: (scene: Scene, camera: Camera) => void;
    protected updateBaseScaleFactor(htmlMesh: HtmlMesh): void;
    protected updateContainerPositionIfNeeded(scene: Scene): Promise<void>;
    protected onCameraMatrixChanged: (camera: Camera) => void;
    private epsilon;
    private getAncestorMarginsAndPadding;
}

/**
 * Behavior for any content that can capture pointer events, i.e. bypass the Babylon pointer event handling
 * and receive pointer events directly.  It will register the capture triggers and negotiate the capture and
 * release of pointer events.  Curerntly this applies only to HtmlMesh
 */
export declare class PointerEventsCaptureBehavior implements Behavior<AbstractMesh> {
    private captureCallback;
    private releaseCallback;
    name: string;
    attachedMesh: AbstractMesh | null;
    _captureOnPointerEnter: boolean;
    constructor(captureCallback: () => void, releaseCallback: () => void, { captureOnPointerEnter }?: {
        captureOnPointerEnter?: boolean | undefined;
    });
    set captureOnPointerEnter(captureOnPointerEnter: boolean);
    init(): void;
    attach(mesh: AbstractMesh): void;
    detach(): void;
    dispose(): void;
    releasePointerEvents(): void;
    capturePointerEvents(): void;
}

declare type RenderLayerElements = {
    container: HTMLElement;
    domElement: HTMLElement;
    cameraElement: HTMLElement;
};

/**
 * A function that compares two submeshes and returns a number indicating which
 * should be rendered first.
 */
declare type RenderOrderFunction = (subMeshA: SubMesh, subMeshB: SubMesh) => number;

export { }


declare global {
    interface Window {
        "pointer-events-capture-debug": boolean | null;
    }
}

