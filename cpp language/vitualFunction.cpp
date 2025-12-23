#include<iostream>
#include<iomanip>
using namespace std;

class student{
    protected:
    int rollno;
    public:
    void set_number(int n){
        rollno=n;
    }
    void print_number(){
        cout<<"Student Details : \n";
        cout<<"  Roll_Number: "<<rollno<<"\n";
    }
};
class test:virtual public student{
    protected:
    float maths;
    float physics;

    public:
    void set_marks(float m,float n){
        maths=m;
        physics=n;
    }
    void print_marks(){
        cout<<"Marks Details: \n  Maths: "<<maths<<"\n  Physics: "<<physics<<"\n";
    }
    
};

class sports:virtual public student{
    protected:
    float score;
    public:
    void set_score(float n){
        score=n;
    }
    void print_score(){
        cout<<"  Score: "<<score<<"\n";
    }
    
};
class result:public test, public sports{
    float result;
    public:
    void display(){
        result=(maths+physics+score)/3;
       print_number();
       print_marks();
       print_score();
       
       cout<<"  Result : "<<fixed<<setprecision(2)<<result<<"%"<<'\n';
    }
};
int main(){
    result R;
    R.set_number(12);
    R.set_marks(98.23,95.45);
    R.set_score(95);
    R.display();
    return 0;
}