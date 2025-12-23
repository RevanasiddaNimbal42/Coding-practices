#include<iostream>
#include<vector> 
using namespace std;


/*int main(){
    int n;
    cin>>n;
    vector < int > vec(n);
   for(int i=0;i<n;i++){
    cin>>vec[i];
   }
   for(int i=0;i<n;i++){
    cout<<vec.at(i)<<"\n";
   }
   
    return 0;
}*/  //one type of excessing vectors and other is given below

int main(){
    int n;
    cin>>n;
     vector<int> vec;
   for(int i=0;i<n;i++){
    int x;
    cin>>x;
    vec.push_back(x);
   }
   for(int i=0;i<vec.size();i++){
    cout<<vec.at(i)<<'\n';
   }
   return 0;
}
