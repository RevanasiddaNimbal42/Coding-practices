#include<iostream>
using namespace std;

class student{
    public:
    int b;
   virtual void display(){ //virtual fuction will provides to run the other 
   // fuction based on the orguments;
        cout<<"displaying base class 1 variable: "<<b<<"\n";
    }
};
class Engineer: public student{
    public:
    int e;
    void display(){
        cout<<" displaying base class 2 variable : "<<b<<"\n";
        cout<<" displaying derived class variable: "<<e<<"\n";
    }
};
int main(){
    student *ptr;
    student obj;
    Engineer obj_derived;
    ptr= &obj_derived ; //derived pointer .
    
            //initially the ptr points towards its original object
            //i,e base class objects after adding virtual to the function it will
            //run derived object ;
    
       obj_derived.e=120;
      ptr->b=34;

    ptr-> display();
    return 0;
}