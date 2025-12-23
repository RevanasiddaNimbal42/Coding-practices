#include<iostream>
using namespace std;

class student{
    private:
    int a,b;
    public:
    void set(int a1,int a2){
        a=a1; b=a2;
    }
    friend student Revana(student k1,student k2) ;

    void get(){
        cout<<a<<" + "<<b<<" i "<<"\n";
    }
};
student Revana(student k1,student k2){
    student k3;
     k3.set((k1.a+k2.a), (k1.b+k2.b));
   return k3;
}
int main(){
    student s1,s2,sum;
    s1.set(2,4);
    s1.get();
    s2.set(3,4);
    s2.get();
     sum=Revana(s1,s2);
    sum.get();
    return 0;
}