/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DistributionGroupWithoutIsLatest class.
 * @constructor
 * @member {string} [id] ID identifying a unique distribution group.
 * 
 * @member {string} [name] A name identifying a unique distribution group.
 * 
 */
function DistributionGroupWithoutIsLatest() {
}

/**
 * Defines the metadata of DistributionGroupWithoutIsLatest
 *
 * @returns {object} metadata of DistributionGroupWithoutIsLatest
 *
 */
DistributionGroupWithoutIsLatest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DistributionGroupWithoutIsLatest',
    type: {
      name: 'Composite',
      className: 'DistributionGroupWithoutIsLatest',
      modelProperties: {
        id: {
          required: false,
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
};

module.exports = DistributionGroupWithoutIsLatest;