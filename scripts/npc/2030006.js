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
var status = 0;
var qChars = new Array ("Q1: ��ð�յ��У��ӵȼ�1���ȼ�2��Ҫ���پ���ֵ��#10#12#15#20#3",
    "Q1: ���ݲ�ְͬҵΪ�˵�1��תְ��Ҫ���������������ȷ����������һ����#սʿ 35 ����#���� 20 ����#��ʦ 20 ����#������ 25 ����#2",
    "Q1: �����﹥��ʱ�ر���쳣״̬û�б���ȷ˵��������һ����#���� �� �ƶ��ٶȽ���#��ӡ - ����ʹ�ü���#�ڰ� - �����½�#���� - ���پ���#1",
    "Q1: ���ݲ�ְͬҵ�ĵ�1��תְ�������� ����25 ��ȷ������һ����#սʿ#������#��ʦ#����#2");
var qItems = new Array( "Q2: ���й����У����������������ܵõ���ս��Ʒ����ȷ��Ӧ��ϵ�ģ�#������-����ͷ��#���� �� ������#ú�� - ճ����������#�� - ˿��#2",
    "Q2: ���й����У����������������ܵõ���ս��Ʒ�ǲ���ȷ��Ӧ��ϵ�ģ�#ƯƯ��- ������#ú�� - ú����ĭ#��ɫ��ţ - ��ɫ��ţ��#ʳ�˻�����ʳ�˻�Ҷ��#4",
    "Q2: ð�յ�������ҩƷ�У�����ҩƷ�빦Ч����ȷ��Ӧ��ϵ�ģ�#��ɫҩˮ - �ظ� 250 HP#����ҩˮ �� HP400�ָ�#?��ɫҩˮ - �ظ� 100 HP#���� �� HP400�ָ�#4",
    "Q2: ð�յ�������ҩƷ�У�����ҩˮ���Իظ�HP50%MP50%��#����ҩˮ#����ҩˮ#������#��Ȫˮ#1",
    "Q2: ð�յ�������ҩƷ�У�����ҩƷ�빦Ч�ǲ���ȷ��Ӧ��ϵ�ģ�#��ɫҩˮ - �ظ� 100 MP#����ҩˮ - �ظ� 300 MP#�峿֮¶����3000MP�ָ�#��ɫҩˮ - �ظ� 50 HP#3");
var qMobs = new Array(  "Q3: ��Ģ������ˮ�顢��ľ�����������㣬�ĸ��ǵȼ���ߵĹ��#��Ģ��#��������#��ˮ��#��ľ��#4",
    "Q3: �����û���ĸ����#Сʯ��#��ţ#����ţ#Ģ����#1",
    "Q3: ȥ���֮�ǵĴ��ϻ�����ĸ����#����#����ħ#Сʯ��#������#2",
    "Q3: �ڱ���ѩ��û���ĸ����#Ұ��#ѩ��#Сѩ��#������#4",
    "Q3: ��ɵĹ�����ʲô��#����#���߱���#Сѩ��#С����#1",
    "Q3: �ڷ������м�������NPC��˭��#����#İ����Ů��#��ķ#³��#4",
    "Q3: �����֮�ǿ�������NPC��˭��#˹Ƥ����#����#����������#����#2");
var qQuests = new Array("Q4: �����ĸ�ְҵ������ת��ְҵ��#��ʦ#����#ʥ��ʿ#����ʿ#3",
    "Q4: �ܹ�����ִ�е���������һ����#�����Ĳ���Ь#�Ϲ�ħ��#���ֵļ���#Ϊ������׼��#1",
    "Q4: Ϊ�˽���2��תְ�ռ���30�������תְ�̹ٻ�������Ʒ��ʲô#Ӣ��֤��#����#����֤��#��������#1",
    "Q4: ð�յ����������NPC��˭?#����#ϣ��#˹̹#��³˹��#2",
    "Q4: ð�յ����ĸ���˾�����#��Ѷ#ʢ��#�������#������#2",
    "Q4: ��ð�յ��еǳ���ҩ�͹�Ч��ȷ���ߵ�����һ��?#����-HP400#�ٱ�-MP1500#������-HP800#����ҩˮ-HPMP40%#1");
var qTowns = new Array( "Q5: ���ִ������Ϊ���κ��Լ��Ĳ������������Ʒ����һ��#�����ҩ#ʥˮ#����Ľ���#����ҩˮ#1",
    "Q5: �������ұ����ֵĴ���ʽ��??#��ֹ��½7��#��ֹ��½180��#���÷�ͣ#������#3",
    "Q5: �����������ﱻ�ٻ�#������̳#��߳�#���֮��#2ˮ������#1",
    "Q5: ͯ�����ұߵ�1����ͼ���ӵ������ƷΪ��#����#���Ӷ���#���װ�#����#3",
    "Q5: �ڽ���������ʿ���䲻�ܿ�����NPC��˭��#��#����#������#�׵�#4",
    "Q5: �����İ汾Ϊ��#Ver72#Ver105#Ver69#Ver79#4");
var correctAnswer = 0;

function start() {
	if (cm.haveItem(4031058, 1)) {
		cm.sendOk("#h #,���Ѿ����� #t4031058# ��Ҫ�÷���ʱ��.");
		cm.dispose();
	}
    if ((cm.haveItem(4031057, 1))) {
        cm.sendNext("#d#e�������Ѿ����˺�Զ������������׶Σ��⽫��������е�����תְ�����һ�ο��顣");
    } else{
	   cm.sendOk("������������ʲô����");
	   cm.dispose();
	}
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("#d#e��ͨ���ҵĿ��������޷�������ת�ġ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev("#d#e��ͨ���ҵ��ǻ��������Բ�����һ���ܼ򵥵����飬����Ҫ��߱�����Ĺ���ð�յ������Ϸ�����֪ʶ�������׼�����ˣ����������һ���ɡ�����ÿ��һ�δ����㶼�������1��#v4005004#��Ȼ���ҽ����������Żش�5������,��5�����ⶼ��ԣ��һ����#v4031058##r�ǻ�����#k#d��Ϊ��β���ͨ����֤��");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("#d#e��û��#k�ڰ�ˮ��#k��#d#e����������⡣");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("#d#e�ǻ۲��鿪ʼ�������ս�ɣ�#k\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e��ϲ�����ˣ��Ƿ������һ�⣿");
            else {
                cm.sendOk("#r#e�Բ��������ˡ�\r\n�ܱ�Ǹ��������ڸ���һ��#v4005004##r#e�ſ��Լ���������ս��");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("#d#e�ǻ۲��鿪ʼ�������ս�ɣ�#k\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e��ϲ�����ˣ��Ƿ������һ�⣿");
            else {
                cm.sendOk("#r#e�Բ��������ˡ�\r\n�ܱ�Ǹ��������ڸ���һ��#v4005004##r#e�ſ��Լ���������ս��");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("#d#e�ǻ۲��鿪ʼ�������ս�ɣ�#k\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e��ϲ�����ˣ��Ƿ������һ�⣿");
            else {
                cm.sendOk("#r#e�Բ��������ˡ�\r\n�ܱ�Ǹ��������ڸ���һ��#v4005004##r#e�ſ��Լ���������ս��");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("#d#e�ǻ۲��鿪ʼ�������ս�ɣ�#k\r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk("#r#e��ϲ�����ˣ��Ƿ������һ�⣿");
                status = 9;
            } else {
                cm.sendOk("#r#e�Բ��������ˡ�\r\n�ܱ�Ǹ��������ڸ���һ��#v4005004##r#e�ſ��Լ���������ս��");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("#d#e���һ�������ˣ��ǻ۲��鿪ʼ�������ս�ɣ�#k\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4031058, 1);
				//cm.warp(211000001, 0);
                cm.sendOk("#d#e��ϲ��̫ǿ���ˣ�\r\n�����ǻ�����#v4031058#�Ͻ�ȥ�����תְ�̹������ת��");
                cm.dispose();
            } else {
                cm.sendOk("#r#e̫��ϧ�ˣ���һ��Ϳ���ͨ�������ˣ�����û�£���������͡����о���������ڸ���һ��#v4005004##r#e�ſ��Լ���������ս��");
                cm.dispose();
            }
        }
    }
}
function getQuestion(qSet){
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5],10);
    correctAnswer--;
    return qLine;
}