#include<iostream>
using namespace std;
 
class student{
    protected:
    string name;
    int id;
    int exam_no;
    public:
    student(string name,int id,int exam_no){
        this->name=name;
        this->id=id;
        this->exam_no=exam_no;
    }
//    virtual void display()=0;//pure virtual function , there is no excustion of base class
// member function .
virtual void display(){} //this will excute derived class member functions .
};
class test1:public student{
    float maths;
    public:
    test1(string name,int id,int examno,float maths):student(name,id,exam_no){
        this->maths=maths;
    }
    void display(){
        cout<<"Student Name: "<<name<<" \nId: "<<id<<" \nExam_number: "<<exam_no<<"\nMaths marks: "<<maths<<"\n";
    }

};

class test2:public student{
    float physics;
    public:
    test2(string name,int id,int exam_no,float physics):student(name,id,exam_no){
        this->physics=physics;
    }
    void display(){
        cout<<"\nStudent Name: "<<name<<" \nId: "<<id<<" \nExam_number: "<<exam_no<<"\nPhysics marks: "<<physics<<"\n";
    }
    
};
int main(){
    student *ptr[2];
    test1 t1("Revanasidda",12,2025092,98.23);
    test2 t2("Parasuram",28,2004025,95.39);
    ptr[1]=&t1;
    ptr[2]=&t2;
    ptr[1]->display();
    ptr[2]->display();
    return 0;
}