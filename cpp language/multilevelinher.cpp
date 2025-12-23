#include<iostream>
#include<iomanip>
using namespace std;

class student{
    private:
    string name;
    int rollno;
    public:
    void setdata(string n,int r){
        rollno=r;
        name=n;
   }
   string name1(){
    return name;
   }
   int rollno1(){
    return rollno;
   }
};

class Exam: public student{
    private:
    int examno;
    public:
    void set(string n,int r,int e){
        setdata(n,r);
        examno=e;
    }
    int examno2(){
        return examno;
    }
    string name2(){
        return name1();
       }
    int rollno2(){
        return rollno1();
       }
};
class result: public Exam{
    private:
    float m1,m2;
    float avg;
    public:
    void values(string n,int r,int e,float g,float h){
        set(n,r,e);
        m1=g;
        m2=h;
        avg=(m1+m2)/2;
    }
    void display(){
        cout<<"Student Details: \n"<<"  Name: "<<name2()<<"\n  Rollno: "<<rollno2()<<"\n  Examno: "<<examno2()
        <<"\n  marks: "<<m1<<" "<<m2<<" \n  Avarage: "<<avg<<"\n";
    }
};
int main(){
    result r;
    r.values("Revanasidda",28,2025029092,98,95);
    r.display();
    return 0;
}