#include <iostream>
using namespace std;

class student{
    private:
    int a=23;
    int b=12;
    public:
    void getdata(){
       cout<<a+b<<"\n";
    }
};

class teacher{
    private:
    int a;
    int b;
    public:
    void set(int n,int m){
        a=n;
        b=m;
    }
    void getdata(){
        cout<<a+b<<"\n";
    }
};
class student2:public student, public teacher{
    public:
    void display(){
        cout<<"Student 2's example is excuted \n";
        
    }
    void getdata(){
        teacher::getdata();
    }
};

    class base{
        int a=10;
        int b=20;
        public:
        void dispaly (){
            cout<<a+b<<"\n";
        }

    };
    class subclass :protected base{
        int a=90;
        int b=30;
        public:
        void dis(){
            cout<<a+b<<"\n";
        }
    };
  
    
    

int main(){
    student2 s;
    s.set(4,5);  
    s.getdata();  //ambiguity is one in which two are more classes have same 
    s.display();  //member functions in that time we need to declare which member 
                  // function is required. 
    subclass d;   //<>Always call preferd to derived classes . 
    d.dis();
    return 0;
}