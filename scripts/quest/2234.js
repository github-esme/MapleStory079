var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().getCurrentRep() > 0 && qm.getPlayer().getTotalRep() > qm.getPlayer().getCurrentRep()) {
        qm.forceCompleteQuest();
        qm.gainExp(3000);
        qm.sendNext("Good job!");
    } else {
        qm.sendNext("Please, use some Rep!");
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getPlayer().getCurrentRep() > 0 && qm.getPlayer().getTotalRep() > qm.getPlayer().getCurrentRep()) {
        qm.forceCompleteQuest();
        qm.gainExp(3000);
        qm.sendNext("Good job!");
    } else {
        qm.sendNext("Please, use some Rep!");
    }
    qm.dispose();
}