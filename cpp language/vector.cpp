#include <iostream >
#include<vector>
using namespace std ;

int main(){
    vector<int> V={4,2,5,6};
     V.push_back(8);
     V.pop_back();
     for(int i:V){
        cout<<i<<" ";
     }
     return 0;
}