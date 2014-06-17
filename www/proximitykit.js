var exec = require('cordova/exec'),
    utils = require('cordova/utils');

var pluginClass = "ProximityKit";

var proximitykit =
{
    constants: {
      'keys' : {
        'eventType' : 'eventType',
        'region' : 'region',
        'state' : 'state',
        'name' : 'name',
        'identifier' : 'identifier',
        'attributes' : 'attributes',
        'uuid' : 'uuid',
        'major' : 'major',
        'minor' : 'minor',
        'rssi' : 'rssi',
        'proximity' : 'proximity',
        'beacons' : 'beacons'
      },
      'eventTypes' : {
        'sync' : 'didSync',
        'determinedRegionState' : 'didDetermineState',
        'enteredRegion' : 'didEnterRegion',
        'exitedRegion' : 'didExitRegion',
        'rangedBeacons' : 'didRangeBeacons'
      }
    },

    watchProximity: function(success, error) {
        exec(success, error, pluginClass, "watchProximity", [utils.createUUID()]);
    },

    clearWatch: function(watchId) {
        exec(success, error, pluginClass, "clearWatch", [watchId]);
    }
};

module.exports = proximitykit;

