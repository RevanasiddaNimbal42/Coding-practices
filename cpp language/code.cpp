#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
	long int n,si[10],ti[10];
	cin>>n;
	for(int i=1;i<=n;i++){
	    cin>>si[i]>>ti[i];
	}
	int k=0,r=0;
	for(int i=1;i<=n;i++){
	    if(si[i]>ti[i]){
	        if((si[i]-ti[i])>k){
	            k=si[i]-ti[i];
	        }
	    }else{
	        if((ti[i]-si[i])>r){
	            r=ti[i]-si[i];
	        }
	    }
	}
	if(k>r){
	    cout<<"1"<<" "<<k<<"\n";
	}else{
	    cout<<"2"<<" "<<r<<"\n";
	}
   return 0;
}
