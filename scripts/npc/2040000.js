/*
	Mel - Ludibrium Ticketing Place(220000100)
*/

var cost = 6000;
var status = 0;

function start() {
    cm.sendYesNo("#k#e���,������ͷ����Ա�����������뿪��߳ǵ����֮���𣿴����ﵽ#b���֮��#k�Ĵ������Ҫ����#r#e"+cost+"���#k����#b#t4031045##k�ſ��Գ�������ȷ��Ҫ������");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 1)
            status++;
        if(mode == 0) {
            cm.sendNext("#k#e�õģ�������������ʱ�������ҡ�");
            cm.dispose();
            return;
        }
        if(status == 1) {
            if(cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
            } else
                cm.sendOk("#k#e��Ľ�Ҳ��㣡��������ı����Ѿ����ˡ�");
            cm.dispose();
        }
    }
}
