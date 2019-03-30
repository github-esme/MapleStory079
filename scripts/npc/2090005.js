/* 天空之城 - 桃花仙境 - 灵药幻境
   鹤重写作品
   by:Kodan
*/
var menu = new Array("武陵桃园", "天空之城", "百草堂", "武陵桃园");
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
        cm.sendNext("#k#e如果你考虑好了，随时回来找我吧。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        for (var i = 0; i < menu.length; i++) {
            if (cm.getMapId() == 200000141 && i < 1) {
                display += "\r\n#L" + i + "##r" + menu[i] + "#r#e(" + cost[i] + "金币)#k";
            } else if (cm.getMapId() == 250000100 && i > 0 && i < 3) {
                display += "\r\n#L" + i + "##r" + menu[i] + "#r#e(" + cost[i] + "金币)#k";
            }
        }
        if (cm.getMapId() == 200000141 || cm.getMapId() == 251000000) {
            btwmsg = "#b天空之城#k到#b武陵桃园#k";
        } else if (cm.getMapId() == 250000100) {
            btwmsg = "#b武陵桃园#k到#b天空之城#k";
        }
        if (cm.getMapId() == 251000000) {
            cm.sendYesNo("#k#e你想从#b#e百草堂回去武陵#k#e吗？那你得付我#r#e1500金币#k#e我才能送你过去，你确定要去武陵吗？");
        } else {
            cm.sendSimple("#e#k如果想从" + btwmsg + "去的话。你得给我些辛苦钱我就送你过去。我送你比起你走着去快多了。怎么样？\r\n" + display);
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.sendYesNo("#k#e你确定要去#b" + menu[2] + "#k吗？那么你要付给我#b" + cost[2] + "金币#k。");
        } else {
            if (cm.getMeso() < cost[selection]) {
                cm.sendNext("#k#e很抱歉！你没有足够的钱，我没办法送你过去。");
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
					cm.sendOk("#k#e很抱歉！你没有足够的钱，我没办法送你过去。");
					cm.dispose();
					}
				} else if (cm.getMapId() == 250000100) {
					if(cm.getPlayer().getMeso() >= cost[selection]) {
					cm.gainMeso(- cost[1]);
					cm.warpBack(200090310,200000100,80);
					cm.dispose();
				} else {
					cm.sendOk("#k#e很抱歉！你没有足够的钱，我没办法送你过去。");
					cm.dispose();
				}
                }
            }
        }
		}
    } else if (status == 2) {
        if (cm.getMeso() < cost[2]) {
            cm.sendNext("#k#e很抱歉！你没有足够的钱，我没办法送你过去。");
            cm.dispose();
        } else {
            cm.gainMeso( - cost[2]);
            cm.warp(251000000);
            cm.dispose();
        }
    }
}