function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    // Kereta Surabaya
    if(Dom == "sby"){
        if(Dom == "sby", Sub == "smr"){
            op = Money * 100000
            temp = op
        } 
        else if(Dom == "sby",Sub == "Slo"){
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
    // Kereta Semarang
    else if(Dom == "smr"){
            if(Dom == "smr", Sub == "sby"){
                op = Money * 100000
                temp = op
            } 
            else if(Dom == "smr",Sub == "Slo"){
                op = Money * 30000
                temp = op
            } 
            else if(Dom == "smr",Sub == "jgy"){
                op = Money * 70000
                temp = op
            }
            else if(Dom == "smr",Sub == "jkt"){
                op = Money * 150000
                temp = op
            } 
            else if(Dom == "smr",Sub == "bny"){
                op = Money * 300000
                temp = op
            }
    }
    // Kereta Solo
    else if(Dom == "slo"){
        if(Dom == "slo", Sub == "sby"){
            op = Money * 90000
            temp = op
        } 
        else if(Dom == "slo",Sub == "smr"){
            op = Money * 30000
            temp = op
        } 
        else if(Dom == "slo",Sub == "jgy"){
            op = Money * 50000
            temp = op
        }
        else if(Dom == "slo",Sub == "jkt"){
            op = Money * 70000
            temp = op
        } 
        else if(Dom == "slo",Sub == "bny"){
            op = Money * 250000
            temp = op
        }
    }
    // Kereta jogya
    else if(Dom == "jgy"){
        if(Dom == "jgy",Sub == "sby"){
            op = Money * 130000
            temp = op
        }
        if(Dom == "jgy",Sub == "smr"){
            op = Money * 70000
            temp = op
        }
        if(Dom == "jgy",Sub == "Slo"){
            op = Money * 50000
            temp = op
        }
        if(Dom == "jgy",Sub == "jkt"){
            op = Money * 150000
            temp = op
        }
        if(Dom == "jgy",Sub == "bny"){
            op = Money *  350000
            temp = op
        }

    }
    // Kereta jakarta
    else if(Dom == "jkt"){
        if(Dom == "jkt",Sub == "sby"){
            op = Money * 300000
            temp = op
        }
        if(Dom == "jkt",Sub == "smr"){
            op = Money * 150000
            temp = op
        }
        if(Dom == "jkt",Sub == "jgy"){
            op = Money * 150000
        }
        if(Dom == "jkt",Sub == "Slo"){
            op = Money * 70000
            temp = op
        }
        if(Dom == "jkt",Sub == "bny"){
            op = Money *  500000
            temp = op
        }
    }
    // Kereta banyuwangi
    else if(Dom == "bny"){
        if(Dom == "bny",Sub == "sby"){
            op = Money * 50000
            temp = op
        }
        if(Dom == "bny",Sub == "smr"){
            op = Money * 300000
            temp = op
        }
        if(Dom == "bny",Sub == "jgy"){
            op = Money * 350000
            temp = op
        }
        if(Dom == "bny",Sub == "jkt"){
            op = Money * 500000
            temp = op
        }
        if(Dom == "bny",Sub == "Slo"){
            op = Money *  250000
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