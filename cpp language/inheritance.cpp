//single inheritance only inheritetes with one class.
 #include<iostream>
using namespace std;

class teacher{
    protected:
    int s;

    public:
    int a;
    int b;
    teacher(){}

};
class student: protected teacher{
    public:
    student(int k,int y,int d){
        a=k;
        b=y;
        s=d;

    }
    void dis(){
        cout<<a<<" "<<b<<" "<<s<<" \n";
    }
};
int main(){
    int a,b,c;
    cout<<" Enter three no>"<<" ";
    cin>>a>>b>>c;
    student d(a,b,c);

    d.dis();
    return 0;
}