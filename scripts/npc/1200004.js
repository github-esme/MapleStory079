/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    //cm.sendYesNo("����Ҫȥ���������֧��#b 80 ���#k ���Ǳ�Լһ����.");
	cm.sendOk("�������δ�����������ڴ���");
	cm.dispose();
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("���㿼�Ǻ��������Ұ�!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warpBack(200090060,140020300,80);
    }
    cm.dispose();
}
}