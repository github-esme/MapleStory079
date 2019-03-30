/*
	Mue - Leafre Ticketing Booth(240000100)
*/

var cost = 30000;
var status = 0;

function start() {
    cm.sendYesNo("#k#e你好，我是码头售票员#r#e纽曼#k#e。你想离开神木村到天空之城吗？从这里到神秘岛#b#e天空之城#k的船票需要花费#b#e"+cost+"金币#k，你确定要购买吗？");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 1)
            status++;
        else {
            cm.sendNext("#k#e你目前不想去是吧。");
            cm.dispose();
            return;
        }
        if(status == 1) {
            if(cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
            } else
                cm.sendOk("#k#e请确认一下你是否有足够的金币，如果有的话再确认你的背包是否满了。");
            cm.dispose();
        }
    }
}