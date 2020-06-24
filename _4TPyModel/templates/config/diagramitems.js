function procesar(item,diagrama){


/////////////////////////////////////////EJEMPLO
if (diagrama=='menu'){
	if (item==13){
        window.open('../../rendergrid?grid=tables/tblsysuser','_self');
    }
    
	if (item==12){
        window.open('../../rendergrid?grid=tables/tbldocumento','_self');
    }

	if (item==10){
        window.open('../../rendergrid?grid=tables/tblbackup','_self');
    }
    if (item==14){
        window.open('/static/diagramas/index.html?diagrama=menu','_self');
    }
    
    
        if (item==17){
        window.open('/static/blocky/custom.html','_blank');
    }
    
            if (item==18){
        window.open('/static/blocky/gblocky/demos/blockfactory/index.html','_blank');
    }
    
            if (item==19){
        window.open('/static/blocky/mysql.html','_blank');
    }
    
                if (item==20){
        window.open('/static/blocky/webbuilder.html','_blank');
    }
    
    
    if (item==11){
       // window.open('../../adminzone','_self');
        
        window.parent.parent.addtabplus('adminzone');
        
    }
}

 
 

}