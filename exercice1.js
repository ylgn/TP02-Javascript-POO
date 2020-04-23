 var member = function(id, name, grade){
    this.id = id;
    this.name = name;
    this.grade = grade;
    member.prototype.toString = function(){
    	return this.id + " " + this.name + " " + this.grade;
            }
 }

 var team = function(){
    this.array = [];
     team.prototype.add = function(membre){
     this.array.push(membre);
     }
}
    var m = new member(3, "Yannis", "etudiant");
	var t = new team();