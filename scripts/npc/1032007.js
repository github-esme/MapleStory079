var status = 0;
var cost = 5000;

function start() {
    cm.sendYesNo("#d#e你好,我是码头售票员乔伊。你想离开金银岛到天空之城吗? 从魔法密林站到神秘岛的#b天空之城#k#d的船只票价是#r#e"+cost+"金币.#k#d你需要买#b#t4031045##k#d才可以上船，你确定是否要购买？");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 0) {
            cm.sendNext("#k#e好的，你想坐船随时来找我。");
            cm.dispose();
            return;
        }
        status++;
        if(status == 1) {
            if (cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
                cm.dispose();
            } else {
                cm.sendOk("#k#e请确认你是否有足够的金币，或者你的背包已经满了");
                cm.dispose();
            }
        }
    }
}
