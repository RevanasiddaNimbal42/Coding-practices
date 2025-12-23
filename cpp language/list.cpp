
#include <iostream>
#include<deque>//also you can use list
using namespace std;
int main(){
    deque<int> k={3,4,5};//also use list <int>
    k.push_front(8);
    k.push_back(3334);
    for(int i:k){
        cout<<i<<" ";
    }
    return 0;

    }
