/*  NPC : ��Ħ����
	��ʿ 4ת ����ű�
	��ͼ���� (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
	    cm.sendOk("#k#e������������ʲô������");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("#e#k�㻹����ǿ��...���ܽ��е��Ĵ�תְ....");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 111) {  //4031343 4031344
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����ΪӢ��#l\r\n#b#L1#��������һ��#l");
		} else if(cm.getJob() == 121){
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����Ϊʥ��ʿ#l\r\n#b#L1#��������һ��#l");
		}else if(cm.getJob() == 131){
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����Ϊ����ʿ#l\r\n#b#L1#��������һ��#l");
		}else if(cm.getJob() == 2111){
		    cm.sendSimple("��ϲ�����ʸ�4ת. \r\n��������4ת��??\r\n#b#L0#�����ǿ����#l\r\n#b#L1#������һ��...#l");    
		} else {
		cm.sendOk("#e#k�Ǻðɣ����㿼�Ǻý�����ת�������ҡ�");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("#e#k�Ǻðɣ����㿼�Ǻý�����ת�������ҡ�");
	    cm.dispose();
	    return;
	}
	/*if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("��ļ��ܵ�����û����..");
	    cm.dispose();
	    return;
	}*/ else if (!cm.haveItem(4031348, 1)){
		cm.sendOk("#d#e����е��Ĵ�תְ������ȸ���#v4031348##r#z4031348##d,����Ҫ��ô��ȡ,�����Ҫ���Լ�ȥ����.");
		cm.dispose();
		return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainItem(2280003, 1);
		if (cm.getJob() == 111) {
		    cm.changeJob(112);
		    cm.teachSkill(1121001, 0, 10); 
		    cm.teachSkill(1120004, 0, 10);
		    cm.teachSkill(1121008, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף����תְΪ#bӢ��#k.#r��������һ��ð�յ���ʿ�ļ��ܲ�,ð����;���.");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��ΪӢ�����������ҵ�ף����/���ɣ�");
		} else if (cm.getJob() == 121) {
		    cm.changeJob(122);
		    cm.teachSkill(1221001, 0, 10);
		    cm.teachSkill(1220005, 0, 10);
		    cm.teachSkill(1221009, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף����תְΪ#bʥ��ʿ#k.#r��������һ��ð�յ���ʿ�ļ��ܲ�,ð����;���.");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��Ϊʥ��ʿ���������ҵ�ף����/���ɣ�");
		} else if (cm.getJob() == 131) {
		    cm.changeJob(132);
		    cm.teachSkill(1321001, 0, 10);
		    cm.teachSkill(1320005, 0, 10);
		    cm.teachSkill(1321007, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף����תְΪ#b����ʿ#k.#r��������һ��ð�յ���ʿ�ļ��ܲ�,ð����;���.");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��Ϊ����ʿ���������ҵ�ף����/���ɣ�");
		} else if (cm.getJob() == 2111) {
            cm.gainItem(4031348, -1);
            cm.changeJob(2112);
            if (cm.canHold(1142132, 1)) {
                cm.forceCompleteQuest(29927);
                cm.gainItem(1142132, 1);
            }
		    cm.sendNext("��ϲ�������ʿ�ָ���һ��¥�ˣ� ����������һЩ����С����^^");
	    } else {
		cm.sendOk("��û�ж����λ�������������һ��!");
		cm.dispose();
		return;
	    }
	}
	}
    } else if (status == 2) {
	cm.sendNextPrev("#d#e��Զ��Ҫ����������õ�����һ�ж�ȡ���������˶���...");
	cm.dispose();
    }
}