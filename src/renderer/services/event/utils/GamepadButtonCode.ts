/**
 * Enumeration of gamepad buttons.
 *
 * Thanks to gamepad.js for the button mapping.
 */
export enum GamepadButtonCode {
  /**
   * Button 1, PS Cross, Xbox A
   */
  Button1 = 0,

  /**
   * Button 2, PS Circle, Xbox B
   */
  Button2 = 1,

  /**
   * Button 3, PS Square, Xbox X
   */
  Button3 = 2,

  /**
   * Button 4, PS Triangle, Xbox Y
   */
  Button4 = 3,

  /**
   * Shoulder Top Left, PS L1, Xbox LB
   */
  ShoulderTopLeft = 4,

  /**
   * Shoulder Top Right, PS R1, Xbox RB
   */
  ShoulderTopRight = 5,

  /**
   * Shoulder Bottom Left, PS L2, Xbox LT
   */
  ShoulderBottomLeft = 6,

  /**
   * Shoulder Bottom Right, PS R2, Xbox RT
   */
  ShoulderBottomRight = 7,

  /**
   * Select, PS Select, Xbox Back
   */
  Select = 8,

  /**
   * Start, PS Start, Xbox Start
   */
  Start = 9,

  /**
   * Stick Button Left, PS L3, Xbox LS
   */
  StickButtonLeft = 10,

  /**
   * Stick Button Right, PS R3, Xbox RS
   */
  StickButtonRight = 11,

  /**
   * D-Pad Up
   */
  DPadUp = 12,

  /**
   * D-Pad Down
   */
  DPadDown = 13,

  /**
   * D-Pad Left
   */
  DPadLeft = 14,

  /**
   * D-Pad Right
   */
  DPadRight = 15,

  /**
   * Vendor, PS PS, Xbox XBOX
   */
  Vendor = 16,
}
