export interface GamepadDetail {
  connectedCount: number;
}

export function isGamepadEvent(
  event: Event,
): event is CustomEvent<GamepadDetail> {
  return (
    event instanceof CustomEvent && event.detail.connectedCount !== undefined
  );
}
