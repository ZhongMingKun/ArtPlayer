import { AspectRatio, Flip } from './player';

export type Events = {
    'video:canplay': [event: Event];
    'video:canplaythrough': [event: Event];
    'video:complete': [event: Event];
    'video:durationchange': [event: Event];
    'video:emptied': [event: Event];
    'video:ended': [event: Event];
    'video:error': [event: Error];
    'video:loadeddata': [event: Event];
    'video:loadedmetadata': [event: Event];
    'video:pause': [event: Event];
    'video:play': [event: Event];
    'video:playing': [event: Event];
    'video:progress': [event: Event];
    'video:ratechange': [event: Event];
    'video:seeked': [event: Event];
    'video:seeking': [event: Event];
    'video:stalled': [event: Event];
    'video:suspend': [event: Event];
    'video:timeupdate': [event: Event];
    'video:volumechange': [event: Event];
    'video:waiting': [event: Event];
    'document:mousemove': [event: Event];
    'document:mouseup': [event: Event];
    info: [state: boolean];
    layer: [state: boolean];
    loading: [state: boolean];
    mask: [state: boolean];
    subtitle: [state: boolean];
    contextmenu: [state: boolean];
    control: [state: boolean];
    setting: [state: boolean];
    hotkey: [event: Event];
    destroy: [];
    subtitleUpdate: [text: string];
    subtitleLoad: [url: string];
    subtitleSwitch: [url: string];
    focus: [event: Event];
    blur: [event: Event];
    dblclick: [event: Event];
    click: [event: Event];
    hover: [state: boolean, event: Event];
    mousemove: [event: Event];
    resize: [];
    view: [state: boolean];
    lock: [state: boolean];
    aspectRatio: [aspectRatio: AspectRatio];
    autoHeight: [height: number];
    autoSize: [];
    ready: [];
    error: [error: Error, reconnectTime: number];
    flip: [flip: Flip];
    fullscreen: [state: boolean];
    fullscreenWeb: [state: boolean];
    mini: [state: boolean];
    pause: [];
    pip: [state: boolean];
    play: [];
    screenshot: [dataUri: string];
    seek: [currentTime: number];
    subtitleOffset: [offset: number];
    restart: [url: string];
    muted: [state: boolean];
};
