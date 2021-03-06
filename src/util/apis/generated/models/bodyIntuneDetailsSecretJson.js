/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a BodyIntuneDetailsSecretJson.
 */
class BodyIntuneDetailsSecretJson {
  /**
   * Create a BodyIntuneDetailsSecretJson.
   * @property {string} [idToken] the id token of user
   * @property {string} [refreshToken] the refresh token for user
   * @property {string} [refreshTokenExpiry] the expiry of refresh token
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyIntuneDetailsSecretJson
   *
   * @returns {object} metadata of BodyIntuneDetailsSecretJson
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body_intune_details_secret_json',
      type: {
        name: 'Composite',
        className: 'BodyIntuneDetailsSecretJson',
        modelProperties: {
          idToken: {
            required: false,
            serializedName: 'id_token',
            type: {
              name: 'String'
            }
          },
          refreshToken: {
            required: false,
            serializedName: 'refresh_token',
            type: {
              name: 'String'
            }
          },
          refreshTokenExpiry: {
            required: false,
            serializedName: 'refresh_token_expiry',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyIntuneDetailsSecretJson;
