#include<iostream>
#include <map>
using namespace std;

int main(){
    map<int, string> m;
    m[1]="revana";
    m[2]="kartik";
    for(auto k:m){
    cout<<k.first<<"->"<<k.second<<"\n ";
    }
    return 0;
}