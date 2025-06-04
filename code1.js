gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Untitled_32sceneCode.GDiconObjects1= [];
gdjs.Untitled_32sceneCode.GDiconObjects2= [];
gdjs.Untitled_32sceneCode.GDIcon2Objects1= [];
gdjs.Untitled_32sceneCode.GDIcon2Objects2= [];
gdjs.Untitled_32sceneCode.GDicon3Objects1= [];
gdjs.Untitled_32sceneCode.GDicon3Objects2= [];
gdjs.Untitled_32sceneCode.GDBarObjects1= [];
gdjs.Untitled_32sceneCode.GDBarObjects2= [];
gdjs.Untitled_32sceneCode.GDbulletObjects1= [];
gdjs.Untitled_32sceneCode.GDbulletObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDScore2Objects1= [];
gdjs.Untitled_32sceneCode.GDScore2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.Untitled_32sceneCode.GDbulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDIcon2Objects1Objects = Hashtable.newFrom({"Icon2": gdjs.Untitled_32sceneCode.GDIcon2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.Untitled_32sceneCode.GDbulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDicon3Objects1Objects = Hashtable.newFrom({"icon3": gdjs.Untitled_32sceneCode.GDicon3Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.Untitled_32sceneCode.GDbulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDiconObjects1Objects = Hashtable.newFrom({"icon": gdjs.Untitled_32sceneCode.GDiconObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDIcon2Objects1Objects = Hashtable.newFrom({"Icon2": gdjs.Untitled_32sceneCode.GDIcon2Objects1});
gdjs.Untitled_32sceneCode.asyncCallback21584364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Untitled_32sceneCode.GDIcon2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Untitled_32sceneCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.Untitled_32sceneCode.GDiconObjects2);
gdjs.copyArray(runtimeScene.getObjects("icon3"), gdjs.Untitled_32sceneCode.GDicon3Objects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDiconObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDiconObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDIcon2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDIcon2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDicon3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDicon3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].hide(false);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback21584364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.Untitled_32sceneCode.GDiconObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDiconObjects1[i].addForceTowardPosition(500, 575, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.Untitled_32sceneCode.GDiconObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDiconObjects1[i].addForceTowardPosition(775, 575, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.Untitled_32sceneCode.GDiconObjects1);
gdjs.Untitled_32sceneCode.GDbulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDiconObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDiconObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDiconObjects1[i].getPointY("")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects, (gdjs.Untitled_32sceneCode.GDiconObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDiconObjects1[i].getPointY("")) - 200, 600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Untitled_32sceneCode.GDIcon2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Untitled_32sceneCode.GDbulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDIcon2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDIcon2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDIcon2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDIcon2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(3);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Untitled_32sceneCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("icon3"), gdjs.Untitled_32sceneCode.GDicon3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDicon3Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDbulletObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDicon3Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDicon3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDicon3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(3);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icon2"), gdjs.Untitled_32sceneCode.GDIcon2Objects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.Untitled_32sceneCode.GDiconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDiconObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDIcon2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIcon2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDIcon2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDicon3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDicon3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIcon2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDIcon2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDicon3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDicon3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
