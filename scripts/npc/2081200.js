/*  NPC : ������
	��ʦ 4ת ����ű�
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
	if (!(cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231)) {
	    cm.sendOk("#k#e������������ʲô������");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("#e#k�㻹����ǿ��...���ܽ��е��Ĵ�תְ....");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 211) {
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����Ϊħ��ʦ(��,��)#l\r\n#b#L1#��������һ��#l");
		} else if(cm.getJob() == 221){
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����Ϊħ��ʦ(��,��)#l\r\n#b#L1#��������һ��#l");
		} else if(cm.getJob() == 231){
		    cm.sendSimple("#d#eһ·����������,����ɳ��Ĺ��������и���Ľ̹��Ƕ���˵����,��ɳ����ٶ���ĺܿ�.������Ѿ�ӵ�����һ��תְ�Ļ���.����úð�����ϧ.��Ȼ����תְ,�����������ҽ����������,��֤�����ʵ��.\r\n\r\n#r#L0#�����Ϊ����#l\r\n#b#L1#��������һ��#l");
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
                    
		if (cm.getJob() == 211) {
		    cm.changeJob(212);
		    cm.teachSkill(2121001,0,10);
		    cm.teachSkill(2121006,0,10);
		    cm.teachSkill(2121002,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף������תΪ#bħ��ʦ(��,��)#k#r����������һ��ð�յ���ʿ�ļ��ܲᣬð��֮·���ܳ�������������Ͱɣ�");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��Ϊħ��ʦ(��,��)���������ҵ�ף����/���ɣ�");
		} else if (cm.getJob() == 221) {
		    cm.changeJob(222);
		    cm.teachSkill(2221001,0,10);
		    cm.teachSkill(2221006,0,10);
		    cm.teachSkill(2221002,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף������תΪ#bħ��ʦ(��,��)#k#r����������һ��ð�յ���ʿ�ļ��ܲᣬð��֮·���ܳ�������������Ͱɣ�");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��Ϊħ��ʦ(��,��)���������ҵ�ף����/���ɣ�");
		} else {
		    cm.changeJob(232);
		    cm.teachSkill(2321001,0,10);
		    cm.teachSkill(2321005,0,10);
		    cm.teachSkill(2321002,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#eף������תΪ#b����#k#r����������һ��ð�յ���ʿ�ļ��ܲᣬð��֮·���ܳ�������������Ͱɣ�");
			cm.worldMessage("��תְ�챨������ϲ���"+ cm.getChar().getName() +"������ת��Ϊ�������������ҵ�ף����/���ɣ�");
		}
	    } else {
		cm.sendOk("��û�ж����λ�������������һ��!");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 2) {
	if (cm.getJob() == 212) {
	    cm.sendNextPrev("#d#e��Զ��Ҫ����������õ�����һ�ж�ȡ���������˶���...");
	} else if (cm.getJob() == 222) {
	    cm.sendNextPrev("#d#e��Զ��Ҫ����������õ�����һ�ж�ȡ���������˶���...");
	} else {
	    cm.sendNextPrev("#d#e��Զ��Ҫ����������õ�����һ�ж�ȡ���������˶���...");
	}
    } else if (status == 3) {
	cm.sendNextPrev("#d#e���Ѿ�����Ϊ��...");
	cm.dispose();
    }
}