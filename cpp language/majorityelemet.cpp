#include<iostream>
#include<vector>
using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int > vec(n);
    vector<int> v;
    for(int i=0;i<n;i++){
        cin>>vec[i];
    }
    int fre=0,ans=0; 
    for(int i=0;i<n;i++){
        if(fre==0){
            ans=vec[i];
        }
        if(ans==vec[i]){
            fre++;
        }else{
            fre--;
        }
       
     }
     int count=0;
     for(int val:vec){
        if(ans==val){
            count++;
        }
     }
    if(fre>=count/2){
        cout<<ans<<"\n";
    }else{
        cout<<"-1";
    }
   return 0;
}