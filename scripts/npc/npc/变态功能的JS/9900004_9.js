var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			text += "\t\t\t #e#d����ӭ��������ǩ����#k \r\n\r\n\t\t\t #k���߽����ֱ�Ϊ:#k\r\n\t\t\t #r1.����ҩˮ10�� \r\n \t\t\t 2.����ҩˮ10��\r\n\t\t\t 3.����5��\r\n\t\t\t 4.��Ҷ150��\r\n\t\t\t 5.�ƽ��Ҷ10��\r\n\t\t\t 6.���=1000��\r\n\t\t\t 7.���=2000��.\r\n"
			text += "\t\t#L1##r��ȡ���ù�Ӷ����#v5030001#x1#l#k\r\n\r\n\r\n"//3
			text += "\t\t����ʱ��:#b" + cm.getPlayer().getGamePoints() + "����#k#n\t#e��ȡ����#k:#b" + cm.getPlayer().getGamePointsPD() + "��#n\r\n\r\n"		
	
			if(cm.getPlayer().getGamePoints() >= 15 && cm.getPlayer().getGamePointsPD() == 0){
					text += "\t\t#L2##r"+��ɺ�+"����ʱ�䳬��15���ӣ�"+���+"#v2000004#x30��\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 15 && cm.getPlayer().getGamePointsPD() > 0){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��15���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��15���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() == 1){
					text += "\t\t#L3##r"+��ɺ�+"����ʱ�䳬��30���ӣ�"+���+"#v2000005#x30��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() > 1){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��30���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��30���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 45 && cm.getPlayer().getGamePointsPD() == 2){
					text += "\t\t#L4##r"+��ɺ�+"����ʱ�䳬��45���ӣ�"+���+"#v5076000#x6��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 45 && cm.getPlayer().getGamePointsPD() > 2){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��45���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��45���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 3){
					text += "\t\t#L5##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v4001126#x100��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 3){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 75 && cm.getPlayer().getGamePointsPD() == 4){
					text += "\t\t#L6##r"+��ɺ�+"����ʱ�䳬��75���ӣ�"+���+"#v4000313#x20.#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 75 && cm.getPlayer().getGamePointsPD() > 4){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��75���ӣ�#l"+���+"\r\n"//3 
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��75���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 90 && cm.getPlayer().getGamePointsPD() == 5){
					text += "\t\t#L7##r"+��ɺ�+"����ʱ�䳬��90���ӣ�"+���+"���=100��#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 90 && cm.getPlayer().getGamePointsPD() > 5){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��90���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��90���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 6){
					text += "\t\t#L8##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"���=200��#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 6){
					text += "\r\n\t\t\t"+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n"//3
				} else {
					text += "\t\t\t"+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2000004, 10);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��15�������߽���������ҩˮ10��.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2000005, 10);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��30�������߽���������ҩˮ10��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5076000, 5);//��������
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��45�������߽�������������*5��.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(4001126, 150);//��Ҷ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽�������Ҷx150.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(4000313, 10);//�޻����н��
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��75�������߽������ƽ��Ҷ10��.");
            cm.dispose();
        } else if (selection == 7) {
                cm.gainNX(+1000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��90�������߽��������=1000��.");
            cm.dispose();
        } else if (selection == 8) {
                cm.gainNX(+2000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽��������=2000��.");
            cm.dispose();
		}
    }
}


