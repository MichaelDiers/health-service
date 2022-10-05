/**
 * The names of injectable objects.
 */
const enum InjectionName {
  /**
   * The injection name for the Access-Control-Allow-Origin response header.
   */
  ACCESS_CONTROL_ALLOW_ORIGIN = 'ACCESS_CONTROL_ALLOW_ORIGIN',

  /**
   * The api key for the health service.
   */
  API_KEY = 'API_KEY',

  /**
   * The name of the api key that is sent in headers or metadata.
   */
  API_KEY_HEADER_NAME = 'API_KEY_HEADER_NAME',

  /**
   * The address of the authentication service.
   */
  AUTHENTICATION_SERVICE = 'AUTHENTICATION_SERVICE',

  /**
   * The api key for the authentication service.
   */
  AUTHENTICATION_SERVICE_API_KEY = 'AUTHENTICATION_SERVICE_API_KEY',

  /**
   * The injection name for http checks.
   */
  HTTP_CHECKS = 'HTTP_CHECKS',

  /**
   * The port the server is listening on.
   */
  PORT = 'PORT',

  /**
   * The injection name of the grpc client.
   */
  USERS_GRPC_CLIENT = 'CLIENT_GRPC',

  /**
   * The api key for the users grpc service.
   */
  USERS_GRPC_SERVICE_API_KEY = 'USERS_GRPC_SERVICE_API_KEY',

  /**
   * The url of the users grpc service.
   */
  USERS_GRPC_SERVICE_URL = 'USERS_GRPC_SERVICE_URL',

  /**
   * The api key of the users service using rest.
   */
  USERS_SERVICE_REST_API_KEY = 'USERS_SERVICE_REST_API_KEY',

  /**
   * The url of the users service using rest.
   */
  USERS_SERVICE_REST_URL = 'USERS_SERVICE_REST_URL',
}

export default InjectionName;
