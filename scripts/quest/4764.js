var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4764)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����30�����Ի���½����");
			qm.forceCompleteQuest(4764);
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b20#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ��ȼ��ﵽ��#r20#k��������ð�յ���ϵĻ�ӭ��ĵ�����Ⱥ������Ϊ�������������Ļƽ��Ҷ5�ţ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4000313# 5��");
			qm.gainItem(4000313, 5);
			qm.forceCompleteQuest(4764);
			qm.dispose();
		} 
	}
}
