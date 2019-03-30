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
var status = -1;
var sel;

function start() {
    cm.sendNext("#r#e�װ���ð�ռң��������֮�ǵ���ͷ����Ա���������Ƿ�������ǰ��Ŀ�ĵصĴ�Ʊ�أ�");
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendSimple("#d#e������������ȥ�ĸ���ͷ��\r\n\r\n#b#L0#ħ������#l\r\n#L1#��߳�#l\r\n#L2#��ľ��#l\r\n#L3#����#l\r\n#L4#���ɳĮ#l\r\n#L5#ʥ��#l");
    else if (status == 1) {
        sel = selection;
        cm.sendNext("#k#e�õ�,�����ڴ��㵽#b#e#m" + (200000110 + (sel * 10)) + "#");
    } else if(status == 2){
        cm.warp(200000110 + (sel * 10));
        cm.dispose();
    }
}