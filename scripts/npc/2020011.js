/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
//BY MOOGRA
/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)
	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("#d#e�����¶������������Ұɡ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getJob() == 411 || cm.getJob() == 421 || cm.getJob() == 412 || cm.getJob() == 422) {	
	    cm.sendOk("#d#e���Ѿ����й���ת�����Ѿ�û�а취�ٽ̻���ʲô�ˡ�");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJob()==410 ||cm.getJob()==420)) {
				cm.sendOk("#d#e�Ҳ������תְ�̹٣�����ȥ�����ְҵ�̹١�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("#k#e�㻹û�е�70�������ܽ��з���������תְ��");
				cm.dispose();
				return;		
            }	
			if (cm.haveItem(4031057, 1)){
                if(cm.haveItem(4031058, 1)){
				   cm.sendNext("#d#eû�뵽�㾹Ȼ��ͨ������ʥ֮ʯ�Ŀ���!,�õ�,�������Ѿ��߱�������תְ���ʸ񣡵����һ����������ת֮·��.");	
				}else{ 
                    cm.sendNext("#d#e��ϲ��ͨ����һת�̹ٵ��������Կ��鵽����������,���������ӻ�����,���������ɵ�����תְ����Ҫ�����ǻ۷���Ŀ���.");	
				}				
            } else if (!(cm.haveItem(4031057,1))) {
				cm.warp(103000003);
                cm.sendOk("#k#e����ȥ��һת�̹�#r���³#k������ڽ������ĵ�һ�׶ο����������ҡ�");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("��ļ��ܵ�����û����..");
		} else {
                cm.sendOk("�㻹����תְ...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob()==410) {
                    cm.changeJob(411);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("#e#r��ϲ��ɹ���תΪ��Ӱ�ˣ�");
					cm.worldMessage("��תְ��Ϣ������ϲ���"+ cm.getChar().getName() +"������ת��Ϊ��Ӱ�����������ҵ�ף����/���ɣ�");
                    cm.dispose();
                } else if (cm.getJob()==420) {
                    cm.changeJob(421);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("#e#r��ϲ��ɹ���תΪ���пͣ�");
					cm.worldMessage("��תְ��Ϣ������ϲ���"+ cm.getChar().getName() +"������ת��Ϊ���п����������ҵ�ף����/���ɣ�");
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("#d#e��׼���ý��ܹ����ǻ۵Ĳ��Կ�������");
            else
                cm.sendAcceptDecline("���ǣ��ҿ����������ǿ����Ȼ�����֤�����������ʵ���������֪ʶ����׼������ս����");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("#d#e�Ǻã���������ȥѩԭʥ����#b��ʥ��ʯͷ#d#e���飬֤������ǻۣ����ͨ���˰��ǻ����������ң����ʧ���ˣ������޷�������е����ε�תְ��");
                cm.dispose();
            }
        }
    }
}
