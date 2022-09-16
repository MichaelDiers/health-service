/**
 * Defines a http check.
 */
export default interface IHttpCheck {
  /**
   * The http address that will be checked.
   */
  link: string;

  /**
   * A descriptive name of the check.
   */
  name: string;
}
