/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Margin} from './Margin';

/**
 * The MarginData model module.
 * @module model/MarginData
 * @version v0
 */
export class MarginData {
  /**
   * Constructs a new <code>MarginData</code>.
   * Response data for margin
   * @alias module:model/MarginData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarginData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginData} obj Optional instance to populate.
   * @return {module:model/MarginData} The populated <code>MarginData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarginData();
      if (data.hasOwnProperty('margins'))
        obj.margins = ApiClient.convertToType(data['margins'], [Margin]);
      if (data.hasOwnProperty('required_margin'))
        obj.requiredMargin = ApiClient.convertToType(data['required_margin'], 'Number');
      if (data.hasOwnProperty('final_margin'))
        obj.finalMargin = ApiClient.convertToType(data['final_margin'], 'Number');
    }
    return obj;
  }
}

/**
 * Response data for instrument margin details
 * @member {Array.<module:model/Margin>} margins
 */
MarginData.prototype.margins = undefined;

/**
 * Total margin required to execute the orders
 * @member {Number} requiredMargin
 */
MarginData.prototype.requiredMargin = undefined;

/**
 * Total margin after margin benefit
 * @member {Number} finalMargin
 */
MarginData.prototype.finalMargin = undefined;

