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
 * Class representing a GDPRPurgeVerifyRequest.
 */
class GDPRPurgeVerifyRequest {
  /**
   * Create a GDPRPurgeVerifyRequest.
   * @property {string} id deployment id
   * @property {string} key deployment key
   */
  constructor() {
  }

  /**
   * Defines the metadata of GDPRPurgeVerifyRequest
   *
   * @returns {object} metadata of GDPRPurgeVerifyRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GDPRPurgeVerifyRequest',
      type: {
        name: 'Composite',
        className: 'GDPRPurgeVerifyRequest',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          key: {
            required: true,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GDPRPurgeVerifyRequest;
