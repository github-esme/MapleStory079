function enter(pi) {
    var returnMap = pi.getSavedLocation("Pachinko_port");
    if (returnMap < 0) {
        returnMap = 101000000; // to fix people who entered the fm trough an unconventional way
    }
    pi.clearSavedLocation("Pachinko_port");
    pi.warp(returnMap, 0);
    return true;
}