#include<iostream>
#include<iomanip>
using namespace std;

class student{
    private:
    string name;
    int rollno;
    protected:
   float  marks;
   public:
   void setdata(string n,int r,float m){
    rollno=r;
    name=n;
    marks=m;
   }
  string  getname1(){
    return name;
   }
   int getrollno1(){
    return rollno;
   }

};

class student1{
    private:
    string name;
    int rollno;
    protected:
    float marks1;
    public:
    void set(string n,int r,float m){
        name=n;
        rollno=r;
        marks1=m;
    }
   string  getname2(){
        return name;
       }
       int getrollno2(){
        return rollno;
       }
};

class result: public student , public student1{
    private:
    float avg;
    public:
    
     void setall(string n1,int r1,float m1,string n2,int r2,float m2){
        setdata(n1,r1,m1);
        set(n2,r2,m2);
        avg=(m1+m2)/2;
    }
   
   
    
    void display(){
    cout<<"Student 1 details: "<<"\n  Name: "<<getname1()<<"\n  Rollno: "<<getrollno1()<<"\n  Marks: "<<marks<<'\n';
    cout<<"Student 2 details: "<<"\n  Name: "<<getname2()<<"\n  Rollno: "<<getrollno2()<<"\n  Marks: "<<marks1<<'\n';
    cout<<"Avarage marks of both students: "<<fixed<<setprecision(4)<<avg<<"\n";
}
};
int main(){
    result r;
    r.setall("Revanasidda",28,98.18,"Kartik",15,95.25);
     r.display();
    
    
   
    return 0;
}