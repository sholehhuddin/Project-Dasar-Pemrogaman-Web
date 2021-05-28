// JS pesawat
function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    if(Dom == "Sby"){
        if(Dom == "Sby", Sub == "Bli"){
            op = Money * 315000
            temp = op
        } 
        else if(Dom == "Sby",Sub == "Mdn"){
            op = Money * 865000
            temp = op
        } 
        else if(Dom == "Sby",Sub == "Pon"){
            op = Money * 786900
            temp = op
        }
        else if(Dom == "Sby",Sub == "jkt"){
            op = Money * 488800
            temp = op
        } 
        else if(Dom == "Sby",Sub == "Plg"){
            op = Money * 664800
            temp = op
        }
    }
    else if(Dom == "Bli"){
        if(Dom == "Bli",Sub == "Sby"){
            op = Money * 314000
            temp = op
        }
        if(Dom == "Bli",Sub == "Mdn"){
            op = Money * 990500
            temp = op
        }
        if(Dom == "Bli",Sub == "Pon"){
            op = Money * 1002100
            temp = op
        }
        if(Dom == "Bli",Sub == "jkt"){
            op = Money * 573600
            temp = op
        }
        if(Dom == "Bli",Sub == "Plg"){
            op = Money * 855800
            temp = op
        }

    }
    else if(Dom == "Mdn"){
        if(Dom == "Mdn",Sub == "Sby"){
            op = Money * 864000
            temp = op
        }
        if(Dom == "Mdn",Sub == "Bli"){
            op = Money * 990500
            temp = op
        }
        if(Dom == "Mdn",Sub == "Pon"){
            op = Money * 933300
            temp = op
        }
        if(Dom == "Mdn",Sub == "jkt"){
            op = Money * 694600
            temp = op
        }
        if(Dom == "Mdn",Sub == "Plg"){
            op = Money * 786500
            temp = op
        }

    }
    else if(Dom == "Pon"){
        if(Dom == "Pon",Sub == "Sby"){
            op = Money * 652700
            temp = op
        }
        if(Dom == "Pon",Sub == "Bli"){
            op = Money * 866700
            temp = op
        }
        if(Dom == "Pon",Sub == "Mdn"){
            op = Money * 923300
            temp = op
        }
        if(Dom == "Pon",Sub == "jkt"){
            op = Money * 518500
            temp = op
        }
        if(Dom == "Pon",Sub == "Plg"){
            op = Money * 800700
            temp = op
        }

    }
    else if(Dom == "jkt"){
        if(Dom == "jkt",Sub == "Sby"){
            op = Money * 472800
            temp = op
        }
        if(Dom == "jkt",Sub == "Bli"){
            op = Money * 558600
            temp = op
        }
        if(Dom == "jkt",Sub == "Pon"){
            op = Money * 513500
            temp = op
        }
        if(Dom == "jkt",Sub == "Mdn"){
            op = Money * 679600
            temp = op
        }
        if(Dom == "jkt",Sub == "Plg"){
            op = Money *  367200
            temp = op
        }

    }
    else if(Dom == "Plg"){
        if(Dom == "Plg",Sub == "Sby"){
            op = Money * 760000
            temp = op
        }
        if(Dom == "Plg",Sub == "Bli"){
            op = Money * 845800
            temp = op
        }
        if(Dom == "Plg",Sub == "Pon"){
            op = Money * 800700
            temp = op
        }
        if(Dom == "Plg",Sub == "jkt"){
            op = Money * 372200
            temp = op
        }
        if(Dom == "Plg",Sub == "Mdn"){
            op = Money * 776500
            temp = op
        }

    }
    return temp
}
    
function klik2(){
    var mny = document.getElementById("jumlah2").value
    var dom = document.getElementById("Dom").value
    var sub = document.getElementById("Sub").value
    var hasil = convert(dom,sub,mny)
    document.getElementById("hasil2").innerHTML = hasil
}
