#include<iostream>
using namespace std;

class student{
    private:
    static int rollno;
    string name;
    public:
    void set(){
        cout<<"Enter name:"<<"\n";
       cin>>name;
     }
    void get(){
        cout<<"student: "<<name<<" ";
    }
    static void  printrollno(){
        cout<<"rollno "<<rollno<<"\n";
         rollno++;
    }
};
int  student::rollno=28;
int main(){
    student s;
    for(int i=1;i<5;i++){
        s.set();
        s.get();
        s.printrollno();
    }
    
return 0;
}