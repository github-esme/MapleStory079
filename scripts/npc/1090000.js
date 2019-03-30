/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

var status = 0;
var jobId;
var jobName;
var mapId


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("#d#e�õģ����㿼�Ǻ����������Ұ�");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
	if (cm.getMapId() == 912010200 || cm.haveItem(4031059, 1)) {
        if (cm.getQuestStatus(6370) == 1) {
			cm.removeAll(4031059);
            cm.teachSkill(5221006, 0, 10);
            cm.forceCompleteQuest(6370);
        } else if (cm.getQuestStatus(6330) == 1) {
			cm.removeAll(4031059);
            cm.teachSkill(5121003, 0, 10);
            cm.forceCompleteQuest(6330);
        }
        cm.warp(120000101, 0);
		cm.sendOk("#d#e��ϲ��������ҵĿ��飬��������Դ����Ҹ����#r��������#k#dȥħ�����������ٵ����Ϲ�������ת�̹��ˣ��������ڶ��׶εĿ��顣");
        cm.dispose();
	}
	if (cm.getJob() == 0) {
		if (cm.getPlayer().getLevel() >= 10) {
		 cm.sendNext("#r#e�����Ҫ��Ϊһλ#b����#r��");
	    } else {
		cm.sendOk("#d#e�ܱ�Ǹ����ĵȼ����ﲻ��תְ��Ҫ��");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) { // ����
		if (cm.haveItem(4031012, 1)) {
			if (cm.haveItem(4031012, 1)) {
			status = 20;
			cm.sendNext("#d#e���Ѿ��Ӷ�ת�̹��Ǳ߿���������˲��ԣ��������Ѿ����Խ���תְ��");
		    } else {
			cm.sendOk("��ȥ�� #r����תְ�̹�#k.")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("#d#eû�뵽����ô���Ѿ�30���ˣ��������Ѿ��߱���ת���ʸ������תְ��");
		}
	    } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520) {
		if (cm.haveItem(4031059,1)) {
			cm.gainItem(4031057,1);
			cm.gainItem(4031059, -1);
			//cm.warp(211000001, 0);
			cm.sendOk("#d#e��ϲ��������ҵĿ��飬��������Դ����Ҹ����#r��������#k#dȥħ�����������ٵ����Ϲ�������ת�̹��ˣ��������ڶ��׶εĿ��顣");
		} else {
			   if(cm.haveItem(4031057)){
						cm.sendOk("#e�㻹��ʲô�����𣿻���ȥ����ת�̹���");
					}
          
		     // cm.sendOk("����ô���Ѿ���70���ˣ����������ȥ#r����֮�����Ԫ֮��#k����ҵķ�����Һڷ�����˵��#r������޺ܶ�ĵط�#k");
			  cm.sendOk("#d#e�þò���,û�뵽����ô���Ѿ���70����,��֪��������ɵ�����תְ.��������Ȼ��Ҫ��֤���Լ�.����ɵ�����תְ�����ռ�#r��������#d#e��#r�ǻ�����#d,���������ֶ���,����ͨ�����β��Կ���.�����ҵĵ�һ��������������ȥ#b���Ԫ֮��#r(��˵�ڻ�����޺ܶ�ĵط�)#k#d�����а��ķ���������ϻ�ȡ�ڷ�.�û�������.������������Ļ�, ��Ȱ�㻹�Ƿ���תְ����ͷ��.");
		    //cm.startQuest(100101);
		}
		cm.dispose();
		} else if (cm.isQuestActive(6370)) {
			var dd = cm.getEventManager("KyrinTrainingGroundC");
            if (dd != null) {
                dd.startInstance(cm.getPlayer());
            } else {
                cm.sendOk("δ֪�Ĵ������Ժ��ڳ��ԡ�");
            }
		} else if (cm.isQuestActive(6330)) {
            var dd = cm.getEventManager("KyrinTrainingGroundV");
            if (dd != null) {
                dd.startInstance(cm.getPlayer());
            } else {
                cm.sendOk("δ֪�Ĵ������Ժ��ڳ��ԡ�");
			}				
	    } else {
		cm.sendOk("#d#e���,���Ǻ���һת�̹�,������������ʲô���飿");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("#d#eһ��תְ�˺����Ͳ��ܷ���,�������תְ��������ҵĶԻ�.");
    } else if (status == 2) {
	cm.sendYesNo("#d#e���������һ�Σ�����Ŀ��Ǻ�Ҫ��Ϊһλ#r����#d#e��");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
		cm.changeJob(500); // ����
		cm.resetStats(4, 4, 4, 4);
	}
	    cm.gainItem(1482014, 1);
	    cm.gainItem(1492014, 1);
	    cm.gainItem(2330000, 600);
	    cm.gainItem(2330000, 600);
	    cm.gainItem(2330000, 600);
	cm.sendOk("#d#eתְ�ɹ����������Ѿ���һ��������");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNext("#d#e����������֮·Ӧ�úܲ����װɣ�");
    } else if (status == 12) {
	cm.askAcceptDecline("#d#e����ǰ������һ���������ұ����Ȳ�����,��׼�����ˣ�");
    } else if (status == 13) {
	cm.sendSimple("#d#e����Ҫתְ��Ϊʲôְҵ�� \r\n#b\r\n#L0#ȭ��#l\r\n\r\n#L1#ǹ��#l#k");
	} else if (status == 14) {
	var jobName;
	if (selection == 0) {
	    jobName = "ȭ��";
		MapId = "108000502";
	} else if (selection == 1) {
	    jobName = "ǹ��";
		MapId = "108000500";
	}
	cm.sendYesNo("#d#e�����Ҫ��Ϊһλ#r"+ jobName +"#k#d#e��");
	} else if (status == 15) {
	cm.warp(MapId);
	cm.sendOk("#d#e����#r����ȭ(ȭ��)#d#e����#r#e˫�����(ǹ��)#d#e�������ռ�15��#b#e�ᾧ#k����");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("#d#e����Ҫתְ��Ϊʲôְҵ�� \r\n#b\r\n#L0#ȭ��#l\r\n\r\n#L1#ǹ��#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "ȭ��";
	    job = 510;
	} else if (selection == 1) {
	    jobName = "ǹ��";
	    job = 520;
	}
	cm.sendYesNo("#d#e�����Ҫ��Ϊһλ#r" + jobName + "#k#d#e��");
    } else if (status == 23) {
	cm.changeJob(job);
    if(cm.haveItem(4031857) && cm.haveItem(4031012, 1)) {
	cm.gainItem(4031857, -15);
	cm.gainItem(4031012, -1);
	cm.sendOk("#d#e��ϲ��תְ�ɹ����뿪ʼ���ð��֮�ðɣ�");
	cm.worldMessage("��תְ��Ϣ�������"+ cm.getChar().getName() +"�ɹ���תΪǹ��,���������ҵ�ף����/���ɣ�");
	cm.dispose();
	} else if (cm.haveItem(4031856) && cm.haveItem(4031012, 1)) {
	cm.gainItem(4031856, -15);
	cm.gainItem(4031012, -1);
	cm.sendOk("#d#e��ϲ��תְ�ɹ����뿪ʼ���ð��֮�ðɣ�");
	cm.worldMessage("��תְ��Ϣ�������"+ cm.getChar().getName() +"�ɹ���תΪȭ��,���������ҵ�ף����/���ɣ�");
	cm.dispose();
	} else {
	cm.removeAll(4031857);
	cm.removeAll(4031856);
	cm.removeAll(4031012);
	cm.sendOk("#d#e��ϲ��תְ�ɹ����뿪ʼ���ð��֮�ðɣ�");
	cm.worldMessage("��תְ��Ϣ�������"+ cm.getChar().getName() +"�ɹ����к�����ת,���������ҵ�ף����/���ɣ�");
	cm.dispose();
    }
}
}