#include<iostream>
using namespace std;

template<typename T>
T add(T a,T b){
    return a+b;
}

int main(){
    cout<<"adding integers: "<<add(5,7)<<"\n";
    cout<<"adding Float: "<<add(27.99999,56.99876)<<"\n";
    return 0;
}