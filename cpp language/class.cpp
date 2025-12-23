
#include <iostream>
using namespace std;
 
class student{
    private: 
    string name;
    string usn;
    float marks;
   protected:
    int age;
    public:
    void set(string n1,string u,float m,int a);
    void get();
    };
    void student::set(string n1,string u,float m,int a){
            name=n1;
            usn=u;
            marks=m;
            age=a;
        }
    
    void student::get(){
            cout<<name<<" "<<usn<<" "<<marks<<" "<<age<<"\n";
    }
    int main(){
        student s;
        s.set("Revanasidda ","U25UV24T029092",98.28,23);
      
        s.get();
        return 0;
    }