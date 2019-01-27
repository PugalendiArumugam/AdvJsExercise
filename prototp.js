//Base class
var Job = function(){
    this.pays= true;
}
//prototype method
Job.prototype.print = function(){
    console.log(this.pays ? 'Please hire me' : 'no thanks');
}
//subclass
var TechJob=function (title,pays){
    Job.call(this);
    this.title=title;
    this.pays=pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor=TechJob;

TechJob.prototype.print = function(){
    console.log(this.pays ? this.title+'job is great, Please hire me' :'I would learn JS');
}

var SoftwarePosition1 = new TechJob('JS programmer',true);
var SoftwarePosition2 = new TechJob('VB programmer',false);

console.log(SoftwarePosition1.print());
console.log(SoftwarePosition2.print());

