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
			if(qm.getQuestStatus(4769)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����71�����Ի�ø��ཱ���");
			qm.forceCompleteQuest(4769);
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b70#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ��ȼ��ﵽ��#r70#k�������Ѿ���ʽ���ǻ���ð�յ���һ�������ˣ�Ⱥ�������ص�Ϊ���еݲ裬������2000�㣬�ƽ��Ҷ10�ţ�ף���ڻ���ð�յ�����������������۷壡\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4000313# x 10�š����=100W�����=2000��");
			qm.gainItem(4000313, 10);
			qm.gainNX(2000);
			qm.gainMeso(1000000);
			qm.forceCompleteQuest(4769);
			qm.dispose();
		} 
	}
}
