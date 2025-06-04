
if (typeof gdjs.evtsExt__InputValidation__IsOnlyLetters !== "undefined") {
  gdjs.evtsExt__InputValidation__IsOnlyLetters.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InputValidation__IsOnlyLetters = {};


gdjs.evtsExt__InputValidation__IsOnlyLetters.userFunc0xf20d40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const lrt = eventsFunctionContext.getArgument("lrt");
const n = /^[a-zA-Z\s]*$/;

eventsFunctionContext.returnValue = n.test(lrt);
};
gdjs.evtsExt__InputValidation__IsOnlyLetters.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputValidation__IsOnlyLetters.userFunc0xf20d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputValidation__IsOnlyLetters.func = function(runtimeScene, lrt, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InputValidation"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InputValidation"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "lrt") return lrt;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InputValidation__IsOnlyLetters.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InputValidation__IsOnlyLetters.registeredGdjsCallbacks = [];