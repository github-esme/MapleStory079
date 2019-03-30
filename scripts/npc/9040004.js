function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#d你好 #k#h  ##e  #d我是排名系统.#k\r\n#L0##b家族排名\n\#l\r\n#L1##r等级排名\n\#l\r\n");//\r\n#L2##b金币排名#l
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
}
