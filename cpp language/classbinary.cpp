#include<iostream>
#include<string>
using namespace std;

class binary{
    private:
    string s;
    public:
    void setb(void);
    void check(void);
    void display(void);
} b;
void binary:: setb(){
    cout<<"Enter binary number"<<" ";
    cin>>s;


}
void binary :: check(){
    for(int i=0;i<s.size();i++){
        if(s.at(i)!='0' && s.at(i)!='1'){
            cout<<"Not binary number "<<"\n";
            exit(0);
        }
    }
}
void binary:: display(){
    for(int i=0;i<s.size();i++){
        cout<<s.at(i)<<" ";
    }
}
int main(){
    b.setb();
    b.check();
    b.display();
    return 0;
}