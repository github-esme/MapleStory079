function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#d��� #k#h  ##e  #d��������ϵͳ.#k\r\n#L0##b��������\n\#l\r\n#L1##r�ȼ�����\n\#l\r\n");//\r\n#L2##b�������#l
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
