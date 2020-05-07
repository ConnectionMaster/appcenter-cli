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
 * Class representing a GroupOperatingSystemCountsOKResponse.
 */
class GroupOperatingSystemCountsOKResponse {
  /**
   * Create a GroupOperatingSystemCountsOKResponse.
   * @property {number} [errorCount]
   * @property {array} [operatingSystems]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GroupOperatingSystemCountsOKResponse
   *
   * @returns {object} metadata of GroupOperatingSystemCountsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GroupOperatingSystemCountsOKResponse',
      type: {
        name: 'Composite',
        className: 'GroupOperatingSystemCountsOKResponse',
        modelProperties: {
          errorCount: {
            required: false,
            serializedName: 'errorCount',
            type: {
              name: 'Number'
            }
          },
          operatingSystems: {
            required: false,
            serializedName: 'operatingSystems',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GroupOperatingSystemCountsOKResponseOperatingSystemsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GroupOperatingSystemCountsOKResponseOperatingSystemsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GroupOperatingSystemCountsOKResponse;