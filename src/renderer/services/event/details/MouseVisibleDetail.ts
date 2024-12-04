export interface MouseVisibleDetail {
  visible: boolean;
}

export function isMouseVisibleEvent(
  event: Event,
): event is CustomEvent<MouseVisibleDetail> {
  return event instanceof CustomEvent && event.detail.visible !== undefined;
}
