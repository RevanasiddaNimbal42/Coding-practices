#include<iostream>
using namespace std;

class teacher ;
class student {
    public:
    int add(int a,int b){
        return a+b;

    }
    int sum(teacher , teacher);
    int sub(teacher , teacher);

};
class teacher{
    private:
    int a,b;
    friend int student::sum(teacher , teacher) ;
    friend int student:: sub(teacher, teacher);
    public:
    void setdata(int a1,int a2){
        a=a1;
        b=a2;
    }
    void getdata(){
        cout<<a<<" "<<b<<"\n";
    }
};
int student::sum(teacher k,teacher j){
    return k.a+j.a;
}
int student::sub(teacher k, teacher j){
    return k.b-j.b;
}

int main(){
    teacher a1,a2;
    a1.setdata(5,8);
    a1.getdata();

    a2.setdata(9,7);
    a2.getdata();

    student s;
    int res=s.sum(a1,a2);
    cout<<res<<"\n";
    res=s.sub(a1,a2);
    cout<<res<<"\n";
    cout<<s.add(23,21)<<"\n";
    return 0;
}

