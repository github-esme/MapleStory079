/* ���֮�� - �һ��ɾ� - ��ҩ�þ�
   ����д��Ʒ
   by:Kodan
*/
var menu = new Array("������԰", "���֮��", "�ٲ���", "������԰");
var cost = new Array(1500, 1500, 1500, 1500);
var display = "";
var btwmsg;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else if (mode == 0) {
        cm.sendNext("#k#e����㿼�Ǻ��ˣ���ʱ�������Ұɡ�");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        for (var i = 0; i < menu.length; i++) {
            if (cm.getMapId() == 200000141 && i < 1) {
                display += "\r\n#L" + i + "##r" + menu[i] + "#r#e(" + cost[i] + "���)#k";
            } else if (cm.getMapId() == 250000100 && i > 0 && i < 3) {
                display += "\r\n#L" + i + "##r" + menu[i] + "#r#e(" + cost[i] + "���)#k";
            }
        }
        if (cm.getMapId() == 200000141 || cm.getMapId() == 251000000) {
            btwmsg = "#b���֮��#k��#b������԰#k";
        } else if (cm.getMapId() == 250000100) {
            btwmsg = "#b������԰#k��#b���֮��#k";
        }
        if (cm.getMapId() == 251000000) {
            cm.sendYesNo("#k#e�����#b#e�ٲ��û�ȥ����#k#e������ø���#r#e1500���#k#e�Ҳ��������ȥ����ȷ��Ҫȥ������");
        } else {
            cm.sendSimple("#e#k������" + btwmsg + "ȥ�Ļ�����ø���Щ����Ǯ�Ҿ������ȥ�����������������ȥ����ˡ���ô����\r\n" + display);
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.sendYesNo("#k#e��ȷ��Ҫȥ#b" + menu[2] + "#k����ô��Ҫ������#b" + cost[2] + "���#k��");
        } else {
            if (cm.getMeso() < cost[selection]) {
                cm.sendNext("#k#e�ܱ�Ǹ����û���㹻��Ǯ����û�취�����ȥ��");
                cm.dispose();
            } else {
                if (cm.getMapId() == 251000000) {
                    cm.gainMeso( - cost[3]);
                    cm.warp(250000100);
                    cm.dispose();
                } else {
				if (cm.getMapId() == 200000141) {
				if(cm.getPlayer().getMeso() >= cost[selection]) {
					cm.gainMeso(- cost[2]);
					cm.warpBack(200090300,250000100,80);
					cm.dispose();
				} else {
					cm.sendOk("#k#e�ܱ�Ǹ����û���㹻��Ǯ����û�취�����ȥ��");
					cm.dispose();
					}
				} else if (cm.getMapId() == 250000100) {
					if(cm.getPlayer().getMeso() >= cost[selection]) {
					cm.gainMeso(- cost[1]);
					cm.warpBack(200090310,200000100,80);
					cm.dispose();
				} else {
					cm.sendOk("#k#e�ܱ�Ǹ����û���㹻��Ǯ����û�취�����ȥ��");
					cm.dispose();
				}
                }
            }
        }
		}
    } else if (status == 2) {
        if (cm.getMeso() < cost[2]) {
            cm.sendNext("#k#e�ܱ�Ǹ����û���㹻��Ǯ����û�취�����ȥ��");
            cm.dispose();
        } else {
            cm.gainMeso( - cost[2]);
            cm.warp(251000000);
            cm.dispose();
        }
    }
}