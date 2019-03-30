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
    cm.sendNext("#r#e亲爱的冒险家，我是天空之城的码头引导员，请问你是否购买了想前往目的地的船票呢？");
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendSimple("#d#e请问你现在想去哪个码头？\r\n\r\n#b#L0#魔法密林#l\r\n#L1#玩具城#l\r\n#L2#神木村#l\r\n#L3#武陵#l\r\n#L4#尼哈沙漠#l\r\n#L5#圣地#l");
    else if (status == 1) {
        sel = selection;
        cm.sendNext("#k#e好的,我现在带你到#b#e#m" + (200000110 + (sel * 10)) + "#");
    } else if(status == 2){
        cm.warp(200000110 + (sel * 10));
        cm.dispose();
    }
}