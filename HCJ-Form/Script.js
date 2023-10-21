function validate(){
    var name=document.forms.Myname.value; 
    var dob=document.forms.Mydob.value; 
    var email=document.forms.Myemail.value;
    var number=document.forms.Mynumber.value;
    var status=document.form.Mystatus.value;
    var gender=document.form.Mygender.value;
    var edu=document.form.Mynedu.value; 
    var eduf=document.form.Myfield.value; 
    var occ=document.form.Myocc.value;

    var nid=document.form.Myid.value; 
    var idnum=document.form.Myidnum.value; 
    var auth=document.form.MyAuth.value;
    var state=document.form.Mystate.value;
    var issud=document.form.Myissud.value;
    var expiry=document.form.exp.value;
    var address=document.form.Myadd.value; 
    var country=document.form.MyCountry.value; 
    var city=document.form.Mycity.value;

    var ps=document.form.Myps.value; 
    var dst=document.form.MyiDst.value;
    var nat=document.form.Mynat.value;
    var fn=document.form.Myfname.value;
    var mn=document.form.Mymname.value;
    var member=document.form.Mymember.value;
    var focc=document.form.Myfocc.value; 
    var fi=document.form.Myfid.value; 
    var mi=document.form.Mymid.value;

    if (name==null || name==""){
        document.getElementById('name').innerHTML="*Fileds is Required";
        return false;
    }
    else  if (dob==null || dob==""){
        document.getElementById('dob').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (email==null || email==""){
        document.getElementById('email').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (number==null || number==""){
        alert("*Number Fileds is Required");
        return false;
    }

    else  if (gender==null || gender==""){
        document.getElementById('gender').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (status==null || status==""){
        document.getElementById('status').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (edu==null || edu==""){
        document.getElementById('edu').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (eduf==null || eduf==""){
        document.getElementById('field').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (occ==null || occ==""){
        document.getElementById('occ').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (nid==null || nid==""){
        document.getElementById('nid').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (idnum==null || idnum==""){
        document.getElementById('idnum').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (state==null || state==""){
        document.getElementById('state').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (issud==null || issud==""){
        document.getElementById('issued').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (expiry==null || expiry==""){
        document.getElementById('expiry').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (address==null || address==""){
        document.getElementById('add').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (country==null || country==""){
        document.getElementById('country').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (city==null || city==""){
        document.getElementById('city').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (ps==null || ps==""){
        document.getElementById('Ps').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (dst==null || dst==""){
        document.getElementById('dist').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (nat==null || nat==""){
        document.getElementById('nat').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (fn==null || fn==""){
        document.getElementById('fname').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (mn==null || mn==""){
        document.getElementById('manme').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (member==null || member==""){
        document.getElementById('member').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (focc==null || focc==""){
        document.getElementById('focc').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (fi==null || fi==""){
        document.getElementById('fid').innerHTML="*Fileds is Required";
        return false;
    }

    else  if (mi==null || mi==""){
        document.getElementById('mid').innerHTML="*Fileds is Required";
        return false;
    }
    else{
        return true;
    }
}