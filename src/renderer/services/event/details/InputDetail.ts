export type InputSource = 'keyboard' | 'gamepad';

export type InputCode =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'back'
  | 'enter'
  | 'menu';

export interface BaseSource {
  type: 'keyboard' | 'gamepad';
}

export interface GamepadSource extends BaseSource {
  type: 'gamepad';
  index: number;
}

export interface KeyboardSource extends BaseSource {
  type: 'keyboard';
}

export type Source = KeyboardSource | GamepadSource;

export interface InputDetail {
  code: InputCode;
  source: Source;
}

export function isKeyboardSource(source: Source): source is KeyboardSource {
  return source.type === 'keyboard';
}

export function isGamepadSource(source: Source): source is GamepadSource {
  return source.type === 'gamepad' && source.index !== undefined;
}

export function isSource(source: Source): source is Source {
  return isKeyboardSource(source) || isGamepadSource(source);
}

export function isInputEvent(event: Event): event is CustomEvent<InputDetail> {
  return (
    event instanceof CustomEvent &&
    event.detail.code !== undefined &&
    event.detail.source !== undefined &&
    isSource(event.detail.source)
  );
}
