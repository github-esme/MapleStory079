var status = 0;
var cost = 5000;

function start() {
    cm.sendYesNo("#d#e���,������ͷ��ƱԱ�����������뿪�����������֮����? ��ħ������վ�����ص���#b���֮��#k#d�Ĵ�ֻƱ����#r#e"+cost+"���.#k#d����Ҫ��#b#t4031045##k#d�ſ����ϴ�����ȷ���Ƿ�Ҫ����");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 0) {
            cm.sendNext("#k#e�õģ�����������ʱ�����ҡ�");
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
                cm.sendOk("#k#e��ȷ�����Ƿ����㹻�Ľ�ң�������ı����Ѿ�����");
                cm.dispose();
            }
        }
    }
}
