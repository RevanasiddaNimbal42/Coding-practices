//account system and multification of two numbers.
#include<iostream>
using namespace std;
template <class t1,class t2>
t1 add(t1 a,t2 b){
   
   return  a*b;

}
template<class T1,class T2>
class acc{
   private:
   T1 ia;
   public:
   void set(T1 k){
      ia=k;

   }
   void creadit(T2 c){
      if(c>0){
         ia+=c;
         cout<<"initial amount: "<<ia;
      }
      else{
         cout<<"invalid creadit amount!!";

      }
   }
   void withdraw(T2 w){
      if(w<=ia && w>0){
         ia-=w;
         cout<<"\nremaining amount: "<<ia<<endl;
      }else{
         cout<<"invalid withdrawal amounat";
      }
   }

};
int main(){
 cout<<"multification: " <<add<double  , float> (24,56.90)<<endl;
   acc<double,float> a;
   a.set(1000.389);
   a.creadit(3000);
  a.withdraw(200.467);

    return 0;
}