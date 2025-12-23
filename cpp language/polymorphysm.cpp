//function overloading
#include<iostream>
using namespace std;

class student{
    int a,b;
    double  c;
    public:
    void set(int a,int b){
        this->a=a;
        this->b=b;
    }
    void set(int a,double c , int b){
        this->a=a;
        this->c=c;
        this->b=b;
    }
    void display(){
        cout<<"Displaying values :"<<a<<" "<<b<<" "<<c<<"\n";
    }
};
int main(){
    student s;
    s.set(34,83.76,23);
    s.display();
    return 0;
}