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
			if(qm.getQuestStatus(4765)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����40�����Ի�ø��ཱ���");
			qm.forceCompleteQuest(4765);
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b30#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ��ȼ��ﵽ��#r30#k�������Ѿ���ʽ���ǻ���ð�յ���һԱ�ˣ�Ⱥ��Ϊ�������������Ļƽ��Ҷ10�ţ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4001126# 300��#v4000313# 10��");
			qm.gainItem(4001126, 300);
			qm.gainItem(4000313, 10);
			qm.forceCompleteQuest(4765);
			qm.dispose();
		} 
	}
}
