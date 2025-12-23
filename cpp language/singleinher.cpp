#include<iostream>
using namespace std;

class student1{
    private:
    int rollno;
     public:
    string name1;
    float marks1;
    void setname(string n){
        name1=n;
    }
    void setroll(int r){
        rollno=r;
    }
    int getroll(){
        return rollno;
    }
  
   
    
};
class student2 : public student1{
    protected:
    int roll;
    float marks2;
    string name2;
    public:
    void set(int r1,int r2,float m1,float m2,string n1,string n2){
        setname(n1);
        setroll(r1);
        name2=n2;
        roll=r2;
        marks1=m1;
        marks2=m2;
    }
    void display(){
        cout<<"student 1 details\n Name1: "<<name1<<"\n Rollno: "
        <<getroll()<<"\n Marks: "<< marks1<<"\n";
        cout<<"\n student 2 details\n Name2: "<<name2<<"\n Rollno: "
        <<roll<<"\n Marks: "<< marks2<<"\n";
    }
    
};

int main(){
    student2  k;
    k.set(12,24,98.23,97.12,"Revanasidda","Kartik");
  
    k.display();
    return 0;
}