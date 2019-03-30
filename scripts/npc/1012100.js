/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

var status = 0;
var jobId;
var jobName;


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
		if (cm.getJob() == 0) {
			if (cm.getPlayer().getLevel() >= 10) {
			cm.sendNext("#r#e�����Ҫ��Ϊһλ#b������#r��");
			} else {
			cm.sendOk("#d#e�ܱ�Ǹ����ĵȼ����ﲻ��תְ��Ҫ��");
			cm.dispose();
			}
		} else {
			if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) { // ������
			if (cm.haveItem(4031012, 1)) {
				if (cm.haveItem(4031012, 1)) {
				status = 20;
				cm.sendNext("#d#e���Ѿ��Ӷ�ת�̹��Ǳ߿���������˲��ԣ��������Ѿ����Խ���תְ��");
				} else {
				if (!cm.haveItem(4031010)) {
					cm.gainItem(4031010, 1);
				}
				cm.sendOk("��ȥ�� #r������תְ�̹�#k.")
				cm.dispose();
				}
			} else {
				status = 10;
				cm.sendNext("#d#eû�뵽����ô���Ѿ�30���ˣ��������Ѿ��߱���ת���ʸ������תְ��");
			}
			} else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 310 || cm.getJob() == 320) {
			if (cm.haveItem(4031059,1)) {
				cm.gainItem(4031057,1);
				cm.gainItem(4031059, -1);
				//cm.warp(211000001, 0);
				cm.sendOk("#d#e��ϲ��������ҵĿ��飬��������Դ����Ҹ����#r��������#k#dȥħ�����������ٵ����Ϲ�������ת�̹��ˣ��������ڶ��׶εĿ��顣");
			} else {
				if(cm.haveItem(4031057)){
						cm.sendOk("#e�㻹��ʲô�����𣿻���ȥ����ת�̹���");
					}
                    cm.sendOk("#d#e�þò���,û�뵽����ô���Ѿ���70����,��֪��������ɵ�����תְ.��������Ȼ��Ҫ��֤���Լ�.����ɵ�����תְ�����ռ�#r��������#d#e��#r�ǻ�����#d,���������ֶ���,����ͨ�����β��Կ���.�����ҵĵ�һ��������������ȥ#b��ɭ��������Ԫ֮��#k#d�����а��ķ���������ϻ�ȡ�ڷ�.�û�������.������������Ļ�, ��Ȱ�㻹�Ƿ���תְ����ͷ��.");
			}
			cm.dispose();
			} else {
			cm.sendOk("#d#e���,���ǹ�����һת�̹�,������������ʲô���飿");
			cm.dispose();
			}
		}
    } else if (status == 1) {
	cm.sendNextPrev("#d#eһ��תְ�˹����־Ͳ��ܷ���,�������תְ��������ҵĶԻ�.");
    } else if (status == 2) {
	cm.sendYesNo("#d#e���������һ�Σ�����Ŀ��Ǻ�Ҫ��Ϊһλ#r������#d#e��");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
		cm.changeJob(300); // ������
		cm.resetStats(4, 25, 4, 4);
	}
	cm.forceCompleteQuest(6700);
	cm.gainItem(1452002, 1);
	cm.gainItem(2060000, 1000);
	cm.sendOk("#d#eתְ�ɹ����������Ѿ���һ����������");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("#d#e�õģ������ڿ���ѡ��Ҫתְ��Ϊ#r����#k#d����#r����#k");
    } else if (status == 12) {
	cm.askAcceptDecline("#d#e����ǰ������һ���������ұ����Ȳ�����,��׼�����ˣ�");
    } else if (status == 13) {
	cm.gainItem(4031010, 1);
	//cm.warp(106010000);
	cm.sendOk("#d#e����������Ҹ�����Ƽ�����ȥ#r�Թ�ͨ��#d��#b��תתְ�̹٣�#d����������(��ȷ����ı���û����,��Ȼ���ò����ҵ��Ƽ��ŵ�)");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("#d#e����Ҫתְ��Ϊʲôְҵ�� \r\n#b\r\n#L0#����#l\r\n\r\n#L1#����#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "����";
	    job = 310;
	} else if (selection == 1) {
	    jobName = "����";
	    job = 320;
	}
	cm.sendYesNo("#d#e�����Ҫ��Ϊһλ#r"+ jobName +"#k#d#e��");
    } else if (status == 23) {
		if(job == 310){
		var jobName2 = "����";
	}else{
		jobName2 = "����";
	}
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("#d#e��ϲ��תְ�ɹ����뿪ʼ���ð��֮�ðɣ�");
	cm.worldMessage("��תְ��Ϣ�������"+ cm.getChar().getName() +"�ɹ���תΪ"+ jobName2 + ",���������ҵ�ף����/���ɣ�");
	cm.dispose();
    }
}	
