#include <iostream >
#include<set>
using namespace std;
int main(){
    multiset<int> s={2,4,4,5,2,4,74,47,84,48,84,48};
   // s.insert(6);//only set in used to sort all elements once .
   
    for(int i:s){
        cout<<i<<" ";
    }
return 0;
}