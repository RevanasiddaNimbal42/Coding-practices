#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main() {
	int ts;
	cin>>ts;
	while(ts--)
	{
	    long long int n,c=0;
	    cin>>n;
	    long long int a[n];
	    for(int i=0;i<n;i++)
	    {
	        cin>>a[i];
	    }
	    sort(a,a+n,greater<int>());
	    for(int i=0;i<n;i++)
	    {
	        if(a[i]!=a[i+1])
	        {
	            c=a[i]+a[i+1];
	            break;
	        }
	    }
	    cout<<c<<endl;
	}
	return 0;
}
