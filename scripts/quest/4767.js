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
			if(qm.getQuestStatus(4767)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����60�����Ի�ø��ཱ���");
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b50#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ��ȼ��ﵽ��#r50#k�������ڻ���ð�յ��Ѿ�����С�гɾ��ˣ�����ԱΪ�������������Ļƽ��Ҷ10��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4001126# 1000��#v4000313# 10��");
			qm.gainItem(4001126, 1000);
			qm.gainItem(4000313, 10);
			qm.forceCompleteQuest(4767);
			qm.dispose();
		} 
	}
}
