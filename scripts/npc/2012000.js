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
var mapNames = new Array("魔法密林", "玩具城", "神木村", "尼哈沙漠");
var mapName2 = new Array("魔法密林", "玩具城", "神木村", "尼哈沙漠");
var select;
var status = 0;

function start() {
    var where = "#d#e冒险家你好,我是天空之城通往各大岛屿的售票员,请问你现在想购买去往哪个地方的船票呢？";
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
            cm.sendYesNo("#k#e你确定要购买开往#r#e" + mapName2[select] + "#k#e的票吗？价格大概是"+cost[select]+"金币#k。请问你是否确定要购买#b#e#t"+ticket[select]+"##k？");
        } else if(status == 2) {
            if (cm.getMeso() < cost[select] || !cm.canHold(ticket[select]))
                cm.sendOk("#k#e你确定你有#b"+cost[select]+"？如果有的话，我劝您检查下身上的背包是否满了。");
            else {
                cm.gainMeso(-cost[select]);
                cm.gainItem(ticket[select],1);
            }
            cm.dispose();
        }
    }
}
