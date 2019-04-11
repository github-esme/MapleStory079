var weapon = [1132174, 1132175, 1132176, 1132177, 1132178, 1102481, 1102482, 1102483, 1102484, 1102485, 1082543, 1082544, 1082545, 1082546, 1082547, 1072743, 1072744, 1072745, 1072746, 1072747];
var req = [
    [4000313, 200],
    [4021006, 10],
    [4021008, 10],
    [4005004, 10],
    [4000273, 50],
    [4032226, 30]
];
var sels;
var status = -1;

function start() {
	cm.sendOk("#d目前我还没有功能，请联系管理员添加！");
    cm.dispose();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d需要:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d没想到吧^_^#r暴君装备品牌#k被我收购了，没有材料休想得到！\r\n\r\n必须亲自找到我才能兑换装备哦，我在#r吉隆坡大都市#k！\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换装备#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b已经兑换了装备 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}