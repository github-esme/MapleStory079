/*
	Mue - Leafre Ticketing Booth(240000100)
*/

var cost = 30000;
var status = 0;

function start() {
    cm.sendYesNo("#k#e��ã�������ͷ��ƱԱ#r#eŦ��#k#e�������뿪��ľ�嵽���֮���𣿴����ﵽ���ص�#b#e���֮��#k�Ĵ�Ʊ��Ҫ����#b#e"+cost+"���#k����ȷ��Ҫ������");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 1)
            status++;
        else {
            cm.sendNext("#k#e��Ŀǰ����ȥ�ǰɡ�");
            cm.dispose();
            return;
        }
        if(status == 1) {
            if(cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
            } else
                cm.sendOk("#k#e��ȷ��һ�����Ƿ����㹻�Ľ�ң�����еĻ���ȷ����ı����Ƿ����ˡ�");
            cm.dispose();
        }
    }
}