
/*
	Yellow Balloon - LudiPQ 3rd stage NPC
*/

var status = -1;
var exp = 35000;
			
function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");
    if (stage3status == null) {
		if (cm.isLeader()) { // Leader
			var stage3leader = eim.getProperty("stage3leader");
			if (stage3leader == "done") {
				if (cm.haveItem(4001022, 32)) { // Clear stage
					cm.sendNext("��ϲ�����Ѿ�ͨ����#b��3�׶�#k����ͨ������ߵĴ����Ž���#r��4�׶�#k.");
					cm.removeAll(4001022);
					clear(3,eim,cm);
					cm.givePartyExp(exp, eim.getPlayers());
				} else { // Not done yet
					cm.sendNext("��ȷ���������ռ���#b32��#k#r#t4001022##k��");
				}
			} else {
			cm.sendOk("�����������ǵ����ص����ݡ��������кܶ��������ӡ����˹����Ժ����ǻ�õ�#b��Ԫ��ͨ��֤#k�����ƻ����Ӻ�������������������ʱҲ��õ�#b��Ԫ��ͨ��֤#k������������Ƕӳ����ռ�����#b32�Ŵ�Ԫ��ͨ��֤#k�����Ҳſ��Խ�����һ�أ�����ͣ�");
			eim.setProperty("stage3leader","done");
			}
		} else { // Members
			cm.sendNext("�����������ǵ����ص����ݡ��������кܶ��������ӡ����˹����Ժ����ǻ�õ�#b��Ԫ��ͨ��֤#k�����ƻ����Ӻ�������������������ʱҲ��õ�#b��Ԫ��ͨ��֤#k������������Ƕӳ����ռ�����#b32�Ŵ�Ԫ��ͨ��֤#k�����Ҳſ��Խ�����һ�أ�����ͣ�");
		}
    } else {
		cm.sendNext("��ϲ�����Ѿ�ͨ����#b��3�׶�#k����ͨ������ߵĴ����Ž���#r��4�׶�#k.");
    }
	cm.safeDispose();
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}