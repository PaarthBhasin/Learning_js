class RailwayForm{
    submit(){
        alert(this.name+"'s form has been submitted for trainno "+this.trainno+" !");
    }
    cancel(){
        alert(this.name +"'s form has been cancelled for trainno "+this.trainno+" !");
    }
    fill(name,trainno){
        this.name=name;
        this.trainno = trainno;
    }
}
let paarthForm = new RailwayForm();
paarthForm.fill("Paarth",21312);
let karanForm = new RailwayForm();
karanForm.fill("Karan",42432);

paarthForm.submit();
karanForm.submit();
karanForm.cancel();