//g.setTheme({fg : 0xFFFF,bg : 0,fg2 : 0xFFFF,bg2 : 0x0007,fgH : 0xFFFF,bgH : 0x02F7,dark : true});
var blueImg = {
  width : 93, height : 145, bpp : 2,
  transparent : 1,
  palette : new Uint16Array([31,65535,65535,59167]),
  buffer : require("heatshrink").decompress(atob("qoAlgoWVgIWVKqwWXioWVOasAOarJWgEMLikAhZcUgEK4IWToEK2AWV1hcToEO1ZcTCwOqLiYWCLiYWCLiZbCLiYWClRcSCwS5TCwUCLiQWCgBcSCwZcSqECCwJcSCwZcSCwZcSCwOqCwJcRqEDCwRcRCwhcRCwXALiVUCwhcQCwpcQqkACwZcQCwpcQCwPqwAWCLh4WGLiAWFLiAWB2AWCLiBWBCwhcPCwxcPgE60AWDLh9ACwpcBgIWO1gWElWACxsKCwsO0BFMoEOCwsD1CiMqEO1AWEX4JcMCxE6LhlQgWrCwpcNqkDCwxcNCwOqCwpcNCxM6f5dUgGq4AWFf5o8BCwz/NCwOACwz/MBoOwCwyiMoBqBCwyiBIpQWB0AWGG4PACxUKCxAJBaJNQh2sCw7wBIpIWB1AWHRYR0IqkC1YWIHAIuIfoIWJeIMAFw79CCxKVBFxAWBfo50DFxD9BCxLyCUY9AP4IWJP4T9QAAfqFw9QcxKjDFw7mKFxbPBcxIuKZ5guKCx0OHgK4GCxgOBwDSEoDPLAAUK1kBXArPKAAeq4AuDXALPLAAU6Fwi4OAAMD1R0DXBwuDUYa4PAAMCaQhjBCx0AlQuDUJ7SDOgShQaQSjCUKDSDIoNUUJ8CUYiKBUJ+gUYRFBgChPlYwBOgSKQFYJ0COYKKPUAJ0B0EFRQJMBABhxB4D6BgNUgSKOIQInBlWAipzQnQQBhxFBOYLOP1RtBIoJzQgWqIocQOZ8A1SLBIoMEOaL9BIoRzQlWqaIMq4FAAQJzPH4JZChQcBc5pcCgYCBLh4WBLgS2CLhyhBXIS2CLh86OYSiBLiEDaARcSgEPCARcCMQQAQLgQCCACD/CL4QAQLgMBL4QARLgL/QLgsQUR5cGgRFSCYMBUoYAQ1cAqE6IqRwBqjoQOYewipFTOYMFIqZBBgJFBRaMDOYNVIoLRR1QWBqDRSFIMVqkDIqPqwEVIqcq2EFIoMOXSCdBCwNUMIQWP0EBqtVoC6QnS4BCwNQgSnBCx6hBAAJ5CCyZ0BUZwWFOgIuOlQWEOgMKFxvqCwqjCFxnq0AWEOgMKRhcD1SxBCwlQFwK7KhwWHFwIKB4CIJBYQWFFwPqIxPqCxAuDPwJDHEIL8CFww6B3hwFFgIgBCw67BHYWvCof61RxCgoWHXYKXBAAO//4ECMoUVCw4uCh4SCAAarCCxJ1BC4xKCLRBGEAAJDC/4GCLRCNFAA4VLC5IsMC5BZLO5AVLoAA=="))
};
var redImg = {
  width : 130, height : 144, bpp : 1,
  transparent : 1,
  palette : new Uint16Array([63488,65535]),
  buffer : require("heatshrink").decompress(atob("/4AD8EAh4HEAA38C4UHB5QeBAAQhKwA5Ev4PI/APEgYxK+AQDj5SOgJjLEIYgH/hbDKgQgHJ4JbCKgYgGBQKNDIJIaCII0/Lg4pC/y1IBISMD4CkIc4owDYoprCHIQPDKIopCDAS0EKIjwCIAT2EKIhwCFAQlCCQRwGB4JlCAgJ5C/ZwEBQIkCGgIgBgf+OYRgBF4QEBB4IZCv/PHQZPCYwgJBh/zLQZ4DwAPCCgMBGATRF/ydDGAWPMAbqFGAnhCoXAZIowE/gLBwHweITsHv43B8F8bIowF4LLBv+HaAQcBOwTWBgP4v/8n/jFQUHFgLfBLYV+FgM//AqDK4KCCfgWDDgRgC/EPBYP+VgY+BBgPfRgYLBn+fIAMALo4OBFYPjIAUPK4SMFFYJcBAgXgTwwKBIAMPEoV4TwzoBIAODIAUeGBMPVYIEBg+AVowKC/EOGoTPHGAMB/8BwAPBniYCAAZsCOoY1BCwIAFDYLRCAAIjBZIJRGv7VBAAVgUQxRBUwkAjBxGAAYwDgwnBB5AwEwBxGKgoACOIwwHRAQAIQoQACOIwwIOI7XFAAJxKa4QACB5RREIBQgEOJTUFB5RiEWRJiFWRP9cohAJ/gqBUgRAJ/0f+LlDIBH+g/4v5RCIBH+gP4n/gIBcAv0PMIRAJFQMDeoZAIFQPAWYbCIFQPwv6BCh57DAgYKBvEfKAUDBQQWBMwQKBjxyBGATJFv6MCg+BSIZACbIYaCgfgv7SFB4YAD/EfaQoPHn0H+CRECoQAEj+BKAoPHSIN+KAh2CAAkD+EfKAg1CAAv8g5KCKAI1DAAl/gKhEa4ZQF4EgKAaWDAAkPHIjyBB48HFIhQBSA6LBEoiAIHQIJDMAJwIv4JDEoJwIn5AEMBJKBMBpKFYIJgHB4JADAoLRHLQJADYJIJBHQbBJBII6DOAJQHB4Q6DAoKhGDIQ6DOAJQHB4I6DOAPIWA46ESwPGUBBQDQAPhSIxwCJQQFB8FAMBChCAoPwmBQIMARmB+EMIBBgDCgMDYJl//EBSJH+EoY0BuAgGn4PDh4PBnjCHB4cHB4MPB40AgQUDB4MHIAwAFQgMBQ4QAMM4YALn4POj/gB5pzCABh4EABSpBwAQN/5AOagJwO/4PPWRiAB/6yNB4JxNB4JxNv4PBOJaPBAALjLh4PCOJQOEOJQ9CAASiIHoYwLgYPGMI4PHGA4PHGA4/HGBBfFSRJ/FAATDHB470HII70Kn6zOB4qzIgEfWZoPHQQ4vGKJKTHEA6CHEAzTIEAxOGMQ7iIaosHBhA"))
};
var greenImg =  {
  width : 142, height : 145, bpp : 1,
  transparent : 1,
  palette : new Uint16Array([2016,65535]),
  buffer : require("heatshrink").decompress(atob("/4AF/kAv4JGAA4aBn4QN+ARQHwQRNEQRHOwARPNAJ0JAAvgCAUBK58AgYQL/ARDg4RL4ARDgkAh40NEpg0EAAQjJGggRMCA0Aj6/Gg40HbA3+Q4KeDAAjGFBwMDaYYAEIZrGIIZCOIPA58JCBRqFGhZqFGhZqFCBcDCAf8CJZYEVpDVIVpBYHaYJYP+ARMEYZ7MEYgQMCIZ7MfIhGNfIZGNUAaNMfIaNNLAf4LCDUMLAhGQRppGDGhsDGiCNCPZ0fPZ4RDYRpqDCBsAv40PPgQQOYYIiGh6OJRgyCC+DVFYI0DFQMDCIsfAwoZBZIMPBQs/Gg0PSgM/bwrBHnx1CDgkBGg0AvBGBDgsHYI0BIwSGFj7OKIwosBAAccXghjFC4kHF4cDTAsDC4iTERo0OfwpeDTA04dgoMDZoxGERAkDNIpGFgJYDh7MGRpMwAwt8CJJXFahAAIg5NFABUfFQoAK/4QPQ4gAMZIwAFXok/ZwcAhAvFDol+BYl4MgodECwl/AokDdgkBCwYKBDgl/MgkGUgn/UocB/4pEKQgRBfAYpBZBQjEg46ECI7JPh63RIwbJZVZQRMLBMQAws+Aws/DAVgBQrnGSoUDFo1ASgrdChxMLCAKnCvhdLCIQnBQwcPCAr4BAAK5Bv7fDv6LFh4RC/4nBBgQbBCIoQDG4YbDCIhoCAAbxDv4RFK4YAC/gJBgZyDGhJqCDYQQDDAQRHHQppFAAR8BBIX4cYgRG4CWDUoZGHEYJoBFAZ7IAAxqDPYylJSgQAKSYTlEABJYDIxpYDPY5YJCBixDYQ4AFWIbCHI35G/I0oQCgF/Gh8BERnALBxoDAAMHEJxqMIgY1NVwYRMEQw2KEQyQJ/gQICI6/DAAyLLAAi0GK5CiI+ARJfY3we4oACj7VOERB+KYhPwgcAhDWN4EcgF4fRuA/EDOAP8RgxYEg/gj/gGRRYCj/Av4TBCJaQBEAITBCJfn/xTB4IQLGwQgMAAf5DRAA="))
};
var whiteImg = {
  width : 153, height : 145, bpp : 2,
  transparent : 0,
  palette : new Uint16Array([65535,65535,65504,65505]),
  buffer : require("heatshrink").decompress(atob("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"))
};
var blackImg =  {
  width : 152, height : 144, bpp : 1,
  transparent : 1,
  palette : new Uint16Array([0,65535]),
  buffer : require("heatshrink").decompress(atob("/4AGwAKBg4LHAAoeEh4RL8AyNEhAABj4RJ/ASGgYSJ4BsPG5AABn4RH/gSIJhHwCRCaIQQxfLXIQAGgJwQORISvJY/4OJISH8CERwASJVQ3+gC9JjwmF/EAuASImByFEYN4JRB7Bv7hFCREHAQM/cIs8VRMAj4SDAwISLh5wEM4ISKOQYSCj4SKX4f8FgROBfBiWBNAL3JAAKFCXQUDXxISEcAZPCABCYCCQZyLTARHLTAwSPg7PDCSAROXwYSPXwJ/LCS7RBCSN/eoQShn/4CUcfCSXwCUcPCSXgCSEHCWZHDgfAC4bfMCQn//wRGgf//4SFg4IBDAY3DBIYSDn4IBTowJCJgMBwA3CAAJCCAAYJCDgISCgIICIQQACBIf4CQZTCAAIsCKggvCCQQIDL4pdCCQoIDKoQACj4ICR4ISCBAYSFOASiFCQiFEv5oHDYYSFBAYSJPYISUUAiOECSRUECQazECRLkDCVbaDCRDsECSo6BCRwQBCQyEDCRKqICQoHBHQMPew4SE/zEBCQLHEM4YSEFwISCEwigDCQngCQgTCJQarEPIUBCoIAPgYSSNQYADgUAsASHIooABgwSIg7JDCRyaBCR5/BCRFwBI0fW4gSMeYJyGhwSKL4wSJaoQSHvAIFgLoECQqhGfgY5FCRBwBAARzECRF/CQYmEjwSGVAIAEJoYSGGwgADwASHNwYSOGwwSGgISDXIISQCJASDnwSDJRISEgYSCgYSMn4SDZgYSKw4SR/4SQbQISVLxt4OKIABnASRAAQS/CRb2NCX4S/CTkACRsMCR9ACQUCCRtgCQUGCX4SGuASChwSN+ASVjwSPEYM+CRv4CQV+CSP+CSEHCR38gEP/4SggIOBCSUfCRvAgP/gE/CRvgCQOAAwUAAwIAI/EDAwgSL/4SFwAGFAAvnKQsHAwgA=="))
};
if(g.theme.dark){
  var backgrounds = [blueImg, greenImg, whiteImg];
  var manaColors = ["#0000ff","#00ff00","#ffff00"];
}else{
  var backgrounds = [blackImg, blueImg, redImg, greenImg, whiteImg];
  var manaColors = ["#000000","#0000ff","#ff0000","#00ff00","#ffff00"];
}
var bgIndex = 0;
g.width = g.getWidth();
g.height = g.getHeight();

//console.log(backgrounds.length);

//var Layout = require("Layout");
//var layout = new Layout();

Graphics.prototype.setFontTreasurehuntDOYwE_20 = function(scale) {
  // Actual height 20 (19 - 0)
  this.setFontCustom(atob("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C////4AP////gA/7/q+ADwB8A8APQLwDwAvS/APAC//8A4AP//0DAAv/f0sAAvg//gAAED/8AAAAL/gAAAAL4AAAAAEAAAAAAAAAAC//8AAAv//8AAL///8AA//7/wAH4AF/AAtAAB9ADwAAD4APAAALgA8AAAtADwAAC0APQAAPAAvAAA0AA8AALAADgAA0AAEAAAAAAAAAAAAHgAFbwAv///+AD////4AP////wA/v+q/AD8EAH8APwAAfgA+AAB+AD8AAD4APwAAPgA/gAA8AC/QAHgAP/kB9AAv/+/wAA///9AAB///QAAAf/0AAAAEQAAAAAAAAAAAH/4AAAD//8AAAv//8AAH///4AA/r//wAH0fB/AAsB4B+ADwHQD8APAcALwA8BwAeADwDACwAPAcAPAA+BwA8AD8LQHQALwtA8AAOBgCQAAQAAAAAHVURWQAv///+AC////4AP////gA//+q+AD4BwC8APQDADgA8AMANADwAwAAAPQHQAAA/AcAAAD8AQAAAPwAAAAA8AAAAABgAAAAAAAAAAAAAf//QAAD///QAAv///AAH/qv+AAvAAL8ADwAAPwANAAAvAB0BQA8ALQPADwAtA8APAC0DwA4ALwOAHgAPw9A8AA/D//gAC0P/8AABAr5AAAAAAAAAH/r5rgAf///9AB////0AL+///gAYAOQeAAAA0AUAAADQAAAAANAAAAAA4AAAKADwAQA+7/rvAD////4AL////gAv+v6+ACgAAAsAAAAAAQAAAAAAAB1BUAoAH//+/gAf///+AC////4APqv+vgAQAAAKAAAAAAEAAAAAAAKQAAAAP/AAAAb3//v+v+P/////w/////9D/+v/5AFAAEAAAAAAAAAAPVaVSgA////+AC////4AP////QA////+ACUf9V4AAD/4DgAAv/0EAAH9/wAAB/i/0AAP4D/wAD+AL/gAPgAL/AA8AAL+ACAAAH8AAAAAL4AAAAAPwAAAAAfAAAAAAsAAAAAAwAAAAADAAAAAAIAAAAAAADgFBQYAP7///wA////+AD////4APuvv/wAUAQAfAAAAAA4AAAAADgAAAAAOAAAAAA9AAAAAD8AAAAAeQAAAACwAAAAAFAAL///0AA/+lbwAP/AALQA/wAAIAD9AAAAAPwAAAAA/AAAAAD9AAAAAH9AAAAAD+AAAAAH/UBQAAH///gAB////AAf///4AD//6vQAv+oAEAD/QAAAAP8AAAAAvQAAAAC0AAAAAPgAABAAfgAAsAA/QALwAB/Qb/AAB///8AAB///gAAB//8AAABqUAAAAAAAAD+pZuq/v/////k/////kD/+AAAAO/8AAAAS/8AAAAD/wAAAAH/wAAAAP/AAAAAv9AAAABv4AAAQA/0AADAD/wAANAH/AAA0AL9AADkVf9AAP///9AA////8AD5ABWQAEAAAAAAAAAAAAAAH//8AAA///4AAP+r/wAB9AH/AALgAH8AB4AAH0ALAAALgA8AAAfADwAAA8APQAADgA/QAAMAC/QAGwAL/lC9AAf//vwAA///9AAB//+QAAB//wAAAAWQAAAAAAAAAIAAAAAH1WpVVB7//////P/////4/+///+DVRfVUAMAA8AAAwADwAADQAPAAAPAA4AAA/gHAAAD/74AAAP//AAAAf/8AAAAb+AAAAAFQAAAAAAAAAAAAD//8AAA///4AAL///wAA9QL/AALgAH9AB8AAH0ALQAALgAsAAAfADwAEA8APAA8DgA/AD4NAC/AL2wAH/UP9AAf//v0AA////wAB////AAB//x8AAAagA0AAAAADQAAAAAJAAAAAAACwAAAPAPVWqr4Av////AC////0AH///8AAf/7/AAB9QAQAAHAAAAAAcABgAAB8APAAAH4B/QAAf5v/QAA////AAD//f+gAD/0v/wAHpAv/wAAAAL/0AAAAL/gAAAAH/AAAAAH8AAAAALwAAAAAPAAAAAAcAAAAAA0AAAAABQAAAAAAAP/AHwAC/+AvQAP/8C9AC2/0D0APA/gPgA8C/AvADwL8B8APA/wHgA8D/QtADwP/rwAPgv//AAvA//wAB0D/+AAAAH/QAAAABUAAAAAAAAALgAAAAA8AAAAADwAAAAAPAAAAAA8AAAAADwAAAAAPQAARQA//7//AD////8AP////gA////+AD1WQD8APAAAHwA8AAAOADwAAAQAPAAAAAA+AAAAAD8AAAAAPwAAAAA9AAAAADgAAAAAEAAAAAA4L/5AAD2//8AAP///+AA////8AD/mv/wAPkAH/AAsAAH8AAAAAL4AAAAAPwAAAAA/AAAAAD8AAAAALQAAAAAtADAAADwAOQAJPAA////8AD////4AP////0A//v//w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"), 32, atob("BgYHDQsQEwQKCAgLBgkGDA4GCwoPCwwMCwwGBgwJCwoNGREQExEQEREICBcOHRUTERUaEBYXFh0TERIKCwcKCgYSDg0PDQ0NDgcGEg0XERAPEhINExERFw4ODwYFBgoK"), 20+(scale<<8)+(2<<16));
  return this;
};

Graphics.prototype.setFontTreasurehuntDOYwE_40_N = function(scale) {
  // Actual height 40 (39 - 0)
  this.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAA8AAAAABwAAAAAHAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAB4AAAAAfwAAAAB/AAAAA/4AAAAH+AAAAB/gAAAAf4AAAAH+AAAAB/gAAAA/4AAAAP+AAAAB/wAAAA/8AAAAf/AAAAD/gAAAAf4AAAAA+AAAAADwAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAAP/wAAAB//wAAAf//wAAD///AAAf8H+AAB+AH8AAPgAHwAB4AAPgAHAAAeAA4AAB4ADgAAHgAOAAAOAA4AAB4ADgAAHgAPAAAeAA+AADwAD8AAeAAH4AD4AAf4APgAA/8H8AAD///gAAD//8AAAH//gAAAH/4AAAAAYAAAAAAAAAAAAAAAAAAAAAAAAYAABAADgAAeAAf///4AD////gAP///+AA////4ABwAADgAAAAAGAAAAAAAAAAAAAAABwAAGAAPgAA4AB8AAHgAHwAA8AA8AAHwADgAA/AAMAAP8AB4AB/4AHgAf3gAPAH8eAA8B/B4AD4P4HgAP/+AeAA//wB4AB/8AHgAD/AAPAAPgAB8AAAAAPwAAAAB+AAAAAHgAAAAAAAAAAAAAAAAAAAAABgAAPwAOAMA/AB4DwAcAHAeAA4AOD4ADgA4/AAMADn8AAwAP/wADAA/3AAcAD8cADwAPh4AeAB4HgH4AHAfB/gAAA//8AAAB//gAAAD/8AAAAH/AAAAAEAAAAAAAAAAAAAAAAAAA4AAAAADgAAAAAeAAAAAD4AAAAAPgAAAAB+AAAAAP4AAAAB/gAAAAHOAAAAA44AAAAHjgAAAA8OAGAAPg4AYAD8Dh/gAP///+AB////wAH////gAP///+AA4BwA4AAAHAAgAAAMAAAAAB4AAAAAHgAAAAAeAAAAAB4AAAAAPAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAcAPAAADwAMAAA+AAwAAP4ADAAD/AAOAA/8AA4AD/wADAAP3AAMAA8cABwADhwAfAAOHgD4AA4fAfgADh//8AAfD//gAB8P/8AAHwf/gAAeB/4AABwD/AAAAAAAAAAAAAAAAAAAf/AAAAH//AAAA//+AAAP//4AAB/5/gAAP8A/AAB/wB8AAf3ADwAD8cAPAAfDwA4AB4PADgAPA8AeAB4DwDwAPAHgPAB4Afj4APAB//AB4AD/8APgAH/AA8AAP4ADgAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAPAAAAAB4AADgAPAAA+AB8AAP4AHwAD/gAfAAf4AB8AH+AADwA/gAAPAP4AAA8D+AAADw/wAAAPP8AAAA9/AAAAD/4AAAAP+AAAAA/gAAAAD4AAAAAfAAAAAAwAAAAACAAAAAAAAAAAAAAAAAAAAAAH8AAAAA/4AAAAP/wAADh//AAA/Pw+AAH+8B4AA//AHgAH/8AeAAcHgA4ADgeADgAOB4AOAB4HwB4AHg/gPgAfn/x8AB/9//gAD/3/8AAP+P/gAAPwf4AAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAACAAfgAAcAH/gADwA//AAeAD/8ADwAf/4AeADwHgDwAeAeAfABwA4D4APADgfAA4AOD4ADgA4/AAPADn4AA+AN/AAD4A/4AAP8f+AAA///wAAB//8AAAH//gAAAH/4AAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAHAeAAAA+D4AAAB4PwAAAHg/AAAAcB4AAAAAAAAAAAAAA"), 46, atob("CxgcCxcUHhUXFxYXCw=="), 40+(scale<<8)+(1<<16));
  return this;
};

//Bluetooth on
var btOnImg = {
  width : 15, height : 22, bpp : 3,
  transparent : 2,
  buffer : E.toArrayBuffer(atob("/////H//////A/////4A/////4BH////4JI////4JJH///4J5I///4BP5I///BJ/5A//BJPP5A/4JJ5P5H4J/PL/JHBJf/5JI4JJ/7JJIBP75/ZJAJZPJ/JIBJJ5/JJHBJP/JJA4JJ/JJI/4JPJJI//4BJJA////AAH//A=="))
};
var btOffImg = {
  width : 15, height : 22, bpp : 1,
  buffer : E.toArrayBuffer(atob("AAAAwAcAGgBEAQgEEBgQIDCAIQAiACgAUABgAMABgAKACQARAEGDAPgA"))
};

//Charging symbol
var chrgOn = {
  width : 8, height : 15, bpp : 2,
  transparent : 0,
  palette : new Uint16Array([65535,65504,63488,64928]),
  buffer : E.toArrayBuffer(atob("qterVKlcrVClcLVAlVfVVA1cDVANQA3ADQAPAAwA"))
};

function draw() {
  g.clear();
  drawBackground();
  drawDate();
  drawTime();
  drawBattery();
  drawBluetooth();
  drawBatteryStatus();
}
function drawDate() {
  days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  var dateString = `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}`;
  g.setFontTreasurehuntDOYwE_20(1);
  var sm = g.stringMetrics(dateString);
  g.setColor(g.theme.fg).drawString(dateString, (g.width - sm.width) / 2, g.height - sm.height - 3);
}

function drawTime(){
  var top = 100; pad = 6; bh=48; bw=62; linew=3;
  var boxH = {x:pad,y:top,x2:pad+bw,y2:top+bh};
  var boxM = {x:g.width-pad-bw,y:top,x2:g.width-pad,y2:top+bh};
  var innerH = {x:boxH.x+linew, y:boxH.y+linew, x2:boxH.x2-linew, y2:boxH.y2-linew};
  var innerM = {x:boxM.x+linew, y:boxM.y+linew, x2:boxM.x2-linew, y2:boxM.y2-linew};
  g.setColor(manaColors[bgIndex]).fillRect(boxH).fillRect(boxM).clearRect(innerH).clearRect(innerM);

  //Draw the hour and minute
  g.setFontTreasurehuntDOYwE_40_N(1);
  var d = new Date();
  var h = `00${d.getHours()}`.slice(-2);
  var m = `00${d.getMinutes()}`.slice(-2);

  var yOffset = 1; xOffset=2;
  var mH = g.stringMetrics(h);
  var mM = g.stringMetrics(m);
  var xH = (bw - mH.width)/2 + boxH.x+xOffset;
  var yH = (bh - mH.height)/2 +boxH.y+yOffset;
  console.log `Hours: ${h}, x: ${xH}, y:${yH}`;
  var xM = (bw - mM.width)/2 + boxM.x+xOffset;
  var yM = (bh - mM.height)/2 +boxM.y+yOffset;
  g.setColor(g.theme.fg).drawString (h, xH, yH).drawString(m, xM, yM);
}

function drawBattery(){
  var pad = 6; top=pad; bh=10; bw=40; linew=1;
  var box = {x:g.width-pad-bw,y:top,x2:g.width-pad,y2:top+bh};
  var innerB = {x:box.x+linew, y:box.y+linew, x2:box.x2-linew, y2:box.y2-linew};
  var batteryFill={x:box.x+linew, y:box.y+linew, x2:(box.x-linew)+bw*E.getBattery()/100, y2:box.y2-linew};
  g.setColor(manaColors[bgIndex]).fillRect(box).clearRect(innerB).setColor(0,1,0).fillRect(batteryFill);
}

function drawBluetooth(){
  var img;
  if (NRF.getSecurityStatus().connected) {
    img=btOnImg;
  } else {
    img=btOffImg;
  }
  g.reset().drawImage(img,3,3);
}
function drawBatteryStatus(){
  var left = g.width - (20+6+4);
  var img;
  if (Bangle.isCharging()) {
    console.log("Charger connected");
    img=chrgOn;
    g.reset().drawImage(img,left, 4);
  } else {
    console.log("Charger not connected");
  }
}

function drawBackground() {
  var metrics = g.imageMetrics(backgrounds[bgIndex]);
  g.drawImage(backgrounds[bgIndex], (g.width-metrics.width)/2, 5);
}

function nextBackground() {
  bgIndex++;
  if (bgIndex > backgrounds.length - 1) bgIndex = 0;
  if (bgIndex < 0) bgIndex = backgrounds.length - 1;
}
function prevBackground() {
  bgIndex--;
  if (bgIndex > backgrounds.length - 1) bgIndex = 0;
  if (bgIndex < 0) bgIndex = backgrounds.length - 1;
}

Bangle.on("touch", function (button, xy) {
  if (button == 1) {
    prevBackground();
  } else {
    nextBackground();
  }
  draw();
});

draw();
Bangle.setLocked(false);
Bangle.setLCDPower(true);
Bangle.setUI("clock");

NRF.on('connect', draw);
NRF.on('disconnect', draw);
Bangle.on("charging", draw);

var redrawTimerId = setInterval(function(){
   draw();
}, 60000);
