#include<iostream>
using namespace std;

class base1{
        int a;
        public:
        base1(int s):a(s){
            cout<<"Base1 class constractor called !"<<"\n";
        }
        void print(){
            cout<<"Value of A : "<<a<<"\n";
        }
};
class base2{
    int x;
    public:
    base2(int k):x(k){
        cout<<"Base2 constructor called!"<<"\n";
    }
    void print2(){
        cout<<"The value of X :"<<x<<"\n";
    }
};
class test:public base1, virtual public base2{
    int r,n;
    public:
    /*test(int a,int b,int c,int d):base1(a),base2(b){
        r=c;
        n=d;
        cout<<"Test constructor called !"<<"\n";
    }
        *///This is allso correct ;
    test(int a,int b,int c,int d):base1(a),base2(b),r(c),n(d){
    
        cout<<"Test constructor called!"<<"\n";
    }

    void dis(){
        cout<<"The value of r: "<<r<<" and n: "<<n<<"\n";
    }
};
int main(){
    test t(4,6,5,8);
    t.print();
    t.print2();
    t.dis();
    return 0;
    
}