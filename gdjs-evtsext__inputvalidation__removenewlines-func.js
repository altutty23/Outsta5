
if (typeof gdjs.evtsExt__InputValidation__RemoveNewLines !== "undefined") {
  gdjs.evtsExt__InputValidation__RemoveNewLines.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InputValidation__RemoveNewLines = {};


gdjs.evtsExt__InputValidation__RemoveNewLines.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__InputValidation__RemoveNewLines.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr").setString(eventsFunctionContext.getArgument("text"));
}}

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")), gdjs.evtTools.string.newLine()) != -(1));
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")), gdjs.evtTools.string.newLine())) + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")), gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")), gdjs.evtTools.string.newLine()) + 1, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")))));
}
{ //Subevents: 
gdjs.evtsExt__InputValidation__RemoveNewLines.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__Sanitizer_tmpStr")); }}}

}


};

gdjs.evtsExt__InputValidation__RemoveNewLines.func = function(runtimeScene, text, parentEventsFunctionContext) {
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
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InputValidation__RemoveNewLines.eventsList1(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InputValidation__RemoveNewLines.registeredGdjsCallbacks = [];