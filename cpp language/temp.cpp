#include<iostream>
using namespace std;

template<class T1,class T2>
class revana{
public:
T1 n;
T2 m;
revana(T1 n,T2 m){
    cout<<"sum= "<<n*13+m;
}
};
int main(){
    revana<bool, double> R(12, 77.94849);
    return 0;
}