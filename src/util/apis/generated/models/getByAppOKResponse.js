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
 * Aggregated Billing Information for a user or an organization
 *
 */
class GetByAppOKResponse {
  /**
   * Create a GetByAppOKResponse.
   * @property {string} [version] Version of the Billing Information schema
   * @property {string} [timestamp] The ISO 8601 datetime of last modification
   * @property {string} [id] ID of the user or organization
   * @property {object} [billingPlans] Billing Plans section in the Billing
   * Information
   * @property {object} [billingPlans.buildService] Billing Plans for a single
   * service
   * @property {boolean} [billingPlans.buildService.canSelectTrialPlan] Can
   * customer select trial plan for that service (if it exists)?
   * @property {string} [billingPlans.buildService.lastTrialPlanExpirationTime]
   * Expiration time of the last selected trial plan. Will be null if trial
   * plan was not used.
   * @property {object} [billingPlans.buildService.currentBillingPeriod]
   * Billing plans for a given period
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.startTime] Inclusive start
   * of the period
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.endTime] Exclusive end of
   * the period.
   * @property {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount] Selection of a
   * billing plan
   * @property {number}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @property {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan] Billing
   * Plan
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.id] The
   * Billing Plan ID
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.version]
   * Version of the Billing Plan schema
   * @property {number}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.price]
   * Price of the Billing Plan
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.paymentSource]
   * Service that receives payments for this billing plan. Possible values
   * include: 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.service]
   * Name of the service that the plan applies to. Possible values include:
   * 'Build', 'Test'
   * @property {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.limits] A
   * collection of named numeric values
   * @property {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.attributes]
   * Collection of attribute values.
   * @property {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.parentId]
   * @property {object} [billingPlans.testService] Billing Plans for a single
   * service
   * @property {boolean} [billingPlans.testService.canSelectTrialPlan] Can
   * customer select trial plan for that service (if it exists)?
   * @property {string} [billingPlans.testService.lastTrialPlanExpirationTime]
   * Expiration time of the last selected trial plan. Will be null if trial
   * plan was not used.
   * @property {object} [billingPlans.testService.currentBillingPeriod] Billing
   * plans for a given period
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.startTime] Inclusive start
   * of the period
   * @property {string} [billingPlans.testService.currentBillingPeriod.endTime]
   * Exclusive end of the period.
   * @property {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount] Selection of a
   * billing plan
   * @property {number}
   * [billingPlans.testService.currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @property {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan] Billing
   * Plan
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.id] The
   * Billing Plan ID
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.version]
   * Version of the Billing Plan schema
   * @property {number}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.price] Price
   * of the Billing Plan
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.paymentSource]
   * Service that receives payments for this billing plan. Possible values
   * include: 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.service]
   * Name of the service that the plan applies to. Possible values include:
   * 'Build', 'Test'
   * @property {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.limits] A
   * collection of named numeric values
   * @property {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.attributes]
   * Collection of attribute values.
   * @property {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.parentId]
   * @property {object} [usage] Usage section in the Billing Information
   * @property {object} [usage.buildService] Resource usage for a single Mobile
   * Center service
   * @property {object} [usage.buildService.currentUsagePeriod] Usage for a
   * single period
   * @property {string} [usage.buildService.currentUsagePeriod.startTime]
   * Inclusive start time of the usage period
   * @property {string} [usage.buildService.currentUsagePeriod.endTime]
   * Exclusive end time of the usage period.
   * @property {object} [usage.buildService.currentUsagePeriod.byAccount] A
   * collection of named numeric values
   * @property {object} [usage.buildService.currentUsagePeriod.byApp] A
   * collection of  named numeric values grouped by app
   * @property {object} [usage.testService] Resource usage for a single Mobile
   * Center service
   * @property {object} [usage.testService.currentUsagePeriod] Usage for a
   * single period
   * @property {string} [usage.testService.currentUsagePeriod.startTime]
   * Inclusive start time of the usage period
   * @property {string} [usage.testService.currentUsagePeriod.endTime]
   * Exclusive end time of the usage period.
   * @property {object} [usage.testService.currentUsagePeriod.byAccount] A
   * collection of named numeric values
   * @property {object} [usage.testService.currentUsagePeriod.byApp] A
   * collection of  named numeric values grouped by app
   * @property {string} [azureSubscriptionId] Unique identifier for the Azure
   * subscription used for billing
   * @property {string} [azureSubscriptionState] State of the Azure
   * subscription used for billing. Possible values include: 'Enabled',
   * 'Disabled', 'NotSet'
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetByAppOKResponse
   *
   * @returns {object} metadata of GetByAppOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetByAppOKResponse',
      type: {
        name: 'Composite',
        className: 'GetByAppOKResponse',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          billingPlans: {
            required: false,
            serializedName: 'billingPlans',
            type: {
              name: 'Composite',
              className: 'GetByAppOKResponseBillingPlans'
            }
          },
          usage: {
            required: false,
            serializedName: 'usage',
            type: {
              name: 'Composite',
              className: 'GetByAppOKResponseUsage'
            }
          },
          azureSubscriptionId: {
            required: false,
            serializedName: 'azureSubscriptionId',
            type: {
              name: 'String'
            }
          },
          azureSubscriptionState: {
            required: false,
            serializedName: 'azureSubscriptionState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetByAppOKResponse;
