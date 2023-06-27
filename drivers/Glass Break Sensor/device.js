'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class RingDevice extends ZwaveDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('Glass Break sensor has been initialized');
  }

  async onNodeInit() {
    this.enableDebug();
    this.printNode();

    // register the measure_battery capability with COMMAND_CLASS_BATTERY
    this.registerCapability('measure_battery', 'BATTERY');   

    // register listener for NOTIFICATION REPORT
    this.registerReportListener('NOTIFICATION', 'NOTIFICATION_REPORT', report =>  {

      this.log(report)
      
      //this.setCapabilityValue('alarm_glassbreak', true)
      //this.setCapabilityValue('alarm_glassbreak', false)

      //this.setCapabilityValue('alarm_tamper', true)
      //this.setCapabilityValue('alarm_tamper', false)

    });

    this.log(`Ring Glass Break Sensor "${this.getName()}" capabilities have been initialized`);
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Glass Break sensor has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('Glass Break sensor settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('Glass Break sensor was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('Glass Break sensor has been deleted');
  }

}

module.exports = RingDevice;
