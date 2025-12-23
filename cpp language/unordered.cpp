#include<iostream>
#include <unordered_map>
using namespace std;

int main(){
   unordered_map<int, string> m;
    m[758]="revana";
    m[3]="kartik";
    for(auto k:m){
    cout<<k.first<<"->"<<k.second<<"\n ";
    }
    return 0;
}