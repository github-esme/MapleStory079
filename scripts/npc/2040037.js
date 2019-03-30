/**
	Orange Balloon - LudiPQ 2nd stage NPC
**/

var status;
var exp = 2520;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");
    
    if (stage2status == null) {
		if (cm.isLeader()) { // Leader
			var stage2leader = eim.getProperty("stage2leader");
			if (stage2leader == "done") {
				if (cm.haveItem(4001022, 15)) { // Clear stage
					cm.sendNext("��ϲ�����Ѿ�ͨ����#b��2�׶�#k����ͨ������ߵĴ����Ž���#r��3�׶�#k.");
					cm.removeAll(4001022);
					clear(2, eim, cm);
					cm.givePartyExp(30000);
					cm.dispose();
				} else { // Not done yet
					cm.sendNext("��ȷ���������ռ���#b15��#k#r#t4001022##k��");
				}
				cm.dispose();
			} else {
				cm.sendOk("�����������ǵڶ��ص����ݡ������ﵽ���������ӡ������ﵽ�������ӡ��ƻ������Ժ����ǻᱻ���͵���ĵط����ߵõ�#b��Ԫ��ͨ��֤#k�������ռ�#b15�Ŵ�Ԫ��ͨ��֤#k����ӳ��ɡ��ӳ�������Щ���������ˡ�\n��Ҫע����Ǵ����Ӻ�������ƶ�����ĵط�Ҳ��Ҫ���ϳ�������Ϊ����Ҳ���б�����ӡ������ȥ����Ͳ����ٽ�ȥ�ˡ������Ǿ�û�취������һ���ˡ�����ͣ�");
				eim.setProperty("stage2leader","done");
				cm.dispose();
			}
		} else { // Members
			cm.sendNext("�����������ǵڶ��ص����ݡ������ﵽ���������ӡ������ﵽ�������ӡ��ƻ������Ժ����ǻᱻ���͵���ĵط����ߵõ�#b��Ԫ��ͨ��֤#k�������ռ�#b15�Ŵ�Ԫ��ͨ��֤#k����ӳ��ɡ��ӳ�������Щ���������ˡ�\n��Ҫע����Ǵ����Ӻ�������ƶ�����ĵط�Ҳ��Ҫ���ϳ�������Ϊ����Ҳ���б�����ӡ������ȥ����Ͳ����ٽ�ȥ�ˡ������Ǿ�û�취������һ���ˡ�����ͣ�");
			cm.dispose();
		}
	} else {
		cm.sendNext("��ϲ�����Ѿ�ͨ����#b��2�׶�#k����ͨ������ߵĴ����Ž���#r��3�׶�#k.");
		cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}