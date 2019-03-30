/*
    Blue Balloon - LudiPQ 8th stage NPC
*/

var status;
var partyLdr;
var chatState;
var party;
var preamble;

var stage8combos = Array(Array(0, 0, 0, 0, 1, 1, 1, 1, 1),
    Array(0, 0, 0, 1, 0, 1, 1, 1, 1),
    Array(0, 0, 0, 1, 1, 0, 1, 1, 1),
    Array(0, 0, 0, 1, 1, 1, 0, 1, 1),
    Array(0, 0, 0, 1, 1, 1, 1, 0, 1),
    Array(0, 0, 0, 1, 1, 1, 1, 1, 0),
    Array(0, 0, 1, 0, 0, 1, 1, 1, 1),
    Array(0, 0, 1, 0, 1, 0, 1, 1, 1),
    Array(0, 0, 1, 0, 1, 1, 0, 1, 1),
    Array(0, 0, 1, 0, 1, 1, 1, 0, 1),
    Array(0, 0, 1, 0, 1, 1, 1, 1, 0),
    Array(0, 0, 1, 1, 0, 0, 1, 1, 1),
    Array(0, 0, 1, 1, 0, 1, 0, 1, 1),
    Array(0, 0, 1, 1, 0, 1, 1, 0, 1),
    Array(0, 0, 1, 1, 0, 1, 1, 1, 0),
    Array(0, 0, 1, 1, 1, 0, 0, 1, 1),
    Array(0, 0, 1, 1, 1, 0, 1, 0, 1),
    Array(0, 0, 1, 1, 1, 0, 1, 1, 0),
    Array(0, 0, 1, 1, 1, 1, 0, 0, 1),
    Array(0, 0, 1, 1, 1, 1, 0, 1, 0),
    Array(0, 0, 1, 1, 1, 1, 1, 0, 0),
    Array(0, 1, 0, 0, 0, 1, 1, 1, 1),
    Array(0, 1, 0, 0, 1, 0, 1, 1, 1),
    Array(0, 1, 0, 0, 1, 1, 0, 1, 1),
    Array(0, 1, 0, 0, 1, 1, 1, 0, 1),
    Array(0, 1, 0, 0, 1, 1, 1, 1, 0),
    Array(0, 1, 0, 1, 0, 0, 1, 1, 1),
    Array(0, 1, 0, 1, 0, 1, 0, 1, 1),
    Array(0, 1, 0, 1, 0, 1, 1, 0, 1),
    Array(0, 1, 0, 1, 0, 1, 1, 1, 0),
    Array(0, 1, 0, 1, 1, 0, 0, 1, 1),
    Array(0, 1, 0, 1, 1, 0, 1, 0, 1),
    Array(0, 1, 0, 1, 1, 0, 1, 1, 0),
    Array(0, 1, 0, 1, 1, 1, 0, 0, 1),
    Array(0, 1, 0, 1, 1, 1, 0, 1, 0),
    Array(0, 1, 0, 1, 1, 1, 1, 0, 0),
    Array(0, 1, 1, 0, 0, 0, 1, 1, 1),
    Array(0, 1, 1, 0, 0, 1, 0, 1, 1),
    Array(0, 1, 1, 0, 0, 1, 1, 0, 1),
    Array(0, 1, 1, 0, 0, 1, 1, 1, 0),
    Array(0, 1, 1, 0, 1, 0, 0, 1, 1),
    Array(0, 1, 1, 0, 1, 0, 1, 0, 1),
    Array(0, 1, 1, 0, 1, 0, 1, 1, 0),
    Array(0, 1, 1, 0, 1, 1, 0, 0, 1),
    Array(0, 1, 1, 0, 1, 1, 0, 1, 0),
    Array(0, 1, 1, 0, 1, 1, 1, 0, 0),
    Array(0, 1, 1, 1, 0, 0, 0, 1, 1),
    Array(0, 1, 1, 1, 0, 0, 1, 0, 1),
    Array(0, 1, 1, 1, 0, 0, 1, 1, 0),
    Array(0, 1, 1, 1, 0, 1, 0, 0, 1),
    Array(0, 1, 1, 1, 0, 1, 0, 1, 0),
    Array(0, 1, 1, 1, 0, 1, 1, 0, 0),
    Array(0, 1, 1, 1, 1, 0, 0, 0, 1),
    Array(0, 1, 1, 1, 1, 0, 0, 1, 0),
    Array(0, 1, 1, 1, 1, 0, 1, 0, 0),
    Array(0, 1, 1, 1, 1, 1, 0, 0, 0),
    Array(1, 0, 0, 0, 0, 1, 1, 1, 1),
    Array(1, 0, 0, 0, 1, 0, 1, 1, 1),
    Array(1, 0, 0, 0, 1, 1, 0, 1, 1),
    Array(1, 0, 0, 0, 1, 1, 1, 0, 1),
    Array(1, 0, 0, 0, 1, 1, 1, 1, 0),
    Array(1, 0, 0, 1, 0, 0, 1, 1, 1),
    Array(1, 0, 0, 1, 0, 1, 0, 1, 1),
    Array(1, 0, 0, 1, 0, 1, 1, 0, 1),
    Array(1, 0, 0, 1, 0, 1, 1, 1, 0),
    Array(1, 0, 0, 1, 1, 0, 0, 1, 1),
    Array(1, 0, 0, 1, 1, 0, 1, 0, 1),
    Array(1, 0, 0, 1, 1, 0, 1, 1, 0),
    Array(1, 0, 0, 1, 1, 1, 0, 0, 1),
    Array(1, 0, 0, 1, 1, 1, 0, 1, 0),
    Array(1, 0, 0, 1, 1, 1, 1, 0, 0),
    Array(1, 0, 1, 0, 0, 0, 1, 1, 1),
    Array(1, 0, 1, 0, 0, 1, 0, 1, 1),
    Array(1, 0, 1, 0, 0, 1, 1, 0, 1),
    Array(1, 0, 1, 0, 0, 1, 1, 1, 0),
    Array(1, 0, 1, 0, 1, 0, 0, 1, 1),
    Array(1, 0, 1, 0, 1, 0, 1, 0, 1),
    Array(1, 0, 1, 0, 1, 0, 1, 1, 0),
    Array(1, 0, 1, 0, 1, 1, 0, 0, 1),
    Array(1, 0, 1, 0, 1, 1, 0, 1, 0),
    Array(1, 0, 1, 0, 1, 1, 1, 0, 0),
    Array(1, 0, 1, 1, 0, 0, 0, 1, 1),
    Array(1, 0, 1, 1, 0, 0, 1, 0, 1),
    Array(1, 0, 1, 1, 0, 0, 1, 1, 0),
    Array(1, 0, 1, 1, 0, 1, 0, 0, 1),
    Array(1, 0, 1, 1, 0, 1, 0, 1, 0),
    Array(1, 0, 1, 1, 0, 1, 1, 0, 0),
    Array(1, 0, 1, 1, 1, 0, 0, 0, 1),
    Array(1, 0, 1, 1, 1, 0, 0, 1, 0),
    Array(1, 0, 1, 1, 1, 0, 1, 0, 0),
    Array(1, 0, 1, 1, 1, 1, 0, 0, 0),
    Array(1, 1, 0, 0, 0, 0, 1, 1, 1),
    Array(1, 1, 0, 0, 0, 1, 0, 1, 1),
    Array(1, 1, 0, 0, 0, 1, 1, 0, 1),
    Array(1, 1, 0, 0, 0, 1, 1, 1, 0),
    Array(1, 1, 0, 0, 1, 0, 0, 1, 1),
    Array(1, 1, 0, 0, 1, 0, 1, 0, 1),
    Array(1, 1, 0, 0, 1, 0, 1, 1, 0),
    Array(1, 1, 0, 0, 1, 1, 0, 0, 1),
    Array(1, 1, 0, 0, 1, 1, 0, 1, 0),
    Array(1, 1, 0, 0, 1, 1, 1, 0, 0),
    Array(1, 1, 0, 1, 0, 0, 0, 1, 1),
    Array(1, 1, 0, 1, 0, 0, 1, 0, 1),
    Array(1, 1, 0, 1, 0, 0, 1, 1, 0),
    Array(1, 1, 0, 1, 0, 1, 0, 0, 1),
    Array(1, 1, 0, 1, 0, 1, 0, 1, 0),
    Array(1, 1, 0, 1, 0, 1, 1, 0, 0),
    Array(1, 1, 0, 1, 1, 0, 0, 0, 1),
    Array(1, 1, 0, 1, 1, 0, 0, 1, 0),
    Array(1, 1, 0, 1, 1, 0, 1, 0, 0),
    Array(1, 1, 0, 1, 1, 1, 0, 0, 0),
    Array(1, 1, 1, 0, 0, 0, 0, 1, 1),
    Array(1, 1, 1, 0, 0, 0, 1, 0, 1),
    Array(1, 1, 1, 0, 0, 0, 1, 1, 0),
    Array(1, 1, 1, 0, 0, 1, 0, 0, 1),
    Array(1, 1, 1, 0, 0, 1, 0, 1, 0),
    Array(1, 1, 1, 0, 0, 1, 1, 0, 0),
    Array(1, 1, 1, 0, 1, 0, 0, 0, 1),
    Array(1, 1, 1, 0, 1, 0, 0, 1, 0),
    Array(1, 1, 1, 0, 1, 0, 1, 0, 0),
    Array(1, 1, 1, 0, 1, 1, 0, 0, 0),
    Array(1, 1, 1, 1, 0, 0, 0, 0, 1),
    Array(1, 1, 1, 1, 0, 0, 0, 1, 0),
    Array(1, 1, 1, 1, 0, 0, 1, 0, 0),
    Array(1, 1, 1, 1, 0, 1, 0, 0, 0),
    Array(1, 1, 1, 1, 1, 0, 0, 0, 0));

function start() {
    status = -1;
    preamble = null;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        boxStage(cm);
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("8stageclear", "true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
    cm.givePartyExp(45000, eim.getPlayers());
    // stage 9 does not have a door, might be cause of DC error
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
    var debug = false;
    var eim = cm.getEventInstance();
    var nthtext = "eighth";
    var nthobj = "boxes";
    var nthverb = "stand";
    var nthpos = "stand too close to the edges";
    var curcombo = stage8combos;
    var currect = cm.getMap().getAreas();
    var objset = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    if( eim == null )
        return;

    if (cm.isLeader()) { // leader
        if (status == 0) {
            party = eim.getPlayers();
            preamble = eim.getProperty("leader" + nthtext + "preamble");
            if (preamble == null) {
                cm.sendNext("Hi!我来告诉你们这关的内容。在这里有#r1~9#k号九个箱子。需要你们队伍里面#b5#r个人分别站在#b5#r个不同的箱子上,尝试着组合出正确的答案,这很需要你们队伍之间的默契，答对了才能进入下一关,请加油吧！");
                eim.setProperty("leader" + nthtext + "preamble", "done");
                eim.setProperty("stage" + nthtext + "combo", Math.floor(Math.random() * curcombo.length).toString());
                cm.dispose();
            } else { // otherwise, check for stage completed
                var complete = eim.getProperty("8stageclear");
                if (complete == null) {
                    var mapClear = "8stageclear";
                    eim.setProperty(mapClear, "true"); // Just to be sure
                    cm.sendNext("#b传送门已经打开了,但是由于其他特殊的原因,门被#r隐形#k#b起来了.直接在原来的位置按上进入即可.");
					clear(8, eim, cm);
				} else {
                    var totplayers = 0;
                    for (i = 0; i < objset.length; i++) {
                        for (j = 0; j < party.size(); j++) {
                            var present = currect.get(i).contains(party.get(j).getPosition());
                            if (present) {
                                objset[i] = objset[i] + 1;
                                totplayers = totplayers + 1;
                            }
                        }
                    }
                    if (totplayers == 5 || debug) {
                        var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        var testcombo = true;
                        for (i = 0; i < objset.length; i++) {
                            if (combo[i] != objset[i]) {
                                testcombo = false;
                            }
                        }
                        if (testcombo || debug) {
                            clear(8, eim, cm);
                            if (cm.getEventInstance().getProperty("s8start") != null) {
                                var starts4Time = cm.getEventInstance().getProperty("s8start");
                                var nowTime = new Date().getTime();
                                if ((nowTime - starts4Time) < 90000)
                                    cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
                            }
                            cm.dispose();
                        } else {
                            failstage(eim, cm);
                            cm.dispose();
                        }
                    } else {
                        if (debug) {
                            var outstring = "Objects contain:"
                            for (i = 0; i < objset.length; i++) {
                                outstring += "\r\n" + (i + 1).toString() + ". " + objset[i].toString();
                            }
                            cm.sendNext(outstring);
                            var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        } else {
                            //cm.sendNext("你们好像看起来没有找到#b5个正确的箱子#k。请继续尝试站在其他不同的箱子上。如果你们站得太过靠近于箱子的边缘的话,是不能算做答案的。所以请保持站在箱子的中间,加油!");
                             var complete = eim.getProperty("8stageclear");
						     var mapClear = "8stageclear";
							 eim.setProperty(mapClear, "true"); // Just to be sure
							 cm.sendNext("#b传送门已经打开了,但是由于其他特殊的原因,门被#r隐形#k#b起来了.直接在原来的位置按上进入即可.");/*这段代码可以跳过倒数第二关*/
                                
                        }
                    }
                }
            }
        } else {
            cm.dispose();
        }
    } else { // not leader
        if (status == 0) {
            var complete = eim.getProperty("8stageclear");
            if (complete != null) {
                cm.sendNext("#b传送门已经打开了,但是由于其他特殊的原因,门被#r隐形#k#b起来了.直接在原来的位置按上进入即可.");
                cm.dispose();
            } else {
                cm.sendNext("请你们的队长来找我。");
                cm.dispose();
            }
        } else {
            var complete = eim.getProperty("8stageclear");
            if (complete != null) {
                cm.sendNext("#b传送门已经打开了,但是由于其他特殊的原因,门被#r隐形#k#b起来了.直接在原来的位置按上进入即可.");
                cm.dispose();
            }
            cm.dispose();
        }
    }
}
