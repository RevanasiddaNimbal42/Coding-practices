
#include<iostream>
#include<string>
using namespace std;

 class student {
    int a,b;
    string name ;

    public:
    student(int x,int y,string k){//constructor called .
        a=x;  b=y;
        name=k;

    }
    void display(){
        cout<<a<<" "<<b<<"\n"<<name << '\n';
    }
    ~student(){// distructor called . 
        cout<<"Ended";

    }
} ;


int main(){
   student s(4,7,"Revanasidda");
  s.display();
  student k=s;//coping the constructor
  k.display();
   
  return 0;
}
