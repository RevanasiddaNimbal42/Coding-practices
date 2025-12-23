#include<iostream>
#include<vector>
#include<climits>
using namespace std;
class solution{
    public:
    void sumarray(vector<int> nums, int n){
        for(int st=0;st<n;st++){
            for(int end=st;end<=n;end++){
               for(int i=st;i<end;i++){
                cout<<nums[i];
               }
               cout<<" "; 
            }
            cout<<"\n";
        }
    }
    void maxsum(vector<int> nums,int n){
        int cs=0; 
         int ms=INT_MIN;
        for(int val:nums){
             cs+=val;
             ms=max(cs,ms);
            if(cs<0){               
                cs=0;
            }
        }
            cout<<ms<<"\n";
        }
        void 
        
    } ;



int main(){
    int n;
    cout<<"Enter the n value: ";
    cin>>n;
    vector<int > vec(n);
    for(int i=0;i<n;i++){
        cin>>vec[i];
    }

    solution s;
    s.maxsum(vec,n);
    return 0;

}