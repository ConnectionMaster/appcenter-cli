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
 * Class representing a GetLatestPrivateReleaseOKResponseDistributionGroupsItem.
 */
class GetLatestPrivateReleaseOKResponseDistributionGroupsItem {
  /**
   * Create a GetLatestPrivateReleaseOKResponseDistributionGroupsItem.
   * @property {string} id ID identifying a unique distribution group.
   * @property {string} [name] A name identifying a unique distribution group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLatestPrivateReleaseOKResponseDistributionGroupsItem
   *
   * @returns {object} metadata of GetLatestPrivateReleaseOKResponseDistributionGroupsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLatestPrivateReleaseOKResponse_distribution_groupsItem',
      type: {
        name: 'Composite',
        className: 'GetLatestPrivateReleaseOKResponseDistributionGroupsItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLatestPrivateReleaseOKResponseDistributionGroupsItem;
