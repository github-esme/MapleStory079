/*
	Mel - Ludibrium Ticketing Place(220000100)
*/

var cost = 6000;
var status = 0;

function start() {
    cm.sendYesNo("#k#e你好,我是码头服务员乔伊。你想离开玩具城到天空之城吗？从这里到#b天空之城#k的船大概需要花费#r#e"+cost+"金币#k购买#b#t4031045##k才可以乘坐。你确定要购买吗？");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 1)
            status++;
        if(mode == 0) {
            cm.sendNext("#k#e好的，等你想坐船随时回来找我。");
            cm.dispose();
            return;
        }
        if(status == 1) {
            if(cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
            } else
                cm.sendOk("#k#e你的金币不足！或者是你的背包已经满了。");
            cm.dispose();
        }
    }
}
