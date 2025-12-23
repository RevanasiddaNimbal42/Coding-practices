#include <iostream > 
using namespace std; 
int main (){
    int n;
    cin>>n;
     int  a[n];
    for(int i=0;i<n;i++){
       cin>>a[i];
    }
    int sum=0,p=1,k=0;
     for(int i=0;i<n;i++){
         sum=0;
        for(int j=i;j<n;j++){
            for(int k=i;k<=j;k++){
              //  cout<<a[k];
                 sum+=a[i];
                p*=a[k];
            }
            
           
            if(sum==p){
              cout<<" "<<p<<" "<<sum<< "\n";
               // cout<<sum<<" "<<p<<"\n";
                k++;
            }
            p=1;
          //  sum=0;
        }
       // cout<<"\n";
        
     }
     cout<<k<<"\n";
}