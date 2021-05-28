// JS Kasir Bis
function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    // BusSurabaya
    if(Dom == "sby"){
        if(Dom == "sby", Sub == "smr"){
            op = Money * 100000
            temp = op
        } 
        else if(Dom == "sby",Sub == "slo"){
            op = Money * 90000
            temp = op
        } 
        else if(Dom == "sby",Sub == "jgy"){
            op = Money * 130000
            temp = op
        }
        else if(Dom == "sby",Sub == "jkt"){
            op = Money * 300000
            temp = op
        } 
        else if(Dom == "sby",Sub == "bny"){
            op = Money * 50000
            temp = op
        }
    }
    // Bus Semarang
    else if(Dom == "smr"){
        if(Dom == "smr",Sub == "sby"){
            op = Money * 45000
            temp = op
        }
        if(Dom == "smr",Sub == "slo"){
            op = Money * 30000
            temp = op
        }
        if(Dom == "smr",Sub == "jgy"){
            op = Money * 40000
            temp = op
        }
        if(Dom == "smr",Sub == "jkt"){
            op = Money * 100000
            temp = op
        }
        if(Dom == "smr",Sub == "bny"){
            op = Money *  200000
            temp = op
        }

    }
    else if(Dom == "slo"){
        if(Dom == "slo",Sub == "sby"){
            op = Money * 80000
            temp = op
        }
        if(Dom == "slo",Sub == "smr"){
            op = Money * 30000
            temp = op
        }
        if(Dom == "slo",Sub == "jgy"){
            op = Money * 10000
            temp = op
        }
        if(Dom == "slo",Sub == "jkt"){
            op = Money * 150000
            temp = op
        }
        if(Dom == "slo",Sub == "bny"){
            op = Money *  190000
            temp = op
        }

    }
    else if(Dom == "jgy"){
        if(Dom == "jgy",Sub == "sby"){
            op = Money * 70000
            temp = op
        }
        if(Dom == "jgy",Sub == "smr"){
            op = Money * 60000
            temp = op
        }
        if(Dom == "jgy",Sub == "slo"){
            op = Money * 10000
            temp = op
        }
        if(Dom == "jgy",Sub == "jkt"){
            op = Money * 150000
            temp = op
        }
        if(Dom == "jgy",Sub == "bny"){
            op = Money *  190000
            temp = op
        }

    }
    else if(Dom == "jkt"){
        if(Dom == "jkt",Sub == "sby"){
            op = Money * 150000
            temp = op
        }
        if(Dom == "jkt",Sub == "smr"){
            op = Money * 100000
            temp = op
        }
        if(Dom == "jkt",Sub == "jgy"){
            op = Money * 110000
            temp = op
        }
        if(Dom == "jkt",Sub == "slo"){
            op = Money * 95000
            temp = op
        }
        if(Dom == "jkt",Sub == "bny"){
            op = Money *  250000
            temp = op
        }

    }
    else if(Dom == "bny"){
        if(Dom == "bny",Sub == "sby"){
            op = Money * 50000
            temp = op
        }
        if(Dom == "bny",Sub == "smr"){
            op = Money * 70000
            temp = op
        }
        if(Dom == "bny",Sub == "jgy"){
            op = Money * 75000
            temp = op
        }
        if(Dom == "bny",Sub == "jkt"){
            op = Money * 250000
            temp = op
        }
        if(Dom == "bny",Sub == "slo"){
            op = Money *  65000
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