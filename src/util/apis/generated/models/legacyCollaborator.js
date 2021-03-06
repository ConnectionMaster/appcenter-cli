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
 * Class representing a LegacyCollaborator.
 */
class LegacyCollaborator {
  /**
   * Create a LegacyCollaborator.
   * @property {boolean} [isCurrentAccount] Is current collaborator the same as
   * current account.
   * @property {string} [permission] Which permission does current account has.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyCollaborator
   *
   * @returns {object} metadata of LegacyCollaborator
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyCollaborator',
      type: {
        name: 'Composite',
        className: 'LegacyCollaborator',
        modelProperties: {
          isCurrentAccount: {
            required: false,
            serializedName: 'isCurrentAccount',
            type: {
              name: 'Boolean'
            }
          },
          permission: {
            required: false,
            serializedName: 'permission',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyCollaborator;
