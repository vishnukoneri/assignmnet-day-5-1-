class User {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email
        this.lucoins=0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User{
    // constructor(name,age,email){
    //     super(name,age,email);
        
        addcoins(){
            this.lucoins++;
            console.log(`${this.name} has ${this.lucoins}`);
            return this;
        }
        removecoins(){
            this.lucoins--;
            console.log(`${this.name} has ${this.lucoins}`);
            return this;
    }
}
class Admin extends Moderator{
    // constructor(name,age,email){
    //     super(name,age,email);
    addcourse(user,course){
        user.courses.push(course);
        console.log(user);
        }
    addcourse(user,course){
        user.courses.push(course);
        console.log(user);
        }
    removecourse(user){
        user.courses.pop();
        console.log(user);
    }
}
let user1 = new User('rio',34,'r.gmail.com');
let user2 = new User('tokyo',36,'t.gmail.com');
let mod = new Moderator('delhi',24,'h.gmail.com')
let admin = new Admin('denver',23,'d.gmail.com');
let users = [user1,user2,mod,admin]
mod.addcoins();
admin.addcourse(user1,'JavaScript');
admin.addcourse(user1,'python');
admin.addcourse(user1,'c++');
admin.removecourse(user1);