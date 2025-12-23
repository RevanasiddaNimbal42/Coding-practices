#include<iostream>
using namespace std ;

class bankacount{
 string name;
 int  amount;
 int year;
 float interest;
 public:
 bankacount(string n,int a,int y,float i){
    name=n;
    amount=a;
    year=y;
    interest=i;
    
 }
 bankacount(string n,int a,int y,int i){
    name=n;
    amount=a;
    year=y;
    interest=i;
    
 }
  void display(){
    cout<<" Accounter: "<<name<<" Initial Amount: "<<amount<<"Year of deposite : "<<year<<" interest: "<< interest<<" Final amount:"<<amount+amount*(year*interest)<<"\n";
  }
};
int main(){
    bankacount a("Revanasidda",5000,7,2);//int will call based on which datatype is intered as a argument.
    a.display();
   
    return 0;
}
