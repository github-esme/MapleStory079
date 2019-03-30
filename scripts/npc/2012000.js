/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var ticket = new Array(4031047, 4031074, 4031331, 4031576);
var cost = new Array(5000, 6000, 30000, 5000, 6000);
var mapNames = new Array("ħ������", "��߳�", "��ľ��", "���ɳĮ");
var mapName2 = new Array("ħ������", "��߳�", "��ľ��", "���ɳĮ");
var select;
var status = 0;

function start() {
    var where = "#d#eð�ռ����,�������֮��ͨ�����������ƱԱ,�����������빺��ȥ���ĸ��ط��Ĵ�Ʊ�أ�";
    for (var i = 0; i < ticket.length; i++)
        where += "\r\n#L" + i + "##b" + mapNames[i] + "#k#l";
    cm.sendSimple(where);
}

function action(mode, type, selection) {
    if(mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 1) {
            select = selection;
            cm.sendYesNo("#k#e��ȷ��Ҫ������#r#e" + mapName2[select] + "#k#e��Ʊ�𣿼۸�����"+cost[select]+"���#k���������Ƿ�ȷ��Ҫ����#b#e#t"+ticket[select]+"##k��");
        } else if(status == 2) {
            if (cm.getMeso() < cost[select] || !cm.canHold(ticket[select]))
                cm.sendOk("#k#e��ȷ������#b"+cost[select]+"������еĻ�����Ȱ����������ϵı����Ƿ����ˡ�");
            else {
                cm.gainMeso(-cost[select]);
                cm.gainItem(ticket[select],1);
            }
            cm.dispose();
        }
    }
}
