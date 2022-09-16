/**
 * The names of injectable objects.
 */
const enum InjectionName {
  /**
   * The injection name for http checks.
   */
  HTTP_CHECKS = 'HTTP_CHECKS',

  /**
   * The port the server is listening on.
   */
  PORT = 'PORT',
}

export default InjectionName;
